import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Insurance BPO Services | Insurance Call Center Outsourcing USA | Contact Center USA",
  description:
    "One of the best insurance BPO services and insurance customer service BPO USA providers. Licensed insurance call center outsourcing for P&C, life, health, Medicare, and commercial lines.",
  keywords: [
    "insurance bpo services",
    "insurance call center outsourcing",
    "insurance customer service bpo usa",
    "licensed insurance call center",
    "medicare call center",
    "claims processing bpo",
    "open enrollment call center",
    "insurance policyholder support",
  ],
  alternates: { canonical: "/industries/insurance-call-center-outsourcing" },
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
  name: "P.G.",
  title: "Director of Operations",
  company: "A National Insurance Carrier",
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

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Insurance BPO in USA",
    heading: "The insurance call center outsourcing partner carriers rely on when licensing, compliance, and CSAT all have to land at once.",
    accent: "all have to land at once",
    body: [
      "Contact Center USA is one of the best insurance BPO services providers in the USA — a 100% US-based, licensed insurance customer service BPO USA operation trusted by P&C carriers, life and health insurers, Medicare Advantage plans, and commercial specialty lines.",
      "For carriers evaluating insurance call center outsourcing, the decision comes down to licensed headcount, surge capacity during open enrollment and catastrophe events, and a compliance program that survives state DOI and CMS scrutiny. We deliver on all three.",
    ],
    stats: [
      { stat: "50 States", label: "Licensed P&C, life, and health agents across every jurisdiction we serve" },
      { stat: "5x Surge", label: "Open enrollment and CAT event scale without hiring cycles or service degradation" },
      { stat: "CMS-Ready", label: "Medicare and ACA marketing and enrollment compliance audited annually" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Insurance Operations vs. Contact Center USA BPO",
    intro:
      "Every carrier weighs the same decision: maintain internal licensed capacity and absorb seasonal swings, or partner with a specialized insurance BPO. Here's how the two compare on the factors that drive loss ratio and policyholder retention.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Producer Licensing Coverage",
        left: "Licensed staff concentrated in domicile states; multi-state campaigns require contractor networks.",
        right: "P&C, life, and health producer licenses maintained in every state where you write business.",
        leftYes: false,
      },
      {
        label: "Open Enrollment Surge Capacity",
        left: "Hiring cycles of 60-90 days; AEP and OEP spikes overwhelm fixed staffing.",
        right: "Pre-licensed, pre-certified bench scales 3-5x for AEP, OEP, and SEP without degradation.",
        leftYes: false,
      },
      {
        label: "CMS Marketing & Compliance",
        left: "Internal compliance often lags CMS marketing guideline changes, triggering re-training cycles.",
        right: "Dedicated CMS compliance team with weekly regulatory scans and pre-approved scripts.",
        leftYes: false,
      },
      {
        label: "FNOL & Claims Intake Speed",
        left: "Queue times extend during CAT events — policyholder anxiety drives escalations and complaints.",
        right: "24/7 FNOL intake with CAT playbooks, licensed adjuster coordination, and SLA-backed response.",
        leftYes: false,
      },
      {
        label: "Carrier Platform Fluency",
        left: "Training concentrated on your core admin system; talent movement limited.",
        right: "Active experience on Guidewire, Duck Creek, Applied Epic, Vertafore, and Salesforce Financial Services Cloud.",
        leftYes: false,
      },
      {
        label: "Retention & Save Programs",
        left: "Retention outreach deprioritized during volume spikes; lapse rates rise each renewal cycle.",
        right: "Dedicated retention queue with save authority scripts that protect written premium.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Insurance BPO Onboarding Process",
    intro:
      "Every carrier, MGA, and broker we support flows through the same structured five-stage workflow — engineered to get licensed agents in production without tripping DOI, TCPA, or CMS obligations.",
    steps: [
      {
        title: "Licensing & Appointment",
        body: "State licensing verification, carrier appointments, and E&O coverage confirmed before training.",
      },
      {
        title: "Carrier System Integration",
        body: "Secure connections to Guidewire, Duck Creek, Applied Epic, Vertafore, and custom policy admin systems.",
      },
      {
        title: "Product & Script Buildout",
        body: "Line-specific training, CMS-approved scripts, claims playbooks, and TCPA-compliant dialer rules.",
      },
      {
        title: "QA Certification",
        body: "Line-specific certification, shadow calls, and call calibration with your compliance team.",
      },
      {
        title: "Go-Live & Surge Planning",
        body: "Staged production launch with AEP/OEP and CAT event surge plans ready from day one.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Sub-Segments",
    heading: "Insurance Sub-Segments We Serve",
    intro:
      "Insurance is a portfolio of distinct regulated markets. Our licensed insurance BPO services are tuned to the unique workflows, compliance overlays, and customer dynamics of each line.",
    items: [
      {
        icon: "shield",
        stat: "P&C",
        title: "Property & Casualty",
        body: "Auto, home, renters, umbrella, and small commercial policy service plus 24/7 FNOL intake and CAT surge support.",
      },
      {
        icon: "heart-pulse",
        stat: "Health",
        title: "Health, Medicare & ACA",
        body: "CMS-compliant Medicare Advantage, Medigap, and ACA marketplace enrollment and member services.",
      },
      {
        icon: "landmark",
        stat: "Life",
        title: "Life & Annuities",
        body: "Licensed life producer support for quote-to-issue, policy servicing, and beneficiary assistance programs.",
      },
      {
        icon: "briefcase",
        stat: "Commercial",
        title: "Commercial & Specialty",
        body: "Workers' comp, commercial auto, BOP, and specialty line servicing with agency channel coordination.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Carriers Choose Contact Center USA for Insurance Customer Service BPO",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Offshore insurance operations struggle with US licensing requirements, state-by-state regulatory divergence, and CMS marketing guideline enforcement. Generic domestic call centers treat insurance like any other vertical — missing the licensed-producer staffing depth and carrier platform fluency the work actually requires.",
      "Contact Center USA is different: a 100% US-based insurance customer service BPO USA operation with active producer licenses in every state we serve, carrier platform experience across the major admin systems, and CMS compliance practices audited annually.",
    ],
    bullets: [
      "100% US-based licensed agents — P&C, life, and health across 50 states",
      "CMS, TCPA, and state DOI compliance programs audited annually",
      "Active experience on Guidewire, Duck Creek, Applied Epic, Vertafore, and SFFS Cloud",
      "24/7 FNOL intake with CAT event surge playbooks and licensed adjuster coordination",
      "AEP, OEP, and SEP surge capacity of 3-5x baseline without hiring cycles",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to evaluate a better insurance BPO partner?",
    accent: "better insurance BPO",
    body: "Whether you're a P&C carrier facing CAT season, a Medicare plan preparing for AEP, a life insurer scaling licensed capacity, or a commercial specialty writer expanding distribution — we can show you the licensing, compliance, and CSAT impact before you commit. Request a free consultation and we'll walk through licensing coverage, carrier platform fit, and surge planning.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
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
      seoContent={seoContent}
    />
  );
}
