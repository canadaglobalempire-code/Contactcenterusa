import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Healthcare Call Center Services | HIPAA Compliant Support | Contact Center USA",
  description:
    "HIPAA-compliant healthcare call center services including patient scheduling, medical triage, insurance verification, and 24/7 nurse hotlines. Trusted by hospitals and clinics nationwide.",
};

const features = [
  {
    title: "HIPAA-Compliant Communications",
    desc: "Every interaction is protected under strict HIPAA guidelines with encrypted channels, secure data handling, and fully trained agents who understand protected health information requirements.",
  },
  {
    title: "Patient Appointment Scheduling",
    desc: "Seamless scheduling, rescheduling, and cancellation management integrated with your EHR and practice management systems to reduce no-shows and optimize provider calendars.",
  },
  {
    title: "Medical Triage Support",
    desc: "Registered nurse-supervised triage protocols help patients get directed to the right level of care, reducing unnecessary ER visits and improving patient outcomes.",
  },
  {
    title: "Insurance Verification & Pre-Auth",
    desc: "Real-time insurance eligibility checks and prior authorization processing to streamline the revenue cycle and reduce claim denials before patients arrive.",
  },
  {
    title: "Prescription Refill Management",
    desc: "Automated and agent-assisted prescription refill lines that integrate with pharmacy systems, ensuring patients receive timely medication without burdening clinical staff.",
  },
  {
    title: "After-Hours & Emergency Dispatch",
    desc: "24/7 after-hours answering services with escalation protocols that connect urgent cases to on-call providers while routing routine inquiries for next-day follow-up.",
  },
];

const benefits = [
  "100% HIPAA-compliant processes",
  "24/7/365 patient support",
  "EHR & EMR integrations",
  "Reduced patient no-show rates",
  "Bilingual English/Spanish agents",
  "Custom call scripting & protocols",
];

const stats = [
  { value: 99.8, suffix: "%", label: "HIPAA Compliance Rate", decimals: 1 },
  { value: 40, suffix: "%", label: "Reduction in No-Shows" },
  { value: 2, suffix: "M+", label: "Patient Calls Handled" },
  { value: 24, suffix: "/7", label: "Always-On Support" },
];

const testimonial = {
  quote:
    "Contact Center USA transformed our patient communication. Wait times dropped by 60% and our HIPAA compliance is airtight. They truly understand the healthcare space.",
  name: "Dr. Sarah Mitchell",
  title: "Chief Operating Officer",
  company: "Pinnacle Health Partners",
  initials: "SM",
};

const faqs = [
  {
    question: "Are your healthcare call center agents HIPAA certified?",
    answer:
      "Yes, every agent handling healthcare calls completes comprehensive HIPAA training and certification before taking a single call. We conduct annual recertification and regular audits to ensure ongoing compliance with all federal privacy regulations.",
  },
  {
    question: "Can you integrate with our existing EHR system?",
    answer:
      "Absolutely. We integrate with all major EHR and practice management platforms including Epic, Cerner, Athenahealth, and eClinicalWorks. Our IT team works directly with your systems administrators to ensure seamless, real-time data synchronization.",
  },
  {
    question: "How do you handle after-hours medical emergencies?",
    answer:
      "Our after-hours protocols are customized to your practice. We use nurse-supervised triage guidelines to assess urgency, connect critical cases to on-call providers within minutes, and route non-urgent matters for next-business-day follow-up.",
  },
  {
    question: "What languages do your healthcare agents support?",
    answer:
      "Our core team provides fluent English and Spanish support. For additional languages, we offer real-time interpreter services covering over 200 languages to ensure every patient receives care in their preferred language.",
  },
  {
    question: "How quickly can you onboard our healthcare organization?",
    answer:
      "Most healthcare clients are fully onboarded within 2-4 weeks. This includes HIPAA compliance setup, EHR integration, custom script development, agent training on your specific protocols, and thorough quality assurance testing before go-live.",
  },
];

const relatedServices = [
  {
    title: "Inbound Call Center",
    desc: "Professional inbound call handling with custom scripts and routing for healthcare providers.",
    href: "/services/inbound",
  },
  {
    title: "After-Hours Answering",
    desc: "24/7 live answering services so your patients always reach a real person.",
    href: "/services/after-hours",
  },
  {
    title: "Bilingual Support",
    desc: "English and Spanish-speaking agents to serve diverse patient populations.",
    href: "/services/bilingual",
  },
];

export default function HealthcarePage() {
  return (
    <ServicePageTemplate
      badge="Healthcare Call Center Services"
      title="Expert Call Center Solutions for Healthcare Providers"
      titleHighlight="Healthcare Providers"
      subtitle="HIPAA-compliant patient communication services that improve outcomes, reduce wait times, and let your clinical team focus on care delivery."
      description="Our healthcare call center combines deep industry expertise with rigorous HIPAA compliance to deliver patient experiences that reflect the quality of your practice. From appointment scheduling and insurance verification to after-hours triage, we handle the communication workload so your staff can focus on what matters most — patient care."
      features={features}
      benefits={benefits}
      image="/images/hd-agents-row.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
