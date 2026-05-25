import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Banking Financial Services Call Center | Contact Center USA",
  description:
    "US-based banking financial services call center support for customer care, inbound calls, outbound outreach, and back office workflows. Request an outsourcing quote.",
  keywords: [
    "banking bpo services",
    "financial services call center",
    "banking call center outsourcing usa",
    "credit union call center",
    "mortgage call center services",
    "fintech customer service outsourcing",
    "bank customer support bpo",
    "digital banking support",
  ],
  alternates: { canonical: "/industries/banking-financial-services-call-center" },
};

const features = [
  {
    title: "Account Support & Servicing",
    desc: "Comprehensive account management including balance inquiries, transaction disputes, account maintenance, and card services — delivered by agents trained in banking operations and customer-first service.",
  },
  {
    title: "Loan Processing & Origination",
    desc: "End-to-end loan support from application intake and document collection to status updates and closing coordination for mortgage, auto, personal, and commercial loans.",
  },
  {
    title: "Digital Banking Assistance",
    desc: "Technical support for online banking, mobile apps, digital wallets, and Zelle/P2P transfers — helping customers navigate digital channels with confidence and reducing branch traffic.",
  },
  {
    title: "Regulatory Compliance & BSA/AML",
    desc: "Agents trained in BSA/AML requirements, Reg E dispute handling, TILA disclosures, and state banking regulations with documented compliance procedures and audit-ready record-keeping.",
  },
  {
    title: "Fraud Prevention & Resolution",
    desc: "Multi-layered fraud response including suspicious activity alerts, card blocking, identity verification, dispute investigation, and provisional credit processing to protect account holders.",
  },
  {
    title: "New Account Opening",
    desc: "Guided new account opening for checking, savings, CDs, and money market accounts with cross-sell recommendations, identity verification, and welcome onboarding to build relationships from day one.",
  },
];

const benefits = [
  "PCI DSS & SOC 2 certified",
  "BSA/AML trained agents",
  "Core banking system integrations",
  "Reg E dispute processing",
  "Digital banking tech support",
  "New account opening support",
];

const stats = [
  { value: 98, suffix: "%", label: "Customer Satisfaction Score" },
  { value: 35, suffix: "%", label: "Reduction in Branch Calls" },
  { value: 2, suffix: "M+", label: "Banking Calls Handled" },
  { value: 100, suffix: "%", label: "Regulatory Compliance" },
];

const testimonial = {
  quote:
    "Contact Center USA reduced our branch call volume by 35% while maintaining a 98% satisfaction score. Their agents handle everything from mobile banking support to complex loan inquiries with professionalism.",
  name: "J.W.",
  title: "EVP of Retail Banking",
  company: "A Regional Community Bank",
  initials: "JW",
};

