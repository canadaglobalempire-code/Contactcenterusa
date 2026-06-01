import type { Metadata } from "next";
import Content from "./Content";
import { BlogAEOSchemas } from "@/components/shared/BlogAEOSchemas";

export const metadata: Metadata = {
  title: "Top 10 Debt Collection BPO Companies USA (2026)",
  description:
    "The top 10 debt collection BPO companies in the USA for 2026, ranked by FDCPA compliance, recovery rates & technology. Compare and get a quote.",
  keywords: [
    "debt collection bpo companies in usa",
    "top debt collection companies in usa",
    "top 10 debt collection bpo companies",
    "debt collection outsourcing companies usa",
    "fdcpa compliant collection agency",
    "first party debt collection outsourcing",
    "third party debt collection agency",
    "best debt collection agency usa",
    "commercial debt collection companies",
    "consumer debt collection companies",
    "accounts receivable outsourcing usa",
    "collection agency outsourcing",
  ],
  alternates: { canonical: "/blog/top-10-debt-collection-bpo-companies-usa" },
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
            headline: "Top 10 Debt Collection BPO Companies in USA (2026 Rankings)",
            description:
              "Comprehensive ranking of the best debt collection BPO companies in the USA for 2026, evaluated by FDCPA compliance, recovery rates, technology, and client satisfaction.",
            author: { "@type": "Organization", name: "Contact Center USA" },
            publisher: { "@type": "Organization", name: "Contact Center USA" },
            datePublished: "2026-04-19",
            dateModified: "2026-04-19",
            url: "https://contactcenterusa.com/blog/top-10-debt-collection-bpo-companies-usa",
          }),
        }}
      />
      <BlogAEOSchemas slug="top-10-debt-collection-bpo-companies-usa" />
      <Content />
    </>
  );
}
