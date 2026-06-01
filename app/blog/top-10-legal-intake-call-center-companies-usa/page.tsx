import type { Metadata } from "next";
import Content from "./Content";
import { BlogAEOSchemas } from "@/components/shared/BlogAEOSchemas";

export const metadata: Metadata = {
  title: "Top 10 Legal Intake Call Center Companies (2026)",
  description:
    "The top 10 legal intake call center companies for 2026, ranked by 24/7 intake, conversion & law-firm experience. Compare US providers and get a quote.",
  keywords: [
    "legal intake call center",
    "legal intake outsourcing",
    "law firm answering service",
    "24/7 legal intake services",
    "attorney lead qualification",
    "personal injury intake",
    "mass tort intake call center",
    "law firm call center outsourcing",
    "legal answering service",
    "bilingual legal intake",
    "personal injury lead qualification",
    "after hours legal intake",
  ],
  alternates: { canonical: "/blog/top-10-legal-intake-call-center-companies-usa" },
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
            headline: "Top 10 Legal Intake Call Center Companies in USA (2026)",
            description:
              "Comprehensive ranking of the best legal intake call center companies in the USA for 2026, evaluated on 24/7 live intake, attorney lead qualification, personal injury and mass tort intake, bilingual Spanish intake, HIPAA compliance, and Litify/Clio/MyCase integrations.",
            author: { "@type": "Organization", name: "Contact Center USA" },
            publisher: { "@type": "Organization", name: "Contact Center USA" },
            datePublished: "2026-04-21",
            dateModified: "2026-04-21",
            url: "https://contactcenterusa.com/blog/top-10-legal-intake-call-center-companies-usa",
          }),
        }}
      />
      <BlogAEOSchemas slug="top-10-legal-intake-call-center-companies-usa" />
      <Content />
    </>
  );
}
