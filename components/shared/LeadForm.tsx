"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { ArrowRight, CheckCircle, Lock } from "lucide-react";
import {
  getLeadFormEndpoint,
  LEAD_SUBJECT,
  SPLITFORMS_ACCESS_KEY,
  submitLeadForm,
  trackLeadEvent,
} from "@/lib/lead-tracking";
import { PhoneField, toE164 } from "@/components/forms/PhoneField";

declare global {
  interface Window {
    grecaptcha?: {
      render: (el: HTMLElement, opts: { sitekey: string; size?: string }) => number;
      getResponse: (id?: number) => string;
      reset: (id?: number) => void;
    };
  }
}

// Public reCAPTCHA v2 site key (safe to ship in the page). The SECRET key is
// NEVER in client code — it lives only in the SplitForms dashboard, which
// verifies the token server-side and rejects any submission (e.g. a bot POSTing
// straight to the API) that doesn't carry a valid token.
const RECAPTCHA_SITE_KEY = "6LdheAstAAAAAJ1wm8kCj4gF6BzrTXZZQU33xVQp";

const serviceTypes = [
  "Inbound",
  "Outbound",
  "Live Chat / Automated",
  "Back Office / Social",
  "Other or Combination",
];

const solutionTypes = [
  "Customer Support",
  "Lead Generation",
  "Market Research",
  "Appointment Setting",
  "Tech Support",
  "Email Response Management",
  "Other or Combination",
];

// After a successful submit the thank-you shows, then the empty form comes
// back on its own so the visitor never has to reload to send another inquiry.
const RESET_AFTER_MS = 6000;

const agentOptions = ["5-25", "25-50", "50-100", "100+"];
const volumeOptions = ["0-5,000", "5,000-20,000", "20,000-100,000", "100,000-500,000", "500,000+"];
const scheduleOptions = ["24/7", "Monday-Friday", "Weekdays + Saturday", "Custom Schedule"];

const inputClass =
  "h-11 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none transition-colors focus:border-red focus:ring-2 focus:ring-red/20";
const selectClass =
  "h-11 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm outline-none transition-colors focus:border-red focus:ring-2 focus:ring-red/20";

type LeadFormProps = {
  title?: string;
  description?: string;
  ctaLocation?: string;
  leadOffer?: string;
  formName?: string;
  submitLabel?: string;
  /** When false, renders the bare form without the white card wrapper. */
  card?: boolean;
  className?: string;
};

