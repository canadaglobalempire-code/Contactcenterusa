import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Top 15 Insurance BPO Companies in the USA (2026 Rankings)",
  description:
    "Discover the top insurance BPO companies in the USA for 2026. Compare the best BPO services for insurance companies including claims processing, policy administration, P&C insurance BPO, underwriting support, and insurance customer service outsourcing ranked by compliance, technology, and performance.",
  keywords: [
    "insurance bpo companies",
    "top insurance bpo companies",
    "bpo for insurance companies",
    "insurance bpo company",
    "bpo insurance companies",
    "bpo services for insurance companies",
    "p&c insurance bpo company",
    "insurance outsourcing companies",
    "insurance call center outsourcing",
    "insurance claims processing outsourcing",
    "insurance bpo providers 2026",
    "insurance back office outsourcing",
  ],
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
            headline: "Top 15 Insurance BPO Companies in the USA (2026 Rankings)",
            description: "Comprehensive ranking of the top insurance BPO companies in the USA for 2026, evaluated by regulatory compliance, claims processing expertise, technology maturity, and customer experience quality.",
            author: { "@type": "Organization", name: "Contact Center USA" },
            publisher: { "@type": "Organization", name: "Contact Center USA" },
            datePublished: "2026-04-10",
            dateModified: "2026-04-10",
            url: "https://www.contactcenterusa.com/blog/top-15-insurance-bpo-companies-usa",
          }),
        }}
      />
      <Content />
    </>
  );
}
