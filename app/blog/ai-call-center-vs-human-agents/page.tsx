import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "AI Call Center vs Human Agents (2026)",
  description:
    "Read the ai call center vs human agents guide for 2026. Compare options, pricing factors, buyer criteria, and quote next steps.",
  alternates: { canonical: "/blog/ai-call-center-vs-human-agents" },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "AI Call Center vs Human Agents: Cost, Quality & What to Outsource (2026)",
            description: "Should you use AI call center agents, human agents, or both in 2026? Honest comparison of cost, CX quality, deflection rates, and exactly which calls to route where.",
            author: { "@type": "Organization", name: "Contact Center USA" },
            publisher: { "@type": "Organization", name: "Contact Center USA" },
            datePublished: "2026-04-23",
            url: "https://contactcenterusa.com/blog/ai-call-center-vs-human-agents",
          }),
        }}
      />
      <Content />
    </>
  );
}
