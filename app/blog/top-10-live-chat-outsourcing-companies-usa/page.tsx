import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Top 10 Live Chat Outsourcing Companies in USA (2026)",
  description:
    "Compare the top 10 live chat outsourcing companies in the USA for 2026. Ranked by 24/7 coverage, chat-to-voice handoff, Zendesk/Intercom/Drift integrations, AI-assisted chat, and ecommerce website chat support.",
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
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Top 10 Live Chat Outsourcing Companies in USA (2026)",
            description:
              "Comprehensive ranking of the best live chat outsourcing companies in the USA for 2026, evaluated by 24/7 coverage, AI-assisted chat, helpdesk integrations, agent quality, and client outcomes.",
            author: { "@type": "Organization", name: "Contact Center USA" },
            publisher: { "@type": "Organization", name: "Contact Center USA" },
            datePublished: "2026-04-19",
            dateModified: "2026-04-19",
            url: "https://www.contactcenterusa.com/blog/top-10-live-chat-outsourcing-companies-usa",
          }),
        }}
      />
      <Content />
    </>
  );
}
