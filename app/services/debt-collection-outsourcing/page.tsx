import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Debt Collection Outsourcing | Payment Recovery & Compliance | Contact Center USA",
  description:
    "Debt collection outsourcing services including payment recovery, skip tracing, compliance management, and dispute resolution. Recover more revenue while maintaining customer relationships.",
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
      badge="Debt Collection Outsourcing"
      title="Compliant Debt Collection That Recovers Revenue and Preserves Relationships"
      titleHighlight="Recovers Revenue"
      subtitle="Our licensed collection teams combine empathetic communication with proven recovery strategies to maximize returns while maintaining full regulatory compliance."
      description="Recovering outstanding debt requires a delicate balance of persistence, professionalism, and strict regulatory compliance. Our outsourced collection teams are licensed, bonded, and trained on every applicable federal and state regulation. We use data-driven contact strategies, empathetic communication techniques, and flexible payment solutions to recover more revenue faster — without jeopardizing your customer relationships or exposing your organization to compliance risk."
      features={features}
      benefits={benefits}
      image="/images/cc-masked-agents.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
