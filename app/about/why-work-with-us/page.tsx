import type { Metadata } from "next";
import Content from "./Content";
import { SEOContentSection, type SEOPattern } from "@/components/shared/SEOContentSection";
import { PageFAQ } from "@/components/shared/PageFAQ";

export const metadata: Metadata = {
  title: "Why Work With Us | Contact Center USA",
  description:
    "Learn why teams choose Contact Center USA for US-based agents, flexible programs, clear reporting, compliance support, and scalable customer care.",
  alternates: { canonical: "/about/why-work-with-us" },
};

const seoSections: SEOPattern[] = [
  {
    pattern: "split-image",
    eyebrow: "The working relationship",
    heading: "What working with us actually looks like, month by month",
    image: "/images/cc-team-meeting.jpg",
    imagePosition: "right",
    body: [
      "The first month is the one that decides the relationship, so it is the most structured. Discovery runs against your real call records rather than a questionnaire; call flows and the QA scorecard are drafted with your team and approved by you before an agent trains on them; and the pilot runs at limited volume while scoring is calibrated jointly. You will hear from your account manager weekly in that period — a named senior person, not a rotating desk — reviewing answer speed by shift band, a sample of recordings, and every escalation that occurred.",
      "After stabilisation the cadence relaxes to what the program needs, but the mechanics stay: reporting arrives on schedule without being chased, misses are self-reported rather than discovered, and changes to your call flow are made in days, not change-request queues. Month-to-month terms keep the incentive honest on both sides — we keep the account by running it well, not by holding a contract over it.",
    ],
    bullets: [
      "A named senior account manager from day one, with a weekly cadence through launch",
      "QA scored against criteria you approved, calibrated jointly in the pilot",
      "Answer speed and abandonment reported by shift band, never blended",
      "Script and call-flow changes turned around in days at no change fee",
    ],
  },
];

const faqs = [
  {
    question: "What does onboarding look like in the first 30 days?",
    answer:
      "A fixed sequence: discovery against your actual call records, not a form; call flows, disposition sets and the QA scorecard drafted with your team and approved before training; dedicated agents trained on your product, tone and systems; then a limited-volume pilot while quality scoring is calibrated jointly. Simple answering programs compress this into days — a pilot can be live in 48 hours — while regulated programs run two to three weeks because business associate agreements, access controls and compliance modules go in before the first live call. Your account manager reviews the numbers with you weekly throughout.",
  },
  {
    question: "Who manages our account after launch?",
    answer:
      "A named senior account manager — the same person, not a pooled service desk or a ticket queue. They run the weekly launch cadence, own the monthly performance review afterwards, and are the single point of contact for script changes, coverage adjustments and escalations. This is a deliberate structural choice: on large enterprise providers, programs under a few hundred seats are typically serviced by rotating account teams, and the operational knowledge of your program leaves with each rotation. Keeping one senior owner on every account is a large part of what mid-sized programs are buying from us.",
  },
  {
    question: "How do you report performance?",
    answer:
      "On a fixed schedule, broken out by shift band, against targets written as percentiles rather than averages. A blended daily average is dominated by daytime volume and hides exactly the failures that matter — the slow overnight answer, the Monday-morning queue. You get answer speed, abandonment, resolution and QA scores split by band and day of week, plus access to the underlying call detail records and recordings rather than only our summary of them. Misses are self-reported; you should never discover a bad week from your own customers before you hear it from us.",
  },
  {
    question: "What happens if we want to leave?",
    answer:
      "Thirty days' notice, no early-termination fee, no volume true-up — and a defined data-return process: your recordings, transcripts, QA scores and CRM records handed back in usable formats, with a stated retrieval window. We put the exit terms in writing at signature because the industry norm is the opposite, and buyers usually discover what their contract says about data return at the worst possible moment. An engagement that is easy to leave is also the strongest incentive we have to run it well enough that you do not.",
  },
];

export default function Page() {
  return (
    <>
      <Content />
      <SEOContentSection sections={seoSections} />
      <PageFAQ heading="Working With Us: Frequently Asked Questions" faqs={faqs} />
    </>
  );
}
