import type { Metadata } from "next";
import { CustomerAcquisitionContent } from "./Content";
import { SEOContentSection, type SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Customer Acquisition Outsourcing | Contact Center USA",
  description:
    "US-based customer acquisition outsourcing with trained agents, flexible coverage, reporting, and fast onboarding. Request a quote from Contact Center USA.",
  keywords: [
    "customer acquisition outsourcing",
    "lead generation bpo",
    "customer acquisition bpo usa",
    "outsourced customer acquisition services",
    "lead generation call center",
    "outbound lead generation bpo",
    "customer acquisition services usa",
    "sales acquisition outsourcing",
  ],
  alternates: { canonical: "/services/customer-acquisition-outsourcing" },
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Customer Acquisition BPO in USA",
    heading: "The customer acquisition outsourcing partner growth teams trust to build predictable revenue.",
    accent: "predictable revenue",
    body: [
      "Contact Center USA is one of the best customer acquisition outsourcing providers in the USA — a 100% US-based lead generation BPO and customer acquisition BPO USA operation running outbound, inbound, and multi-channel acquisition for B2B and B2C brands.",
      "For CMOs and CROs searching for the best customer acquisition BPO in USA, we deliver qualified leads, booked appointments, and full-funnel acquisition coverage without the ramp time, tooling cost, or headcount risk of building internally.",
    ],
    stats: [
      { stat: "+35%", label: "More qualified leads within the first 90 days of launch" },
      { stat: "3x", label: "Average ROI across customer acquisition outsourcing programs" },
      { stat: "2–3 Wks", label: "From kickoff to the first live customer acquisition campaign" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Acquisition Teams vs. Outsourced Customer Acquisition BPO",
    intro:
      "Every growth leader eventually weighs the same decision: scale acquisition in-house or plug into a lead generation BPO. Here's how the models compare on speed, cost, and actual pipeline produced.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Time to First Qualified Lead",
        left: "3–6 months for recruiting, onboarding, training, and ramp — assuming your first hires stick.",
        right: "First qualified leads flowing from the customer acquisition BPO within 2–3 weeks of kickoff.",
        leftYes: false,
      },
      {
        label: "Cost per Lead",
        left: "High — salary, benefits, data, dialer, tooling, and management overhead all stack up.",
        right: "Typically 40% lower cost per lead in a managed lead generation BPO engagement.",
        leftYes: false,
      },
      {
        label: "Multi-Channel Coverage",
        left: "Usually a phone-only motion — email, social, and SMS get bolted on later and inconsistently.",
        right: "Phone, email, LinkedIn, and SMS orchestrated as one customer acquisition outsourcing motion.",
        leftYes: false,
      },
      {
        label: "Campaign Optimization Cadence",
        left: "Optimization is ad hoc and tied to manager bandwidth.",
        right: "Weekly optimization with A/B tested messaging, ICP refinement, and performance reviews.",
        leftYes: false,
      },
      {
        label: "Scalability",
        left: "Scaling requires recruiting cycles — shrinking requires layoffs.",
        right: "Scale the customer acquisition BPO team up, down, or across segments without payroll risk.",
        leftYes: false,
      },
      {
        label: "Performance Reporting",
        left: "Basic CRM reports and lagging spreadsheets.",
        right: "Real-time dashboards: cost per lead, conversion, appointment show rate, pipeline influenced.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Customer Acquisition Outsourcing Process",
    intro:
      "Every customer acquisition outsourcing engagement follows the same five-stage playbook — engineered to stand up pipeline fast and tune it continuously on real performance data.",
    steps: [
      {
        title: "Strategy & ICP Design",
        body: "Workshop your ICP, segments, offers, and KPIs — then build the lead generation BPO plan around them.",
      },
      {
        title: "Campaign & Script Build",
        body: "Scripts, sequences, offers, and compliance review across phone, email, and LinkedIn outreach.",
      },
      {
        title: "Team Buildout & Training",
        body: "Dedicated US-based customer acquisition BPO agents trained on your brand, product, and disposition rules.",
      },
      {
        title: "Multi-Channel Execution",
        body: "Live campaigns running across channels, fully logged into your CRM and acquisition dashboards.",
      },
      {
        title: "Optimize & Scale",
        body: "Weekly performance reviews tune targeting, messaging, and staffing — we scale what works.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Scale with Customer Acquisition BPO USA Programs",
    intro:
      "Our customer acquisition outsourcing teams are staffed and scripted around the buying cycles, compliance overlays, and stakeholder dynamics of each industry we serve.",
    items: [
      {
        icon: "laptop",
        stat: "SOC 2",
        title: "Technology & SaaS",
        body: "SDR-led lead generation BPO programs for mid-market and enterprise SaaS, wired into Salesforce and HubSpot.",
      },
      {
        icon: "landmark",
        stat: "TCPA",
        title: "Financial Services & Insurance",
        body: "TCPA-compliant acquisition for banking, lending, insurance, and FinTech consumer and business offers.",
      },
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Health Plans",
        body: "HIPAA-aware patient acquisition, enrollment, and provider network outreach campaigns.",
      },
      {
        icon: "home",
        stat: "RESPA",
        title: "Real Estate & Home Services",
        body: "Buyer/seller lead qualification, showing coordination, and investor outreach campaigns.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Growth Teams Choose Our Lead Generation BPO",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Offshore acquisition vendors underperform on US buyers — accent bias, thin product knowledge, and poor objection handling wreck conversion. Low-cost domestic lead generation BPO shops chase volume, not quality, and end up torching your domain reputation and CRM hygiene.",
      "Contact Center USA is different: a US-based customer acquisition outsourcing operation with career SDRs and acquisition specialists, dedicated enablement coaches, and weekly calibration that keeps every campaign tuned to the quality bar your AEs and close teams actually want.",
    ],
    bullets: [
      "100% US-based customer acquisition BPO agents — no offshore or nearshore layers",
      "Multi-channel outreach: phone, email, LinkedIn, SMS in one orchestrated motion",
      "Salesforce, HubSpot, Pipedrive, Outreach, and SalesLoft integrations",
      "Per-lead, per-appointment, or retainer commercials aligned to outcomes",
      "Dedicated program manager, QA lead, and acquisition coach per account",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to plug in a customer acquisition BPO that actually delivers pipeline?",
    accent: "customer acquisition BPO",
    body: "Whether you're launching a new segment, replacing an underperforming lead generation BPO, or scaling acquisition without growing headcount, request a free consultation. We'll model expected lead volume, cost per acquisition, and ROI before you sign anything.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

export default function CustomerAcquisitionPage() {
  return (
    <>
      <CustomerAcquisitionContent />
      <SEOContentSection sections={seoContent} />
    </>
  );
}
