import type { Metadata } from "next";
import { CXAnalyticsContent } from "./Content";
import { SEOContentSection, type SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "CX Analytics Services USA | Customer Experience Analytics Outsourcing | Contact Center USA",
  description:
    "CX analytics services and customer experience analytics outsourcing. Contact center analytics BPO USA — journey analytics, sentiment, speech/text analytics, QA, and NPS/CSAT reporting.",
  keywords: [
    "cx analytics services",
    "customer experience analytics outsourcing",
    "contact center analytics bpo",
    "cx analytics bpo usa",
    "call center analytics services",
    "speech analytics outsourcing",
    "voice of customer analytics",
    "customer journey analytics services",
  ],
  alternates: { canonical: "/services/customer-experience-analytics" },
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best CX Analytics Services in USA",
    heading: "The CX analytics services partner enterprise CX leaders trust to turn contacts into insight.",
    accent: "contacts into insight",
    body: [
      "Contact Center USA is one of the best CX analytics services providers in the USA — a 100% US-based contact center analytics BPO delivering customer experience analytics outsourcing across voice, chat, email, surveys, and CRM.",
      "For CX, operations, and analytics leaders searching for the best customer experience analytics outsourcing in USA, we stand up speech, text, and journey analytics programs that measure what matters, surface why it's happening, and drive the changes that actually lift NPS and CSAT.",
    ],
    stats: [
      { stat: "+45%", label: "Average CSAT lift once CX analytics services are operationalized" },
      { stat: "100%", label: "Interaction coverage with speech and text analytics — no more 2% QA sampling" },
      { stat: "100+", label: "Pre-built CX and contact center analytics BPO KPIs tracked out-of-the-box" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House CX Analytics vs. Contact Center Analytics BPO",
    intro:
      "Every CX leader eventually hits the same wall: you have the data, but not the analysts, the tooling, or the time to turn it into action. Here's how an in-house analytics function compares to a dedicated CX analytics services partner.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Coverage of Interactions Analyzed",
        left: "Manual QA samples 1–3% of calls and chats — most interactions are never analyzed.",
        right: "100% of voice and text interactions analyzed automatically with auto-QA and sentiment.",
        leftYes: false,
      },
      {
        label: "Time to Insight",
        left: "Weeks from a CX issue emerging to a report landing on leadership's desk.",
        right: "Real-time dashboards and weekly insight reviews as part of the contact center analytics BPO.",
        leftYes: false,
      },
      {
        label: "Analyst Bandwidth",
        left: "One or two internal analysts stretched across CX, ops, WFM, and executive requests.",
        right: "Dedicated CX analytics services team: speech analysts, CX scientists, dashboard engineers.",
        leftYes: false,
      },
      {
        label: "Tooling & Licensing",
        left: "You license speech analytics, text analytics, survey, and BI tools separately.",
        right: "Tooling included in the CX analytics outsourcing engagement — no separate licensing.",
        leftYes: false,
      },
      {
        label: "Action on Findings",
        left: "Insights stall — ownership for root cause and remediation is unclear.",
        right: "Findings packaged with recommended actions and tracked to closure each week.",
        leftYes: false,
      },
      {
        label: "Cost of Program",
        left: "Fully-loaded analyst + tooling + platform cost climbs fast and slowly.",
        right: "Predictable, managed CX analytics services pricing that typically cuts cost 30–40%.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Customer Experience Analytics Outsourcing Process",
    intro:
      "Every customer experience analytics outsourcing engagement runs through the same five-stage framework — designed to move you from raw interaction data to prioritized, actionable CX improvements.",
    steps: [
      {
        title: "CX Metric Design",
        body: "We align on the NPS, CSAT, CES, FCR, churn, and journey metrics that actually drive your business.",
      },
      {
        title: "Data & Tooling Setup",
        body: "Voice, chat, email, CRM, survey, and ticket data piped into our contact center analytics BPO platform.",
      },
      {
        title: "Speech & Text Analytics",
        body: "100% of interactions scored for sentiment, intent, compliance, and agent behavior.",
      },
      {
        title: "Journey & Root Cause",
        body: "Journey analytics identify drop-off points, friction drivers, and repeat-contact causes.",
      },
      {
        title: "Insight to Action",
        body: "Weekly CX analytics services reviews tie findings to owners, actions, and measurable KPI lift.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Scale with CX Analytics Services",
    intro:
      "Our customer experience analytics outsourcing programs are built around the compliance, language, and operational realities of the sectors we serve.",
    items: [
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Health Plans",
        body: "HIPAA-compliant CX analytics services across member, patient, and provider journey data.",
      },
      {
        icon: "landmark",
        stat: "PCI DSS",
        title: "Banking, Insurance & FinTech",
        body: "Speech and text analytics with PCI DSS controls for banks, insurers, and FinTech CX teams.",
      },
      {
        icon: "shopping-bag",
        stat: "CCPA",
        title: "Retail, E-Commerce & Subscription",
        body: "Journey analytics for order, returns, loyalty, and VIP journeys across consumer brands.",
      },
      {
        icon: "signal",
        stat: "CPNI",
        title: "Telecom, Media & SaaS",
        body: "Contact center analytics BPO programs for high-volume telecom, streaming, and SaaS CX.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why CX Leaders Pick Our CX Analytics Outsourcing",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Most CX analytics vendors sell you a dashboard and walk away. You inherit the tooling, the modeling, the tuning, and the hard work of turning analytics into action — usually with a thin internal team and no time. Offshore analytics shops lack the US English, accent, and regulatory nuance needed to analyze US CX well.",
      "Contact Center USA is different: a US-based CX analytics services operation that owns the tooling, the analysts, the speech models, and the weekly action loop. You get a contact center analytics BPO partner that measures CX, explains CX, and helps you actually improve CX — not just report on it.",
    ],
    bullets: [
      "US-based CX analytics services team: CX scientists, speech analysts, engineers",
      "100% interaction coverage with speech and text analytics — not 2% samples",
      "Journey analytics across voice, chat, email, survey, CRM, and ticketing",
      "Pre-built NPS, CSAT, CES, FCR, churn, and repeat-contact KPI dashboards",
      "Weekly insight-to-action reviews with owners, timelines, and measured lift",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to plug in CX analytics services that actually move NPS and CSAT?",
    accent: "CX analytics services",
    body: "Whether you're standing up a new analytics function, replacing a dashboard-only vendor, or scaling speech and text analytics across 100% of interactions, request a free consultation. We'll audit your current CX measurement, model expected KPI lift, and design a customer experience analytics outsourcing program built for your business.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

export default function CXAnalyticsPage() {
  return (
    <>
      <CXAnalyticsContent />
      <SEOContentSection sections={seoContent} />
    </>
  );
}
