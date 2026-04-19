"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export interface SEOSection {
  eyebrow?: string;
  heading: string;
  body: string | string[];
  image?: string;
  subsections?: { heading: string; body: string | string[] }[];
  numbered?: boolean;
}

function Paragraphs({
  body,
  className = "",
}: {
  body: string | string[];
  className?: string;
}) {
  const paragraphs = Array.isArray(body) ? body : [body];
  return (
    <div className={`space-y-5 text-[16.5px] leading-[1.78] text-gray-700 ${className}`}>
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}

function SectionNumber({ n }: { n: number }) {
  return (
    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
      <span className="h-px w-10 bg-gray-300" />
      <span className="tabular-nums">{String(n).padStart(2, "0")}</span>
    </div>
  );
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
      {/* Intro lead block */}
      {intro && (
        <section className="bg-white pt-24 pb-8">
          <div className="mx-auto max-w-[820px] px-5 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-l-2 border-red pl-7"
            >
              {intro.split("\n\n").map((p, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "mb-5 text-[20px] font-medium leading-[1.55] tracking-tight text-navy"
                      : "mb-4 text-[16.5px] leading-[1.8] text-gray-700"
                  }
                >
                  {p}
                </p>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Content sections */}
      {sections.map((section, i) => {
        const imageLeft = i % 2 === 0;

        return (
          <section key={i} className="bg-white py-24">
            <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
              {/* Top row: image + heading/intro text */}
              {section.image ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20"
                >
                  {/* Image */}
                  <div className={imageLeft ? "lg:order-1" : "lg:order-2"}>
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100">
                      <Image
                        src={section.image}
                        alt={section.heading}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 600px, 100vw"
                      />
                    </div>
                  </div>

                  {/* Heading + intro text */}
                  <div className={imageLeft ? "lg:order-2" : "lg:order-1"}>
                    <SectionNumber n={i + 1} />
                    {section.eyebrow && (
                      <div className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-red">
                        {section.eyebrow}
                      </div>
                    )}
                    <h2 className="mt-3 text-[30px] font-bold leading-[1.15] tracking-[-0.01em] text-navy sm:text-[38px]">
                      {section.heading}
                    </h2>
                    <Paragraphs body={section.body} className="mt-6" />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className="mx-auto max-w-[820px]"
                >
                  <SectionNumber n={i + 1} />
                  {section.eyebrow && (
                    <div className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-red">
                      {section.eyebrow}
                    </div>
                  )}
                  <h2 className="mt-3 text-[30px] font-bold leading-[1.15] tracking-[-0.01em] text-navy sm:text-[40px]">
                    {section.heading}
                  </h2>
                  <Paragraphs body={section.body} className="mt-6" />
                </motion.div>
              )}

              {/* Subsections — premium card grid */}
              {section.subsections && section.subsections.length > 0 && (
                <div
                  className={`grid grid-cols-1 gap-6 ${
                    section.image ? "mt-20" : "mt-16"
                  } md:grid-cols-2 lg:grid-cols-3`}
                >
                  {section.subsections.map((sub, j) => (
                    <motion.article
                      key={j}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: j * 0.05 }}
                      className="group relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-[0_20px_40px_-20px_rgba(15,23,42,0.15)]"
                    >
                      {/* Top accent line on hover */}
                      <div className="absolute left-0 right-0 top-0 h-[2px] origin-left scale-x-0 bg-red transition-transform duration-300 group-hover:scale-x-100" />

                      <div className="mb-5 flex items-center justify-between">
                        {section.numbered ? (
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                              Step
                            </span>
                            <span className="text-[28px] font-bold tabular-nums leading-none text-navy">
                              {String(j + 1).padStart(2, "0")}
                            </span>
                          </div>
                        ) : (
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                              /
                            </span>
                            <span className="text-[13px] font-semibold tabular-nums text-gray-400">
                              {String(j + 1).padStart(2, "0")}
                            </span>
                          </div>
                        )}
                        <div className="h-px w-10 bg-gray-200 transition-colors group-hover:bg-red" />
                      </div>

                      <h3 className="text-[18px] font-semibold leading-[1.3] tracking-tight text-navy">
                        {sub.heading}
                      </h3>
                      <Paragraphs
                        body={sub.body}
                        className="mt-3 !space-y-3 !text-[15px] !leading-[1.7] text-gray-600"
                      />
                    </motion.article>
                  ))}
                </div>
              )}
            </div>

            {/* Thin divider between sections */}
            {i < sections.length - 1 && (
              <div className="mx-auto mt-24 max-w-[1200px] px-5 lg:px-8">
                <div className="h-px bg-gray-100" />
              </div>
            )}
          </section>
        );
      })}
    </>
  );
}
