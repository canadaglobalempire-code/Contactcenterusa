import type { Metadata } from "next";
import { FAQPageContent } from "./FAQPageContent";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Get answers to common questions about Contact Center USA's call center outsourcing services, pricing, setup process, compliance, and more.",
};

export default function FAQPage() {
  return <FAQPageContent />;
}
