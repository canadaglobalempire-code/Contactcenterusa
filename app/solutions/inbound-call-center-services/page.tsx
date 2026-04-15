import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Inbound Call Center Services | 24/7 Live Answering & Order Taking",
  description:
    "Professional inbound call center services with 24/7/365 live answering, order taking, help desk support, and appointment scheduling. 99.9% call answer rate with US-based agents.",
  alternates: { canonical: "/solutions/inbound-call-center-services" },
};

export default function Page() {
  return <Content />;
}
