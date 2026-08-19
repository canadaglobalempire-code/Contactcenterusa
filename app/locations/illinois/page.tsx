import type { Metadata } from "next";
import { StatePageTemplate } from "@/components/shared/StatePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

const title = "Illinois Call Center & BPO Services | US-Based Teams";
const description =
  "Get US-based call center and BPO services in Illinois for logistics, insurance, financial services, and manufacturing support across Chicago.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "bpo companies in illinois",
    "bpo services in illinois",
    "call center companies in illinois",
    "contact center outsourcing illinois",
    "chicago bpo services",
    "chicago call center outsourcing",
    "illinois call center services",
    "illinois customer service outsourcing",
  ],
  alternates: { canonical: "/locations/illinois" },
  openGraph: { title, description, url: "/locations/illinois", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Illinois BPO",
    heading: "Chicago Is the Logistics Crossroads of America",
    accent: "Logistics Crossroads",
    body: [
      "Chicago sits at the center of the US freight network — the largest rail hub in the country and a major air-cargo and trucking crossroads. That makes Illinois outsourcing distinctly logistics-shaped: shipment exception handling, tracking, and B2B supply chain support that runs on overnight and irregular cycles rather than tidy business hours.",
      "Around that core sit a deep insurance and financial services sector, a large manufacturing base, and healthcare systems serving both the metro and downstate. Illinois programs tend to combine steady transactional volume with unpredictable exception spikes.",
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Compare",
    heading: "In-State Illinois Call Center vs Nationwide US BPO",
    intro: "How an in-state Illinois provider compares to a distributed nationwide partner.",
    leftTitle: "In-State Illinois Call Center",
    rightTitle: "Contact Center USA Nationwide BPO",
    rows: [
      {
        label: "Overnight Logistics Coverage",
        left: "Freight exception volume peaks overnight; local staffing for those hours is costly.",
        right: "Follow-the-sun US coverage makes overnight logistics support routine, not a premium.",
        leftYes: false,
      },
      {
        label: "Exception Surge Handling",
        left: "Fixed headcount cannot absorb weather-driven freight disruption spikes.",
        right: "Elastic capacity scales into exception surges within days.",
        leftYes: false,
      },
      {
        label: "Insurance & Financial Compliance",
        left: "Available from specialist Chicago providers, at a cost premium.",
        right: "Documented PCI-DSS and accuracy-weighted QA at nationwide cost structures.",
        leftYes: false,
      },
      {
        label: "Agent Cost",
        left: "Chicago metro costs are moderate but above the national median.",
        right: "Nationwide talent pool at cost structures below Chicago metro rates.",
        leftYes: false,
      },
      {
        label: "Winter Weather Continuity",
        left: "Major snow and polar events have disrupted single-site Chicago operations.",
        right: "Distributed US workforce — Illinois winter never takes your queue offline.",
        leftYes: false,
      },
      {
        label: "Central-Time Alignment",
        left: "Native Central coverage, useful for national programs.",
        right: "Central-aligned pods plus follow-the-sun for 24/7 logistics programs.",
        leftYes: true,
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve in Illinois",
    intro: "The Illinois sectors where Contact Center USA delivers outsourced customer operations.",
    items: [
      { icon: "truck", stat: "Logistics", title: "Logistics & Freight", body: "Overnight exception handling and tracking for Chicago's rail, air, and trucking network." },
      { icon: "shield", stat: "Insurance", title: "Insurance", body: "Claims intake and policyholder servicing for Illinois carriers and agencies." },
      { icon: "landmark", stat: "Finance", title: "Financial Services", body: "Account servicing and compliance-aware support for Chicago financial firms." },
      { icon: "factory", stat: "Manufacturing", title: "Manufacturing", body: "Order management and B2B support for Illinois manufacturing and distribution." },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "An Illinois BPO Partner Built for Freight and Exceptions",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Logistics support does not follow a weekly pattern. Delayed shipments, weather disruptions, and rerouting generate call spikes at odd hours, and a provider staffed only for daytime business volume simply drops those calls.",
      "Contact Center USA supports Illinois businesses with genuine overnight coverage, elastic capacity for freight exception surges, and the compliance rigor the state's insurance and financial sectors require — all Central-time aligned.",
    ],
    bullets: [
      "Overnight coverage for Chicago freight and air-cargo exception handling",
      "Elastic capacity for weather-driven logistics disruption spikes",
      "PCI-DSS and accuracy-weighted QA for insurance and financial programs",
      "Central-time alignment with 24/7 logistics coverage available",
      "Statewide support — Chicago, Naperville, Rockford, Peoria, and Springfield",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to compare BPO companies in Illinois?",
    accent: "BPO companies in Illinois",
    body: "Whether you are a Chicago logistics operator, an Illinois insurance carrier, or a downstate manufacturer, Contact Center USA can stand up a dedicated Central-time team in under 48 hours.",
    ctaLabel: "Get a Free Illinois BPO Quote",
    ctaHref: "/contact",
  },
];

export default function IllinoisPage() {
  return (
    <StatePageTemplate
      state="Illinois"
      stateAbbr="IL"
      slug="illinois"
      timezone="Central Time"
      overview={[
        "Illinois outsourcing is anchored by Chicago's role as the logistics crossroads of America — the largest rail hub in the country and a major air-cargo and trucking center. That gives the state's BPO demand a logistics character: shipment exception handling, tracking, and B2B supply chain support running on overnight and irregular cycles.",
        "Chicago also hosts a deep insurance and financial services sector and a large manufacturing base, with healthcare systems serving both the metro and downstate. Illinois programs frequently pair steady transactional volume with unpredictable, weather-driven exception spikes.",
        "Contact Center USA supports Illinois businesses with 100% US-based teams on Central time, genuine overnight coverage for logistics work, and the compliance rigor the state's insurance and financial sectors require.",
      ]}
      metros={[
        { name: "Chicago", href: "/call-center-services-chicago", focus: "The nation's freight crossroads plus finance, insurance, and healthcare. Logistics exception handling, financial servicing, and B2B support." },
        { name: "Naperville & DuPage", focus: "Corporate headquarters, technology, and financial services in the western suburbs. B2B and account servicing programs." },
        { name: "Rockford", focus: "Manufacturing and aerospace suppliers. Order management and B2B technical support programs." },
        { name: "Peoria", focus: "Heavy manufacturing and healthcare serving Central Illinois. B2B support and patient access programs." },
        { name: "Springfield", focus: "State government seat with public-sector services, insurance, and healthcare programs." },
        { name: "Champaign–Urbana", focus: "University-driven technology and research base with healthcare and B2B services." },
      ]}
      industries={[
        { name: "Logistics & Shipping", href: "/industries/logistics-shipping-call-center", note: "Overnight exception handling and tracking for Chicago's rail, air, and trucking network." },
        { name: "Insurance", href: "/industries/insurance-call-center-outsourcing", note: "Claims intake and policyholder servicing for Illinois carriers and agencies." },
        { name: "Financial Services", href: "/industries/financial-services-call-center", note: "Account servicing and compliance-aware support for Chicago financial firms." },
        { name: "Retail & Ecommerce", href: "/industries/ecommerce-customer-service-outsourcing", note: "Order support and returns handling for Illinois retail and distribution operations." },
      ]}
      faqs={[
        {
          question: "Why is Illinois BPO so logistics-focused?",
          answer:
            "Chicago is the largest rail hub in the United States and a major air-cargo and trucking crossroads, so a large share of the state's outsourcing demand centers on shipment exception handling, tracking, and B2B supply chain support. That work runs on overnight and irregular cycles rather than standard business hours.",
        },
        {
          question: "Can you provide overnight coverage for freight operations?",
          answer:
            "Yes. Freight exception volume peaks overnight, and staffing those hours locally in Chicago carries a shift-differential premium. Because our workforce is distributed across US timezones, overnight logistics coverage is routine rather than a surcharge.",
        },
        {
          question: "How do you handle weather-driven logistics disruptions?",
          answer:
            "Winter storms and other disruptions generate sudden freight exception spikes that fixed local headcount cannot absorb. Our capacity scales elastically into those surges within days and back down afterward, rather than leaving you overstaffed for the calmer periods.",
        },
        {
          question: "Do you support insurance and financial programs in Illinois?",
          answer:
            "Yes. Chicago hosts a deep insurance and financial services sector, and we run claims intake, policyholder servicing, and account servicing programs with documented PCI-DSS coverage and accuracy-weighted QA appropriate for regulated work.",
        },
        {
          question: "Are your agents located in Illinois?",
          answer:
            "Our agents are distributed across the United States. Illinois clients get Central-time-aligned teams trained on their market, without single-site exposure to the major snow and polar events that periodically disrupt Chicago operations. All agents are 100% US-based.",
        },
        {
          question: "How quickly can an Illinois program launch?",
          answer:
            "A pilot can be live in under 48 hours, with a full Central-time team typically in place within two weeks.",
        },
      ]}
      relatedPost={{ label: "Top 10 BPO Companies in Illinois", href: "/blog/top-10-bpo-companies-illinois" }}
      seoContent={seoContent}
    />
  );
}
