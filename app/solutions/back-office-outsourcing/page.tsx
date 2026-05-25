import type { Metadata } from "next";
import type { SEOPattern } from "@/components/shared/SEOContentSection";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Back Office Outsourcing | Contact Center USA",
  description:
    "US-based back office outsourcing with trained agents, flexible coverage, reporting, and fast onboarding. Request a quote from Contact Center USA.",
  keywords: [
    "back office outsourcing",
    "back office bpo usa",
    "back office support services",
    "back office outsourcing companies",
    "data entry outsourcing",
    "document processing outsourcing",
    "bpo back office services",
    "outsourced back office operations",
  ],
  alternates: { canonical: "/solutions/back-office-outsourcing" },
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Back Office Outsourcing in USA",
    heading: "The back office BPO USA enterprises trust when accuracy and compliance are non-negotiable.",
    accent: "non-negotiable",
    body: [
      "Contact Center USA is one of the best back office outsourcing providers in the USA — a 100% US-based back office BPO USA partner delivering data entry, document processing, records management, and order-fulfillment operations with 99.5%+ measured accuracy.",
      "For teams searching for back office support services in the USA that actually move cost-per-transaction and turnaround time in the right direction, we deliver trained operators, HIPAA and SOC 2 controls, and elastic capacity that scales with your seasonality — without fixed headcount on your balance sheet.",
    ],
    stats: [
      { stat: "40%", label: "Average reduction in fully loaded back-office operating cost" },
      { stat: "99.5%+", label: "Measured accuracy across data entry and document workflows" },
      { stat: "2x", label: "Faster turnaround vs. typical in-house back-office benchmarks" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Back Office vs. Back Office Outsourcing BPO",
    intro:
      "Every operations leader weighs the same trade-off: keep back office work in-house or outsource to a specialized back office BPO. Here's how the models compare on the metrics that actually show up in your P&L and service levels.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Fully Loaded Cost per FTE",
        left: "$55–$75K per back-office FTE including benefits, PTO, management overhead, and facilities.",
        right: "30–40% lower all-in cost with predictable per-unit, hourly, or retainer pricing.",
        leftYes: false,
      },
      {
        label: "Accuracy & QA",
        left: "Typically 95–97% — manual spot checks, no statistical sampling, limited QA bandwidth.",
        right: "99.5%+ accuracy with multi-tier QA, automated validation, and audit sampling built in.",
        leftYes: false,
      },
      {
        label: "Scalability",
        left: "60–90 day hiring cycles; overtime required for seasonal surges.",
        right: "Scale capacity up or down in days — no new hires, no idle headcount after peak.",
        leftYes: false,
      },
      {
        label: "Compliance Posture",
        left: "HIPAA, SOC 2, PCI DSS controls inconsistent across dispersed back-office teams.",
        right: "HIPAA, SOC 2 Type II, and PCI DSS-aligned facilities with audited access controls.",
        leftYes: false,
      },
      {
        label: "Technology",
        left: "Licenses, RPA tooling, and OCR platforms paid per-seat regardless of utilization.",
        right: "Enterprise tooling, RPA, and OCR included in managed-service pricing.",
        leftYes: false,
      },
      {
        label: "Business Continuity",
        left: "Single location risk; outages and weather events halt back-office processing.",
        right: "Multi-site redundancy, disaster recovery playbooks, and audited BCP programs.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Back Office Support Services Lifecycle",
    intro:
      "Every engagement runs through the same disciplined five-stage lifecycle — engineered to stand up accurate, compliant back-office operations in weeks, not quarters.",
    steps: [
      {
        title: "Operations Audit",
        body: "We shadow your current back-office workflows, document SOPs, and quantify cost, accuracy, and throughput baselines.",
      },
      {
        title: "Process Engineering",
        body: "Workflows re-engineered for automation, dual-check QA, and SLA adherence — with RPA and OCR layered in where ROI is clear.",
      },
      {
        title: "Team Build & Training",
        body: "US-based operators recruited, vetted, and certified on your systems, SOPs, and quality benchmarks before a single record is touched.",
      },
      {
        title: "Integration & Launch",
        body: "Secure VPN, SSO, and role-based access to your CRM, ERP, DMS, and custom tools — with a staged ramp to full production volume.",
      },
      {
        title: "Optimize & Report",
        body: "Weekly KPI reporting, monthly process reviews, and continuous improvement — accuracy, cost, and turnaround all trending the right way.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries That Rely on Our Back Office BPO USA",
    intro:
      "Every industry has its own compliance overlays, document types, and accuracy bars. Our back-office teams are specialized by vertical with the certifications your auditors expect.",
    items: [
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Payers",
        body: "Medical records indexing, claims data entry, insurance verification, and PHI-safe document management at scale.",
      },
      {
        icon: "landmark",
        stat: "SOC 2",
        title: "Financial Services",
        body: "Account reconciliation, transaction processing, loan documentation, and audit-ready records for banks and lenders.",
      },
      {
        icon: "shopping-bag",
        stat: "PCI DSS",
        title: "Retail & Ecommerce",
        body: "Product catalog management, order entry, returns handling, and vendor correspondence for high-volume retailers.",
      },
      {
        icon: "shield",
        stat: "NAIC",
        title: "Insurance",
        body: "Policy administration, claims intake documentation, underwriting support, and renewal processing across all 50 states.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Choose Contact Center USA for Back Office Outsourcing",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Most back office outsourcing companies chase the lowest hourly rate by stacking offshore teams on time-zone-mismatched shifts, with inconsistent training and compliance evidence that falls apart under an audit. The rework, escalations, and error rates wipe out every dollar of apparent savings.",
      "Contact Center USA is different: a 100% US-based back office BPO USA partner with trained domestic operators, HIPAA and SOC 2-aligned facilities, and the process engineering discipline to hit 99.5%+ accuracy from day one — at 30–40% less than the in-house alternative.",
    ],
    bullets: [
      "100% US-based operators — no offshore or nearshore handoffs",
      "HIPAA, SOC 2 Type II, and PCI DSS-aligned controls and facilities",
      "Multi-tier QA with automated validation and audit sampling",
      "RPA, OCR, and intelligent document processing included",
      "Elastic capacity — scale up for peaks, down after seasonality",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to evaluate a better back office outsourcing partner?",
    accent: "better back office outsourcing",
    body: "If your back office is choking on seasonal volume, your error rates are eating margin, or your compliance posture is a liability, request a free back-office assessment. We'll benchmark cost, accuracy, and turnaround before you move a single transaction.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

export default function Page() {
  return <Content seoContent={seoContent} />;
}
