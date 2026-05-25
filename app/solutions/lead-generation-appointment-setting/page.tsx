import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Lead Generation Appointment Setting | Contact Center USA",
  description:
    "US-based lead generation appointment setting with trained agents, flexible coverage, reporting, and fast onboarding. Request a quote from Contact Center USA.",
  keywords: [
    "lead generation services",
    "appointment setting bpo",
    "b2b lead gen outsourcing usa",
    "sdr outsourcing",
    "cold calling services",
    "b2b appointment setting",
    "outbound lead generation",
    "qualified leads usa",
  ],
  alternates: { canonical: "/solutions/lead-generation-appointment-setting" },
};

export default function Page() {
  return <Content />;
}
