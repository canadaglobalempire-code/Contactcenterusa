import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Call Center Outsourcing Services | Contact Center USA",
  description:
    "Explore the full catalog of call center outsourcing services from Contact Center USA — inbound, outbound, customer care, technical support, telemarketing, live chat, and omnichannel programs with US-based agents.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
