import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/shared/CityPageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";
import { pageMeta } from "@/lib/seo-config";
import { cityExtras } from "@/lib/city-landing-extras";

const title = "Orlando Call Center & BPO Services | US-Based Teams";
const description =
  "US-based call center and BPO services for Orlando & Central Florida businesses. 24/7 hospitality answering, healthcare, defense, and tourism support.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "call center services orlando",
    "orlando bpo services",
    "orlando call center outsourcing",
    "central florida customer support outsourcing",
    "hospitality call center orlando",
    "orlando answering service",
    "tourism customer support florida",
    "orlando contact center",
  ],
  alternates: { canonical: "/call-center-services-orlando" },
  ...pageMeta(title, description, "/call-center-services-orlando"),
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Call Center Services in Orlando",
    heading: "The Central Florida BPO partner for global tourism, world-class hospitality, simulation & defense tech, and healthcare.",
    accent: "global tourism, world-class hospitality",
    body: [
      "Contact Center USA is a premier call center provider in Orlando — delivering 100% US-based customer service, guest booking support, patient scheduling, and technical help desk for Central Florida attractions, Lake Nona medical networks, and high-tech defense contractors.",
      "When Orlando businesses search for call center services Orlando that can absorb seasonal tourist influxes and deliver exceptional guest experiences 24/7, they get dedicated Eastern-time-aligned agents with bilingual capabilities.",
    ],
    stats: [
      { stat: "24/7/365", label: "Round-the-clock live answering for tourism & emergency dispatch" },
      { stat: "Bilingual", label: "Fluent English and Spanish agents on all shifts" },
      { stat: "<48h", label: "Fast onboarding & pilot launch for Florida businesses" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "Local Orlando Call Center vs. Contact Center USA Nationwide BPO",
    intro:
      "Why Central Florida tourism, medical, and service enterprises partner with Contact Center USA.",
    leftTitle: "Local Orlando In-City Call Center",
    rightTitle: "Contact Center USA Nationwide BPO",
    rows: [
      {
        label: "Seasonal Surge Elasticity",
        left: "Struggles to recruit and retain temporary agents during summer and holiday tourist surges.",
        right: "Elastic domestic capacity that flexes from 5 to 50+ agents instantly to meet demand spikes.",
        leftYes: false,
      },
      {
        label: "Hurricane Continuity",
        left: "Single Central Florida facility risks power outages and evacuation shutdowns.",
        right: "Distributed US infrastructure ensures uninterrupted service across all weather conditions.",
        leftYes: false,
      },
      {
        label: "Guest Hospitality Standards",
        left: "Variable agent quality with high turnover in a competitive service economy.",
        right: "Rigorously trained US agents vetted for friendly, upbeat, and professional guest care.",
        leftYes: true,
      },
      {
        label: "Healthcare & Tech Compliance",
        left: "Basic compliance often lacking dedicated HIPAA and SOC 2 protocols.",
        right: "Full HIPAA, PCI-DSS, and SOC 2 certifications audited for Lake Nona medical firms.",
        leftYes: false,
      },
      {
        label: "Contract Flexibility",
        left: "Standard annual contracts with fixed monthly seat commitments.",
        right: "Month-to-month flexibility with zero long-term obligations.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Onboarding for Orlando Businesses in 5 Steps",
    intro:
      "Seamless onboarding designed for rapid deployment and immediate customer satisfaction.",
    steps: [
      {
        title: "Orlando Operational Review",
        body: "We map your seasonal volume cycles, Eastern Time staffing requirements, and CRM workflows.",
      },
      {
        title: "Scripting & System Integration",
        body: "Design custom reservation trees and connect with your ticketing, booking, or EHR platforms.",
      },
      {
        title: "Agent Certification & Training",
        body: "Agents master your attraction details, brand tone, and customer service protocols.",
      },
      {
        title: "Live Pilot Launch",
        body: "Launch within 48 hours to 2 weeks with continuous QA scoring and supervisor coaching.",
      },
      {
        title: "Scale & Optimize",
        body: "Real-time metric reviews, guest satisfaction tracking, and agile staffing adjustments.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve in Greater Orlando",
    intro:
      "Specialized BPO support across Central Florida's key economic sectors.",
    items: [
      {
        icon: "plane",
        stat: "Tourism",
        title: "Hospitality, Attractions & Travel",
        body: "Ticket sales support, guest reservation intake, vacation rental answering, and VIP guest care.",
      },
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Medical City (Lake Nona)",
        body: "Patient appointment scheduling, doctor answering service, prior authorization, and medical intake.",
      },
      {
        icon: "laptop",
        stat: "Tech",
        title: "Simulation, Defense & Technology",
        body: "Help desk support, Tier 1-3 technical assistance, and compliant B2B inquiry routing.",
      },
      {
        icon: "wrench",
        stat: "Trades",
        title: "Home Services & Contracting",
        body: "24/7 emergency HVAC, plumbing, roofing, and solar dispatch across Orange and Osceola counties.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Choose Us",
    heading: "Why Orlando Businesses Partner with Contact Center USA",
    image: "/images/cc-agent-monitor.jpg",
    imagePosition: "right",
    body: [
      "Orlando is the premier travel and hospitality destination in the world, welcoming tens of millions of visitors each year alongside a rapidly growing high-tech and healthcare corridor. In this dynamic market, every customer interaction shapes your brand reputation.",
      "Contact Center USA provides 100% US-based agents who deliver warm, articulate, and reliable support 24 hours a day, 365 days a year.",
    ],
    bullets: [
      "100% US-based domestic agents aligned with Eastern Time",
      "Bilingual English and Spanish coverage across all communication channels",
      "Storm-resilient multi-site US network with zero weather disruption",
      "Full HIPAA, PCI-DSS, and SOC 2 security compliance",
      "Flexible month-to-month contracts with no long-term lock-in",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Elevate your Orlando customer support operations today.",
    accent: "Orlando customer support operations",
    body: "Contact Center USA can deploy a dedicated US support team tailored to your Orlando business in under 48 hours. Request a free quote today.",
    ctaLabel: "Get a Free Orlando Call Center Quote",
    ctaHref: "/contact",
  },
];

export default function OrlandoPage() {
  return (
    <CityPageTemplate
      city="Orlando"
      state="Florida"
      stateAbbr="FL"
      description="Orlando is world-renowned as the premier hospitality and entertainment capital of the United States, hosting more than 75 million visitors annually. Beyond tourism, Central Florida has developed into a major innovation corridor featuring modeling and simulation tech, aerospace and defense contractors, and the cutting-edge Lake Nona Medical City healthcare hub."
      businessLandscape="From resort reservation lines and attraction customer care to Lake Nona medical clinics and high-tech defense providers, customer service in Orlando requires flexibility, warmth, and meticulous compliance. Contact Center USA provides Orlando businesses with dedicated, domestic US agents who provide exceptional customer satisfaction on every call."
      industries={["travel", "healthcare", "tech", "real estate", "ecommerce"]}
      population="310K (City) / 2.7M (Metro)"
      businesses="80K+"
      statePage="florida"
      seoContent={[...seoContent, ...cityExtras["orlando"].seo]}
      faqs={cityExtras["orlando"].faqs}
    />
  );
}
