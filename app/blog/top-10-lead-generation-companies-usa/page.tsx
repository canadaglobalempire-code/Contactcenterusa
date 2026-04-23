import type { Metadata } from "next";
import Content from "./Content";
import { BlogAEOSchemas } from "@/components/shared/BlogAEOSchemas";

export const metadata: Metadata = {
  title: "Top 10 Lead Generation Companies in USA (2026)",
  description:
    "Compare the top 10 lead generation companies in the USA for 2026. Ranked by B2B pipeline performance, SQL/MQL quality, ABM execution, appointment setting, and sales outcomes from US-based lead gen agencies.",
  keywords: [
    "lead generation companies usa",
    "top lead generation agencies",
    "b2b lead gen outsourcing",
    "appointment setting services",
    "sales lead generation services",
    "pipeline generation agency",
    "us lead generation companies",
    "demand generation outsourcing",
    "account based marketing agency",
    "linkedin lead generation usa",
    "sdr outsourcing usa",
    "qualified lead generation",
  ],
  alternates: { canonical: "/blog/top-10-lead-generation-companies-usa" },
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
            headline: "Top 10 Lead Generation Companies in USA (2026)",
            description:
              "Comprehensive ranking of the best lead generation companies in the USA for 2026, evaluated by pipeline quality, ABM execution, SDR performance, and client ROI.",
            author: { "@type": "Organization", name: "Contact Center USA" },
            publisher: { "@type": "Organization", name: "Contact Center USA" },
            datePublished: "2026-04-19",
            dateModified: "2026-04-19",
            url: "https://contactcenterusa.com/blog/top-10-lead-generation-companies-usa",
          }),
        }}
      />
      <BlogAEOSchemas slug="top-10-lead-generation-companies-usa" />
      <Content />
    </>
  );
}
