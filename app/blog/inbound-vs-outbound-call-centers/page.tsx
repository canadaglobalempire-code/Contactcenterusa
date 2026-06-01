import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Inbound vs Outbound Call Centers Explained (2026)",
  description:
    "Inbound vs outbound call centers — the difference, use cases, and which your business needs. A clear 2026 guide with examples. Get a quote.",
  alternates: { canonical: "/blog/inbound-vs-outbound-call-centers" },
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
            headline: "Inbound vs Outbound Call Centers: Which Is Right for You?",
            description: "Learn the key differences between inbound and outbound call centers, including use cases, KPIs, agent skills, technology requirements, and how to choose the right model for your business goals.",
            author: { "@type": "Organization", name: "Contact Center USA" },
            publisher: { "@type": "Organization", name: "Contact Center USA" },
            datePublished: "2026-04-01",
            url: "https://contactcenterusa.com/blog/inbound-vs-outbound-call-centers",
          }),
        }}
      />
      <Content />
    </>
  );
}
