import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Top 10 KPIs Every Outsourced Call Center Should Track",
  description:
    "Discover the 10 most critical call center KPIs including FCR, CSAT, NPS, AHT, and cost per contact. Industry benchmarks, measurement frameworks, and actionable tips to drive continuous improvement.",
  alternates: { canonical: "/blog/call-center-kpis" },
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
            headline: "Top 10 KPIs Every Outsourced Call Center Should Track",
            description: "Discover the 10 most critical call center KPIs including FCR, CSAT, NPS, AHT, and cost per contact. Industry benchmarks, measurement frameworks, and actionable tips to drive continuous improvement.",
            author: { "@type": "Organization", name: "Contact Center USA" },
            publisher: { "@type": "Organization", name: "Contact Center USA" },
            datePublished: "2026-04-01",
            url: "https://www.contactcenterusa.com/blog/call-center-kpis",
          }),
        }}
      />
      <Content />
    </>
  );
}
