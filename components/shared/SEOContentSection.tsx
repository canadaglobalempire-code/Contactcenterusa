"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Sparkles } from "lucide-react";

export interface SEOSection {
  eyebrow?: string;
  heading: string;
  body: string | string[];
  image?: string;
  subsections?: { heading: string; body: string | string[] }[];
  /** Renders subsections as numbered steps (1, 2, 3...) instead of simple headings */
  numbered?: boolean;
}

export function SEOContentSection({
  intro,
  sections,
}: {
  intro?: string;
  sections: SEOSection[];
}) {
  return (
    <>
      {/* Intro lead block — full width, premium typography */}
      {intro && (
        <section className="bg-gradient-to-b from-white via-red/[0.015] to-white py-20">
          <div className="mx-auto max-w-[900px] px-5 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">
                <Sparkles className="h-3.5 w-3.5" />
                Industry-Leading BPO
              </div>
              <div className="space-y-5 text-[19px] leading-[1.75] text-gray-800">
                {intro.split("\n\n").map((p, i) => (
                  <p key={i} className={i === 0 ? "text-[22px] font-medium leading-[1.55] text-navy" : ""}>
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Alternating sections with premium cards */}
      <div>
        {sections.map((section, i) => {
          const imageLeft = i % 2 === 0;
          const hasImage = !!section.image;
          const altBg = i % 2 === 1;

          return (
            <section
              key={i}
              className={`${altBg ? "bg-gray-50" : "bg-white"} py-24`}
            >
              <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
                {hasImage ? (
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20"
                  >
                    {/* Image column */}
                    <div className={imageLeft ? "lg:order-1" : "lg:order-2"}>
                      <div className="relative">
                        {/* Red accent block behind image */}
                        <div className="absolute -inset-4 -z-10 rounded-[28px] bg-gradient-to-br from-red/20 via-red/5 to-transparent blur-xl" />
                        <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[24px] shadow-2xl ring-1 ring-gray-100">
                          <Image
                            src={section.image!}
                            alt={section.heading}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
                        </div>
                      </div>
                    </div>

                    {/* Content column */}
                    <div className={imageLeft ? "lg:order-2" : "lg:order-1"}>
                      {section.eyebrow && (
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-red">
                          {section.eyebrow}
                        </div>
                      )}
                      <h2 className="text-[30px] font-bold leading-[1.15] text-navy sm:text-[36px]">
                        {section.heading}
                      </h2>
                      <div className="mt-5 space-y-4 text-[16px] leading-[1.8] text-gray-700">
                        {(Array.isArray(section.body) ? section.body : [section.body]).map(
                          (p, idx) => (
                            <p key={idx}>{p}</p>
                          )
                        )}
                      </div>

                      {section.subsections && (
                        <div className="mt-8 space-y-5">
                          {section.subsections.map((sub, j) => (
                            <motion.div
                              key={j}
                              initial={{ opacity: 0, x: 10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: j * 0.05 }}
                              className="group rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-red/30 hover:shadow-md"
                            >
                              <div className="flex items-start gap-3">
                                {section.numbered ? (
                                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-red text-sm font-bold text-white">
                                    {j + 1}
                                  </div>
                                ) : (
                                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-red" />
                                )}
                                <div>
                                  <h3 className="text-[17px] font-semibold text-navy">
                                    {sub.heading}
                                  </h3>
                                  <div className="mt-1.5 space-y-2 text-[15px] leading-[1.7] text-gray-700">
                                    {(Array.isArray(sub.body) ? sub.body : [sub.body]).map(
                                      (p, idx) => (
                                        <p key={idx}>{p}</p>
                                      )
                                    )}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.article>
                ) : (
                  /* No-image centered section */
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-[900px] text-center"
                  >
                    {section.eyebrow && (
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-red">
                        {section.eyebrow}
                      </div>
                    )}
                    <h2 className="text-[30px] font-bold leading-[1.15] text-navy sm:text-[38px]">
                      {section.heading}
                    </h2>
                    <div className="mx-auto mt-6 max-w-[760px] space-y-4 text-left text-[16px] leading-[1.8] text-gray-700">
                      {(Array.isArray(section.body) ? section.body : [section.body]).map(
                        (p, idx) => (
                          <p key={idx}>{p}</p>
                        )
                      )}
                    </div>

                    {section.subsections && (
                      <div className="mt-10 grid grid-cols-1 gap-5 text-left md:grid-cols-2">
                        {section.subsections.map((sub, j) => (
                          <motion.div
                            key={j}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: j * 0.06 }}
                            className="rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-red/30 hover:shadow-md"
                          >
                            <div className="flex items-start gap-3">
                              {section.numbered ? (
                                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-red text-sm font-bold text-white">
                                  {j + 1}
                                </div>
                              ) : (
                                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-red" />
                              )}
                              <div>
                                <h3 className="text-[17px] font-semibold text-navy">
                                  {sub.heading}
                                </h3>
                                <div className="mt-2 space-y-2 text-[15px] leading-[1.7] text-gray-700">
                                  {(Array.isArray(sub.body) ? sub.body : [sub.body]).map(
                                    (p, idx) => (
                                      <p key={idx}>{p}</p>
                                    )
                                  )}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </motion.article>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
