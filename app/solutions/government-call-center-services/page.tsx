import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Government Call Center Services | Citizen Support",
  description:
    "Government call center services for citizen support lines, benefits enquiries, program enrollment and multilingual access. Get a free quote.",
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
