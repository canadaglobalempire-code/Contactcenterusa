import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Call Center Outsourcing Services | Contact Center USA",
  description:
    "Explore US-based call center outsourcing for inbound and outbound calls, customer care, technical support, telemarketing, live chat, and omnichannel CX.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
