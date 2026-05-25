import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/shared/CityPageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Call Center Services in Dallas",
  description:
    "US-based call center services for Dallas businesses. Get inbound, outbound, customer support, and multilingual coverage with a fast BPO quote.",
  keywords: [
    "call center services dallas",
    "dallas bpo services",
    "dallas call center outsourcing",
    "dfw customer service outsourcing",
    "telecom corridor bpo",
    "dallas contact center",
    "texas bpo services",
    "dallas customer support",
  ],
  alternates: { canonical: "/call-center-services-dallas" },
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Call Center Services in Dallas",
    heading: "The Dallas BPO services partner for DFW Fortune 500s, telecom giants, and fast-growing finance firms.",
    accent: "DFW Fortune 500s",
    body: [
      "Contact Center USA is one of the best call center providers in Dallas — a 100% US-based Dallas BPO services operation delivering Dallas call center outsourcing for Uptown Fortune 500 HQs, Richardson Telecom Corridor giants, Park Cities financial firms, and the real estate and healthcare leaders across the DFW metroplex.",
      "When Dallas businesses search for call center services Dallas that can handle the volume and velocity of the fourth-largest metro in America, they get Central-time-aligned agents, elastic capacity for DFW growth cycles, and a BPO partner built for Texas-scale operations.",
    ],
    stats: [
      { stat: "CT", label: "Dedicated Central-time pod for DFW business hours" },
      { stat: "Scale", label: "Elastic capacity for Dallas Fortune 500 volumes and surges" },
      { stat: "<48h", label: "Pilot go-live for Dallas businesses" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "Local In-City Call Center vs. Contact Center USA Nationwide BPO",
    intro:
      "Dallas companies weighing call center options often compare a local DFW operation against a nationwide BPO. Here is how the two compare for Dallas BPO services buyers.",
    leftTitle: "Local Dallas In-City Call Center",
    rightTitle: "Contact Center USA Nationwide BPO",
    rows: [
      {
        label: "Hourly Agent Cost",
        left: "DFW is more affordable than coastal cities, but corporate-relocation demand has lifted seat costs.",
        right: "Nationwide US talent pool at cost structures below Dallas local rates.",
        leftYes: false,
      },
      {
        label: "Tornado & Severe Weather Continuity",
        left: "DFW tornado alley weather has caused repeated single-site local outages.",
        right: "Distributed US workforce across multiple states — Texas weather never downs your queue.",
        leftYes: false,
      },
      {
        label: "24/7 Fortune 500 Support",
        left: "Single-site Dallas operations struggle to serve Fortune 500 clients with global 24/7 needs.",
        right: "Follow-the-sun US coverage aligned to DFW business hours and global client operations.",
        leftYes: false,
      },
      {
        label: "Ramp Speed",
        left: "Dallas hiring is competitive with Fortune 500 relocations; 45–75 day ramps are typical.",
        right: "Pilot live in under 48 hours; full Dallas team in under 2 weeks.",
        leftYes: false,
      },
      {
        label: "Financial Services Compliance",
        left: "Local shops handle basic TCPA and PCI-DSS; few have dedicated SOC 2 and FINRA programs.",
        right: "Full HIPAA, PCI-DSS, TCPA, FINRA, and SOC 2 stack audited for DFW financial clients.",
        leftYes: false,
      },
      {
        label: "Surge Capacity for Real Estate Peaks",
        left: "Fixed local headcount limits surge for DFW's high-velocity real estate market.",
        right: "Elastic US capacity — scale up for DFW real estate peaks without long-term commitment.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Onboarding for Dallas Businesses in 5 Steps",
    intro:
      "From Uptown Fortune 500s to Richardson Telecom Corridor firms, every Dallas client onboards through the same fast, scalable process.",
    steps: [
      {
        title: "Dallas Discovery Call",
        body: "30-minute call to scope Central-time volumes, DFW industry compliance, and channel mix.",
      },
      {
        title: "Solution Design",
        body: "Custom CT staffing plan, elastic surge capacity, and integration with Salesforce, Zendesk, or ServiceNow.",
      },
      {
        title: "Agent Training",
        body: "US agents trained on your Dallas brand voice, Texas business norms, and industry compliance.",
      },
      {
        title: "Go Live",
        body: "Pilot launch in under 48 hours with Dallas client success manager and call quality QA.",
      },
      {
        title: "Scale & Optimize",
        body: "Weekly CX scorecards, AI-driven insights, and elastic capacity for DFW growth cycles.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve in Dallas",
    intro:
      "These are the Dallas industries where Contact Center USA delivers call center outsourcing at the scale DFW Fortune 500s and fast-growing firms demand.",
    items: [
      {
        icon: "landmark",
        stat: "Finance",
        title: "Financial Services",
        body: "Support for Park Cities banks, Uptown wealth managers, and DFW fintech firms.",
      },
      {
        icon: "signal",
        stat: "Telecom",
        title: "Telecom & Communications",
        body: "Tier 1–3 technical support for Richardson Telecom Corridor carriers and equipment vendors.",
      },
      {
        icon: "home",
        stat: "Real Estate",
        title: "Real Estate & Proptech",
        body: "Lead qualification and transaction support for DFW's high-velocity real estate market.",
      },
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Hospital Systems",
        body: "Patient scheduling and HIPAA-compliant support for DFW hospital networks.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Dallas Businesses Choose Contact Center USA for Dallas Call Center Outsourcing",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Dallas customers expect the professionalism of a Fortune 500 city and the directness of Texas business culture. Offshore providers cannot deliver that fit, and local DFW call centers cannot match the scale, compliance, or weather resilience a nationwide BPO provides.",
      "Contact Center USA is the Dallas BPO services alternative that combines Central-time alignment, elastic surge capacity, and deep financial-services and telecom compliance — with the distributed resilience DFW tornado season demands.",
    ],
    bullets: [
      "Dedicated Central-time pod aligned with DFW business hours and 24/7 Fortune 500 overflow",
      "Elastic surge capacity for DFW real estate peaks, telecom rollouts, and healthcare cycles",
      "Weather-resilient distributed US workforce — no single-site tornado risk",
      "Full compliance stack for DFW finance, telecom, healthcare, and real estate",
      "No long-term contracts — scale for DFW growth without fixed overhead",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to partner with a Dallas BPO built for Fortune 500 scale?",
    accent: "Fortune 500 scale",
    body: "Whether you are an Uptown Fortune 500, a Richardson telecom firm, or a Park Cities financial leader, Contact Center USA can stand up a dedicated CT team in under 48 hours. Get a free Dallas call center quote tailored to your volumes.",
    ctaLabel: "Get a Free Dallas Call Center Quote",
    ctaHref: "/contact",
  },
];

export default function DallasPage() {
  return (
    <CityPageTemplate
      city="Dallas"
      state="Texas"
      stateAbbr="TX"
      description="Dallas is a corporate powerhouse and the economic anchor of the Dallas-Fort Worth metroplex — the fourth-largest metro area in the United States. The city's Uptown district and Arts District house the headquarters of AT&T, Texas Instruments, and numerous other Fortune 500 companies. With no state income tax, a central geographic location, and a pro-business regulatory environment, Dallas has attracted a wave of corporate relocations from California and the Northeast, making it one of the fastest-growing business centers in the country."
      businessLandscape="The Dallas business ecosystem spans financial services firms in the Park Cities, telecom giants along the Telecom Corridor in Richardson, healthcare systems throughout North Texas, and a burgeoning real estate development market fueled by the region's explosive population growth. Companies in the DFW metroplex need call center partners who can handle high-volume operations with the professionalism and efficiency that Texas business culture demands. Contact Center USA provides Dallas businesses with scalable, US-based call center solutions that support everything from customer service and sales to technical support and appointment setting."
      industries={["finance", "tech", "telecom", "healthcare", "real estate"]}
      population="1.3M"
      businesses="200K+"
      seoContent={seoContent}
    />
  );
}
