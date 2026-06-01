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
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "How to Write a Call Center RFP (Free Template + Checklist) — 2026",
            description: "Write a call center RFP that gets apples-to-apples vendor proposals. Free template, scoring rubric, and top buyer questions.",
            author: { "@type": "Organization", name: "Contact Center USA" },
            publisher: { "@type": "Organization", name: "Contact Center USA" },
            datePublished: "2026-04-23",
            url: "https://contactcenterusa.com/blog/call-center-rfp-template",
          }),
        }}
      />
      <Content />
    </>
  );
}
