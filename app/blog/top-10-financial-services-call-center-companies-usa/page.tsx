import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Top 10 Financial Services Call Center Companies in USA (2026)",
  description:
    "Compare the top 10 financial services call center companies in the USA for 2026. Ranked by compliance, technology, CX quality, and client satisfaction — covering banking, lending, wealth management, fintech, BNPL, and credit card customer service outsourcing.",
  keywords: [
    "financial services call center companies",
    "top financial call center companies usa",
    "banking call center outsourcing",
    "financial services bpo companies",
    "fintech customer service outsourcing",
    "bank customer support outsourcing",
    "credit card call center services",
    "wealth management call center",
    "financial services customer service usa",
    "lending call center outsourcing",
    "pci dss compliant call center",
    "soc 2 call center outsourcing",
  ],
  alternates: { canonical: "/blog/top-10-financial-services-call-center-companies-usa" },
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
            headline: "Top 10 Financial Services Call Center Companies in USA (2026)",
            description:
              "Comprehensive ranking of the best financial services call center companies in the USA for 2026, evaluated by compliance, technology, CX quality, and client satisfaction.",
            author: { "@type": "Organization", name: "Contact Center USA" },
            publisher: { "@type": "Organization", name: "Contact Center USA" },
            datePublished: "2026-04-19",
            dateModified: "2026-04-19",
            url: "https://www.contactcenterusa.com/blog/top-10-financial-services-call-center-companies-usa",
          }),
        }}
      />
      <Content />
    </>
  );
}
