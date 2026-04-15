"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PatrioticBanner() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left — Flag image — full width of column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/america.jpg"
                alt="American flag representing US-based call center services"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right — Emotional copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 h-1 w-16 bg-red" />
            <h2 className="text-3xl font-bold leading-[1.15] text-navy sm:text-4xl lg:text-[44px]">
              Proudly American.
              <br />
              <span className="text-red">Fiercely Dedicated.</span>
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-gray-700">
              Every call answered by Contact Center USA is answered by a
              real American — someone who understands your customers, your
              culture, and your values. We believe that keeping jobs in
              America is not just good business — it is the right thing to do.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-gray-700">
              When you choose Contact Center USA, you are not just outsourcing
              your customer service. You are investing in American workers,
              American communities, and the American dream.
            </p>

            <div className="mt-8 flex items-center gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-red px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-red-dark"
              >
                Join the Movement
                <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="text-sm text-gray-600">
                <span className="block font-bold text-navy">500+ US Jobs</span>
                Created and counting
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
