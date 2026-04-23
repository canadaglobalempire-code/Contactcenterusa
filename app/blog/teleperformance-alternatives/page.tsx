import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Teleperformance Alternatives: 7 Better Options for Mid-Market (2026)",
  description:
    "Looking for a Teleperformance alternative in 2026? Compare 7 outsourcing partners that deliver better CX, flexible contracts, and lower cost — ranked for mid-market brands.",
  alternates: { canonical: "/blog/teleperformance-alternatives" },
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
            headline: "Teleperformance Alternatives: 7 Better Options for Mid-Market (2026)",
            description: "Looking for a Teleperformance alternative in 2026? Compare 7 outsourcing partners that deliver better CX, flexible contracts, and lower cost.",
            author: { "@type": "Organization", name: "Contact Center USA" },
            publisher: { "@type": "Organization", name: "Contact Center USA" },
            datePublished: "2026-04-23",
            url: "https://contactcenterusa.com/blog/teleperformance-alternatives",
          }),
        }}
      />
      <Content />
    </>
  );
}
