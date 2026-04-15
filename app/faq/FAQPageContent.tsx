"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const categories = ["General", "Pricing", "Services", "Compliance", "Getting Started"] as const;
type Category = (typeof categories)[number];

interface FAQ {
  question: string;
  answer: string;
}

const faqData: Record<Category, FAQ[]> = {
  General: [
    {
      question: "What is Contact Center USA?",
      answer:
        "Contact Center USA is a premier US-based call center outsourcing company that provides professional customer service, technical support, and sales solutions. We partner with businesses of all sizes to deliver exceptional customer experiences through our team of highly trained, domestic agents. With over 30 years of industry experience, we have built a reputation for reliability, quality, and measurable results.",
    },
    {
      question: "Are your agents really based in the United States?",
      answer:
        "Yes, 100% of our call center agents are based in the United States. We operate multiple contact center locations across the country, ensuring your customers always interact with native English-speaking professionals who understand American culture and business practices. This commitment to domestic operations sets us apart from offshore outsourcing providers and results in higher customer satisfaction scores.",
    },
    {
      question: "How long has Contact Center USA been in business?",
      answer:
        "Contact Center USA has been providing professional call center outsourcing services for over 30 years. Throughout our history, we have served thousands of clients across diverse industries, continuously evolving our technology and training programs to stay ahead of industry trends. Our decades of experience give us deep expertise in handling complex customer interactions efficiently and professionally.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We serve a wide range of industries including healthcare, financial services, ecommerce, technology, retail, legal, real estate, and government. Each industry has unique requirements, and our specialized training programs ensure our agents understand the specific terminology, regulations, and customer expectations of your sector. We tailor our approach to align with your industry's best practices and compliance standards.",
    },
    {
      question: "Do you require long-term contracts?",
      answer:
        "No, we do not require long-term contracts. We offer flexible month-to-month agreements because we believe in earning your business every day through exceptional service. While many of our clients choose to stay with us for years due to our performance, you are never locked into a commitment that does not work for you. We also offer discounted rates for clients who do choose longer-term arrangements.",
    },
  ],
  Pricing: [
    {
      question: "How much does call center outsourcing cost?",
      answer:
        "Call center outsourcing costs vary based on factors such as call volume, complexity, hours of coverage, and the specific services you need. Our pricing is competitive and transparent, typically ranging from a per-minute model for lower volumes to dedicated agent pricing for higher volumes. We provide customized quotes after understanding your specific requirements so you only pay for what you need.",
    },
    {
      question: "What pricing models do you offer?",
      answer:
        "We offer several flexible pricing models to fit your business needs: per-minute pricing ideal for variable call volumes, per-call pricing for predictable interactions, dedicated agent pricing for consistent high-volume needs, and hybrid models that combine these approaches. Each model is designed to maximize your cost efficiency while maintaining the highest quality of service. Our team will recommend the best model based on your usage patterns.",
    },
    {
      question: "Are there any hidden fees?",
      answer:
        "Absolutely not. Transparency is a core value at Contact Center USA, and we pride ourselves on straightforward pricing with no hidden fees or surprise charges. Your proposal will clearly outline all costs including setup, training, monthly service fees, and any optional add-ons. We believe in building trust through honest pricing, and you will always know exactly what you are paying for before any charges are incurred.",
    },
    {
      question: "Can I scale up or down without penalties?",
      answer:
        "Yes, our flexible model allows you to scale your call center operations up or down as your business needs change, without any penalties. Whether you experience seasonal spikes, rapid growth, or need to reduce capacity temporarily, we can adjust staffing levels quickly and efficiently. This scalability is one of the key advantages of outsourcing with Contact Center USA compared to managing an in-house team.",
    },
    {
      question: "How does outsourcing compare to hiring in-house?",
      answer:
        "Outsourcing your call center to Contact Center USA typically saves businesses 40-60% compared to building and managing an in-house team. When you factor in costs like recruiting, training, benefits, office space, technology infrastructure, and management overhead, the savings are substantial. Beyond cost, outsourcing gives you access to experienced agents, proven processes, and enterprise-grade technology without the upfront investment or ongoing management burden.",
    },
  ],
  Services: [
    {
      question: "What services do you offer?",
      answer:
        "We offer a comprehensive suite of call center services including inbound customer support, outbound sales and lead generation, technical support and help desk, appointment scheduling, order processing, after-hours answering, live chat support, email management, and back-office processing. Each service is customizable to your specific business requirements, ensuring seamless integration with your existing operations and brand standards.",
    },
    {
      question: "Do you provide 24/7 support?",
      answer:
        "Yes, we provide 24/7/365 customer support coverage so your customers can always reach a live, US-based agent whenever they need help. Our around-the-clock availability ensures you never miss an important call, regardless of time zone or holiday schedules. Many businesses find that offering 24/7 support significantly improves customer satisfaction and retention while also capturing after-hours leads and sales opportunities.",
    },
    {
      question: "Do you offer bilingual or multilingual agents?",
      answer:
        "Yes, we offer bilingual English-Spanish support as a standard option, and we can accommodate other language needs based on your requirements. Our bilingual agents are fluent in both languages and trained to provide the same high level of service regardless of the language used. This capability is especially valuable for businesses serving diverse communities or expanding into new markets across the United States.",
    },
    {
      question: "Can you handle both inbound and outbound calls?",
      answer:
        "Absolutely. We are fully equipped to handle both inbound and outbound calling programs. Our inbound services cover everything from customer support and order taking to technical assistance, while our outbound capabilities include lead generation, appointment setting, customer surveys, and proactive outreach campaigns. Many of our clients leverage both inbound and outbound services for a complete customer engagement strategy.",
    },
    {
      question: "Do you offer AI chatbot solutions?",
      answer:
        "Yes, we offer AI-powered chatbot and virtual assistant solutions that can work alongside our live agents to provide faster response times and round-the-clock automated support for common inquiries. Our AI solutions are designed to handle routine questions and tasks, seamlessly escalating to a live agent when more complex assistance is needed. This hybrid approach combines the efficiency of automation with the empathy and problem-solving ability of human agents.",
    },
  ],
  Compliance: [
    {
      question: "Are you HIPAA compliant?",
      answer:
        "Yes, Contact Center USA is fully HIPAA compliant. We maintain rigorous safeguards to protect Protected Health Information (PHI) including physical, technical, and administrative controls. All of our agents who handle healthcare-related calls receive specialized HIPAA training and sign Business Associate Agreements. Our compliance program is regularly audited to ensure we meet or exceed all HIPAA requirements for healthcare call center operations.",
    },
    {
      question: "Are you PCI DSS certified?",
      answer:
        "Yes, we are PCI DSS (Payment Card Industry Data Security Standard) certified, ensuring that all payment card transactions handled by our agents meet the highest security standards. Our systems are designed to securely process, store, and transmit cardholder data with robust encryption and access controls. We undergo regular PCI compliance assessments and maintain strict protocols to protect your customers' financial information at every touchpoint.",
    },
    {
      question: "How do you protect customer data?",
      answer:
        "We employ a multi-layered approach to data protection including end-to-end encryption, secure network architecture, strict access controls, and continuous monitoring. All data is stored in SOC 2 compliant data centers with redundant backups and disaster recovery capabilities. Our agents undergo thorough background checks and receive ongoing security awareness training to ensure your customers' sensitive information remains protected at all times.",
    },
    {
      question: "Are you SOC 2 certified?",
      answer:
        "Yes, Contact Center USA maintains SOC 2 Type II certification, which independently verifies that our security, availability, processing integrity, confidentiality, and privacy controls meet the highest industry standards. This certification requires ongoing audits by an independent third-party firm and demonstrates our commitment to maintaining a secure operating environment. SOC 2 compliance is particularly important for clients in regulated industries such as healthcare and financial services.",
    },
    {
      question: "How do you handle data privacy?",
      answer:
        "We take data privacy extremely seriously and comply with all applicable federal and state privacy regulations, including CCPA, TCPA, and state-specific data protection laws. Our privacy program includes comprehensive data handling policies, regular privacy impact assessments, and robust consent management processes. We also provide detailed privacy agreements and can customize our data handling procedures to meet your organization's specific privacy requirements and policies.",
    },
  ],
  "Getting Started": [
    {
      question: "How quickly can you set up my team?",
      answer:
        "We can typically have your dedicated team set up and operational within 2-4 weeks, depending on the complexity of your program. Simple answering service programs can often launch in as little as one week, while more complex programs requiring specialized training may take slightly longer. Our experienced implementation team manages every detail of the setup process to ensure a smooth and efficient launch.",
    },
    {
      question: "What is the onboarding process?",
      answer:
        "Our onboarding process begins with a thorough discovery session to understand your business, customers, and goals. From there, we develop customized call scripts, build out your technology integrations, recruit and train your dedicated agent team, and conduct quality assurance testing before going live. Throughout the process, you will have a dedicated project manager who keeps you informed at every step and ensures everything meets your standards before launch.",
    },
    {
      question: "How do you train agents on my products?",
      answer:
        "We develop a comprehensive, customized training program for every client based on your products, services, brand voice, and customer interaction standards. Training includes classroom instruction, hands-on practice with your systems, role-playing exercises, and supervised live call handling before agents are fully deployed. We also implement ongoing training and nesting periods to continuously improve agent knowledge and performance as your business evolves.",
    },
    {
      question: "Can I monitor agent performance?",
      answer:
        "Yes, we provide full transparency into agent performance through our real-time reporting dashboard and regular performance reviews. You can listen to recorded calls, review quality scores, track key performance indicators, and monitor real-time call activity at any time. We also conduct regular calibration sessions with your team to ensure our quality standards align perfectly with your expectations and business objectives.",
    },
    {
      question: "What reporting do you provide?",
      answer:
        "We provide comprehensive reporting that includes call volume analytics, average handle time, first call resolution rates, customer satisfaction scores, agent performance metrics, and custom KPI tracking tailored to your business goals. Reports are available in real-time through our online dashboard and are also delivered in scheduled summary formats daily, weekly, or monthly. Our reporting helps you make data-driven decisions and continuously optimize your customer service operations.",
    },
  ],
};

