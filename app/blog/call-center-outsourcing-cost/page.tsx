import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Call Center Outsourcing Cost Guide (2026)",
  description:
    "How much does call center outsourcing cost in 2026? Pricing models, per-hour and per-seat rates, and what drives the price. Get a custom quote.",
  alternates: { canonical: "/blog/call-center-outsourcing-cost" },
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
            headline: "Call Center Outsourcing Cost: Complete 2026 Guide",
            description: "Comprehensive breakdown of call center outsourcing costs in 2026. Compare onshore, nearshore, and offshore pricing models, hidden fees, and ROI calculations to make a data-driven outsourcing decision.",
            author: { "@type": "Organization", name: "Contact Center USA" },
            publisher: { "@type": "Organization", name: "Contact Center USA" },
            datePublished: "2026-04-01",
            url: "https://contactcenterusa.com/blog/call-center-outsourcing-cost",
          }),
        }}
      />
      <Content />
    </>
  );
}
