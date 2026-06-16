import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/shared/CityPageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";
import { pageMeta } from "@/lib/seo-config";

const title = "New York Call Center Services | Contact Center USA";
const description =
  "US-based call center services for New York City businesses. Get inbound, outbound, customer support, and multilingual coverage with a fast BPO quote.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "call center services new york",
    "nyc call center bpo",
    "manhattan customer support outsourcing",
    "new york call center outsourcing",
    "nyc bpo services",
    "new york customer service outsourcing",
    "wall street call center",
    "nyc contact center",
  ],
  alternates: { canonical: "/call-center-services-new-york" },
  ...pageMeta(title, description, "/call-center-services-new-york"),
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Call Center Services in New York",
    heading: "The NYC call center BPO trusted by Manhattan's fastest-moving brands and most regulated industries.",
    accent: "fastest-moving brands",
    body: [
      "Contact Center USA is one of the best call center providers in New York — a 100% US-based NYC call center BPO delivering Manhattan customer support outsourcing for Wall Street firms, Madison Avenue agencies, Hudson Yards media companies, and Flatiron fintech startups.",
      "When New York businesses search for call center services New York that can match the pace and polish of the five boroughs, they get Eastern-time-aligned agents, FINRA- and HIPAA-ready operations, and a partner who understands that in NYC, every customer interaction is a brand moment.",
    ],
    stats: [
      { stat: "24/7", label: "Eastern-time-aligned coverage for NYC businesses" },
      { stat: "<48h", label: "Manhattan customer support outsourcing go-live" },
      { stat: "500+", label: "US-based agents ready to scale your NYC operation" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "Local In-City Call Center vs. Contact Center USA Nationwide BPO",
    intro:
      "New York companies often start with a local Manhattan call center, then hit a wall on cost, scale, and coverage. Here is how a nationwide BPO compares to an in-city operation for call center services New York buyers.",
    leftTitle: "Local NYC In-City Call Center",
    rightTitle: "Contact Center USA Nationwide BPO",
    rows: [
      {
        label: "Hourly Agent Cost",
        left: "Manhattan real estate and NYC wage floors drive agent costs 35–55% higher than nationwide averages.",
        right: "Nationwide US talent pool with NYC-quality agents at a fraction of the Manhattan cost basis.",
        leftYes: false,
      },
      {
        label: "24/7 Coverage",
        left: "Single-site NYC operations struggle with overnight and weekend shifts; coverage gaps are common.",
        right: "Follow-the-sun US coverage across multiple domestic sites — true 24/7/365 without surcharges.",
        leftYes: false,
      },
      {
        label: "Business Continuity",
        left: "Single Manhattan facility — a blackout, blizzard, or building issue takes the whole queue down.",
        right: "Distributed US workforce across multiple states — no single point of failure for your NYC brand.",
        leftYes: false,
      },
      {
        label: "Ramp Speed",
        left: "NYC hiring market is tight and slow; 60–90 days to onboard new seats is typical.",
        right: "Go-live in under 48 hours for pilots, full teams in 2 weeks — on demand as NYC volume spikes.",
        leftYes: false,
      },
      {
        label: "Compliance Coverage",
        left: "Most local shops handle one or two NYC-specific regs; gaps in HIPAA, FINRA, or SOC 2 are frequent.",
        right: "HIPAA, PCI-DSS, TCPA, FINRA, SOC 2 — a full compliance stack audited for NYC-regulated industries.",
        leftYes: false,
      },
      {
        label: "Eastern Time Alignment",
        left: "Works by default — but so does a nationwide BPO with a dedicated NYC-hours team.",
        right: "Dedicated NYC-hours pod plus overnight and weekend overflow — ET alignment without single-site risk.",
        leftYes: true,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Onboarding for New York Businesses in 5 Steps",
    intro:
      "Every NYC client — whether a Flatiron SaaS, an Upper East Side healthcare network, or a Midtown media brand — flows through the same rapid onboarding designed for the pace of New York business.",
    steps: [
      {
        title: "Discovery Call",
        body: "30-minute call with a senior NYC-market strategist to map volumes, channels, industries, and compliance needs.",
      },
      {
        title: "Solution Design",
        body: "Custom staffing plan, tech stack integration (Zendesk, Salesforce, HubSpot), and NYC-hours coverage model.",
      },
      {
        title: "Agent Training",
        body: "US agents trained on your brand voice, NYC customer expectations, and industry-specific regulations.",
      },
      {
        title: "Go Live",
        body: "Pilot launch in under 48 hours with real-time QA, call monitoring, and NYC client success manager.",
      },
      {
        title: "Scale & Optimize",
        body: "Weekly CX reviews, AI-assisted call analytics, and capacity flex for NYC demand spikes and seasonality.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve in New York",
    intro:
      "From Wall Street to Madison Avenue, these are the industries where NYC businesses rely on Contact Center USA for call center outsourcing.",
    items: [
      {
        icon: "landmark",
        stat: "FINRA",
        title: "Financial Services & Wall Street",
        body: "FINRA- and SEC-aware support for banks, brokerages, fintech, and wealth managers across Lower Manhattan.",
      },
      {
        icon: "tv",
        stat: "Media",
        title: "Media, Publishing & Advertising",
        body: "Subscriber support, ad-sales qualification, and crisis comms for Midtown and Hudson Yards media brands.",
      },
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Life Sciences",
        body: "Patient scheduling, insurance intake, and HIPAA-compliant communication for NYC hospital networks.",
      },
      {
        icon: "shopping-bag",
        stat: "DTC",
        title: "Retail, Luxury & Ecommerce",
        body: "High-touch customer service for NYC-born DTC brands, SoHo luxury retailers, and omnichannel marketplaces.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why NYC Businesses Choose Contact Center USA for Manhattan Customer Support Outsourcing",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "New York companies cannot afford the compliance risk of offshore agents, the slow ramp of in-city operations, or the bloated real-estate overhead of Manhattan-based call centers. When your customers are paying NYC prices, they expect NYC-quality service — on the first ring, every time.",
      "Contact Center USA is the NYC call center BPO alternative that delivers Manhattan-caliber customer experience without Manhattan overhead. 100% US-based, Eastern-time-aligned, and built for the regulated industries that define the New York economy.",
    ],
    bullets: [
      "Dedicated Eastern Time pod with NYC business-hours coverage and overnight overflow",
      "Deep experience with New York's regulated industries — FINRA, HIPAA, SEC, DFS",
      "Understanding of NYC business culture — fast, direct, and brand-conscious",
      "Bilingual English/Spanish agents for New York's multicultural customer base",
      "No long-term contracts — scale your NYC operation up or down on demand",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to outsource your NYC customer support the smart way?",
    accent: "NYC customer support",
    body: "Whether you are a Wall Street firm, a Hudson Yards media brand, or a Flatiron SaaS startup, Contact Center USA can stand up a dedicated NYC-hours team in under 48 hours. Get a free New York call center quote tailored to your volumes, channels, and industry.",
    ctaLabel: "Get a Free New York Call Center Quote",
    ctaHref: "/contact",
  },
];

export default function NewYorkPage() {
  return (
    <CityPageTemplate
      city="New York"
      state="New York"
      stateAbbr="NY"
      description="New York City is the undisputed capital of American commerce, home to Wall Street, Madison Avenue, and the headquarters of countless Fortune 500 companies. From the bustling trading floors of Lower Manhattan to the creative agencies of Midtown and the tech startups of Silicon Alley, NYC businesses operate at a speed and scale that demands exceptional customer support. With over 8.3 million residents and a metro area exceeding 20 million, the customer base here is massive, diverse, and expects nothing less than world-class service."
      businessLandscape="The New York business landscape is uniquely demanding. Companies compete on a global stage where customer experience is a key differentiator. Whether you are a fintech startup in the Flatiron District, a healthcare provider in the Upper East Side, or a media company in Hudson Yards, Contact Center USA provides the US-based call center support that keeps your customers engaged and your brand reputation strong. Our agents understand the fast-paced, multicultural nature of doing business in New York and deliver the professionalism your customers expect."
      industries={["finance", "tech", "media", "healthcare", "retail"]}
      population="8.3M"
      businesses="1M+"
      seoContent={seoContent}
    />
  );
}
