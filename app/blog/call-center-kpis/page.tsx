import { buildAEOBlogPostingSchema } from "@/lib/aeo";
import type { Metadata } from "next";
import Content from "./Content";
import { articleMeta } from "@/lib/seo-config";

const title = "Top Call Center KPIs & Metrics to Track (2026)";
const description =
  "The call center KPIs that matter in 2026 — from FCR and AHT to CSAT and occupancy — with target ranges and why each one drives performance.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog/call-center-kpis" },
  ...articleMeta(title, description, "/blog/call-center-kpis"),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildAEOBlogPostingSchema({
              url: "https://contactcenterusa.com/blog/call-center-kpis",
              headline: "Top 10 KPIs Every Outsourced Call Center Should Track",
              description: "Discover the 10 most critical call center KPIs including FCR, CSAT, NPS, AHT, and cost per contact. Industry benchmarks, measurement frameworks, and actionable tips to drive continuous improvement.",
              datePublished: "2026-04-01",
              image: "https://contactcenterusa.com/images/hd-agents-row.jpg",
            })),
        }}
      />
      <Content />
    </>
  );
}
