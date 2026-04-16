import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Sales Outsourcing | SDR & Full-Cycle Sales | Contact Center USA",
  description:
    "Sales outsourcing services including SDR teams, full-cycle sales, lead qualification, appointment setting, and pipeline management. Scale your revenue engine without the overhead.",
  alternates: { canonical: "/solutions/sales-outsourcing" },
};

const features = [
  {
    title: "SDR & Lead Qualification",
    desc: "Dedicated sales development representatives prospect, qualify, and nurture leads through your pipeline. We follow your ideal customer profile and qualification criteria to deliver sales-ready opportunities your closers can convert.",
  },
  {
    title: "Full-Cycle Sales Management",
    desc: "From first touch through closed deal, our trained sales professionals manage the entire sales cycle — including discovery calls, product demonstrations, proposal delivery, negotiation, and contract execution on your behalf.",
  },
  {
    title: "Appointment Setting Campaigns",
    desc: "Targeted outbound campaigns that book qualified meetings with decision-makers. We handle prospect research, personalized outreach, objection handling, and calendar coordination to keep your closers focused on selling.",
  },
  {
    title: "Pipeline Management & CRM Administration",
    desc: "We maintain your CRM with accurate, real-time data on every prospect and opportunity. Pipeline reporting, deal stage management, and forecasting analytics give you full visibility into your revenue trajectory.",
  },
  {
    title: "Upsell & Cross-Sell Programs",
    desc: "Maximize customer lifetime value with systematic upsell and cross-sell programs. Our agents identify expansion opportunities within your existing customer base and execute targeted offers that increase average revenue per account.",
  },
  {
    title: "Sales Training & Playbook Development",
    desc: "We build and continuously refine sales playbooks, call scripts, objection-handling guides, and competitive battle cards. Our training team ensures every rep is equipped to represent your brand and close deals effectively.",
  },
];

const benefits = [
  "Dedicated SDR and sales teams",
  "Full-cycle sales from prospecting to close",
  "CRM management and pipeline reporting",
  "Upsell and cross-sell revenue programs",
  "Custom playbooks and battle cards",
  "Performance-based compensation options",
];

const stats = [
  { value: 3, suffix: "x", label: "Pipeline Growth for Clients" },
  { value: 45, suffix: "%", label: "Reduction in Cost Per Acquisition" },
  { value: 200, suffix: "K+", label: "Qualified Meetings Set Annually" },
  { value: 28, suffix: "%", label: "Average Close Rate" },
];

const testimonial = {
  quote:
    "Contact Center USA built and manages our entire SDR function. Our pipeline tripled in the first year and cost per acquisition dropped 45%. They operate like an extension of our sales team, not an outsourced vendor.",
  name: "M.J.",
  title: "SVP of Revenue",
  company: "A B2B Technology Company",
  initials: "MJ",
};

const faqs = [
  {
    question: "How do you train your sales reps on our products and value proposition?",
    answer:
      "We run a comprehensive onboarding program that includes product deep-dives, competitive analysis, buyer persona workshops, and live call shadowing with your team. Reps are certified before making their first call, and ongoing coaching sessions keep skills and knowledge current.",
  },
  {
    question: "Can you work with our existing CRM and sales tools?",
    answer:
      "Yes. We integrate with all major CRM platforms including Salesforce, HubSpot, Pipedrive, and Microsoft Dynamics. We also work with sales engagement tools like Outreach, SalesLoft, Apollo, and LinkedIn Sales Navigator.",
  },
  {
    question: "Do you offer performance-based pricing for sales outsourcing?",
    answer:
      "We offer flexible pricing models including per-appointment, per-qualified-lead, base-plus-commission, and fully performance-based structures. We work with you to design a compensation model that aligns our incentives with your revenue goals.",
  },
  {
    question: "How do you ensure quality and brand consistency in sales outreach?",
    answer:
      "Every interaction follows approved messaging and brand guidelines. We record and review calls, conduct weekly calibration sessions with your team, and track quality metrics alongside revenue metrics. Your brand reputation is never compromised for short-term results.",
  },
  {
    question: "What industries do your sales outsourcing teams specialize in?",
    answer:
      "We support sales programs across B2B technology, SaaS, financial services, healthcare, professional services, and manufacturing. Our team leads match industry-experienced reps to your account to ensure domain credibility from day one.",
  },
];

const relatedServices = [
  {
    title: "Lead Generation & Appointment Setting",
    desc: "Targeted outbound campaigns that fill your sales pipeline with qualified prospects.",
    href: "/solutions/lead-generation-appointment-setting",
  },
  {
    title: "Outbound Call Center",
    desc: "High-volume outbound calling programs for prospecting, surveys, and customer outreach.",
    href: "/solutions/outbound-call-center-services",
  },
  {
    title: "Customer Experience Management",
    desc: "CX strategy that supports customer retention and expansion revenue.",
    href: "/solutions/customer-experience-management",
  },
];

export default function SalesOutsourcingPage() {
  return (
    <ServicePageTemplate
      badge="Sales Outsourcing"
      title="Sales Outsourcing That Scales Your Revenue Without the Overhead"
      titleHighlight="Revenue Without the Overhead"
      subtitle="From SDR teams and appointment setting to full-cycle sales management, we build and run the sales engine that drives your growth."
      description="Our sales outsourcing services give you a dedicated, trained sales force without the cost and complexity of building one in-house. Whether you need SDRs to fill the top of your funnel, appointment setters to book meetings with decision-makers, or full-cycle reps to close deals, we deliver measurable pipeline growth with performance-aligned pricing."
      features={features}
      benefits={benefits}
      image="/images/cc-agent-desk.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
