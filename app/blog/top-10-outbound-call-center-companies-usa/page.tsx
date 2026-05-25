import type { Metadata } from "next";
import Content from "./Content";
import { BlogAEOSchemas } from "@/components/shared/BlogAEOSchemas";

export const metadata: Metadata = {
  title: "Top 10 Outbound Call Center (2026)",
  description:
    "Read the top 10 outbound call center guide for 2026. Compare options, pricing factors, buyer criteria, and quote next steps.",
  keywords: [
    "outbound call center companies",
    "outbound call center usa",
    "top outbound call center usa",
    "outbound telemarketing outsourcing",
    "tcpa compliant outbound",
    "predictive dialer services",
    "appointment setting outsourcing",
    "cold calling outsourcing",
    "lead qualification services",
    "american outbound call center",
    "us based outbound call center",
    "b2b outbound calling services",
  ],
  alternates: { canonical: "/blog/top-10-outbound-call-center-companies-usa" },
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
            headline: "Top 10 Outbound Call Center Companies in USA (2026)",
            description:
              "Comprehensive ranking of the best outbound call center companies in the USA for 2026, evaluated by TCPA compliance, predictive dialer technology, appointment setting performance, and client satisfaction.",
            author: { "@type": "Organization", name: "Contact Center USA" },
            publisher: { "@type": "Organization", name: "Contact Center USA" },
            datePublished: "2026-04-19",
            dateModified: "2026-04-19",
            url: "https://contactcenterusa.com/blog/top-10-outbound-call-center-companies-usa",
          }),
        }}
      />
      <BlogAEOSchemas slug="top-10-outbound-call-center-companies-usa" />
      <Content />
    </>
  );
}
