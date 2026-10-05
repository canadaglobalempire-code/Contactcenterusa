import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";
import { pageMeta } from "@/lib/seo-config";

const title = "Manufacturing Call Center Services | US-Based Support";
const description =
  "US-based manufacturing call center services for dealer support, warranty intake, order status and after-hours plant coverage. Request an outsourcing quote.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "manufacturing call center services",
    "call center for manufacturing companies",
    "manufacturing bpo services",
    "dealer support call center",
    "warranty claims call center",
    "industrial customer service outsourcing",
    "distributor support services",
    "after hours answering for manufacturers",
  ],
  alternates: { canonical: "/industries/manufacturing-call-center-services" },
  ...pageMeta(title, description, "/industries/manufacturing-call-center-services"),
};

const features = [
  {
    title: "Dealer & Distributor Support",
    desc: "A dedicated line for your dealer and distributor network — order status, pricing and availability questions, lead capture for regional reps, and program announcements handled by agents who know your product lines.",
  },
  {
    title: "Warranty & Returns Intake",
    desc: "Structured warranty and returns intake that captures model and serial numbers, validates coverage against your rules, documents the issue, and routes complete cases to your claims or service team the first time.",
  },
  {
    title: "Order Status & Order Management",
    desc: "Agents work directly in your ERP or order-management system to confirm order status, communicate shipping changes, and coordinate backorder notifications so customers and dealers are never left guessing.",
  },
  {
    title: "Technical Product Support",
    desc: "Tier 1 product support for the equipment and goods you manufacture — troubleshooting guides, installation questions, parts identification, and documented escalation to your engineering team for complex cases.",
  },
  {
    title: "After-Hours & Plant Emergency Line",
    desc: "24/7 after-hours answering with escalation protocols that connect urgent plant, field, or customer issues to your on-call maintenance and management teams — every call documented with time-stamped notes.",
  },
  {
    title: "Seasonal & Surge Coverage",
    desc: "Flexible capacity for product launches, seasonal peaks, and promotional cycles so seasonal volume never overflows to voicemail — scale up or down without fixed overhead.",
  },
];

const benefits = [
  "100% US-based agents",
  "24/7/365 coverage",
  "ERP & CRM integrations",
  "Custom call scripting & protocols",
  "Bilingual English/Spanish agents",
  "Month-to-month terms",
];

const stats = [
  { value: 500, suffix: "+", label: "US-Based Agents" },
  { value: 25, suffix: "+", label: "Years in Business" },
  { value: 40, suffix: "%", label: "Avg. Cost Savings" },
  { value: 24, suffix: "/7", label: "Always-On Support" },
];

