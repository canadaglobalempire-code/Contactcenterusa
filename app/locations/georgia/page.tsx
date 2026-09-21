import type { Metadata } from "next";
import { StatePageTemplate } from "@/components/shared/StatePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

const title = "Georgia Call Center & BPO Services | US-Based Teams";
const description =
  "Get US-based call center and BPO services in Georgia for inbound support, outbound sales, fintech servicing, and back office. Free quote.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "bpo companies in georgia",
    "bpo services in georgia",
    "call center companies in georgia",
    "contact center outsourcing georgia",
    "atlanta bpo services",
    "georgia call center services",
    "atlanta call center outsourcing",
    "georgia customer service outsourcing",
  ],
  alternates: { canonical: "/locations/georgia" },
  openGraph: { title, description, url: "/locations/georgia", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Georgia BPO",
    heading: "Atlanta Is the Payments Capital — and It Shapes Georgia BPO",
    accent: "Payments Capital",
    body: [
      "A large share of US card transactions is processed by companies headquartered in metro Atlanta, a concentration that gave the region the nickname \"Transaction Alley.\" That fintech and payments density defines what BPO looks like in Georgia: high-compliance, high-accuracy programs where a mishandled call is a regulatory issue, not just a CSAT dip.",
      "Georgia buyers evaluating BPO companies therefore weight compliance depth and quality assurance more heavily than raw seat cost. A provider that cannot evidence PCI-DSS discipline and call monitoring rigor will not survive procurement at an Atlanta payments or banking firm.",
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Compare",
    heading: "Local Atlanta Call Center vs Nationwide US BPO",
    intro:
      "Georgia buyers typically shortlist an Atlanta-metro provider alongside a nationwide partner. These are the differences that matter in delivery.",
    leftTitle: "Local Atlanta-Area Call Center",
    rightTitle: "Contact Center USA Nationwide BPO",
    rows: [
      {
        label: "Payments & PCI Compliance",
        left: "Varies widely by provider; smaller shops often lack a documented PCI-DSS program.",
        right: "Full PCI-DSS, TCPA, HIPAA, and SOC 2 stack audited for Transaction Alley clients.",
        leftYes: false,
      },
      {
        label: "Agent Cost",
        left: "Atlanta is more affordable than the Northeast, but metro wage growth has narrowed the gap.",
        right: "Nationwide US talent pool with cost structures below Atlanta metro rates.",
        leftYes: false,
      },
      {
        label: "Hurricane & Severe Weather Continuity",
        left: "Coastal Georgia and inland storm events have disrupted single-site operations.",
        right: "Distributed US workforce — Georgia weather events never take your queue offline.",
        leftYes: false,
      },
      {
        label: "Eastern Time Alignment",
        left: "Native Eastern-time coverage, which is a genuine advantage for East Coast clients.",
        right: "Eastern-aligned pods plus follow-the-sun coverage for national and 24/7 programs.",
        leftYes: true,
      },
      {
        label: "Ramp Speed",
        left: "Competitive Atlanta market; 30–60 day ramps are typical.",
        right: "Pilot live in under 48 hours; full Georgia team in under 2 weeks.",
        leftYes: false,
      },
      {
        label: "Logistics Peak Capacity",
        left: "Fixed headcount limits surge for Savannah port and Atlanta air-cargo cycles.",
        right: "Elastic capacity sized to Georgia's logistics and retail peak seasons.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve in Georgia",
    intro:
      "These are the Georgia sectors where Contact Center USA delivers outsourced customer operations at scale.",
    items: [
      { icon: "dollar", stat: "Fintech", title: "Payments & Financial Services", body: "PCI-compliant cardholder support and dispute handling for Transaction Alley firms." },
      { icon: "truck", stat: "Logistics", title: "Logistics & Supply Chain", body: "Shipment tracking and exception handling for Savannah port and Atlanta air-cargo operators." },
      { icon: "heart-pulse", stat: "HIPAA", title: "Healthcare", body: "Patient scheduling and HIPAA-compliant intake for Georgia hospital systems and practices." },
      { icon: "tv", stat: "Media", title: "Film, Media & Entertainment", body: "Production support and audience services for Georgia's large film and television industry." },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "The Georgia BPO Alternative Built for Regulated Programs",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Georgia's economy concentrates in industries where compliance failures are expensive: payments, banking, healthcare, and logistics. Offshore providers struggle with the documentation and audit trail these sectors require, and smaller Atlanta shops often cannot evidence a mature QA program.",
      "Contact Center USA supports Georgia businesses with US-based agents on Eastern time, a full compliance stack, and call monitoring rigor built for programs that get audited.",
    ],
    bullets: [
      "PCI-DSS, HIPAA, TCPA, and SOC 2 coverage for regulated Georgia programs",
      "Eastern-time pods aligned to Atlanta business hours with 24/7 overflow",
      "Elastic capacity for Savannah port cycles and Atlanta retail peaks",
      "Statewide coverage — Atlanta, Savannah, Augusta, Columbus, and Macon",
      "No long-term contracts and no fixed local overhead",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to compare BPO companies in Georgia?",
    accent: "BPO companies in Georgia",
    body: "Whether you are an Atlanta payments firm, a Savannah logistics operator, or a Macon healthcare group, Contact Center USA can stand up a dedicated Eastern-time team in under 48 hours.",
    ctaLabel: "Get a Free Georgia BPO Quote",
    ctaHref: "/contact",
  },
];

export default function GeorgiaPage() {
  return (
    <StatePageTemplate
      state="Georgia"
      stateAbbr="GA"
      slug="georgia"
      timezone="Eastern Time"
      overview={[
        "Georgia's outsourcing market is shaped by metro Atlanta's role as a national payments and fintech center. The concentration of transaction processing companies in the region — often referred to as Transaction Alley — means Georgia BPO programs skew toward compliance-heavy, quality-audited work rather than commodity call handling.",
        "Beyond Atlanta, the state's economy spans the Port of Savannah, a large film and television production industry, agricultural processing, and healthcare systems serving both dense metro and rural populations. Each brings different volume patterns and compliance requirements.",
        "Contact Center USA supports Georgia businesses with 100% US-based inbound, outbound, technical support, and back-office teams scheduled to Eastern time, with the PCI-DSS and HIPAA coverage that the state's dominant industries require.",
      ]}
      metros={[
        { name: "Atlanta", href: "/call-center-services-atlanta", focus: "The Southeast's business capital and a national payments and fintech hub. Financial servicing, SaaS support, and large-scale customer operations." },
        { name: "Savannah", focus: "One of the busiest container ports in the country. Logistics exception handling, shipment tracking, and B2B supply chain support." },
        { name: "Augusta", focus: "Healthcare, cybersecurity, and defense-adjacent employers. Compliance-aware technical and patient support programs." },
        { name: "Columbus", focus: "Financial services and insurance operations with a large military-adjacent customer base at Fort Moore." },
        { name: "Macon", focus: "Healthcare systems, manufacturing, and regional services serving Middle Georgia's dispersed population." },
        { name: "Athens", focus: "University-driven services economy, healthcare, and a growing small-business and startup base." },
      ]}
      industries={[
        { name: "Financial Services", href: "/industries/banking-financial-services-call-center", note: "PCI-compliant cardholder support and account servicing for Atlanta payments and banking firms." },
        { name: "Logistics & Shipping", href: "/industries/logistics-shipping-call-center", note: "Tracking, exception handling, and B2B support for Port of Savannah and Atlanta cargo operations." },
        { name: "Healthcare", href: "/industries/healthcare-call-center-services", note: "HIPAA-compliant scheduling and intake for Georgia hospital networks and practices." },
        { name: "Insurance", href: "/industries/insurance-call-center-outsourcing", note: "Claims intake and policyholder servicing for Georgia carriers and agencies." },
      ]}
      faqs={[
        {
          question: "What do BPO companies in Georgia typically specialize in?",
          answer:
            "Georgia BPO work skews toward payments and financial servicing, logistics support, and healthcare intake — reflecting the state's dominant industries. Metro Atlanta's payments concentration in particular means many Georgia programs carry PCI-DSS requirements that would be optional elsewhere.",
        },
        {
          question: "Why does PCI-DSS compliance come up so often for Georgia programs?",
          answer:
            "A large share of US card transactions is processed by companies headquartered in metro Atlanta. If your program touches cardholder data — payment collection, dispute handling, account servicing — your BPO partner needs a documented PCI-DSS program, not just a general security policy. We maintain that stack across all Georgia programs.",
        },
        {
          question: "Do you support businesses outside Atlanta?",
          answer:
            "Yes. We support Georgia businesses statewide, including Savannah logistics operators, Augusta healthcare and cybersecurity employers, Columbus financial firms, and Macon regional services. Coverage is not limited to the Atlanta metro.",
        },
        {
          question: "Can you handle Port of Savannah logistics volume?",
          answer:
            "Yes. Logistics programs tied to Savannah run on unpredictable exception volume — delayed containers, customs holds, and rerouting all generate call spikes that do not follow a normal weekly pattern. Capacity scales elastically rather than being capped by fixed local headcount.",
        },
        {
          question: "Are your Georgia agents on Eastern time?",
          answer:
            "Yes. Georgia programs are staffed with Eastern-time-aligned pods matched to Atlanta business hours, with 24/7 overflow coverage available for programs that need it.",
        },
        {
          question: "How quickly can a Georgia program launch?",
          answer:
            "A pilot can be live in under 48 hours, with a full Georgia team typically in place within two weeks — compared to the 30–60 day ramps common when hiring directly in the competitive Atlanta metro market.",
        },
      ]}
      relatedPost={{ label: "Top 10 BPO Companies in Georgia", href: "/blog/top-10-bpo-companies-georgia" }}
      seoContent={seoContent}
    />
  );
}
