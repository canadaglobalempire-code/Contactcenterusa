import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Top 10 Inbound Call Center Companies in USA (2026)",
  description:
    "Compare the top 10 inbound call center companies in the USA for 2026. Ranked by 24/7 live agent coverage, FCR, CSAT, omnichannel inbound capability, and client satisfaction — covering IVR, ACD, call queuing, and customer support outsourcing.",
  keywords: [
    "inbound call center companies",
    "inbound call center usa",
    "top inbound call center usa",
    "inbound customer service outsourcing",
    "24/7 inbound support",
    "live agent answering service",
    "inbound bpo companies",
    "inbound customer support outsourcing",
    "american inbound call center",
    "inbound customer care services",
    "us based inbound call center",
    "inbound call center outsourcing companies",
  ],
  alternates: { canonical: "/blog/top-10-inbound-call-center-companies-usa" },
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
            headline: "Top 10 Inbound Call Center Companies in USA (2026)",
            description:
              "Comprehensive ranking of the best inbound call center companies in the USA for 2026, evaluated by 24/7 live agent coverage, FCR, CSAT, omnichannel inbound capability, and client satisfaction.",
            author: { "@type": "Organization", name: "Contact Center USA" },
            publisher: { "@type": "Organization", name: "Contact Center USA" },
            datePublished: "2026-04-19",
            dateModified: "2026-04-19",
            url: "https://contactcenterusa.com/blog/top-10-inbound-call-center-companies-usa",
          }),
        }}
      />
      <Content />
    </>
  );
}
