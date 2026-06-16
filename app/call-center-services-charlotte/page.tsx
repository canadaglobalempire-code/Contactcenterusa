import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/shared/CityPageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";
import { pageMeta } from "@/lib/seo-config";

const title = "Charlotte Call Center Services | Contact Center USA";
const description =
  "US-based call center services for Charlotte businesses. Get inbound, outbound, customer support, and multilingual coverage with a fast BPO quote.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "call center services charlotte",
    "charlotte bpo",
    "nc customer service outsourcing",
    "charlotte call center outsourcing",
    "queen city bpo",
    "banking call center charlotte",
    "charlotte contact center",
    "north carolina bpo",
  ],
  alternates: { canonical: "/call-center-services-charlotte" },
  ...pageMeta(title, description, "/call-center-services-charlotte"),
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Call Center Services in Charlotte",
    heading: "The Charlotte BPO built for the second-largest banking center in America.",
    accent: "banking center",
    body: [
      "Contact Center USA is one of the best call center providers in Charlotte — a 100% US-based Charlotte BPO delivering NC customer service outsourcing for Bank of America and Truist headquarters, Wells Fargo's major operations, Atrium Health and Novant Health networks, and the South End tech firms that are diversifying the Queen City beyond banking.",
      "When Charlotte businesses search for call center services Charlotte that combine banking-grade compliance with Southern hospitality, they get Eastern-time-aligned agents, Dodd-Frank and SOC 2-compliant operations, and a BPO partner who understands that in Charlotte banking, trust is everything.",
    ],
    stats: [
      { stat: "ET", label: "Dedicated Eastern-time pod for Charlotte business hours" },
      { stat: "SOC 2", label: "Banking-grade compliance for Queen City financial clients" },
      { stat: "24/7", label: "Around-the-clock coverage for financial and healthcare operations" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "Local In-City Call Center vs. Contact Center USA Nationwide BPO",
    intro:
      "Charlotte companies weighing call center options often compare a local Uptown shop with a nationwide BPO. Here is how the two compare for Charlotte BPO buyers.",
    leftTitle: "Local Charlotte In-City Call Center",
    rightTitle: "Contact Center USA Nationwide BPO",
    rows: [
      {
        label: "Hourly Agent Cost",
        left: "Charlotte banking wage pressure has lifted seat costs significantly in the last 5 years.",
        right: "Nationwide US talent pool at cost structures below Charlotte local rates.",
        leftYes: false,
      },
      {
        label: "Hurricane & Weather Continuity",
        left: "Charlotte faces hurricane remnants and winter ice events that disrupt single-site local operations.",
        right: "Distributed US workforce across multiple states — Carolinas weather never downs your queue.",
        leftYes: false,
      },
      {
        label: "Banking Compliance Depth",
        left: "Local shops handle basic compliance, but few have dedicated Dodd-Frank and FFIEC programs.",
        right: "Full banking compliance stack — SOC 2, PCI-DSS, FFIEC, Dodd-Frank — for BOA/Truist-caliber clients.",
        leftYes: false,
      },
      {
        label: "Ramp Speed",
        left: "Charlotte hiring is tight with banking industry demand; 45–75 day ramps typical.",
        right: "Pilot live in under 48 hours; full Charlotte team in under 2 weeks.",
        leftYes: false,
      },
      {
        label: "24/7 Banking Support",
        left: "Single-site Charlotte operations struggle with 24/7 coverage for national banking clients.",
        right: "Follow-the-sun US coverage for banking clients with ET alignment for business-hour peaks.",
        leftYes: false,
      },
      {
        label: "Surge Capacity for Product Launches",
        left: "Fixed local headcount limits surge for credit card launches, mortgage rate changes, or crises.",
        right: "Elastic US capacity — scale for banking product launches without long-term commitment.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Onboarding for Charlotte Businesses in 5 Steps",
    intro:
      "From Bank of America to Atrium Health to South End tech startups, every Charlotte client onboards through the same fast, compliance-first process.",
    steps: [
      {
        title: "Charlotte Discovery Call",
        body: "30-minute call to scope Eastern-time volumes, banking or healthcare compliance, and channel mix.",
      },
      {
        title: "Solution Design",
        body: "Custom ET staffing plan, SOC 2-compliant tooling, and integration with banking and Epic platforms.",
      },
      {
        title: "Agent Training",
        body: "US agents trained on your Charlotte brand voice, Southern service norms, and banking regulations.",
      },
      {
        title: "Go Live",
        body: "Pilot launch in under 48 hours with Charlotte client success manager and call quality QA.",
      },
      {
        title: "Scale & Optimize",
        body: "Weekly CX reviews, AI-driven insights, and surge capacity for banking product cycles.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve in Charlotte",
    intro:
      "These are the Charlotte industries where Contact Center USA delivers banking-grade call center outsourcing with Carolina hospitality.",
    items: [
      {
        icon: "landmark",
        stat: "Banking",
        title: "Banking & Financial Services",
        body: "Support for Bank of America, Truist, Wells Fargo, and Queen City fintech operations.",
      },
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare Systems",
        body: "Patient scheduling and HIPAA-compliant support for Atrium Health and Novant Health.",
      },
      {
        icon: "laptop",
        stat: "Tech",
        title: "Technology & Fintech",
        body: "Tier 1–3 technical support for South End and NoDa tech firms and Charlotte fintech.",
      },
      {
        icon: "zap",
        stat: "Energy",
        title: "Energy & Utilities",
        body: "Customer service for Duke Energy and Carolina utility operations.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Charlotte Businesses Choose Contact Center USA for NC Customer Service Outsourcing",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Charlotte customers expect banking-grade trust, Carolina hospitality, and the operational resilience of a partner that matches the Queen City's reputation for reliability. Offshore providers cannot deliver that fit, and local Uptown call centers cannot match the compliance depth a major banking center requires.",
      "Contact Center USA is the Charlotte BPO alternative that combines Eastern-time alignment, banking-grade SOC 2 and FFIEC compliance, and Southern service culture — delivered from 100% US-based facilities with nationwide scale.",
    ],
    bullets: [
      "Dedicated Eastern-time pod aligned with Charlotte business hours plus 24/7 banking overflow",
      "Banking-grade compliance — SOC 2, PCI-DSS, FFIEC, Dodd-Frank — built in",
      "Weather-resilient distributed US workforce — no single-site Carolinas risk",
      "Deep expertise in Charlotte's anchor industries — banking, healthcare, tech, energy",
      "Elastic surge capacity for banking product launches and financial events",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to partner with a Charlotte BPO built for banking trust?",
    accent: "banking trust",
    body: "Whether you are a Bank of America affiliate, an Atrium Health partner, or a South End fintech startup, Contact Center USA can stand up a dedicated ET team in under 48 hours. Get a free Charlotte call center quote tailored to your industry.",
    ctaLabel: "Get a Free Charlotte Call Center Quote",
    ctaHref: "/contact",
  },
];

export default function CharlottePage() {
  return (
    <CityPageTemplate
      city="Charlotte"
      state="North Carolina"
      stateAbbr="NC"
      description="Charlotte is the second-largest banking center in the United States, trailing only New York City in total banking assets. The Queen City is headquarters to Bank of America and Truist Financial, and hosts major operations for Wells Fargo, creating a financial services ecosystem that employs hundreds of thousands of professionals. With 880,000 residents and one of the fastest growth rates among major US cities, Charlotte has diversified beyond banking into technology, healthcare, and energy, attracting companies drawn to its talent pipeline, quality of life, and strategic Southeast location."
      businessLandscape="Charlotte's Uptown financial district and South End innovation corridor form the backbone of a business community that values professionalism, compliance, and customer trust. Banking and financial services companies need call center partners who understand regulatory requirements like Dodd-Frank, SOC 2, and PCI-DSS. The city's growing healthcare sector, anchored by Atrium Health and Novant Health, requires HIPAA-compliant patient communication. And Charlotte's emerging tech scene needs agile, scalable support. Contact Center USA serves Charlotte businesses with US-based agents trained in financial services protocols and the Southern hospitality that characterizes business in the Carolinas."
      industries={["banking", "finance", "tech", "healthcare", "energy"]}
      population="880K"
      businesses="100K+"
      seoContent={seoContent}
    />
  );
}
