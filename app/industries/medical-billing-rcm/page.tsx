import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Medical Billing & RCM Support | Patient Balance Calls",
  description:
    "US-based revenue cycle support for providers and billing companies. Patient balance calls, insurance follow-up, denial management, and prior authorization. Get a quote.",
  keywords: [
    "medical billing call center",
    "revenue cycle management outsourcing",
    "rcm bpo services",
    "patient balance calls",
    "insurance follow up outsourcing",
    "denial management support",
    "prior authorization outsourcing",
    "medical ar recovery",
    "patient collections healthcare",
    "healthcare billing support",
  ],
  alternates: { canonical: "/industries/medical-billing-rcm" },
};

const features = [
  {
    title: "Patient Balance & Statement Calls",
    desc: "Outbound and inbound coverage on patient responsibility balances, handled with the tone a medical bill requires — explaining the charge clearly, answering coverage questions, and setting up payment arrangements rather than pressuring.",
  },
  {
    title: "Insurance Follow-Up & AR Recovery",
    desc: "Systematic payer follow-up on unpaid and underpaid claims, working aged AR by bucket with documented call notes, reference numbers, and next actions on every touch.",
  },
  {
    title: "Denial Management & Appeals Support",
    desc: "Denials worked by reason code, with corrected claims resubmitted and appeal packets assembled to payer requirements — the follow-through that in-house teams rarely have capacity to complete.",
  },
  {
    title: "Prior Authorization & Eligibility",
    desc: "Benefit verification and prior authorization requests submitted and chased to determination, so procedures are not cancelled at the last minute and claims are not denied for authorization that was never obtained.",
  },
  {
    title: "Payment Plan Administration",
    desc: "Structured payment arrangements set up within your policy limits, monitored for missed payments, and recovered with follow-up calls before the balance drops out of the plan entirely.",
  },
  {
    title: "Bilingual Patient Financial Support",
    desc: "Native Spanish-speaking agents handle balance and financial assistance conversations directly, which materially improves both collection rates and patient experience on a genuinely difficult call.",
  },
];

const benefits = [
  "100% US-based agents",
  "HIPAA-aware handling with signed BAAs",
  "Epic, Athenahealth, eCW & NextGen integration",
  "Payer follow-up documented on every touch",
  "Denial work by reason code with appeal support",
  "Bilingual English/Spanish patient financial calls",
];

const stats = [
  { value: 100, suffix: "%", label: "US-Based Agents" },
  { value: 100, suffix: "%", label: "Calls Documented in Your System" },
  { value: 5, suffix: "+ systems", label: "EHR & Billing Platform Integrations" },
  { value: 2, suffix: " languages", label: "English and Spanish Patient Support" },
];

