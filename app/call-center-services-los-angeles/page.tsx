import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/shared/CityPageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Call Center Services in Los Angeles",
  description:
    "US-based call center services for Los Angeles businesses. Get inbound, outbound, customer support, and multilingual coverage with a fast BPO quote.",
  keywords: [
    "call center services los angeles",
    "la bpo services",
    "los angeles customer service outsourcing",
    "los angeles call center",
    "hollywood call center outsourcing",
    "silicon beach bpo",
    "socal customer support",
    "la contact center",
  ],
  alternates: { canonical: "/call-center-services-los-angeles" },
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Call Center Services in Los Angeles",
    heading: "The LA BPO services partner for brands that live and die by customer experience.",
    accent: "customer experience",
    body: [
      "Contact Center USA is one of the best call center providers in Los Angeles — a 100% US-based LA BPO services partner delivering Los Angeles customer service outsourcing for Hollywood studios, Silicon Beach tech companies, Culver City media brands, and DTC e-commerce labels across Southern California.",
      "When LA businesses look for call center services Los Angeles that move at the speed of the entertainment industry and the scale of Silicon Beach, they get Pacific-time coverage, bilingual English/Spanish agents, and a BPO partner who understands that in LA, the customer is the brand.",
    ],
    stats: [
      { stat: "PT", label: "Dedicated Pacific-time pod for LA businesses" },
      { stat: "Bilingual", label: "English/Spanish agents for SoCal's diverse customer base" },
      { stat: "<2 wk", label: "From signed MSA to fully ramped LA support team" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "Local In-City Call Center vs. Contact Center USA Nationwide BPO",
    intro:
      "Los Angeles businesses face a choice: build with a local LA call center, or partner with a nationwide BPO. Here is how the two compare for LA BPO services buyers.",
    leftTitle: "Local LA In-City Call Center",
    rightTitle: "Contact Center USA Nationwide BPO",
    rows: [
      {
        label: "Hourly Agent Cost",
        left: "California minimum wage and LA cost of living drive seat costs 30–50% above nationwide averages.",
        right: "Nationwide US agent pool with LA-quality service at a fraction of SoCal operating cost.",
        leftYes: false,
      },
      {
        label: "Pacific Time Coverage",
        left: "Single LA site struggles with weekend and late-night coverage for entertainment brands serving global audiences.",
        right: "Dedicated PT pod plus follow-the-sun US overflow — true 24/7 without surcharge.",
        leftYes: false,
      },
      {
        label: "Wildfire & Earthquake Continuity",
        left: "Single SoCal facility concentrates risk — one power shutoff or evacuation halts the operation.",
        right: "Distributed US workforce across multiple states — zero single-region downtime risk.",
        leftYes: false,
      },
      {
        label: "Ramp Speed",
        left: "LA hiring is slow and highly competitive with studios; 60+ days to stand up a full team.",
        right: "Pilot live in under 48 hours; full LA team in under 2 weeks.",
        leftYes: false,
      },
      {
        label: "Bilingual Capacity",
        left: "Bilingual is available but often at a premium and with limited volume capacity.",
        right: "Large pool of bilingual English/Spanish agents built for LA's multicultural market at no premium.",
        leftYes: false,
      },
      {
        label: "Creative / Entertainment Expertise",
        left: "Some local shops specialize in entertainment but are expensive and resource-capped.",
        right: "Dedicated entertainment and DTC playbooks with surge capacity for launches and viral moments.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Onboarding for Los Angeles Businesses in 5 Steps",
    intro:
      "From Hollywood studios to Silicon Beach SaaS, every LA client onboards through the same fast, structured process designed for Southern California's pace of business.",
    steps: [
      {
        title: "LA Discovery Call",
        body: "30-minute call with a senior strategist to map Pacific-time volumes, channels, and LA industry needs.",
      },
      {
        title: "Solution Design",
        body: "Custom PT staffing plan, bilingual mix, and integration with Zendesk, Salesforce, and Shopify.",
      },
      {
        title: "Agent Training",
        body: "US agents trained on your LA brand voice, creative industry norms, and entertainment compliance.",
      },
      {
        title: "Go Live",
        body: "Pilot launch in under 48 hours with LA client success manager and real-time call quality monitoring.",
      },
      {
        title: "Scale & Optimize",
        body: "Weekly CX scorecards, AI-driven call insights, and surge capacity for LA product launches and premieres.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve in Los Angeles",
    intro:
      "From Hollywood to Silicon Beach, these are the LA industries where Contact Center USA delivers call center outsourcing at the scale and quality SoCal demands.",
    items: [
      {
        icon: "tv",
        stat: "Media",
        title: "Entertainment, Studios & Streaming",
        body: "Subscriber support, talent inquiries, and crisis comms for LA's studios, streamers, and music labels.",
      },
      {
        icon: "laptop",
        stat: "Tech",
        title: "Silicon Beach SaaS & Tech",
        body: "Tier 1–3 technical support and customer success for Playa Vista, Santa Monica, and Culver City tech.",
      },
      {
        icon: "shopping-bag",
        stat: "DTC",
        title: "Ecommerce & DTC Brands",
        body: "Omnichannel customer service for LA-born DTC labels — beauty, apparel, wellness, and lifestyle.",
      },
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Life Sciences",
        body: "Patient scheduling and intake for LA County hospital systems and specialty clinics.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why LA Businesses Choose Contact Center USA for Los Angeles Customer Service Outsourcing",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Los Angeles customers have no patience for scripted, offshore support — their brand loyalty depends on feeling understood. At the same time, LA businesses cannot afford to load their P&L with Manhattan-like Southern California call center overhead.",
      "Contact Center USA is the LA BPO services alternative that combines Pacific-time alignment, bilingual capacity, and entertainment-industry fluency with the cost structure of a nationwide US operation. You get the cultural fit of a local partner with the scale and resilience of a national BPO.",
    ],
    bullets: [
      "Dedicated Pacific-time pod aligned with LA business hours and late-night entertainment support",
      "Large bilingual English/Spanish capacity for LA's multicultural customer base",
      "Understanding of LA creative, entertainment, and DTC brand culture",
      "Surge capacity for product launches, premieres, and viral moments",
      "No long-term contracts — scale up for peak seasons, down for quiet periods",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to scale Los Angeles customer service without scaling LA overhead?",
    accent: "LA overhead",
    body: "Whether you are launching a DTC line, scaling a Silicon Beach SaaS, or supporting a studio rollout, Contact Center USA can stand up a dedicated LA-hours team in under 48 hours. Get a free Los Angeles call center quote tailored to your volumes and channels.",
    ctaLabel: "Get a Free Los Angeles Call Center Quote",
    ctaHref: "/contact",
  },
];

export default function LosAngelesPage() {
  return (
    <CityPageTemplate
      city="Los Angeles"
      state="California"
      stateAbbr="CA"
      description="Los Angeles is a global powerhouse where entertainment, technology, and entrepreneurship converge. From the studios of Hollywood and the creative campuses of Culver City to the booming tech corridor of Silicon Beach in Playa Vista, LA businesses span nearly every industry imaginable. With a population of 3.9 million and a sprawling metro area of over 13 million, the City of Angels presents enormous opportunities for businesses that can deliver outstanding customer experiences across its diverse and trend-setting consumer base."
      businessLandscape="The Los Angeles business ecosystem thrives on innovation and brand-building. Entertainment companies need around-the-clock support for global audiences, while ecommerce brands based in LA's thriving DTC scene require scalable customer service that can handle viral growth. Healthcare systems serving the vast LA County population need HIPAA-compliant support, and real estate firms navigating the competitive Southern California market need responsive, professional agents. Contact Center USA delivers all of this with 100% US-based teams who understand the culture, creativity, and ambition that define doing business in Los Angeles."
      industries={["entertainment", "tech", "healthcare", "ecommerce", "real estate"]}
      population="3.9M"
      businesses="500K+"
      seoContent={seoContent}
    />
  );
}