export function LeadForm({
  title,
  description,
  ctaLocation = "lead_form",
  leadOffer = "General call center quote",
  formName = "lead_form",
  submitLabel = "Submit Inquiry",
  card = true,
  className = "",
}: LeadFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [thanksName, setThanksName] = useState("");
  // Bumped on every success so the form (and the PhoneField's own state)
  // remounts empty when it comes back.
  const [formKey, setFormKey] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Set<string>>(new Set());
  const [redirectTo, setRedirectTo] = useState("/contact");
  const [captchaError, setCaptchaError] = useState("");
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  // Google's reCAPTCHA bundle is ~390 KB (script + stylesheet + a Roboto face it
  // pulls from fonts.gstatic.com) and it was loading on every page view, for a
  // form the overwhelming majority of visitors never touch. It now loads on the
  // first real signal of intent — hovering, tapping or tabbing into the form —
  // which is well before anyone can finish typing, and never at all for readers
  // who just read the article.
  const [captchaArmed, setCaptchaArmed] = useState(false);
  const armCaptcha = () => setCaptchaArmed(true);

  useEffect(() => {
    // No-JS fallback only: SplitForms sends the browser back to this page.
    // The submitted state is never kept in the URL, so the form always loads empty.
    setRedirectTo(window.location.pathname);
  }, []);

  // Bring the empty form back automatically a few seconds after a success.
  useEffect(() => {
    if (!isSubmitted) return;
    const id = window.setTimeout(() => setIsSubmitted(false), RESET_AFTER_MS);
    return () => window.clearTimeout(id);
  }, [isSubmitted]);

  // Render the reCAPTCHA widget once the API script is ready. Polling covers
  // first load, client-side navigation, and the cached-script case.
  //
  // The poll runs for ~60s (was 10s). On a slow mobile connection Google's
  // script routinely takes longer than 10s, and if the widget never rendered
  // the old code still demanded a token on submit — leaving a real buyer
  // staring at "complete the verification" with no checkbox on the page and no
  // way to send the form. See the fail-open branch in handleSubmit.
  useEffect(() => {
    if (!captchaArmed || isSubmitted) return;
    let tries = 0;
    const id = window.setInterval(() => {
      const g = window.grecaptcha;
      if (g?.render && recaptchaRef.current && widgetIdRef.current === null) {
        try {
          widgetIdRef.current = g.render(recaptchaRef.current, {
            sitekey: RECAPTCHA_SITE_KEY,
          });
        } catch {
          /* already rendered */
        }
        window.clearInterval(id);
      }
      if (++tries > 300) window.clearInterval(id);
    }, 200);
    return () => window.clearInterval(id);
  }, [captchaArmed, isSubmitted, formKey]);

  // Only reset a widget we actually rendered. `reset(undefined)` targets the
  // first widget on the page, which throws when none exists.
  const resetCaptcha = () => {
    if (widgetIdRef.current !== null) {
      try {
        window.grecaptcha?.reset(widgetIdRef.current);
      } catch {
        /* widget went away — nothing to reset */
      }
    }
  };

  const errorRing = (name: string) =>
    errors.has(name) ? " !border-red ring-2 ring-red/20" : "";

  const clearFieldError = (e: React.ChangeEvent<HTMLFormElement>) => {
    const target = e.target;
    if (
      !(target instanceof HTMLInputElement) &&
      !(target instanceof HTMLSelectElement) &&
      !(target instanceof HTMLTextAreaElement)
    ) {
      return;
    }
    if (target.name && errors.has(target.name) && target.checkValidity()) {
      setErrors((prev) => {
        const next = new Set(prev);
        next.delete(target.name);
        return next;
      });
    }
  };

  const markFieldInvalid = (e: React.InvalidEvent<HTMLFormElement>) => {
    const target = e.target;
    if (
      !(target instanceof HTMLInputElement) &&
      !(target instanceof HTMLSelectElement) &&
      !(target instanceof HTMLTextAreaElement)
    ) {
      return;
    }
    if (target.name) {
      setErrors((prev) => new Set(prev).add(target.name));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      const invalid = new Set<string>();
      let firstInvalid:
        | HTMLInputElement
        | HTMLSelectElement
        | HTMLTextAreaElement
        | null = null;
      for (const el of Array.from(form.elements) as (
        | HTMLInputElement
        | HTMLSelectElement
        | HTMLTextAreaElement
      )[]) {
        if (el.name && typeof el.checkValidity === "function" && !el.checkValidity()) {
          invalid.add(el.name);
          if (!firstInvalid) firstInvalid = el;
        }
      }
      setErrors(invalid);
      form.reportValidity();
      firstInvalid?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    // reCAPTCHA. Two cases, deliberately handled differently:
    //
    //  1. The widget rendered -> the visitor must tick it. Blocking here is
    //     correct: the checkbox is on screen and they can act on the message.
    //  2. The widget never rendered (script slow, blocked, or unreachable) ->
    //     FAIL OPEN and submit without a token. Blocking here just silently
    //     destroys a real lead, because there is nothing on the page for the
    //     visitor to complete. The honeypot below still runs and SplitForms
    //     still screens server-side, so this trades a little spam risk for
    //     leads we were otherwise losing outright.
    let token = "";
    if (widgetIdRef.current !== null && window.grecaptcha) {
      token = window.grecaptcha.getResponse(widgetIdRef.current);
      if (!token) {
        setCaptchaError("Please complete the “I'm not a robot” check above.");
        recaptchaRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
    }

    setCaptchaError("");
    setErrors(new Set());
    setIsSubmitting(true);

    const formData = new FormData(form);
    // Phone: post dial code + national digits as one E.164-style value
    // ("+14035551234") under the same phone_number field.
    const phoneInput = form.elements.namedItem("phone_number") as HTMLInputElement | null;
    const phone = phoneInput
      ? toE164(phoneInput.dataset.dialCode ?? "", phoneInput.value)
      : null;
    if (!phone) {
      setErrors(new Set(["phone_number"]));
      setIsSubmitting(false);
      phoneInput?.focus();
      return;
    }
    formData.set("phone_number", phone);
    if (token) formData.set("g-recaptcha-response", token);
    // The website field accepts whatever the visitor types — a full URL, a bare
    // domain, or plain text. Only prepend https:// to something that actually
    // looks like a bare domain (a dot, no spaces); leave free text untouched.
    const companyUrl = (formData.get("company_url") ?? "").toString().trim();
    if (
      companyUrl &&
      !/^https?:\/\//i.test(companyUrl) &&
      /^\S+\.\S+$/.test(companyUrl)
    ) {
      formData.set("company_url", `https://${companyUrl}`);
    }

    // Attribution
    const params = new URLSearchParams(window.location.search);
    formData.set(
      "source_page",
      params.get("source_page") ?? `${window.location.pathname}${window.location.search}`,
    );
    formData.set("cta_location", params.get("cta_location") ?? ctaLocation);
    formData.set("lead_offer", params.get("lead_offer") ?? leadOffer);
    formData.set("submitted_at", new Date().toISOString());

    try {
      const { data, response } = await submitLeadForm(formData);
      if (response.ok && data.success === true) {
        // Partial-lead tracker (splitforms embed.js): the lead landed, so don't
        // also send what was typed as a partial. Optional — never blocks.
        try {
          (window as Window & { splitforms?: { done?: (f: HTMLFormElement) => void } })
            .splitforms?.done?.(form);
        } catch {
          /* lead already delivered */
        }
        trackLeadEvent("lead_form_submit", {
          cta_location: formData.get("cta_location")?.toString(),
          form_name: formName,
          lead_offer: formData.get("lead_offer")?.toString(),
          source_page: formData.get("source_page")?.toString(),
        });
        const firstName = (formData.get("full_name") ?? "").toString().trim().split(/\s+/)[0] ?? "";
        form.reset();
        resetCaptcha();
        // The widget lives inside the form, which unmounts for the thank-you;
        // a fresh one is rendered when the form comes back.
        widgetIdRef.current = null;
        setErrors(new Set());
        setCaptchaError("");
        setThanksName(firstName);
        setFormKey((k) => k + 1);
        setIsSubmitted(true);
      } else {
        setCaptchaError(
          data.message || "Something went wrong. Please try again, or email us directly.",
        );
        resetCaptcha();
      }
    } catch {
      setCaptchaError(
        "Something went wrong. Please try again, or email us directly.",
      );
      resetCaptcha();
    } finally {
      setIsSubmitting(false);
    }
  };

  const wrapperClass = card
    ? `rounded-2xl border border-gray-100 bg-white p-5 shadow-xl lg:p-6 ${className}`
    : className;

  return (
    <div
      className={wrapperClass}
      onPointerEnter={armCaptcha}
      onPointerDown={armCaptcha}
      onFocusCapture={armCaptcha}
    >
      <Script src="https://splitforms.com/embed.js" strategy="afterInteractive" />
      {captchaArmed && (
        <Script
          src="https://www.google.com/recaptcha/api.js?render=explicit"
          strategy="afterInteractive"
        />
      )}
      {title && <h3 className="text-xl font-bold text-navy">{title}</h3>}
      {description && <p className="mt-1 text-sm text-gray-600">{description}</p>}

      {isSubmitted ? (
        <div className="flex flex-col items-center py-12 text-center">
          <CheckCircle className="h-14 w-14 text-green-500" />
          <p className="mt-4 text-xl font-bold text-navy">
            {thanksName ? `Thanks, ${thanksName}!` : "Thanks!"}
          </p>
          <p className="mt-1 text-sm text-gray-700">
            Your inquiry has been received. One of our representatives will reach out to you.
          </p>
          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-red px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-red-dark"
          >
            Submit another inquiry
          </button>
        </div>
      ) : (
        <form
          key={formKey}
          action={getLeadFormEndpoint()}
          method="POST"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
          onChange={clearFieldError}
          onInvalid={markFieldInvalid}
          className={`@container ${title || description ? "mt-5 " : ""}space-y-3.5`}
        >
          {errors.size > 0 && (
            <div
              role="alert"
              className="rounded-xl border border-red/30 bg-red/5 px-4 py-3 text-sm font-medium text-red-dark"
            >
              Please complete the highlighted fields below.
            </div>
          )}

          <input type="hidden" name="subject" value={LEAD_SUBJECT} />
          <input type="hidden" name="access_key" value={SPLITFORMS_ACCESS_KEY} />
          <input type="hidden" name="redirect" value={redirectTo} />
          <input type="hidden" name="source_page" />
          <input type="hidden" name="cta_location" />
          <input type="hidden" name="lead_offer" />
          <input type="hidden" name="submitted_at" />

          {/*
            Honeypot — hidden from people, irresistible to bots. It's a checkbox,
            so a real (unchecked) submission never sends it; a bot that fills the
            form ticks it and SplitForms (Honeypot: Basic) drops the lead.
          */}
          <input
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
            style={{ display: "none" }}
          />

          {/* Labels hidden — placeholders carry the field names. */}
          {/* Name & Company */}
          <div className="grid grid-cols-1 gap-4 @sm:grid-cols-2">
            <input
              name="full_name"
              required
              aria-label="Name"
              placeholder="Name *"
              className={inputClass + errorRing("full_name")}
            />
            <input
              name="company_name"
              required
              aria-label="Company name"
              placeholder="Company name *"
              className={inputClass + errorRing("company_name")}
            />
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 gap-4 @sm:grid-cols-2">
            <input
              name="work_email"
              type="email"
              required
              aria-label="Company email"
              placeholder="Company email *"
              className={inputClass + errorRing("work_email")}
            />
            <PhoneField name="phone_number" invalid={errors.has("phone_number")} />
          </div>

          {/* Website & Solution Type */}
          <div className="grid grid-cols-1 gap-4 @sm:grid-cols-2">
            <input
              name="company_url"
              type="text"
              inputMode="url"
              required
              aria-label="Company website"
              placeholder="Company website *"
              className={inputClass + errorRing("company_url")}
            />
            <select
              name="solution_type"
              required
              aria-label="Solution type"
              defaultValue=""
              className={selectClass + errorRing("solution_type")}
            >
              <option value="">Solution type *</option>
              {solutionTypes.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Service Type & Agent Requirements */}
          <div className="grid grid-cols-1 gap-4 @sm:grid-cols-2">
            <select
              name="service_type"
              required
              aria-label="Call center services type"
              defaultValue=""
              className={selectClass + errorRing("service_type")}
            >
              <option value="">Service type *</option>
              {serviceTypes.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <select
              name="agent_requirement"
              required
              aria-label="Agent requirements"
              defaultValue=""
              className={selectClass + errorRing("agent_requirement")}
            >
              <option value="">Agent requirements *</option>
              {agentOptions.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>

          {/* Call Volume & Operating Schedule */}
          <div className="grid grid-cols-1 gap-4 @sm:grid-cols-2">
            <select
              name="call_volume"
              required
              aria-label="Call volume"
              defaultValue=""
              className={selectClass + errorRing("call_volume")}
            >
              <option value="">Call volume / month *</option>
              {volumeOptions.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
            <select
              name="operating_schedule"
              required
              aria-label="Operating schedule"
              defaultValue=""
              className={selectClass + errorRing("operating_schedule")}
            >
              <option value="">Operating schedule *</option>
              {scheduleOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Comments */}
          <textarea
            name="additional_comments"
            rows={2}
            required
            placeholder="Additional comments *"
            aria-label="Additional comments"
            className={"w-full rounded-xl border border-gray-200 p-3 text-sm outline-none transition-colors focus:border-red focus:ring-2 focus:ring-red/20" + errorRing("additional_comments")}
          />

          {/* reCAPTCHA v2 — token is verified server-side by SplitForms */}
          <div
            ref={recaptchaRef}
            className="min-h-[68px] origin-top-left scale-[0.85] @[300px]:scale-100 @[300px]:min-h-[78px]"
          />

          {captchaError && (
            <div
              role="alert"
              className="rounded-xl border border-red/30 bg-red/5 px-4 py-3 text-sm font-medium text-red-dark"
            >
              {captchaError}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            aria-label="Submit form"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-red py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-red-dark disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : submitLabel}
            {!isSubmitting && <ArrowRight className="h-4 w-4" />}
          </button>

          <p className="flex items-center justify-center gap-1.5 text-sm text-gray-600">
            <Lock className="h-3 w-3" />
            Your details are used only to respond to this inquiry.
          </p>
        </form>
      )}
    </div>
  );
}
