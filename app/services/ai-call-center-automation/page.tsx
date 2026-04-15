import type { Metadata } from "next";
import { AIAutomationContent } from "./Content";

export const metadata: Metadata = {
  title: "AI Call Center Automation | Chatbots & Intelligent Workflows",
  description:
    "Transform your contact center with AI-powered automation — intelligent chatbots, virtual assistants, machine learning, and automated workflows. Reduce costs by 60%, achieve 24/7 availability, and improve CSAT scores. US-based AI call center solutions from Contact Center USA.",
  alternates: { canonical: "/services/ai-call-center-automation" },
};

export default function AIAutomationPage() {
  return <AIAutomationContent />;
}
