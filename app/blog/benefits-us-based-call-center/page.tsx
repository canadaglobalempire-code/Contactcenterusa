import { buildAEOBlogPostingSchema } from "@/lib/aeo";
import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Benefits of US-Based Call Centers (2026)",
  description:
    "The benefits of a US-based call center: native-English agents, data security, time-zone coverage, and stronger CX. See if onshore is right for you.",
  alternates: { canonical: "/blog/benefits-us-based-call-center" },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildAEOBlogPostingSchema({
              url: "https://contactcenterusa.com/blog/benefits-us-based-call-center",
              headline: "Benefits of US-Based Call Center Services",
              description: "Explore the advantages of US-based call center services including cultural alignment, native English fluency, data security, regulatory compliance, and superior CSAT scores compared to offshore alternatives.",
              datePublished: "2026-04-01",
              image: "https://contactcenterusa.com/images/agents-working.jpg",
            })),
        }}
      />
      <Content />
    </>
  );
}
