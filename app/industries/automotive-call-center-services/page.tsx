import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Automotive Call Center Services | Dealer & OEM Support | Contact Center USA",
  description:
    "Automotive call center services including dealer support, OEM customer care, recall management, warranty claims, and 24/7 roadside assistance. Trusted by dealerships and manufacturers nationwide.",
  alternates: { canonical: "/industries/automotive-call-center-services" },
};

const features = [
  {
    title: "Dealer Support & BDC Services",
    desc: "Full-service business development center support that handles inbound sales inquiries, appointment scheduling, service reminders, and lead follow-up to keep your showroom floor busy and your service bays full.",
  },
  {
    title: "OEM Customer Care Programs",
    desc: "White-label customer care programs for automotive manufacturers that maintain brand standards, handle owner inquiries, and deliver consistent experiences across every touchpoint in the ownership lifecycle.",
  },
  {
    title: "Recall Management & Notifications",
    desc: "Proactive recall outreach campaigns that contact affected vehicle owners, schedule service appointments, and track completion rates to help you meet NHTSA compliance requirements efficiently.",
  },
  {
    title: "Warranty Claims Processing",
    desc: "Trained agents who understand warranty coverage, process claims accurately, and guide customers through the resolution process — reducing disputes and improving customer satisfaction scores.",
  },
  {
    title: "Roadside Assistance Dispatch",
    desc: "24/7 roadside assistance call handling with GPS-enabled dispatch, real-time ETA updates, and seamless coordination between drivers, service providers, and your internal teams.",
  },
  {
    title: "Service Appointment Scheduling",
    desc: "Integrated scheduling solutions that sync with your DMS to book service appointments, send automated reminders, and optimize bay utilization across single or multi-location dealerships.",
  },
];

const benefits = [
  "24/7 roadside assistance coverage",
  "DMS & CRM system integrations",
  "Bilingual English/Spanish agents",
  "Certified automotive industry training",
  "Multi-location dealership support",
  "Real-time reporting & analytics",
];

const stats = [
  { value: 98, suffix: "%", label: "Customer Satisfaction Rate" },
  { value: 35, suffix: "%", label: "Increase in Service Bookings" },
  { value: 1.5, suffix: "M+", label: "Automotive Calls Handled", decimals: 1 },
  { value: 24, suffix: "/7", label: "Roadside Assistance" },
];

const testimonial = {
  quote:
    "Contact Center USA manages our BDC across 12 dealerships. Appointment rates are up 35% and our CSI scores have never been higher. They understand the automotive business inside and out.",
  name: "Michael Torres",
  title: "VP of Operations",
  company: "A Multi-State Auto Dealership",
  initials: "MT",
};

const faqs = [
  {
    question: "Do your agents understand automotive terminology and processes?",
    answer:
      "Yes. Every agent assigned to automotive accounts completes specialized training covering vehicle systems, dealership operations, OEM programs, warranty processes, and industry-specific terminology. We partner with your team to build custom training modules for your brand.",
  },
  {
    question: "Can you integrate with our dealership management system (DMS)?",
    answer:
      "Absolutely. We integrate with all major DMS platforms including CDK Global, Reynolds and Reynolds, and Dealertrack. Our IT team handles the integration to ensure real-time appointment scheduling, customer record access, and seamless data flow.",
  },
  {
    question: "How do you handle recall notification campaigns?",
    answer:
      "We execute multi-channel outreach campaigns via phone, email, and text to notify affected owners, answer their questions about the recall, schedule service appointments, and track completion rates. We provide detailed reporting to help you meet NHTSA compliance targets.",
  },
  {
    question: "Do you support multi-location dealership groups?",
    answer:
      "Yes, we specialize in supporting multi-rooftop dealer groups. We can route calls based on location, maintain separate brand standards for each franchise, and provide consolidated reporting across all your stores while keeping each location's data distinct.",
  },
  {
    question: "What is your average response time for roadside assistance calls?",
    answer:
      "Our average answer time for roadside assistance calls is under 20 seconds. We maintain dedicated agent pools for roadside programs to ensure immediate response, accurate GPS-based dispatch, and real-time status updates to stranded drivers.",
  },
];

const relatedServices = [
  {
    title: "Inbound Call Center",
    desc: "Professional inbound call handling with custom scripts and intelligent routing for automotive businesses.",
    href: "/solutions/inbound-call-center-services",
  },
  {
    title: "Outbound Campaigns",
    desc: "Proactive outreach for recall notifications, service reminders, and customer retention campaigns.",
    href: "/solutions/outbound-call-center-services",
  },
  {
    title: "CX Analytics",
    desc: "Data-driven insights to optimize your customer experience and improve CSI scores.",
    href: "/services/customer-experience-analytics",
  },
];

export default function AutomotivePage() {
  return (
    <ServicePageTemplate
      badge="Automotive Call Center Services"
      title="Professional Call Center Solutions for the Automotive Industry"
      titleHighlight="Automotive Industry"
      subtitle="From dealer BDC support to OEM customer care, we help automotive businesses deliver exceptional experiences at every stage of the ownership journey."
      description="Our automotive call center combines deep industry knowledge with advanced technology to support dealerships, manufacturers, and aftermarket companies. Whether you need roadside assistance dispatch, recall management, warranty claims processing, or full BDC services, our trained agents represent your brand with the expertise your customers expect."
      features={features}
      benefits={benefits}
      image="/images/cc-agent-blue.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
