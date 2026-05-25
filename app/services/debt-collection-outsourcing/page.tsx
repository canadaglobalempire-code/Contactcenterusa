import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Debt Collection Outsourcing | Contact Center USA",
  description:
    "US-based debt collection outsourcing with trained agents, flexible coverage, reporting, and fast onboarding. Request a quote from Contact Center USA.",
  keywords: [
    "debt collection bpo",
    "debt collection outsourcing bpo in usa",
    "debt collection companies",
    "debt collection call centre",
    "debt collection outsourcing",
    "third party debt collection agency",
    "fdcpa compliant collection",
    "accounts receivable outsourcing",
  ],
  alternates: { canonical: "/services/debt-collection-outsourcing" },
};

const features = [
  {
    title: "Early-Stage Collections",
    desc: "Proactive outreach during the first 30-90 days of delinquency when recovery rates are highest, using empathetic communication and flexible payment arrangements to resolve accounts before they escalate.",
  },
  {
    title: "Late-Stage Recovery Programs",
    desc: "Persistent, compliant recovery efforts for aged accounts using multi-channel contact strategies, skip tracing, and negotiated settlement options that maximize recovery while preserving your brand reputation.",
  },
  {
    title: "FDCPA & TCPA Compliance Management",
    desc: "Rigorous compliance programs built around FDCPA, TCPA, CFPB guidelines, and state-specific regulations. Every call is recorded, every contact attempt logged, and every agent certified on current collection laws.",
  },
  {
    title: "Payment Plan Administration",
    desc: "Flexible payment plan setup and management that works with consumers to find realistic repayment schedules, processes recurring payments securely, and monitors adherence to keep accounts on track.",
  },
  {
    title: "Skip Tracing & Contact Enrichment",
    desc: "Advanced skip tracing capabilities that locate hard-to-reach debtors using proprietary databases, public records, and contact enrichment tools — improving right-party contact rates significantly.",
  },
  {
    title: "Dispute Resolution & Documentation",
    desc: "Professional handling of consumer disputes with proper validation notices, documentation management, and resolution workflows that protect your organization from regulatory risk and potential litigation.",
  },
];

const benefits = [
  "FDCPA & TCPA-compliant operations",
  "Licensed and bonded collectors",
  "Multi-channel contact strategies",
  "Real-time recovery dashboards",
  "Secure PCI-compliant payment processing",
  "Customizable collection strategies per portfolio",
];

const stats = [
  { value: 38, suffix: "%", label: "Average Recovery Rate" },
  { value: 99.8, suffix: "%", label: "Compliance Audit Score", decimals: 1 },
  { value: 12, suffix: "M+", label: "Accounts Managed" },
  { value: 45, suffix: "%", label: "Faster Time to Recovery" },
];

const testimonial = {
  quote:
    "Contact Center USA recovered 38% more on our aged receivables portfolio than our previous vendor — all while maintaining zero compliance violations. Their professional approach actually improved our customer relationships.",
  name: "R.G.",
  title: "VP of Revenue Cycle",
  company: "A Regional Healthcare Provider Network",
  initials: "RG",
};

