import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Government Call Center Services | Citizen Support Solutions | Contact Center USA",
  description:
    "Government call center services including citizen support, benefits enrollment, compliance hotlines, public information lines, and emergency alert systems. Trusted by federal, state, and local agencies.",
};

const features = [
  {
    title: "Citizen Services & Information",
    desc: "Professional citizen support lines that handle general inquiries, program information, office locations, service eligibility, and referrals — ensuring constituents receive accurate, timely assistance from knowledgeable agents.",
  },
  {
    title: "Benefits Enrollment & Processing",
    desc: "End-to-end support for government benefits programs including eligibility screening, application assistance, document verification, status updates, and enrollment confirmation across health, housing, and social service programs.",
  },
  {
    title: "Compliance & Ethics Hotlines",
    desc: "Confidential reporting hotlines for fraud, waste, abuse, and ethics concerns with secure call handling, detailed case documentation, anonymous reporting options, and compliant chain-of-custody protocols.",
  },
  {
    title: "Public Information & Outreach",
    desc: "Proactive public information campaigns for policy changes, program launches, census participation, public health initiatives, and community engagement — delivered through phone, email, text, and mail channels.",
  },
  {
    title: "Emergency Alert & Notification",
    desc: "Rapid-deployment notification systems for public safety emergencies, weather alerts, evacuation orders, and critical infrastructure events with multi-channel mass communication and real-time status tracking.",
  },
  {
    title: "311 & Non-Emergency Services",
    desc: "Full-service 311 call center operations including service request intake, issue routing, status tracking, and constituent follow-up — integrated with your municipal work order and CRM systems.",
  },
];

const benefits = [
  "FedRAMP & FISMA compliant infrastructure",
  "Section 508 accessibility support",
  "Bilingual English/Spanish agents",
  "Secure PII handling protocols",
  "COOP & disaster recovery planning",
  "Real-time reporting & SLA dashboards",
];

const stats = [
  { value: 99.9, suffix: "%", label: "Data Security Compliance", decimals: 1 },
  { value: 50, suffix: "%", label: "Reduction in Wait Times" },
  { value: 5, suffix: "M+", label: "Citizen Interactions Handled" },
  { value: 24, suffix: "/7", label: "Emergency Support" },
];

const testimonial = {
  quote:
    "Contact Center USA helped us launch our benefits enrollment hotline in three weeks. Their agents handled over 200,000 calls in the first quarter with a 97% satisfaction rate. Their compliance and security standards are exactly what we needed.",
  name: "Patricia Hammond",
  title: "Director of Constituent Services",
  company: "State of Virginia DHS",
  initials: "PH",
};

const faqs = [
  {
    question: "Do you meet federal security and compliance requirements?",
    answer:
      "Yes. Our infrastructure and processes are designed to meet FedRAMP, FISMA, and NIST 800-53 requirements. We maintain SOC 2 Type II certification, conduct regular penetration testing, and our facilities meet physical security standards required for government data handling.",
  },
  {
    question: "Can you handle sensitive personally identifiable information (PII)?",
    answer:
      "Absolutely. We implement strict PII handling protocols including encrypted data transmission, role-based access controls, clean desk policies, and comprehensive audit trails. All agents complete PII awareness training and undergo background checks appropriate for government work.",
  },
  {
    question: "How do you ensure accessibility for citizens with disabilities?",
    answer:
      "We maintain Section 508 compliance across all communication channels. This includes TTY/TDD support, real-time captioning, screen reader compatibility for digital channels, plain language scripting, and interpreter services for over 200 languages.",
  },
  {
    question: "Can you scale for seasonal enrollment periods or emergency events?",
    answer:
      "Yes. We maintain surge capacity specifically for government programs. For planned events like open enrollment, we ramp staffing weeks in advance. For emergencies, we can activate crisis response teams within hours and scale to handle 10x normal call volumes.",
  },
  {
    question: "What reporting do you provide to government agency stakeholders?",
    answer:
      "We provide real-time dashboards and detailed periodic reports covering call volumes, wait times, resolution rates, constituent satisfaction, and SLA compliance. Reports are customized to your agency's requirements and can be formatted for legislative or budget reporting needs.",
  },
];

const relatedServices = [
  {
    title: "Multilingual Services",
    desc: "Serve diverse citizen populations with support in English, Spanish, and 200+ languages.",
    href: "/solutions/multilingual-call-center-services",
  },
  {
    title: "Back Office Support",
    desc: "Document processing, data entry, and administrative support for government programs.",
    href: "/solutions/back-office-outsourcing",
  },
  {
    title: "Omnichannel Solutions",
    desc: "Reach citizens through phone, email, chat, text, and self-service portals.",
    href: "/services/omnichannel-contact-center-solutions",
  },
];

export default function GovernmentPage() {
  return (
    <ServicePageTemplate
      badge="Government Call Center Services"
      title="Secure Call Center Solutions for Government Agencies"
      titleHighlight="Government Agencies"
      subtitle="FedRAMP-ready citizen support services that meet the highest security standards while delivering the responsive, accessible service your constituents deserve."
      description="Our government call center services are built on a foundation of security, compliance, and accessibility. We partner with federal, state, and local agencies to deliver citizen-facing programs that meet rigorous regulatory requirements while providing the responsive, empathetic service that builds public trust. From benefits enrollment to emergency notification, we handle the full spectrum of government communication needs."
      features={features}
      benefits={benefits}
      image="/images/cc-team-row-2.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
