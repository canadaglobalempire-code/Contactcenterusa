"use client";

import { motion } from "framer-motion";

export interface SEOSection {
  heading: string;
  body: string | string[];
  subsections?: { heading: string; body: string | string[] }[];
}

export function SEOContentSection({
  intro,
  sections,
}: {
  intro?: string;
  sections: SEOSection[];
}) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[900px] px-5 lg:px-0">
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14 text-[18px] leading-relaxed text-gray-800"
          >
            {intro}
          </motion.p>
        )}

        <div className="space-y-14">
          {sections.map((section, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-[28px] font-bold leading-tight text-navy sm:text-[32px]">
                {section.heading}
              </h2>
              <div className="mt-5 space-y-4 text-[16px] leading-[1.75] text-gray-700">
                {(Array.isArray(section.body) ? section.body : [section.body]).map(
                  (p, idx) => (
                    <p key={idx}>{p}</p>
                  )
                )}
              </div>

              {section.subsections && (
                <div className="mt-8 space-y-8">
                  {section.subsections.map((sub, j) => (
                    <div key={j}>
                      <h3 className="text-xl font-semibold text-navy">
                        {sub.heading}
                      </h3>
                      <div className="mt-3 space-y-3 text-[16px] leading-[1.75] text-gray-700">
                        {(Array.isArray(sub.body) ? sub.body : [sub.body]).map(
                          (p, idx) => (
                            <p key={idx}>{p}</p>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