const faqs = [
  {
    question: "Are you HIPAA compliant?",
    answer:
      "We operate under signed Business Associate Agreements, restrict PHI access by role, work in access-controlled environments, and record and retain calls according to your policy. Agents assigned to healthcare accounts complete HIPAA training before touching any account. We adopt your security and privacy requirements rather than asking you to accept a generic standard.",
  },
  {
    question: "Do you work inside our EHR and billing system?",
    answer:
      "Yes. Agents are provisioned in Epic, Athenahealth, eClinicalWorks, NextGen, AdvancedMD, Kareo, or your billing platform with role-appropriate permissions. Every call is documented in the system of record with reference numbers and next actions, so your team never has to reconstruct what happened from a spreadsheet.",
  },
  {
    question: "How do you handle patient balance calls?",
    answer:
      "Carefully. A medical balance call is different from any other collections conversation — the patient is often confused about what insurance covered, may be dealing with an ongoing condition, and frequently received a bill they did not expect. Agents explain the charge and the coverage clearly, offer payment arrangements within your policy, and identify patients who should be routed to financial assistance rather than pressed for payment.",
  },
  {
    question: "Can you work denials and appeals?",
    answer:
      "Yes. We work denials by reason code, correct and resubmit where the fix is administrative, and assemble appeal packets to each payer's specific requirements. Denial work is where a great deal of recoverable revenue is lost, not because the appeals would fail but because nobody has capacity to file them inside the deadline.",
  },
  {
    question: "Do you handle prior authorizations?",
    answer:
      "Yes. Prior authorization is hold-heavy, deadline-driven work that consumes clinical staff time and causes real harm when it slips — cancelled procedures and denials for authorization that was never obtained. We submit and chase requests to determination, escalating anything that stalls, and document approvals and reference numbers in your system.",
  },
  {
    question: "Do you work with billing companies as well as providers?",
    answer:
      "Yes. Billing companies use us as overflow and scale capacity, particularly for payer follow-up and patient balance calling on client portfolios during onboarding surges or backlogs. We work under your brand and your client-facing standards, with reporting structured by client so your account managers can report through unchanged.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Medical Billing & Revenue Cycle Support",
    heading: "Most uncollected revenue was never denied. It was never followed up.",
    accent: "never followed up",
    body: [
      "Contact Center USA provides US-based revenue cycle support for providers, health systems, and billing companies — patient balance calls, payer follow-up, denial work, and prior authorization chase.",
      "Aged AR rarely represents claims that could not be paid. It represents claims nobody had time to call about, denials nobody appealed inside the window, and patient balances that went to a statement cycle and then to write-off.",
    ],
    stats: [
      { stat: "100%", label: "US-based agents under signed Business Associate Agreements" },
      { stat: "5+", label: "EHR and billing platforms supported, including Epic and Athena" },
      { stat: "2", label: "Languages for patient financial conversations" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Billing Team vs. Outsourced RCM Support",
    intro:
      "In-house billing teams are almost always sized for claim submission, not for follow-up. Submission is deadline-driven and visible; follow-up is neither, so it is the work that quietly does not happen.",
    leftTitle: "In-House Billing Team Only",
    rightTitle: "Contact Center USA",
    rows: [
      {
        label: "Payer Follow-Up",
        left: "Aged claims sit because staff are consumed by current submissions.",
        right: "AR worked systematically by aging bucket with documented touches.",
        leftYes: false,
      },
      {
        label: "Denial Appeals",
        left: "Appeals missed inside payer deadlines and written off by default.",
        right: "Denials worked by reason code with appeal packets filed on time.",
        leftYes: false,
      },
      {
        label: "Patient Balances",
        left: "Statement cycles run automatically; almost nobody calls.",
        right: "Live conversations explaining the balance and setting arrangements.",
        leftYes: false,
      },
      {
        label: "Prior Authorization",
        left: "Clinical staff on hold with payers instead of with patients.",
        right: "Submitted and chased to determination, documented in your system.",
        leftYes: false,
      },
      {
        label: "Coverage Gaps",
        left: "One biller on leave and follow-up stops entirely for two weeks.",
        right: "Capacity independent of any single person's schedule.",
        leftYes: false,
      },
      {
        label: "Bilingual Patients",
        left: "Financial conversations attempted through a translation line, or not at all.",
        right: "Native Spanish-speaking agents handling the conversation directly.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "From Aged Claim to Posted Payment",
    intro:
      "Every RCM engagement starts with your compliance requirements and your system of record, then targets the specific buckets where recoverable revenue is sitting.",
    steps: [
      {
        title: "BAA & Compliance Setup",
        body: "Business Associate Agreements executed, PHI access scoped by role, and retention policy configured.",
      },
      {
        title: "System Provisioning",
        body: "Agents provisioned in your EHR and billing platform with permissions limited to their function.",
      },
      {
        title: "AR & Denial Analysis",
        body: "We analyze aging and denial reason codes to target the buckets with the most recoverable value.",
      },
      {
        title: "Work the Queues",
        body: "Payer follow-up, denial appeals, and patient balance calls worked to a documented cadence.",
      },
      {
        title: "Report & Refine",
        body: "Reporting on recovery by bucket, denial overturn rate, and patient arrangement performance.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Who We Support",
    heading: "Across Providers, Systems, and Billing Companies",
    intro:
      "A specialty practice and a hospital system have very different denial profiles and payer mixes, so queues are built per client rather than blended.",
    items: [
      {
        icon: "stethoscope",
        stat: "Practice",
        title: "Physician Practices",
        body: "Patient balances, payer follow-up, and prior authorization for independent and group practices.",
      },
      {
        icon: "heart-pulse",
        stat: "Health",
        title: "Hospitals & Health Systems",
        body: "High-volume AR recovery, complex denial work, and patient financial services support.",
      },
      {
        icon: "briefcase",
        stat: "RCM",
        title: "Billing Companies",
        body: "Overflow and scale capacity worked under your brand with per-client reporting.",
      },
      {
        icon: "building",
        stat: "Post-Acute",
        title: "Post-Acute & Ancillary",
        body: "DME, home health, imaging, and lab billing with their own authorization requirements.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Follow-Up Is the Work That Belongs Outside",
    image: "/images/cc-agent-writing.jpg",
    imagePosition: "right",
    body: [
      "Nothing about this outsources coding judgment or clinical documentation. What moves outside is the volume follow-through: sitting on hold with a payer, calling a patient about a balance they do not understand, and filing the appeal that has a deadline nobody is tracking.",
      "Contact Center USA staffs domestic agents under signed BAAs, working inside your EHR, documenting every touch with reference numbers and next actions. Your billing team keeps the judgment calls and gets back the hours currently spent on hold.",
    ],
    bullets: [
      "US-based agents under signed Business Associate Agreements",
      "Every payer touch documented with reference number and next action",
      "Denials worked by reason code with appeals filed inside deadline",
      "Patient balance calls handled with appropriate tone and routing to assistance",
      "Prior authorization chased to determination, not just submitted",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Find out what is sitting in your aged AR.",
    accent: "sitting in your aged AR",
    body: "Send us your aging summary and top denial reason codes. We will identify the buckets with the most recoverable value and scope a follow-up program around them.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Healthcare Call Center Services",
    desc: "Patient-facing scheduling, verification, and support alongside the revenue cycle work.",
    href: "/industries/healthcare-call-center-services",
  },
  {
    title: "Debt Collection Call Center",
    desc: "Later-stage patient balance recovery under FDCPA and Regulation F aware handling.",
    href: "/industries/debt-collection-call-center",
  },
  {
    title: "Back Office Outsourcing",
    desc: "Payment posting, reconciliation, and claims administration behind the calls.",
    href: "/solutions/back-office-outsourcing",
  },
];

export default function MedicalBillingRcmPage() {
  return (
    <ServicePageTemplate
      badge="Medical Billing & RCM"
      title="Revenue Cycle Support for Healthcare Providers"
      titleHighlight="Healthcare Providers"
      subtitle="Providers, health systems, and billing companies use our US-based agents to work aged AR, appeal denials inside the deadline, chase prior authorizations, and call patients about balances."
      description="Most uncollected healthcare revenue was never denied — it was never followed up, because in-house billing teams are sized for submission rather than pursuit. We work payer follow-up by aging bucket, appeal denials by reason code before the window closes, chase prior authorizations to determination, and handle patient balance conversations with the tone a medical bill requires. All under signed BAAs, documented in your own system."
      features={features}
      benefits={benefits}
      image="/images/cc-agent-desk.jpg"
      stats={stats}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
