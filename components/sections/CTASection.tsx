"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/seo-config";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-red/[0.02] to-white py-28">
      <div className="gradient-orb-red -top-40 -right-40" />
      <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Left — CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">
              Get in Touch
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-navy sm:text-4xl lg:text-[44px]">
              Ready to Keep America Great?
              <br />
              <span className="text-red">Let&apos;s Talk.</span>
            </h2>

            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-gray-700">
              We are here to provide you with the services you need and create
              the customized solutions your business demands. Talk to us today
              and let us tell you how we can make a difference.
            </p>

            {/* Contact details */}
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-red/10">
                  <Phone className="h-5 w-5 text-red" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Call Us</div>
                  <a
                    className="text-lg font-bold text-navy hover:text-red transition-colors"
                  >
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-red/10">
                  <Mail className="h-5 w-5 text-red" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Email Us</div>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-lg font-bold text-navy hover:text-red transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-red/10">
                  <MapPin className="h-5 w-5 text-red" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Location</div>
                  <div className="font-bold text-navy">United States</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-red/10">
                  <Clock className="h-5 w-5 text-red" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Availability</div>
                  <div className="font-bold text-navy">24/7/365</div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-red-dark"
              >
                Get Your Free Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-8 py-4 text-[15px] font-semibold text-navy transition-all hover:border-gray-300 hover:bg-gray-50"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </motion.div>

          {/* Right — Video with overlay */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative lg:col-span-2"
          >
            <div className="relative h-full min-h-[400px] overflow-hidden rounded-3xl shadow-2xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
                poster="/images/hd-agents-row.jpg"
              >
                <source src="/images/video-3.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />

              {/* Overlay content */}
              <div className="absolute inset-x-0 bottom-0 p-8">
                <div className="text-3xl font-bold text-white">
                  Your Team
                  <br />
                  is Ready.
                </div>
                <div className="mt-3 text-sm text-white/70">
                  Located in the United States, our agents provide service that
                  is easy to plan and quick to launch.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
