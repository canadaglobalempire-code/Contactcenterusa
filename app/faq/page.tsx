import type { Metadata } from "next";
import { FAQPageContent } from "./FAQPageContent";
import { pageMeta } from "@/lib/seo-config";

const title = "Call Center Outsourcing FAQ | US-Based Support Answers";
const description =
  "Answers to common questions about call center outsourcing, setup, compliance, US-based agents, multilingual support, and provider selection.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/faq" },
  ...pageMeta(title, description, "/faq"),
};

export default function FAQPage() {
  return <FAQPageContent />;
}
