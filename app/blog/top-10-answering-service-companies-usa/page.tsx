import { buildAEOBlogPostingSchema } from "@/lib/aeo";
import type { Metadata } from "next";
import Content from "./Content";
import { BlogAEOSchemas } from "@/components/shared/BlogAEOSchemas";

export const metadata: Metadata = {
  title: "Top 10 Answering Service Companies USA (2026)",
  description:
    "The top 10 answering service companies in the USA for 2026, ranked by 24/7 coverage, answer speed, pricing & reviews. Compare and get a quote.",
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
          __html: JSON.stringify(buildAEOBlogPostingSchema({
              url: "https://contactcenterusa.com/blog/top-10-answering-service-companies-usa",
              headline: "Top 10 Answering Service Companies in USA (2026)",
              description: "Comprehensive ranking of the best answering service companies in the USA for 2026, evaluated by 24/7 coverage, virtual receptionist quality, HIPAA compliance, bilingual support, and client outcomes.",
              datePublished: "2026-04-19",
              dateModified: "2026-04-19",
              image: "https://contactcenterusa.com/images/cc-agent-headset.jpg",
            })),
        }}
      />
      <BlogAEOSchemas slug="top-10-answering-service-companies-usa" />
      <Content />
    </>
  );
}
