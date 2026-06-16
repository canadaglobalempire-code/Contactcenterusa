import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/shared/CityPageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";
import { pageMeta } from "@/lib/seo-config";

const title = "San Antonio Call Center Services | Contact Center USA";
const description =
  "US-based call center services for San Antonio businesses. Get inbound, outbound, customer support, and multilingual coverage with a fast BPO quote.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "call center services san antonio",
    "san antonio bpo",
    "texas call center outsourcing",
    "san antonio customer service outsourcing",
    "bilingual call center texas",
    "military support call center",
    "san antonio contact center",
    "alamo city bpo",
  ],
  alternates: { canonical: "/call-center-services-san-antonio" },
  ...pageMeta(title, description, "/call-center-services-san-antonio"),
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Call Center Services in San Antonio",
    heading: "The San Antonio BPO built for bilingual service, military precision, and Alamo City hospitality.",
    accent: "Alamo City hospitality",
    body: [
      "Contact Center USA is one of the best call center providers in San Antonio — a 100% US-based San Antonio BPO delivering Texas call center outsourcing for Joint Base San Antonio contractors, South Texas Medical Center providers, River Walk tourism operators, and the fast-growing I-35 technology corridor.",
      "When San Antonio businesses search for call center services San Antonio that combine bilingual English/Spanish fluency with Texas hospitality and military-grade reliability, they get Central-time-aligned agents, deep bilingual capacity, and a BPO partner who understands the unique blend of cultures that defines Alamo City business.",
    ],
    stats: [
      { stat: "Bilingual", label: "English/Spanish agents ready at no premium for San Antonio" },
      { stat: "CT", label: "Central-time-aligned coverage built for Texas business hours" },
      { stat: "24/7", label: "Around-the-clock coverage for military and healthcare clients" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "Local In-City Call Center vs. Contact Center USA Nationwide BPO",
    intro:
      "San Antonio companies often start with a local Alamo City shop, then hit scale, compliance, or bilingual-capacity limits. Here is how a nationwide BPO compares for San Antonio BPO buyers.",
    leftTitle: "Local San Antonio In-City Call Center",
    rightTitle: "Contact Center USA Nationwide BPO",
    rows: [
      {
        label: "Hourly Agent Cost",
        left: "San Antonio offers lower wages than coastal cities — but local seat overhead still applies.",
        right: "Nationwide US talent pool with cost structures at or below San Antonio local rates.",
        leftYes: false,
      },
      {
        label: "Bilingual Capacity",
        left: "Strong local bilingual pool, but capacity caps on large campaigns are common.",
        right: "Nationwide bilingual English/Spanish capacity — no caps, no premium.",
        leftYes: false,
      },
      {
        label: "24/7 Military & Healthcare Support",
        left: "Single-site operations struggle with overnight coverage for military and hospital clients.",
        right: "True 24/7/365 coverage for Joint Base San Antonio contractors and SAMMC providers.",
        leftYes: false,
      },
      {
        label: "Ramp Speed",
        left: "Local hiring is faster than coastal cities but still 30–60 days for a full team.",
        right: "Pilot live in under 48 hours; full San Antonio team in under 2 weeks.",
        leftYes: false,
      },
      {
        label: "Tourism Seasonal Surge",
        left: "Fixed local headcount limits surge for Fiesta, river flotilla, and tourism peaks.",
        right: "Elastic US capacity — scale up for Fiesta, Spurs playoffs, or summer tourism spikes.",
        leftYes: false,
      },
      {
        label: "Compliance Stack",
        left: "Most local shops handle TCPA and basic HIPAA, but lack dedicated defense-grade security.",
        right: "HIPAA, PCI-DSS, TCPA, SOC 2, and security-aware protocols for defense-adjacent clients.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Onboarding for San Antonio Businesses in 5 Steps",
    intro:
      "From military contractors to River Walk tourism operators, every San Antonio client onboards through the same fast process built for Texas-scale operations.",
    steps: [
      {
        title: "SA Discovery Call",
        body: "30-minute call to scope bilingual needs, Central-time volumes, and San Antonio industry compliance.",
      },
      {
        title: "Solution Design",
        body: "Custom CT staffing plan, bilingual agent mix, and integration with CRM and booking systems.",
      },
      {
        title: "Agent Training",
        body: "US agents trained on your SA brand voice, Texas hospitality norms, and military/healthcare protocols.",
      },
      {
        title: "Go Live",
        body: "Pilot launch in under 48 hours with San Antonio client success manager and call quality QA.",
      },
      {
        title: "Scale & Optimize",
        body: "Weekly CX scorecards, AI call analytics, and surge capacity for Fiesta and tourism seasons.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve in San Antonio",
    intro:
      "These are the San Antonio industries where Contact Center USA delivers bilingual call center outsourcing with Texas hospitality.",
    items: [
      {
        icon: "shield",
        stat: "Military",
        title: "Military & Defense Contractors",
        body: "Secure, clearance-aware support for Joint Base San Antonio contractors and defense firms.",
      },
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & South Texas Medical",
        body: "Patient scheduling and intake for SAMMC, Methodist, and South Texas Medical Center providers.",
      },
      {
        icon: "plane",
        stat: "Tourism",
        title: "Tourism & Hospitality",
        body: "Booking support and guest services for River Walk hotels, Alamo attractions, and SeaWorld.",
      },
      {
        icon: "laptop",
        stat: "Tech",
        title: "Technology & Cybersecurity",
        body: "Support for I-35 corridor tech companies, cybersecurity firms, and San Antonio fintech.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why San Antonio Businesses Choose Contact Center USA for Texas Call Center Outsourcing",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "San Antonio customers expect bilingual fluency, Texas hospitality, and the security awareness of a city that serves America's military. Offshore providers cannot replicate that cultural fit or compliance depth, and local Alamo City call centers hit capacity ceilings fast.",
      "Contact Center USA is the San Antonio BPO alternative that combines Central-time alignment, large bilingual English/Spanish capacity, and military/healthcare-grade compliance — delivered from 100% US-based facilities with nationwide scale.",
    ],
    bullets: [
      "Large bilingual English/Spanish agent pool available at no premium",
      "Central-time alignment for San Antonio business hours plus 24/7 overflow",
      "Military and defense-adjacent compliance and security awareness",
      "Deep expertise in healthcare, tourism, and tech — SA's anchor industries",
      "Elastic surge capacity for Fiesta, tourism peaks, and product launches",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to partner with a San Antonio BPO that delivers bilingual service with Texas hospitality?",
    accent: "bilingual service",
    body: "Whether you are a Joint Base San Antonio contractor, a South Texas Medical provider, or a River Walk tourism operator, Contact Center USA can stand up a dedicated bilingual CT team in under 48 hours. Get a free San Antonio call center quote tailored to your industry.",
    ctaLabel: "Get a Free San Antonio Call Center Quote",
    ctaHref: "/contact",
  },
];

export default function SanAntonioPage() {
  return (
    <CityPageTemplate
      city="San Antonio"
      state="Texas"
      stateAbbr="TX"
      description="San Antonio is a city shaped by its rich military heritage and vibrant tourism economy. Home to Joint Base San Antonio — the largest joint military installation in the Department of Defense — and the iconic River Walk that draws millions of visitors annually, the city blends tradition with forward-looking economic development. With 1.5 million residents and one of the lowest costs of living among major US cities, San Antonio has become a magnet for businesses seeking growth without the overhead of coastal markets."
      businessLandscape="San Antonio's economy is driven by a unique mix of military and defense contracting, healthcare systems including the South Texas Medical Center, a thriving tourism and hospitality sector centered around the Alamo and River Walk, and an emerging technology corridor along the I-35 innovation zone. Bilingual customer support is essential here, as the city's predominantly Hispanic population expects seamless English and Spanish service. Contact Center USA provides San Antonio businesses with bilingual, US-based agents who understand the local culture, military community needs, and the hospitality-driven service standards that make this city special."
      industries={["military", "healthcare", "tourism", "tech", "energy"]}
      population="1.5M"
      businesses="150K+"
      seoContent={seoContent}
    />
  );
}
