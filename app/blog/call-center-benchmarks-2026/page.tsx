import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Call Center Benchmarks & Metrics (2026 Data)",
  description:
    "2026 call center benchmarks — service level, AHT, FCR, CSAT, and abandonment rates by industry, so you can measure performance against your peers.",
  alternates: { canonical: "/blog/call-center-benchmarks-2026" },
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
            headline: "2026 Call Center Benchmarks: AHT, CSAT, FCR & More by Industry",
            description: "2026 call center benchmarks for every metric that matters — AHT, CSAT, FCR, NPS, abandon rate, occupancy, attrition — broken down by industry and channel.",
            author: { "@type": "Organization", name: "Contact Center USA" },
            publisher: { "@type": "Organization", name: "Contact Center USA" },
            datePublished: "2026-04-23",
            url: "https://contactcenterusa.com/blog/call-center-benchmarks-2026",
          }),
        }}
      />
      <Content />
    </>
  );
}
