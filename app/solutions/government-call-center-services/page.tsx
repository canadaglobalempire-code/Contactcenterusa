import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Government Call Center USA | Government BPO Services & Public Sector Call Center Outsourcing",
  description:
    "US-based government call center for federal, state, and local agencies. Government BPO services and public sector call center outsourcing with FISMA, FedRAMP-ready, HIPAA, and CJIS-aligned operations.",
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
