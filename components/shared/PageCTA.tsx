"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/lib/seo-config";

interface PageCTAProps {
  heading?: string;
  subtitle?: string;
}

export function PageCTA({
  heading = "Ready to Get Started?",
  subtitle = "Contact us today for a free consultation. Let us show you how we can transform your customer experience.",
}: PageCTAProps) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative z-10 mx-auto max-w-[1536px] px-5 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl text-center lg:text-left"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {heading}
            </h2>
            <p className="mt-3 text-white/60">{subtitle}</p>
          </motion.div>

          {/* Right — CTA buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-red-dark"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-8 py-4 text-[15px] font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
            >
          </motion.div>
        </div>
      </div>
    </section>
  );
}