const allFaqs = Object.values(faqData).flat();

function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function FAQPageContent() {
  const [activeCategory, setActiveCategory] = useState<Category>("General");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema()),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy py-28 lg:py-36">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative mx-auto max-w-[1536px] px-5 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/70">
              FAQ
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Frequently Asked{" "}
              <span className="text-red">Questions</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
              Everything you need to know about our call center outsourcing
              services. Can&apos;t find the answer you&apos;re looking for?
              Reach out to our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs + FAQ Accordion */}
      <section className="bg-bg-alt py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 flex flex-wrap justify-center gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-label={cat}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-navy text-white shadow-lg"
                    : "bg-white text-text-muted hover:bg-navy/5 hover:text-navy"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Accordion */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Accordion className="space-y-4">
              {faqData[activeCategory].map((faq, index) => (
                <AccordionItem
                  key={index}
                  className="rounded-xl border border-border bg-white px-6 shadow-sm"
                >
                  <AccordionTrigger className="py-5 text-base font-semibold text-text-dark">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-text-muted leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy py-20 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative mx-auto max-w-[1536px] px-5 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Still Have Questions?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              Our team is here to help. Contact us today and we&apos;ll provide
              the answers you need to make an informed decision about your
              call center outsourcing needs.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-red-dark"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
