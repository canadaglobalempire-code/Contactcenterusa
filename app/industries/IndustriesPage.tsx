"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart, ShoppingCart, Landmark, Building2, Monitor, ShieldCheck, Plane, Truck, GraduationCap, Wallet } from "lucide-react";
import { LeadCTALink } from "@/components/shared/LeadCTALink";

const industries = [
  {
    icon: Heart,
    name: "Healthcare",
    href: "/industries/healthcare-call-center-services",
    color: "bg-rose-100 text-rose-600",
    hoverColor: "group-hover:bg-rose-600 group-hover:text-white",
    bullets: [
      "Patient scheduling & appointment reminders",
      "Insurance verification & benefits inquiries",
      "HIPAA-compliant call handling",
      "After-hours nurse triage support",
    ],
  },
  {
    icon: ShoppingCart,
    name: "Ecommerce & Retail",
    href: "/industries/ecommerce-customer-service-outsourcing",
    color: "bg-emerald-100 text-emerald-600",
    hoverColor: "group-hover:bg-emerald-600 group-hover:text-white",
    bullets: [
      "Order tracking & returns management",
      "Product inquiries & upselling",
      "Live chat & email support",
      "Peak season surge staffing",
    ],
  },
  {
    icon: Landmark,
    name: "Financial Services",
    href: "/industries/financial-services-call-center",
    color: "bg-blue-100 text-blue-600",
    hoverColor: "group-hover:bg-blue-600 group-hover:text-white",
    bullets: [
      "Account inquiries & transaction support",
      "Fraud detection & dispute resolution",
      "Loan origination & processing",
      "Regulatory-compliant communications",
    ],
  },
  {
    icon: Building2,
    name: "Real Estate",
    href: "/industries/real-estate-call-center-services",
    color: "bg-amber-100 text-amber-600",
    hoverColor: "group-hover:bg-amber-600 group-hover:text-white",
    bullets: [
      "Lead qualification & follow-up",
      "Property inquiry handling",
      "Appointment scheduling for showings",
      "Tenant support & maintenance requests",
    ],
  },
  {
    icon: Monitor,
    name: "SaaS & Technology",
    href: "/industries/saas-technology-support",
    color: "bg-purple-100 text-purple-600",
    hoverColor: "group-hover:bg-purple-600 group-hover:text-white",
    bullets: [
      "Technical support & troubleshooting",
      "Onboarding & product walkthroughs",
      "Subscription management & billing",
      "Tier-1 and Tier-2 help desk",
    ],
  },
  {
    icon: ShieldCheck,
    name: "Insurance",
    href: "/industries/insurance-call-center-outsourcing",
    color: "bg-teal-100 text-teal-600",
    hoverColor: "group-hover:bg-teal-600 group-hover:text-white",
    bullets: [
      "Claims intake & status updates",
      "Policy renewals & modifications",
      "Enrollment & benefits support",
      "Compliance-driven call scripting",
    ],
  },
  {
    icon: Plane,
    name: "Travel & Hospitality",
    href: "/industries/travel-hospitality-call-center",
    color: "bg-sky-100 text-sky-600",
    hoverColor: "group-hover:bg-sky-600 group-hover:text-white",
    bullets: [
      "Reservation booking & modifications",
      "Loyalty program support",
      "Concierge & guest services",
      "24/7 emergency travel assistance",
    ],
  },
  {
    icon: Truck,
    name: "Logistics & Shipping",
    href: "/industries/logistics-shipping-call-center",
    color: "bg-orange-100 text-orange-600",
    hoverColor: "group-hover:bg-orange-600 group-hover:text-white",
    bullets: [
      "Shipment tracking & delivery updates",
      "Dispatch & route coordination",
      "Claims processing & damage reports",
      "Vendor & carrier communication",
    ],
  },
  {
    icon: GraduationCap,
    name: "Education",
    href: "/industries/education-call-center-services",
    color: "bg-indigo-100 text-indigo-600",
    hoverColor: "group-hover:bg-indigo-600 group-hover:text-white",
    bullets: [
      "Student enrollment & admissions support",
      "Financial aid & tuition inquiries",
      "Alumni engagement & fundraising",
      "IT help desk for students & faculty",
    ],
  },
  {
    icon: Wallet,
    name: "Banking & Financial Services",
    href: "/industries/banking-financial-services-call-center",
    color: "bg-green-100 text-green-600",
    hoverColor: "group-hover:bg-green-600 group-hover:text-white",
    bullets: [
      "Account opening & KYC verification",
      "Mobile banking & app support",
      "Payment processing assistance",
      "Fraud alerts & account security",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <>
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
              Industries We Serve
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Deep Expertise Across{" "}
              <br /><span className="text-red">Your Industry</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
              From healthcare to fintech, our specialized teams understand the
              unique challenges of your industry and deliver tailored solutions
              that drive results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group flex h-full min-h-[280px] flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-gray-200"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 ${industry.color} ${industry.hoverColor}`}
                >
                  <industry.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy">
                  {industry.name}
                </h3>
                <ul className="mt-4 flex-1 space-y-2.5">
                  {industry.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link
                  href={industry.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-red transition-colors hover:text-red-dark"
                >
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/new-flag.jpg"
            alt="American flag background representing US-based call center services across multiple industries"
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
              Ready to Partner With Industry Experts?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              No matter your industry, our specialized teams are ready to
              deliver exceptional customer experiences on your behalf.
            </p>
            <LeadCTALink
              ctaLocation="industries_index_bottom_cta"
              leadOffer="Industry call center quote"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-red-dark"
            >
              Get a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </LeadCTALink>
          </motion.div>
        </div>
      </section>
    </>
  );
}
