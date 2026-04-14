import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Inside Sales Outsourcing: Complete Guide for 2026",
  description:
    "Learn everything about inside sales outsourcing in 2026. Compare outsourced inside sales models, pricing, benefits, and how to choose the right inside sales outsourcing company for lead generation, appointment setting, and full-cycle sales.",
  keywords: [
    "inside sales outsourcing",
    "outsourced inside sales",
    "inside sales outsourcing company",
    "inside sales services",
    "inbound sales outsourcing",
    "sales outsourcing services",
    "sales outsourcing solutions",
    "SDR outsourcing",
    "outsourced sales team",
    "inside sales BPO",
  ],
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
            headline: "Inside Sales Outsourcing: Complete Guide for 2026",
            description:
              "Comprehensive guide to inside sales outsourcing covering models, pricing, benefits, KPIs, and how to choose the right inside sales outsourcing company.",
            author: { "@type": "Organization", name: "Contact Center USA" },
            publisher: { "@type": "Organization", name: "Contact Center USA" },
            datePublished: "2026-04-07",
            dateModified: "2026-04-07",
            url: "https://www.contactcenterusa.com/blog/inside-sales-outsourcing-guide",
          }),
        }}
      />
      <Content />
    </>
  );
}
