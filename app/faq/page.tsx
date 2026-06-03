import type { Metadata } from "next";
import { FAQPageContent } from "./FAQPageContent";

export const metadata: Metadata = {
  title: "Call Center Outsourcing FAQ | US-Based Support Answers",
  description:
    "Answers to common questions about call center outsourcing, setup, compliance, US-based agents, multilingual support, and provider selection.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return <FAQPageContent />;
}
