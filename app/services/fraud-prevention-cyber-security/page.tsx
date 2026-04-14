import type { Metadata } from "next";
import { FraudPreventionContent } from "./Content";

export const metadata: Metadata = {
  title: "Fraud Prevention & Cyber Security",
  description:
    "Protect your business with call center fraud prevention and contact center cyber security solutions including identity verification, transaction monitoring, PCI DSS compliance, data protection, and real-time threat detection. 99.9% threat detection rate from Contact Center USA.",
};

export default function FraudPreventionPage() {
  return <FraudPreventionContent />;
}
