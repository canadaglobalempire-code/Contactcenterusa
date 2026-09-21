import { buildAEOBlogPostingSchema } from "@/lib/aeo";
import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "AI Call Center vs Human Agents: Escalation & Quality Controls",
  description:
    "AI call center vs human agents: build escalation, QA, and agent-assist controls that keep automation useful without sacrificing customer experience.",
  alternates: { canonical: "/blog/ai-call-center-vs-human-agents" },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildAEOBlogPostingSchema({
              url: "https://contactcenterusa.com/blog/ai-call-center-vs-human-agents",
              headline: "AI Call Center vs Human Agents: Escalation, Quality Controls & Agent Assist",
              description: "How to decide which calls AI should handle, when to escalate to people, and how to measure quality in a blended contact center.",
              datePublished: "2026-04-23",
              image: "https://contactcenterusa.com/images/cc-team-huddle.jpg",
            })),
        }}
      />
      <Content />
    </>
  );
}
