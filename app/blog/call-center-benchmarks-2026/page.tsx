import { buildAEOBlogPostingSchema } from "@/lib/aeo";
import type { Metadata } from "next";
import Content from "./Content";
import { articleMeta } from "@/lib/seo-config";

const title = "Call Center Benchmarks & Metrics (2026 Data)";
const description =
  "2026 call center benchmarks — service level, AHT, FCR, CSAT, and abandonment rates by industry, so you can measure performance against your peers.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog/call-center-benchmarks-2026" },
  ...articleMeta(title, description, "/blog/call-center-benchmarks-2026"),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildAEOBlogPostingSchema({
              url: "https://contactcenterusa.com/blog/call-center-benchmarks-2026",
              headline: "2026 Call Center Benchmarks: AHT, CSAT, FCR & More by Industry",
              description: "2026 call center benchmarks for every metric that matters — AHT, CSAT, FCR, NPS, abandon rate, occupancy, attrition — broken down by industry and channel.",
              datePublished: "2026-04-23",
              image: "https://contactcenterusa.com/images/cc-agent-focus.jpg",
            })),
        }}
      />
      <Content />
    </>
  );
}
