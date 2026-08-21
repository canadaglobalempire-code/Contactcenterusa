import { buildAEOBlogPostingSchema } from "@/lib/aeo";
import type { Metadata } from "next";
import Content from "./Content";
import { BlogAEOSchemas } from "@/components/shared/BlogAEOSchemas";

export const metadata: Metadata = {
  title: "Best Technical Support Outsourcing Companies (2026)",
  description:
    "Compare technical support outsourcing providers by tiered help desk depth, SaaS/product expertise, tooling, SLAs, and CX quality.",
  keywords: [
    "technical support outsourcing companies",
    "top technical support companies usa",
    "it help desk outsourcing",
    "saas technical support outsourcing",
    "tier 1 tier 2 tech support outsourcing",
    "device technical support outsourcing",
    "cloud technical support outsourcing",
    "24 7 tech support outsourcing",
    "managed it help desk",
    "technical support bpo companies",
    "us based technical support",
    "outsourced tech support services",
  ],
  alternates: { canonical: "/blog/top-10-technical-support-outsourcing-companies-usa" },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildAEOBlogPostingSchema({
              url: "https://contactcenterusa.com/blog/top-10-technical-support-outsourcing-companies-usa",
              headline: "Top 10 Technical Support Outsourcing Companies in USA (2026)",
              description: "Comprehensive ranking of the best technical support outsourcing companies in the USA for 2026, evaluated by technical expertise, CX quality, platform coverage, help desk maturity, and client satisfaction.",
              datePublished: "2026-04-19",
              dateModified: "2026-04-19",
              image: "https://contactcenterusa.com/images/cc-team-huddle.jpg",
            })),
        }}
      />
      <BlogAEOSchemas slug="top-10-technical-support-outsourcing-companies-usa" />
      <Content />
    </>
  );
}
