import type { Metadata } from "next";
import { CaseStudiesContent } from "./CaseStudiesContent";
import { SEOContentSection, type SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Call Center Outsourcing Case Studies | Contact Center USA",
  description:
    "Explore call center outsourcing case studies and examples of customer support, sales, technical support, and BPO programs.",
  alternates: { canonical: "/case-studies" },
};


const seoSections: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Reading these honestly",
    heading: "How to read any outsourcing case study",
    accent: "any outsourcing case study",
    body: [
      "Case studies are marketing documents, including these. The useful ones tell you the starting position, the constraint that made the problem hard, and what was traded away to fix it. The useless ones report a percentage with no baseline.",
      "When you read ours or anyone else's, ask three questions: what was the number before, over what period was the improvement measured, and what did it cost to achieve. A 34% improvement on a denial rate that started at 3% is a different story from one that started at 30%.",
    ],
  },
  {
    pattern: "flow",
    eyebrow: "What these have in common",
    heading: "The pattern behind every result on this page",
    intro:
      "Five different industries, five different problems. The sequence that produced the result was the same each time.",
    steps: [
      { title: "Find the real constraint", body: "In every case the presenting complaint was not the actual bottleneck. Long hold times were a scheduling problem; churn was an onboarding problem; claim denials were a data-capture problem." },
      { title: "Staff to the demand curve", body: "Volume is never flat. Matching agent capacity to the hour-by-hour curve, rather than to a daily average, is where most of the measurable gain comes from." },
      { title: "Write into the system of record", body: "Every program above writes live into the client's own platform. Work that ends in an email to be re-keyed later loses most of its value." },
      { title: "Measure against their scorecard", body: "Quality was scored on criteria the client defined and calibrated with us, not on a generic template that flatters the vendor." },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "What the numbers translate to",
    heading: "The metrics in these studies, and what moves them",
    image: "/images/cc-agent-writing.jpg",
    imagePosition: "right",
    body: [
      "Every result on this page reduces to one of four levers, and knowing which lever a provider pulled tells you whether the result transfers to your situation. Answer speed and abandonment move when staffing is matched to the hour-by-hour demand curve instead of a daily average — the cheapest gain available and the most common one. First-contact resolution moves when agents get system access and product depth, which costs training time. Conversion and booking rates move when agents can complete the transaction live rather than take a message. And cost per contact moves when the pricing model is matched to the call pattern.",
      "When you evaluate any provider — us included — ask which lever produced the headline number, and whether that lever exists in your program. A retention gain built on live calendar booking will not transfer to a program that only takes messages; an abandonment fix built on staffing-curve alignment transfers to almost anything.",
    ],
    bullets: [
      "Staffing-to-curve alignment: the most transferable gain, and usually the first one taken",
      "System access and training depth: what first-contact resolution actually costs",
      "Live transaction completion: the lever behind every booking and conversion result",
      "Pricing-model fit: per-minute, per-call or dedicated, matched to your call length",
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesContent />
      <SEOContentSection sections={seoSections} />
    </>
  );
}
