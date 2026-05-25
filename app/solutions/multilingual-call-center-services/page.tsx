import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Multilingual Call Center | Contact Center USA",
  description:
    "US-based multilingual call center with trained agents, flexible coverage, reporting, and fast onboarding. Request a quote from Contact Center USA.",
  keywords: [
    "multilingual call center",
    "bilingual bpo usa",
    "multilingual customer support",
    "spanish call center",
    "bilingual call center services",
    "multilingual bpo",
    "spanish customer support",
    "translation and localization services",
  ],
  alternates: { canonical: "/solutions/multilingual-call-center-services" },
};

export default function Page() {
  return <Content />;
}
