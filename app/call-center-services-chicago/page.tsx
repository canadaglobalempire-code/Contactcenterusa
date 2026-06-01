import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/shared/CityPageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Chicago Call Center Services | Contact Center USA",
  description:
    "US-based call center services for Chicago businesses. Get inbound, outbound, customer support, and multilingual coverage with a fast BPO quote.",
  keywords: [
    "call center services chicago",
    "chicago bpo",
    "chicago outsourced customer service",
    "chicago call center outsourcing",
    "chicagoland bpo services",
    "midwest call center",
    "illinois customer support outsourcing",
    "chicago contact center",
  ],
  alternates: { canonical: "/call-center-services-chicago" },
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Call Center Services in Chicago",
    heading: "The Chicago BPO partner built for Midwest work ethic and Loop-level professionalism.",
    accent: "Midwest work ethic",
    body: [
      "Contact Center USA is one of the best call center providers in Chicago — a 100% US-based Chicago BPO delivering Chicago outsourced customer service for LaSalle Street financial firms, Fulton Market tech companies, West Loop healthcare networks, and Chicagoland manufacturers.",
      "When Chicago businesses search for call center services Chicago that match Midwest standards of reliability and follow-through, they get Central-time-aligned agents, deep financial-services compliance, and a partner that treats every customer call like a handshake.",
    ],
    stats: [
      { stat: "CT", label: "Central-time-aligned coverage built for Chicago business hours" },
      { stat: "30+ yrs", label: "Experience supporting Midwest financial and logistics firms" },
      { stat: "24/7", label: "Follow-the-sun coverage for Chicagoland operations" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "Local In-City Call Center vs. Contact Center USA Nationwide BPO",
    intro:
      "Chicago companies weighing their options for call center outsourcing often compare a local Loop operation against a nationwide BPO. Here is how the two stack up for Chicago BPO buyers.",
    leftTitle: "Local Chicago In-City Call Center",
    rightTitle: "Contact Center USA Nationwide BPO",
    rows: [
      {
        label: "Hourly Agent Cost",
        left: "Chicago wage floors and Loop real estate push seat costs 20–40% above nationwide averages.",
        right: "Nationwide US talent with Midwest service quality at a fraction of Loop overhead.",
        leftYes: false,
      },
      {
        label: "Central Time Coverage",
        left: "Single Chicago site handles CT well but struggles with 24/7 coverage for financial and logistics clients.",
        right: "Dedicated CT pod plus multi-state US overflow for true 24/7 without surcharge.",
        leftYes: false,
      },
      {
        label: "Winter & Weather Continuity",
        left: "A Chicago blizzard or polar vortex can shut down a single local facility for days.",
        right: "Distributed US workforce across multiple states — weather in one region never downs your queue.",
        leftYes: false,
      },
      {
        label: "Ramp Speed",
        left: "Chicago hiring is steady but slow; 45–75 days to onboard a full team is typical.",
        right: "Pilot live in under 48 hours; full Chicago team ramped in under 2 weeks.",
        leftYes: false,
      },
      {
        label: "Financial Services Compliance",
        left: "Most local shops handle basic compliance but lack dedicated FINRA, PCI-DSS, and SOC 2 programs.",
        right: "Full compliance stack audited for LaSalle Street banks, brokerages, and derivatives firms.",
        leftYes: false,
      },
      {
        label: "Midwest Cultural Fit",
        left: "Native advantage — but a nationwide BPO can replicate with dedicated Chicago-hours pods.",
        right: "Dedicated Central-time team trained on Midwest communication norms and work ethic.",
        leftYes: true,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Onboarding for Chicago Businesses in 5 Steps",
    intro:
      "Every Chicago client — whether a Loop trading firm, a Fulton Market SaaS, or a Chicagoland logistics operator — onboards through the same fast, structured process.",
    steps: [
      {
        title: "Chicago Discovery Call",
        body: "30-minute call to map Central-time volumes, channels, industry, and compliance requirements.",
      },
      {
        title: "Solution Design",
        body: "Custom CT staffing plan, tech stack integration (Salesforce, Zendesk, HubSpot), and scaling model.",
      },
      {
        title: "Agent Training",
        body: "US agents trained on your Chicago brand voice, Midwest service norms, and industry-specific regs.",
      },
      {
        title: "Go Live",
        body: "Pilot launch in under 48 hours with Chicago client success manager and call quality QA.",
      },
      {
        title: "Scale & Optimize",
        body: "Weekly CX reviews, AI-powered call analytics, and flex capacity for Chicagoland demand cycles.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve in Chicago",
    intro:
      "From LaSalle Street finance to I-90 logistics, these are the Chicago industries where Contact Center USA delivers call center outsourcing.",
    items: [
      {
        icon: "landmark",
        stat: "FINRA",
        title: "Financial Services & Trading",
        body: "Support for LaSalle Street banks, CBOT/CME-adjacent firms, and Chicago fintech operations.",
      },
      {
        icon: "truck",
        stat: "Logistics",
        title: "Logistics & Transportation",
        body: "Dispatch support, carrier customer service, and 3PL intake for Chicago's national logistics hub.",
      },
      {
        icon: "factory",
        stat: "B2B",
        title: "Manufacturing & Industrial",
        body: "Dealer support, warranty claims, and B2B customer service for Chicagoland manufacturers.",
      },
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Hospital Systems",
        body: "Patient scheduling, insurance intake, and HIPAA-compliant support for Chicagoland hospital networks.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Chicago Businesses Choose Contact Center USA for Chicago Outsourced Customer Service",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Chicago customers expect what Chicago businesses deliver: straight talk, follow-through, and honest effort. Offshore providers cannot replicate that cultural fit, and local Loop call centers cannot match the cost structure or 24/7 resilience of a nationwide BPO.",
      "Contact Center USA bridges the gap — a 100% US-based Chicago BPO alternative with a dedicated Central-time team, deep Midwest industry expertise, and the scale to grow with your Chicagoland business.",
    ],
    bullets: [
      "Dedicated Central-time pod aligned with Chicago business hours plus 24/7 overflow",
      "Deep expertise in Chicago's anchor industries — finance, logistics, manufacturing, healthcare",
      "Midwest cultural fluency built into agent training and QA",
      "Weather-resilient distributed US workforce — no single-site blizzard risk",
      "No long-term contracts — scale for Chicagoland growth without fixed overhead",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to partner with a Chicago BPO that actually gets the Midwest?",
    accent: "gets the Midwest",
    body: "Whether you are a LaSalle Street trading firm, a Chicagoland manufacturer, or a West Loop SaaS startup, Contact Center USA can stand up a dedicated CT team in under 48 hours. Get a free Chicago call center quote tailored to your industry.",
    ctaLabel: "Get a Free Chicago Call Center Quote",
    ctaHref: "/contact",
  },
];

export default function ChicagoPage() {
  return (
    <CityPageTemplate
      city="Chicago"
      state="Illinois"
      stateAbbr="IL"
      description="Chicago stands as the economic engine of the Midwest, a city built on commerce, industry, and relentless ambition. The Loop serves as the nerve center of a financial district that rivals New York, while the Chicago Board of Trade and CME Group make it the derivatives capital of the world. Beyond finance, the city's manufacturing heritage has evolved into a modern logistics and technology hub, with companies along the I-90 corridor and in Fulton Market driving innovation. With 2.7 million residents and a deep talent pool, Chicago businesses need customer support that matches their no-nonsense work ethic."
      businessLandscape="Chicago's central location and world-class infrastructure make it a natural headquarters for companies that serve the entire nation. From the trading firms of LaSalle Street to the tech campuses of the West Loop and the healthcare networks stretching across Chicagoland, businesses here demand reliability and professionalism in every customer interaction. Contact Center USA provides Chicago companies with dedicated US-based agents who understand Midwestern values of hard work, honesty, and follow-through — qualities that translate directly into higher customer satisfaction and retention."
      industries={["finance", "manufacturing", "tech", "logistics", "healthcare"]}
      population="2.7M"
      businesses="400K+"
      seoContent={seoContent}
    />
  );
}
