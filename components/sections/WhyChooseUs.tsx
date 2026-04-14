"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  MapPin,
  Zap,
  TrendingUp,
  ShieldCheck,
  FileCheck,
  UserCheck,
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "100% US-Based Agents",
    description:
      "Every interaction handled by trained professionals in the United States. No offshore outsourcing — ever.",
  },
  {
    icon: Zap,
    title: "48-Hour Deployment",
    description:
      "Go live in as little as 48 hours. We handle recruiting, training, and quality assurance.",
  },
  {
    icon: TrendingUp,
    title: "Scale on Demand",
    description:
      "From 5 to 500+ agents. Seasonal adjustments with no penalties or commitments.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Compliant",
    description:
      "SOC 2, HIPAA, and PCI DSS compliant infrastructure and processes.",
  },
  {
    icon: FileCheck,
    title: "No Long-Term Contracts",
    description:
      "Month-to-month flexibility. We earn your business through performance.",
  },
  {
    icon: UserCheck,
    title: "Dedicated Account Manager",
    description:
      "A single point of contact who knows your business inside and out.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#1B2A4A] to-[#0F2044] py-24">
      {/* Decorative gradient orbs */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-blue/5 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-teal-400/5 blur-[100px]" />

      <div className="relative mx-auto max-w-[1536px] px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left column — Large image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-2xl min-h-[500px] h-full">
              <Image
                src="/images/call-center-team.jpg"
                alt="Contact Center USA team"
                fill
                className="object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 to-transparent" />
              {/* Floating stats card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-white font-bold text-lg">500+</div>
                    <div className="text-white/60 text-xs">Agents</div>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">24/7</div>
                    <div className="text-white/60 text-xs">Support</div>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">99.9%</div>
                    <div className="text-white/60 text-xs">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column — Header + Feature cards */}
          <div className="lg:col-span-7">
            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                WHY CONTACT CENTER USA
              </span>
              <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                The Smarter Way to Outsource
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-white/60">
                We combine boutique service with enterprise capabilities — delivering
                results that speak for themselves.
              </p>
            </motion.div>

            {/* Feature cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    variants={cardVariants}
                    className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue/20 to-blue/5">
                      <Icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
