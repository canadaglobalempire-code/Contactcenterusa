"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageSquare, Users, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Tell Us Your Needs",
    desc: "Share your call volume, service requirements, and business goals. We'll design a custom solution tailored to your brand.",
  },
  {
    number: "02",
    icon: Users,
    title: "We Build Your Team",
    desc: "We recruit, train, and prepare dedicated US-based agents specifically for your brand, products, and processes.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Go Live & Grow",
    desc: "Launch in as few as 48 hours. Monitor performance in real-time with full analytics. Scale up or down as needed.",
  },
];

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-28">
      {/* Subtle pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-[1536px] px-5 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/70">
              How It Works
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[44px]">
              Getting Started is{" "}
              <span className="text-red">Simple</span>
            </h2>

            <p className="mt-5 text-[16px] leading-relaxed text-white/60">
              Our technology and our processes are easily integrated, secure, and
              productive from day one. Your world-class team of agents is
              available and scalable to suit your business needs today.
            </p>

            {/* Steps */}
            <div className="mt-12 space-y-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  className="group flex gap-5"
                >
                  {/* Number + line */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-red text-white font-bold text-lg shadow-lg shadow-red/20">
                      {step.number}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="mt-3 h-full w-px border-l border-dashed border-white/20" />
                    )}
                  </div>
                  {/* Text */}
                  <div className="pb-4">
                    <h3 className="text-lg font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-white/50">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-red px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-red-dark"
              >
                Start Your Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative hidden lg:block"
          >
            {/* Main image */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[3/4]">
              <Image
                src="/images/hd-agents-working.jpg"
                alt="Professional call center team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
            </div>

            {/* Floating card — top left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -left-8 top-12 rounded-2xl bg-white px-6 py-5 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-navy">Go Live Fast</div>
                  <div className="text-sm text-gray-600">48 hours average</div>
                </div>
              </div>
            </motion.div>

            {/* Floating card — bottom right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -right-6 bottom-16 rounded-2xl bg-red px-6 py-5 text-white shadow-xl"
            >
              <div className="text-2xl font-bold">99.9%</div>
              <div className="text-sm text-white/80">Uptime Guaranteed</div>
            </motion.div>

            {/* Small decorative image — bottom left */}
            <div className="absolute -bottom-6 -left-6 h-[140px] w-[120px] overflow-hidden rounded-2xl border-4 border-navy shadow-xl">
              <Image
                src="/images/hd-agents-pair.jpg"
                alt="US-based call center agent pair collaborating"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
