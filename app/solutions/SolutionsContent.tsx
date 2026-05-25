"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Headphones,
  PhoneIncoming,
  PhoneOutgoing,
  Monitor,
  FileText,
  DollarSign,
  Landmark,
  Globe,
  Share2,
  Megaphone,
  CheckCircle2,
} from "lucide-react";
import { LeadCTALink } from "@/components/shared/LeadCTALink";

const solutions = [
  {
    icon: Headphones,
    title: "Customer Service",
    desc: "Inbound support, complaint resolution, account management, and customer retention — all handled by US-based professionals.",
    href: "/solutions/customer-service-outsourcing",
    image: "/images/cc-agent-headset.jpg",
  },
  {
    icon: PhoneIncoming,
    title: "Inbound Services",
    desc: "24/7 call answering, order taking, help desk, reservations, and after-hours support to keep your business running.",
    href: "/solutions/inbound-call-center-services",
    image: "/images/cc-agent-smile.jpg",
  },
  {
    icon: PhoneOutgoing,
    title: "Outbound Services",
    desc: "Telemarketing, surveys, follow-up calls, win-back campaigns, and upselling programs that drive revenue growth.",
    href: "/solutions/outbound-call-center-services",
    image: "/images/cc-agent-call.jpg",
  },
  {
    icon: Monitor,
    title: "Technical Support",
    desc: "Tier 1-3 support, troubleshooting, software assistance, hardware support, and IT help desk services.",
    href: "/solutions/technical-support-outsourcing",
    image: "/images/cc-agent-desk.jpg",
  },
  {
    icon: FileText,
    title: "Back Office",
    desc: "Data entry, document processing, email management, order processing, and records management to streamline operations.",
    href: "/solutions/back-office-outsourcing",
    image: "/images/cc-agent-writing.jpg",
  },
  {
    icon: DollarSign,
    title: "Financial Solutions",
    desc: "Payment processing, collections, billing support, account inquiries, and financial compliance services.",
    href: "/solutions/financial-call-center-services",
    image: "/images/cc-agent-pro.jpg",
  },
  {
    icon: Landmark,
    title: "Government Services",
    desc: "Citizen support lines, benefits enrollment, compliance hotlines, and public information services.",
    href: "/solutions/government-call-center-services",
    image: "/images/cc-office-wide.jpg",
  },
  {
    icon: Globe,
    title: "Multilingual Services",
    desc: "Spanish support, translation services, cultural training, and global customer care for diverse audiences.",
    href: "/solutions/multilingual-call-center-services",
    image: "/images/cc-diverse-team.jpg",
  },
  {
    icon: Megaphone,
    title: "Lead Generation",
    desc: "Cold calling, lead qualification, appointment setting, database building, and campaign management.",
    href: "/solutions/lead-generation-appointment-setting",
    image: "/images/cc-team-collab.jpg",
  },
  {
    icon: Share2,
    title: "Social Media",
    desc: "Social monitoring, response management, community engagement, crisis management, and brand reputation.",
    href: "/solutions/social-media-customer-support",
    image: "/images/cc-agent-laptop.jpg",
  },
];

const stats = [
  { value: "10+", label: "Solution Categories" },
  { value: "500+", label: "US-Based Agents" },
  { value: "98%", label: "Client Retention" },
  { value: "24/7/365", label: "Availability" },
];

export default function SolutionsContent() {
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
              Our Solutions
            </span>
            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Tailored Outsourcing Solutions for{" "}
              <span className="text-red">Every Challenge</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
              From customer service to technical support, our US-based teams
              deliver the expertise and scalability your business demands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro: Image Left + Content Right */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <Image
                src="/images/hd-office-team.jpg"
                alt="Contact center team at work"
                width={800}
                height={600}
                className="aspect-[4/3] w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">
                Flexible & Scalable
              </span>
              <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">
                Solutions Built Around{" "}
                <span className="text-red">Your Business</span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-700">
                Every business has unique needs. That is why we offer a full
                range of contact center solutions — from inbound customer
                service to outbound lead generation — all staffed by trained
                US-based professionals who understand your customers.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Rapid deployment with dedicated onboarding",
                  "Customized scripts and workflows",
                  "Real-time reporting and quality assurance",
                  "Seamless integration with your existing systems",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] text-gray-700"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-red" />
                    {item}
                  </li>
                ))}
              </ul>
              <LeadCTALink
                ctaLocation="solutions_index_intro_cta"
                leadOffer="Solution consultation quote"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-red px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-red/25 transition-all hover:bg-red-dark hover:shadow-red/35"
              >
                Discuss Your Needs
                <ArrowRight className="h-4 w-4" />
              </LeadCTALink>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
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
              Full-Service Solutions
            </span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">
              Everything Your Business{" "}
              <span className="text-red">Needs</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">
              Explore our comprehensive suite of contact center solutions, each
              staffed by trained US-based professionals.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, i) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <Link
                    href={solution.href}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:border-red/20 hover:shadow-lg"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={solution.image}
                        alt={solution.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/90 backdrop-blur-sm">
                        <Icon className="h-5 w-5 text-red" />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-lg font-bold text-navy">
                        {solution.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-700">
                        {solution.desc}
                      </p>
                      <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-red">
                        Learn More
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-white sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-white/60">
                  {stat.label}
                </div>
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
              Find the Right Solution for Your Business
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              No matter your challenge, we have the experience, technology, and
              people to deliver exceptional results.
            </p>
            <LeadCTALink
              ctaLocation="solutions_index_bottom_cta"
              leadOffer="Solution consultation quote"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-red-dark"
            >
              Contact Us Today
              <ArrowRight className="h-4 w-4" />
            </LeadCTALink>
          </motion.div>
        </div>
      </section>
    </>
  );
}
