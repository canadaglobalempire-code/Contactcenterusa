"use client";

import { useInView } from "@/hooks/useInView";
import { MapPin, Clock } from "lucide-react";
import { LeadForm } from "@/components/shared/LeadForm";

export function ContactFormSection() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section className="bg-gradient-to-b from-white via-red/[0.015] to-white py-28">
      <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div className={`lg:col-span-2 ${isInView ? "animate-slide-in-left" : "opacity-0"}`}>
            <h2 className="text-2xl font-bold text-navy">
              Tell Us About Your Needs
            </h2>
            <p className="mt-2 text-gray-700">
              Fill out the form below and one of our specialists will contact you
              within 1 working day.
            </p>

            <LeadForm
              card={false}
              className="mt-8"
              subject="New Contact Form Submission — ContactCenterUSA.com"
              ctaLocation="contact_page_form"
              formName="contact_page_form"
              submitLabel="Submit Inquiry"
            />
          </div>

          <div className={`lg:col-span-1 ${isInView ? "animate-slide-in-right" : "opacity-0"}`} style={{ animationDelay: "0.15s" }}>
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="rounded-2xl bg-navy p-8 text-white">
                <h3 className="text-xl font-bold">Reach Us Directly</h3>
                <p className="mt-2 text-white/60 text-sm">
                  Our team is available to answer your questions and discuss your
                  needs.
                </p>

                <div className="mt-8 space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red/20">
                      <MapPin className="h-5 w-5 text-red" />
                    </div>
                    <div>
                      <div className="text-xs text-white/50">Location</div>
                      <div className="font-bold">United States</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red/20">
                      <Clock className="h-5 w-5 text-red" />
                    </div>
                    <div>
                      <div className="text-xs text-white/50">Availability</div>
                      <div className="font-bold">24/7/365</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-6">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-navy">500+</div>
                    <div className="mt-1 text-sm text-gray-600">US Agents</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-navy">30+</div>
                    <div className="mt-1 text-sm text-gray-600">Years Exp.</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-navy">98%</div>
                    <div className="mt-1 text-sm text-gray-600">CSAT Score</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-navy">&lt;48h</div>
                    <div className="mt-1 text-sm text-gray-600">Go Live</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
