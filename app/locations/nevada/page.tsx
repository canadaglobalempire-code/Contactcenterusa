import type { Metadata } from "next";
import { StatePageTemplate } from "@/components/shared/StatePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

const title = "Nevada Call Center & BPO Services | US-Based Teams";
const description =
  "Get US-based call center and BPO services in Nevada for hospitality reservations, 24/7 guest support, gaming, and logistics. Free quote.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "bpo companies in nevada",
    "bpo services in nevada",
    "call center companies in nevada",
    "contact center outsourcing nevada",
    "las vegas call center services",
    "las vegas bpo services",
    "reno call center outsourcing",
    "nevada customer service outsourcing",
  ],
  alternates: { canonical: "/locations/nevada" },
  openGraph: { title, description, url: "/locations/nevada", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Nevada BPO",
    heading: "A 24/7 Economy Needs a 24/7 Support Model",
    accent: "24/7 Support Model",
    body: [
      "Nevada is one of the few states where round-the-clock customer contact is the baseline rather than a premium add-on. Las Vegas hospitality, gaming, and entertainment operate continuously, and guest-facing volume does not respect business hours — a 3am reservation change or resort service request is ordinary traffic, not an exception.",
      "That reality makes standard weekday staffing models a poor fit. Nevada businesses evaluating BPO companies should be testing overnight coverage economics first, because that is where most providers quietly price the work out of reach.",
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Compare",
    heading: "Local Nevada Call Center vs Nationwide US BPO",
    intro: "How a Las Vegas or Reno provider compares to a distributed nationwide partner.",
    leftTitle: "Local Nevada Call Center",
    rightTitle: "Contact Center USA Nationwide BPO",
    rows: [
      {
        label: "Overnight Coverage Cost",
        left: "Local overnight shifts carry a shift differential that makes 24/7 expensive.",
        right: "Follow-the-sun US coverage — overnight Nevada hours are another region's daytime.",
        leftYes: false,
      },
      {
        label: "Hospitality & Gaming Familiarity",
        left: "Strong — Las Vegas providers understand resort and gaming service standards.",
        right: "Agents trained on hospitality service standards and property-specific escalation paths.",
        leftYes: true,
      },
      {
        label: "Event & Convention Surge",
        left: "Fixed headcount struggles with major convention and event volume spikes.",
        right: "Elastic capacity sized to convention calendars and event-driven peaks.",
        leftYes: false,
      },
      {
        label: "Multilingual Guest Support",
        left: "Varies; international visitor volume often outpaces local language capacity.",
        right: "Multilingual pods for international guests, staffed from the national talent pool.",
        leftYes: false,
      },
      {
        label: "Extreme Heat & Grid Continuity",
        left: "Summer grid strain has disrupted single-site Las Vegas facilities.",
        right: "Distributed US workforce — no single-site heat or grid exposure.",
        leftYes: false,
      },
      {
        label: "Ramp Speed",
        left: "High-turnover hospitality labor market; ramps and attrition are both elevated.",
        right: "Pilot live in under 48 hours; full Nevada-aligned team in under 2 weeks.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Onboarding a Nevada Program in 5 Steps",
    intro: "From Strip resorts to Reno distribution centers, Nevada clients onboard through the same process.",
    steps: [
      { title: "Nevada Discovery Call", body: "30-minute scoping call covering 24/7 volume curves, event calendars, and escalation requirements." },
      { title: "Solution Design", body: "Coverage plan built around true round-the-clock demand rather than extended business hours." },
      { title: "Agent Training", body: "US agents trained on your property or brand service standards and guest recovery protocols." },
      { title: "Go Live", body: "Pilot launch in under 48 hours with dedicated client success manager and QA monitoring." },
      { title: "Scale & Optimize", body: "Capacity tuned against convention calendars, seasonal cycles, and event-driven peaks." },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "The Nevada BPO Alternative Built for Round-the-Clock Demand",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "In hospitality, service recovery is time-sensitive in a way most industries never experience. A guest issue unresolved overnight becomes a review that outlives the stay, and convention weeks can multiply normal volume without warning.",
      "Contact Center USA supports Nevada businesses with genuine 24/7 coverage priced as standard rather than premium, elastic surge capacity tied to event calendars, and multilingual capability for international visitors.",
    ],
    bullets: [
      "True 24/7 coverage without local overnight shift differentials",
      "Elastic surge capacity aligned to convention and event calendars",
      "Multilingual guest support for international visitor volume",
      "Hospitality-trained agents with property-specific escalation paths",
      "Statewide coverage — Las Vegas, Reno, Henderson, and Carson City",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to compare BPO companies in Nevada?",
    accent: "BPO companies in Nevada",
    body: "Whether you run a Las Vegas resort, a Reno distribution operation, or a Henderson services business, Contact Center USA can stand up a dedicated 24/7 team in under 48 hours.",
    ctaLabel: "Get a Free Nevada BPO Quote",
    ctaHref: "/contact",
  },
];

export default function NevadaPage() {
  return (
    <StatePageTemplate
      state="Nevada"
      stateAbbr="NV"
      slug="nevada"
      timezone="Pacific Time"
      overview={[
        "Nevada's outsourcing demand is shaped by an economy that genuinely never closes. Las Vegas hospitality, gaming, and entertainment generate guest-facing contact around the clock, and reservation changes, service requests, and issue escalations arrive at every hour rather than clustering into a business day.",
        "Reno provides a second and very different anchor. Its logistics and distribution corridor, built around proximity to West Coast markets and favorable tax treatment, drives B2B order management and supply chain support with more conventional volume patterns.",
        "Contact Center USA supports Nevada businesses with 100% US-based teams providing true 24/7 coverage, elastic surge capacity for convention and event peaks, and multilingual support for international guest volume.",
      ]}
      metros={[
        { name: "Las Vegas", href: "/call-center-services-las-vegas", focus: "Hospitality, gaming, entertainment, and conventions. Round-the-clock reservations, guest services, and service recovery programs." },
        { name: "Reno & Sparks", focus: "Logistics and distribution corridor serving West Coast markets. B2B order management and supply chain support." },
        { name: "Henderson", focus: "Healthcare, financial services, and a large residential base. Consumer support and appointment-driven programs." },
        { name: "North Las Vegas", focus: "Manufacturing, warehousing, and distribution operations supporting the wider Las Vegas Valley." },
        { name: "Carson City", focus: "State government seat with public-sector services and regional healthcare providers." },
        { name: "Lake Tahoe", focus: "Seasonal resort and hospitality operations with sharp winter and summer volume swings." },
      ]}
      industries={[
        { name: "Travel & Hospitality", href: "/industries/travel-hospitality-call-center", note: "Reservations, guest services, and 24/7 service recovery for Nevada resorts and hotels." },
        { name: "Retail & Ecommerce", href: "/industries/ecommerce-customer-service-outsourcing", note: "Order support and returns for Reno distribution and fulfillment operations." },
        { name: "Healthcare", href: "/industries/healthcare-call-center-services", note: "Patient scheduling and HIPAA-compliant intake for Nevada health systems." },
        { name: "Logistics & Shipping", href: "/industries/logistics-shipping-call-center", note: "Tracking and exception handling for the Reno–Sparks distribution corridor." },
      ]}
      faqs={[
        {
          question: "Why is 24/7 coverage such a big factor for Nevada businesses?",
          answer:
            "Las Vegas hospitality and gaming operate continuously, so guest contact volume genuinely spreads across all 24 hours rather than concentrating in a business day. Most staffing models price overnight coverage as a premium via shift differentials. Because our workforce spans US timezones, Nevada's overnight hours fall during another region's normal shift.",
        },
        {
          question: "Can you handle convention and event surges?",
          answer:
            "Yes. Major conventions can multiply normal contact volume for a defined window, and fixed local headcount cannot absorb that without either overstaffing year-round or degrading service during peaks. We size capacity against your event calendar and scale elastically.",
        },
        {
          question: "Do you offer multilingual support for international guests?",
          answer:
            "Yes. Las Vegas draws substantial international visitor volume, and local language capacity often lags demand. We staff multilingual pods from the national talent pool, so language coverage is not capped by what one metro can hire.",
        },
        {
          question: "Do you support Reno logistics operations?",
          answer:
            "Yes. The Reno–Sparks distribution corridor has very different requirements from Las Vegas hospitality — B2B order management, tracking, and exception handling on more conventional weekday patterns. We run both program types.",
        },
        {
          question: "Are your agents located in Nevada?",
          answer:
            "Our agents are distributed across the United States. Nevada clients get teams trained on their brand and service standards with genuine round-the-clock coverage, and without single-site exposure to summer grid strain. All agents are 100% US-based.",
        },
        {
          question: "How quickly can a Nevada program launch?",
          answer:
            "A pilot can be live in under 48 hours, with a full team typically in place within two weeks. That is a meaningful advantage in a hospitality labor market where both ramp times and attrition run high.",
        },
      ]}
      relatedPost={{ label: "Top 10 BPO Companies in Nevada", href: "/blog/top-10-bpo-companies-nevada" }}
      seoContent={seoContent}
    />
  );
}
