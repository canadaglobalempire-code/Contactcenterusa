import { buildAEOBlogPostingSchema } from "@/lib/aeo";
import type { Metadata } from "next";
import Content from "./Content";
import { BlogAEOSchemas } from "@/components/shared/BlogAEOSchemas";

export const metadata: Metadata = {
  title: "Best Multilingual Call Center Companies in USA (2026)",
  description:
    "Compare bilingual and multilingual call center providers for US brands, including Spanish support, language coverage, compliance, and CX fit.",
  keywords: [
    "multilingual call center companies",
    "bilingual call center usa",
    "spanish call center outsourcing",
    "multilingual customer service outsourcing",
    "bilingual customer support service",
    "foreign language call center",
    "spanish speaking call center agents",
    "hispanic market customer service",
    "multilingual bpo companies",
    "interpretation services outsourcing",
    "french call center outsourcing",
    "mandarin customer support usa",
  ],
  alternates: { canonical: "/blog/top-10-multilingual-call-center-companies-usa" },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildAEOBlogPostingSchema({
              url: "https://contactcenterusa.com/blog/top-10-multilingual-call-center-companies-usa",
              headline: "Top 10 Multilingual Call Center Companies in USA (2026)",
              description: "Comprehensive ranking of the best multilingual call center companies in the USA for 2026, evaluated by bilingual agent quality, language coverage, Hispanic market reach, compliance, and client outcomes.",
              datePublished: "2026-04-19",
              dateModified: "2026-04-19",
              image: "https://contactcenterusa.com/images/cc-diverse-team.jpg",
            })),
        }}
      />
      <BlogAEOSchemas slug="top-10-multilingual-call-center-companies-usa" />
      <Content />
    </>
  );
}
