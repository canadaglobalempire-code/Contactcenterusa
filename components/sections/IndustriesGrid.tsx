"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Heart,
  ShoppingCart,
  Building2,
  Home,
  Monitor,
  Shield,
  Check,
} from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";

const industries = [
  {
    icon: Heart,
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
    gradient: "from-red-400 to-rose-500",
    title: "Healthcare & Life Sciences",
    bullets: [
      "HIPAA-compliant call handling",
      "Patient scheduling & follow-ups",
      "Insurance verification & billing support",
      "Nurse triage line support",
    ],
    href: "/industries/healthcare-call-center-services",
  },
  {
    icon: ShoppingCart,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    gradient: "from-emerald-400 to-green-500",
    title: "Ecommerce & Retail",
    bullets: [
      "Order tracking & status updates",
      "Returns & exchange processing",
      "Live chat & email support",
      "Peak season overflow handling",
    ],
    href: "/industries/ecommerce-customer-service-outsourcing",
  },
  {
    icon: Building2,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    gradient: "from-blue-400 to-indigo-500",
    title: "Financial Services & Banking",
    bullets: [
      "Secure transaction support",
      "Account inquiries & disputes",
      "Loan processing assistance",
      "Fraud alert notifications",
    ],
    href: "/industries/financial-services-call-center",
  },
  {
    icon: Home,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    gradient: "from-amber-400 to-orange-500",
    title: "Real Estate",
    bullets: [
      "Lead qualification & follow-up",
      "Property inquiry handling",
      "Appointment scheduling for agents",
      "Investor & wholesaler support",
    ],
    href: "/industries/real-estate-call-center-services",
  },
  {
    icon: Monitor,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    gradient: "from-purple-400 to-violet-500",
    title: "SaaS & Technology",
    bullets: [
      "Tier 1 & Tier 2 technical support",
      "Software onboarding assistance",
      "Bug reporting & escalation",
      "Customer success calls",
    ],
    href: "/industries/saas-technology-support",
  },
  {
    icon: Shield,
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    gradient: "from-teal-400 to-cyan-500",
    title: "Insurance",
    bullets: [
      "Claims intake & processing",
      "Policy inquiries & renewals",
      "Open enrollment support",
      "Compliance-focused scripting",
    ],
    href: "/industries/insurance-call-center-outsourcing",
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

export function IndustriesGrid() {
  return (
    <section className="bg-bg-alt py-24 relative">
      {/* Wave divider from previous dark section */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%]">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full h-auto">
          <path
            d="M0 0L60 8C120 16 240 32 360 40C480 48 600 48 720 44C840 40 960 32 1080 28C1200 24 1320 24 1380 24L1440 24V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="#F8FAFC"
          />
        </svg>
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6">
        <SectionHeader
          label="INDUSTRIES WE SERVE"
          title="Deep Expertise Across Key Verticals"
          subtitle="Specialized programs with industry-specific training, compliance, and best practices."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <motion.div key={industry.title} variants={cardVariants}>
                <Link
                  href={industry.href}
                  className="block bg-white rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                >
                  {/* Top accent bar */}
                  <div
                    className={`h-1.5 w-full bg-gradient-to-r ${industry.gradient}`}
                  />

                  <div className="p-8">
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-xl ${industry.iconBg} flex items-center justify-center`}
                    >
                      <Icon className={`w-7 h-7 ${industry.iconColor}`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-navy mt-5">
                      {industry.title}
                    </h3>

                    {/* Bullet points */}
                    <ul className="space-y-2.5 mt-4">
                      {industry.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-center gap-3 text-sm text-text-muted"
                        >
                          <Check className="w-4 h-4 text-success shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <span className="mt-5 text-blue font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Explore Solutions
                      <span aria-hidden="true">&rarr;</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
