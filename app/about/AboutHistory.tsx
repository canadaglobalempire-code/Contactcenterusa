"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

const stats = [
  { value: 1999, label: "Founded", suffix: "" },
  { value: 500, label: "Employees", suffix: "+" },
  { value: 30, label: "Years Experience", suffix: "+" },
  { value: 24, label: "Hours / 7 Days", suffix: "/7" },
];

const milestones = [
  {
    year: "1999",
    title: "Company Founded",
    desc: "Founded by experienced professionals who knew the customer service industry needed to be improved.",
  },
  {
    year: "2005",
    title: "National Expansion",
    desc: "Expanded operations across the United States, serving clients in telecommunications, financial services, and retail.",
  },
  {
    year: "2012",
    title: "Omnichannel Launch",
    desc: "Launched full omnichannel support — phone, email, live chat, and social media under one roof.",
  },
  {
    year: "2018",
    title: "AI Integration",
    desc: "Integrated AI-powered chatbots and automation tools to complement our human agents.",
  },
  {
    year: "2025",
    title: "500+ Employees",
    desc: "Grew to over 500 US-based employees serving clients worldwide across every major industry.",
  },
];

export function AboutHistory() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-red/[0.015] to-white py-28">
      <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 grid grid-cols-2 gap-6 rounded-2xl bg-gray-50 p-8 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-navy sm:text-4xl">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">
            Company History
          </span>
          <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">
            Our <span className="text-red">Journey</span>
          </h2>
        </motion.div>

        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gray-200 lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`relative flex flex-col lg:flex-row ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-8 lg:gap-16`}
              >
                <div
                  className={`flex-1 ${
                    i % 2 === 0 ? "lg:text-right" : "lg:text-left"
                  }`}
                >
                  <div className="text-sm font-bold text-red">
                    {milestone.year}
                  </div>
                  <h3 className="mt-1 text-xl font-bold text-navy">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-700">
                    {milestone.desc}
                  </p>
                </div>

                {/* Center dot */}
                <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red text-white font-bold text-sm shadow-lg">
                  {milestone.year.slice(-2)}
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Infrastructure section */}
        <div className="mt-28 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Enterprise-Grade <span className="text-red">Infrastructure</span>
            </h2>
            <p className="mt-5 text-gray-700">
              Our technical infrastructure is built for reliability, security,
              and scalability to serve the most demanding enterprise clients.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-red" />
                Complete N+1 redundancy systems
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-red" />
                Multiple IPLC and MPL connections
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-red" />
                Private virtual networks with encryption
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-red" />
                Redundant 100 Mbps fiber optic backup lines
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-red" />
                Dual redundant data centers
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-red" />
                SOC 2, HIPAA, and PCI DSS compliance
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl"
          >
            <Image
              src="/images/hd-agents-row.jpg"
              alt="Contact Center USA agents working at enterprise-grade call center workstations"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
