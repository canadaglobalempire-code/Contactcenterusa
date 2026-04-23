import type { Metadata } from "next";
import Content from "./Content";
import { BlogAEOSchemas } from "@/components/shared/BlogAEOSchemas";

export const metadata: Metadata = {
  title: "Top 10 Appointment Setting Companies in USA (2026)",
  description:
    "Compare the top 10 appointment setting companies in the USA for 2026. Ranked by qualified meeting delivery, SDR quality, and pipeline impact — covering B2B appointment setting services, outsourced appointment setters, SDR appointment setting, LinkedIn outreach, and cold calling for SaaS, insurance, and enterprise.",
  keywords: [
    "appointment setting services",
    "B2B appointment setting companies",
    "outsourced appointment setters",
    "SDR appointment setting",
    "b2b appointment setting outsourcing",
    "appointment setting agencies",
    "sales appointment setting services",
    "cold calling appointment setting",
    "LinkedIn appointment setting",
    "enterprise appointment setting",
    "saas appointment setting",
    "insurance appointment setting",
  ],
  alternates: { canonical: "/blog/top-10-appointment-setting-companies-usa" },
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
            headline: "Top 10 Appointment Setting Companies in USA (2026)",
            description:
              "Comprehensive ranking of the best B2B appointment setting companies and outsourced appointment setters in the USA for 2026, evaluated by qualified meeting delivery, SDR quality, multichannel cadence execution, CRM integrations, and pipeline impact.",
            author: { "@type": "Organization", name: "Contact Center USA" },
            publisher: { "@type": "Organization", name: "Contact Center USA" },
            datePublished: "2026-04-21",
            dateModified: "2026-04-21",
            url: "https://contactcenterusa.com/blog/top-10-appointment-setting-companies-usa",
          }),
        }}
      />
      <BlogAEOSchemas slug="top-10-appointment-setting-companies-usa" />
      <Content />
    </>
  );
}
