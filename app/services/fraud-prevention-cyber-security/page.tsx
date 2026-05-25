import type { Metadata } from "next";
import type { SEOPattern } from "@/components/shared/SEOContentSection";
import { FraudPreventionContent } from "./Content";

export const metadata: Metadata = {
  title: "Fraud Prevention Cyber Security | Contact Center USA",
  description:
    "US-based fraud prevention cyber security with trained agents, flexible coverage, reporting, and fast onboarding. Request a quote from Contact Center USA.",
  keywords: [
    "fraud prevention bpo",
    "call center fraud prevention",
    "cyber security outsourcing usa",
    "contact center cyber security",
    "pci dss bpo",
    "fraud detection outsourcing",
    "identity verification bpo",
    "managed security services contact center",
  ],
  alternates: { canonical: "/services/fraud-prevention-cyber-security" },
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Fraud Prevention BPO in USA",
    heading: "The fraud prevention BPO that stops call center fraud before it becomes a regulatory problem.",
    accent: "stops call center fraud",
    body: [
      "Contact Center USA is one of the best fraud prevention BPO companies in the USA — a 100% US-based call center fraud prevention and cyber security outsourcing USA partner for banks, credit unions, healthcare payers, insurance carriers, and ecommerce brands that cannot afford another breach.",
      "Contact centers are the number-one target for social engineering because they are the human front door to customer accounts. Our fraud prevention BPO framework combines voice biometrics, behavioral analytics, real-time transaction scoring, and a US-staffed 24/7 SOC — so suspicious activity is caught in milliseconds, not after the money moves.",
    ],
    stats: [
      { stat: "99.9%", label: "Real-time fraud detection rate across managed portfolios" },
      { stat: "0", label: "Material data breaches in 10+ years of operation" },
      { stat: "PCI L1", label: "PCI DSS Level 1, HIPAA, SOC 2 Type II certified" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Security vs. Outsourced Fraud Prevention BPO",
    intro:
      "Every CISO weighs the same tradeoff: build a contact-center-specific fraud program in-house, or partner with a specialist fraud prevention BPO and cyber security outsourcing provider. Here is the honest side-by-side on what actually determines outcomes.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Fraud Detection Rate",
        left: "Typically 70-80% — manual review and rule-based engines miss sophisticated attacks.",
        right: "99.9% real-time detection with voice biometrics, behavioral analytics, and ML scoring.",
        leftYes: false,
      },
      {
        label: "Time to Detect",
        left: "Hours to days for most call center fraud events — post-incident review.",
        right: "Real-time detection in milliseconds — fraud scored and blocked inline.",
        leftYes: false,
      },
      {
        label: "Compliance Certifications",
        left: "Self-attested control environments with limited external validation.",
        right: "Independently audited PCI DSS Level 1, HIPAA, SOC 2 Type II, GDPR, CCPA.",
        leftYes: false,
      },
      {
        label: "SOC Coverage",
        left: "Business-hours only, 1-2 generalist analysts splitting duties.",
        right: "24/7 SOC staffed by certified security analysts — US-based, cleared where required.",
        leftYes: false,
      },
      {
        label: "Penetration Testing",
        left: "Annual at best — often delayed by budget or staffing constraints.",
        right: "Quarterly third-party pen tests plus continuous automated vulnerability scanning.",
        leftYes: false,
      },
      {
        label: "Incident Response",
        left: "Hours to mobilize; runbooks outdated; communications ad hoc.",
        right: "Minutes to engage — tested IR playbooks, breach coaches, and regulator liaison.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Call Center Fraud Prevention Process",
    intro:
      "Every fraud prevention BPO engagement flows through the same five-stage framework — built to harden your contact center against social engineering, account takeover, and payment fraud.",
    steps: [
      {
        title: "Security Assessment",
        body: "Full risk assessment of your contact center, agents, tools, and customer authentication flows.",
      },
      {
        title: "Defense Architecture",
        body: "Design layered controls: voice biometrics, KBA, transaction scoring, DLP, and access controls.",
      },
      {
        title: "Implementation & Hardening",
        body: "Deploy fraud tooling, integrate with your core systems, and pen-test before production cutover.",
      },
      {
        title: "24/7 SOC Monitoring",
        body: "Round-the-clock SOC monitoring with real-time alerts, triage, and automated response.",
      },
      {
        title: "Continuous Improvement",
        body: "Quarterly reviews, threat intel briefings, and tuning against the evolving attack landscape.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve with Fraud Prevention BPO",
    intro:
      "Each vertical has its own threat profile and regulatory regime. Our call center fraud prevention and cyber security outsourcing USA operations are pre-certified for the industries we serve most.",
    items: [
      {
        icon: "landmark",
        stat: "PCI DSS",
        title: "Banking & Financial Services",
        body: "Account takeover prevention, card fraud, wire fraud interdiction, and FFIEC-aligned controls.",
      },
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Payers",
        body: "Medical identity theft prevention, PHI protection, and telehealth fraud detection.",
      },
      {
        icon: "shield",
        stat: "SOC 2",
        title: "Insurance",
        body: "Claims fraud detection, policy manipulation prevention, and NAIC Model Law alignment.",
      },
      {
        icon: "shopping-bag",
        stat: "PCI DSS",
        title: "Ecommerce & Retail",
        body: "CNP fraud prevention, chargeback reduction, and account takeover on high-volume ecommerce.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Choose Contact Center USA Among Fraud Prevention BPO Providers",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Generic managed security providers do not understand how call center fraud actually happens — the social engineering patterns, the agent-side controls, the authentication tradeoffs between friction and security. Point fraud vendors solve one slice of the problem but never the whole.",
      "Contact Center USA is a US-based fraud prevention BPO that owns the full stack — agents, tooling, authentication, SOC, and incident response — so controls compose instead of colliding. The result is higher detection, fewer false positives, and a cyber security outsourcing USA partner that regulators trust.",
    ],
    bullets: [
      "100% US-based SOC and fraud analyst teams",
      "PCI DSS Level 1, HIPAA, SOC 2 Type II, GDPR, CCPA certified",
      "Voice biometrics + behavioral analytics + ML transaction scoring",
      "24/7 monitoring with minute-scale incident response",
      "Quarterly third-party penetration testing and threat hunts",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to stop call center fraud before it hits your P&L?",
    accent: "stop call center fraud",
    body: "If your contact center handles payments, PHI, or customer credentials, you need a fraud prevention BPO that combines people, process, and tooling. Let us run a free fraud risk assessment and model expected loss reduction before you commit a dollar.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

export default function FraudPreventionPage() {
  return <FraudPreventionContent seoContent={seoContent} />;
}
