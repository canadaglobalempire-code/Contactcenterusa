import { buildAEOBlogPostingSchema } from "@/lib/aeo";
import type { Metadata } from "next";
import Content from "./Content";
import { BlogAEOSchemas } from "@/components/shared/BlogAEOSchemas";

export const metadata: Metadata = {
  title: "10 Best Appointment Setting Companies (2026)",
  description:
    "Compare 10 US appointment setting companies by SDR quality, lead qualification, CRM fit, and qualified-meeting process. Updated for 2026.",
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
          __html: JSON.stringify(buildAEOBlogPostingSchema({
              url: "https://contactcenterusa.com/blog/top-10-appointment-setting-companies-usa",
              headline: "Top 10 Appointment Setting Companies in USA (2026)",
              description: "Comprehensive ranking of the best B2B appointment setting companies and outsourced appointment setters in the USA for 2026, evaluated by qualified meeting delivery, SDR quality, multichannel cadence execution, CRM integrations, and pipeline impact.",
              datePublished: "2026-04-21",
              dateModified: "2026-08-19",
              image: "https://contactcenterusa.com/images/cc-discussion.jpg",
            })),
        }}
      />
      <BlogAEOSchemas slug="top-10-appointment-setting-companies-usa" />
      <Content />
    </>
  );
}
