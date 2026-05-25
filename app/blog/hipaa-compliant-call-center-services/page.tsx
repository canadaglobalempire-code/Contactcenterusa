import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "HIPAA-Compliant Call Center Services",
  description:
    "Read the hipaa-compliant call center services guide for 2026. Compare options, pricing factors, buyer criteria, and quote next steps.",
  alternates: { canonical: "/blog/hipaa-compliant-call-center-services" },
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
            headline: "HIPAA-Compliant Call Center Services: Complete 2026 Guide",
            description: "Everything healthcare leaders need to know about HIPAA-compliant call centers — BAA requirements, safeguards, vendor checklist, cost, and 2026 compliance trends.",
            author: { "@type": "Organization", name: "Contact Center USA" },
            publisher: { "@type": "Organization", name: "Contact Center USA" },
            datePublished: "2026-04-23",
            url: "https://contactcenterusa.com/blog/hipaa-compliant-call-center-services",
          }),
        }}
      />
      <Content />
    </>
  );
}
