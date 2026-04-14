import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Banking Call Center Services | Account Support & Digital Banking | Contact Center USA",
  description:
    "Banking call center services for account support, loan processing, digital banking assistance, and regulatory compliance. Secure, reliable support for banks and credit unions.",
};

const features = [
  {
    title: "Account Support & Servicing",
    desc: "Comprehensive account management including balance inquiries, transaction disputes, account maintenance, and card services — delivered by agents trained in banking operations and customer-first service.",
  },
  {
    title: "Loan Processing & Origination",
    desc: "End-to-end loan support from application intake and document collection to status updates and closing coordination for mortgage, auto, personal, and commercial loans.",
  },
  {
    title: "Digital Banking Assistance",
    desc: "Technical support for online banking, mobile apps, digital wallets, and Zelle/P2P transfers — helping customers navigate digital channels with confidence and reducing branch traffic.",
  },
  {
    title: "Regulatory Compliance & BSA/AML",
    desc: "Agents trained in BSA/AML requirements, Reg E dispute handling, TILA disclosures, and state banking regulations with documented compliance procedures and audit-ready record-keeping.",
  },
  {
    title: "Fraud Prevention & Resolution",
    desc: "Multi-layered fraud response including suspicious activity alerts, card blocking, identity verification, dispute investigation, and provisional credit processing to protect account holders.",
  },
  {
    title: "New Account Opening",
    desc: "Guided new account opening for checking, savings, CDs, and money market accounts with cross-sell recommendations, identity verification, and welcome onboarding to build relationships from day one.",
  },
];

const benefits = [
  "PCI DSS & SOC 2 certified",
  "BSA/AML trained agents",
  "Core banking system integrations",
  "Reg E dispute processing",
  "Digital banking tech support",
  "New account opening support",
];

const stats = [
  { value: 98, suffix: "%", label: "Customer Satisfaction Score" },
  { value: 35, suffix: "%", label: "Reduction in Branch Calls" },
  { value: 2, suffix: "M+", label: "Banking Calls Handled" },
  { value: 100, suffix: "%", label: "Regulatory Compliance" },
];

const testimonial = {
  quote:
    "Contact Center USA reduced our branch call volume by 35% while maintaining a 98% satisfaction score. Their agents handle everything from mobile banking support to complex loan inquiries with professionalism.",
  name: "James Whitfield",
  title: "EVP of Retail Banking",
  company: "Heritage Community Bank",
  initials: "JW",
};

const faqs = [
  {
    question: "Do your agents have experience with core banking systems?",
    answer:
      "Yes, our agents are trained on major core banking platforms including FIS, Fiserv, Jack Henry, Temenos, and nCino. They navigate these systems daily to access account data, process transactions, and update customer records in real time.",
  },
  {
    question: "How do you ensure compliance with banking regulations?",
    answer:
      "We maintain a dedicated banking compliance team that oversees agent training on BSA/AML, Reg E, TILA, UDAAP, and state-specific regulations. All calls are recorded, quality-monitored, and subject to regular internal and external compliance audits.",
  },
  {
    question: "Can you handle Reg E disputes and fraud claims?",
    answer:
      "Absolutely. Our agents are trained in the full Reg E dispute lifecycle — from initial intake and provisional credit within required timelines to investigation support and final resolution communication. We ensure every dispute meets regulatory deadlines.",
  },
  {
    question: "Do you support digital banking and mobile app inquiries?",
    answer:
      "Yes, we provide dedicated digital banking support teams who help customers with online banking enrollment, mobile app troubleshooting, password resets, Zelle setup, mobile deposit issues, and digital wallet configuration across all major platforms.",
  },
  {
    question: "Can you support both banks and credit unions?",
    answer:
      "We serve both banks and credit unions with tailored programs that reflect the unique culture and member-focused approach of each institution. Our agents understand the differences and adapt their communication style to align with your brand values.",
  },
];

const relatedServices = [
  {
    title: "Inbound Call Center",
    desc: "Professional inbound support for account inquiries and banking services.",
    href: "/services/inbound",
  },
  {
    title: "Fraud Prevention",
    desc: "Real-time fraud monitoring, alerts, and resolution for banking customers.",
    href: "/services/fraud-prevention-cyber-security",
  },
  {
    title: "Back-Office Processing",
    desc: "Loan document processing, data verification, and administrative support.",
    href: "/services/back-office",
  },
];

export default function BankingPage() {
  return (
    <ServicePageTemplate
      badge="Banking Call Center Services"
      title="Call Center Solutions for Banks & Credit Unions"
      titleHighlight="Banks & Credit Unions"
      subtitle="Secure, compliant call center services for account support, loan processing, digital banking, and fraud prevention — trusted by community banks and credit unions nationwide."
      description="Banking customers expect immediate, accurate, and secure support for every interaction. Our agents are trained on core banking platforms, understand regulatory requirements, and deliver the professional service that reflects your institution's reputation. From routine balance inquiries to complex loan processing, we handle the volume so your team can focus on relationship banking."
      features={features}
      benefits={benefits}
      image="/images/hd-agents-pair.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