const faqs = [
  {
    question: "Can your agents work directly in our ERP or order-management system?",
    answer:
      "Yes. Our agents are experienced with major ERP, CRM, and order-management platforms and can be trained on your specific instance. Agents confirm order status, update records, and document calls directly in your system, so your internal team always sees the same source of truth without duplicate data entry.",
  },
  {
    question: "How do you handle after-hours plant or field emergencies?",
    answer:
      "We build escalation protocols around your operations before launch. Urgent calls are triaged against your criteria and connected to your on-call maintenance or management staff, while routine messages are documented for the next business day. Every after-hours call is time-stamped and reported so nothing falls through the cracks.",
  },
  {
    question: "Do you support dealer and distributor programs?",
    answer:
      "Yes. We run dedicated dealer and distributor lines covering order status, availability and pricing questions within your guidelines, lead capture routed to the right regional rep, and outreach for programs and announcements. Agents follow your playbooks so your network gets consistent, on-brand answers from a real person.",
  },
  {
    question: "Can you handle warranty claims and returns intake?",
    answer:
      "Absolutely. Agents follow a structured intake workflow — capturing model and serial information, the nature of the issue, and proof-of-purchase details, then validating coverage against your warranty rules and creating a complete case for your claims or service team. Clean first-time intake reduces back-and-forth and speeds resolution.",
  },
  {
    question: "How quickly can a manufacturing program launch?",
    answer:
      "Most manufacturing clients launch within 2-4 weeks. That includes workflow mapping across your dealers, plants, and customers, ERP/CRM integration, custom scripting around your product lines, agent training on your products, and quality assurance testing before the first live call.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Manufacturing Call Center in USA",
    heading: "The manufacturing call center that keeps dealers supported, plants covered, and customers informed.",
    accent: "dealers supported",
    body: [
      "Contact Center USA provides manufacturing call center services for industrial equipment makers, tier suppliers, building products manufacturers, and consumer goods brands — a 100% US-based team handling dealer support, warranty intake, order status, and after-hours plant coverage.",
      "For manufacturers evaluating a call center partner, we combine custom playbooks built around your products and dealer network, ERP and CRM integrations, and 24/7/365 live coverage — without long-term contracts.",
    ],
    stats: [
      { stat: "500+", label: "US-based agents across our domestic operations" },
      { stat: "25+", label: "Years of outsourced call center experience since 1999" },
      { stat: "40%", label: "Average cost savings vs. staffing the same coverage in-house" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Front Desk vs. Contact Center USA",
    intro:
      "Every manufacturer weighs the same decision: pile dealer and customer calls onto an already-busy front desk, or outsource to a specialized manufacturing call center. Here's how the two models compare on the factors that determine dealer satisfaction and customer retention.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA",
    rows: [
      {
        label: "After-Hours & Weekend Coverage",
        left: "Front desk staffed business hours; after-hours calls roll to voicemail or an answering machine.",
        right: "24/7/365 live coverage with documented escalation to your on-call maintenance and management teams.",
        leftYes: false,
      },
      {
        label: "Seasonal & Launch Surge Capacity",
        left: "Fixed headcount — seasonal spikes become hold queues, dropped calls, and overtime.",
        right: "Pre-trained bench scales with your volume for launches, promotions, and seasonal peaks.",
        leftYes: false,
      },
      {
        label: "Dealer & Distributor Consistency",
        left: "Whoever is free picks up the phone; answers vary by person and by day.",
        right: "Trained pods follow your playbooks with routing by region, product line, and account.",
        leftYes: false,
      },
      {
        label: "ERP & CRM Integration",
        left: "Reps swivel-chair between systems; order lookups interrupt other work.",
        right: "Agents work directly in your ERP/CRM with order and account data on screen.",
        leftYes: false,
      },
      {
        label: "QA & Reporting",
        left: "Informal monitoring; complaints surface before problems do.",
        right: "Recorded calls, scorecards, and weekly KPI reviews with documented escalation paths.",
        leftYes: false,
      },
      {
        label: "Hiring, Training & Turnover",
        left: "Months to recruit and ramp; every resignation re-opens the coverage gap.",
        right: "A staffed, trained, and QA'd team live in 2-4 weeks — month-to-month terms.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Manufacturing Call Center Onboarding Process",
    intro:
      "Every manufacturer partnership follows the same five-stage launch — engineered around your products, dealer network, and plant operations so coverage starts without disrupting the floor or the front office.",
    steps: [
      {
        title: "Discovery & Workflow Mapping",
        body: "Product lines, dealer network, warranty rules, escalation paths, and call volume patterns mapped together.",
      },
      {
        title: "Systems Integration",
        body: "Secure connections to your ERP, CRM, and order-management platforms with documented access rules.",
      },
      {
        title: "Playbook & Script Buildout",
        body: "Custom scripts for dealers, customers, and after-hours triage reviewed against your policies.",
      },
      {
        title: "Agent Training & QA",
        body: "Agents trained on your products and systems, with assessment calls before any live coverage.",
      },
      {
        title: "Go-Live & Continuous Improvement",
        body: "Staged launch with call monitoring, weekly KPI reviews, and ongoing calibration with your team.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Sub-Segments",
    heading: "Manufacturing Sub-Segments We Serve",
    intro:
      "Industrial equipment, automotive supply, building products, and consumer goods all run on different dealer structures and support rhythms. Our manufacturing call center services flex to the economics of each sub-segment.",
    items: [
      {
        icon: "factory",
        stat: "Equipment",
        title: "Industrial Equipment & Machinery",
        body: "Dealer hotlines, warranty intake, parts identification, and after-hours breakdown support for equipment makers.",
      },
      {
        icon: "wrench",
        stat: "Automotive",
        title: "Automotive & Tier Suppliers",
        body: "Dealer support, supply-chain communication, quality-campaign intake, and program announcement outreach.",
      },
      {
        icon: "home",
        stat: "Building",
        title: "Building Products & Construction Supply",
        body: "Contractor order status, jobsite delivery coordination, quote follow-up, and dealer program support.",
      },
      {
        icon: "store",
        stat: "Consumer",
        title: "Consumer & Durable Goods",
        body: "Product support, retailer support lines, registration and returns intake, and recall communication.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Manufacturers Choose Contact Center USA",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Generic call centers treat manufacturing like any other vertical — they miss the rhythm of production schedules, dealer networks, and warranty cycles, and offshore teams struggle with technical product vocabulary. Your dealers notice, and so do your customers.",
      "Contact Center USA is different: a 100% US-based operation with playbooks built around your products and dealers, agents trained on your ERP and CRM, and escalation paths tied to your on-call maintenance and management teams.",
    ],
    bullets: [
      "100% US-based agents your dealers and customers can understand",
      "Integrations with major ERP, CRM, and order-management platforms",
      "24/7/365 after-hours and emergency-line coverage with documented escalation",
      "Bilingual English/Spanish core team for dealer and customer bases",
      "Month-to-month terms with surge staffing for seasonal and launch cycles",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to evaluate a US-based manufacturing call center partner?",
    accent: "manufacturing call center",
    body: "Whether after-hours plant calls are rolling to voicemail, warranty intake is bogging down your service team, or dealers are waiting days for order answers, request a free consultation. We'll walk you through integration scope, staffing plan, and go-live timeline — and show you what coverage would look like before you commit.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Inbound Call Center",
    desc: "Professional inbound call handling with custom scripts and routing for manufacturers.",
    href: "/solutions/inbound-call-center-services",
  },
  {
    title: "Technical Support Outsourcing",
    desc: "Tiered product support for the equipment and goods you manufacture.",
    href: "/solutions/technical-support-outsourcing",
  },
  {
    title: "Customer Service Outsourcing",
    desc: "Omnichannel customer service that flexes with your production and sales cycles.",
    href: "/solutions/customer-service-outsourcing",
  },
  {
    title: "Logistics & Shipping Support",
    desc: "Shipment tracking, delivery inquiries, and dispatch support for your supply chain.",
    href: "/industries/logistics-shipping-call-center",
  },
];

export default function ManufacturingPage() {
  return (
    <ServicePageTemplate
      badge="Manufacturing Call Center Services"
      title="Expert Call Center Solutions for Manufacturing Companies"
      titleHighlight="Manufacturing Companies"
      subtitle="US-based dealer support, warranty intake, order status, and after-hours plant coverage that keeps your network moving while your team stays focused on production."
      description="Manufacturing communication runs on precision — dealers need order answers, customers need product support, and plants need after-hours coverage that reaches the right on-call people. Our manufacturing call center services combine US-based agents trained on your products, ERP and CRM integrations, and documented escalation protocols so every call is handled the way your team would handle it."
      features={features}
      benefits={benefits}
      image="/images/cc-team-collab.jpg"
      stats={stats}
      faqs={faqs}
      goLiveStat={{ value: "2-4", label: "Weeks to Launch" }}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
