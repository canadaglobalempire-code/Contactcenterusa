import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Government Call Center Services | FISMA & FedRAMP Compliant",
  description:
    "Trusted government contact center services with 100% US-based agents, security clearance capabilities, and HIPAA/FISMA/FedRAMP compliance-ready infrastructure for federal, state, and local agencies.",
  alternates: { canonical: "/solutions/government-call-center-services" },
};

export default function Page() {
  return <Content />;
}
