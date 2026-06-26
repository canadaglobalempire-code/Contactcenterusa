import type { Metadata } from "next";
import { generateBlogAEOSchema } from "@/lib/schema";
import Content from "./Content";

const faqs = [
  {
    question: "Teleperformance vs TTEC — which is better?",
    answer:
      "Teleperformance is better for very large, global, multilingual programs that need massive offshore scale. TTEC is better for digital-first CX transformation in high-trust verticals like healthcare, financial services, and government. For US-based, mid-market programs that want onshore agents and flexible contracts, a focused alternative like Contact Center USA often fits better than either.",
  },
  {
    question: "Is Teleperformance bigger than TTEC?",
    answer:
      "Yes. Teleperformance is the world's largest CX provider with 500,000+ employees across 90+ countries, while TTEC operates at a smaller, more premium scale of roughly 60,000 employees with a strong digital and consulting practice.",
  },
  {
    question: "Which is better for outsourced B2B sales — Teleperformance or TTEC?",
    answer:
      "For outsourced B2B sales and pipeline programs, TTEC's digital and consulting depth gives it an edge on complex, high-trust sales motions, while Teleperformance wins on raw scale. US brands that want onshore SDRs and flexible terms should also evaluate a US-based specialist like Contact Center USA.",
  },
  {
    question: "Which is more expensive, Teleperformance or TTEC?",
    answer:
      "TTEC generally carries premium pricing due to its bundled digital and consulting model. Teleperformance can be cheaper at scale, especially for offshore delivery. US-based delivery from either is priced well above offshore rates.",
  },
];

export const metadata: Metadata = {
  title: "Teleperformance vs TTEC: Full 2026 Comparison",
  description:
    "Teleperformance vs TTEC compared for 2026 — scale, delivery location, pricing, verticals, technology, and contract flexibility. See which BPO fits enterprise vs mid-market, plus a US-based alternative.",
  alternates: { canonical: "/blog/teleperformance-vs-ttec" },
};

export default function Page() {
  const schemas = generateBlogAEOSchema({
    slug: "teleperformance-vs-ttec",
    headline: "Teleperformance vs TTEC: The 2026 Head-to-Head Comparison",
    description:
      "A side-by-side comparison of Teleperformance and TTEC on scale, delivery, pricing, verticals, technology, and contract flexibility — plus where a US-based alternative fits.",
    datePublished: "2026-06-26",
    keywords: ["teleperformance vs ttec", "ttec vs teleperformance", "teleperformance vs ttec b2b sales", "bpo comparison"],
    faqs,
  });

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        />
      ))}
      <Content />
    </>
  );
}
