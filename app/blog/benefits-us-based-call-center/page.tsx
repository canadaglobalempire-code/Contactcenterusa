import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Benefits of US-Based Call Center Services",
  description:
    "Explore the advantages of US-based call center services including cultural alignment, native English fluency, data security, regulatory compliance, and superior CSAT scores compared to offshore alternatives.",
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
            headline: "Benefits of US-Based Call Center Services",
            description: "Explore the advantages of US-based call center services including cultural alignment, native English fluency, data security, regulatory compliance, and superior CSAT scores compared to offshore alternatives.",
            author: { "@type": "Organization", name: "Contact Center USA" },
            publisher: { "@type": "Organization", name: "Contact Center USA" },
            datePublished: "2026-04-01",
            url: "https://www.contactcenterusa.com/blog/benefits-us-based-call-center",
          }),
        }}
      />
      <Content />
    </>
  );
}
