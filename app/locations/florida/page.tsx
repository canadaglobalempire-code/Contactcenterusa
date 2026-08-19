import type { Metadata } from "next";
import { StatePageTemplate } from "@/components/shared/StatePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

const title = "Florida Call Center & BPO Services | US-Based Teams";
const description =
  "Get US-based call center and BPO services in Florida for insurance claims, Medicare support, hospitality, and bilingual service. Free quote.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "bpo companies in florida",
    "bpo services in florida",
    "call center companies in florida",
    "contact center outsourcing florida",
    "miami bpo services",
    "tampa call center outsourcing",
    "florida call center services",
    "bilingual call center florida",
  ],
  alternates: { canonical: "/locations/florida" },
  openGraph: { title, description, url: "/locations/florida", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Florida BPO",
    heading: "Hurricane Season Is a Continuity Requirement, Not a Footnote",
    accent: "Continuity Requirement",
    body: [
      "Florida is one of the few states where business continuity is a primary vendor selection criterion rather than a contract appendix. A hurricane does not reduce contact volume — it produces claim surges, medication refill waves, and rescheduling spikes at exactly the moment a single-site in-state provider may be closed.",
      "Layered on top are a large Medicare-eligible population, sharp seasonal swings from part-year residents, and substantial Spanish- and Creole-speaking communities. Each reshapes what a competent Florida BPO program looks like.",
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Compare",
    heading: "In-State Florida Call Center vs Nationwide US BPO",
    intro: "How an in-state Florida provider compares to a distributed nationwide partner.",
    leftTitle: "In-State Florida Call Center",
    rightTitle: "Contact Center USA Nationwide BPO",
    rows: [
      {
        label: "Hurricane Continuity",
        left: "In-state agents are themselves affected — power, connectivity, and staffing all drop.",
        right: "Surge capacity drawn from regions entirely outside the storm's path.",
        leftYes: false,
      },
      {
        label: "Seasonal Capacity",
        left: "Fixed headcount is wasteful in summer or inadequate in the winter peak.",
        right: "Elastic capacity scales up for snowbird season and back down after.",
        leftYes: false,
      },
      {
        label: "Multilingual Depth",
        left: "Strong Spanish; Haitian Creole capacity is often missing.",
        right: "Spanish and Creole pods staffed from the national talent pool.",
        leftYes: false,
      },
      {
        label: "Medicare Call Handling",
        left: "Available, though staffing models often benchmark to shorter commercial calls.",
        right: "Staffing built for longer Medicare calls and annual enrollment surges.",
        leftYes: false,
      },
      {
        label: "Eastern-Time Alignment",
        left: "Native Eastern coverage for East Coast clients.",
        right: "Eastern-aligned pods plus follow-the-sun coverage for national programs.",
        leftYes: true,
      },
      {
        label: "Ramp Speed",
        left: "Competitive metro markets; 30–60 day ramps are typical.",
        right: "Pilot live in under 48 hours; full Florida team in under 2 weeks.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve in Florida",
    intro: "The Florida sectors where Contact Center USA delivers outsourced customer operations.",
    items: [
      { icon: "shield", stat: "Insurance", title: "Insurance Carriers", body: "Catastrophe claims intake and policyholder servicing built for Florida storm exposure." },
      { icon: "heart-pulse", stat: "Medicare", title: "Healthcare & Medicare", body: "Patient access and enrollment support for Florida's large Medicare-eligible population." },
      { icon: "plane", stat: "Travel", title: "Travel & Hospitality", body: "Reservations and 24/7 guest support for Orlando and Miami tourism operators." },
      { icon: "home", stat: "Real Estate", title: "Real Estate & Property", body: "Lead response and tenant support for Florida's active residential market." },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "A Florida BPO Partner That Stays Up When the Storm Hits",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "The failure mode Florida businesses most need to avoid is a provider that goes dark exactly when volume peaks. An in-state operation loses power, connectivity, and agents to the same storm hitting your customers.",
      "Contact Center USA supports Florida businesses with a workforce distributed outside the state, elastic capacity for seasonal and enrollment peaks, and Spanish and Creole capability for the state's diverse population — all Eastern-time aligned.",
    ],
    bullets: [
      "Hurricane-resilient workforce drawn from outside the storm's path",
      "Elastic capacity for snowbird season and Medicare annual enrollment",
      "Spanish and Haitian Creole pods for South Florida's population",
      "Catastrophe claims intake and Medicare-aware patient access",
      "Statewide coverage — Miami, Tampa, Orlando, Jacksonville, and Fort Lauderdale",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to compare BPO companies in Florida?",
    accent: "BPO companies in Florida",
    body: "Whether you are a Florida insurance carrier, a Medicare-focused health plan, or an Orlando hospitality operator, Contact Center USA can stand up a dedicated Eastern-time team in under 48 hours.",
    ctaLabel: "Get a Free Florida BPO Quote",
    ctaHref: "/contact",
  },
];

export default function FloridaPage() {
  return (
    <StatePageTemplate
      state="Florida"
      stateAbbr="FL"
      slug="florida"
      timezone="Eastern Time"
      overview={[
        "Florida's outsourcing market is shaped by conditions few other states share at once: annual hurricane exposure that makes continuity a primary requirement, one of the largest Medicare-eligible populations in the country, sharp seasonal swings from part-year residents, and substantial Spanish- and Creole-speaking communities.",
        "Those factors run across the state's leading industries — insurance carriers facing catastrophe claim surges, health plans serving Medicare members, and Orlando and Miami hospitality operators running 24/7. Each needs a staffing model built for its specific volume pattern.",
        "Contact Center USA supports Florida businesses with 100% US-based teams on Eastern time, a workforce distributed outside the state for genuine storm continuity, and multilingual capacity for the state's diverse population.",
      ]}
      metros={[
        { name: "Miami–Fort Lauderdale", focus: "International business gateway with large Spanish- and Creole-speaking populations. Bilingual consumer support, financial services, and trade programs." },
        { name: "Tampa–St. Petersburg", focus: "Financial services, healthcare, and insurance operations. Policyholder servicing and patient access programs." },
        { name: "Orlando", focus: "Global tourism and hospitality capital. 24/7 reservations, guest services, and event-driven surge programs." },
        { name: "Jacksonville", href: "/call-center-services-jacksonville", focus: "Insurance, logistics, and financial services hub. Claims intake and B2B support programs." },
        { name: "West Palm Beach", focus: "Wealth management, healthcare, and a large seasonal-resident base. Appointment-driven and Medicare support programs." },
        { name: "Fort Myers & Naples", focus: "Retiree-heavy Southwest Florida with healthcare and hospitality. Medicare-aware patient support and seasonal scaling." },
      ]}
      industries={[
        { name: "Insurance", href: "/industries/insurance-call-center-outsourcing", note: "Catastrophe claims intake and policyholder servicing built for Florida storm exposure." },
        { name: "Healthcare", href: "/industries/healthcare-call-center-services", note: "Medicare-aware patient access and HIPAA-compliant intake for Florida health systems." },
        { name: "Travel & Hospitality", href: "/industries/travel-hospitality-call-center", note: "24/7 reservations and guest services for Orlando and Miami tourism operators." },
        { name: "Real Estate", href: "/industries/real-estate-call-center-services", note: "Lead response and tenant support for Florida's active residential market." },
      ]}
      faqs={[
        {
          question: "Why is hurricane continuity a top criterion for Florida BPO?",
          answer:
            "A storm increases contact volume — through claim surges, medication refills, and rescheduling — at exactly the moment an in-state provider may lose power, connectivity, and agents to the same event. Distributed nationwide staffing draws surge capacity from regions outside the storm's path. Ask providers for actual service levels during a past named storm.",
        },
        {
          question: "How do Florida's seasonal population swings affect staffing?",
          answer:
            "Part-year residents create a pronounced winter volume peak that falls off in spring, and the Medicare annual enrollment period lands inside that peak. Fixed year-round staffing is either wasteful for half the year or inadequate for the other half, so elastic capacity is essential rather than optional.",
        },
        {
          question: "What languages should a Florida BPO partner support?",
          answer:
            "Spanish at minimum, with dedicated bilingual agents handling end-to-end workflows. In the Miami–Fort Lauderdale corridor, Haitian Creole serves a substantial population and is frequently missing from providers who treat multilingual support as Spanish-only. We staff both from the national talent pool.",
        },
        {
          question: "Do you handle Medicare-related patient support?",
          answer:
            "Yes. Florida's large Medicare-eligible population drives longer, more complex calls that are less likely to be deflected to a portal. We staff those programs with the expectation of longer handle times and higher first-call resolution, plus surge capacity for the annual enrollment period.",
        },
        {
          question: "Are your agents located in Florida?",
          answer:
            "Our agents are distributed across the United States — which for Florida is a continuity advantage, not a drawback. Clients get Eastern-time-aligned teams trained on their market, with genuine storm resilience because the workforce sits outside the state. All agents are 100% US-based.",
        },
        {
          question: "How quickly can a Florida program launch?",
          answer:
            "A pilot can be live in under 48 hours, with a full Eastern-time team typically in place within two weeks — compared to 30–60 day ramps common in competitive Florida metro markets.",
        },
      ]}
      relatedPost={{ label: "Top 10 BPO Companies in Florida", href: "/blog/top-10-bpo-companies-florida" }}
      seoContent={seoContent}
    />
  );
}
