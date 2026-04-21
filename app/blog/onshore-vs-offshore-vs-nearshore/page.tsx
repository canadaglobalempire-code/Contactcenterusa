import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Onshore vs Offshore vs Nearshore: Pros, Cons & Costs",
  description:
    "Compare onshore, offshore, and nearshore call center outsourcing models side by side. Detailed analysis of costs, quality metrics, CSAT scores, and when to choose each delivery model for your business.",
  alternates: { canonical: "/blog/onshore-vs-offshore-vs-nearshore" },
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
            headline: "Onshore vs Offshore vs Nearshore: Pros, Cons & Costs",
            description: "Compare onshore, offshore, and nearshore call center outsourcing models side by side. Detailed analysis of costs, quality metrics, CSAT scores, and when to choose each delivery model for your business.",
            author: { "@type": "Organization", name: "Contact Center USA" },
            publisher: { "@type": "Organization", name: "Contact Center USA" },
            datePublished: "2026-04-01",
            url: "https://contactcenterusa.com/blog/onshore-vs-offshore-vs-nearshore",
          }),
        }}
      />
      <Content />
    </>
  );
}
