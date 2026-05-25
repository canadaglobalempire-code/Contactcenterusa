import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Medical Call Center Services Guide",
  description:
    "Read the medical call center services guide guide for 2026. Compare options, pricing factors, buyer criteria, and quote next steps.",
  keywords: [
    "medical call center",
    "healthcare call center",
    "medical contact center",
    "healthcare call center best practices",
    "healthcare call center outsourcing companies",
    "medical call center services",
    "HIPAA compliant call center",
    "healthcare call center outsourcing",
    "patient call center",
    "medical answering service",
    "healthcare contact center solutions",
    "healthcare call center metrics",
  ],
  alternates: { canonical: "/blog/medical-call-center-services" },
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
            headline: "Medical Call Center Services: Complete Guide for Healthcare Providers",
            description: "Comprehensive guide to medical call center services for healthcare providers. Learn about HIPAA-compliant healthcare call centers, best practices, outsourcing benefits, technology, and how to choose the right provider.",
            author: { "@type": "Organization", name: "Contact Center USA" },
            publisher: { "@type": "Organization", name: "Contact Center USA" },
            datePublished: "2026-04-09",
            dateModified: "2026-04-09",
            url: "https://contactcenterusa.com/blog/medical-call-center-services",
          }),
        }}
      />
      <Content />
    </>
  );
}
