import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "How to Choose a Call Center Partner (2026)",
  description:
    "How to choose the right call center partner in 2026 — the criteria, red flags, and questions to ask before you sign. A step-by-step buyer's guide.",
  alternates: { canonical: "/blog/how-to-choose-call-center-partner" },
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
            headline: "How to Choose the Right Call Center Outsourcing Partner",
            description: "A structured framework for evaluating and selecting the best call center outsourcing partner. Covers key criteria, essential questions, red flags, evaluation checklists, and technology requirements for 2026.",
            author: { "@type": "Organization", name: "Contact Center USA" },
            publisher: { "@type": "Organization", name: "Contact Center USA" },
            datePublished: "2026-04-01",
            url: "https://contactcenterusa.com/blog/how-to-choose-call-center-partner",
          }),
        }}
      />
      <Content />
    </>
  );
}
