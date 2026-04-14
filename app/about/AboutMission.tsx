"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const capabilities = [
  "Outsourced Telemarketing",
  "B2B and B2C Outbound Marketing",
  "Inbound Customer Service & Sales",
  "Technical Support & Help Desk",
  "Back Office & Data Solutions",
  "Omnichannel Service Delivery",
];

export function AboutMission() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-red/[0.02] to-white py-28">
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
                poster="/images/hd-agents-working.jpg"
              >
                <source src="/images/video-1.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 rounded-2xl bg-red px-6 py-5 text-white shadow-xl"
            >
              <div className="text-3xl font-bold">3,000+</div>
              <div className="text-sm text-white/80">Employees Nationwide</div>
            </motion.div>
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
              It is All About the <span className="text-red">People</span>
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
              Specializing in outsourced telemarketing, B2B and B2C outbound
              marketing, and inbound customer service and sales, Contact Center
              USA provides world-class customer service with our emphasis on
              quality, training, integrity, and service.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
              Our agents are located right here in the United States and are not
              only trained to become experts in your customers' needs and your
              brand, but they already have an understanding of your customers'
              cultures and needs.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {capabilities.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="flex items-center gap-2.5"
                >
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-red" />
                  <span className="text-sm text-gray-600">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
