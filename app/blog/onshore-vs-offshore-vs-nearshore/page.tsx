import { buildAEOBlogPostingSchema } from "@/lib/aeo";
import type { Metadata } from "next";
import Content from "./Content";
import { articleMeta } from "@/lib/seo-config";

const title = "Onshore vs Offshore vs Nearshore Call Centers (2026)";
const description =
  "Onshore vs offshore vs nearshore call centers — compare cost, quality, language, and risk in 2026 to pick the right outsourcing model.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog/onshore-vs-offshore-vs-nearshore" },
  ...articleMeta(title, description, "/blog/onshore-vs-offshore-vs-nearshore"),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildAEOBlogPostingSchema({
              url: "https://contactcenterusa.com/blog/onshore-vs-offshore-vs-nearshore",
              headline: "Onshore vs Offshore vs Nearshore: Pros, Cons & Costs",
              description: "Compare onshore, offshore, and nearshore call center outsourcing models side by side. Detailed analysis of costs, quality metrics, CSAT scores, and when to choose each delivery model for your business.",
              datePublished: "2026-04-01",
              image: "https://contactcenterusa.com/images/america.jpg",
            })),
        }}
      />
      <Content />
    </>
  );
}
