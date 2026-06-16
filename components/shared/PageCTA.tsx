"use client";

import { useInView } from "@/hooks/useInView";
import { ArrowRight } from "lucide-react";
import { LeadCTALink } from "@/components/shared/LeadCTALink";

interface PageCTAProps {
  heading?: string;
  subtitle?: string;
}

export function PageCTA({
  heading = "Ready to Get Started?",
  subtitle = "Contact us today for a free consultation. Let us show you how we can transform your customer experience.",
}: PageCTAProps) {
  const { ref, isInView } = useInView(0.1);

  return (
    <section className="relative overflow-hidden bg-navy py-20 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative z-10 mx-auto max-w-[1536px] px-5 lg:px-8">
        <div ref={ref} className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
          <div
            className={`max-w-2xl text-center lg:text-left ${isInView ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {heading}
            </h2>
            <p className="mt-3 text-white/60">{subtitle}</p>
          </div>

          <div
            className={`flex flex-wrap items-center gap-4 ${isInView ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.15s" }}
          >
            <LeadCTALink
              ctaLocation="page_cta_band"
              leadOffer="General call center quote"
              className="inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-red-dark"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </LeadCTALink>
          </div>
        </div>
      </div>
    </section>
  );
}
