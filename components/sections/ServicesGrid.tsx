"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  PhoneIncoming,
  PhoneOutgoing,
  Clock,
  Languages,
  FileText,
  CalendarCheck,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";

const services = [
  {
    icon: PhoneIncoming,
    title: "Inbound Call Center Services",
    description:
      "Professional agents handling customer inquiries, order processing, and support calls. First-call resolution focused with real-time quality monitoring.",
    href: "/services/inbound",
  },
  {
    icon: PhoneOutgoing,
    title: "Outbound Call Center Services",
    description:
      "Proactive outreach for lead generation, sales calls, market research, and customer follow-ups. Data-driven campaigns that deliver results.",
    href: "/services/outbound",
  },
  {
    icon: Clock,
    title: "24/7 Answering Services",
    description:
      "Never miss a call. Round-the-clock live answering, after-hours support, overflow handling, and emergency response lines.",
    href: "/services/24-7-answering",
  },
  {
    icon: Languages,
    title: "Bilingual Support",
    description:
      "English and Spanish-speaking agents ready to serve your diverse customer base. Additional languages available on request.",
    href: "/services/bilingual",
  },
  {
    icon: FileText,
    title: "Back Office Support",
    description:
      "Data entry, email management, chat support, document processing, and administrative tasks handled by trained professionals.",
    href: "/services/back-office",
  },
  {
    icon: CalendarCheck,
    title: "B2B Appointment Setting",
    description:
      "Qualified meetings booked directly on your sales team's calendar. Targeted outreach to decision-makers in your ideal customer profile.",
    href: "/services/b2b-appointment-setting",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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

export function ServicesGrid() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-[1536px] px-4 sm:px-6">
        <SectionHeader
          label="WHAT WE DO"
          title="End-to-End Contact Center Solutions"
          subtitle="Customized outsourcing programs designed to elevate your customer experience and drive business growth."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div key={service.href} variants={cardVariants}>
              <Link href={service.href} className="group block h-full">
                <div className="relative h-full overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                  {/* Top gradient accent line */}
                  <div className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-blue to-cyan-400 transition-all duration-500 group-hover:w-full" />

                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue/10 to-accent-blue">
                    <service.icon className="h-6 w-6 text-blue" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-xl font-bold text-navy">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-[15px] leading-relaxed text-text-muted">
                    {service.description}
                  </p>

                  {/* Learn More link */}
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue transition-all group-hover:gap-2">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Services CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2E75B6] to-[#3B8DD4] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02] hover:shadow-blue-500/30"
          >
            View All Services
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
