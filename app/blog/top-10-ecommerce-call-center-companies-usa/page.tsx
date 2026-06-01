import type { Metadata } from "next";
import Content from "./Content";
import { BlogAEOSchemas } from "@/components/shared/BlogAEOSchemas";

export const metadata: Metadata = {
  title: "Top 10 Ecommerce Call Center Companies USA (2026)",
  description:
    "Compare the top 10 ecommerce call center companies in the USA for 2026 — ranked by omnichannel CX, peak-season scaling & pricing. Get a quote.",
  keywords: [
    "ecommerce call center companies",
    "top ecommerce call center usa",
    "ecommerce customer service outsourcing",
    "dtc customer support outsourcing",
    "online retail call center services",
    "live chat outsourcing ecommerce",
    "shopify customer support outsourcing",
    "black friday call center support",
    "order management outsourcing",
    "returns processing outsourcing",
    "subscription commerce customer service",
    "marketplace customer service outsourcing",
  ],
  alternates: { canonical: "/blog/top-10-ecommerce-call-center-companies-usa" },
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
            headline: "Top 10 E-commerce Call Center Companies in USA (2026)",
            description:
              "Comprehensive ranking of the best e-commerce call center companies in the USA for 2026, evaluated by CX quality, peak-season scalability, technology, and client satisfaction.",
            author: { "@type": "Organization", name: "Contact Center USA" },
            publisher: { "@type": "Organization", name: "Contact Center USA" },
            datePublished: "2026-04-19",
            dateModified: "2026-04-19",
            url: "https://contactcenterusa.com/blog/top-10-ecommerce-call-center-companies-usa",
          }),
        }}
      />
      <BlogAEOSchemas slug="top-10-ecommerce-call-center-companies-usa" />
      <Content />
    </>
  );
}
