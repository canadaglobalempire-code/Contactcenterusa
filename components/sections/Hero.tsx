"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Headphones } from "lucide-react";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F7F8FC] pb-8 lg:pb-0">
      <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
        <div className="grid min-h-[calc(100vh-72px)] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left — Text Content */}
          <div className="pt-12 lg:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Small badge */}
              <span className="inline-flex items-center gap-2 rounded-full bg-blue/10 px-4 py-1.5 text-sm font-medium text-blue">
                <Headphones className="h-4 w-4" />
                US-Based Call Center Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 text-[40px] font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-[56px]"
            >
              A smarter way to{" "}
              <span className="text-blue">outsource</span>{" "}
              & grow your business
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-lg text-[17px] leading-relaxed text-gray-700"
            >
              Contact Center USA provides 24/7 inbound & outbound support
              with dedicated US agents. Flexible pricing, no long-term
              contracts, and go live in as little as 48 hours.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-blue px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-blue/20 transition-all hover:bg-blue/90 hover:shadow-blue/30"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3.5 text-[15px] font-semibold text-navy transition-all hover:border-gray-400 hover:bg-gray-50"
              >
                Learn more
              </Link>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-14 flex items-center gap-0"
            >
              <div className="pr-6">
                <div className="text-2xl font-bold text-navy sm:text-3xl">
                  <AnimatedCounter target={500} suffix="+" />
                </div>
                <div className="mt-0.5 text-sm text-gray-600">
                  Trained Agents
                </div>
              </div>
              <div className="h-10 w-px bg-gray-200" />
              <div className="px-6">
                <div className="text-2xl font-bold text-navy sm:text-3xl">
                  <AnimatedCounter target={98.5} suffix="%" decimals={1} />
                </div>
                <div className="mt-0.5 text-sm text-gray-600">
                  Client Satisfaction
                </div>
              </div>
              <div className="h-10 w-px bg-gray-200" />
              <div className="pl-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue/10">
                  <Headphones className="h-5 w-5 text-blue" />
                </div>
                <div className="text-sm text-gray-600">
                  24/7<br />
                  <span className="font-medium text-navy">Support</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — Image Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center py-8 lg:py-16"
          >
            {/* Decorative shapes */}
            <motion.div
              className="absolute -top-4 right-16 h-16 w-16 rounded-full bg-blue/10"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" as const }}
            />
            <motion.div
              className="absolute top-24 -left-4 h-8 w-8 rounded-full bg-emerald-200/60"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" as const }}
            />
            <motion.div
              className="absolute bottom-20 right-8 h-6 w-6 rounded-full bg-amber-200/60"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" as const }}
            />
            {/* Decorative star */}
            <motion.div
              className="absolute top-16 left-20 text-blue/20"
              animate={{ rotate: [0, 180, 360] }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41Z" />
              </svg>
            </motion.div>
            <motion.div
              className="absolute bottom-32 -left-2 text-emerald-300/30"
              animate={{ rotate: [0, -180, -360] }}
              transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41Z" />
              </svg>
            </motion.div>

            {/* Image collage grid */}
            <div className="relative w-full max-w-[520px]">
              <div className="grid grid-cols-12 grid-rows-6 gap-3" style={{ height: "520px" }}>
                {/* Top-left large image */}
                <div className="col-span-7 row-span-4 overflow-hidden rounded-3xl">
                  <div className="relative h-full w-full">
                    <Image
                      src="/images/agent-smiling.jpg"
                      alt="Call center agent smiling"
                      fill
                      sizes="(max-width: 1280px) 100vw, 370px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Top-right image */}
                <div className="col-span-5 row-span-3 overflow-hidden rounded-3xl">
                  <div className="relative h-full w-full">
                    <Image
                      src="/images/about-us.jpg"
                      alt="Professional agent with headset"
                      fill
                      sizes="(max-width: 1280px) 100vw, 250px"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Middle-right small icon card */}
                <div className="col-span-5 row-span-1 flex items-center justify-center rounded-2xl bg-blue/10">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue text-white">
                      <Headphones className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-semibold text-navy">
                      Always Available
                    </span>
                  </div>
                </div>

                {/* Bottom-left image */}
                <div className="col-span-5 row-span-2 overflow-hidden rounded-3xl">
                  <div className="relative h-full w-full">
                    <Image
                      src="/images/hero-agent-3.jpg"
                      alt="Diverse team of agents"
                      fill
                      sizes="(max-width: 1280px) 100vw, 220px"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Bottom-right image */}
                <div className="col-span-7 row-span-2 overflow-hidden rounded-3xl">
                  <div className="relative h-full w-full">
                    <Image
                      src="/images/call-center-team.jpg"
                      alt="Call center team working"
                      fill
                      sizes="(max-width: 1280px) 100vw, 310px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
