import { buildAEOBlogPostingSchema } from "@/lib/aeo";
import type { Metadata } from "next";
import Content from "./Content";
import { articleMeta } from "@/lib/seo-config";

const title = "How to Choose a Call Center Partner (2026)";
const description =
  "How to choose the right call center partner in 2026 — the criteria, red flags, and questions to ask before you sign. A step-by-step buyer's guide.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog/how-to-choose-call-center-partner" },
  ...articleMeta(title, description, "/blog/how-to-choose-call-center-partner"),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildAEOBlogPostingSchema({
              url: "https://contactcenterusa.com/blog/how-to-choose-call-center-partner",
              headline: "How to Choose the Right Call Center Outsourcing Partner",
              description: "A structured framework for evaluating and selecting the best call center outsourcing partner. Covers key criteria, essential questions, red flags, evaluation checklists, and technology requirements for 2026.",
              datePublished: "2026-04-01",
              image: "https://contactcenterusa.com/images/hd-office-team.jpg",
            })),
        }}
      />
      <Content />
    </>
  );
}
