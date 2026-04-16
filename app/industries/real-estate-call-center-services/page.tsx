import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Real Estate Call Center Services | Lead Qualification & Scheduling | Contact Center USA",
  description:
    "Real estate call center services for lead qualification, appointment scheduling, property inquiries, and investor support. Never miss a hot lead again.",
  alternates: { canonical: "/industries/real-estate-call-center-services" },
};

const features = [
  {
    title: "Lead Qualification & Capture",
    desc: "Immediate response to every inquiry with trained agents who qualify leads based on your criteria — budget, timeline, property type, and location — so your agents only spend time on serious prospects.",
  },
  {
    title: "Appointment Scheduling & Showings",
    desc: "Seamless scheduling for property showings, open houses, and consultations synced directly with your agents' calendars to eliminate double-bookings and maximize selling time.",
  },
  {
    title: "Property Inquiry Management",
    desc: "Knowledgeable agents who answer detailed questions about listings, neighborhood features, HOA details, and pricing — keeping prospects engaged until your team can follow up.",
  },
  {
    title: "Investor Relations Support",
    desc: "Specialized support for real estate investment firms handling investor inquiries, capital call communications, portfolio updates, and deal pipeline management.",
  },
  {
    title: "After-Hours Lead Capture",
    desc: "24/7 live answering ensures you never miss a hot lead. Buyers and sellers who call after hours reach a real person who captures their information and schedules follow-up.",
  },
  {
    title: "CRM Integration & Updates",
    desc: "Real-time lead entry and status updates directly in your CRM — Salesforce, Follow Up Boss, KvCORE, or any platform — so your sales pipeline stays current without manual data entry.",
  },
];

const benefits = [
  "Instant lead response 24/7",
  "CRM integration (Salesforce, Follow Up Boss)",
  "Custom qualification scripts",
  "Bilingual agent availability",
  "Showing & open house scheduling",
  "Dedicated real estate trained agents",
];

const stats = [
  { value: 85, suffix: "%", label: "Lead Response Under 30 Seconds" },
  { value: 3, suffix: "x", label: "More Qualified Appointments" },
  { value: 500, suffix: "K+", label: "Leads Captured" },
  { value: 99, suffix: "%", label: "Uptime Guarantee" },
];

const testimonial = {
  quote:
    "Before Contact Center USA, we were losing leads after hours. Now every call is answered in under 30 seconds, and our qualified appointment rate has tripled. They pay for themselves many times over.",
  name: "A.C.",
  title: "Broker/Owner",
  company: "A National Real Estate Brokerage",
  initials: "AC",
};

const faqs = [
  {
    question: "How do your agents qualify real estate leads?",
    answer:
      "We work with you to develop custom qualification scripts based on your ideal client profile. Agents assess budget range, purchase timeline, preferred locations, property type, and financing status before passing warm leads directly to your sales team.",
  },
  {
    question: "Can you schedule showings directly on our agents' calendars?",
    answer:
      "Yes, we integrate with Google Calendar, Outlook, Calendly, and real estate-specific platforms like Follow Up Boss and ShowingTime. Agents book showings in real-time, send confirmations, and handle rescheduling without any effort from your team.",
  },
  {
    question: "Do you handle both residential and commercial real estate calls?",
    answer:
      "Absolutely. We support residential brokerages, commercial real estate firms, property management companies, and real estate investment groups. Each program is customized with industry-specific scripts and training.",
  },
  {
    question: "How fast do your agents respond to new leads?",
    answer:
      "Our average lead response time is under 30 seconds for phone calls. For web form and chat leads, we respond within 60 seconds. Speed-to-lead is critical in real estate, and we treat every inquiry with urgency.",
  },
  {
    question: "What CRM systems do you integrate with?",
    answer:
      "We integrate with all major real estate CRMs including Salesforce, Follow Up Boss, KvCORE, BoomTown, Sierra Interactive, and HubSpot. Lead data is pushed in real time so your pipeline is always up to date.",
  },
];

const relatedServices = [
  {
    title: "Lead Generation",
    desc: "Proactive outbound calling to generate and qualify new real estate leads.",
    href: "/services/lead-generation",
  },
  {
    title: "Appointment Setting",
    desc: "Professional appointment scheduling that fills your sales calendar with qualified prospects.",
    href: "/services/appointment-setting",
  },
  {
    title: "After-Hours Answering",
    desc: "24/7 live answering so you never miss a potential buyer or seller.",
    href: "/services/after-hours",
  },
];

export default function RealEstatePage() {
  return (
    <ServicePageTemplate
      badge="Real Estate Call Center Services"
      title="Call Center Solutions for Real Estate Professionals"
      titleHighlight="Real Estate Professionals"
      subtitle="Never miss a lead again. Our real estate call center qualifies prospects, schedules showings, and keeps your pipeline full — 24 hours a day, 7 days a week."
      description="In real estate, speed wins deals. Our agents respond to every inquiry within seconds, qualify leads against your criteria, and book showings directly on your calendar. Whether you are a solo agent, a brokerage, or a property management firm, we become the reliable front line that keeps your business growing while you focus on closing."
      features={features}
      benefits={benefits}
      image="/images/hd-agents-working.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
