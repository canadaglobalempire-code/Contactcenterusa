import type { Metadata } from "next";
import Content from "./Content";
import { BlogAEOSchemas } from "@/components/shared/BlogAEOSchemas";

export const metadata: Metadata = {
  title: "Best American Call Centers: US-Based Agents (2026)",
  description:
    "What makes the best American call centers — US-based agents, accent neutrality, compliance, and CX quality. Compare your options and get a quote.",
  keywords: [
    "american call centers",
    "american based call centers",
    "american call centers companies",
    "US based call center companies",
    "domestic call center outsourcing",
    "onshore call center companies",
    "best american call center companies",
    "US call center outsourcing",
    "american customer service companies",
    "onshore call center outsourcing",
    "domestic call center companies",
    "best US based call centers 2026",
  ],
  alternates: { canonical: "/blog/american-call-centers" },
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
            headline: "Top 15 American Call Centers: Best US-Based Call Center Companies (2026)",
            description: "Comprehensive ranking of the best American call centers and US-based call center companies for 2026, evaluated by domestic workforce quality, onshore capabilities, technology, and customer satisfaction.",
            author: { "@type": "Organization", name: "Contact Center USA" },
            publisher: { "@type": "Organization", name: "Contact Center USA" },
            datePublished: "2026-04-12",
            dateModified: "2026-04-12",
            url: "https://contactcenterusa.com/blog/american-call-centers",
          }),
        }}
      />
      <BlogAEOSchemas slug="american-call-centers" />
      <Content />
    </>
  );
}
