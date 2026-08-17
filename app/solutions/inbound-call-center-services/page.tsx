import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Inbound Call Center Services | 24/7 US Answering",
  description:
    "Inbound call center services with 24/7 US-based agents. Overflow, after-hours and full-time coverage across phone, chat and email. Get a quote.",
  keywords: [
    "inbound call center services",
    "inbound bpo usa",
    "24/7 inbound support outsourcing",
    "live call answering service",
    "order taking services",
    "customer service outsourcing",
    "inbound call center outsourcing",
    "us-based call center",
  ],
  alternates: { canonical: "/solutions/inbound-call-center-services" },
};

export default function Page() {
  return <Content />;
}
