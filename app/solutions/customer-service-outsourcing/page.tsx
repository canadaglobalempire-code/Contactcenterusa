import type { Metadata } from "next";
import type { SEOPattern } from "@/components/shared/SEOContentSection";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Customer Service Outsourcing | Contact Center USA",
  description:
    "US-based customer service outsourcing with trained agents, flexible coverage, reporting, and fast onboarding. Request a quote from Contact Center USA.",
  keywords: [
    "customer service outsourcing",
    "customer service bpo usa",
    "outsourced customer service",
    "outsource customer service",
    "customer service outsourcing companies",
    "ecommerce customer service outsourcing",
    "customer support outsourcing services",
    "customer service call center outsourcing",
  ],
  alternates: { canonical: "/solutions/customer-service-outsourcing" },
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Customer Service Outsourcing in USA",
    heading: "The customer service BPO USA brands trust when every interaction matters.",
    accent: "every interaction matters",
    body: [
      "Contact Center USA is one of the best customer service outsourcing providers in the USA — a 100% US-based customer service BPO USA with 500+ trained agents, omnichannel technology, and a 93% average CSAT score across live programs.",
      "For leaders searching for outsourced customer service in the USA that actually feels like their brand, we deliver certified agents, closed-loop QA, and elastic capacity — at 40–60% below the fully loaded cost of an in-house team.",
    ],
    stats: [
      { stat: "93%", label: "Average CSAT score across managed customer-service programs" },
      { stat: "85%", label: "First-call resolution rate across voice and digital channels" },
      { stat: "40–60%", label: "Lower total cost vs. equivalent in-house customer service team" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Team vs. Outsourced Customer Service BPO",
    intro:
      "Every CX leader weighs the same decision: build customer service in-house or partner with a customer service outsourcing BPO. Here's how the two models compare on the metrics that drive retention, cost, and growth.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Startup Timeline",
        left: "3–6 months to hire, train, and certify an in-house support team.",
        right: "Live inside of 2–4 weeks with pre-vetted US-based agent pools.",
        leftYes: false,
      },
      {
        label: "Annual Cost Per Agent",
        left: "$55K–$75K fully loaded including salary, benefits, PTO, tooling, and mgmt overhead.",
        right: "40–60% less on a fully loaded basis; per-minute, per-contact, or FTE pricing options.",
        leftYes: false,
      },
      {
        label: "24/7 Coverage",
        left: "Requires 3 shifts plus overtime and weekend differentials — expensive to maintain.",
        right: "Included as standard with follow-the-sun US-based coverage.",
        leftYes: false,
      },
      {
        label: "Quality Monitoring",
        left: "QA built reactively with a fractional supervisor — inconsistent calibration.",
        right: "Dedicated QA team, calibrated scorecards, AI-assisted speech analytics built in.",
        leftYes: false,
      },
      {
        label: "Scalability",
        left: "Months to add headcount; painful to downsize after seasonality.",
        right: "Scale up or down in days without layoffs or fixed headcount exposure.",
        leftYes: false,
      },
      {
        label: "Compliance Posture",
        left: "HIPAA, PCI DSS, and SOC 2 evidence thin and team-dependent.",
        right: "HIPAA, PCI DSS, SOC 2 Type II, and TCPA controls audited and documented.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Customer Service Outsourcing Lifecycle",
    intro:
      "Every engagement runs through the same disciplined five-stage lifecycle — designed to turn outsourced customer service into a measurable business advantage in weeks.",
    steps: [
      {
        title: "Discovery & Brand Immersion",
        body: "We audit your current support, study your brand voice, personas, and product lines — and map opportunities to reduce cost and boost CSAT.",
      },
      {
        title: "Agent Recruitment & Training",
        body: "US-based agents recruited, vetted, and put through brand, product, and systems training — no one takes a live call before they certify.",
      },
      {
        title: "Integration & Pilot",
        body: "Integrate with your CRM, ticketing, and telephony platforms. Launch a controlled pilot to validate scripts, workflows, and KPIs.",
      },
      {
        title: "Scale to Production",
        body: "Ramp to full production volume across voice, email, chat, SMS, and social — with real-time dashboards and weekly KPI reviews.",
      },
      {
        title: "Optimize & Expand",
        body: "Continuous coaching, calibration, and VoC analytics drive month-over-month improvement in CSAT, FCR, AHT, and retention.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries That Rely on Our Customer Service BPO USA",
    intro:
      "Every industry carries its own compliance overlays, customer expectations, and support economics. Our agent pools are specialized by vertical with the certifications your auditors expect.",
    items: [
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Pharma",
        body: "Patient support, appointment scheduling, insurance verification, and refill support with HIPAA-aligned systems and training.",
      },
      {
        icon: "landmark",
        stat: "PCI DSS",
        title: "Financial Services",
        body: "Account inquiries, transaction disputes, fraud reporting, and secure payment support for banks, credit unions, and fintech.",
      },
      {
        icon: "shopping-bag",
        stat: "SOC 2",
        title: "Retail & Ecommerce",
        body: "Order support, returns, loyalty programs, and peak-season surge coverage for DTC brands and online retailers.",
      },
      {
        icon: "laptop",
        stat: "SOC 2",
        title: "SaaS & Technology",
        body: "Onboarding assistance, subscription management, billing support, and tier-1 technical help desk for software companies.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Choose Contact Center USA for Outsourced Customer Service",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Most customer service outsourcing companies compete on hourly rate by stacking offshore agents on time-zone-mismatched shifts. Customers notice. CSAT slips. Escalation rates climb. The cost savings evaporate into rework, churn, and brand damage.",
      "Contact Center USA is different: a 100% US-based customer service BPO USA with trained domestic agents, closed-loop QA, and compliance programs audited to HIPAA, PCI DSS, SOC 2 Type II, and TCPA — delivering outsourced customer service that your customers cannot distinguish from your own team.",
    ],
    bullets: [
      "100% US-based agents — no offshore or nearshore handoffs",
      "Omnichannel: voice, email, chat, SMS, and social in a unified desktop",
      "HIPAA, PCI DSS, SOC 2 Type II, and TCPA-aligned controls",
      "Dedicated QA, coaching, and VoC analytics built into every program",
      "No long-term contracts — scale up, scale down, cancel anytime",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to evaluate a better customer service outsourcing partner?",
    accent: "better customer service outsourcing",
    body: "If your in-house support is stretched, your CSAT is flat, or your current customer service BPO is under-performing, request a free customer-service assessment. We'll benchmark cost, quality, and compliance before you move a single ticket.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

export default function Page() {
  return <Content seoContent={seoContent} />;
}
