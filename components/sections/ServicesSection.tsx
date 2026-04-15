"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  PhoneIncoming,
  PhoneOutgoing,
  Headphones,
  MessageSquare,
  Clock,
  Globe,
  CalendarCheck,
  FileText,
  Bot,
  BrainCircuit,
  Smartphone,
} from "lucide-react";

const services = [
  {
    icon: PhoneIncoming,
    title: "Inbound Call Center",
    desc: "Professional agents handling customer inquiries, order processing, and support calls with first-call resolution.",
    href: "/solutions/inbound-call-center-services",
    image: "/images/team-thumbsup.jpg",
  },
  {
    icon: PhoneOutgoing,
    title: "Outbound Call Center",
    desc: "Proactive outreach for lead generation, sales calls, market research, and customer follow-ups.",
    href: "/solutions/outbound-call-center-services",
    image: "/images/hero-agent-2.jpg",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    desc: "Omnichannel customer service across phone, email, live chat, and social media platforms.",
    href: "/solutions/customer-service-outsourcing",
    image: "/images/agent-smiling.jpg",
  },
  {
    icon: MessageSquare,
    title: "Technical Support",
    desc: "Expert troubleshooting, help desk, and tier 1-2 technical support for your products.",
    href: "/solutions/technical-support-outsourcing",
    image: "/images/agent-close.jpg",
  },
  {
    icon: Clock,
    title: "24/7 Answering",
    desc: "Never miss a call. Round-the-clock live answering, after-hours support, and emergency response.",
    href: "/solutions/inbound-call-center-services",
    image: "/images/agent-female-office.jpg",
  },
  {
    icon: Globe,
    title: "Bilingual Support",
    desc: "English and Spanish-speaking agents ready to serve your diverse customer base.",
    href: "/solutions/multilingual-call-center-services",
    image: "/images/agents-team-row.jpg",
  },
  {
    icon: CalendarCheck,
    title: "B2B Appointment Setting",
    desc: "Qualified meetings booked directly on your sales team's calendar with decision-makers.",
    href: "/solutions/lead-generation-appointment-setting",
    image: "/images/team-collaboration.jpg",
  },
  {
    icon: FileText,
    title: "Back Office Support",
    desc: "Data entry, email management, document processing, and admin tasks handled professionally.",
    href: "/solutions/back-office-outsourcing",
    image: "/images/agents-row.jpg",
  },
  {
    icon: Headphones,
    title: "Virtual Assistants",
    desc: "Dedicated remote assistants for scheduling, correspondence, research, and daily operations.",
    href: "/solutions/customer-service-outsourcing",
    image: "/images/agent-woman-office.jpg",
  },
  {
    icon: Bot,
    title: "AI Chatbot Solutions",
    desc: "Intelligent conversational AI that handles routine queries 24/7, seamlessly escalating to live agents when needed.",
    href: "/services/ai-call-center-automation",
    image: "/images/agent-female-office.jpg",
  },
  {
    icon: BrainCircuit,
    title: "AI Integration & Automation",
    desc: "Smart call routing, sentiment analysis, predictive analytics, and workflow automation powered by AI.",
    href: "/services/ai-call-center-automation",
    image: "/images/hero-agent-1.jpg",
  },
  {
    icon: Smartphone,
    title: "Omnichannel CX Platform",
    desc: "Unified customer experience across voice, SMS, email, social media, mobile apps, and live chat.",
    href: "/services/omnichannel-contact-center-solutions",
    image: "/images/diverse-team.jpg",
  },
];

export function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-red/[0.03] py-28">
      <div className="gradient-orb-red -top-40 -right-40" />
      <div className="gradient-orb-blue -bottom-40 -left-40" />
      <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">
            Our Services
          </span>
          <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl lg:text-[44px]">
            Complete Call Center{" "}
            <span className="text-red">Solutions</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] text-gray-700">
            Create the omnichannel customer experiences your customers deserve.
            From text responses to social media, we take customer service to the
            next level.
          </p>
        </motion.div>

        {/* 3x3 Grid — all services with images */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                href={service.href}
                className="group block h-full overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} — Contact Center USA service`}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  {/* Icon badge */}
                  <div className="absolute bottom-4 left-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-red shadow-md">
                    <service.icon className="h-5 w-5" />
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {service.desc}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-red transition-all group-hover:gap-3">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-700">
            Not sure which service is right for you?
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-red-dark"
          >
            Talk to a Specialist
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
