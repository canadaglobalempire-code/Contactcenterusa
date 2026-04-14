"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Plane,
  Zap,
  Landmark,
  AlertTriangle,
  MapPin,
  ShoppingCart,
  Tv,
  Building2,
  Stethoscope,
  Shield,
  Pill,
  Car,
  Phone,
  Store,
  Cpu,
  Users,
} from "lucide-react";

const industries = [
  {
    icon: Plane,
    name: "Airlines",
    href: "/industries/travel-hospitality-call-center",
    capabilities: [
      "Reservation booking and changes",
      "Flight status and delay notifications",
      "Frequent flyer program support",
      "Baggage claim and lost luggage assistance",
    ],
  },
  {
    icon: Zap,
    name: "Energy & Utilities",
    href: null,
    capabilities: [
      "Billing inquiries and payment processing",
      "Outage reporting and status updates",
      "New service setup and transfers",
      "Energy efficiency program enrollment",
    ],
  },
  {
    icon: Landmark,
    name: "Banking & Financial",
    href: "/industries/financial-services-call-center",
    capabilities: [
      "Account inquiries and balance checks",
      "Loan application intake and status",
      "Fraud detection and dispute resolution",
      "PCI-compliant payment processing",
    ],
  },
  {
    icon: AlertTriangle,
    name: "Emergency & Disaster",
    href: null,
    capabilities: [
      "24/7 emergency hotline staffing",
      "Disaster response coordination",
      "Evacuation information lines",
      "Crisis communication management",
    ],
  },
  {
    icon: MapPin,
    name: "Travel & Hospitality",
    href: "/industries/travel-hospitality-call-center",
    capabilities: [
      "Hotel and resort reservations",
      "Concierge and guest services",
      "Loyalty program management",
      "Group booking coordination",
    ],
  },
  {
    icon: ShoppingCart,
    name: "Ecommerce",
    href: "/industries/ecommerce-customer-service-outsourcing",
    capabilities: [
      "Order taking and tracking",
      "Returns and exchange processing",
      "Product inquiry handling",
      "Shopping cart abandonment recovery",
    ],
  },
  {
    icon: Tv,
    name: "Cable & Media",
    href: null,
    capabilities: [
      "Subscription management and upgrades",
      "Technical troubleshooting",
      "Billing and payment support",
      "New service installation scheduling",
    ],
  },
  {
    icon: Building2,
    name: "Government",
    href: null,
    capabilities: [
      "Citizen information hotlines",
      "Benefits enrollment assistance",
      "Public health campaign support",
      "Multilingual constituent services",
    ],
  },
  {
    icon: Stethoscope,
    name: "Healthcare",
    href: "/industries/healthcare-call-center-services",
    capabilities: [
      "HIPAA-compliant patient intake",
      "Appointment scheduling and reminders",
      "Insurance verification",
      "After-hours nurse triage lines",
    ],
  },
  {
    icon: Shield,
    name: "Insurance",
    href: "/industries/insurance-call-center-outsourcing",
    capabilities: [
      "Claims intake and status updates",
      "Policy inquiries and renewals",
      "Quote generation and enrollment",
      "First notice of loss processing",
    ],
  },
  {
    icon: Pill,
    name: "Pharmaceuticals",
    href: null,
    capabilities: [
      "Prescription refill lines",
      "Patient assistance programs",
      "Adverse event reporting",
      "Clinical trial recruitment",
    ],
  },
  {
    icon: Car,
    name: "Automotive",
    href: null,
    capabilities: [
      "Service appointment scheduling",
      "Recall notification campaigns",
      "Roadside assistance coordination",
      "Dealer lead qualification",
    ],
  },
  {
    icon: Phone,
    name: "Telecommunications",
    href: "/industries/saas-technology-support",
    capabilities: [
      "Account management and billing",
      "Technical support and troubleshooting",
      "Plan upgrades and retention",
      "New service activation",
    ],
  },
  {
    icon: Store,
    name: "Retail",
    href: "/industries/ecommerce-customer-service-outsourcing",
    capabilities: [
      "Customer service and inquiries",
      "Order management and returns",
      "Store locator assistance",
      "Loyalty program support",
    ],
  },
  {
    icon: Cpu,
    name: "Technology",
    href: "/industries/saas-technology-support",
    capabilities: [
      "Tier 1 and Tier 2 tech support",
      "SaaS onboarding assistance",
      "License and subscription management",
      "Product feedback collection",
    ],
  },
  {
    icon: Users,
    name: "Associations",
    href: null,
    capabilities: [
      "Membership enrollment and renewals",
      "Event registration and support",
      "Donation processing",
      "Member inquiry hotlines",
    ],
  },
];

export default function Content() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy pt-40 pb-20 lg:pb-28">
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
              Industries We Serve
            </span>
            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Not Just a Call Center —{" "}
              <span className="text-red">Your Strategic Partner</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
              Tailored contact center solutions for 16+ industries, backed by
              decades of expertise and thousands of US-based agents.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              More Than a <span className="text-red">Vendor</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              We are not just a call center service provider. Our goal is to
              complement your company&apos;s marketing and sales efforts as a
              valuable member of your team. Every industry has unique challenges,
              regulations, and customer expectations — and we tailor our approach
              to meet them all.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="bg-gray-50 py-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">
              Industry Expertise
            </span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">
              16+ Industries <span className="text-red">Served</span>
            </h2>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, i) => {
              const CardContent = (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="group rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red/10 text-red transition-all duration-300 group-hover:bg-red group-hover:text-white">
                    <industry.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-navy">
                    {industry.name}
                  </h3>
                  <ul className="mt-3 space-y-1.5">
                    {industry.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                  {industry.href && (
                    <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-red opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Learn more <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  )}
                </motion.div>
              );

              if (industry.href) {
                return (
                  <Link key={industry.name} href={industry.href} className="block">
                    {CardContent}
                  </Link>
                );
              }

              return <div key={industry.name}>{CardContent}</div>;
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/new-flag.jpg"
            alt="American flag"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1536px] px-5 py-20 text-center lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Find Your Industry Solution
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              No matter your industry, we have the experience, technology, and
              people to deliver exceptional customer service on your behalf.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-red-dark"
            >
              Contact Us Today
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
