"use client";

import { useInView } from "@/hooks/useInView";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { generateFAQSchema } from "@/lib/schema";
import { LeadForm } from "@/components/shared/LeadForm";

const faqs = [
  {
    question: "What information do you need to scope a call center program?",
    answer:
      "A useful scope includes the service type, expected call or ticket volume, hours of coverage, channels, languages, compliance requirements, CRM or software integrations, and desired launch timeline.",
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

export function FAQSection() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section className="bg-gradient-to-b from-white via-red/[0.015] to-white py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />
      <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 gap-16 lg:grid-cols-5">
          <div className={`lg:col-span-3 ${isInView ? "animate-slide-in-left" : "opacity-0"}`}>
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">
              FAQ
            </span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl lg:text-[44px]">
              Frequently Asked <span className="text-red">Questions</span>
            </h2>
            <p className="mt-4 text-[16px] text-gray-700">
              Everything you need to know about our services.
            </p>

            <div className="mt-10">
              <Accordion>
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="border-b border-gray-100"
                  >
                    <AccordionTrigger className="py-5 text-left text-[16px] font-semibold text-navy hover:text-red hover:no-underline transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-[15px] leading-relaxed text-gray-700">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <div className={`lg:col-span-2 ${isInView ? "animate-slide-in-right" : "opacity-0"}`} style={{ animationDelay: "0.15s" }}>
            <div>
              <LeadForm
                title="Get a Free Quote"
                description="We'll respond within 1 working day."
                subject="Homepage FAQ Form Inquiry — ContactCenterUSA.com"
                ctaLocation="homepage_faq_form"
                leadOffer="Homepage call center quote"
                formName="homepage_faq_form"
                submitLabel="Get My Free Quote"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
