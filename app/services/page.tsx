import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";
import { generateServiceCatalogSchema } from "@/lib/schema";
import { SEOContentSection, type SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Call Center Outsourcing Services | Contact Center USA",
  description:
    "Explore US-based call center outsourcing for inbound and outbound calls, customer care, technical support, telemarketing, live chat, and omnichannel CX.",
  alternates: { canonical: "/services" },
};


const seoSections: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "How to choose",
    heading: "Buy the outcome, not the seat",
    accent: "the outcome",
    body: [
      "Most call center quotes are priced per agent per hour, which quietly moves every risk onto you. If agents sit idle you still pay; if handle time balloons you pay more; if quality slips you pay the same. The number that actually matters is cost per resolved contact, and it is the one number most providers will not put in a proposal.",
      "Before comparing vendors, work out what a resolved contact is worth to your business and what you currently spend to produce one. That single figure turns an unreadable rate card into a straightforward comparison, and it tends to expose the gap between a low hourly rate and an expensive outcome.",
    ],
    stats: [
      { stat: "25+", label: "Years running US operations" },
      { stat: "300+", label: "Active client programs" },
      { stat: "24/7", label: "Coverage including holidays" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Onshore vs offshore",
    heading: "Where the cheaper rate stops being cheaper",
    intro:
      "Offshore delivery genuinely wins on hourly rate. Whether it wins on total cost depends almost entirely on how complex your calls are and how much a bad interaction costs you.",
    leftTitle: "US-based delivery",
    rightTitle: "Offshore delivery",
    rows: [
      { label: "Hourly rate", left: "Higher", right: "Lower", rightYes: true },
      { label: "Cost per resolved contact", left: "Often lower on complex work", right: "Often higher once escalations are counted", leftYes: true },
      { label: "Regulated & clinical calls", left: "Straightforward", right: "Added compliance overhead", leftYes: true },
      { label: "Accent and idiom friction", left: "None", right: "Varies by program", leftYes: true },
      { label: "Time-zone alignment", left: "Native", right: "Requires night shifts", leftYes: true },
      { label: "Very high volume, simple scripts", left: "Competitive", right: "Strong economics", rightYes: true },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "Getting started",
    heading: "What the first 30 days look like",
    intro:
      "A launch that skips discovery is a launch that gets re-done. This is the sequence we run, and the one you should expect from any serious provider.",
    steps: [
      { title: "Discovery", body: "We map your call types, current volumes by hour and day, escalation rules and the systems agents must write into. Nothing is scripted until this is agreed." },
      { title: "Script and QA design", body: "We build the call flows, the disposition set and the QA scorecard together, so quality is measured against your definition rather than a generic template." },
      { title: "Agent training", body: "Dedicated agents train on your product, tone and systems before taking a live call. For regulated work this includes the relevant compliance module." },
      { title: "Pilot and calibrate", body: "A limited-volume pilot runs while we calibrate scoring with your team, then volume scales as the numbers hold." },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* The 26-service catalog is emitted on the page that actually lists
          them, not site-wide from the root layout. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceCatalogSchema()).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />
      <ServicesContent />
      <SEOContentSection sections={seoSections} />
    </>
  );
}
