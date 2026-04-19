import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Lead Generation Services USA | Appointment Setting BPO & B2B Lead Gen Outsourcing USA",
  description:
    "B2B lead generation services from a 100% US-based appointment setting BPO. Strategic cold calling, BANT qualification, and booked meetings for your sales team at 35% lower cost per lead.",
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
