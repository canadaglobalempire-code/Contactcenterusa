import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Urgent Care & Clinic Call Center | HIPAA Patient Intake",
  description:
    "HIPAA-compliant urgent care and medical clinic call center services. 24/7 patient scheduling, insurance verification, after-hours triage, and EHR integration.",
  keywords: [
    "urgent care call center",
    "clinic answering service",
    "hipaa compliant clinic call center",
    "urgent care patient scheduling",
    "walk in clinic answering service",
    "medical clinic call center outsourcing",
    "after hours urgent care triage",
  ],
  alternates: { canonical: "/industries/urgent-care-call-center-services" },
};

const features = [
  {
    title: "HIPAA-Compliant Patient Scheduling & Check-In",
    desc: "Seamless patient appointment booking, online check-in assistance, and walk-in wait-time management integrated directly with your EHR and practice management systems (AthenaHealth, Epic, eClinicalWorks, Experity).",
  },
  {
    title: "Real-Time Insurance Verification & Pre-Auth",
    desc: "Verify insurance eligibility, copay requirements, and prior authorization rules before the patient arrives at the clinic, accelerating front-desk throughput and preventing claim denials.",
  },
  {
    title: "After-Hours Nurse & Provider Triage Dispatch",
    desc: "24/7 protocol-driven call triage directing patients to the appropriate level of care, connecting urgent clinical cases to on-call providers while scheduling non-emergent visits for the next morning.",
  },
  {
    title: "Prescription Refill & Lab Result Routing",
    desc: "Secure, accurate processing of patient prescription refill requests and routine lab inquiry routing that relieves your in-clinic clinical staff from heavy administrative phone loads.",
  },
  {
    title: "Multi-Location Clinic Queue Routing",
    desc: "Intelligent automatic call distribution (ACD) routing incoming patient calls to the nearest clinic location, providing location-specific hours, driving directions, and provider schedules.",
  },
  {
    title: "Bilingual English & Spanish Patient Support",
    desc: "Compassionate bilingual healthcare agents ensure clear, culturally competent communication with diverse patient populations, eliminating language barriers.",
  },
];

const benefits = [
  "100% HIPAA-compliant infrastructure and certified US agents",
  "AthenaHealth, Epic, eClinicalWorks, and Experity EHR integration",
  "Reduced clinic wait times and front-desk phone congestion",
  "24/7/365 patient support with after-hours provider escalation",
  "Bilingual English/Spanish patient intake capabilities",
  "Flexible month-to-month contracts with no long-term lock-in",
];

const stats = [
  { value: 99.9, suffix: "%", label: "HIPAA Compliance Protocol Rate", decimals: 1 },
  { value: 45, suffix: "%", label: "Reduction in Front-Desk Hold Times" },
  { value: 0, suffix: " Violations", label: "Audit-Tested Data Security", prefix: "" },
  { value: 24, suffix: "/7/365", label: "Patient Care Answering" },
];

const testimonial = {
  quote:
    "Our 12 urgent care clinics were drowning in front-desk phone calls, leading to long lobby wait times and frustrated staff. Contact Center USA took over our appointment booking, insurance verification, and after-hours answering. Our patient satisfaction scores increased by 40% in just two months.",
  name: "Dr. Rebecca S.",
  title: "Chief Medical Officer",
  company: "A Multi-Location Urgent Care Network (Florida & Georgia)",
  initials: "RS",
};

const faqs = [
  {
    question: "Are your call center operations and agents 100% HIPAA compliant?",
    answer:
      "Yes. Every agent undergoes rigorous HIPAA and Protected Health Information (PHI) training. Our call center technology, telephony, and data pipelines adhere to strict encryption, access control, and audit logging standards. We execute standard Business Associate Agreements (BAAs) with all healthcare clients.",
  },
  {
    question: "Which electronic health record (EHR) systems do you integrate with?",
    answer:
      "We integrate seamlessly with major urgent care and outpatient EHRs including Experity, AthenaHealth, Epic, eClinicalWorks, NextGen, Cerner, and Kareo to schedule appointments and log patient interactions in real time.",
  },
  {
    question: "How do you handle urgent clinical calls after clinic hours?",
    answer:
      "We follow custom medical triage protocols established by your clinical director. If a patient presents symptoms requiring immediate medical evaluation (e.g. severe chest pain, stroke symptoms, acute respiratory distress), agents immediately advise calling 911 or connect the caller to your on-call physician per your protocol.",
  },
  {
    question: "Can you manage call overflow during high-volume flu or winter surges?",
    answer:
      "Yes. Our domestic agent network provides elastic surge capacity. When flu season, back-to-school physicals, or seasonal viruses cause call volume to spike, we absorb the surge without your in-clinic staff being overwhelmed.",
  },
];

