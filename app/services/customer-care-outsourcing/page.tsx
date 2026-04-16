import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Customer Care Outsourcing | Retention & Loyalty Programs | Contact Center USA",
  description:
    "Customer care outsourcing services including customer retention, loyalty programs, complaint resolution, and satisfaction management. Build lasting relationships that reduce churn.",
  alternates: { canonical: "/services/customer-care-outsourcing" },
};

const features = [
  {
    title: "Proactive Retention Programs",
    desc: "Data-driven retention campaigns that identify at-risk customers before they churn, delivering personalized outreach with tailored offers and solutions that keep your most valuable accounts engaged.",
  },
  {
    title: "Loyalty Program Management",
    desc: "End-to-end loyalty program support including enrollment, point tracking, reward redemption, tier management, and member communications — creating experiences that turn customers into advocates.",
  },
  {
    title: "Complaint Resolution & Escalation",
    desc: "Empathetic agents trained in conflict resolution who de-escalate frustrated customers, resolve issues on the first contact, and turn negative experiences into opportunities to strengthen brand loyalty.",
  },
  {
    title: "Customer Satisfaction Surveys",
    desc: "Post-interaction and periodic satisfaction surveys conducted via phone, email, and SMS that capture actionable feedback, measure NPS and CSAT, and identify trends to improve your overall customer experience.",
  },
  {
    title: "Win-Back & Re-Engagement Campaigns",
    desc: "Strategic win-back campaigns targeting lapsed customers with personalized messaging, special incentives, and empathetic outreach that acknowledges their past experience and demonstrates meaningful improvements.",
  },
  {
    title: "VIP & Concierge Support",
    desc: "White-glove support tiers for your highest-value customers with dedicated agents, priority routing, extended service hours, and proactive account management that makes every VIP feel truly valued.",
  },
];

const benefits = [
  "Reduced customer churn rates",
  "Dedicated account-based care teams",
  "Omnichannel support (phone, email, chat)",
  "NPS & CSAT tracking dashboards",
  "Bilingual English/Spanish agents",
  "24/7 customer care availability",
];

const stats = [
  { value: 27, suffix: "%", label: "Reduction in Customer Churn" },
  { value: 94, suffix: "%", label: "Customer Satisfaction Score" },
  { value: 89, suffix: "%", label: "First-Contact Resolution Rate" },
  { value: 4.2, suffix: "M+", label: "Customer Interactions Annually", decimals: 1 },
];

const testimonial = {
  quote:
    "Since outsourcing our customer care to Contact Center USA, our churn rate dropped 27% and our NPS climbed from 38 to 62. Their agents genuinely care about our customers — it shows in every interaction.",
  name: "J.P.",
  title: "Director of Customer Success",
  company: "A Fast-Growing Subscription Services Company",
  initials: "JP",
};

const faqs = [
  {
    question: "How do your agents learn our brand voice and customer care standards?",
    answer:
      "We build a comprehensive brand playbook during onboarding that covers your tone, values, policies, and common scenarios. Agents complete certified training modules, shadow experienced team members, and must pass quality assessments before handling live interactions. Ongoing coaching and call monitoring keep standards consistently high.",
  },
  {
    question: "Can you support customers across multiple channels?",
    answer:
      "Yes. Our customer care teams operate across phone, email, live chat, SMS, and social media from a unified platform. This ensures consistent experiences regardless of how customers reach you, with full conversation history visible to agents across every channel.",
  },
  {
    question: "How do you measure customer satisfaction and program success?",
    answer:
      "We track CSAT, NPS, Customer Effort Score (CES), first-contact resolution rate, average handle time, and retention metrics. You receive real-time dashboards and weekly performance reviews with trend analysis and actionable recommendations to continuously improve the customer experience.",
  },
  {
    question: "Do you offer dedicated or shared agent models?",
    answer:
      "We offer both. Dedicated teams work exclusively on your account and develop deep product expertise. Shared teams are ideal for lower volumes or after-hours coverage. Many clients use a hybrid model — dedicated agents during peak hours and shared overflow for evenings, weekends, and holidays.",
  },
  {
    question: "How do you handle sensitive customer complaints and escalations?",
    answer:
      "Our agents follow structured escalation paths tailored to your policies. Tier 1 agents are empowered to resolve common issues immediately. Complex or sensitive cases route to senior agents or your internal team based on predefined criteria. Every escalation is tracked, timed, and reported to ensure nothing falls through the cracks.",
  },
];

const relatedServices = [
  {
    title: "Customer Service Outsourcing",
    desc: "Comprehensive customer service programs that cover every touchpoint in the customer journey.",
    href: "/solutions/customer-service-outsourcing",
  },
  {
    title: "Customer Experience Analytics",
    desc: "Data-driven insights to measure, understand, and improve your overall customer experience.",
    href: "/services/customer-experience-analytics",
  },
  {
    title: "Omnichannel Contact Center",
    desc: "Unified multi-channel support that delivers consistent customer care across phone, chat, email, and social.",
    href: "/services/omnichannel-contact-center-solutions",
  },
];

export default function CustomerCareOutsourcingPage() {
  return (
    <ServicePageTemplate
      badge="Customer Care Outsourcing"
      title="Customer Care Programs That Build Lasting Loyalty and Reduce Churn"
      titleHighlight="Lasting Loyalty"
      subtitle="Our dedicated care teams deliver the empathetic, personalized support that turns one-time buyers into lifelong customers."
      description="Exceptional customer care is the single greatest driver of retention and lifetime value. Our outsourced customer care teams combine emotional intelligence with operational excellence to resolve issues, strengthen relationships, and protect your revenue. From proactive retention outreach to VIP concierge support, we help you deliver the kind of care that earns five-star reviews and word-of-mouth referrals."
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
