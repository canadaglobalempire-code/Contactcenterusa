import { buildAEOBlogPostingSchema } from "@/lib/aeo";
import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "In-House vs Outsourced Call Center: Cost (2026)",
  description:
    "In-house vs outsourced call center: a 2026 cost and ROI breakdown covering staffing, tech, and overhead — so you can decide with real numbers.",
  alternates: { canonical: "/blog/in-house-vs-outsourced-call-center" },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildAEOBlogPostingSchema({
              url: "https://contactcenterusa.com/blog/in-house-vs-outsourced-call-center",
              headline: "In-House vs Outsourced Call Center: True Cost Comparison (2026)",
              description: "Should you build or outsource your call center in 2026? A line-by-line cost comparison of in-house vs outsourced operations.",
              datePublished: "2026-04-23",
              image: "https://contactcenterusa.com/images/cc-management.jpg",
            })),
        }}
      />
      <Content />
    </>
  );
}
