import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Inbound Call Center | Contact Center USA",
  description:
    "US-based inbound call center with trained agents, flexible coverage, reporting, and fast onboarding. Request a quote from Contact Center USA.",
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
