"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const faces = [
  "/images/hero-agent-1.jpg",
  "/images/about-us.jpg",
  "/images/hero-agent-3.jpg",
  "/images/agent-smiling.jpg",
  "/images/agent-focused.jpg",
  "/images/hero-agent-2.jpg",
  "/images/agent-female-office.jpg",
  "/images/agent-close.jpg",
  "/images/agents-office-pair.jpg",
  "/images/team-collaboration.jpg",
  "/images/agents-team-row.jpg",
  "/images/agent-woman-office.jpg",
];

export function TeamStrip() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <h3 className="text-2xl font-bold text-navy sm:text-3xl">
          The Faces Behind Every Call
        </h3>
        <p className="mx-auto mt-3 max-w-lg text-gray-700">
          Real people. Real Americans. Dedicated to your customers like
          they&apos;re our own.
        </p>
      </motion.div>

      {/* Scrolling faces — row 1 (left to right) */}
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-4 pl-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {[...faces, ...faces].map((src, i) => (
              <div
                key={i}
                className="relative h-[200px] w-[280px] flex-shrink-0 overflow-hidden rounded-2xl"
              >
                <Image
                  src={src}
                  alt="Team member"
                  fill
                  className="object-cover object-top transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity hover:opacity-100" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scrolling faces — row 2 (right to left, offset) */}
      <div className="relative mt-4">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-4 pl-4"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 45,
                ease: "linear",
              },
            }}
          >
            {[...faces.slice().reverse(), ...faces.slice().reverse()].map(
              (src, i) => (
                <div
                  key={i}
                  className="relative h-[200px] w-[280px] flex-shrink-0 overflow-hidden rounded-2xl"
                >
                  <Image
                    src={src}
                    alt="Team member"
                    fill
                    className="object-cover object-top transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity hover:opacity-100" />
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
