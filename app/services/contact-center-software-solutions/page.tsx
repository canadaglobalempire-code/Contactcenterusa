import type { Metadata } from "next";
import { ContactCenterSoftwareContent } from "./Content";
import { SEOContentSection, type SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Contact Center Software Solutions USA | Call Center Software Provider | Contact Center USA",
  description:
    "Contact center software solutions and contact center software BPO services. Call center software provider USA — cloud CCaaS, omnichannel, AI automation, WFM, QA, and analytics.",
  keywords: [
    "contact center software solutions",
    "contact center software bpo",
    "call center software provider usa",
    "cloud contact center software",
    "ccaas provider usa",
    "omnichannel contact center software",
    "contact center platform usa",
    "enterprise call center software",
  ],
  alternates: { canonical: "/services/contact-center-software-solutions" },
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Contact Center Software Provider in USA",
    heading: "The contact center software solutions partner enterprises trust to modernize CX without the chaos.",
    accent: "without the chaos",
    body: [
      "Contact Center USA is one of the best contact center software solutions providers in the USA — a full-service call center software provider USA and contact center software BPO that designs, deploys, integrates, and operates modern CCaaS platforms for mid-market and enterprise CX teams.",
      "For IT, CX, and operations leaders evaluating the best call center software provider in USA, we deliver cloud contact center software, omnichannel routing, AI automation, workforce management, QA, and real-time analytics as one managed platform — not a pile of vendors.",
    ],
    stats: [
      { stat: "99.99%", label: "Platform uptime SLA across our contact center software deployments" },
      { stat: "6–8 Wks", label: "Typical time to go-live on new contact center software solutions programs" },
      { stat: "-35%", label: "Average total cost of ownership vs. fragmented legacy CCaaS stacks" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "DIY Contact Center Software vs. Managed Contact Center Software BPO",
    intro:
      "You can license a CCaaS platform directly and staff up to run it — or you can plug into a contact center software BPO that already does this for a living. Here's how the two models compare.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Time to Go-Live",
        left: "6–12 months to architect, integrate, and stabilize a new CCaaS platform internally.",
        right: "6–8 weeks from kickoff to live production on our contact center software solutions.",
        leftYes: false,
      },
      {
        label: "Integration with CRM & WFM",
        left: "IT absorbs Salesforce, Zendesk, MS Dynamics, WFM, and QA integrations as custom projects.",
        right: "Pre-built, maintained integrations with every major CRM, WFM, and QA system.",
        leftYes: false,
      },
      {
        label: "Omnichannel Coverage",
        left: "Voice, email, chat, SMS, and social are often separate tools with separate reports.",
        right: "Unified omnichannel contact center software — one agent desktop, one reporting layer.",
        leftYes: false,
      },
      {
        label: "AI & Automation",
        left: "AI bolted on later via third-party vendors — hard to govern, harder to improve.",
        right: "AI, IVR automation, agent assist, and auto-QA built into the contact center software stack.",
        leftYes: false,
      },
      {
        label: "Uptime & Redundancy",
        left: "SLA depends on your internal runbooks, on-call, and DR maturity.",
        right: "99.99% SLA with multi-region redundancy operated by our call center software provider USA team.",
        leftYes: false,
      },
      {
        label: "Total Cost of Ownership",
        left: "License + engineers + admins + integrations + upgrades — costs grow quietly every year.",
        right: "Transparent managed pricing that typically cuts TCO 30–40% over five years.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Contact Center Software Solutions Deployment",
    intro:
      "Every contact center software BPO engagement runs through the same five-stage deployment model — designed to get your new platform into production fast without sacrificing compliance, integration, or CX quality.",
    steps: [
      {
        title: "Discovery & Architecture",
        body: "Current-state audit, target architecture, integration map, and compliance blueprint for your contact center software solutions rollout.",
      },
      {
        title: "Platform Build & Config",
        body: "IVR, queues, skills, routing, channels, and dashboards built in the chosen CCaaS platform.",
      },
      {
        title: "Integrations & Automations",
        body: "CRM, WFM, QA, payment, and AI integrations wired into the contact center software platform.",
      },
      {
        title: "Pilot & Migration",
        body: "Pilot queues go live, then phased migration from legacy tools with parallel runs and fallback.",
      },
      {
        title: "Managed Operations",
        body: "Our call center software provider USA team handles upgrades, monitoring, tuning, and SLA ops.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve with Contact Center Software BPO",
    intro:
      "Our contact center software solutions are tuned to the regulatory and integration realities of the sectors we serve — not a single generic deployment pattern.",
    items: [
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Health Plans",
        body: "HIPAA-compliant contact center software solutions for members, patients, and provider support.",
      },
      {
        icon: "landmark",
        stat: "PCI DSS",
        title: "Banking, Insurance & FinTech",
        body: "PCI-compliant call center software provider USA stacks for banks, insurers, and FinTech platforms.",
      },
      {
        icon: "shopping-bag",
        stat: "CCPA",
        title: "Retail, E-Commerce & Subscription",
        body: "Omnichannel contact center software for order, returns, loyalty, and VIP customer journeys.",
      },
      {
        icon: "signal",
        stat: "CPNI",
        title: "Telecom, Media & SaaS",
        body: "Scalable contact center software BPO platforms supporting Tier 1 and Tier 2 telecom and SaaS support.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why CIOs Pick Us as Their Call Center Software Provider USA",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Most contact center software vendors sell you a license and disappear. You inherit the implementation risk, the integrations, the upgrades, the tuning — and the bill. Offshore implementation partners keep labor cheap but ship fragile deployments that collapse under US regulatory and CX demands.",
      "Contact Center USA is different: an end-to-end contact center software BPO that takes accountability for the platform, the integrations, and the daily operations. One partner, one SLA, one throat to choke — with a US-based engineering and operations team on the other end of the phone.",
    ],
    bullets: [
      "US-based contact center software solutions design, build, and managed operations",
      "Partnerships with Genesys, Five9, NICE, Talkdesk, Amazon Connect, Twilio Flex",
      "Pre-built integrations with Salesforce, Zendesk, MS Dynamics, ServiceNow, HubSpot",
      "HIPAA, PCI DSS Level 1, SOC 2 Type II, GDPR, and CCPA-ready by default",
      "Single managed SLA across platform, integrations, AI, QA, and reporting",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to modernize your stack with contact center software solutions that actually ship?",
    accent: "contact center software solutions",
    body: "Whether you're replacing legacy CCaaS, consolidating vendors, or standing up an omnichannel platform from scratch, request a free consultation. We'll audit your current contact center software, map the target state, and show you exactly what a managed contact center software BPO engagement would unlock.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

export default function ContactCenterSoftwarePage() {
  return (
    <>
      <ContactCenterSoftwareContent />
      <SEOContentSection sections={seoContent} />
    </>
  );
}
