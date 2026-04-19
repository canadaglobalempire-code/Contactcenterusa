import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Office Support Services USA | Office Admin BPO USA | Contact Center USA",
  description:
    "US-based office support services and administrative outsourcing BPO. Office admin BPO USA delivering virtual receptionist, data entry, document management, and scheduling at 40% less cost with 99.8% accuracy.",
  keywords: [
    "office support services",
    "administrative outsourcing bpo",
    "office admin bpo usa",
    "virtual receptionist services",
    "administrative bpo services",
    "outsourced office support",
    "admin outsourcing companies",
    "back office admin services",
  ],
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

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Office Support Services in USA",
    heading: "The office admin BPO USA companies choose when administrative accuracy is non-negotiable.",
    accent: "non-negotiable",
    body: [
      "Contact Center USA is one of the best office support services providers in the USA — a 100% US-based administrative outsourcing BPO delivering virtual receptionists, data entry operators, document processors, and scheduling coordinators with 99.8% measured accuracy.",
      "For operations leaders searching for office admin BPO USA partners that actually reduce administrative burn rate, we deliver trained domestic office support professionals, SOC 2-aligned document handling, and elastic capacity that scales without fixed headcount on your P&L.",
    ],
    stats: [
      { stat: "40%", label: "Average reduction in fully loaded administrative overhead cost" },
      { stat: "99.8%", label: "Measured accuracy across data entry and document workflows" },
      { stat: "24/7", label: "Virtual receptionist and office support coverage every day of the year" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Admin Team vs. Office Support Services BPO",
    intro:
      "Every operations lead weighs the same decision: keep admin work on payroll or outsource to a specialized office admin BPO. Here's how the models actually compare on the metrics that show up in your P&L and service levels.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Fully Loaded Cost per Admin FTE",
        left: "$50–$70K per admin FTE including benefits, PTO, management overhead, and desk space.",
        right: "30–40% lower all-in cost with predictable per-hour, per-task, or retainer pricing.",
        leftYes: false,
      },
      {
        label: "Data Entry Accuracy",
        left: "Typically 95–97% — manual spot checks, inconsistent QA coverage, no statistical sampling.",
        right: "99.8% measured accuracy with multi-tier QA, validation rules, and audit sampling.",
        leftYes: false,
      },
      {
        label: "Receptionist Coverage",
        left: "Limited to business hours; lunch, PTO, and sick days leave phones unanswered.",
        right: "24/7 virtual receptionist coverage with no gaps — every call answered professionally.",
        leftYes: false,
      },
      {
        label: "Scalability for Peak Periods",
        left: "60–90 day hiring cycles for seasonal admin spikes; overtime required in between.",
        right: "Scale office admin capacity up or down in days — no new hires, no idle headcount.",
        leftYes: false,
      },
      {
        label: "Document & Data Security",
        left: "SOC 2 and HIPAA controls often inconsistent across dispersed admin staff.",
        right: "SOC 2, ISO 27001, and HIPAA-aligned controls with encrypted transmission and audit trails.",
        leftYes: false,
      },
      {
        label: "Technology & Tooling",
        left: "Per-seat licenses for calendar, DMS, CRM, and scheduling tools paid regardless of use.",
        right: "Enterprise admin tooling, RPA, OCR, and scheduling platforms included in pricing.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Administrative Outsourcing BPO Lifecycle",
    intro:
      "Every engagement runs through the same five-stage lifecycle — engineered to stand up accurate, compliant office admin operations in weeks, not quarters.",
    steps: [
      {
        title: "Admin Workflow Audit",
        body: "We shadow your current administrative workflows, document SOPs, and benchmark cost, accuracy, and turnaround times against industry norms.",
      },
      {
        title: "Process Engineering",
        body: "Workflows re-engineered for automation, dual-check QA, and SLA adherence — with scheduling, DMS, and CRM integrations layered where ROI is clear.",
      },
      {
        title: "Team Build & Training",
        body: "US-based office support professionals recruited, vetted, NDA-signed, and certified on your systems and SOPs before touching a single task.",
      },
      {
        title: "Integration & Go-Live",
        body: "Secure VPN, SSO, and role-based access to your CRM, calendar, DMS, and phone system — with a staged ramp to full production volume.",
      },
      {
        title: "Optimize & Report",
        body: "Weekly KPI reports, monthly process reviews, and continuous improvement — accuracy, throughput, and per-task cost trending the right way.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries That Rely on Our Office Admin BPO USA",
    intro:
      "Every industry carries its own compliance overlays, document types, and administrative complexity. Our office support teams specialize by vertical with the certifications your auditors expect.",
    items: [
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Medical Practices",
        body: "Patient scheduling, insurance verification, medical records indexing, and PHI-safe correspondence for providers and payers.",
      },
      {
        icon: "landmark",
        stat: "SOC 2",
        title: "Financial & Professional Services",
        body: "Client intake, document preparation, scheduling, and billing administration for banks, CPA firms, and advisory practices.",
      },
      {
        icon: "briefcase",
        stat: "NDA",
        title: "Legal Services",
        body: "Calendar management, case file organization, court filing coordination, and privileged correspondence under strict chain-of-custody.",
      },
      {
        icon: "home",
        stat: "MLS",
        title: "Real Estate & Property Management",
        body: "Listing data entry, lease administration, tenant scheduling, and closing document preparation for agents and property firms.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Choose Contact Center USA for Office Support Services",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Most administrative outsourcing BPO vendors chase the lowest hourly rate by stacking offshore staff on time-zone-mismatched shifts, with inconsistent training and compliance evidence that falls apart under audit. The rework, missed appointments, and data errors wipe out every dollar of apparent savings.",
      "Contact Center USA is different: a 100% US-based office admin BPO USA partner with trained domestic receptionists and admin staff, SOC 2 and HIPAA-aligned facilities, and process discipline that delivers 99.8% accuracy from day one — at 30–40% less than the in-house alternative.",
    ],
    bullets: [
      "100% US-based office support staff — no offshore or nearshore handoffs",
      "SOC 2 Type II, ISO 27001, and HIPAA-aligned controls and facilities",
      "Multi-tier QA on data entry with automated validation and sampling",
      "24/7 virtual receptionist coverage with custom call-handling scripts",
      "Elastic capacity — scale up for peaks, down after seasonality",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to evaluate a better office support services partner?",
    accent: "better office support services",
    body: "If your admin team is buried in paperwork, your receptionist line is missing calls, or your data entry error rate is eating margin, request a free office support assessment. We'll benchmark cost, accuracy, and turnaround before you move a single task.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
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
      seoContent={seoContent}
    />
  );
}
