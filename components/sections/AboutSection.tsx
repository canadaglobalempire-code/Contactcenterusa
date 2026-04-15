"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Headphones,
  CheckCircle,
} from "lucide-react";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

const highlights = [
  "100% US-based agents — no offshore outsourcing",
  "Omnichannel support: phone, email, chat, social media",
  "Scalable from 5 to 500+ agents on demand",
  "SOC 2, HIPAA, and PCI DSS compliant",
];


export function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-red/[0.02] to-white py-28">
      {/* Decorative bg elements */}
      <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-red/[0.02] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-navy/[0.02] blur-3xl" />

      <div className="relative mx-auto max-w-[1536px] px-5 lg:px-8">
        {/* Top: Split — Image left, Content right */}
        <div className="grid grid-cols-1 items-stretch gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left — Image composition — full height */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[500px] lg:min-h-0"
          >
            {/* Background decorative shape */}
            <div className="absolute -left-6 -top-6 h-full w-full rounded-3xl bg-gray-50" />

            {/* Video — fills full height */}
            <div className="relative z-10 h-full min-h-[450px] overflow-hidden rounded-2xl shadow-2xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
                poster="/images/hd-agents-working.jpg"
              >
                <source src="/images/hero-video.mp4" type="video/mp4" />
              </video>
              {/* Cinematic overlay */}
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
            </div>


            {/* Floating stats card — top right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -right-4 top-6 z-20 rounded-2xl bg-white px-6 py-5 shadow-xl lg:-right-10"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red/10">
                  <Users className="h-6 w-6 text-red" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-navy">
                    <AnimatedCounter target={500} suffix="+" />
                  </div>
                  <div className="text-sm text-gray-600">Trained Agents</div>
                </div>
              </div>
            </motion.div>

            {/* Floating experience badge — bottom left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -left-4 bottom-12 z-20 rounded-2xl bg-red px-6 py-5 text-white shadow-xl lg:-left-8"
            >
              <div className="text-3xl font-bold">
                <AnimatedCounter target={30} suffix="+" />
              </div>
              <div className="text-sm text-white/80">Years of Experience</div>
            </motion.div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">
              <Headphones className="h-4 w-4" />
              Who We Are
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-navy sm:text-4xl lg:text-[44px]">
              The #1 Choice for
              <br />
              <span className="text-red">Call Center Outsourcing</span>
            </h2>

            <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
              Our complete suite of outsourced customer service and call center
              services opens the door to global client services for your brand.
              From text responses to social media customer support, back office
              services, email or telemarketing — Contact Center USA takes
              customer service to the next level.
            </p>

            {/* Checkmark highlights */}
            <div className="mt-8 space-y-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-red" />
                  <span className="text-[15px] text-gray-600">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats strip */}
            <div className="mt-10 flex items-center rounded-2xl bg-gray-50 p-6">
              <div className="flex-1 text-center">
                <div className="text-2xl font-bold text-navy sm:text-3xl">
                  <AnimatedCounter target={98} suffix="%" />
                </div>
                <div className="mt-1 text-sm text-gray-600">
                  Client Satisfaction
                </div>
              </div>
              <div className="h-10 w-px bg-gray-200" />
              <div className="flex-1 text-center">
                <div className="text-2xl font-bold text-navy sm:text-3xl">
                  24/7
                </div>
                <div className="mt-1 text-sm text-gray-600">
                  Always Available
                </div>
              </div>
              <div className="h-10 w-px bg-gray-200" />
              <div className="flex-1 text-center">
                <div className="text-2xl font-bold text-navy sm:text-3xl">
                  &lt;48h
                </div>
                <div className="mt-1 text-sm text-gray-600">Setup Time</div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-red px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-red-dark"
              >
                Get Started Today
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-7 py-3.5 text-[15px] font-semibold text-navy transition-all hover:border-gray-300 hover:bg-gray-50"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
