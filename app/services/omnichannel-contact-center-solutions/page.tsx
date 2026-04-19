import type { Metadata } from "next";
import type { SEOPattern } from "@/components/shared/SEOContentSection";
import { OmnichannelContent } from "./Content";

export const metadata: Metadata = {
  title: "Omnichannel Contact Center & Omnichannel CX BPO USA | Contact Center USA",
  description:
    "US-based omnichannel contact center, omnichannel CX BPO, and omnichannel customer support in the USA. Unify voice, chat, email, social, and SMS with 92% first-contact resolution.",
  keywords: [
    "omnichannel contact center",
    "omnichannel cx bpo",
    "omnichannel customer support usa",
    "omnichannel call center",
    "multichannel customer support",
    "unified contact center solutions",
    "omnichannel bpo provider",
    "omnichannel support outsourcing",
  ],
  alternates: { canonical: "/services/omnichannel-contact-center-solutions" },
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Omnichannel CX BPO in USA",
    heading: "The omnichannel contact center partner that actually unifies channels instead of just listing them.",
    accent: "actually unifies",
    body: [
      "Contact Center USA is one of the best omnichannel contact center providers in the USA — a 100% US-based omnichannel CX BPO delivering omnichannel customer support in the USA for enterprise brands that are tired of siloed channel performance and repeat-contact customer frustration.",
      "When you compare omnichannel contact center vendors, the difference that matters is whether context actually follows the customer from chat to phone to email. Our platform unifies 7+ channels into a single agent desktop with full conversation history, customer profile, and open-case context — so customers never repeat themselves and agents never work blind.",
    ],
    stats: [
      { stat: "92%", label: "First-contact resolution on unified omnichannel customer support" },
      { stat: "7+", label: "Channels unified under one agent desktop and one customer profile" },
      { stat: "35%", label: "Reduction in repeat contacts after omnichannel transformation" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Multichannel vs. Outsourced Omnichannel CX BPO",
    intro:
      "Most enterprises already run multichannel support — they just run it in silos with no shared context. Here is how a true omnichannel contact center compares to the fragmented multichannel setups most brands have today.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Channels Connected",
        left: "2-3 channels in use, each operating in a silo with separate tools.",
        right: "7+ channels unified: voice, chat, email, SMS, social, WhatsApp, app messaging.",
        leftYes: false,
      },
      {
        label: "Customer Context on Switch",
        left: "Lost — customers repeat themselves every time they change channel.",
        right: "100% preserved — full history and profile follow the customer everywhere.",
        leftYes: false,
      },
      {
        label: "First-Contact Resolution",
        left: "65-75% — agents lack context and tools to resolve on first interaction.",
        right: "92% FCR with unified desktop and AI-assisted agent guidance.",
        leftYes: false,
      },
      {
        label: "Repeat Contact Rate",
        left: "High — information lost between channels drives rework.",
        right: "35% lower repeat contacts after omnichannel transformation.",
        leftYes: false,
      },
      {
        label: "Routing Intelligence",
        left: "Basic queue by channel — not skills-based, not context-aware.",
        right: "AI-enhanced, skills-based, context-aware routing across all channels.",
        leftYes: false,
      },
      {
        label: "Time to Implement",
        left: "6-12 months internal build; integration and change management are the constraint.",
        right: "6-12 weeks to a production omnichannel contact center rollout.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Omnichannel CX BPO Implementation Process",
    intro:
      "Every omnichannel contact center deployment follows the same five-stage playbook — engineered to unify channels, preserve context, and lift first-contact resolution inside one quarter.",
    steps: [
      {
        title: "Channel & Journey Assessment",
        body: "Audit existing channels, tools, volumes, and customer journeys. Quantify unification opportunity.",
      },
      {
        title: "Platform & Routing Design",
        body: "Design unified desktop, universal customer profile, routing rules, and cross-channel handoffs.",
      },
      {
        title: "Integration & Build",
        body: "Integrate telephony, chat, email, social, SMS, CRM, and help desk under one platform.",
      },
      {
        title: "Agent Enablement",
        body: "Train US-based agents on unified desktop, channel tone, and multi-channel workflows.",
      },
      {
        title: "Launch & Continuous Optimization",
        body: "Phased rollout with weekly analytics review, routing tuning, and QA across channels.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve with Omnichannel Customer Support USA",
    intro:
      "Each vertical has its own channel mix and compliance posture. Our omnichannel CX BPO pre-builds journey and compliance templates for the industries we serve most.",
    items: [
      {
        icon: "shopping-bag",
        stat: "PCI DSS",
        title: "Ecommerce & Retail",
        body: "Unified chat, SMS, social, and phone for pre-purchase, order status, and returns.",
      },
      {
        icon: "landmark",
        stat: "GLBA",
        title: "Financial Services",
        body: "Secure omnichannel banking, lending, cards, and wealth with compliant audit trails.",
      },
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Payers",
        body: "Appointment, Rx, member services, and telehealth across phone, portal, SMS, and email.",
      },
      {
        icon: "laptop",
        stat: "SOC 2",
        title: "SaaS & Technology",
        body: "In-app chat to phone escalation with full diagnostic context preserved on handoff.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Choose Contact Center USA Among Omnichannel CX BPO Providers",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Most vendors claiming to be an omnichannel contact center are really multichannel providers with a marketing rebrand — channels exist side-by-side but do not share customer context. Real omnichannel customer support in the USA requires a unified platform, a unified data model, and unified operations.",
      "Contact Center USA is a US-based omnichannel CX BPO that brings all three. We own the agents, we own the technology stack, and we own the journey design — so context actually flows, routing actually routes intelligently, and customers actually feel the difference.",
    ],
    bullets: [
      "100% US-based omnichannel agents with unified desktop training",
      "Universal customer profile across voice, chat, email, SMS, and social",
      "AI-enhanced skills-based routing with real-time context",
      "PCI DSS, HIPAA, SOC 2 Type II compliant cross-channel operations",
      "6-12 week omnichannel contact center go-live from kickoff",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to stop losing context between channels?",
    accent: "stop losing context",
    body: "If your channels are siloed, your repeat-contact rate is climbing, and your first-contact resolution is flat, it is time for a true omnichannel contact center. Let us run a free channel audit and build an omnichannel CX BPO roadmap tailored to your volumes and SLAs.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

export default function OmnichannelSolutionsPage() {
  return <OmnichannelContent seoContent={seoContent} />;
}
