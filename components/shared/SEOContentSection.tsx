"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

export interface SEOSection {
  eyebrow?: string;
  heading: string;
  body: string | string[];
  image?: string;
  subsections?: { heading: string; body: string | string[] }[];
  numbered?: boolean;
}

function Paragraphs({ body, className = "" }: { body: string | string[]; className?: string }) {
  const paragraphs = Array.isArray(body) ? body : [body];
  return (
    <div className={`space-y-4 text-[16px] leading-[1.75] text-gray-700 ${className}`}>
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
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
        <section className="border-b border-gray-100 bg-white py-20">
          <div className="mx-auto max-w-[860px] px-5 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >
              {intro.split("\n\n").map((p, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "text-[20px] font-medium leading-[1.6] text-navy"
                      : "text-[16px] leading-[1.8] text-gray-700"
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
        const altBg = i % 2 === 1;

        return (
          <section
            key={i}
            className={`${altBg ? "bg-gray-50" : "bg-white"} border-b border-gray-100 py-24`}
          >
            <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
              {/* Top row: image + heading/intro text */}
              {section.image ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16"
                >
                  {/* Image */}
                  <div className={imageLeft ? "lg:order-1" : "lg:order-2"}>
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                      <Image
                        src={section.image}
                        alt={section.heading}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Heading + intro text */}
                  <div className={imageLeft ? "lg:order-2" : "lg:order-1"}>
                    {section.eyebrow && (
                      <div className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-red">
                        {section.eyebrow}
                      </div>
                    )}
                    <h2 className="text-[28px] font-bold leading-[1.2] tracking-tight text-navy sm:text-[34px]">
                      {section.heading}
                    </h2>
                    <Paragraphs body={section.body} className="mt-5" />
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
                  {section.eyebrow && (
                    <div className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-red">
                      {section.eyebrow}
                    </div>
                  )}
                  <h2 className="text-[28px] font-bold leading-[1.2] tracking-tight text-navy sm:text-[34px]">
                    {section.heading}
                  </h2>
                  <Paragraphs body={section.body} className="mt-5" />
                </motion.div>
              )}

              {/* Subsections as card grid */}
              {section.subsections && section.subsections.length > 0 && (
                <div
                  className={`grid grid-cols-1 gap-5 ${
                    section.image ? "mt-16" : "mt-12"
                  } md:grid-cols-2 lg:grid-cols-3`}
                >
                  {section.subsections.map((sub, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: j * 0.05 }}
                      className="rounded-xl border border-gray-200 bg-white p-6"
                    >
                      <div className="mb-3 flex items-center gap-3">
                        {section.numbered ? (
                          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-navy text-[13px] font-bold text-white">
                            {String(j + 1).padStart(2, "0")}
                          </div>
                        ) : (
                          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-red/10 text-red">
                            <Check className="h-4 w-4" strokeWidth={3} />
                          </div>
                        )}
                      </div>
                      <h3 className="text-[17px] font-semibold leading-snug text-navy">
                        {sub.heading}
                      </h3>
                      <Paragraphs
                        body={sub.body}
                        className="mt-2 !text-[15px] !leading-[1.7]"
                      />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      })}
    </>
  );
}
