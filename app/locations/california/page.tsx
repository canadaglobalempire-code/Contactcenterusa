import type { Metadata } from "next";
import { StatePageTemplate } from "@/components/shared/StatePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

const title = "California Call Center & BPO Services | US-Based Teams";
const description =
  "Get US-based call center and BPO services in California for SaaS support, entertainment, biotech, and ecommerce across LA, San Diego, and the Bay Area.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "bpo companies in california",
    "bpo services in california",
    "call center companies in california",
    "contact center outsourcing california",
    "los angeles call center services",
    "bay area bpo services",
    "san diego call center outsourcing",
    "california customer service outsourcing",
  ],
  alternates: { canonical: "/locations/california" },
  openGraph: { title, description, url: "/locations/california", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "California BPO",
    heading: "The Highest-Cost Market Makes the Strongest Outsourcing Case",
    accent: "Strongest Outsourcing Case",
    body: [
      "California has the highest call center labor costs in the country, which is precisely why the outsourcing case is strongest here. A domestic partner drawing from a nationwide talent pool delivers California-quality support at a cost structure the in-state labor market cannot match, while keeping agents US-based and aligned to Pacific hours.",
      "The state's industries also demand a specific kind of agent — SaaS users, biotech customers, and entertainment audiences all ask product-literate questions that a generic script cannot answer. California programs live or die on agent capability, not just cost.",
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Compare",
    heading: "In-State California Call Center vs Nationwide US BPO",
    intro: "How an in-state California provider compares to a distributed nationwide partner.",
    leftTitle: "In-State California Call Center",
    rightTitle: "Contact Center USA Nationwide BPO",
    rows: [
      {
        label: "Agent Cost",
        left: "Highest call center labor costs in the country, with rising minimum wage pressure.",
        right: "Nationwide talent pool at a fraction of California in-state seat cost.",
        leftYes: false,
      },
      {
        label: "Regulatory Overhead",
        left: "California employment and privacy rules add compliance cost to in-state operations.",
        right: "CCPA-aware programs without the in-state employment overhead.",
        leftYes: false,
      },
      {
        label: "Pacific-Time Alignment",
        left: "Native Pacific coverage, a genuine advantage for West Coast clients.",
        right: "Pacific-aligned pods plus follow-the-sun coverage for national programs.",
        leftYes: true,
      },
      {
        label: "Wildfire & Grid Continuity",
        left: "Wildfire evacuations and grid shutoffs have disrupted single-site operations.",
        right: "Distributed US workforce — California grid events never take your queue offline.",
        leftYes: false,
      },
      {
        label: "Product-Literate Agents",
        left: "Available, at California technology-market wages.",
        right: "SaaS- and biotech-literate agents recruited nationally at sustainable cost.",
        leftYes: false,
      },
      {
        label: "Ramp Speed",
        left: "Expensive, competitive market; 45–60 day ramps are typical.",
        right: "Pilot live in under 48 hours; full California team in under 2 weeks.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve in California",
    intro: "The California sectors where Contact Center USA delivers outsourced customer operations.",
    items: [
      { icon: "laptop", stat: "SaaS", title: "Technology & SaaS", body: "Tier 1–3 technical support and customer success for Bay Area software companies." },
      { icon: "tv", stat: "Media", title: "Entertainment & Media", body: "Audience support and seasonal scaling for Los Angeles studios and streaming platforms." },
      { icon: "stethoscope", stat: "Biotech", title: "Biotech & Life Sciences", body: "Product-literate support and HIPAA-compliant intake for San Diego life sciences firms." },
      { icon: "shopping-bag", stat: "Ecommerce", title: "Ecommerce & Retail", body: "Order support and returns handling with peak-season scaling for California DTC brands." },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "A California BPO Partner That Solves the Cost Equation",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "California businesses face a genuine dilemma: their customers expect polished, product-literate support, but the in-state labor market makes staffing that support at scale prohibitively expensive.",
      "Contact Center USA resolves it with US-based agents drawn from a nationwide pool — Pacific-aligned, product-trained, and CCPA-aware — at a cost structure the California market cannot match, while avoiding the wildfire and grid exposure of a single in-state site.",
    ],
    bullets: [
      "US-based agents at a fraction of California in-state seat cost",
      "Product-trained agents for SaaS, biotech, and technical support",
      "Pacific-time alignment for Bay Area, LA, and San Diego business hours",
      "CCPA-aware programs without in-state employment overhead",
      "Wildfire and grid-resilient distributed workforce",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to compare BPO companies in California?",
    accent: "BPO companies in California",
    body: "Whether you are a Bay Area SaaS company, a Los Angeles media brand, or a San Diego biotech firm, Contact Center USA can stand up a dedicated Pacific-time team in under 48 hours.",
    ctaLabel: "Get a Free California BPO Quote",
    ctaHref: "/contact",
  },
];

export default function CaliforniaPage() {
  return (
    <StatePageTemplate
      state="California"
      stateAbbr="CA"
      slug="california"
      timezone="Pacific Time"
      overview={[
        "California is the highest-cost call center labor market in the United States, which makes it the state where the domestic outsourcing case is strongest. Businesses here can keep support US-based and Pacific-aligned while drawing on a nationwide talent pool that the in-state market cannot match on cost.",
        "The state's industries set a high bar for agent capability. Bay Area SaaS, Los Angeles entertainment and media, and San Diego biotech all generate product-literate support demand where a scripted generalist fails. California programs are won on agent quality as much as price.",
        "Contact Center USA supports California businesses with 100% US-based inbound, outbound, technical support, and back-office teams on Pacific time, with product-specific training and CCPA-aware handling of customer data.",
      ]}
      metros={[
        { name: "Los Angeles", href: "/call-center-services-los-angeles", focus: "Entertainment, media, ecommerce, and a vast small-business base. Audience support, DTC customer service, and seasonal scaling." },
        { name: "San Francisco Bay Area", href: "/call-center-services-san-francisco", focus: "The world's densest software cluster. Tier 1–3 technical support, SaaS customer success, and AI-augmented service programs." },
        { name: "San Diego", href: "/call-center-services-san-diego", focus: "Biotech, life sciences, defense, and SaaS. Product-literate support and HIPAA-compliant intake programs." },
        { name: "Sacramento", focus: "State government seat plus healthcare and agriculture. Public-sector services and regional support programs." },
        { name: "Orange County", focus: "Financial services, healthcare, and a large consumer base. Account servicing and consumer support programs." },
        { name: "San Jose & Silicon Valley", focus: "Hardware and enterprise technology. Technical support and B2B customer success at enterprise scale." },
      ]}
      industries={[
        { name: "SaaS & Technology", href: "/industries/saas-technology-support", note: "Tier 1–3 technical support and customer success for Bay Area and Silicon Valley software companies." },
        { name: "Ecommerce & Retail", href: "/industries/ecommerce-customer-service-outsourcing", note: "Order support and peak-season scaling for California DTC and retail brands." },
        { name: "Healthcare", href: "/industries/healthcare-call-center-services", note: "HIPAA-compliant scheduling and patient intake for California health systems." },
        { name: "Cable & Media", href: "/industries/cable-media-call-center", note: "Audience and subscriber support for Los Angeles studios and streaming platforms." },
      ]}
      faqs={[
        {
          question: "Why does outsourcing make more sense in California than most states?",
          answer:
            "California has the highest call center labor costs in the country and rising minimum wage pressure, so the gap between in-state staffing and a nationwide domestic partner is larger here than anywhere else. You can keep support US-based and Pacific-aligned while drawing on a talent pool the in-state market cannot match on cost.",
        },
        {
          question: "Can you provide product-literate agents for technical and biotech support?",
          answer:
            "Yes, and for California's leading industries it is essential. SaaS users, biotech customers, and enterprise buyers ask questions that cannot be answered from a decision tree. We train agents on your actual product and documentation rather than staffing generalists.",
        },
        {
          question: "How do you handle California privacy requirements?",
          answer:
            "Programs handling California consumer data are run with CCPA-aware processes covering data access, deletion requests, and disclosure handling. We align these with your own privacy program rather than applying a generic framework.",
        },
        {
          question: "What about wildfire and grid reliability?",
          answer:
            "Our workforce is distributed across multiple US states rather than concentrated in one California facility. Wildfire evacuations and public safety power shutoffs that disrupt single-site in-state operations do not take your queue offline, because coverage shifts to unaffected regions.",
        },
        {
          question: "Are your agents located in California?",
          answer:
            "Our agents are distributed across the United States. California clients get Pacific-time-aligned teams trained on their product and market, at a cost structure the in-state labor market cannot match. All agents are 100% US-based.",
        },
        {
          question: "How quickly can a California program launch?",
          answer:
            "A pilot can be live in under 48 hours, with a full Pacific-time team typically in place within two weeks — compared to 45–60 day ramps common in California's expensive, competitive hiring market.",
        },
      ]}
      relatedPost={{ label: "Top 10 BPO Companies in California", href: "/blog/top-10-bpo-companies-california" }}
      seoContent={seoContent}
    />
  );
}
