import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "In-House vs Outsourced Call Center Cost",
  description:
    "Read the in-house vs outsourced call center cost guide for 2026. Compare options, pricing factors, buyer criteria, and quote next steps.",
  alternates: { canonical: "/blog/in-house-vs-outsourced-call-center" },
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
            headline: "In-House vs Outsourced Call Center: True Cost Comparison (2026)",
            description:
              "Should you build or outsource your call center in 2026? A line-by-line cost comparison of in-house vs outsourced operations.",
            author: { "@type": "Organization", name: "Contact Center USA" },
            publisher: { "@type": "Organization", name: "Contact Center USA" },
            datePublished: "2026-04-23",
            url: "https://contactcenterusa.com/blog/in-house-vs-outsourced-call-center",
          }),
        }}
      />
      <Content />
    </>
  );
}
