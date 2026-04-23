import type { Metadata } from "next";
import Content from "./Content";
import { BlogAEOSchemas } from "@/components/shared/BlogAEOSchemas";

export const metadata: Metadata = {
  title: "Top 10 Answering Service Companies in USA (2026)",
  description:
    "Compare the top 10 answering service companies in the USA for 2026. Ranked by 24/7 after-hours coverage, virtual receptionist quality, HIPAA-compliant medical answering, bilingual support, and small business fit.",
  keywords: [
    "answering service companies",
    "24/7 answering service",
    "best answering service usa",
    "after hours answering service",
    "live answering service",
    "medical answering service",
    "small business answering service",
    "virtual receptionist services",
    "hipaa compliant answering service",
    "bilingual answering service",
    "appointment scheduling service",
    "us based answering service",
  ],
  alternates: { canonical: "/blog/top-10-answering-service-companies-usa" },
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
            headline: "Top 10 Answering Service Companies in USA (2026)",
            description:
              "Comprehensive ranking of the best answering service companies in the USA for 2026, evaluated by 24/7 coverage, virtual receptionist quality, HIPAA compliance, bilingual support, and client outcomes.",
            author: { "@type": "Organization", name: "Contact Center USA" },
            publisher: { "@type": "Organization", name: "Contact Center USA" },
            datePublished: "2026-04-19",
            dateModified: "2026-04-19",
            url: "https://contactcenterusa.com/blog/top-10-answering-service-companies-usa",
          }),
        }}
      />
      <BlogAEOSchemas slug="top-10-answering-service-companies-usa" />
      <Content />
    </>
  );
}
