"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const milestones = [
  {
    year: "1999",
    title: "Company Founded",
    description:
      "Contact Center USA was founded by seasoned industry professionals who saw an opportunity to revolutionize the customer service outsourcing space with a commitment to quality and US-based operations.",
  },
  {
    year: "2005",
    title: "National Expansion",
    description:
      "Expanded operations across the United States, establishing multiple contact center locations and serving clients in telecommunications, financial services, and retail.",
  },
  {
    year: "2010",
    title: "Omnichannel Launch",
    description:
      "Launched full omnichannel support capabilities — phone, email, live chat, and social media — all managed under one roof with unified reporting and quality assurance.",
  },
  {
    year: "2015",
    title: "AI Integration",
    description:
      "Integrated AI-powered chatbots, predictive analytics, and intelligent call routing to complement our human agents and deliver faster, more personalized customer experiences.",
  },
  {
    year: "2020",
    title: "3,000+ Employees",
    description:
      "Grew to over 3,000 US-based employees, solidifying our position as one of the largest domestically operated contact center companies serving clients worldwide.",
  },
  {
    year: "2024",
    title: "Next-Gen Platform",
    description:
      "Launched our next-generation contact center platform with advanced AI, real-time sentiment analysis, and seamless CRM integrations to set the standard for modern customer engagement.",
  },
];

const stats = [
  { label: "Founded", value: "1999" },
  { label: "Employees", value: "3,000+" },
  { label: "Years Experience", value: "30+" },
  { label: "Availability", value: "24/7/365" },
];

const industries = [
  "Telecommunications",
  "Healthcare",
  "Financial Services",
  "Gaming",
  "Entertainment",
  "Travel & Hospitality",
  "Retail",
  "Ecommerce",
  "Insurance",
  "Technology",
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
              Company History
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Making Your Customer Service Experience{" "}
              <span className="text-red">Soar</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
              From our founding in 1999 to over 3,000 employees today, discover
              the milestones that shaped Contact Center USA into the trusted
              partner businesses rely on.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-red/[0.015] to-white py-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">
              Our Journey
            </span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">
              Key <span className="text-red">Milestones</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">
              Over two decades of growth, innovation, and commitment to
              exceptional customer service.
            </p>
          </motion.div>

          <div className="relative mt-16">
            {/* Vertical dashed line */}
            <div className="absolute left-6 top-0 hidden h-full border-l-2 border-dashed border-gray-200 lg:left-1/2 lg:-translate-x-px lg:block" />
            <div className="absolute left-6 top-0 block h-full border-l-2 border-dashed border-gray-200 lg:hidden" />

            <div className="space-y-12 lg:space-y-16">
              {milestones.map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex items-start gap-8 lg:items-center"
                >
                  {/* Mobile & Desktop layout */}
                  <div className="hidden w-full lg:flex lg:items-center lg:gap-12">
                    {/* Left content (even items) */}
                    <div
                      className={`flex-1 ${
                        i % 2 === 0 ? "text-right" : "text-right opacity-0"
                      }`}
                    >
                      {i % 2 === 0 && (
                        <div>
                          <span className="text-sm font-bold text-red">
                            {milestone.year}
                          </span>
                          <h3 className="mt-1 text-xl font-bold text-navy">
                            {milestone.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-gray-700">
                            {milestone.description}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Center dot */}
                    <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red text-sm font-bold text-white shadow-lg">
                      {milestone.year.slice(-2)}
                    </div>

                    {/* Right content (odd items) */}
                    <div
                      className={`flex-1 ${
                        i % 2 !== 0 ? "text-left" : "text-left opacity-0"
                      }`}
                    >
                      {i % 2 !== 0 && (
                        <div>
                          <span className="text-sm font-bold text-red">
                            {milestone.year}
                          </span>
                          <h3 className="mt-1 text-xl font-bold text-navy">
                            {milestone.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-gray-700">
                            {milestone.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Mobile layout */}
                  <div className="flex items-start gap-6 lg:hidden">
                    <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red text-sm font-bold text-white shadow-lg">
                      {milestone.year.slice(-2)}
                    </div>
                    <div>
                      <span className="text-sm font-bold text-red">
                        {milestone.year}
                      </span>
                      <h3 className="mt-1 text-xl font-bold text-navy">
                        {milestone.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-700">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission — Video + Content */}
      <section className="relative overflow-hidden bg-white py-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            {/* Left — Video */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative min-h-[400px] overflow-hidden rounded-2xl shadow-2xl lg:min-h-[500px]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                  poster="/images/cc-management.jpg"
                >
                  <source src="/images/video-3.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </motion.div>

            {/* Right — Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">
                Our Mission
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-navy sm:text-4xl">
                It&apos;s All About the{" "}
                <span className="text-red">People</span>
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
                At Contact Center USA, our people are our greatest asset. We
                invest heavily in recruiting, training, and empowering our staff
                because we know that the quality of every customer interaction
                depends on the quality of the person behind it.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                With over 3,000 employees across the United States, we have
                built a team that understands American culture, values, and
                customer expectations. Our agents do not just answer calls — they
                represent your brand and enable it to grow.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                Every day, our team helps businesses deliver the kind of
                customer experiences that build loyalty, drive revenue, and set
                brands apart from the competition.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-8 lg:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries */}
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
              Industries
            </span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">
              Industries We <span className="text-red">Serve</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">
              Our experience spans across the most demanding industries in the
              world.
            </p>
          </motion.div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {industries.map((industry, i) => (
              <motion.span
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-navy shadow-sm transition-all hover:bg-red hover:text-white"
              >
                {industry}
              </motion.span>
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
              Ready to Be Part of Our Story?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              Join the thousands of businesses that trust Contact Center USA to
              deliver exceptional customer experiences every day.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-red-dark"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
