import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Financial Services Call Center | Contact Center USA",
  description:
    "US-based financial services call center support for customer care, inbound calls, outbound outreach, and back office workflows. Request an outsourcing quote.",
  keywords: [
    "financial services call center",
    "fintech bpo usa",
    "financial customer support outsourcing",
    "wealth management call center",
    "payments customer service bpo",
    "investment firm support",
    "pci compliant financial call center",
    "lending customer service outsourcing",
  ],
  alternates: { canonical: "/industries/financial-services-call-center" },
};

const features = [
  {
    title: "Secure Transaction Processing",
    desc: "PCI DSS Level 1 certified payment handling with end-to-end encryption, tokenization, and secure voice authentication to protect sensitive financial data during every interaction.",
  },
  {
    title: "Fraud Detection & Alert Management",
    desc: "Real-time fraud alert response with identity verification protocols, suspicious activity documentation, and rapid account security measures to protect your customers and institution.",
  },
  {
    title: "Account Support & Servicing",
    desc: "Comprehensive account management including balance inquiries, statement requests, account updates, and fee explanations delivered by agents who understand financial products.",
  },
  {
    title: "PCI & Regulatory Compliance",
    desc: "Full compliance with PCI DSS, SOX, GLBA, and state financial regulations with documented audit trails, recorded interactions, and regular third-party compliance assessments.",
  },
  {
    title: "Loan & Application Processing",
    desc: "Guided application intake for loans, credit cards, and financial products with pre-qualification screening, document collection, and status updates that keep applicants engaged.",
  },
  {
    title: "Collections & Payment Arrangements",
    desc: "Professional, compliant collections outreach with empathetic agents trained in FDCPA regulations who negotiate payment plans while maintaining positive customer relationships.",
  },
];

const benefits = [
  "PCI DSS Level 1 certified",
  "SOX & GLBA compliant processes",
  "Multi-factor authentication support",
  "Real-time fraud monitoring",
  "Secure payment processing",
  "Regulatory audit documentation",
];

const stats = [
  { value: 99.9, suffix: "%", label: "Data Security Uptime", decimals: 1 },
  { value: 60, suffix: "%", label: "Faster Fraud Response" },
  { value: 1.5, suffix: "M+", label: "Transactions Secured", decimals: 1 },
  { value: 100, suffix: "%", label: "PCI Compliance Rate" },
];

const testimonial = {
  quote:
    "The level of security and compliance Contact Center USA brings is unmatched. Our fraud response time dropped by 60% and we have complete confidence in their handling of sensitive financial data.",
  name: "M.T.",
  title: "SVP of Operations",
  company: "A National Financial Services Firm",
  initials: "MT",
};

