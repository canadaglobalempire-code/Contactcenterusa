import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/shared/CityPageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Jacksonville Call Center Services | Contact Center USA",
  description:
    "US-based call center services for Jacksonville businesses. Get inbound, outbound, customer support, and multilingual coverage with a fast BPO quote.",
  keywords: [
    "call center services jacksonville",
    "jacksonville bpo",
    "florida customer service outsourcing",
    "jacksonville call center outsourcing",
    "insurance call center florida",
    "jacksonville contact center",
    "jax bpo services",
    "florida bpo",
  ],
  alternates: { canonical: "/call-center-services-jacksonville" },
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Call Center Services in Jacksonville",
    heading: "The Jacksonville BPO partner built for the Insurance City and Southeast's financial corridor.",
    accent: "Insurance City",
    body: [
      "Contact Center USA is one of the best call center providers in Jacksonville — a 100% US-based Jacksonville BPO delivering Florida customer service outsourcing for FIS, Fidelity National Financial, Mayo Clinic Florida, Baptist Health, Naval Station Mayport contractors, and the logistics operators that move goods through Jacksonville's natural deep-water harbor.",
      "When Jacksonville businesses search for call center services Jacksonville that combine insurance-industry depth, Southern hospitality, and hurricane-season resilience, they get Eastern-time-aligned agents, insurance-compliant operations, and a BPO partner who understands the anchor industries of the First Coast.",
    ],
    stats: [
      { stat: "ET", label: "Dedicated Eastern-time pod for Jacksonville business hours" },
      { stat: "Insurance", label: "Specialist compliance for The Insurance City's carriers and agents" },
      { stat: "24/7", label: "Around-the-clock coverage for financial and healthcare operations" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "Local In-City Call Center vs. Contact Center USA Nationwide BPO",
    intro:
      "Jacksonville companies weighing call center options often compare a local Jax shop with a nationwide BPO. Here is how the two compare for Jacksonville BPO buyers.",
    leftTitle: "Local Jacksonville In-City Call Center",
    rightTitle: "Contact Center USA Nationwide BPO",
    rows: [
      {
        label: "Hourly Agent Cost",
        left: "Jacksonville is cost-competitive, but insurance-industry wage pressure has lifted local seat costs.",
        right: "Nationwide US talent pool at cost structures at or below Jacksonville local rates.",
        leftYes: false,
      },
      {
        label: "Hurricane & Weather Continuity",
        left: "Florida hurricane season repeatedly disrupts single-site Jacksonville operations.",
        right: "Distributed US workforce across multiple states — hurricanes never stop your queue.",
        leftYes: false,
      },
      {
        label: "Insurance Industry Compliance",
        left: "Local shops handle basic TCPA, but few have dedicated NAIC and state DOI compliance programs.",
        right: "Full insurance compliance stack — NAIC, state DOIs, TCPA, PCI-DSS — built for Jacksonville carriers.",
        leftYes: false,
      },
      {
        label: "Ramp Speed",
        left: "Jacksonville hiring is steady; 30–60 days to ramp a full team is typical.",
        right: "Pilot live in under 48 hours; full Jacksonville team in under 2 weeks.",
        leftYes: false,
      },
      {
        label: "Claims Surge Capacity",
        left: "Fixed local headcount cannot handle post-hurricane claims volume spikes.",
        right: "Elastic US capacity — surge 10x for CAT claims without long-term commitment.",
        leftYes: false,
      },
      {
        label: "Military & Financial Compliance",
        left: "Limited dedicated SOC 2 and defense-grade security for Mayport/NAS JAX contractors.",
        right: "Full SOC 2, PCI-DSS, and security-aware protocols for financial and defense clients.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Onboarding for Jacksonville Businesses in 5 Steps",
    intro:
      "From insurance carriers to Mayo Clinic Florida to Port of Jax logistics, every Jacksonville client follows the same fast onboarding path.",
    steps: [
      {
        title: "Jax Discovery Call",
        body: "30-minute call to scope Eastern-time volumes, insurance or healthcare compliance, and channel mix.",
      },
      {
        title: "Solution Design",
        body: "Custom ET staffing plan, insurance-compliant tooling, and CAT-claims surge capacity.",
      },
      {
        title: "Agent Training",
        body: "US agents trained on your Jax brand voice, Southern hospitality norms, and insurance/healthcare regs.",
      },
      {
        title: "Go Live",
        body: "Pilot launch in under 48 hours with Jacksonville client success manager and call quality QA.",
      },
      {
        title: "Scale & Optimize",
        body: "Weekly CX reviews, AI-driven call analytics, and hurricane-season surge capacity.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve in Jacksonville",
    intro:
      "These are the Jacksonville industries where Contact Center USA delivers call center outsourcing with First Coast warmth and compliance depth.",
    items: [
      {
        icon: "shield",
        stat: "Insurance",
        title: "Insurance & P&C Carriers",
        body: "Claims intake, policy service, and renewal support for The Insurance City's carriers and agents.",
      },
      {
        icon: "landmark",
        stat: "Finance",
        title: "Financial Services",
        body: "Support for FIS, Fidelity National, and Jacksonville's fintech and banking operations.",
      },
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Mayo Clinic",
        body: "Patient scheduling and HIPAA-compliant support for Mayo Clinic Florida and Baptist Health.",
      },
      {
        icon: "truck",
        stat: "Logistics",
        title: "Port Logistics & Freight",
        body: "Shipper support, customs inquiries, and dispatch for Port of Jacksonville operators.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Jacksonville Businesses Choose Contact Center USA for Florida Customer Service Outsourcing",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Jacksonville customers expect Southern hospitality, insurance-industry precision, and the reliability of a call center partner that does not go down when a hurricane rolls through. Offshore providers cannot deliver that fit, and local Jax call centers cannot match the weather resilience of a distributed nationwide operation.",
      "Contact Center USA is the Jacksonville BPO alternative that combines Eastern-time alignment, insurance-industry compliance depth, and hurricane-resilient infrastructure — delivered from 100% US-based facilities with the elastic surge capacity CAT-claims events demand.",
    ],
    bullets: [
      "Dedicated Eastern-time pod aligned with Jacksonville business hours plus 24/7 financial overflow",
      "Insurance-industry compliance — NAIC, state DOIs, TCPA, PCI-DSS — built in",
      "Hurricane-resilient distributed US workforce — no single-site Florida risk",
      "Elastic surge capacity for CAT claims, renewal cycles, and hurricane response",
      "Deep expertise in Jacksonville's anchor industries — insurance, finance, healthcare, logistics",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to partner with a Jacksonville BPO built for Florida's insurance and financial economy?",
    accent: "insurance and financial",
    body: "Whether you are a Jacksonville insurance carrier, a Mayo Clinic affiliate, or a Port of Jax logistics operator, Contact Center USA can stand up a dedicated ET team in under 48 hours. Get a free Jacksonville call center quote tailored to your industry.",
    ctaLabel: "Get a Free Jacksonville Call Center Quote",
    ctaHref: "/contact",
  },
];

export default function JacksonvillePage() {
  return (
    <CityPageTemplate
      city="Jacksonville"
      state="Florida"
      stateAbbr="FL"
      description="Jacksonville is the largest city by area in the contiguous United States and a rising star in the Southeast business corridor. Situated at the mouth of the St. Johns River with one of the deepest natural harbors on the Atlantic coast, Jax has built a powerful economy around financial services, logistics, and military operations at Naval Station Mayport and Naval Air Station Jacksonville. With 950,000 residents and no state income tax, the city attracts businesses looking for a strategic East Coast location with lower costs and a strong, diverse talent pool."
      businessLandscape="Jacksonville's economy is anchored by major financial institutions like FIS, Fidelity National Financial, and Southeastern Grocers, alongside a robust healthcare sector led by Mayo Clinic Florida and Baptist Health. The city's port and logistics operations make it a critical node in the national supply chain, while its insurance industry presence has earned it the nickname 'The Insurance City.' Contact Center USA serves Jacksonville businesses with US-based agents who understand the financial services compliance landscape, military community needs, and the professional standards that Northeast Florida companies expect from their customer support partners."
      industries={["finance", "logistics", "healthcare", "insurance", "military"]}
      population="950K"
      businesses="100K+"
      seoContent={seoContent}
    />
  );
}
