import type { Metadata } from "next";
import Content from "./Content";
import { BlogAEOSchemas } from "@/components/shared/BlogAEOSchemas";

export const metadata: Metadata = {
  title: "Top 15 BPO Companies in the USA (2026 Rankings)",
  description:
    "Discover the top 15 BPO companies in the USA for 2026. Compare the best BPO outsourcing companies in USA including call center services, customer support, back office, lead generation, and business process outsourcing providers ranked by performance and client satisfaction.",
  keywords: [
    "bpo companies in usa",
    "top bpo companies in usa",
    "top 10 bpo companies in usa",
    "top 15 bpo companies in usa",
    "bpo outsourcing companies in usa",
    "bpo company in usa",
    "list of bpo companies in usa",
    "best bpo companies in usa",
    "business process outsourcing companies usa",
    "call center outsourcing companies usa",
    "outsourcing companies in america",
    "best outsourcing companies in united states",
  ],
  alternates: { canonical: "/blog/top-10-bpo-companies-in-usa" },
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
            headline: "Top 15 BPO Companies in the USA (2026 Rankings)",
            description: "Comprehensive ranking of the best BPO companies in the USA for 2026, evaluated by service quality, scalability, technology, compliance, and client satisfaction.",
            author: { "@type": "Organization", name: "Contact Center USA" },
            publisher: { "@type": "Organization", name: "Contact Center USA" },
            datePublished: "2026-04-08",
            dateModified: "2026-04-14",
            url: "https://contactcenterusa.com/blog/top-10-bpo-companies-in-usa",
          }),
        }}
      />
      <BlogAEOSchemas slug="top-10-bpo-companies-in-usa" />
      <Content />
    </>
  );
}
