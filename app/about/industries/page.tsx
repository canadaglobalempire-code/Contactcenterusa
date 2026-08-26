import type { Metadata } from "next";
import Content from "./Content";
import { SEOContentSection, type SEOPattern } from "@/components/shared/SEOContentSection";
import { PageFAQ } from "@/components/shared/PageFAQ";

export const metadata: Metadata = {
  title: "Our Industry Experience | Contact Center USA",
  description:
    "Where our 25+ years of US-based contact center experience runs deepest — the sectors we staff, the compliance each demands, and the teams behind them.",
  alternates: { canonical: "/about/industries" },
};

const seoSections: SEOPattern[] = [
  {
    pattern: "split-image",
    eyebrow: "Why vertical depth matters",
    heading: "Industry experience is compliance knowledge plus vocabulary, and neither can be faked",
    image: "/images/cc-support-team.jpg",
    imagePosition: "right",
    body: [
      "A generic agent can take any call. What they cannot do is know that a caller describing repeated breaker trips with heat at the panel is reporting a fire risk, that a first notice of loss taken incompletely creates a claim that gets reworked for months, or that confirming a family member is a patient is itself a HIPAA disclosure. Vertical experience is the accumulation of exactly those judgements — the ones a script cannot anticipate — and it is the difference between a call that was answered and a call that was handled.",
      "Each sector also carries its own regulatory floor, and the floor is where programs fail audits. Healthcare work needs a business associate agreement, role-based access to patient information and per-agent training records. Payment-touching work needs pause-and-resume recording and masked card data. Financial servicing needs examination-grade retrieval and logged data access. Outbound anything needs TCPA consent evidence. We staff each vertical with agents trained to its floor before they take a live call, because retrofitting compliance onto a running program is how findings happen.",
    ],
    bullets: [
      "Healthcare: HIPAA BAAs, minimum-necessary access, documented per-agent training",
      "Insurance: accuracy-weighted FNOL capture and claims-grade retention",
      "Trades and home services: emergency triage scripts and dispatch-board integration",
      "Financial services: retrievable recordings, documented QA and logged data access",
      "Ecommerce and SaaS: order-system and ticketing integration with real escalation paths",
    ],
  },
];

const faqs = [
  {
    question: "Which industries does Contact Center USA serve most?",
    answer:
      "The deepest benches are in healthcare patient access and scheduling, insurance intake and policyholder servicing, home services and trades dispatch, financial services support, and ecommerce and SaaS customer care — with legal intake, property management and hospitality alongside. The pattern across all of them is the same: sectors where calls carry either regulatory weight or genuine urgency, which is where a trained vertical team outperforms a generic pool by the widest margin. Each vertical's page details the specific programs, integrations and compliance controls that sector gets.",
  },
  {
    question: "How are agents trained for a specific industry?",
    answer:
      "In three layers. General service training covers systems, tone and call mechanics. Vertical training covers the sector's vocabulary, its call types and its failure modes — what an escalation looks like in a plumbing emergency versus a patient scheduling queue. Program training covers your business specifically: your products, your escalation tree, your booking rules, your edge cases. For regulated sectors a compliance module sits on top — HIPAA for healthcare, PCI handling for payment work, TCPA discipline for outbound — completed and documented per agent before the first live call, with records producible on request.",
  },
  {
    question: "Can you handle a business that spans multiple industries?",
    answer:
      "Yes, and the configuration matters more than the capability. A property management firm with a medical office building, or a franchise group spanning restaurants and fitness studios, needs separate call flows with separate escalation trees on one account — not one blended script that serves neither caller well. We run distinct flows per line of business with shared reporting, so a tenant emergency, a patient enquiry and a membership question each get handled to their own sector's standard while you see one consolidated view of the program.",
  },
];

export default function Page() {
  return (
    <>
      <Content />
      <SEOContentSection sections={seoSections} />
      <PageFAQ heading="Industry Experience: Frequently Asked Questions" faqs={faqs} />
    </>
  );
}
