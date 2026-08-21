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
];

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesContent />
      <SEOContentSection sections={seoSections} />
    </>
  );
}
