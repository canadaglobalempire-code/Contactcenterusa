"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Lock } from "lucide-react";
import {
  appendLeadAttribution,
  LEAD_FORM_ENDPOINT,
  trackLeadEvent,
} from "@/lib/lead-tracking";

type HeroContactFormProps = {
  ctaLocation?: string;
  description?: string;
  leadOffer?: string;
  subject?: string;
  submitLabel?: string;
  title?: string;
};

export function HeroContactForm({
  ctaLocation = "sidebar_quote_form",
  description = "We'll respond within 1 working day.",
  leadOffer = "General call center quote",
  subject = "Service Page Inquiry — ContactCenterUSA.com",
  submitLabel = "Get My Free Quote",
  title = "Get a Free Quote",
}: HeroContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const formData = new FormData(e.currentTarget);
    appendLeadAttribution(formData, { ctaLocation, leadOffer });
    try {
      const res = await fetch(LEAD_FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = await res.json();
      if (res.ok && data.success) {
        trackLeadEvent("lead_form_submit", {
          cta_location: formData.get("cta_location")?.toString(),
          form_name: "hero_contact_form",
          lead_offer: formData.get("lead_offer")?.toString(),
          source_page: formData.get("source_page")?.toString(),
        });
        setSubmitted(true);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    }
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-8 text-center shadow-xl">
        <CheckCircle className="h-14 w-14 text-green-500" />
        <p className="mt-4 text-lg font-bold text-navy">Thank You!</p>
        <p className="mt-1 text-sm text-gray-700">
          We&apos;ll respond within 1 working day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-6 shadow-xl lg:p-8"
    >
      <h3 className="text-xl font-bold text-navy">{title}</h3>
      <p className="mt-1 text-sm text-gray-600">{description}</p>
      <input
        type="hidden"
        name="subject"
        value={subject}
      />
      <input type="hidden" name="source_page" />
      <input type="hidden" name="cta_location" />
      <input type="hidden" name="lead_offer" />
      <input type="hidden" name="submitted_at" />
      <div className="mt-6 space-y-4">
        <input
          name="name"
          required
          aria-label="Full name"
          placeholder="John Smith"
          className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-navy outline-none transition-colors placeholder:text-gray-400 focus:border-red focus:ring-2 focus:ring-red/20"
        />
        <input
          name="company"
          required
          aria-label="Company name"
          placeholder="Acme Inc."
          className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-navy outline-none transition-colors placeholder:text-gray-400 focus:border-red focus:ring-2 focus:ring-red/20"
        />
        <input
          name="email"
          type="email"
          required
          aria-label="Email address"
          placeholder="john@acme.com"
          className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-navy outline-none transition-colors placeholder:text-gray-400 focus:border-red focus:ring-2 focus:ring-red/20"
        />
        <input
          name="phone"
          type="tel"
          required
          aria-label="Phone number"
          placeholder="(555) 123-4567"
          className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-navy outline-none transition-colors placeholder:text-gray-400 focus:border-red focus:ring-2 focus:ring-red/20"
        />
        <textarea
          name="requirements"
          required
          rows={3}
          aria-label="Your requirements"
          placeholder="Tell us about your needs..."
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-gray-400 focus:border-red focus:ring-2 focus:ring-red/20 resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        aria-label="Submit contact form"
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-red py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-red-dark disabled:opacity-50"
      >
        {submitting ? "Sending..." : submitLabel}
        {!submitting && <ArrowRight className="h-4 w-4" />}
      </button>
      {error && (
        <p className="mt-3 text-center text-sm text-red">{error}</p>
      )}
      <p className="mt-3 flex items-center justify-center gap-1.5 text-sm text-gray-600">
        <Lock className="h-3 w-3" />
        Your information is secure and never shared.
      </p>
    </form>
  );
}
