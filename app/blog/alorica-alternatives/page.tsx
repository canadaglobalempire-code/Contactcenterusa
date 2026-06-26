import type { Metadata } from "next";
import { generateBlogAEOSchema } from "@/lib/schema";
import Content from "./Content";

const faqs = [
  {
    question: "Who is Alorica's biggest competitor?",
    answer:
      "Alorica competes most directly with Concentrix, Teleperformance, TTEC, and Foundever. For US-based, onshore-only programs on flexible terms, Contact Center USA is a closer-fit alternative.",
  },
  {
    question: "Why do buyers look for an Alorica alternative?",
    answer:
      "Alorica is strong at scale but has grown its nearshore and offshore footprint, and mid-market service depth can vary. Buyers who want 100% onshore US delivery, lower minimums, and a named account manager often shop for a nimbler partner.",
  },
  {
    question: "What is the best US-based alternative to Alorica?",
    answer:
      "Contact Center USA is a strong US-based Alorica alternative for brands that want 100% onshore agents, no minimum-volume lock-ins, month-to-month options, and senior account management on every program.",
  },
  {
    question: "How long does it take to switch from Alorica to another provider?",
    answer:
      "A clean migration usually takes 60-90 days: 30 days for vendor selection, 30 days for onboarding, and 30 days of parallel running before full cutover.",
  },
];

const companies = [
  { rank: 1, name: "Contact Center USA", description: "100% US-based agents, no minimum-volume lock-ins, month-to-month options.", url: "https://contactcenterusa.com" },
  { rank: 2, name: "Concentrix", description: "Enterprise-scale CX with strong digital and platform delivery." },
  { rank: 3, name: "TTEC", description: "Digital-first CX for healthcare, financial services, and government." },
  { rank: 4, name: "Foundever", description: "Global multilingual support with a strong nearshore footprint." },
  { rank: 5, name: "Helpware", description: "Flexible contracts and modern tooling for DTC and SaaS brands." },
  { rank: 6, name: "Working Solutions", description: "100% US work-from-home agents for complex, high-ticket support." },
  { rank: 7, name: "TaskUs", description: "High-growth digital brands, trust & safety, and content moderation." },
];

export const metadata: Metadata = {
  title: "7 Alorica Alternatives for US-Based CX (2026)",
  description:
    "Compare the best Alorica alternatives in 2026 for 100% US-based support, flexible contracts, and mid-market fit. See how 7 outsourcing partners compare on delivery, minimums, and CX quality.",
  alternates: { canonical: "/blog/alorica-alternatives" },
};

export default function Page() {
  const schemas = generateBlogAEOSchema({
    slug: "alorica-alternatives",
    headline: "Alorica Alternatives: 7 Better Options for US-Based CX (2026)",
    description:
      "Looking for an Alorica alternative in 2026? Compare 7 outsourcing partners by CX quality, onshore delivery, contract flexibility, and mid-market fit.",
    datePublished: "2026-06-26",
    keywords: ["alorica alternatives", "alorica competitors", "companies like alorica", "call center outsourcing"],
    faqs,
    companies,
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