const seoSections: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Urgent Care Call Center Outsourcing",
    heading: "Free your clinic front desk from ringing phones so they can focus on in-person patient care.",
    accent: "focus on in-person patient care",
    body: [
      "When front-desk medical staff juggle check-ins, insurance verification, and constantly ringing phones, patient wait times increase, billing errors rise, and patient satisfaction plunges.",
      "Contact Center USA provides dedicated, HIPAA-certified US healthcare agents who handle all appointment scheduling, insurance pre-checks, directions, and after-hours triage—integrating directly with your EHR.",
    ],
    stats: [
      { stat: "HIPAA", label: "Fully compliant domestic healthcare agents" },
      { stat: "Experity / Athena", label: "Direct EHR scheduling & note entry" },
      { stat: "24/7/365", label: "Continuous patient support & on-call dispatch" },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Clinical Excellence",
    heading: "Deliver Fast, Compassionate Patient Care While Streamlining Clinic Operations",
    image: "/images/cc-agent-multilingual.jpg",
    imagePosition: "right",
    body: [
      "In healthcare, speed, empathy, and accuracy are vital. Patients calling an urgent care center are often stressed, in discomfort, or inquiring about an ill family member. Having a warm, knowledgeable American agent answer within seconds builds immediate patient confidence.",
      "Whether you operate an independent family clinic or a network of 30+ urgent care locations, Contact Center USA delivers enterprise-grade patient access solutions.",
    ],
    bullets: [
      "24/7 patient scheduling, clinic directions, and wait-time communication",
      "Real-time insurance eligibility checks and copay verification",
      "After-hours physician triage dispatch following your clinical protocols",
      "Full BAA execution and end-to-end HIPAA compliance",
      "Month-to-month flexibility with no long-term lock-in",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to elevate your urgent care clinic's patient access and efficiency?",
    accent: "urgent care clinic's patient access",
    body: "Contact Center USA can deploy a dedicated, HIPAA-certified healthcare support pod tailored to your clinics in under 48 hours.",
    ctaLabel: "Get a Free Urgent Care Call Center Quote",
    ctaHref: "/contact",
  },
];

export default function UrgentCarePage() {
  return (
    <ServicePageTemplate
      badge="Healthcare & Urgent Care"
      title="Urgent Care & Medical Clinic Call Center"
      titleHighlight="Urgent Care & Medical Clinic Call Center"
      subtitle="HIPAA-Compliant Patient Scheduling, Insurance Verification & 24/7 Triage"
      description="Streamline clinic operations and improve patient satisfaction. Our 100% US-based, HIPAA-certified agents handle appointment booking, insurance verification, and after-hours answering directly in your EHR 24/7/365."
      features={features}
      benefits={benefits}
      image="/images/cc-agent-multilingual.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={[
        {
          title: "Healthcare Call Center Services",
          desc: "Full hospital, health system, and telehealth BPO solutions.",
          href: "/industries/healthcare-call-center-services",
        },
        {
          title: "Medical Billing & RCM",
          desc: "Revenue cycle management, patient billing, and claims follow-up.",
          href: "/industries/medical-billing-rcm",
        },
        {
          title: "Virtual & Remote Support",
          desc: "24/7 medical answering service and virtual receptionist coverage.",
          href: "/services/virtual-remote-support",
        },
      ]}
      ctaHeading="Ready to streamline your urgent care patient intake?"
      ctaSubtitle="Get a customized healthcare BPO proposal built for your EHR and clinic locations."
      seoContent={seoSections}
    />
  );
}
