"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const awards = [
  { src: "/images/awards/1.png", alt: "PCI DSS Compliant" },
  { src: "/images/awards/2.png", alt: "AICPA SOC Certified" },
  { src: "/images/awards/3.png", alt: "CCAP - Serving the World" },
  { src: "/images/awards/4.png", alt: "Industry Certification" },
  { src: "/images/awards/5.png", alt: "Global Recognition Awards" },
  { src: "/images/awards/7.png", alt: "Globee Awards - Customer Excellence" },
  { src: "/images/awards/8.png", alt: "Industry Award" },
  { src: "/images/awards/9.png", alt: "Forrester 2025 Awards" },
  { src: "/images/awards/10.png", alt: "Industry Certification" },
  { src: "/images/awards/12.png", alt: "Industry Award" },
  { src: "/images/awards/Hipaa-200x155-1.webp", alt: "HIPAA Compliant" },
];

export function AwardsCarousel() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white py-20 border-b border-gray-100">
      <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">
            Trusted & Certified
          </span>
          <h3 className="mt-4 text-2xl font-bold text-navy sm:text-3xl">
            Award-Winning Service You Can Count On
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-gray-700">
            Recognized by the industry&apos;s most respected organizations for
            excellence in customer service and compliance.
          </p>
        </motion.div>
      </div>

      {/* Infinite scrolling carousel */}
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />

        {/* Track */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex items-center gap-16 pl-16"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* Duplicate for seamless loop */}
            {[...awards, ...awards].map((award, i) => (
              <div
                key={i}
                className="flex h-[90px] w-[140px] flex-shrink-0 items-center justify-center grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              >
                <Image
                  src={award.src}
                  alt={award.alt}
                  width={140}
                  height={90}
                  className="h-auto max-h-[80px] w-auto max-w-[130px] object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
