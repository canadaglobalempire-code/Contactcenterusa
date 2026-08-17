import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Appointment Setting Services | US-Based B2B SDR Teams",
  description:
    "Outsourced appointment setting and B2B lead generation with US-based SDRs. Qualified meetings booked straight onto your reps' calendars. Get a quote.",
  keywords: [
    // Exact GSC queries ranking 12-18 with real volume and zero clicks —
    // these were missing from the page entirely.
    "appointment setting services",
    "appointment setting companies",
    "appointment setting agency",
    "outsourced appointment setting services",
    "top appointment setting companies",
    "b2b appointment setting companies",
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