const faqs = [
  {
    question: "What security certifications do you hold for financial services?",
    answer:
      "We maintain PCI DSS Level 1 certification, SOC 2 Type II compliance, and adhere to GLBA and SOX requirements. Our facilities use biometric access controls, encrypted communications, and undergo regular penetration testing and third-party audits.",
  },
  {
    question: "How do you handle fraud alerts and suspicious activity?",
    answer:
      "Our agents follow strict identity verification protocols before discussing any account details. When fraud is detected, we immediately secure the account, document the activity, notify the customer, and escalate to your fraud team following your specific procedures.",
  },
  {
    question: "Can your agents process payments and transactions securely?",
    answer:
      "Yes, all payment processing uses PCI-compliant technology including DTMF masking for card data, tokenized storage, and encrypted transmission. Agents never see or have access to full card numbers, ensuring maximum data security.",
  },
  {
    question: "Do you support compliance recording and archiving?",
    answer:
      "All interactions are recorded and archived in compliance with financial industry regulations. We maintain encrypted recordings with tamper-proof audit trails, configurable retention periods, and secure retrieval for regulatory examinations.",
  },
  {
    question: "How do you train agents on financial regulations?",
    answer:
      "Every financial services agent completes a rigorous training program covering FDCPA, TCPA, GLBA, and state-specific regulations. Training is refreshed quarterly, and agents pass compliance assessments before handling live interactions.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Financial Services BPO in USA",
    heading: "The financial services call center partner firms trust when compliance, security, and client experience all carry the same weight.",
    accent: "same weight",
    body: [
      "Contact Center USA is one of the best financial services call center providers in the USA — a 100% US-based, PCI DSS Level 1 certified fintech BPO USA operation trusted by wealth management firms, lending platforms, payments companies, and digital investment brands.",
      "For financial services leaders evaluating financial customer support outsourcing, the non-negotiables are data security, regulatory coverage, and the ability to handle high-trust client interactions at scale. We meet every one of them.",
    ],
    stats: [
      { stat: "PCI L1", label: "PCI DSS Level 1, SOC 2 Type II, GLBA, and SOX-aligned operations" },
      { stat: "99.9%", label: "Security uptime across encrypted voice, data, and payment channels" },
      { stat: "60%", label: "Average reduction in fraud alert response time vs. in-house baseline" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Financial Operations vs. Contact Center USA BPO",
    intro:
      "Every financial services firm weighs the same decision: expand internal compliance-trained support capacity, or outsource to a specialized fintech BPO USA operator. Here's how the two compare on the factors that drive examiner confidence and client retention.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "PCI, GLBA, SOX Compliance",
        left: "Compliance overhead stretches internal CISO teams; certifications slip under resource pressure.",
        right: "PCI DSS Level 1 and SOC 2 Type II maintained year-round with annual third-party audits.",
        leftYes: false,
      },
      {
        label: "Fraud Alert & KYC Response",
        left: "After-hours fraud queues absorb delays; KYC exceptions sit in email inboxes.",
        right: "24/7 fraud and KYC response queues with documented escalation and SLA tracking.",
        leftYes: false,
      },
      {
        label: "Platform Fluency",
        left: "Training limited to your stack; consolidation during M&A creates knowledge gaps.",
        right: "Active experience on Salesforce Financial Services Cloud, nCino, Envestnet, Orion, and BD platforms.",
        leftYes: false,
      },
      {
        label: "FINRA, SEC, State Audit Readiness",
        left: "Internal audit prep consumes weeks of staff bandwidth each exam cycle.",
        right: "Examiner-ready call recording, retention, and documentation delivered on demand.",
        leftYes: false,
      },
      {
        label: "Secure Payment Capture",
        left: "Card-on-voice handling creates PCI scope creep and internal risk findings.",
        right: "DTMF card masking and tokenized capture eliminate agent exposure to cardholder data.",
        leftYes: false,
      },
      {
        label: "Multi-Channel Support",
        left: "Voice dominant; chat, SMS, and secure messaging channels understaffed.",
        right: "Blended voice, chat, SMS, and secure message queues aligned to client channel preference.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Financial Services BPO Onboarding Process",
    intro:
      "Every fintech, wealth manager, lender, and payments platform we support flows through the same structured five-stage workflow — engineered to satisfy CISOs, compliance officers, and operations leaders simultaneously.",
    steps: [
      {
        title: "Vendor Due Diligence",
        body: "SIG/SSAE package, SOC 2 report review, and InfoSec questionnaire completed before data handoff.",
      },
      {
        title: "Secure Integration",
        body: "VPN, MFA, and IP-whitelisted connections to your CRM, core platform, and payment processor.",
      },
      {
        title: "Compliance Script Buildout",
        body: "PCI-, GLBA-, and FINRA-aligned scripts, QA rubrics, and fraud escalation protocols.",
      },
      {
        title: "Agent Certification",
        body: "Product certification, compliance testing, and shadow calls before production traffic.",
      },
      {
        title: "Go-Live & Audit Reporting",
        body: "Phased launch with dashboards, 100% call recording, and on-demand examiner-ready reporting.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Sub-Segments",
    heading: "Financial Services Sub-Segments We Serve",
    intro:
      "Financial services spans a range of distinct sub-segments — each with its own regulator, platform stack, and client expectations. Our financial customer support outsourcing programs are tuned to each.",
    items: [
      {
        icon: "landmark",
        stat: "Wealth",
        title: "Wealth & Asset Management",
        body: "Client service for RIAs, broker-dealers, and wealth platforms with Envestnet, Orion, and Redtail fluency.",
      },
      {
        icon: "dollar",
        stat: "Fintech",
        title: "Fintech & Neobanks",
        body: "Scalable operations for neobanks, embedded finance platforms, and digital-first financial apps.",
      },
      {
        icon: "home",
        stat: "Lending",
        title: "Consumer & Commercial Lending",
        body: "Origination, servicing, and collections support for personal loans, BNPL, HELOC, and SMB lending.",
      },
      {
        icon: "shield",
        stat: "Payments",
        title: "Payments & Processors",
        body: "Merchant support, chargeback response, onboarding assistance, and risk/KYC queues for payment platforms.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Financial Firms Choose Contact Center USA for Fintech BPO USA Services",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Offshore financial operations frequently run afoul of GLBA data handling, SOC 2 boundary controls, and state regulator expectations on client data residency. Generic domestic call centers lack the platform fluency and fraud playbooks that financial services actually require.",
      "Contact Center USA is different: a 100% US-based financial services call center with PCI Level 1 facilities, documented fraud and KYC response playbooks, and a compliance posture that holds up to FINRA, SEC, CFPB, and state DFS scrutiny.",
    ],
    bullets: [
      "100% US-based workforce from PCI DSS Level 1 and SOC 2 Type II certified facilities",
      "Dedicated fraud, KYC, and dispute response queues with 24/7 coverage",
      "Active experience on Salesforce Financial Services Cloud, nCino, Envestnet, Orion, Redtail",
      "DTMF masking and tokenization eliminate agent exposure to cardholder data",
      "Examiner-ready call recording, retention, and documentation on demand",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to evaluate a better financial services BPO partner?",
    accent: "better financial services BPO",
    body: "Whether you're an RIA scaling client service, a fintech navigating rapid user growth, a lender managing seasonal origination spikes, or a payments platform fighting chargeback backlogs — we can show you the compliance, security, and client experience impact before you commit. Request a free consultation and we'll walk through integration scope, regulatory coverage, and go-live timeline.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Inbound Call Center",
    desc: "Secure inbound call handling for account inquiries and financial support.",
    href: "/solutions/inbound-call-center-services",
  },
  {
    title: "Outbound Campaigns",
    desc: "Compliant outbound calling for collections, surveys, and customer outreach.",
    href: "/solutions/outbound-call-center-services",
  },
  {
    title: "Back-Office Processing",
    desc: "Document processing, data entry, and administrative support for financial operations.",
    href: "/solutions/back-office-outsourcing",
  },
];

export default function FinancialServicesPage() {
  return (
    <ServicePageTemplate
      badge="Financial Services Call Center"
      title="Secure Call Center Solutions for Financial Services"
      titleHighlight="Financial Services"
      subtitle="PCI-compliant contact center services that protect sensitive data, prevent fraud, and deliver the trust-building support your customers expect from their financial institution."
      description="Financial services demand the highest standards of security, compliance, and professionalism. Our agents are trained in financial regulations, certified in PCI DSS protocols, and equipped with secure technology to handle everything from routine account inquiries to fraud alerts. We protect your customers and your reputation with every interaction."
      features={features}
      benefits={benefits}
      image="/images/hd-office-team.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
