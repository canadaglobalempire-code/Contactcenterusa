import type { Metadata } from "next";
import type { SEOPattern } from "@/components/shared/SEOContentSection";
import { DigitalCXContent } from "./Content";

export const metadata: Metadata = {
  title: "Digital CX Services & Digital Customer Experience BPO USA | Contact Center USA",
  description:
    "US-based digital CX services, digital customer experience BPO, and CX transformation outsourcing. Omnichannel digital support including live chat, social media, email, and self-service portals.",
  keywords: [
    "digital cx services",
    "digital customer experience bpo",
    "cx transformation outsourcing",
    "digital customer experience outsourcing",
    "digital cx bpo usa",
    "omnichannel digital support",
    "digital transformation services",
    "cx outsourcing provider",
  ],
  alternates: { canonical: "/services/digital-customer-experience-services" },
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Digital CX BPO in USA",
    heading: "The digital CX services partner that actually transforms customer experience instead of just digitizing tickets.",
    accent: "actually transforms",
    body: [
      "Contact Center USA is one of the best digital CX services companies in the USA — a 100% US-based digital customer experience BPO delivering CX transformation outsourcing for ecommerce, SaaS, healthcare, and financial services brands that compete on digital experience.",
      "When leadership teams evaluate digital customer experience BPO partners, they are looking for more than chat agents and ticket deflection — they are looking for a CX transformation outsourcing partner who can audit journeys, redesign channels, and run unified digital operations. That is the charter our digital CX services team delivers against.",
    ],
    stats: [
      { stat: "95%+", label: "CSAT across unified digital channels post-transformation" },
      { stat: "40%", label: "Faster first-response time vs. fragmented in-house digital teams" },
      { stat: "30-40%", label: "Ticket volume deflected by redesigned self-service and knowledge bases" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Digital CX vs. Outsourced Digital Customer Experience BPO",
    intro:
      "Brands that want real CX transformation outsourcing hit the same internal limitations: fragmented tools, siloed channel owners, and no single point of accountability for digital journey performance. Here is how an experienced digital CX BPO closes the gap.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Channel Coverage",
        left: "Usually 1-2 digital channels owned — the rest either missing or neglected.",
        right: "5+ digital channels unified: chat, social, email, SMS, messaging, self-service.",
        leftYes: false,
      },
      {
        label: "Digital First-Response Time",
        left: "Hours to days across email and social — inconsistent SLAs per channel.",
        right: "Under 30 seconds on chat; <30 min on email; <15 min on social monitoring.",
        leftYes: false,
      },
      {
        label: "Brand Voice Consistency",
        left: "Varies by agent, channel owner, and team — customers notice the inconsistency.",
        right: "Single digital brand-voice guide enforced with QA scoring across all channels.",
        leftYes: false,
      },
      {
        label: "Self-Service Strategy",
        left: "No deflection strategy — every inquiry becomes a ticket.",
        right: "Knowledge base, AI FAQ, and portal strategy that deflects 30-40% of volume.",
        leftYes: false,
      },
      {
        label: "Technology Stack",
        left: "Separate tools per channel — no unified customer view or analytics.",
        right: "Unified desktop, shared CRM, and cross-channel journey analytics.",
        leftYes: false,
      },
      {
        label: "Cost per Digital Interaction",
        left: "$12-18 on email; $8-12 on chat — loaded for under-utilized FTEs.",
        right: "$3-8 per digital interaction on shared pods — pay for productive volume only.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our CX Transformation Outsourcing Process",
    intro:
      "Every digital CX transformation we run follows the same five-stage workflow — designed to deliver measurable lift in CSAT, first-response time, and deflection inside one quarter.",
    steps: [
      {
        title: "Digital CX Audit",
        body: "Audit channels, tools, journeys, volumes, and SLAs. Quantify gaps and transformation opportunity.",
      },
      {
        title: "Channel Strategy & Roadmap",
        body: "Prioritize channels, set SLAs per channel, design handoffs, and build a 90-day roadmap.",
      },
      {
        title: "Team Build & Training",
        body: "Recruit US-based digital specialists, certify on brand voice, channel tone, and product.",
      },
      {
        title: "Platform Unification",
        body: "Integrate CRM, help desk, social, and self-service into a unified agent desktop.",
      },
      {
        title: "Launch & Continuous CX",
        body: "Go live with weekly QA, CSAT tracking, journey analytics, and quarterly CX reviews.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve with Digital CX Services",
    intro:
      "Each industry carries its own regulatory overlays and digital channel preferences. Our digital customer experience BPO pre-builds journey templates for the sectors we serve most.",
    items: [
      {
        icon: "shopping-bag",
        stat: "PCI DSS",
        title: "Ecommerce & Retail",
        body: "Pre-purchase chat, social reputation, returns, and loyalty support across DTC brands.",
      },
      {
        icon: "laptop",
        stat: "SOC 2",
        title: "SaaS & Technology",
        body: "In-app messaging, community management, and tier-1 technical support with escalation.",
      },
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Telehealth",
        body: "Patient portal support, secure messaging, telehealth coordination, and appointment flows.",
      },
      {
        icon: "landmark",
        stat: "GLBA",
        title: "Financial Services",
        body: "Secure digital banking, reputation management, mobile app, and compliant email communication.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Choose Contact Center USA Among Digital CX Services Providers",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Most digital customer experience BPO providers either run offshore chat sweatshops that collapse on nuance, or narrow single-channel agencies that cannot execute a true CX transformation outsourcing program end-to-end.",
      "Contact Center USA is a US-based digital CX services partner that combines strategy, execution, and operations under one roof: CX consultants, US-based digital agents, and a unified technology stack that ties it all together. We do not hand off between teams because we are the team.",
    ],
    bullets: [
      "100% US-based digital specialists across chat, social, email, and self-service",
      "CX consultants who have transformed programs at Fortune 500 brands",
      "PCI DSS, HIPAA, SOC 2 Type II certified digital operations",
      "Unified desktop and cross-channel journey analytics",
      "90-day transformation sprint methodology with measurable KPIs",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to run CX transformation outsourcing that actually ships?",
    accent: "actually ships",
    body: "If your digital channels are fragmented, your CSAT is flat, and your in-house team is overwhelmed, let us run a digital CX audit. We will map your journeys, quantify the transformation opportunity, and propose a 90-day plan — free of charge.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

export default function DigitalCXServicesPage() {
  return <DigitalCXContent seoContent={seoContent} />;
}
