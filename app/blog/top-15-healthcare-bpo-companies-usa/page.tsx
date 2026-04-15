import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Top 15 Healthcare BPO Companies in the USA (2026 Rankings)",
  description:
    "Discover the best healthcare BPO companies in the USA for 2026. Compare top HIPAA-compliant healthcare call center outsourcing providers, medical billing outsourcing companies, patient support services, and healthcare revenue cycle outsourcing companies ranked by performance, compliance, and technology.",
  keywords: [
    "healthcare BPO companies",
    "best healthcare BPO companies in USA",
    "healthcare call center outsourcing",
    "medical billing outsourcing companies",
    "HIPAA compliant call center",
    "healthcare outsourcing services",
    "patient support outsourcing",
    "healthcare customer service outsourcing",
    "medical BPO companies",
    "healthcare revenue cycle outsourcing",
    "top BPO companies healthcare",
    "healthcare BPO providers 2026",
  ],
  alternates: { canonical: "/blog/top-15-healthcare-bpo-companies-usa" },
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
            headline: "Top 15 Healthcare BPO Companies in the USA (2026 Rankings)",
            description: "Comprehensive ranking of the best healthcare BPO companies in the USA for 2026, evaluated by HIPAA compliance, patient experience, technology, and operational excellence.",
            author: { "@type": "Organization", name: "Contact Center USA" },
            publisher: { "@type": "Organization", name: "Contact Center USA" },
            datePublished: "2026-03-15",
            dateModified: "2026-04-10",
            url: "https://www.contactcenterusa.com/blog/top-15-healthcare-bpo-companies-usa",
          }),
        }}
      />
      <Content />
    </>
  );
}
