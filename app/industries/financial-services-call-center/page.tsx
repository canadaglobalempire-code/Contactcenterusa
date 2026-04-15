import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Financial Services Call Center | PCI Compliant Support | Contact Center USA",
  description:
    "PCI-compliant financial services call center for secure transactions, fraud alerts, account support, and regulatory compliance. Trusted by financial institutions nationwide.",
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
  name: "Michael Torres",
  title: "SVP of Operations",
  company: "Meridian Financial Group",
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

const relatedServices = [
  {
    title: "Inbound Call Center",
    desc: "Secure inbound call handling for account inquiries and financial support.",
    href: "/services/inbound",
  },
  {
    title: "Outbound Campaigns",
    desc: "Compliant outbound calling for collections, surveys, and customer outreach.",
    href: "/services/outbound",
  },
  {
    title: "Back-Office Processing",
    desc: "Document processing, data entry, and administrative support for financial operations.",
    href: "/services/back-office",
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
    />
  );
}
