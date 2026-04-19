import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Financial Call Center Services USA | Financial Services BPO & Banking Call Center Outsourcing",
  description:
    "Financial call center services from a 100% US-based BPO. PCI-DSS compliant payment processing, FDCPA-compliant collections, and banking call center outsourcing for banks, credit unions, lenders, and healthcare revenue cycle.",
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
