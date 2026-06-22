"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { ArrowRight, CheckCircle, Lock } from "lucide-react";
import {
  getLeadFormEndpoint,
  SPLITFORMS_ACCESS_KEY,
  submitLeadForm,
  trackLeadEvent,
} from "@/lib/lead-tracking";

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
  subject?: string;
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
  subject = "Website Inquiry — ContactCenterUSA.com",
  ctaLocation = "lead_form",
  leadOffer = "General call center quote",
  formName = "lead_form",
  submitLabel = "Submit Inquiry",
  card = true,
  className = "",
}: LeadFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Set<string>>(new Set());
  const [redirectTo, setRedirectTo] = useState("/contact?submitted=1");
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("submitted") === "1") setIsSubmitted(true);
    setRedirectTo(`${window.location.pathname}?submitted=1`);
  }, []);

  // Render the reCAPTCHA widget once the API script is ready. Polling covers
  // first load, client-side navigation, and the cached-script case.
  useEffect(() => {
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
      if (++tries > 50) window.clearInterval(id);
    }, 200);
    return () => window.clearInterval(id);
  }, []);

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

    // reCAPTCHA: must be solved. The token is verified by SplitForms (secret
    // key) — a bot POSTing directly has no valid token and is rejected.
    const token =
      window.grecaptcha && widgetIdRef.current !== null
        ? window.grecaptcha.getResponse(widgetIdRef.current)
        : "";
    if (!token) {
      alert("Please complete the “I'm not a robot” verification.");
      return;
    }

    setErrors(new Set());
    setIsSubmitting(true);

    const formData = new FormData(form);
    formData.set("g-recaptcha-response", token);
    const companyUrl = (formData.get("company_url") ?? "").toString().trim();
    if (companyUrl && !/^https?:\/\//i.test(companyUrl)) {
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
      if (response.ok && data.success) {
        trackLeadEvent("lead_form_submit", {
          cta_location: formData.get("cta_location")?.toString(),
          form_name: formName,
          lead_offer: formData.get("lead_offer")?.toString(),
          source_page: formData.get("source_page")?.toString(),
        });
        setIsSubmitted(true);
      } else {
        alert("Error: " + (data.message || "Something went wrong. Please try again."));
        window.grecaptcha?.reset(widgetIdRef.current ?? undefined);
      }
    } catch {
      alert("Something went wrong. Please try again.");
      window.grecaptcha?.reset(widgetIdRef.current ?? undefined);
    } finally {
      setIsSubmitting(false);
    }
  };

  const wrapperClass = card
    ? `rounded-2xl border border-gray-100 bg-white p-5 shadow-xl lg:p-6 ${className}`
    : className;

  return (
    <div className={wrapperClass}>
      <Script
        src="https://www.google.com/recaptcha/api.js?render=explicit"
        strategy="afterInteractive"
      />
      {title && <h3 className="text-xl font-bold text-navy">{title}</h3>}
      {description && <p className="mt-1 text-sm text-gray-600">{description}</p>}

      {isSubmitted ? (
        <div className="flex flex-col items-center py-12 text-center">
          <CheckCircle className="h-14 w-14 text-green-500" />
          <p className="mt-4 text-xl font-bold text-navy">Thank You!</p>
          <p className="mt-1 text-sm text-gray-700">
            Your message has been sent. We&apos;ll contact you within 1 working day.
          </p>
        </div>
      ) : (
        <form
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

          <input type="hidden" name="form_subject" value={subject} />
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
            <input
              name="phone_number"
              type="tel"
              required
              aria-label="Phone number"
              placeholder="Phone number *"
              className={inputClass + errorRing("phone_number")}
            />
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
            placeholder="Additional comments (optional)"
            aria-label="Additional comments"
            className="w-full rounded-xl border border-gray-200 p-3 text-sm outline-none transition-colors focus:border-red focus:ring-2 focus:ring-red/20"
          />

          {/* reCAPTCHA v2 — token is verified server-side by SplitForms */}
          <div
            ref={recaptchaRef}
            className="origin-top-left scale-[0.85] @[300px]:scale-100"
          />

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
            Your information is secure and never shared.
          </p>
        </form>
      )}
    </div>
  );
}
