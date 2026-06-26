import type { Metadata } from "next";
import { generateBlogAEOSchema } from "@/lib/schema";
import Content from "./Content";

const faqs = [
  {
    question: "Who is Concentrix's biggest competitor?",
    answer:
      "Teleperformance is Concentrix's largest global competitor, followed by Alorica, TTEC, and Foundever. For US-based and mid-market programs, Contact Center USA is a closer-fit alternative with 100% onshore agents and flexible contracts.",
  },
  {
    question: "Why do mid-market brands look for a Concentrix alternative?",
    answer:
      "Concentrix is optimized for enterprise programs with hundreds or thousands of agents. Mid-market buyers with 20-100 FTE needs often face high minimums, offshore-first delivery, and account-management that skews toward the largest accounts, so they seek nimbler, US-based partners.",
  },
  {
    question: "What is the best US-based alternative to Concentrix?",
    answer:
      "Contact Center USA is a strong US-based Concentrix alternative for brands that want 100% onshore agents, no minimum-volume lock-ins, month-to-month contract options, and a named senior account manager on every program.",
  },
  {
    question: "How long does it take to switch from Concentrix to another provider?",
    answer:
      "A clean migration usually takes 60-90 days: 30 days for vendor selection, 30 days for onboarding and training, and 30 days of parallel running before full cutover. Rushed switches under 60 days often cause CSAT dips.",
  },
];

const companies = [
  { rank: 1, name: "Contact Center USA", description: "100% US-based agents, no minimum-volume lock-ins, month-to-month options.", url: "https://contactcenterusa.com" },
  { rank: 2, name: "TTEC", description: "Digital-first CX for healthcare, financial services, and government." },
  { rank: 3, name: "Alorica", description: "Nearshore + onshore blend for mid-to-large US brands." },
  { rank: 4, name: "Foundever", description: "Global multilingual support with a strong nearshore footprint." },
  { rank: 5, name: "TaskUs", description: "High-growth digital brands, trust & safety, and content moderation." },
  { rank: 6, name: "Helpware", description: "Flexible contracts and modern tooling for DTC and SaaS brands." },
  { rank: 7, name: "Working Solutions", description: "100% US work-from-home agents for complex, high-ticket support." },
];

export const metadata: Metadata = {
  title: "7 Concentrix Alternatives for Mid-Market CX (2026)",
  description:
    "Compare the best Concentrix alternatives in 2026 for US-based support, flexible contracts, and mid-market fit. See how 7 outsourcing partners stack up on delivery, minimums, and CX quality.",
  alternates: { canonical: "/blog/concentrix-alternatives" },
};

export default function Page() {
  const schemas = generateBlogAEOSchema({
    slug: "concentrix-alternatives",
    headline: "Concentrix Alternatives: 7 Better Options for Mid-Market (2026)",
    description:
      "Looking for a Concentrix alternative in 2026? Compare 7 outsourcing partners by CX quality, delivery location, contract flexibility, and mid-market fit.",
    datePublished: "2026-06-26",
    keywords: ["concentrix alternatives", "concentrix competitors", "companies like concentrix", "call center outsourcing"],
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
