import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Financial Solutions | PCI-Compliant Payment Processing & Collections",
  description:
    "Secure, PCI-DSS compliant payment processing, professional collections, and billing support from trained US-based agents. Improve collections by 35% and reduce billing disputes by 60%.",
};

export default function Page() {
  return <Content />;
}
