"use client";

import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle, Lock } from "lucide-react";
import {
  getLeadFormEndpoint,
  SPLITFORMS_ACCESS_KEY,
  submitLeadForm,
  trackLeadEvent,
} from "@/lib/lead-tracking";

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
  "mt-1.5 h-12 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none transition-colors focus:border-red focus:ring-2 focus:ring-red/20";
const selectClass =
  "mt-1.5 h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm outline-none transition-colors focus:border-red focus:ring-2 focus:ring-red/20";

const securityFieldName = "security_answer";
const securityQuestion = "2 + 4";
const securityAnswer = "6";

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

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("submitted") === "1") setIsSubmitted(true);
    setRedirectTo(`${window.location.pathname}?submitted=1`);
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

    if (target.name === securityFieldName) {
      const isCorrect = target.value.trim() === securityAnswer;
      target.setCustomValidity(
        isCorrect || !target.value.trim()
          ? ""
          : `Please answer ${securityQuestion} correctly.`,
      );
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
    const securityInput = form.elements.namedItem(securityFieldName);
    if (securityInput instanceof HTMLInputElement) {
      securityInput.setCustomValidity("");
    }

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

    const formData = new FormData(form);
    if ((formData.get(securityFieldName) ?? "").toString().trim() !== securityAnswer) {
      if (securityInput instanceof HTMLInputElement) {
        securityInput.setCustomValidity(`Please answer ${securityQuestion} correctly.`);
        setErrors(new Set([securityFieldName]));
        securityInput.reportValidity();
        securityInput.scrollIntoView({ behavior: "smooth", block: "center" });
        securityInput.focus({ preventScroll: true });
      }
      return;
    }

    setErrors(new Set());
    setIsSubmitting(true);

    formData.delete(securityFieldName);
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
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const wrapperClass = card
    ? `rounded-2xl border border-gray-100 bg-white p-6 shadow-xl lg:p-8 ${className}`
    : className;

  return (
    <div className={wrapperClass}>
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
          className={`@container ${title || description ? "mt-6 " : ""}space-y-5`}
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

          {/* Name & Company */}
          <div className="grid grid-cols-1 gap-5 @lg:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-navy">Name *</label>
              <input
                name="full_name"
                required
                aria-label="Name"
                placeholder="John Smith"
                className={inputClass + errorRing("full_name")}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-navy">Company Name *</label>
              <input
                name="company_name"
                required
                aria-label="Company name"
                placeholder="Acme Inc."
                className={inputClass + errorRing("company_name")}
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 gap-5 @lg:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-navy">Company Email *</label>
              <input
                name="work_email"
                type="email"
                required
                aria-label="Company email"
                placeholder="you@company.com"
                className={inputClass + errorRing("work_email")}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-navy">Phone Number *</label>
              <input
                name="phone_number"
                type="tel"
                required
                aria-label="Phone number"
                placeholder="(555) 123-4567"
                className={inputClass + errorRing("phone_number")}
              />
            </div>
          </div>

          {/* Website & Solution Type */}
          <div className="grid grid-cols-1 gap-5 @lg:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-navy">Company Website</label>
              <input
                name="company_url"
                type="text"
                inputMode="url"
                aria-label="Company website"
                placeholder="company.com"
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-navy">Solution Type *</label>
              <select
                name="solution_type"
                required
                aria-label="Solution type"
                defaultValue=""
                className={selectClass + errorRing("solution_type")}
              >
                <option value="">Select solution type</option>
                {solutionTypes.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Service Type & Agent Requirements */}
          <div className="grid grid-cols-1 gap-5 @lg:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-navy">
                Call Center Services Type *
              </label>
              <select
                name="service_type"
                required
                aria-label="Call center services type"
                defaultValue=""
                className={selectClass + errorRing("service_type")}
              >
                <option value="">Select service type</option>
                {serviceTypes.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-navy">Agent Requirements *</label>
              <select
                name="agent_requirement"
                required
                aria-label="Agent requirements"
                defaultValue=""
                className={selectClass + errorRing("agent_requirement")}
              >
                <option value="">Select agent count</option>
                {agentOptions.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Call Volume & Operating Schedule */}
          <div className="grid grid-cols-1 gap-5 @lg:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-navy">
                Call Volume (Records/month) *
              </label>
              <select
                name="call_volume"
                required
                aria-label="Call volume"
                defaultValue=""
                className={selectClass + errorRing("call_volume")}
              >
                <option value="">Select volume</option>
                {volumeOptions.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-navy">Operating Schedule *</label>
              <select
                name="operating_schedule"
                required
                aria-label="Operating schedule"
                defaultValue=""
                className={selectClass + errorRing("operating_schedule")}
              >
                <option value="">Select schedule</option>
                {scheduleOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Comments */}
          <div>
            <label className="text-sm font-medium text-navy">Additional Comments</label>
            <textarea
              name="additional_comments"
              rows={4}
              placeholder="Tell us about your company, your program, or your requirements..."
              aria-label="Additional comments"
              className="mt-1.5 w-full rounded-xl border border-gray-200 p-4 text-sm outline-none transition-colors focus:border-red focus:ring-2 focus:ring-red/20"
            />
          </div>

          {/* Security Check */}
          <div className="grid grid-cols-1 gap-5 @lg:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-navy">
                Security Check: {securityQuestion} = ? *
              </label>
              <input
                name={securityFieldName}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                required
                autoComplete="off"
                aria-label={`Security check: ${securityQuestion}`}
                placeholder="Enter answer"
                className={inputClass + errorRing(securityFieldName)}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            aria-label="Submit form"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-red py-4 text-[15px] font-semibold text-white transition-all hover:bg-red-dark disabled:opacity-50"
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