const faqs = [
  {
    question: "How do you ensure compliance with federal and state collection regulations?",
    answer:
      "Compliance is embedded in everything we do. All agents complete certified FDCPA and TCPA training before handling any accounts. We use compliance-audited scripts, automated contact frequency controls, and real-time call monitoring. Our compliance team conducts regular audits, and we maintain detailed records of every contact attempt for regulatory defense.",
  },
  {
    question: "What types of debt portfolios do you handle?",
    answer:
      "We handle a wide range of portfolios including healthcare, financial services, telecommunications, utilities, and consumer credit. Whether it's first-party early-stage collections on your behalf or third-party recovery of charged-off accounts, we tailor our approach to your specific portfolio characteristics and industry regulations.",
  },
  {
    question: "How do you balance recovery rates with customer experience?",
    answer:
      "We believe respectful treatment actually improves recovery rates. Our agents are trained in empathetic communication techniques that acknowledge consumer situations while guiding them toward resolution. We offer flexible payment options, treat every consumer with dignity, and monitor quality scores alongside recovery metrics to ensure both goals are met.",
  },
  {
    question: "What technology do you use for collections management?",
    answer:
      "We use enterprise-grade collection management systems with automated dialer technology, predictive analytics for contact optimization, skip tracing integrations, payment processing portals, and real-time reporting dashboards. Our systems integrate with your existing platforms via secure APIs for seamless portfolio data exchange.",
  },
  {
    question: "How are your collectors compensated — and does that affect their approach?",
    answer:
      "Our compensation model balances recovery performance with compliance and quality metrics. Agents are rewarded for maintaining high compliance scores and customer satisfaction ratings alongside recovery targets. This ensures collectors stay professional and compliant rather than using aggressive tactics that create regulatory risk.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Debt Collection BPO in USA",
    heading: "The trusted debt collection BPO for US businesses that refuse to compromise on recovery or compliance.",
    accent: "refuse to compromise",
    body: [
      "Contact Center USA is one of the best debt collection BPO companies in the USA — a 100% US-based, FDCPA-compliant debt collection call centre with 25+ years of recovery experience and licensed collectors in all 50 states.",
      "For businesses searching for the best debt collection outsourcing BPO in USA, we deliver higher recovery on aged receivables, lower cost of collection, and a compliance program that has never produced a material regulatory finding.",
    ],
    stats: [
      { stat: "+25–45%", label: "Higher recovery on aged receivables vs. in-house & incumbent vendors" },
      { stat: "50 States", label: "Licensed, bonded, and E&O insured in every US jurisdiction" },
      { stat: "0", label: "Material CFPB / FDCPA / TCPA findings in 10+ years of operation" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Collections vs. Outsourced Debt Collection BPO",
    intro:
      "Every buyer weighs the same decision: build collections internally or place portfolios with a specialized debt collection BPO. Here's how the two compare on the factors that actually determine recovery, cost, and regulatory risk.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Recovery on 60–90+ Day Aged AR",
        left: "Typically 15–25% lower than specialist vendors — internal teams lack late-stage experience and settlement authority.",
        right: "25–45% higher recovery — dedicated late-stage operators, skip tracing, and multi-channel cadence.",
        leftYes: false,
      },
      {
        label: "Cost Structure",
        left: "Fixed salaries, licensing, dialer, compliance audits — whether or not accounts are worked.",
        right: "Variable contingency-fee pricing tied to actual recovery. Pay only on performance.",
        leftYes: false,
      },
      {
        label: "State Licensing & Bonding",
        left: "Typically licensed only where your company operates — limits collection on interstate debtors.",
        right: "Licensed, bonded, and E&O insured in all 50 states where licensing is required.",
        leftYes: false,
      },
      {
        label: "FDCPA / TCPA / Reg F Compliance",
        left: "Compliance burden stays with your organization; internal training often inconsistent.",
        right: "Independently audited compliance QA. 100% call recording. Certified agent training.",
        leftYes: false,
      },
      {
        label: "Reporting & Visibility",
        left: "Static monthly reports; limited visibility into collector behavior or call quality.",
        right: "Real-time dashboards by vintage, segment, collector, channel — plus on-demand call recordings.",
        leftYes: false,
      },
      {
        label: "Scalability",
        left: "Hiring/ramp cycles of 60–90 days limit response to portfolio spikes.",
        right: "New placements live in 10–15 business days — scale up or down without fixed headcount.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our FDCPA-Compliant Collection Process",
    intro:
      "Every portfolio flows through the same rigorous five-stage workflow — engineered to maximize recovery while keeping your organization out of compliance trouble.",
    steps: [
      {
        title: "Portfolio Onboarding",
        body: "File ingest, data validation, and scrubbing against DNC, bankruptcy, deceased, and SCRA lists.",
      },
      {
        title: "Analytics Segmentation",
        body: "Accounts scored by age, balance, risk, and behavior — each routed to the optimal recovery workflow.",
      },
      {
        title: "Multi-Channel Contact",
        body: "TCPA-configured dialers plus SMS, email, letter, portal — all under Regulation F 7-in-7 rules.",
      },
      {
        title: "Payment & Plans",
        body: "PCI DSS Level 1 processing. Negotiated plans monitored with automated re-engagement workflows.",
      },
      {
        title: "Disputes & Audit",
        body: "Section 809 validation handling with audit-ready documentation of every touch and consent record.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve with Outsourced Debt Recovery",
    intro:
      "Each industry carries its own regulatory overlays and collection dynamics. Our workflows are tuned to the specific requirements of the sectors we serve.",
    items: [
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Medical Debt",
        body: "Patient-balance recovery with charity care screening, insurance re-verification, and sensitive communication.",
      },
      {
        icon: "landmark",
        stat: "CFPB",
        title: "Financial Services & Credit",
        body: "Pre- and post-charge-off recovery for banks, credit unions, auto lenders, BNPL, and personal loans.",
      },
      {
        icon: "signal",
        stat: "Reg F",
        title: "Telecom, Utilities & SaaS",
        body: "Final-bill debt, disconnect prevention, and win-back sequences for telecom, utility, and subscription businesses.",
      },
      {
        icon: "briefcase",
        stat: "B2B",
        title: "Commercial Collections",
        body: "Senior commercial collectors handling AP navigation, PO reconciliation, and structured settlement.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Choose Contact Center USA Among Debt Collection Companies",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Offshore agencies underperform on US consumer portfolios because of accent bias, cultural distance, and inconsistent adherence to US collection regulations. Low-cost domestic debt collection companies cut corners on compliance training, exposing clients to FDCPA and TCPA lawsuits. Enterprise collection firms carry bloated overhead that eats into recovery economics.",
      "Contact Center USA is different: a 100% US-based debt collection call centre from secure domestic facilities, backed by a compliance program with zero material regulatory findings and contingency-fee pricing that aligns our incentives with your recovery goals.",
    ],
    bullets: [
      "100% US-based collection workforce, no offshore or nearshore handoffs",
      "Licensed in all 50 states; bonded and E&O insured",
      "Real-time recovery dashboards with on-demand call recordings",
      "First-party, third-party, pre- and post-charge-off engagement models",
      "10–15 business day portfolio launch from signed MSA",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to evaluate a better debt collection BPO partner?",
    accent: "better debt collection BPO",
    body: "If your accounts receivable team is stretched, your aged debt is growing, or your current debt collection companies are under-performing, request a free portfolio analysis. We'll show you expected lift, compliance posture, and projected cost of collection before you place a single account.",
    ctaLabel: "Request a Free Portfolio Analysis",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Outbound Call Center",
    desc: "High-volume outbound calling capabilities for collections, notifications, and payment reminders.",
    href: "/solutions/outbound-call-center-services",
  },
  {
    title: "Back Office Outsourcing",
    desc: "Administrative support for payment processing, documentation, and account reconciliation.",
    href: "/solutions/back-office-outsourcing",
  },
  {
    title: "Fraud Prevention & Cyber Security",
    desc: "Protect your collections operation with advanced fraud detection and secure data handling.",
    href: "/services/fraud-prevention-cyber-security",
  },
];

export default function DebtCollectionOutsourcingPage() {
  return (
    <ServicePageTemplate
      badge="Debt Collection BPO"
      title="Debt Collection Outsourcing BPO in USA"
      titleHighlight="Debt Collection Outsourcing BPO"
      subtitle="One of the leading US-based debt collection companies — our FDCPA-compliant debt collection call centre recovers more revenue on aged receivables while preserving customer relationships."
      description="Recovering outstanding debt requires a delicate balance of persistence, professionalism, and strict regulatory compliance. Our outsourced collection teams are licensed, bonded, and trained on every applicable federal and state regulation. We use data-driven contact strategies, empathetic communication techniques, and flexible payment solutions to recover more revenue faster — without jeopardizing your customer relationships or exposing your organization to compliance risk."
      features={features}
      benefits={benefits}
      image="/images/cc-agent-headset.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
