import { buildAEOBlogPostingSchema } from "@/lib/aeo";
import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Call Center RFP Template & Checklist (2026)",
  description:
    "A free call center RFP template and checklist — the exact questions, scoring criteria, and SLAs to include so you choose the right BPO partner.",
  alternates: { canonical: "/blog/call-center-rfp-template" },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildAEOBlogPostingSchema({
              url: "https://contactcenterusa.com/blog/call-center-rfp-template",
              headline: "How to Write a Call Center RFP (Free Template + Checklist) — 2026",
              description: "Write a call center RFP that gets apples-to-apples vendor proposals. Free template, scoring rubric, and top buyer questions.",
              datePublished: "2026-04-23",
              image: "https://contactcenterusa.com/images/cc-team-plan.jpg",
            })),
        }}
      />
      <Content />
    </>
  );
}
