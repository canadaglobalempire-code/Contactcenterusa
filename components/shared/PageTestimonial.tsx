"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface PageTestimonialProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  initials: string;
}

export function PageTestimonial({
  quote,
  name,
  title,
  company,
  initials,
}: PageTestimonialProps) {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-24">
      <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <div className="relative rounded-3xl bg-white p-10 shadow-lg lg:p-14">
            {/* Large decorative quote mark */}
            <div className="absolute -top-5 left-10 flex h-12 w-12 items-center justify-center rounded-full bg-red text-2xl font-bold text-white shadow-lg">
              &ldquo;
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-amber-400 text-amber-400"
                />
              ))}
            </div>

            {/* Quote */}
            <p className="mt-6 text-lg leading-relaxed text-gray-600 lg:text-xl">
              {quote}
            </p>

            {/* Author */}
            <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-lg font-bold text-white">
                {initials}
              </div>
              <div>
                <div className="text-base font-bold text-navy">{name}</div>
                <div className="text-sm text-gray-600">
                  {title}, {company}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
