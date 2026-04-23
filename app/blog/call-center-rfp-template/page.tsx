import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "How to Write a Call Center RFP (Free Template + Checklist) — 2026",
  description:
    "Write a call center RFP that gets apples-to-apples vendor proposals. Free 25-section RFP template, scoring rubric, and the exact questions top BPO buyers ask in 2026.",
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
