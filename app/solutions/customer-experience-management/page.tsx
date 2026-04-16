import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Customer Experience Management | CX Strategy & NPS | Contact Center USA",
  description:
    "Customer experience management services including journey mapping, NPS programs, voice of customer analytics, and CX strategy consulting. Transform every touchpoint into a competitive advantage.",
  alternates: { canonical: "/solutions/customer-experience-management" },
};

const features = [
  {
    title: "Customer Journey Mapping",
    desc: "We map every touchpoint across your customer lifecycle — from first contact through renewal — identifying friction points, moments of truth, and opportunities to create differentiated experiences that drive loyalty.",
  },
  {
    title: "NPS & CSAT Program Management",
    desc: "End-to-end Net Promoter Score and Customer Satisfaction survey programs including survey design, multi-channel distribution, response analysis, and closed-loop follow-up processes that turn feedback into action.",
  },
  {
    title: "Voice of Customer Analytics",
    desc: "Aggregate and analyze customer feedback from surveys, calls, social media, and support tickets using AI-powered text analytics to surface themes, sentiment trends, and prioritized improvement opportunities.",
  },
  {
    title: "CX Strategy & Consulting",
    desc: "Our CX consultants partner with your leadership to develop customer-centric strategies, define experience standards, build governance frameworks, and create roadmaps that align CX initiatives with business outcomes.",
  },
  {
    title: "Omnichannel Experience Design",
    desc: "Design seamless experiences across phone, email, chat, social, and self-service channels. We ensure customers receive consistent, personalized service regardless of how or where they choose to engage with your brand.",
  },
  {
    title: "Employee Experience & CX Culture",
    desc: "Great customer experiences start with engaged employees. We help you build CX-focused training programs, recognition systems, and culture initiatives that empower frontline teams to deliver exceptional service.",
  },
];

const benefits = [
  "End-to-end journey mapping and optimization",
  "NPS and CSAT program design and execution",
  "AI-powered voice of customer analytics",
  "Omnichannel experience consistency",
  "CX-focused employee training programs",
  "Executive reporting and ROI measurement",
];

const stats = [
  { value: 30, suffix: "%", label: "Average NPS Improvement" },
  { value: 22, suffix: "%", label: "Increase in Customer Retention" },
  { value: 500, suffix: "K+", label: "Customer Surveys Managed" },
  { value: 4.8, suffix: "/5", label: "Client Satisfaction Score", decimals: 1 },
];

const testimonial = {
  quote:
    "Contact Center USA helped us redesign our entire customer journey. Our NPS jumped 30 points in six months and customer retention improved by 22%. They brought a level of CX expertise we simply did not have in-house.",
  name: "S.M.",
  title: "Chief Customer Officer",
  company: "A National Healthcare Services Company",
  initials: "SM",
};

const faqs = [
  {
    question: "What does a customer journey mapping engagement look like?",
    answer:
      "We start with stakeholder interviews and customer data analysis to identify key personas and touchpoints. Then we facilitate collaborative mapping workshops, validate findings with real customer feedback, and deliver prioritized recommendations with a phased implementation roadmap.",
  },
  {
    question: "How do you measure the ROI of CX improvements?",
    answer:
      "We tie CX metrics directly to business outcomes. This includes tracking NPS and CSAT against retention rates, revenue per customer, cost-to-serve, and lifetime value. You receive quarterly business reviews with clear attribution of CX investments to financial results.",
  },
  {
    question: "Can you manage our existing NPS or CSAT program?",
    answer:
      "Yes. We can take over management of your existing survey programs, optimize survey design and distribution, improve response rates, and build closed-loop processes so that every piece of customer feedback receives appropriate follow-up and drives continuous improvement.",
  },
  {
    question: "Do you work with specific CX technology platforms?",
    answer:
      "We are platform-agnostic and work with all major CX tools including Qualtrics, Medallia, SurveyMonkey, Zendesk, Salesforce, and HubSpot. If you do not have a platform in place, we can recommend and implement the right solution for your needs and budget.",
  },
  {
    question: "How long before we see measurable CX improvements?",
    answer:
      "Most clients see measurable improvements within 60 to 90 days of program launch. Quick wins from journey mapping and process optimization deliver early results, while strategic initiatives like culture change and technology implementation drive sustained improvement over six to twelve months.",
  },
];

const relatedServices = [
  {
    title: "Call Monitoring Services",
    desc: "QA scorecards and call analytics to ensure every interaction meets your CX standards.",
    href: "/solutions/call-monitoring-services",
  },
  {
    title: "Inbound Call Center",
    desc: "Professional inbound support that delivers the customer experience your brand promises.",
    href: "/solutions/inbound-call-center-services",
  },
  {
    title: "Social Customer Care",
    desc: "Responsive social media engagement that extends your CX strategy to digital channels.",
    href: "/solutions/social-customer-care",
  },
];

export default function CustomerExperienceManagementPage() {
  return (
    <ServicePageTemplate
      badge="Customer Experience Management"
      title="Strategic Customer Experience Management That Drives Growth"
      titleHighlight="Drives Growth"
      subtitle="Transform every customer touchpoint into a competitive advantage with data-driven CX strategy, journey mapping, and continuous improvement programs."
      description="Our customer experience management services help organizations design, measure, and optimize every interaction across the customer lifecycle. From NPS programs and journey mapping to voice-of-customer analytics and CX consulting, we provide the strategy and execution to turn customer experience into your strongest differentiator."
      features={features}
      benefits={benefits}
      image="/images/cc-management.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
