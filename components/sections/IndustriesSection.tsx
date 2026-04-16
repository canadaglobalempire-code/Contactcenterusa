"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  ShoppingCart,
  Building2,
  Home,
  Monitor,
  Shield,
  Plane,
  Truck,
  GraduationCap,
  Banknote,
} from "lucide-react";

const industries = [
  {
    icon: Heart,
    label: "Healthcare",
    desc: "HIPAA-compliant patient support, scheduling, and triage",
    href: "/industries/healthcare-call-center-services",
    color: "#f43f5e",
    lightBg: "#fff1f2",
  },
  {
    icon: ShoppingCart,
    label: "Ecommerce & Retail",
    desc: "Order support, returns, and peak season coverage",
    href: "/industries/ecommerce-customer-service-outsourcing",
    color: "#10b981",
    lightBg: "#ecfdf5",
  },
  {
    icon: Building2,
    label: "Financial Services",
    desc: "Secure transaction support and fraud prevention",
    href: "/industries/financial-services-call-center",
    color: "#2563eb",
    lightBg: "#eff6ff",
  },
  {
    icon: Home,
    label: "Real Estate",
    desc: "Lead qualification, showings, and investor support",
    href: "/industries/real-estate-call-center-services",
    color: "#f59e0b",
    lightBg: "#fffbeb",
  },
  {
    icon: Monitor,
    label: "SaaS & Technology",
    desc: "Technical support, onboarding, and customer success",
    href: "/industries/saas-technology-support",
    color: "#8b5cf6",
    lightBg: "#f5f3ff",
  },
  {
    icon: Shield,
    label: "Insurance",
    desc: "Claims processing, policy inquiries, and enrollment",
    href: "/industries/insurance-call-center-outsourcing",
    color: "#14b8a6",
    lightBg: "#f0fdfa",
  },
  {
    icon: Plane,
    label: "Travel & Hospitality",
    desc: "Reservations, cancellations, and concierge services",
    href: "/industries/travel-hospitality-call-center",
    color: "#0ea5e9",
    lightBg: "#f0f9ff",
  },
  {
    icon: Truck,
    label: "Logistics & Shipping",
    desc: "Tracking, dispatch support, and delivery inquiries",
    href: "/industries/logistics-shipping-call-center",
    color: "#f97316",
    lightBg: "#fff7ed",
  },
  {
    icon: GraduationCap,
    label: "Education",
    desc: "Enrollment support, student services, and alumni relations",
    href: "/industries/education-call-center-services",
    color: "#6366f1",
    lightBg: "#eef2ff",
  },
  {
    icon: Banknote,
    label: "Banking & Financial Services",
    desc: "Account support, loan processing, and digital banking",
    href: "/industries/banking-financial-services-call-center",
    color: "#16a34a",
    lightBg: "#f0fdf4",
  },
];

export function IndustriesSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-tr from-white via-red/[0.015] to-white py-28">
      <div className="gradient-orb-red -bottom-40 -right-40" />
      <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">
            Industries We Serve
          </span>
          <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl lg:text-[44px]">
            Expertise Across{" "}
            <span className="text-red">Every Industry</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] text-gray-700">
            Over 30 years of experience across multiple industries. Specialized
            training, compliance protocols, and domain knowledge for every sector.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <Link
                href={industry.href}
                className="group block rounded-2xl border border-gray-100 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:text-white group-hover:shadow-lg"
                  style={{
                    backgroundColor: industry.lightBg,
                    color: industry.color,
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.backgroundColor = industry.color;
                    el.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.backgroundColor = industry.lightBg;
                    el.style.color = industry.color;
                  }}
                >
                  <industry.icon className="h-6 w-6" />
                </div>
                <h4 className="mt-4 text-sm font-bold text-navy">
                  {industry.label}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                  {industry.desc}
                </p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-red opacity-0 transition-all group-hover:opacity-100">
                  Learn More
                  <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
