import { buildAEOBlogPostingSchema } from "@/lib/aeo";
import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Medical Call Center Services Guide (2026)",
  description:
    "Medical call center services — HIPAA-compliant patient scheduling, triage, and 24/7 answering for clinics and hospitals. Compare options & get a quote.",
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
          __html: JSON.stringify(buildAEOBlogPostingSchema({
              url: "https://contactcenterusa.com/blog/medical-call-center-services",
              headline: "Medical Call Center Services: Complete Guide for Healthcare Providers",
              description: "Comprehensive guide to medical call center services for healthcare providers. Learn about HIPAA-compliant healthcare call centers, best practices, outsourcing benefits, technology, and how to choose the right provider.",
              datePublished: "2026-04-09",
              dateModified: "2026-04-09",
              image: "https://contactcenterusa.com/images/cc-agent-headset.jpg",
            })),
        }}
      />
      <Content />
    </>
  );
}
