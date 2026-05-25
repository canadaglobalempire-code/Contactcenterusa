"use client";

import { ArrowRight, CheckCircle } from "lucide-react";
import { LeadCTALink } from "@/components/shared/LeadCTALink";

type InlineLeadCTAProps = {
  body: string;
  ctaLocation: string;
  eyebrow?: string;
  heading: string;
  leadOffer: string;
  primaryLabel: string;
  serviceHref?: string;
  serviceLabel?: string;
};

export function InlineLeadCTA({
  body,
  ctaLocation,
  eyebrow = "Free consultation",
  heading,
  leadOffer,
  primaryLabel,
  serviceHref,
  serviceLabel = "Explore the service",
}: InlineLeadCTAProps) {
  return (
    <aside className="my-10 overflow-hidden rounded-2xl border border-red/15 bg-white shadow-lg shadow-red/5">
      <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="p-6 sm:p-8">
          <span className="inline-flex rounded-full bg-red/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red">
            {eyebrow}
          </span>
          <h3 className="mt-4 text-2xl font-bold leading-tight text-navy">
            {heading}
          </h3>
          <p className="mt-3 text-[15px] leading-7 text-gray-700">{body}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <LeadCTALink
              ctaLocation={ctaLocation}
              leadOffer={leadOffer}
              className="inline-flex items-center gap-2 rounded-lg bg-red px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-dark"
            >
              {primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </LeadCTALink>
            {serviceHref && (
              <LeadCTALink
                href={serviceHref}
                ctaLocation={`${ctaLocation}_service_link`}
                leadOffer={leadOffer}
                className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-gray-300 hover:bg-gray-50"
              >
                {serviceLabel}
              </LeadCTALink>
            )}
          </div>
        </div>
        <div className="border-t border-gray-100 bg-gray-50 p-6 sm:p-8 lg:border-l lg:border-t-0">
          <div className="space-y-4">
            {[
              "US-based agents",
              "24/7 launch options",
              "Quote-ready plan",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red" />
                <span className="text-sm font-medium text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