const faqs = [
  {
    question: "Do your agents have experience with core banking systems?",
    answer:
      "Yes, our agents are trained on major core banking platforms including FIS, Fiserv, Jack Henry, Temenos, and nCino. They navigate these systems daily to access account data, process transactions, and update customer records in real time.",
  },
  {
    question: "How do you ensure compliance with banking regulations?",
    answer:
      "We maintain a dedicated banking compliance team that oversees agent training on BSA/AML, Reg E, TILA, UDAAP, and state-specific regulations. All calls are recorded, quality-monitored, and subject to regular internal and external compliance audits.",
  },
  {
    question: "Can you handle Reg E disputes and fraud claims?",
    answer:
      "Absolutely. Our agents are trained in the full Reg E dispute lifecycle — from initial intake and provisional credit within required timelines to investigation support and final resolution communication. We ensure every dispute meets regulatory deadlines.",
  },
  {
    question: "Do you support digital banking and mobile app inquiries?",
    answer:
      "Yes, we provide dedicated digital banking support teams who help customers with online banking enrollment, mobile app troubleshooting, password resets, Zelle setup, mobile deposit issues, and digital wallet configuration across all major platforms.",
  },
  {
    question: "Can you support both banks and credit unions?",
    answer:
      "We serve both banks and credit unions with tailored programs that reflect the unique culture and member-focused approach of each institution. Our agents understand the differences and adapt their communication style to align with your brand values.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Banking BPO in USA",
    heading: "The banking call center outsourcing USA partner that holds the same compliance bar your regulators do.",
    accent: "regulators do",
    body: [
      "Contact Center USA is one of the best banking BPO services providers in the USA — a 100% US-based, PCI DSS Level 1 and SOC 2 Type II certified financial services call center trusted by community banks, regional banks, credit unions, mortgage lenders, and fintech platforms.",
      "When institutions evaluate banking call center outsourcing USA options, they want one partner that can handle account servicing, Reg E disputes, digital banking support, loan origination assistance, and retention outreach without hiding behind offshore subcontractors. That's what we deliver.",
    ],
    stats: [
      { stat: "PCI L1", label: "Level 1 PCI DSS certified plus SOC 2 Type II across all facilities" },
      { stat: "35%", label: "Average reduction in branch call volume after migrating to our program" },
      { stat: "100%", label: "Core banking platform fluency — FIS, Fiserv, Jack Henry, nCino, Temenos" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Banking Operations vs. Contact Center USA BPO",
    intro:
      "Every bank and credit union weighs the same decision: expand branch and call center headcount internally, or outsource to a specialized banking BPO. Here's how the two compare on the factors examiners and CFOs actually care about.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "BSA/AML & Reg E Training",
        left: "Annual refresher with inconsistent documentation; examiner pushback is common.",
        right: "Mandatory certification on BSA/AML, Reg E, TILA, UDAAP before first live call; quarterly refreshers.",
        leftYes: false,
      },
      {
        label: "PCI DSS & SOC 2 Posture",
        left: "In-house call centers rarely hold independent PCI Level 1 attestation.",
        right: "PCI DSS Level 1 and SOC 2 Type II certified with DTMF masking on card capture.",
        leftYes: false,
      },
      {
        label: "Core Banking System Fluency",
        left: "Training concentrated on whichever core you've implemented; limits M&A flexibility.",
        right: "Active agents on FIS, Fiserv, Jack Henry, nCino, Temenos, and major digital banking platforms.",
        leftYes: false,
      },
      {
        label: "Reg E Dispute Processing SLAs",
        left: "Provisional credit deadlines missed during volume spikes create regulatory exposure.",
        right: "Dispute workflows engineered around Reg E timelines with automated deadline tracking.",
        leftYes: false,
      },
      {
        label: "Digital Banking Support",
        left: "Mobile app, Zelle, and P2P issues bounce between branch, IT, and vendor support.",
        right: "Dedicated digital banking queue handling app troubleshooting, enrollment, and P2P issues.",
        leftYes: false,
      },
      {
        label: "Cost Structure",
        left: "Fixed salaries, benefits, real estate, QA, and compliance overhead regardless of volume.",
        right: "Variable per-interaction or FTE pricing that scales up and down with your volume.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Banking & Financial Services Onboarding Process",
    intro:
      "Every bank, credit union, and fintech partner flows through the same structured five-stage workflow — engineered to satisfy your compliance officer and your customer experience team simultaneously.",
    steps: [
      {
        title: "Due Diligence & Vendor Risk",
        body: "SIG/SSAE review, information security questionnaire, and BSA/AML vendor risk attestation.",
      },
      {
        title: "Core & Digital Integration",
        body: "Secure connections to your core banking platform, digital banking app, and dispute workflow tools.",
      },
      {
        title: "Regulatory Script Development",
        body: "BSA/AML, Reg E, TILA, and UDAAP-compliant scripts and QA rubrics reviewed with your compliance team.",
      },
      {
        title: "Agent Certification",
        body: "Banking-specific training, certification testing, and shadow calls before production traffic.",
      },
      {
        title: "Go-Live & Examiner-Ready Reporting",
        body: "Phased launch with real-time dashboards, 100% call recording, and examiner-ready audit packages.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Sub-Segments",
    heading: "Banking & Financial Sub-Segments We Serve",
    intro:
      "Banking isn't a single market — it spans community institutions, national banks, credit unions, mortgage lenders, and fintech platforms, each with distinct regulatory overlays and customer expectations.",
    items: [
      {
        icon: "landmark",
        stat: "Banks",
        title: "Retail & Community Banks",
        body: "Account servicing, digital banking support, disputes, and new account opening for community and regional banks.",
      },
      {
        icon: "shield",
        stat: "CUs",
        title: "Credit Unions",
        body: "Member-first support models, loan servicing, and digital banking assistance tuned to credit union values.",
      },
      {
        icon: "home",
        stat: "Mortgage",
        title: "Mortgage & Consumer Lending",
        body: "Origination intake, document collection, servicing, and HELOC/auto loan customer support programs.",
      },
      {
        icon: "dollar",
        stat: "Fintech",
        title: "Fintech & Digital-First Banks",
        body: "Scalable customer operations for neobanks, BNPL platforms, and embedded finance providers.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Institutions Choose Contact Center USA for Banking Call Center Outsourcing",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Offshore banking operations frequently fail US customer expectations because of accent friction, inconsistent regulatory training, and examiner pushback on cross-border data flows. Generic domestic call centers lack fluency in core banking platforms and Reg E dispute workflows — every one of those gaps is visible to your customer.",
      "Contact Center USA is different: a 100% US-based financial services call center with PCI Level 1 facilities, active core banking expertise, and a regulatory program built to survive CFPB, FDIC, OCC, and state banking department exams.",
    ],
    bullets: [
      "100% US-based agents from PCI DSS Level 1 and SOC 2 Type II certified sites",
      "Dedicated BSA/AML, Reg E, TILA, and UDAAP training programs",
      "Active experience on FIS, Fiserv, Jack Henry, nCino, Temenos, and custom cores",
      "Digital banking, Zelle, and P2P support queues with app-level troubleshooting",
      "Examiner-ready audit packages with 100% call recording and retention",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to evaluate a better banking BPO partner?",
    accent: "better banking BPO",
    body: "Whether you're a community bank with a single branch, a credit union scaling digital services, a mortgage lender handling refinance spikes, or a fintech launching nationwide — we can show you the cost, compliance, and customer experience impact before you commit. Request a free consultation and we'll walk you through integration scope, regulatory coverage, and go-live timeline.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Inbound Call Center",
    desc: "Professional inbound support for account inquiries and banking services.",
    href: "/solutions/inbound-call-center-services",
  },
  {
    title: "Fraud Prevention",
    desc: "Real-time fraud monitoring, alerts, and resolution for banking customers.",
    href: "/services/fraud-prevention-cyber-security",
  },
  {
    title: "Back-Office Processing",
    desc: "Loan document processing, data verification, and administrative support.",
    href: "/solutions/back-office-outsourcing",
  },
];

export default function BankingPage() {
  return (
    <ServicePageTemplate
      badge="Banking & Financial Services Call Center"
      title="Call Center Solutions for Banking & Financial Services"
      titleHighlight="Banking & Financial Services"
      subtitle="Secure, compliant call center services for account support, loan processing, wealth management, digital banking, and fraud prevention — trusted by banks, credit unions, and financial institutions nationwide."
      description="Banking and financial services customers expect immediate, accurate, and secure support for every interaction. Our agents are trained on core banking platforms, understand regulatory requirements, and deliver the professional service that reflects your institution's reputation. From routine balance inquiries to complex loan processing and wealth management support, we handle the volume so your team can focus on relationship banking."
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
