import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Financial Call Center Services | Secure US Agents",
  description:
    "Financial call center services with US-based agents. Account servicing, payments, fraud alerts and compliance-aware handling. Request a quote.",
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
