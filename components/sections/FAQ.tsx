"use client";

import Link from "next/link";
import { Phone, Mail, Clock } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { siteConfig } from "@/lib/seo-config";
import { generateFAQSchema } from "@/lib/schema";

const faqs = [
  {
    question: "How much does call center outsourcing cost?",
    answer:
      "Pricing varies based on call volume, service complexity, and hours of coverage needed. Our plans start at competitive per-hour rates with no hidden fees. Contact us for a custom quote tailored to your specific needs.",
  },
  {
    question: "Are your agents really based in the United States?",
    answer:
      "Yes, 100% of our agents work from US-based locations. We do not offshore any customer interactions. This ensures cultural alignment, clear communication, and same-timezone availability for your customers.",
  },
  {
    question: "How quickly can you set up my call center team?",
    answer:
      "Most programs go live within 48 hours to 2 weeks, depending on complexity. Simple inbound programs can launch in days, while specialized technical support may require additional training time.",
  },
  {
    question: "Do you offer HIPAA-compliant services?",
    answer:
      "Absolutely. Our infrastructure and processes are designed to meet HIPAA, SOC 2, and PCI DSS compliance requirements. We serve healthcare, financial, and insurance clients with strict data security protocols.",
  },
  {
    question: "Can I scale up or down seasonally?",
    answer:
      "Yes, flexibility is one of our core strengths. You can increase or decrease agent count based on seasonal demand with no penalties or long-term commitments. We handle the hiring and training so you don't have to.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We serve healthcare, ecommerce, financial services, real estate, technology, insurance, and more. Each industry program includes specialized training and compliance protocols relevant to that sector.",
  },
  {
    question: "Do you require long-term contracts?",
    answer:
      "No. We operate on month-to-month agreements. We believe in earning your business through consistent performance, not locking you into contracts.",
  },
];

const faqSchema = generateFAQSchema(faqs);

export default function FAQ() {
  return (
    <section className="bg-white py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left side — FAQ Accordion */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue">
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h2 className="text-3xl font-bold text-navy mt-2 mb-8">
              Common Questions About Our Services
            </h2>

            <Accordion>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border-b border-gray-100"
                >
                  <AccordionTrigger className="text-left font-semibold text-navy py-5 text-base hover:text-blue transition-colors hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-text-muted leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right side — Contact CTA card */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-24 bg-gradient-to-br from-[#1B2A4A] via-[#2E4A7A] to-[#1B2A4A] rounded-2xl p-8 text-white relative overflow-hidden">
              {/* Decorative gradient orb */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl" />

              <div className="relative">
                <h3 className="text-2xl font-bold">Still Have Questions?</h3>
                <p className="text-blue-200/80 mt-2">
                  Talk to a specialist who can help you find the right solution.
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href={siteConfig.phoneHref}
                    className="flex items-center gap-3 text-xl font-semibold"
                  >
                    <Phone className="size-5" />
                    {siteConfig.phone}
                  </a>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3"
                  >
                    <Mail className="size-5" />
                    {siteConfig.email}
                  </a>

                  <div className="flex items-center gap-3 text-sm text-blue-200/80">
                    <Clock className="size-5 shrink-0" />
                    {siteConfig.hours}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="block bg-white text-navy font-semibold w-full mt-8 py-3.5 rounded-full hover:bg-gray-100 text-center transition-colors shadow-lg"
                >
                  Schedule a Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
