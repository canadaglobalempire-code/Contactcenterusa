import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "B2B Sales Outsourcing | Lead Generation & Pipeline Management | Contact Center USA",
  description:
    "B2B sales outsourcing services including lead generation, pipeline management, appointment setting, and account-based selling. Drive revenue growth with dedicated sales teams.",
  alternates: { canonical: "/services/b2b-sales-outsourcing" },
};

const features = [
  {
    title: "Outbound Lead Generation",
    desc: "Targeted outbound prospecting campaigns that identify, qualify, and engage decision-makers within your ideal customer profile — filling your pipeline with high-intent opportunities ready for your closers.",
  },
  {
    title: "Pipeline Management & Nurturing",
    desc: "Systematic pipeline management that tracks every prospect through your sales funnel, delivers timely follow-ups, and nurtures cold leads back to warm status with personalized multi-touch sequences.",
  },
  {
    title: "Appointment Setting & Scheduling",
    desc: "Dedicated appointment setters who book qualified meetings directly onto your sales team's calendars, complete with prospect briefs and key intelligence to maximize every conversation.",
  },
  {
    title: "Account-Based Selling Programs",
    desc: "Strategic account-based selling campaigns that coordinate outreach across multiple stakeholders within target accounts, building consensus and accelerating complex B2B buying cycles.",
  },
  {
    title: "Sales Qualification & Scoring",
    desc: "Rigorous lead qualification using BANT, MEDDIC, or your custom framework to ensure only the most promising opportunities reach your senior sales reps — protecting their time and boosting close rates.",
  },
  {
    title: "CRM Integration & Reporting",
    desc: "Seamless integration with Salesforce, HubSpot, and other major CRM platforms for real-time visibility into pipeline activity, conversion metrics, and ROI tracking across every campaign.",
  },
];

const benefits = [
  "Dedicated B2B-trained sales agents",
  "Custom qualification frameworks",
  "Salesforce & HubSpot integrations",
  "Multi-channel outreach (phone, email, LinkedIn)",
  "Real-time pipeline dashboards",
  "Scalable team size month-to-month",
];

const stats = [
  { value: 42, suffix: "%", label: "Increase in Qualified Leads" },
  { value: 3.2, suffix: "x", label: "Pipeline Growth Rate", decimals: 1 },
  { value: 500, suffix: "K+", label: "B2B Calls Made Annually" },
  { value: 28, suffix: "%", label: "Average Close Rate Improvement" },
];

const testimonial = {
  quote:
    "Contact Center USA built us a dedicated outbound team that generated over 200 qualified meetings in the first quarter. Our pipeline tripled and our sales team can finally focus on closing instead of prospecting.",
  name: "David Chen",
  title: "Chief Revenue Officer",
  company: "A Leading Enterprise SaaS Company",
  initials: "DC",
};

const faqs = [
  {
    question: "How do you train agents on our specific B2B product or service?",
    answer:
      "We run an intensive onboarding program where your team provides product training, competitive positioning, and ideal customer profiles. Our agents study your value propositions, objection-handling guides, and CRM workflows before making a single call. We also hold weekly calibration sessions to refine messaging.",
  },
  {
    question: "What lead qualification methodology do you use?",
    answer:
      "We adapt to your preferred framework — whether that's BANT, MEDDIC, SPIN, or a custom qualification model. During onboarding, we collaborate with your sales leadership to define exactly what constitutes a qualified lead, then build scoring criteria and disposition workflows around those requirements.",
  },
  {
    question: "Can you integrate with our existing CRM and sales tools?",
    answer:
      "Yes. We integrate natively with Salesforce, HubSpot, Pipedrive, and other major CRMs. Our team logs every touchpoint, updates lead statuses in real time, and syncs notes so your sales reps have full context before every meeting. We also support sales engagement tools like Outreach and SalesLoft.",
  },
  {
    question: "How quickly can you ramp up a dedicated sales team?",
    answer:
      "Typical ramp time is 2-3 weeks from contract signing to first outbound calls. We begin recruiting and training agents immediately, and most programs are at full capacity within 30 days. For urgent needs, we can deploy experienced agents from our bench in as little as 5 business days.",
  },
  {
    question: "What kind of reporting and visibility do we get?",
    answer:
      "You receive daily activity reports, weekly pipeline reviews, and monthly performance summaries. Our dashboards track calls made, conversations held, meetings booked, leads qualified, and conversion rates at every stage. We also provide call recordings and disposition data for full transparency.",
  },
];

const relatedServices = [
  {
    title: "Lead Generation & Appointment Setting",
    desc: "Comprehensive lead generation campaigns with multi-channel outreach and qualified appointment booking.",
    href: "/solutions/lead-generation-appointment-setting",
  },
  {
    title: "Outbound Call Center",
    desc: "High-volume outbound calling programs for sales, surveys, and customer engagement campaigns.",
    href: "/solutions/outbound-call-center-services",
  },
  {
    title: "Customer Acquisition Outsourcing",
    desc: "End-to-end customer acquisition services that drive growth across every stage of the buyer journey.",
    href: "/services/customer-acquisition-outsourcing",
  },
];

export default function B2BSalesOutsourcingPage() {
  return (
    <ServicePageTemplate
      badge="B2B Sales Outsourcing"
      title="Outsourced B2B Sales Teams That Drive Real Pipeline Growth"
      titleHighlight="Pipeline Growth"
      subtitle="From outbound prospecting to qualified appointment setting, our dedicated B2B sales agents become an extension of your revenue team."
      description="Scaling a B2B sales organization is expensive and time-consuming. Our outsourced sales teams eliminate the overhead of recruiting, training, and managing inside sales reps while delivering consistent pipeline growth. We combine experienced agents, proven playbooks, and deep CRM integration to generate qualified leads and book meetings that convert — so your closers can focus on what they do best."
      features={features}
      benefits={benefits}
      image="/images/cc-discussion.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
