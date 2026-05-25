import type { Metadata } from "next";
import { FAQPageContent } from "./FAQPageContent";

export const metadata: Metadata = {
  title: "Call Center Outsourcing FAQ",
  description:
    "Answers to common questions about call center outsourcing, pricing, setup, compliance, US-based agents, multilingual support, and quotes.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return <FAQPageContent />;
}
