import type { Metadata } from "next";
import type { SEOPattern } from "@/components/shared/SEOContentSection";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Technical Support Outsourcing | Contact Center USA",
  description:
    "US-based technical support outsourcing with trained agents, flexible coverage, reporting, and fast onboarding. Request a quote from Contact Center USA.",
  keywords: [
    "technical support outsourcing",
    "tech support bpo usa",
    "tier 2 3 support outsourcing",
    "outsourced technical support",
    "help desk outsourcing usa",
    "it support outsourcing",
    "tier 1 2 3 help desk bpo",
    "saas technical support outsourcing",
  ],
  alternates: { canonical: "/solutions/technical-support-outsourcing" },
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Technical Support Outsourcing in USA",
    heading: "The tech support BPO USA product and IT leaders trust when tickets have to close, not just get answered.",
    accent: "close, not just get answered",
    body: [
      "Contact Center USA is one of the best technical support outsourcing providers in the USA — a 100% US-based tech support BPO USA partner delivering Tier 1, Tier 2, and Tier 3 support across software, SaaS, hardware, and internal IT help desk programs.",
      "For product, IT, and CX leaders searching for tier 2 3 support outsourcing that can actually deflect escalations and close complex tickets, we staff domestic engineers and technicians, integrate with Zendesk, Jira Service Management, ServiceNow, and Salesforce, and deliver 82% first-call resolution at 50% lower blended cost per ticket.",
    ],
    stats: [
      { stat: "82%", label: "Measured first-call resolution across Tier 1 and Tier 2 programs" },
      { stat: "50%", label: "Average reduction in blended cost per resolved ticket" },
      { stat: "< 15 min", label: "Median response time on priority-one IT help desk tickets" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Tech Support vs. Technical Support Outsourcing",
    intro:
      "Product and IT leaders face the same decision: staff Tier 1/2/3 in-house or partner with a specialized tech support BPO. Here's how the models compare on cost, ramp time, and ticket outcomes.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Time to Full Coverage",
        left: "6–9 months to recruit, ramp, and certify an in-house Tier 1–Tier 3 help desk.",
        right: "Programs live in 4–6 weeks with trained engineers and proven runbooks.",
        leftYes: false,
      },
      {
        label: "Cost per Ticket",
        left: "$25–$45 per resolved ticket fully loaded when admin, tooling, and facility are included.",
        right: "50% lower blended cost per resolved ticket with deflection, macros, and tiered triage.",
        leftYes: false,
      },
      {
        label: "24/7 Coverage",
        left: "Hard to staff nights, weekends, and holidays; P1 incidents wait until Monday.",
        right: "24/7/365 coverage with follow-the-sun tiers and dedicated P1 escalation runbooks.",
        leftYes: false,
      },
      {
        label: "Tier 2/3 Escalation Depth",
        left: "Senior engineers bottleneck everything; backlog grows on complex tickets.",
        right: "Dedicated Tier 2 and Tier 3 engineers with reproducible environment labs.",
        leftYes: false,
      },
      {
        label: "Tooling & Stack",
        left: "Zendesk, Jira SM, ServiceNow, and remote-access licenses paid per seat regardless of use.",
        right: "ITSM stack, remote tools, and knowledge-base platforms included in managed pricing.",
        leftYes: false,
      },
      {
        label: "Knowledge Base Growth",
        left: "Runbook and KB maintenance deprioritized; tribal knowledge walks out at attrition.",
        right: "Continuous KB and runbook maintenance drives 30%+ self-service deflection over time.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Technical Support Outsourcing Engagement Flow",
    intro:
      "Every tech support program runs through the same five-stage flow — engineered to take you from signed SOW to production-grade Tier 1/2/3 coverage in under six weeks.",
    steps: [
      {
        title: "Stack & SOP Audit",
        body: "We map your product, current ticket mix, runbooks, and ITSM stack to baseline ramp plan and metrics.",
      },
      {
        title: "Runbook & KB Build",
        body: "Runbooks, macros, and KB articles authored or refactored for deflection, triage, and escalation clarity.",
      },
      {
        title: "Engineer Build & Training",
        body: "Domestic engineers and technicians certified on your product, stack, and SOPs before first ticket.",
      },
      {
        title: "Pilot & Calibration",
        body: "Controlled pilot with daily calibration on triage accuracy, resolution time, and FCR before scale.",
      },
      {
        title: "Optimize & Scale",
        body: "Weekly dashboards on FCR, AHT, CSAT, and ticket backlog with continuous improvement QBRs.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Support With Tech Support BPO USA",
    intro:
      "Tech support motions differ sharply by product and industry. Our pods are staffed and trained for the specific stack each client operates.",
    items: [
      {
        icon: "laptop",
        stat: "SaaS",
        title: "SaaS & B2B Software",
        body: "Tier 1–3 product support for SaaS with deep integration into Zendesk, Intercom, Jira SM, and Salesforce.",
      },
      {
        icon: "wrench",
        stat: "IT",
        title: "Internal IT Help Desk",
        body: "Enterprise IT help desk covering password resets, VPN, SSO, endpoint, and access management.",
      },
      {
        icon: "laptop",
        stat: "Devices",
        title: "Consumer Hardware & IoT",
        body: "Device troubleshooting, warranty coordination, RMA, and remote diagnostics for connected products.",
      },
      {
        icon: "shield",
        stat: "MSP",
        title: "MSPs & Managed Services",
        body: "White-label Tier 1–3 overflow and 24/7 NOC support for MSPs running their own clients.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Choose Contact Center USA for Tier 2 3 Support Outsourcing",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Most technical support outsourcing vendors are script-following Tier 1 shops that escalate anything harder than a password reset straight back to your engineering team. The backlog grows, the CSAT drops, and your senior engineers never escape queue work.",
      "Contact Center USA is different: a 100% US-based tech support BPO USA partner with real Tier 2 and Tier 3 engineers, reproducible environment labs, and runbooks that actually close complex tickets. We deflect, triage, and resolve — so your product team can ship instead of firefight.",
    ],
    bullets: [
      "100% US-based engineers and technicians — Tier 1, Tier 2, and Tier 3",
      "Certified on Zendesk, Jira Service Management, ServiceNow, Salesforce, Intercom",
      "24/7/365 coverage with follow-the-sun tiering and P1 escalation runbooks",
      "Reproducible environment labs for complex Tier 2/3 triage and debugging",
      "Continuous KB and macro maintenance driving 30%+ self-service deflection",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to evaluate a better technical support outsourcing partner?",
    accent: "better technical support outsourcing",
    body: "If your ticket backlog is growing, your FCR is slipping, or your senior engineers are drowning in escalations, request a free tech support assessment. We'll benchmark cost, FCR, and ticket mix before you move anything.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

export default function Page() {
  return <Content seoContent={seoContent} />;
}
