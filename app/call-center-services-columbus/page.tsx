import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/shared/CityPageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";
import { pageMeta } from "@/lib/seo-config";

const title = "Columbus Call Center Services | Contact Center USA";
const description =
  "US-based call center services for Columbus businesses. Get inbound, outbound, customer support, and multilingual coverage with a fast BPO quote.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "call center services columbus",
    "columbus ohio bpo",
    "columbus call center outsourcing",
    "ohio customer service outsourcing",
    "midwest insurance call center",
    "columbus contact center",
    "ohio bpo services",
    "insurance call center ohio",
  ],
  alternates: { canonical: "/call-center-services-columbus" },
  ...pageMeta(title, description, "/call-center-services-columbus"),
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Call Center Services in Columbus",
    heading: "The Columbus Ohio BPO partner built for the insurance capital of the Midwest.",
    accent: "insurance capital",
    body: [
      "Contact Center USA is one of the best call center providers in Columbus — a 100% US-based Columbus Ohio BPO delivering Columbus call center outsourcing for Nationwide, Progressive, Huntington Bank, OhioHealth, and the Short North and Grandview tech firms that have made Columbus one of the Midwest's most innovative business centers.",
      "When Columbus businesses search for call center services Columbus that combine insurance-industry depth, Ohio State talent density, and Midwestern reliability, they get Eastern-time-aligned agents, insurance- and healthcare-compliant operations, and a BPO partner who understands the values that drive Central Ohio business.",
    ],
    stats: [
      { stat: "ET", label: "Dedicated Eastern-time pod for Columbus business hours" },
      { stat: "Insurance", label: "Specialist compliance for Nationwide, Progressive, and Ohio carriers" },
      { stat: "24/7", label: "Around-the-clock coverage for claims and customer service" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "Local In-City Call Center vs. Contact Center USA Nationwide BPO",
    intro:
      "Columbus companies weighing call center options often compare a local Central Ohio shop with a nationwide BPO. Here is how the two stack up for Columbus Ohio BPO buyers.",
    leftTitle: "Local Columbus In-City Call Center",
    rightTitle: "Contact Center USA Nationwide BPO",
    rows: [
      {
        label: "Hourly Agent Cost",
        left: "Columbus is cost-competitive, but insurance wage pressure has lifted local seat costs.",
        right: "Nationwide US talent pool at cost structures at or below Columbus local rates.",
        leftYes: false,
      },
      {
        label: "Winter & Weather Continuity",
        left: "Ohio winter storms and ice events have caused single-site Columbus outages.",
        right: "Distributed US workforce across multiple states — Midwest weather never downs your queue.",
        leftYes: false,
      },
      {
        label: "Insurance & Claims Compliance",
        left: "Local shops handle basic compliance, but few have dedicated NAIC and state DOI programs.",
        right: "Full insurance compliance stack — NAIC, state DOIs, TCPA — built for Ohio carriers.",
        leftYes: false,
      },
      {
        label: "Ramp Speed",
        left: "Columbus hiring is strong thanks to OSU, but 30–60 days to ramp full teams is typical.",
        right: "Pilot live in under 48 hours; full Columbus team in under 2 weeks.",
        leftYes: false,
      },
      {
        label: "CAT Claims Surge",
        left: "Fixed local headcount cannot handle post-storm or CAT event claims volume spikes.",
        right: "Elastic US capacity — surge 10x for CAT events without long-term commitment.",
        leftYes: false,
      },
      {
        label: "Midwest Cultural Fit",
        left: "Native advantage — but a nationwide BPO can replicate with dedicated Columbus-hours pods.",
        right: "Dedicated Eastern-time team trained on Midwest communication norms.",
        leftYes: true,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Onboarding for Columbus Businesses in 5 Steps",
    intro:
      "From Nationwide to OhioHealth to Short North startups, every Columbus client onboards through the same fast, structured process.",
    steps: [
      {
        title: "Columbus Discovery Call",
        body: "30-minute call to scope Eastern-time volumes, insurance or healthcare compliance, and channel mix.",
      },
      {
        title: "Solution Design",
        body: "Custom ET staffing plan, insurance-compliant tooling, and CAT-surge capacity.",
      },
      {
        title: "Agent Training",
        body: "US agents trained on your Columbus brand voice, Midwest service norms, and industry regs.",
      },
      {
        title: "Go Live",
        body: "Pilot launch in under 48 hours with Columbus client success manager and call quality QA.",
      },
      {
        title: "Scale & Optimize",
        body: "Weekly CX reviews, AI-driven call analytics, and surge capacity for claims cycles.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve in Columbus",
    intro:
      "These are the Columbus industries where Contact Center USA delivers call center outsourcing with Midwestern reliability and insurance-industry depth.",
    items: [
      {
        icon: "shield",
        stat: "Insurance",
        title: "Insurance & Claims",
        body: "Claims intake, policy service, and renewal support for Nationwide, Progressive, and Ohio carriers.",
      },
      {
        icon: "landmark",
        stat: "Finance",
        title: "Financial Services",
        body: "Support for Huntington Bank, JPMorgan Chase Ohio operations, and Columbus fintech.",
      },
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare Systems",
        body: "Patient scheduling and HIPAA-compliant support for OhioHealth and Ohio State Wexner.",
      },
      {
        icon: "laptop",
        stat: "Tech",
        title: "Technology & SaaS",
        body: "Tier 1–3 technical support for Short North, Grandview, and Columbus startup tech firms.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Columbus Businesses Choose Contact Center USA for Columbus Call Center Outsourcing",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Columbus customers expect Midwestern reliability, insurance-industry precision, and the genuine care that defines doing business in Central Ohio. Offshore providers cannot deliver that fit, and local Columbus call centers cannot match the surge capacity and weather resilience a nationwide BPO provides.",
      "Contact Center USA is the Columbus Ohio BPO alternative that combines Eastern-time alignment, insurance-industry compliance, and Midwestern cultural fit — with the distributed resilience Midwest winter weather demands.",
    ],
    bullets: [
      "Dedicated Eastern-time pod aligned with Columbus business hours plus 24/7 claims overflow",
      "Insurance-industry compliance — NAIC, state DOIs, TCPA, PCI-DSS — built in",
      "Weather-resilient distributed US workforce — no single-site Midwest winter risk",
      "Elastic surge capacity for CAT claims, renewal cycles, and storm events",
      "Deep expertise in Columbus's anchor industries — insurance, finance, healthcare, tech",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to partner with a Columbus Ohio BPO built for the insurance capital of the Midwest?",
    accent: "Midwest",
    body: "Whether you are a Nationwide affiliate, an OhioHealth partner, or a Short North tech startup, Contact Center USA can stand up a dedicated ET team in under 48 hours. Get a free Columbus call center quote tailored to your industry.",
    ctaLabel: "Get a Free Columbus Call Center Quote",
    ctaHref: "/contact",
  },
];

export default function ColumbusPage() {
  return (
    <CityPageTemplate
      city="Columbus"
      state="Ohio"
      stateAbbr="OH"
      description="Columbus is Ohio's capital and largest city, a Midwestern gem that has quietly become one of the country's most innovative business centers. Home to Ohio State University — one of the largest universities in the nation — Columbus boasts a young, educated workforce that fuels its growing technology sector. The city is also the insurance capital of the Midwest, with Nationwide, Progressive, and dozens of other carriers headquartered here. With 900,000 residents and a cost of living well below the national average, Columbus offers businesses an ideal combination of talent, affordability, and market access."
      businessLandscape="Columbus's business ecosystem is remarkably balanced, spanning insurance and financial services downtown, a booming tech scene in the Short North and Grandview districts, healthcare systems led by Ohio State Wexner Medical Center and OhioHealth, and an education sector powered by more than a dozen colleges and universities. The city's central location provides easy access to 60% of the US population within a day's drive, making it a natural hub for customer service operations. Contact Center USA provides Columbus businesses with dependable, US-based call center support that reflects the Midwestern values of integrity, hard work, and genuine customer care."
      industries={["insurance", "finance", "tech", "healthcare", "education"]}
      population="900K"
      businesses="100K+"
      seoContent={seoContent}
    />
  );
}
