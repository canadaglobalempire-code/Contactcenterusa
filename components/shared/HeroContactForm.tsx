"use client";

import { LeadForm } from "@/components/shared/LeadForm";

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
  return (
    <LeadForm
      title={title}
      description={description}
      subject={subject}
      ctaLocation={ctaLocation}
      leadOffer={leadOffer}
      submitLabel={submitLabel}
      formName="hero_contact_form"
    />
  );
}
