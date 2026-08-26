import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/shared/CityPageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";
import { pageMeta } from "@/lib/seo-config";
import { cityExtras } from "@/lib/city-landing-extras";

const title = "Las Vegas Call Center & BPO Services | 24/7 US-Based Teams";
const description =
  "24/7 US-based call center and BPO services for Las Vegas businesses. Hospitality answering, event booking, property management, and gaming support.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "call center services las vegas",
    "las vegas bpo services",
    "las vegas answering service",
    "24/7 call center nevada",
    "hospitality call center las vegas",
    "las vegas customer support outsourcing",
    "las vegas contact center",
    "event booking call center",
  ],
  alternates: { canonical: "/call-center-services-las-vegas" },
  ...pageMeta(title, description, "/call-center-services-las-vegas"),
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Call Center Services in Las Vegas",
    heading: "The 24/7 Las Vegas BPO partner for world-class hospitality, entertainment, trade shows, and rapid commercial growth.",
    accent: "world-class hospitality",
    body: [
      "Contact Center USA is a premier call center provider in Las Vegas — delivering round-the-clock, 100% US-based customer service, reservation management, VIP concierge intake, and technical support for Strip hospitality leaders, Summerlin professional firms, and Henderson commercial enterprises.",
      "In a true 24-hour city where missed calls equal lost revenue, Las Vegas businesses get dedicated Pacific-time-aligned agents, bilingual options, and seamless after-hours dispatch.",
    ],
    stats: [
      { stat: "24/7/365", label: "True round-the-clock live answering with zero downtime" },
      { stat: "PT", label: "Dedicated Pacific Time pod aligned with Las Vegas operations" },
      { stat: "<48h", label: "Rapid deployment for Las Vegas events and businesses" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "Local Las Vegas Operator vs. Contact Center USA Nationwide BPO",
    intro:
      "Why Las Vegas entertainment, hospitality, and service companies trust Contact Center USA.",
    leftTitle: "Local Las Vegas In-City Call Center",
    rightTitle: "Contact Center USA Nationwide BPO",
    rows: [
      {
        label: "24/7 Live Availability",
        left: "May rely on automated voicemail or offshore handoffs during late-night shifts.",
        right: "100% US-based domestic live agents on every shift, 24 hours a day, 365 days a year.",
        leftYes: false,
      },
      {
        label: "Surge & Event Scaling",
        left: "Limited agent floor capacity; gets bottlenecked during major conventions and trade shows.",
        right: "Elastic capacity capable of adding 10 to 50+ seats instantly for event surges.",
        leftYes: false,
      },
      {
        label: "Hospitality & VIP Etiquette",
        left: "Mixed service quality; high local turnover in competitive hospitality job markets.",
        right: "Strictly trained agents vetted for luxury customer service, patience, and discretion.",
        leftYes: true,
      },
      {
        label: "Bilingual Spanish Support",
        left: "Available on select daytime shifts only.",
        right: "Continuous bilingual coverage across phone, live chat, and email 24/7.",
        leftYes: false,
      },
      {
        label: "Contract Flexibility",
        left: "Often demands rigid annual contracts with cancellation penalties.",
        right: "Month-to-month contracts with zero long-term obligations.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Onboarding for Las Vegas Businesses in 5 Steps",
    intro:
      "Getting your 24/7 Las Vegas call center live is fast, structured, and friction-free.",
    steps: [
      {
        title: "Las Vegas Needs Assessment",
        body: "We review your 24-hour call patterns, peak convention seasons, CRM tools, and SLA requirements.",
      },
      {
        title: "Scripting & Escalation Matrix",
        body: "Design VIP call paths, reservation procedures, and urgent on-call dispatch protocols.",
      },
      {
        title: "Agent Certification",
        body: "Train US agents on your booking systems, property amenities, and brand guidelines.",
      },
      {
        title: "24/7 Go-Live Launch",
        body: "Soft launch within 48 hours with real-time supervisor monitoring and quality scoring.",
      },
      {
        title: "Performance Optimization",
        body: "Weekly analytics reviews, hold-time optimization, and flexible capacity scaling for peak events.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve in Greater Las Vegas",
    intro:
      "Tailored customer support solutions for Southern Nevada's core industries.",
    items: [
      {
        icon: "plane",
        stat: "24/7",
        title: "Hospitality & Entertainment",
        body: "Ticketing support, VIP concierge intake, guest inquiries, and event registration.",
      },
      {
        icon: "building",
        stat: "Property",
        title: "Real Estate & Property Management",
        body: "Emergency maintenance dispatch, tenant intake, and leasing appointment scheduling.",
      },
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Aesthetics",
        body: "Patient scheduling, med spa booking, doctor answering service, and secure intake.",
      },
      {
        icon: "wrench",
        stat: "Contractors",
        title: "Home Services & Trades",
        body: "24/7 emergency HVAC, plumbing, and electrical dispatch across the Las Vegas valley.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Choose Us",
    heading: "Why Las Vegas Businesses Choose Contact Center USA",
    image: "/images/cc-team-floor.jpg",
    imagePosition: "right",
    body: [
      "Las Vegas never sleeps, and neither do your customers. Whether handling reservations for a world-renowned venue, managing urgent property maintenance calls, or providing technical support for expanding tech firms, fast and reliable response is critical.",
      "Contact Center USA gives Las Vegas businesses an agile, 100% US-based team that delivers flawless service 24 hours a day, 365 days a year.",
    ],
    bullets: [
      "True 24/7/365 live answering by 100% US-based domestic agents",
      "Bilingual English and Spanish coverage on all shifts",
      "Seamless emergency dispatch and CRM system integration",
      "Full HIPAA, PCI-DSS, and SOC 2 security compliance",
      "Flexible month-to-month contracts with no long-term lock-in",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Need reliable 24/7 call center support for your Las Vegas business?",
    accent: "24/7 call center support",
    body: "Contact Center USA can deploy a dedicated US support team tailored to your Las Vegas operations in under 48 hours. Request your free quote today.",
    ctaLabel: "Get a Free Las Vegas Call Center Quote",
    ctaHref: "/contact",
  },
];

export default function LasVegasPage() {
  return (
    <CityPageTemplate
      city="Las Vegas"
      state="Nevada"
      stateAbbr="NV"
      description="Las Vegas is a global capital for entertainment, hospitality, tourism, and major international trade shows. Beyond the Strip, the Las Vegas valley has grown into a bustling commercial center with thriving healthcare, real estate, technology, and home service sectors. In a city that operates 24 hours a day, 365 days a year, businesses require round-the-clock customer support that never misses a beat."
      businessLandscape="Operating in Las Vegas means catering to customers across all time zones at any hour of the day or night. From luxury guest inquiries and convention registrations to urgent property dispatch and patient scheduling, Contact Center USA provides Las Vegas businesses with dedicated, domestic US agents who uphold the highest standards of hospitality, speed, and accuracy."
      industries={["travel", "real estate", "healthcare", "tech", "finance"]}
      population="660K (City) / 2.3M (Metro)"
      businesses="75K+"
      statePage="nevada"
      answeringPost="answering-service-las-vegas"
      seoContent={[...seoContent, ...cityExtras["las-vegas"].seo]}
      faqs={cityExtras["las-vegas"].faqs}
    />
  );
}
