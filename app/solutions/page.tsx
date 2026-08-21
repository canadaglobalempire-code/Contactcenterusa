import type { Metadata } from "next";
import SolutionsContent from "./SolutionsContent";
import { SEOContentSection, type SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Call Center Solutions | Contact Center USA",
  description:
    "Call Center Solutions from Contact Center USA. Learn services, coverage, industries, and quote options for US-based outsourcing.",
  alternates: { canonical: "/solutions" },
};


const seoSections: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Solutions vs services",
    heading: "A service is a capability. A solution is a staffed outcome.",
    accent: "a staffed outcome",
    body: [
      "The distinction matters when you are reading proposals. A service is a thing agents can do — answer inbound calls, run outbound campaigns, moderate content. A solution is that capability wrapped in the staffing model, coverage hours, escalation rules, QA scorecard and reporting that make it survive contact with real volume.",
      "Buying a service and assuming the rest is included is the most common way an outsourcing program disappoints. Everything on this page is scoped as a solution: what gets done, who does it, when they are available, and how it is measured.",
    ],
  },
  {
    pattern: "flow",
    eyebrow: "Choosing a model",
    heading: "Dedicated, shared or blended",
    intro:
      "Almost every pricing conversation comes down to which of these three you need. Getting it wrong is expensive in both directions.",
    steps: [
      { title: "Dedicated agents", body: "Assigned only to you, trained deeply on your product and tone. Right for complex, regulated or brand-sensitive work. Highest cost per hour, lowest cost per resolved contact on hard calls." },
      { title: "Shared agents", body: "Trained across several similar accounts. Right for straightforward, script-driven volume and for businesses whose call counts cannot justify a dedicated head. Lowest hourly cost." },
      { title: "Blended", body: "A dedicated core for the complex work with shared capacity absorbing overflow and seasonal peaks. Most mid-market programs land here once volumes are understood." },
      { title: "Overflow only", body: "Your own team handles normal hours; we take the spill, the nights and the surges. The cheapest way to stop abandoning calls without restructuring anything." },
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <SolutionsContent />
      <SEOContentSection sections={seoSections} />
    </>
  );
}
