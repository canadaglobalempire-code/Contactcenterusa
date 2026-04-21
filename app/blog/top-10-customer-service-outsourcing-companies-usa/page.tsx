import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Top 10 Customer Service Outsourcing Companies in USA (2026)",
  description:
    "Compare the top 10 customer service outsourcing companies in the USA for 2026. Ranked by CX quality, technology, scalability, and client satisfaction — covering omnichannel support, inbound customer care, live chat, and email support outsourcing.",
  keywords: [
    "customer service outsourcing companies",
    "top customer service outsourcing companies usa",
    "customer support outsourcing usa",
    "customer care outsourcing",
    "outsourced customer service",
    "us based customer service outsourcing",
    "omnichannel customer support outsourcing",
    "live chat outsourcing companies",
    "email support outsourcing",
    "24 7 customer service outsourcing",
    "inbound call center outsourcing",
    "customer experience outsourcing",
  ],
  alternates: { canonical: "/blog/top-10-customer-service-outsourcing-companies-usa" },
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
            headline: "Top 10 Customer Service Outsourcing Companies in USA (2026)",
            description:
              "Comprehensive ranking of the best customer service outsourcing companies in the USA for 2026, evaluated by CX quality, technology, scalability, and client satisfaction.",
            author: { "@type": "Organization", name: "Contact Center USA" },
            publisher: { "@type": "Organization", name: "Contact Center USA" },
            datePublished: "2026-04-19",
            dateModified: "2026-04-19",
            url: "https://contactcenterusa.com/blog/top-10-customer-service-outsourcing-companies-usa",
          }),
        }}
      />
      <Content />
    </>
  );
}
