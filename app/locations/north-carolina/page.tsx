import type { Metadata } from "next";
import { StatePageTemplate } from "@/components/shared/StatePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

const title = "North Carolina Call Center & BPO Services | US-Based Teams";
const description =
  "Get US-based call center and BPO services in North Carolina for banking support, technical help desk, and back office. Free quote.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "bpo companies in north carolina",
    "bpo services in north carolina",
    "call center companies in north carolina",
    "contact center outsourcing north carolina",
    "charlotte bpo services",
    "raleigh call center outsourcing",
    "north carolina call center services",
    "nc customer service outsourcing",
  ],
  alternates: { canonical: "/locations/north-carolina" },
  openGraph: { title, description, url: "/locations/north-carolina", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "North Carolina BPO",
    heading: "Two Economies, Two Very Different BPO Requirements",
    accent: "Two Very Different",
    body: [
      "North Carolina is really two outsourcing markets. Charlotte is one of the largest banking centers in the United States, which makes its BPO demand compliance-first: account servicing, fraud handling, and dispute resolution where every call is potentially examinable. The Research Triangle — Raleigh, Durham, Chapel Hill — is a technology and life sciences cluster where demand runs toward Tier 2–3 technical support and clinical-adjacent programs.",
      "A provider optimized for one is rarely strong at the other. Charlotte buyers screen for audit readiness; Triangle buyers screen for technical depth. Statewide programs need both.",
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Compare",
    heading: "Local North Carolina Call Center vs Nationwide US BPO",
    intro: "How a single-metro NC provider compares to a distributed nationwide partner.",
    leftTitle: "Local Charlotte or Triangle Call Center",
    rightTitle: "Contact Center USA Nationwide BPO",
    rows: [
      {
        label: "Banking & Financial Compliance",
        left: "Charlotte providers often have real banking familiarity, though depth varies sharply.",
        right: "Documented PCI-DSS, SOC 2, and TCPA programs built for examinable financial work.",
        leftYes: true,
      },
      {
        label: "Technical Support Depth",
        left: "Triangle providers can staff technical roles; Charlotte-based ones typically cannot.",
        right: "Tier 1–3 technical support staffed nationally, independent of which NC metro you are in.",
        leftYes: false,
      },
      {
        label: "Hurricane Continuity",
        left: "Coastal and inland hurricane events have repeatedly disrupted single-site NC operations.",
        right: "Distributed US workforce — Atlantic storm season never takes your queue offline.",
        leftYes: false,
      },
      {
        label: "Agent Cost",
        left: "Charlotte and Raleigh wage growth has tracked strong in-migration upward.",
        right: "Nationwide talent pool with cost structures below current NC metro rates.",
        leftYes: false,
      },
      {
        label: "Statewide Coverage",
        left: "Single-metro providers rarely serve Greensboro, Wilmington, or Asheville well.",
        right: "Statewide support with no dependence on one metro's labor market.",
        leftYes: false,
      },
      {
        label: "Ramp Speed",
        left: "Competitive Charlotte and Raleigh markets; 30–60 day ramps are typical.",
        right: "Pilot live in under 48 hours; full NC team in under 2 weeks.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve in North Carolina",
    intro: "The NC sectors where Contact Center USA delivers outsourced customer operations.",
    items: [
      { icon: "landmark", stat: "Banking", title: "Banking & Financial Services", body: "Account servicing, fraud handling, and dispute resolution for Charlotte financial institutions." },
      { icon: "laptop", stat: "Tech", title: "Technology & SaaS", body: "Tier 1–3 technical support for Research Triangle software and hardware companies." },
      { icon: "stethoscope", stat: "Life Sciences", title: "Healthcare & Life Sciences", body: "Patient support and HIPAA-compliant intake for Triangle health systems and biotech firms." },
      { icon: "factory", stat: "Manufacturing", title: "Manufacturing & Logistics", body: "B2B support and order management for Piedmont Triad manufacturing and distribution." },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "One Partner for Both North Carolina Economies",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "North Carolina businesses often end up running two vendors — one for compliance-heavy financial work and another for technical support — because few local providers do both credibly.",
      "Contact Center USA staffs both from a single nationwide pool: audit-ready financial servicing for Charlotte, Tier 1–3 technical support for the Triangle, and consistent QA across the whole program.",
    ],
    bullets: [
      "PCI-DSS, SOC 2, HIPAA, and TCPA coverage for examinable NC financial programs",
      "Tier 1–3 technical support for Research Triangle technology clients",
      "Hurricane-resilient distributed workforce with no single-site exposure",
      "Statewide coverage including Greensboro, Winston-Salem, Wilmington, and Asheville",
      "Eastern-time alignment with 24/7 overflow available",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to compare BPO companies in North Carolina?",
    accent: "BPO companies in North Carolina",
    body: "Whether you are a Charlotte bank, a Durham software company, or a Greensboro manufacturer, Contact Center USA can stand up a dedicated Eastern-time team in under 48 hours.",
    ctaLabel: "Get a Free North Carolina BPO Quote",
    ctaHref: "/contact",
  },
];

export default function NorthCarolinaPage() {
  return (
    <StatePageTemplate
      state="North Carolina"
      stateAbbr="NC"
      slug="north-carolina"
      timezone="Eastern Time"
      overview={[
        "North Carolina's outsourcing demand splits cleanly between two anchors. Charlotte is among the largest US banking centers by assets under management, generating steady demand for compliance-heavy account servicing, fraud handling, and dispute resolution. The Research Triangle is a technology and life sciences cluster whose support needs run technical rather than transactional.",
        "Around those anchors sit the Piedmont Triad's manufacturing base, a growing coastal services economy in Wilmington, and healthcare systems serving both dense metros and rural counties. Volume patterns and compliance requirements differ meaningfully across all of them.",
        "Contact Center USA supports North Carolina businesses with 100% US-based inbound, outbound, technical support, and back-office teams on Eastern time, with the financial and healthcare compliance coverage the state's leading sectors require.",
      ]}
      metros={[
        { name: "Charlotte", href: "/call-center-services-charlotte", focus: "A major US banking center. Account servicing, fraud and dispute handling, and compliance-heavy financial support programs." },
        { name: "Raleigh & Durham", focus: "Research Triangle technology and life sciences cluster. Tier 1–3 technical support, SaaS customer success, and clinical-adjacent programs." },
        { name: "Greensboro & Winston-Salem", focus: "Piedmont Triad manufacturing, logistics, and healthcare. B2B support and order management programs." },
        { name: "Wilmington", focus: "Coastal services, tourism, and a growing film production base. Seasonal hospitality and B2C support." },
        { name: "Asheville", focus: "Tourism, hospitality, and a large independent small-business economy in Western NC." },
        { name: "Fayetteville", focus: "Large military-adjacent population at Fort Bragg. Government services, insurance, and consumer support programs." },
      ]}
      industries={[
        { name: "Banking & Finance", href: "/industries/banking-financial-services-call-center", note: "Account servicing, fraud handling, and disputes for Charlotte financial institutions." },
        { name: "SaaS & Technology", href: "/industries/saas-technology-support", note: "Tier 1–3 technical support for Research Triangle software and hardware companies." },
        { name: "Healthcare", href: "/industries/healthcare-call-center-services", note: "HIPAA-compliant scheduling and patient intake for NC health systems." },
        { name: "Logistics & Shipping", href: "/industries/logistics-shipping-call-center", note: "Order management and exception handling for Piedmont Triad distribution operations." },
      ]}
      faqs={[
        {
          question: "What do BPO companies in North Carolina typically handle?",
          answer:
            "It depends heavily on the metro. Charlotte programs skew toward banking and financial servicing — account support, fraud, and disputes — while Research Triangle programs skew technical. Statewide, healthcare intake and B2B manufacturing support are also common.",
        },
        {
          question: "Why does Charlotte's banking concentration matter for outsourcing?",
          answer:
            "Charlotte is one of the largest banking centers in the country. Financial programs there are subject to examination, which means your BPO partner needs documented call monitoring, retention policies, and a defensible compliance program. General-purpose call centers frequently cannot meet that bar.",
        },
        {
          question: "Can you support both Charlotte financial work and Triangle technical support?",
          answer:
            "Yes, and that is a common reason NC businesses consolidate with us. Few single-metro providers credibly do both, so companies often end up managing two vendors. We staff both from one nationwide pool with consistent QA across the program.",
        },
        {
          question: "How do you handle hurricane season?",
          answer:
            "Our workforce is distributed across multiple US states rather than concentrated in one facility. Atlantic storm events that disrupt coastal or inland North Carolina operations do not take your queue offline, because coverage shifts automatically to unaffected regions.",
        },
        {
          question: "Do you serve smaller North Carolina markets?",
          answer:
            "Yes. We support businesses in Greensboro, Winston-Salem, Wilmington, Asheville, and Fayetteville alongside the major metros. Coverage does not depend on having a facility in your city.",
        },
        {
          question: "How quickly can a North Carolina program launch?",
          answer:
            "A pilot can be live in under 48 hours, with a full Eastern-time team typically in place within two weeks — compared to 30–60 day ramps common when hiring directly in the Charlotte or Raleigh markets.",
        },
      ]}
      relatedPost={{ label: "Top 10 BPO Companies in North Carolina", href: "/blog/top-10-bpo-companies-north-carolina" }}
      seoContent={seoContent}
    />
  );
}
