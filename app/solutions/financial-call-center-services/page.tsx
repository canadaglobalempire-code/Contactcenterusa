import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Financial Call Center | Contact Center USA",
  description:
    "US-based financial call center with trained agents, flexible coverage, reporting, and fast onboarding. Request a quote from Contact Center USA.",
  keywords: [
    "financial call center services",
    "financial services bpo usa",
    "banking call center outsourcing",
    "pci compliant call center",
    "collections outsourcing",
    "credit union call center",
    "insurance call center outsourcing",
    "healthcare revenue cycle bpo",
  ],
  alternates: { canonical: "/solutions/financial-call-center-services" },
};

export default function Page() {
  return <Content />;
}
