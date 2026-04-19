import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Inbound Call Center Services USA | Inbound BPO USA & 24/7 Inbound Support Outsourcing",
  description:
    "Inbound call center services from a 100% US-based BPO. 24/7 inbound support outsourcing, live call answering, order taking, help desk, and appointment scheduling with <15s answer times.",
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
