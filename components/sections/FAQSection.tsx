"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { generateFAQSchema } from "@/lib/schema";

const contactSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  company: z.string().min(2, "Company name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Valid phone number required"),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

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

export function FAQSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    const formData = new FormData();
    formData.append("access_key", "abaffe957645499b9c3bf360f0bc7661");
    formData.append("subject", "Homepage FAQ Form Inquiry — ContactCenterUSA.com");
    formData.append("name", data.fullName);
    formData.append("company", data.company);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("message", data.message || "");

    try {
      const response = await fetch("https://splitforms.com/api/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await response.json();
      if (response.ok && result.success) {
        setIsSubmitted(true);
      } else {
        alert("Error: " + (result.message || "Something went wrong. Please try again."));
      }
    } catch {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="bg-gradient-to-b from-white via-red/[0.015] to-white py-28">
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
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
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
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="lg:sticky lg:top-28 rounded-2xl border border-gray-100 bg-white p-8 shadow-lg">
              <h3 className="text-xl font-bold text-navy">Get a Free Quote</h3>
              <p className="mt-1 text-sm text-gray-600">
                We&apos;ll respond within 1 working day.
              </p>

              {isSubmitted ? (
                <div className="mt-8 flex flex-col items-center py-8 text-center">
                  <CheckCircle className="h-14 w-14 text-green-500" />
                  <p className="mt-4 text-lg font-bold text-navy">
                    Thank you!
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    We&apos;ll contact you within 1 working day.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-6 space-y-4"
                >
                  <div>
                    <Label htmlFor="faq-name" className="text-sm font-medium text-navy">
                      Full Name *
                    </Label>
                    <Input
                      id="faq-name"
                      placeholder="John Smith"
                      className="mt-1.5 h-11 rounded-lg"
                      {...register("fullName")}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="faq-company" className="text-sm font-medium text-navy">
                      Company *
                    </Label>
                    <Input
                      id="faq-company"
                      placeholder="Acme Inc."
                      className="mt-1.5 h-11 rounded-lg"
                      {...register("company")}
                    />
                    {errors.company && (
                      <p className="mt-1 text-xs text-red">
                        {errors.company.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="faq-email" className="text-sm font-medium text-navy">
                      Email *
                    </Label>
                    <Input
                      id="faq-email"
                      type="email"
                      placeholder="john@acme.com"
                      className="mt-1.5 h-11 rounded-lg"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="faq-phone" className="text-sm font-medium text-navy">
                      Phone *
                    </Label>
                    <Input
                      id="faq-phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="mt-1.5 h-11 rounded-lg"
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="faq-message" className="text-sm font-medium text-navy">
                      Message
                    </Label>
                    <Textarea
                      id="faq-message"
                      placeholder="Tell us about your needs..."
                      className="mt-1.5 min-h-20 rounded-lg"
                      aria-label="Your requirements"
                      {...register("message")}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-label="Submit form"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-red py-3.5 font-semibold text-white transition-all hover:bg-red-dark disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Get My Free Quote"}
                    {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                  </button>
                  <p className="flex items-center justify-center gap-1.5 text-sm text-gray-600">
                    <Lock className="h-3 w-3" />
                    Your information is secure and never shared.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
