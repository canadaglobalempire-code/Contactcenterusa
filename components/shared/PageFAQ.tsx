"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { generateFAQSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/seo-config";

interface PageFAQProps {
  heading?: string;
  faqs: { question: string; answer: string }[];
}

export function PageFAQ({
  heading = "Frequently Asked Questions",
  faqs,
}: PageFAQProps) {
  const faqSchema = generateFAQSchema(faqs);

  return (
    <section className="bg-white py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
          {/* Left — FAQ */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">
              FAQ
            </span>
            <h2 className="mt-5 text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
              {heading}
            </h2>

            <div className="mt-10">
              <Accordion>
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="border-b border-gray-100"
                  >
                    <AccordionTrigger className="py-5 text-left text-[16px] font-semibold text-navy transition-colors hover:text-red hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-[15px] leading-relaxed text-gray-700">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>

          {/* Right — Sticky help card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="rounded-2xl bg-navy p-8 text-white">
                <h3 className="text-xl font-bold">Still Have Questions?</h3>
                <p className="mt-2 text-sm text-white/60">
                  Our team is standing by to help you find the perfect solution.
                </p>

                <a
                  className="mt-6 flex items-center gap-3 text-lg font-bold"
                >
                  <Phone className="h-5 w-5" />
                </a>

                <Link
                  href="/contact"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-red py-3.5 font-semibold text-white transition-all hover:bg-red-dark"
                >
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
