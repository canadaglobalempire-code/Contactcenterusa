"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";

const steps = [
  {
    number: "1",
    title: "Tell Us Your Needs",
    description:
      "Share your call volume, service requirements, and business goals. We'll design a custom solution.",
  },
  {
    number: "2",
    title: "We Build Your Team",
    description:
      "We recruit, train, and prepare dedicated agents specifically for your brand and processes.",
  },
  {
    number: "3",
    title: "Go Live & Grow",
    description:
      "Launch in as few as 48 hours. Monitor performance in real-time. Scale as needed.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function HowItWorks() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1536px] px-4 sm:px-6">
        <SectionHeader
          label="HOW IT WORKS"
          title="Go Live in 3 Simple Steps"
          subtitle="From first call to launch — we make outsourcing effortless."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative mx-auto max-w-[1000px] grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-0"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={stepVariants}
              className="relative px-8 text-center"
            >
              {/* Connecting dashed line between steps (desktop only) */}
              {index < steps.length - 1 && (
                <div className="pointer-events-none absolute left-[calc(50%+40px)] right-[calc(-50%+40px)] top-10 hidden lg:block">
                  <div className="w-full border-t-2 border-dashed border-gray-300" />
                </div>
              )}

              {/* Step number with gradient ring */}
              <div className="relative z-10 mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-blue to-cyan-400 p-[3px]">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                  <span className="text-2xl font-bold text-navy">
                    {step.number}
                  </span>
                </div>
              </div>

              <h3 className="mt-8 text-xl font-bold text-navy">{step.title}</h3>

              <p className="mx-auto mt-3 max-w-[280px] text-[15px] leading-relaxed text-text-muted">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2E75B6] to-[#3B8DD4] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02] hover:shadow-blue-500/30"
          >
            Start Your Free Consultation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
