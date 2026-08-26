import type { Metadata } from "next";
import Content from "./Content";
import { SEOContentSection, type SEOPattern } from "@/components/shared/SEOContentSection";
import { PageFAQ } from "@/components/shared/PageFAQ";

export const metadata: Metadata = {
  title: "Company History | Contact Center USA",
  description:
    "See Contact Center USA's company history, 1999 founding, US-based growth, service milestones, and customer support infrastructure.",
  alternates: { canonical: "/about/company-history" },
};

const seoSections: SEOPattern[] = [
  {
    pattern: "split-image",
    eyebrow: "Why the history matters to a buyer",
    heading: "Twenty-five years in one industry is operational memory, not a marketing line",
    image: "/images/cc-office-wide.jpg",
    imagePosition: "right",
    body: [
      "The practical value of a provider's age is the failure catalog. A contact operation that has run since 1999 has staffed through the 2008 downturn, the shift from voice-only to omnichannel, the compliance tightening that followed HIPAA enforcement and the TCPA litigation wave, and the overnight move to distributed work in 2020. Each of those broke providers who had not seen anything like it — and each one taught survivors exactly where programs fail under stress.",
      "That memory shows up in unglamorous places: surge clauses that anticipate the storm week because we have staffed dozens of them, escalation trees that assume the first on-call contact does not answer, retention settings sized to the audit that eventually comes. New providers write these rules after their first bad experience. The advantage of history is having already had the bad experiences on someone else's smaller, older program — and fixed the playbook before yours.",
    ],
    bullets: [
      "Founded 1999 — operating continuously through every industry shift since",
      "Voice-only to omnichannel: chat, email, SMS and social added as channels matured",
      "Compliance-first posture built through the HIPAA and TCPA enforcement eras",
      "Distributed US delivery model proven at scale since 2020",
    ],
  },
];

const faqs = [
  {
    question: "How long has Contact Center USA been in business?",
    answer:
      "The operation traces to 1999, which means more than twenty-five years of continuous US-based contact center work. That span covers every structural shift the industry has been through — the move from voice-only call centers to omnichannel contact operations, the compliance tightening of the HIPAA and TCPA enforcement eras, and the transition to distributed delivery. The practical benefit to a client is that the operating playbook was written and rewritten through those events rather than assembled from best-practice articles.",
  },
  {
    question: "Has the company always been US-based?",
    answer:
      "Yes — US-based delivery has been the model from the start rather than a positioning adopted later. That continuity matters operationally: recruiting pipelines, training programs, QA frameworks and compliance controls were all built for a domestic workforce from day one, rather than retrofitted onto an offshore delivery structure. It is also why the compliance story is simple to evidence — every agent, workstation and recording has always sat inside one legal jurisdiction.",
  },
  {
    question: "What kinds of programs has the company run over that time?",
    answer:
      "The through-line is US-based inbound and outbound programs for small and mid-sized organizations: customer support, appointment scheduling and answering work, emergency dispatch for trades, healthcare patient access under HIPAA controls, insurance intake, ecommerce order support, and outbound lead follow-up under TCPA discipline. The industry mix has shifted with the economy — more healthcare and home services over time, more technical support as software ate the mid-market — but the shape of the work, resolving calls for businesses too small to staff around the clock themselves, has stayed constant.",
  },
];

export default function Page() {
  return (
    <>
      <Content />
      <SEOContentSection sections={seoSections} />
      <PageFAQ heading="Company History: Frequently Asked Questions" faqs={faqs} />
    </>
  );
}
