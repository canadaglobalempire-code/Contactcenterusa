"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero2() {

  return (
    <section className="relative h-[100vh] min-h-[600px] overflow-hidden">
      {/* Video Background */}
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

      {/* Cinematic black overlay */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between px-5 lg:px-8">
        {/* Main centered content */}
        <div className="flex flex-1 flex-col items-center justify-center text-center pt-32">
          {/* Top label */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-white/70"
          >
            <span className="h-px w-8 bg-red" />
            24/7 Service &middot; 365 Days a Year &middot; Right Here in the USA!
            <span className="h-px w-8 bg-red" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-5xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[68px]"
          >
            Keep America Great
            <br />
            By Employing Americans
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
          >
            Have your customers had enough of foreign offshore call center
            agents? Grow your brand, protect your reputation, and provide
            customer support with excellence and peace of mind.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[16px] font-semibold text-white transition-all hover:bg-red-dark"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-sm border border-white/30 px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
            >
              Explore Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-sm font-medium text-white/60"
          >
            Over 30 years of experience across multiple industries
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-2 text-lg font-bold text-white"
          >
            Boots on the Ground. Deals on the Line.
          </motion.p>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center justify-between border-t border-white/10 py-5"
        >
          <div className="text-xs uppercase tracking-widest text-white/60">
            Your Call Center — Right Here in the USA
          </div>
          <div className="hidden items-center gap-8 sm:flex">
            <div className="text-xs uppercase tracking-widest text-white/60">
              Scroll to explore
            </div>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut" as const,
              }}
              className="h-8 w-5 rounded-full border border-white/30 p-1"
            >
              <div className="h-2 w-full rounded-full bg-white/50" />
            </motion.div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
