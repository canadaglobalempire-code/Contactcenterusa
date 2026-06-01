import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/shared/CityPageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Philadelphia Call Center Services | Contact Center USA",
  description:
    "US-based call center services for Philadelphia businesses. Get inbound, outbound, customer support, and multilingual coverage with a fast BPO quote.",
  keywords: [
    "call center services philadelphia",
    "philly bpo",
    "philadelphia customer service outsourcing",
    "philadelphia call center outsourcing",
    "center city bpo",
    "pennsylvania call center",
    "philly customer support",
    "philadelphia contact center",
  ],
  alternates: { canonical: "/call-center-services-philadelphia" },
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Call Center Services in Philadelphia",
    heading: "The Philly BPO partner built for healthcare, pharma, and education powerhouses.",
    accent: "healthcare, pharma, and education",
    body: [
      "Contact Center USA is one of the best call center providers in Philadelphia — a 100% US-based Philly BPO delivering Philadelphia customer service outsourcing for Penn Medicine and Jefferson Health networks, Center City financial firms, University City research institutions, and the life sciences corridor that stretches across Eastern PA.",
      "When Philadelphia businesses search for call center services Philadelphia that match the city's straight-talking professionalism, they get Eastern-time-aligned agents, HIPAA and GxP-ready operations, and a partner with deep experience in the anchor industries of the City of Brotherly Love.",
    ],
    stats: [
      { stat: "ET", label: "Dedicated Eastern-time pod for Philadelphia business hours" },
      { stat: "HIPAA", label: "Compliance built for Penn Medicine and Jefferson Health partners" },
      { stat: "<48h", label: "Pilot go-live for Philadelphia businesses" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "Local In-City Call Center vs. Contact Center USA Nationwide BPO",
    intro:
      "Philadelphia companies weighing call center options often compare a local Center City shop with a nationwide BPO. Here is how the two compare for Philly BPO buyers.",
    leftTitle: "Local Philadelphia In-City Call Center",
    rightTitle: "Contact Center USA Nationwide BPO",
    rows: [
      {
        label: "Hourly Agent Cost",
        left: "Philly is more affordable than NYC, but Center City real estate still lifts seat costs.",
        right: "Nationwide US talent pool at cost structures below Philadelphia local rates.",
        leftYes: false,
      },
      {
        label: "Northeast Corridor Continuity",
        left: "Single Philly site faces nor'easter and winter weather risk common to the Northeast Corridor.",
        right: "Distributed US workforce across multiple states — NE Corridor weather never downs your queue.",
        leftYes: false,
      },
      {
        label: "24/7 Healthcare Coverage",
        left: "Single-site operations struggle to cover overnight patient inquiries for PA hospital networks.",
        right: "True 24/7 US coverage for hospital systems, with ET alignment for business-hour peaks.",
        leftYes: false,
      },
      {
        label: "Ramp Speed",
        left: "Philly hiring is steady but slow; 45–75 days to onboard a full team is typical.",
        right: "Pilot live in under 48 hours; full Philadelphia team in under 2 weeks.",
        leftYes: false,
      },
      {
        label: "Healthcare & Pharma Compliance",
        left: "Local shops handle basic HIPAA but lack dedicated GxP and pharma-compliance programs.",
        right: "Full HIPAA, GxP, PCI-DSS, and SOC 2 compliance stack audited for PA life sciences clients.",
        leftYes: false,
      },
      {
        label: "Education Sector Fluency",
        left: "Some local shops serve Penn and Drexel but have limited enrollment-season surge capacity.",
        right: "Elastic capacity for enrollment seasons and alumni campaigns across PA universities.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Onboarding for Philadelphia Businesses in 5 Steps",
    intro:
      "From Penn Medicine to Center City fintech, every Philadelphia client onboards through the same fast, structured process.",
    steps: [
      {
        title: "Philly Discovery Call",
        body: "30-minute call to scope Eastern-time volumes, healthcare or pharma compliance, and channel mix.",
      },
      {
        title: "Solution Design",
        body: "Custom ET staffing plan, HIPAA-compliant tooling, and integration with Epic, Salesforce, or Zendesk.",
      },
      {
        title: "Agent Training",
        body: "US agents trained on your Philly brand voice, PA healthcare norms, and industry-specific regulations.",
      },
      {
        title: "Go Live",
        body: "Pilot launch in under 48 hours with Philadelphia client success manager and call quality QA.",
      },
      {
        title: "Scale & Optimize",
        body: "Weekly CX reviews, AI call analytics, and flex capacity for enrollment seasons and clinical trial peaks.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve in Philadelphia",
    intro:
      "These are the Philadelphia industries where Contact Center USA delivers call center outsourcing with the compliance and rigor Philly's anchor sectors demand.",
    items: [
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Hospital Systems",
        body: "Patient scheduling and HIPAA-compliant intake for Penn Medicine, Jefferson Health, and CHOP.",
      },
      {
        icon: "stethoscope",
        stat: "GxP",
        title: "Pharma & Life Sciences",
        body: "Patient support, clinical trial hotlines, and medical info lines for the Philly pharma corridor.",
      },
      {
        icon: "graduation-cap",
        stat: "EDU",
        title: "Higher Education",
        body: "Enrollment, student services, and alumni campaigns for UPenn, Drexel, Temple, and regional schools.",
      },
      {
        icon: "landmark",
        stat: "Finance",
        title: "Financial Services",
        body: "Support for Center City banks, wealth managers, and Market Street financial firms.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Philadelphia Businesses Choose Contact Center USA for Philly Customer Service Outsourcing",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Philadelphia customers expect professionalism without pretense — the straight-talking, follow-through service that defines the City of Brotherly Love. Offshore providers cannot deliver that cultural fit, and local Center City call centers cannot match the compliance depth or 24/7 resilience Philly's healthcare and pharma sectors require.",
      "Contact Center USA is the Philly BPO alternative that combines ET alignment, HIPAA/GxP compliance, and Northeast Corridor cultural fluency with the distributed resilience of a nationwide US operation.",
    ],
    bullets: [
      "Dedicated Eastern-time pod aligned with Philadelphia business hours and 24/7 healthcare overflow",
      "HIPAA, GxP, PCI-DSS, and SOC 2 compliance audited for Philly-regulated industries",
      "Weather-resilient distributed US workforce — no single-site nor'easter risk",
      "Deep expertise in Philadelphia's anchor industries — healthcare, pharma, education, finance",
      "No long-term contracts — scale for enrollment seasons, clinical trials, or hospital peaks",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to partner with a Philly BPO that understands Philadelphia's anchor industries?",
    accent: "Philadelphia's anchor industries",
    body: "Whether you are a Penn Medicine affiliate, a Center City financial firm, or a University City research institution, Contact Center USA can stand up a dedicated ET team in under 48 hours. Get a free Philadelphia call center quote tailored to your industry.",
    ctaLabel: "Get a Free Philadelphia Call Center Quote",
    ctaHref: "/contact",
  },
];

export default function PhiladelphiaPage() {
  return (
    <CityPageTemplate
      city="Philadelphia"
      state="Pennsylvania"
      stateAbbr="PA"
      description="Philadelphia is a city where history meets innovation. America's birthplace has evolved into a modern economic powerhouse, anchored by world-renowned healthcare institutions like Penn Medicine and Jefferson Health, elite universities including UPenn and Drexel, and a pharmaceutical corridor that houses some of the world's largest drug companies. With 1.6 million residents and a strategic position between New York and Washington D.C., Philly offers businesses access to a massive Northeast corridor market of over 50 million consumers."
      businessLandscape="The Philadelphia business community is diverse and deeply rooted, from the corporate towers of Center City and the research labs of University City to the logistics operations along the Delaware River waterfront. Healthcare and life sciences companies need compliant, empathetic customer support. Financial firms along Market Street require agents who can handle sensitive transactions. And the growing tech scene in neighborhoods like Northern Liberties and Fishtown needs agile support that can scale quickly. Contact Center USA serves Philadelphia businesses with US-based agents who bring the grit, reliability, and straight-talking professionalism that defines the City of Brotherly Love."
      industries={["healthcare", "education", "finance", "pharma", "tech"]}
      population="1.6M"
      businesses="200K+"
      seoContent={seoContent}
    />
  );
}
