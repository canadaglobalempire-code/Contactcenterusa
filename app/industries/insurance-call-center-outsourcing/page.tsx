import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Insurance Call Center Services | Claims & Enrollment Support | Contact Center USA",
  description:
    "Insurance call center services for claims processing, open enrollment, policy inquiries, and regulatory compliance. Licensed agents ready to support your policyholders.",
};

const features = [
  {
    title: "Claims Intake & Processing",
    desc: "First notice of loss intake, claims status updates, and documentation collection handled by agents trained in insurance workflows — accelerating settlements and improving claimant satisfaction.",
  },
  {
    title: "Open Enrollment Support",
    desc: "Scalable seasonal support for ACA, Medicare, and employer-sponsored enrollment periods with agents who guide callers through plan comparisons, eligibility, and enrollment completion.",
  },
  {
    title: "Policy Inquiry & Servicing",
    desc: "Knowledgeable agents who explain coverage details, process endorsements, handle premium payments, and assist with policy changes — reducing the burden on your underwriting and service teams.",
  },
  {
    title: "Regulatory Compliance Management",
    desc: "Full compliance with state insurance regulations, TCPA, CMS guidelines, and industry-specific requirements with documented processes, recorded calls, and regular compliance audits.",
  },
  {
    title: "New Business & Quote Support",
    desc: "Licensed agents who gather application information, provide preliminary quotes, and guide prospects through the buying process to increase conversion rates on inbound leads.",
  },
  {
    title: "Policyholder Retention Programs",
    desc: "Proactive outreach to at-risk policyholders with save offers, coverage reviews, and renewal reminders that reduce lapse rates and improve lifetime customer value.",
  },
];

const benefits = [
  "Licensed insurance support agents",
  "Claims processing expertise",
  "Open enrollment surge capacity",
  "HIPAA & CMS compliant",
  "Multi-carrier platform experience",
  "Policyholder retention programs",
];

const stats = [
  { value: 95, suffix: "%", label: "Claims First-Call Resolution" },
  { value: 40, suffix: "%", label: "Faster Claims Processing" },
  { value: 800, suffix: "K+", label: "Policies Serviced" },
  { value: 30, suffix: "%", label: "Improvement in Retention" },
];

const testimonial = {
  quote:
    "During our busiest enrollment season ever, Contact Center USA handled a 300% increase in call volume without missing a beat. Their insurance knowledge is impressive and compliance is always on point.",
  name: "Patricia Gomez",
  title: "Director of Operations",
  company: "National Shield Insurance",
  initials: "PG",
};

const faqs = [
  {
    question: "Are your agents licensed to discuss insurance products?",
    answer:
      "Yes, we maintain a team of agents with active insurance licenses for property & casualty, life, and health lines. All licensing is kept current, and agents operate under supervision to ensure full regulatory compliance in every state we serve.",
  },
  {
    question: "How do you handle high-volume enrollment periods?",
    answer:
      "We begin scaling up 6-8 weeks before open enrollment with additional licensed agents, extended training on your specific plans, and overflow capacity planning. Our infrastructure handles call volume spikes of up to 5x normal levels seamlessly.",
  },
  {
    question: "Can you process first notice of loss claims?",
    answer:
      "Absolutely. Our agents are trained to collect all required FNOL information, document the incident thoroughly, set expectations for the claims process, and route the claim to the appropriate adjuster or team based on your specific workflows.",
  },
  {
    question: "What insurance platforms do you work with?",
    answer:
      "We work with major insurance platforms including Guidewire, Duck Creek, Applied Epic, Vertafore, and custom-built systems. Our IT team handles integration setup so agents have direct access to policy and claims data during calls.",
  },
  {
    question: "How do you maintain compliance with insurance regulations?",
    answer:
      "We employ a dedicated compliance team that monitors regulatory changes, updates scripts and procedures, conducts regular agent training, and performs call audits. All interactions are recorded and stored per state-specific retention requirements.",
  },
];

const relatedServices = [
  {
    title: "Inbound Call Center",
    desc: "Professional inbound support for policy inquiries and claims reporting.",
    href: "/services/inbound",
  },
  {
    title: "Outbound Campaigns",
    desc: "Compliant outbound calling for renewals, retention, and enrollment outreach.",
    href: "/services/outbound",
  },
  {
    title: "After-Hours Support",
    desc: "24/7 claims reporting and emergency support for policyholders.",
    href: "/services/after-hours",
  },
];

export default function InsurancePage() {
  return (
    <ServicePageTemplate
      badge="Insurance Call Center Services"
      title="Call Center Solutions for the Insurance Industry"
      titleHighlight="Insurance Industry"
      subtitle="Licensed agents, claims expertise, and enrollment surge capacity — everything your insurance organization needs to deliver outstanding policyholder experiences."
      description="Insurance customers need clear answers, fast claims processing, and a human touch during stressful moments. Our licensed agents combine deep insurance knowledge with genuine empathy to handle claims intake, policy servicing, enrollment support, and retention outreach. We understand the regulatory landscape and build compliance into every interaction."
      features={features}
      benefits={benefits}
      image="/images/hd-agents-pair.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
