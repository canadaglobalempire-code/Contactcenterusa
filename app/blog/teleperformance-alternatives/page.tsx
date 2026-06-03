import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "7 Teleperformance Alternatives for Mid-Market CX (2026)",
  description:
    "Compare flexible Teleperformance competitors for US-based support, omnichannel CX, contract fit, migration planning, and service quality.",
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
            description: "Looking for a Teleperformance alternative in 2026? Compare 7 outsourcing partners by CX quality, service model, contract fit, and migration readiness.",
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
