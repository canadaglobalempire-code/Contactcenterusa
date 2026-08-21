import { buildAEOBlogPostingSchema } from "@/lib/aeo";
import type { Metadata } from "next";
import Content from "./Content";
import { BlogAEOSchemas } from "@/components/shared/BlogAEOSchemas";

export const metadata: Metadata = {
  title: "10 Best US-Based Live Chat Outsourcing Companies (2026)",
  description:
    "Compare 10 US-based live chat outsourcing companies by pricing, 24/7 coverage, response time, ecommerce fit, AI assistance, and integrations.",
  keywords: [
    "live chat outsourcing companies",
    "24/7 live chat support",
    "outsourced live chat services",
    "chat agent outsourcing",
    "website live chat service",
    "ecommerce live chat outsourcing",
    "live chat support outsourcing usa",
    "chatbot integration services",
    "zendesk live chat outsourcing",
    "intercom chat outsourcing",
    "drift chat outsourcing",
    "us based live chat agents",
  ],
  alternates: { canonical: "/blog/top-10-live-chat-outsourcing-companies-usa" },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildAEOBlogPostingSchema({
              url: "https://contactcenterusa.com/blog/top-10-live-chat-outsourcing-companies-usa",
              headline: "Top 10 Live Chat Outsourcing Companies in USA (2026)",
              description: "Comprehensive ranking of the best live chat outsourcing companies in the USA for 2026, evaluated by 24/7 coverage, AI-assisted chat, helpdesk integrations, agent quality, and client outcomes.",
              datePublished: "2026-04-19",
              dateModified: "2026-08-19",
              image: "https://contactcenterusa.com/images/cc-agent-smile.jpg",
            })),
        }}
      />
      <BlogAEOSchemas slug="top-10-live-chat-outsourcing-companies-usa" />
      <Content />
    </>
  );
}
