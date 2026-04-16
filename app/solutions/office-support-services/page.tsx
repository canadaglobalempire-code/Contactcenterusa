import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Office Support Services | Admin & Data Entry | Contact Center USA",
  description:
    "Office support services including administrative assistance, scheduling, data entry, document management, and virtual receptionist solutions. Streamline your operations with dedicated support teams.",
  alternates: { canonical: "/solutions/office-support-services" },
};

const features = [
  {
    title: "Administrative Assistance",
    desc: "Dedicated administrative professionals who handle correspondence, calendar management, travel coordination, expense reporting, and executive support — freeing your team to focus on high-value strategic work.",
  },
  {
    title: "Data Entry & Database Management",
    desc: "Accurate, high-volume data entry services with built-in quality checks and validation processes. We maintain your CRM, ERP, and internal databases so your data stays clean, current, and actionable.",
  },
  {
    title: "Appointment Scheduling & Coordination",
    desc: "Centralized scheduling services that manage appointments, meetings, and resource booking across your organization. We integrate with your calendar systems and send automated confirmations and reminders to reduce no-shows.",
  },
  {
    title: "Document Processing & Management",
    desc: "From digitizing paper records to organizing digital files, we handle document scanning, indexing, data extraction, and secure storage — making your documents searchable, compliant, and accessible when you need them.",
  },
  {
    title: "Virtual Receptionist Services",
    desc: "Professional live receptionists answer your calls with your company greeting, screen and transfer callers, take detailed messages, and manage visitor scheduling — delivering a polished first impression every time someone contacts your business.",
  },
  {
    title: "Mail & Correspondence Management",
    desc: "We process incoming and outgoing mail, manage digital correspondence, handle form letters and bulk mailings, and route communications to the right people in your organization — keeping information flowing efficiently.",
  },
];

const benefits = [
  "Dedicated administrative professionals",
  "High-accuracy data entry with QA checks",
  "Calendar and appointment integration",
  "Secure document processing and storage",
  "Professional virtual receptionist coverage",
  "Scalable support during peak periods",
];

const stats = [
  { value: 99.8, suffix: "%", label: "Data Entry Accuracy Rate", decimals: 1 },
  { value: 40, suffix: "%", label: "Reduction in Admin Overhead" },
  { value: 10, suffix: "K+", label: "Appointments Scheduled Monthly" },
  { value: 24, suffix: "/7", label: "Virtual Receptionist Availability" },
];

const testimonial = {
  quote:
    "Contact Center USA handles our data entry, scheduling, and receptionist services. Administrative overhead dropped 40% and our data accuracy is nearly perfect. Our internal team can finally focus on growing the business instead of managing paperwork.",
  name: "L.H.",
  title: "Director of Operations",
  company: "A Regional Professional Services Firm",
  initials: "LH",
};

const faqs = [
  {
    question: "What types of data entry do you handle?",
    answer:
      "We handle all types of data entry including CRM updates, order processing, survey responses, medical records, insurance claims, invoice processing, and custom database maintenance. Every entry goes through a multi-step quality assurance process to maintain accuracy above 99.5%.",
  },
  {
    question: "Can your virtual receptionists integrate with our phone system?",
    answer:
      "Yes. We integrate with all major phone systems and VoIP platforms. Calls can be forwarded to our receptionists seamlessly, and we follow your custom call handling instructions including screening criteria, transfer protocols, and message delivery preferences.",
  },
  {
    question: "How do you ensure the security of sensitive documents and data?",
    answer:
      "All data handling follows SOC 2 and ISO 27001 standards. Team members undergo background checks and sign confidentiality agreements. Documents are processed in secure environments with encrypted transmission, role-based access controls, and full audit trails.",
  },
  {
    question: "Can you scale support during busy seasons or special projects?",
    answer:
      "Absolutely. We maintain a bench of trained office support professionals who can be deployed within days for seasonal peaks, special projects, or unexpected surges. You pay only for the capacity you need, when you need it.",
  },
  {
    question: "Do you support specific software platforms for scheduling and document management?",
    answer:
      "We work with all major platforms including Microsoft 365, Google Workspace, Salesforce, HubSpot, Calendly, DocuSign, SharePoint, and industry-specific systems. Our team is trained on your specific tools during onboarding to ensure seamless integration with your workflows.",
  },
];

const relatedServices = [
  {
    title: "Back-Office Outsourcing",
    desc: "Comprehensive back-office support for finance, HR, and operational processes.",
    href: "/solutions/back-office-outsourcing",
  },
  {
    title: "Inbound Call Center",
    desc: "Professional call handling that complements your office support with live agent coverage.",
    href: "/solutions/inbound-call-center-services",
  },
  {
    title: "Customer Service Outsourcing",
    desc: "Full-service customer support teams that extend your office capabilities to customer-facing channels.",
    href: "/solutions/customer-service-outsourcing",
  },
];

export default function OfficeSupportServicesPage() {
  return (
    <ServicePageTemplate
      badge="Office Support Services"
      title="Professional Office Support Services That Keep Your Business Running"
      titleHighlight="Business Running"
      subtitle="Streamline administration, eliminate data backlogs, and deliver a polished professional image with dedicated office support teams."
      description="Our office support services provide the administrative backbone your business needs to operate efficiently. From data entry and document management to virtual receptionist services and appointment scheduling, we handle the operational details so your team can focus on strategic priorities. Scalable, accurate, and available when you need us."
      features={features}
      benefits={benefits}
      image="/images/cc-woman-typing.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
