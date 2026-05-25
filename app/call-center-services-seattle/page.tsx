import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/shared/CityPageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Call Center Services in Seattle",
  description:
    "US-based call center services for Seattle businesses. Get inbound, outbound, customer support, and multilingual coverage with a fast BPO quote.",
  keywords: [
    "call center services seattle",
    "seattle bpo services",
    "pnw customer service outsourcing",
    "seattle call center outsourcing",
    "pacific northwest bpo",
    "puget sound call center",
    "seattle contact center",
    "washington state bpo",
  ],
  alternates: { canonical: "/call-center-services-seattle" },
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Call Center Services in Seattle",
    heading: "The Seattle BPO services partner built for the city that invented modern customer experience.",
    accent: "modern customer experience",
    body: [
      "Contact Center USA is one of the best call center providers in Seattle — a 100% US-based Seattle BPO services operation delivering PNW customer service outsourcing for Amazon and Microsoft ecosystem partners, South Lake Union tech campuses, Boeing aerospace supply chain, and UW Medicine and Swedish healthcare networks across Puget Sound.",
      "When Seattle businesses search for call center services Seattle that match the PNW's obsession with customer experience and operational excellence, they get Pacific-time-aligned agents, cloud and aerospace-industry fluency, and a BPO partner who embodies the Pacific Northwest values of quality and customer-first thinking.",
    ],
    stats: [
      { stat: "PT", label: "Dedicated Pacific-time pod for Seattle business hours" },
      { stat: "Cloud", label: "Agents fluent in AWS, Azure, and modern cloud CX tooling" },
      { stat: "<48h", label: "Pilot go-live for Seattle and PNW businesses" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "Local In-City Call Center vs. Contact Center USA Nationwide BPO",
    intro:
      "Seattle companies weighing call center options often compare a local Puget Sound operation against a nationwide BPO. Here is how the two compare for Seattle BPO services buyers.",
    leftTitle: "Local Seattle In-City Call Center",
    rightTitle: "Contact Center USA Nationwide BPO",
    rows: [
      {
        label: "Hourly Agent Cost",
        left: "Seattle Amazon/Microsoft wage pressure has lifted local seat costs 35–50% above nationwide.",
        right: "Nationwide US talent pool at cost structures well below Puget Sound operating cost.",
        leftYes: false,
      },
      {
        label: "Earthquake & Weather Continuity",
        left: "PNW seismic risk and winter storm events have caused single-site Seattle outages.",
        right: "Distributed US workforce across multiple states — PNW weather and seismic events never down your queue.",
        leftYes: false,
      },
      {
        label: "Cloud & Tech Tooling",
        left: "Local shops vary on modern cloud CX — many lack AWS/Azure-native tool fluency.",
        right: "Agents certified on AWS Connect, Azure, Zendesk, Salesforce, and modern cloud CX stacks.",
        leftYes: false,
      },
      {
        label: "Ramp Speed",
        left: "Seattle hiring is extremely competitive with Amazon and Microsoft; 60–90 day ramps are typical.",
        right: "Pilot live in under 48 hours; full Seattle team in under 2 weeks.",
        leftYes: false,
      },
      {
        label: "24/7 Ecommerce Support",
        left: "Single-site Seattle operations struggle with 24/7 coverage for global ecommerce customer bases.",
        right: "Follow-the-sun US coverage for ecommerce with PT alignment for Seattle business hours.",
        leftYes: false,
      },
      {
        label: "Aerospace & Healthcare Compliance",
        left: "Few local shops have dedicated ITAR-aware aerospace and HIPAA programs at scale.",
        right: "Full compliance stack — ITAR-aware, SOC 2, HIPAA, PCI-DSS — for Boeing and UW Medicine clients.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Onboarding for Seattle Businesses in 5 Steps",
    intro:
      "From South Lake Union tech to Everett aerospace to Puget Sound healthcare, every Seattle client onboards through the same fast, cloud-fluent process.",
    steps: [
      {
        title: "Seattle Discovery Call",
        body: "30-minute call to scope PT volumes, cloud tooling, and Seattle industry compliance.",
      },
      {
        title: "Solution Design",
        body: "Custom PT staffing plan, AWS/Azure CX tool integration, and elastic surge capacity.",
      },
      {
        title: "Agent Training",
        body: "US agents trained on your Seattle brand voice, PNW customer values, and industry-specific compliance.",
      },
      {
        title: "Go Live",
        body: "Pilot launch in under 48 hours with Seattle client success manager and call quality QA.",
      },
      {
        title: "Scale & Optimize",
        body: "Weekly CX scorecards, AI-driven call insights, and surge capacity for Seattle product launches.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve in Seattle",
    intro:
      "These are the Seattle industries where Contact Center USA delivers cloud-fluent call center outsourcing with PNW quality standards.",
    items: [
      {
        icon: "laptop",
        stat: "Cloud",
        title: "Cloud, SaaS & Technology",
        body: "Tier 1–3 technical support for AWS/Azure ecosystem partners and South Lake Union tech.",
      },
      {
        icon: "shopping-bag",
        stat: "DTC",
        title: "Ecommerce & Marketplaces",
        body: "Omnichannel support for PNW-born ecommerce brands and Amazon-adjacent marketplaces.",
      },
      {
        icon: "plane",
        stat: "Aerospace",
        title: "Aerospace & Defense",
        body: "ITAR-aware support for Boeing supply chain, Everett operations, and PNW defense firms.",
      },
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare Systems",
        body: "Patient scheduling and HIPAA-compliant support for UW Medicine, Swedish, and Providence.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Seattle Businesses Choose Contact Center USA for PNW Customer Service Outsourcing",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Seattle customers expect the cloud-era customer experience standards the PNW invented — fast, thoughtful, and technically proficient. Offshore providers cannot deliver that cultural fit, and local Puget Sound call centers cannot match the cost structure or seismic resilience a distributed nationwide BPO provides.",
      "Contact Center USA is the Seattle BPO services alternative that combines Pacific-time alignment, cloud CX tooling fluency, and aerospace/healthcare compliance — delivered from 100% US-based facilities at a fraction of Seattle overhead.",
    ],
    bullets: [
      "Dedicated Pacific-time pod aligned with Seattle business hours plus 24/7 ecommerce overflow",
      "Cloud-certified agents fluent in AWS Connect, Azure, Zendesk, Salesforce, and modern CX tooling",
      "Seismic- and weather-resilient distributed US workforce — no single-site PNW risk",
      "Full compliance stack — ITAR-aware, SOC 2, HIPAA, PCI-DSS — for Seattle regulated industries",
      "Elastic surge capacity for product launches, Prime Day-style events, and holiday peaks",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to partner with a Seattle BPO that matches the PNW's customer experience standards?",
    accent: "customer experience standards",
    body: "Whether you are a South Lake Union tech firm, a Boeing supply chain partner, or a UW Medicine affiliate, Contact Center USA can stand up a dedicated PT team in under 48 hours. Get a free Seattle call center quote tailored to your tech stack.",
    ctaLabel: "Get a Free Seattle Call Center Quote",
    ctaHref: "/contact",
  },
];

export default function SeattlePage() {
  return (
    <CityPageTemplate
      city="Seattle"
      state="Washington"
      stateAbbr="WA"
      description="Seattle is a global technology capital and the home of Amazon, Microsoft, Boeing, and Starbucks — companies that have shaped entire industries. The Emerald City's South Lake Union neighborhood has become the epicenter of Amazon's sprawling campus, while the Eastside cities of Redmond and Bellevue house Microsoft and a growing roster of cloud computing, gaming, and AI companies. With 750,000 residents, no state income tax, and a workforce that ranks among the most educated in the nation, Seattle offers businesses access to world-class talent and a culture of relentless innovation."
      businessLandscape="Seattle's business community sets the global standard for customer experience — after all, this is the city that invented one-click shopping and two-day delivery. Tech and ecommerce companies here need call center partners who can keep pace with innovation and integrate with sophisticated platforms. Boeing and the aerospace supply chain require precision communication and security protocols. Healthcare systems like UW Medicine and Swedish Medical need compliant patient support across the Puget Sound region. Contact Center USA serves Seattle businesses with US-based agents who embody the Pacific Northwest's values of quality, sustainability, and customer-first thinking."
      industries={["tech", "ecommerce", "aerospace", "healthcare", "logistics"]}
      population="750K"
      businesses="120K+"
      seoContent={seoContent}
    />
  );
}
