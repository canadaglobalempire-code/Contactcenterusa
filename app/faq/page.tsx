import type { Metadata } from "next";
import { FAQPageContent } from "./FAQPageContent";

export const metadata: Metadata = {
  title: "FAQ | Call Center Outsourcing Questions Answered",
  description:
    "Get answers to common questions about Contact Center USA's call center outsourcing services, pricing, setup process, compliance, and more.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return <FAQPageContent />;
}
