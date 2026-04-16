"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Contact Center USA transformed our customer service operations. We went from missing 30% of calls to a 99.8% answer rate within the first month. Their agents truly feel like part of our team.",
    name: "S.M.",
    title: "VP of Operations",
    company: "A Leading Tech Company",
    initials: "SM",
  },
  {
    quote:
      "We needed bilingual support for our growing Hispanic customer base. Contact Center USA delivered fluent Spanish-speaking agents who understood our products perfectly. Sales increased 24%.",
    name: "D.R.",
    title: "CEO",
    company: "A National Ecommerce Brand",
    initials: "DR",
  },
  {
    quote:
      "The flexibility is what sets them apart. During our holiday rush, they scaled from 10 to 85 agents in under a week. No other provider could match that speed or quality.",
    name: "J.C.",
    title: "Director of CX",
    company: "A Major Retail Chain",
    initials: "JC",
  },
  {
    quote:
      "Switching to Contact Center USA was the best decision we made last year. Our CSAT scores jumped from 78% to 96%, and our customers constantly praise the quality of support they receive.",
    name: "M.T.",
    title: "Head of Support",
    company: "A Fast-Growing SaaS Company",
    initials: "MT",
  },
  {
    quote:
      "As a healthcare provider, HIPAA compliance is non-negotiable. Contact Center USA not only met every requirement but exceeded our expectations in patient communication and care coordination.",
    name: "L.P.",
    title: "COO",
    company: "A Regional Healthcare Provider",
    initials: "LP",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  const testimonial = testimonials[current];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-red/[0.02] py-28">
      <div className="gradient-orb-red -top-40 -left-40" />
      <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left — Header + Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">
              Testimonials
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-navy sm:text-4xl lg:text-[44px]">
              What Our Clients{" "}
              <span className="text-red">Say About Us</span>
            </h2>

            <p className="mt-5 text-[16px] leading-relaxed text-gray-700">
              Working with some of the largest and most complicated organizations
              around the world, our reputation has been built by experience and
              our ability to adapt to our clients&apos; ever-changing needs.
            </p>

            {/* Stats */}
            <div className="mt-10 flex items-center gap-10">
              <div>
                <div className="text-4xl font-bold text-navy">4.9/5</div>
                <div className="mt-1 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <div className="mt-1 text-sm text-gray-600">
                  Average Rating
                </div>
              </div>
              <div className="h-16 w-px bg-gray-200" />
              <div>
                <div className="text-4xl font-bold text-navy">127+</div>
                <div className="mt-1 text-sm text-gray-600">
                  Verified Reviews
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="mt-10 flex items-center gap-3">
              <button
                onClick={prev}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all hover:border-red hover:bg-red hover:text-white"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all hover:border-red hover:bg-red hover:text-white"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <span className="ml-3 text-sm text-gray-600">
                {current + 1} / {testimonials.length}
              </span>
            </div>
          </motion.div>

          {/* Right — Testimonial Card */}
          <div className="relative">
            {/* Decorative bg */}
            <div className="absolute -right-6 -top-6 h-full w-full rounded-3xl bg-gray-50" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 rounded-2xl bg-white p-10 shadow-xl"
              >
                {/* Quote icon */}
                <Quote className="h-12 w-12 text-red/15" />

                {/* Stars */}
                <div className="mt-4 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote text */}
                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red to-red-dark text-lg font-bold text-white">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-bold text-navy">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="relative z-10 mt-6 flex items-center justify-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-red"
                      : "w-2 bg-gray-200 hover:bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
