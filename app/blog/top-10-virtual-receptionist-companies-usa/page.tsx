import { buildAEOBlogPostingSchema } from "@/lib/aeo";
import type { Metadata } from "next";
import Content from "./Content";
import { BlogAEOSchemas } from "@/components/shared/BlogAEOSchemas";
import { articleMeta } from "@/lib/seo-config";

const title = "Virtual Receptionist Companies in the USA: Guide";
const description =
  "Review the virtual receptionist provider list. Compare customer hours, message handling and appointment tasks, then confirm the proposed delivery scope.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "virtual receptionist companies",
    "best virtual receptionist service",
    "virtual receptionist for small business",
    "live virtual receptionist",
    "law firm virtual receptionist",
    "medical virtual receptionist",
    "us based virtual receptionist",
    "24/7 virtual receptionist service",
    "virtual receptionist pricing",
    "professional call answering service",
    "bilingual virtual receptionist",
    "virtual receptionist with appointment booking",
  ],
  alternates: { canonical: "/blog/top-10-virtual-receptionist-companies-usa" },
  ...articleMeta(title, description, "/blog/top-10-virtual-receptionist-companies-usa"),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildAEOBlogPostingSchema({
              url: "https://contactcenterusa.com/blog/top-10-virtual-receptionist-companies-usa",
              headline: "Top 10 Virtual Receptionist Companies in USA (2026)",
              description: "Comprehensive ranking of the best virtual receptionist companies in the USA for 2026, evaluated by call quality, appointment booking, CRM integration, and client satisfaction.",
              datePublished: "2026-04-19",
              dateModified: "2026-04-19",
              image: "https://contactcenterusa.com/images/cc-agent-smile.jpg",
            })),
        }}
      />
      <BlogAEOSchemas slug="top-10-virtual-receptionist-companies-usa" />
      <Content />
    </>
  );
}
