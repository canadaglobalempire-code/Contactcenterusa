import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/shared/CityPageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";
import { pageMeta } from "@/lib/seo-config";
import { cityExtras } from "@/lib/city-landing-extras";

const title = "Miami Call Center & BPO Services | Bilingual US-Based Teams";
const description =
  "US-based call center services for Miami & South Florida businesses. 24/7 bilingual English/Spanish support, customer service, and answering services.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "call center services miami",
    "miami bpo services",
    "bilingual call center miami",
    "miami answering service",
    "south florida customer service outsourcing",
    "miami contact center",
    "bilingual answering service florida",
    "brickell bpo services",
  ],
  alternates: { canonical: "/call-center-services-miami" },
  ...pageMeta(title, description, "/call-center-services-miami"),
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Call Center Services in Miami",
    heading: "The South Florida BPO partner for bilingual customer care, hospitality, international commerce, and real estate.",
    accent: "bilingual customer care",
    body: [
      "Contact Center USA is a premier call center provider in Miami — a 100% US-based operation delivering seamless English and Spanish bilingual support for Brickell financial institutions, Downtown real estate developers, Wynwood tech innovators, and South Florida tourism and hospitality leaders.",
      "When Miami businesses search for call center services Miami that understand the cultural nuances and bilingual reality of the South Florida market, they get Eastern-time-aligned agents, native Spanish fluency, and flexible month-to-month contracts.",
    ],
    stats: [
      { stat: "Bilingual", label: "Native English & Spanish fluency on every shift" },
      { stat: "24/7/365", label: "Round-the-clock live answering for hospitality & healthcare" },
      { stat: "<48h", label: "Fast pilot launch for South Florida businesses" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "Local Boutique Shop vs. Contact Center USA Nationwide BPO",
    intro:
      "Miami companies weighing customer support options often compare a small local shop against a nationwide BPO. Here is how Contact Center USA delivers superior value.",
    leftTitle: "Local Miami In-City Call Center",
    rightTitle: "Contact Center USA Nationwide BPO",
    rows: [
      {
        label: "Bilingual English/Spanish Fluency",
        left: "Strong local Spanish talent, but often limited capacity during late night and weekend shifts.",
        right: "Dedicated bilingual pods available 24/7/365 across all channels (phone, chat, SMS, email).",
        leftYes: true,
      },
      {
        label: "Hurricane & Weather Continuity",
        left: "A single South Florida facility risks complete shutdown during hurricane season.",
        right: "Multi-state distributed US infrastructure ensures zero downtime even during major weather events.",
        leftYes: false,
      },
      {
        label: "Brickell / Miami Cost Overhead",
        left: "High South Florida real estate and wage premiums inflate per-minute and per-agent rates.",
        right: "Nationwide scale delivering top-tier US talent at highly competitive, transparent pricing.",
        leftYes: false,
      },
      {
        label: "Hospitality & Real Estate Expertise",
        left: "Varying agent skill sets; high turnover during peak tourism seasons.",
        right: "Rigorous training on booking management, high-ticket lead qualification, and property intake.",
        leftYes: false,
      },
      {
        label: "Contract Flexibility",
        left: "Often requires 12 to 36-month locked contracts with hefty cancellation penalties.",
        right: "Month-to-month flexibility with no long-term lock-in.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Onboarding for Miami Businesses in 5 Steps",
    intro:
      "Whether you manage a luxury real estate portfolio, a Brickell wealth advisory, or an e-commerce brand, our onboarding gets you live in days.",
    steps: [
      {
        title: "Miami Discovery Session",
        body: "We map your call volumes, bilingual language preferences, CRM workflows, and escalation rules.",
      },
      {
        title: "Custom Scripting & Integration",
        body: "Develop branded call flows and integrate directly with your systems (Salesforce, Zendesk, AppFolio, HubSpot).",
      },
      {
        title: "Bilingual Agent Training",
        body: "Agents master your brand voice, industry terminology, and South Florida customer expectations.",
      },
      {
        title: "Live Pilot Launch",
        body: "Launch within 48 hours to 2 weeks with continuous QA monitoring and real-time supervisor assist.",
      },
      {
        title: "Scale & Optimize",
        body: "Monthly performance reviews, CSAT analytics, and elastic capacity adjustments for seasonal peaks.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve in Miami & South Florida",
    intro:
      "From Brickell financial corridors to Miami Beach hospitality, we deliver specialized BPO support.",
    items: [
      {
        icon: "building",
        stat: "Real Estate",
        title: "Real Estate & Property Management",
        body: "Tenant maintenance dispatch, prospective buyer intake, and multilingual showing coordination.",
      },
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Medical Clinics",
        body: "HIPAA-compliant patient appointment scheduling, prescription refill routing, and bilingual intake.",
      },
      {
        icon: "plane",
        stat: "24/7",
        title: "Hospitality, Tourism & Travel",
        body: "Guest reservations, concierge answering, after-hours emergency support, and VIP booking lines.",
      },
      {
        icon: "landmark",
        stat: "Fintech",
        title: "Banking, Wealth & Financial Services",
        body: "Secure account inquiries, lead qualification, and compliant client support for Brickell firms.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Choose Us",
    heading: "Why Miami Businesses Partner with Contact Center USA",
    image: "/images/cc-agent-multilingual.jpg",
    imagePosition: "right",
    body: [
      "Miami is an international gateway where customer expectations are high and multilingual capability is mandatory. Relying on offshore call centers often results in frustrating communication gaps, while local in-house teams are expensive to recruit and manage 24/7.",
      "Contact Center USA gives Miami businesses the best of both worlds: 100% US-based agents with native English and Spanish fluency, enterprise-grade telecommunications, and flexible pricing.",
    ],
    bullets: [
      "100% US-based native bilingual English/Spanish agents",
      "24/7/365 coverage for continuous guest and patient support",
      "Disaster-resilient multi-site network protected from hurricane disruptions",
      "HIPAA, PCI-DSS, and SOC 2 security compliance",
      "Month-to-month terms with zero long-term contract lock-in",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready for high-touch, bilingual call center support in Miami?",
    accent: "bilingual call center support",
    body: "Contact Center USA can deploy a dedicated, bilingual South Florida support pod for your business in as little as 48 hours. Request your free, no-obligation quote today.",
    ctaLabel: "Get a Free Miami Call Center Quote",
    ctaHref: "/contact",
  },
];

export default function MiamiPage() {
  return (
    <CityPageTemplate
      city="Miami"
      state="Florida"
      stateAbbr="FL"
      description="Miami is the financial, cultural, and international trade capital of South Florida. As one of America's fastest-growing business hubs, Miami blends a booming financial district in Brickell with vibrant real estate, healthcare, tourism, and technology sectors. In a multicultural metro where bilingual communication is essential for customer trust, Miami businesses need call center solutions that provide effortless English and Spanish support with 24/7 reliability."
      businessLandscape="From international trade and asset management along Brickell Avenue to booming healthcare networks and luxury hospitality across Miami Beach, customer engagement requires speed, professionalism, and cultural alignment. Contact Center USA provides Miami businesses with dedicated, domestic US agents who understand South Florida business dynamics and deliver superior customer satisfaction on every call."
      industries={["real estate", "healthcare", "travel", "finance", "ecommerce"]}
      population="450K (City) / 6.1M (Metro)"
      businesses="120K+"
      statePage="florida"
      answeringPost="answering-service-miami"
      seoContent={[...seoContent, ...cityExtras["miami"].seo]}
      faqs={cityExtras["miami"].faqs}
    />
  );
}
