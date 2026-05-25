import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Government Call Center Services",
  description:
    "US-based government call center with trained agents, flexible coverage, reporting, and fast onboarding. Request a quote from Contact Center USA.",
  keywords: [
    "government call center",
    "government bpo services",
    "public sector call center outsourcing",
    "federal call center",
    "state government call center",
    "fisma compliant call center",
    "fedramp call center",
    "citizen services hotline",
  ],
  alternates: { canonical: "/solutions/government-call-center-services" },
};

export default function Page() {
  return <Content />;
}
