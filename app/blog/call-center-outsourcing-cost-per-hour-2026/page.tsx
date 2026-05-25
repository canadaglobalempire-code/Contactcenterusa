import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Call Center Cost Per Hour (2026)",
  description:
    "Read the call center cost per hour guide for 2026. Compare options, pricing factors, buyer criteria, and quote next steps.",
  alternates: { canonical: "/blog/call-center-outsourcing-cost-per-hour-2026" },
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
            headline:
              "Call Center Outsourcing Cost Per Hour in 2026 (Real Pricing by Country)",
            description:
              "How much does call center outsourcing cost per hour in 2026? Real rates for US, nearshore, and offshore providers, by service type, seniority, and pricing model.",
            author: { "@type": "Organization", name: "Contact Center USA" },
            publisher: { "@type": "Organization", name: "Contact Center USA" },
            datePublished: "2026-04-23",
            url: "https://contactcenterusa.com/blog/call-center-outsourcing-cost-per-hour-2026",
          }),
        }}
      />
      <Content />
    </>
  );
}
