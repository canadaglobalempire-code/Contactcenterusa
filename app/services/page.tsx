import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";
import { generateServiceCatalogSchema } from "@/lib/schema";
import { SEOContentSection, type SEOPattern } from "@/components/shared/SEOContentSection";
import { PageFAQ } from "@/components/shared/PageFAQ";

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
  {
    pattern: "split-image",
    eyebrow: "Matching service to call type",
    heading: "The service you need is decided by your calls, not by our catalog",
    image: "/images/cc-team-desk.jpg",
    imagePosition: "right",
    body: [
      "Buyers usually arrive with a service name — an answering service, a call center, technical support — and the name is frequently wrong for what their calls actually are. A dental office asking for an answering service usually needs appointment scheduling with recall outreach, which is a different staffing model. A SaaS company asking for customer support often needs Tier 1 triage with a real escalation path, which is a different hire. The fastest way to a wrong quote is to price the name instead of the call mix.",
      "The right starting point is three months of your own call data: what people call about, when the calls arrive by hour and day, how long they run, and what a resolved call is worth. We scope from that rather than from the catalog, which is why a discovery conversation with us starts with your phone records and not with a rate card.",
    ],
    bullets: [
      "Inbound support, answering and scheduling: priced on resolution, staffed to your call clock",
      "Outbound sales, lead follow-up and appointment setting: priced per qualified outcome, TCPA-evidenced",
      "Technical and Tier 1-3 support: priced on deflection and first-contact resolution",
      "Back office, data and processing work: priced per transaction with accuracy-weighted QA",
    ],
  },
];

const faqs = [
  {
    question: "How much do call center outsourcing services cost?",
    answer:
      "US-based programs typically run from a few hundred dollars a month for after-hours answering to a per-agent-per-hour model for dedicated teams, with per-minute rates commonly between $0.85 and $1.65 and full 24/7 dedicated coverage from around $600 to $1,500 monthly for small programs. The honest answer is that the pricing model matters more than the rate: per-minute suits unpredictable volume, per-call suits long conversations, and dedicated seats suit steady volume. We quote against your actual call records, and we will tell you which model is cheapest for your specific pattern.",
  },
  {
    question: "What is the difference between an answering service and a call center?",
    answer:
      "Scope of resolution. An answering service captures the call — takes the message, books the basic appointment, dispatches the emergency — and hands the work back to you. A call center resolves the call: agents work inside your systems, answer account questions, process transactions and close the loop while the caller is on the line. Many businesses buy an answering service, discover every message still needs actioning by their own staff, and realise the gap. The test is simple: if your calls end with something completed, you need a call center; if they end with a note, an answering service is enough.",
  },
  {
    question: "How quickly can a program launch?",
    answer:
      "A pilot can be live in as little as 48 hours for straightforward answering and overflow work. Full programs typically take one to two weeks: discovery against your call data, call-flow and QA design with your team, agent training on your product and systems, then a limited-volume pilot that scales as the numbers hold. Regulated programs — HIPAA healthcare work, PCI payment handling, financial services — run two to three weeks because compliance modules, business associate agreements and system access controls are put in place before the first live call, not after.",
  },
  {
    question: "Do you require long-term contracts or minimum volumes?",
    answer:
      "No. Engagements are month-to-month with no FTE minimums and no volume floors, and either side can exit on thirty days' notice. That structure is deliberate: a provider who can lose an account in thirty days manages the account accordingly, which is exactly the incentive most multi-year outsourcing contracts remove at signature. It also makes pilots honest — if the pilot numbers do not hold, you leave with your call flows, recordings and data rather than negotiating an early-termination clause.",
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
      <PageFAQ heading="Call Center Services: Frequently Asked Questions" faqs={faqs} />
    </>
  );
}
