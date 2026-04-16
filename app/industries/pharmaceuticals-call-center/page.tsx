import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Pharmaceutical Call Center Services | Patient & HCP Support | Contact Center USA",
  description:
    "Pharmaceutical call center services including patient assistance programs, adverse event reporting, drug information, clinical trial support, and HCP inquiries. FDA-compliant and HIPAA-certified.",
  alternates: { canonical: "/industries/pharmaceuticals-call-center" },
};

const features = [
  {
    title: "Patient Assistance Programs",
    desc: "End-to-end management of patient assistance and co-pay programs including eligibility screening, enrollment processing, benefit verification, refill coordination, and outcomes tracking to help patients access the medications they need.",
  },
  {
    title: "Adverse Event Reporting",
    desc: "FDA-compliant adverse event intake and reporting with trained pharmacovigilance agents who capture complete case information, follow MedWatch guidelines, and ensure timely submission within regulatory timeframes.",
  },
  {
    title: "Medical Information & Drug Inquiries",
    desc: "Accurate, compliant responses to drug information requests from patients, caregivers, and healthcare providers — covering dosing, interactions, storage, availability, and formulary status with pharmacist oversight.",
  },
  {
    title: "Clinical Trial Support",
    desc: "Patient recruitment screening, enrollment coordination, visit scheduling, and retention support for clinical trials. Our agents help maintain enrollment targets and reduce dropout rates with proactive participant engagement.",
  },
  {
    title: "HCP & Provider Support Lines",
    desc: "Dedicated healthcare provider support for product inquiries, sample requests, formulary questions, medical science liaison referrals, and speaker program coordination — staffed by agents who understand the provider workflow.",
  },
  {
    title: "Product Launch & Specialty Support",
    desc: "Rapid-deployment support for new product launches including hub services, specialty pharmacy coordination, prior authorization assistance, and patient onboarding programs that accelerate time-to-therapy.",
  },
];

const benefits = [
  "FDA & HIPAA compliant operations",
  "Pharmacovigilance-trained agents",
  "Specialty pharmacy coordination",
  "Bilingual English/Spanish support",
  "Real-time adverse event escalation",
  "SOC 2 Type II certified infrastructure",
];

const stats = [
  { value: 99.9, suffix: "%", label: "Regulatory Compliance Rate", decimals: 1 },
  { value: 45, suffix: "%", label: "Faster AE Report Processing" },
  { value: 2, suffix: "M+", label: "Patient Interactions Handled" },
  { value: 100, suffix: "%", label: "On-Time AE Submissions" },
];

const testimonial = {
  quote:
    "Contact Center USA manages our patient assistance program and adverse event reporting for three branded products. Their pharmacovigilance training is rigorous, and we have never missed an FDA submission deadline. They are a true extension of our team.",
  name: "A.R.",
  title: "VP Medical Affairs",
  company: "A Leading Pharmaceutical Company",
  initials: "AR",
};

const faqs = [
  {
    question: "Are your agents trained in FDA adverse event reporting requirements?",
    answer:
      "Yes. Every agent on pharmaceutical accounts completes comprehensive pharmacovigilance training including MedWatch reporting, serious vs. non-serious AE classification, 15-day expedited reporting requirements, and periodic safety report protocols. We conduct quarterly refresher training and regular quality audits.",
  },
  {
    question: "How do you maintain HIPAA compliance for pharmaceutical programs?",
    answer:
      "We implement the same HIPAA safeguards used in healthcare: encrypted communications, access controls, BAA agreements, secure PHI handling, and comprehensive audit trails. All agents complete HIPAA certification before handling any patient data.",
  },
  {
    question: "Can you support specialty pharmacy hub services?",
    answer:
      "Absolutely. We provide full hub services including benefits investigation, prior authorization support, specialty pharmacy coordination, patient onboarding, adherence monitoring, and refill management. We integrate with major specialty pharmacies and payer systems.",
  },
  {
    question: "How do you handle medical information requests that require clinical expertise?",
    answer:
      "Our frontline agents handle standard drug information inquiries using approved response documents. Complex clinical questions are escalated to our pharmacist-supervised medical information team or routed to your medical science liaison team per your established protocols.",
  },
  {
    question: "What experience do you have with product launch support?",
    answer:
      "We have supported over 20 pharmaceutical product launches. Our launch playbook includes pre-launch agent training, rapid staffing ramp, hub service activation, provider support line setup, and real-time volume monitoring. We can be launch-ready within 4-6 weeks.",
  },
];

const relatedServices = [
  {
    title: "Inbound Call Center",
    desc: "Professional inbound call handling for patient and provider inquiries with compliance-first protocols.",
    href: "/solutions/inbound-call-center-services",
  },
  {
    title: "Back Office Support",
    desc: "Document processing, enrollment verification, and administrative support for pharma programs.",
    href: "/solutions/back-office-outsourcing",
  },
  {
    title: "Multilingual Services",
    desc: "Serve diverse patient populations with support in English, Spanish, and 200+ languages.",
    href: "/solutions/multilingual-call-center-services",
  },
];

export default function PharmaceuticalsPage() {
  return (
    <ServicePageTemplate
      badge="Pharmaceutical Call Center Services"
      title="Compliant Call Center Solutions for Pharmaceutical Companies"
      titleHighlight="Pharmaceutical Companies"
      subtitle="FDA-compliant patient support, adverse event reporting, and HCP services that help pharmaceutical companies deliver better patient outcomes while meeting every regulatory requirement."
      description="Our pharmaceutical call center services are built on a foundation of regulatory compliance and clinical accuracy. From patient assistance program management and adverse event reporting to medical information services and clinical trial support, we partner with pharmaceutical manufacturers to deliver programs that improve patient access, ensure safety reporting compliance, and support commercial success."
      features={features}
      benefits={benefits}
      image="/images/cc-agent-pro.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
