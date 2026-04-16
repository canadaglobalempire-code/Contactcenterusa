import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Telemarketing Services | Cold Calling & Campaign Management | Contact Center USA",
  description:
    "Professional telemarketing services including cold calling, campaign management, lead qualification, market research, and event promotion. Reach more prospects with compliant, effective outreach.",
  alternates: { canonical: "/services/telemarketing-services" },
};

const features = [
  {
    title: "Cold Calling & Prospecting",
    desc: "Trained telemarketing agents who deliver compelling pitches, handle objections naturally, and generate interest with prospects who have never heard of your brand — turning cold lists into warm conversations.",
  },
  {
    title: "Campaign Strategy & Script Development",
    desc: "End-to-end campaign planning including audience segmentation, script writing, A/B testing, and ongoing optimization to ensure every calling campaign performs at its peak from day one through completion.",
  },
  {
    title: "Lead Qualification & Handoff",
    desc: "Systematic lead qualification that screens prospects against your criteria, gathers key intelligence, and delivers sales-ready leads to your team with detailed notes — no more wasted follow-up calls.",
  },
  {
    title: "Market Research & Surveys",
    desc: "Phone-based market research and customer surveys that gather quantitative and qualitative insights to inform your product development, marketing strategy, and competitive positioning decisions.",
  },
  {
    title: "Event & Webinar Promotion",
    desc: "Targeted outreach campaigns to drive registrations and attendance for trade shows, webinars, product launches, and corporate events — with confirmation calls and reminder sequences that maximize show rates.",
  },
  {
    title: "Do-Not-Call Compliance Management",
    desc: "Rigorous TCPA compliance with automated DNC list scrubbing, consent management, call time restrictions, and detailed audit trails that protect your business from regulatory penalties and reputational damage.",
  },
];

const benefits = [
  "TCPA & TSR-compliant calling",
  "Professional, US-based callers",
  "Custom script development & A/B testing",
  "Real-time campaign dashboards",
  "Predictive dialer technology",
  "Flexible campaign scaling",
];

const stats = [
  { value: 320, suffix: "K+", label: "Calls Made Monthly" },
  { value: 12, suffix: "%", label: "Average Contact-to-Lead Rate" },
  { value: 100, suffix: "%", label: "DNC Compliance Rate" },
  { value: 4.5, suffix: "x", label: "ROI on Campaign Spend", decimals: 1 },
];

const testimonial = {
  quote:
    "Contact Center USA ran our product launch telemarketing campaign and delivered 4.5x ROI. Their agents were professional, persistent, and fully compliant. We've since made them our ongoing telemarketing partner for all outbound campaigns.",
  name: "Marcus Johnson",
  title: "Marketing Director",
  company: "A National Business Services Company",
  initials: "MJ",
};

const faqs = [
  {
    question: "How do you ensure telemarketing compliance with TCPA and TSR regulations?",
    answer:
      "We maintain comprehensive compliance programs including automated DNC list scrubbing against federal and state registries, consent tracking for every contact, calling time window enforcement, and mandatory disclosures in every call. All agents complete TCPA and TSR training, and our compliance team audits campaigns weekly.",
  },
  {
    question: "Can you develop scripts that sound natural rather than robotic?",
    answer:
      "Absolutely. Our script development team creates conversational frameworks rather than rigid word-for-word scripts. Agents are trained to use the framework as a guide while adapting naturally to each conversation. We A/B test different approaches and continuously refine based on conversion data and call recordings.",
  },
  {
    question: "What industries do your telemarketing services support?",
    answer:
      "We support telemarketing campaigns across financial services, healthcare, technology, home services, education, nonprofit, insurance, and many other sectors. Each campaign is staffed with agents who have relevant industry experience and complete specialized training for your specific products, services, and regulatory requirements.",
  },
  {
    question: "How do you handle call lists and data management?",
    answer:
      "We accept call lists in any standard format, clean and de-duplicate the data, scrub against DNC registries, segment by your targeting criteria, and load into our dialing platform. Throughout the campaign, we track dispositions, update records, and provide refreshed data back to you. All data handling is SOC 2 compliant.",
  },
  {
    question: "What reporting do you provide during and after campaigns?",
    answer:
      "You receive real-time dashboards showing calls attempted, contacts reached, conversations completed, leads generated, and conversion rates. Weekly reports include agent performance breakdowns, script effectiveness analysis, and optimization recommendations. Post-campaign, we deliver comprehensive results analysis with ROI calculations and strategic insights for future campaigns.",
  },
];

const relatedServices = [
  {
    title: "Outbound Call Center",
    desc: "Full-service outbound calling operations for sales, collections, surveys, and customer engagement.",
    href: "/solutions/outbound-call-center-services",
  },
  {
    title: "B2B Sales Outsourcing",
    desc: "Dedicated B2B sales teams for lead generation, appointment setting, and pipeline management.",
    href: "/services/b2b-sales-outsourcing",
  },
  {
    title: "Lead Generation & Appointment Setting",
    desc: "Multi-channel lead generation programs that fill your pipeline with qualified prospects.",
    href: "/solutions/lead-generation-appointment-setting",
  },
];

export default function TelemarketingServicesPage() {
  return (
    <ServicePageTemplate
      badge="Telemarketing Services"
      title="Professional Telemarketing Campaigns That Deliver Measurable Results"
      titleHighlight="Measurable Results"
      subtitle="From cold calling to market research, our compliant telemarketing teams execute outbound campaigns that generate leads, drive sales, and gather insights."
      description="Effective telemarketing requires more than just dialing numbers — it takes skilled communicators, smart targeting, compelling scripts, and strict compliance management. Our professional telemarketing teams combine all four to execute campaigns that consistently outperform expectations. Whether you need lead generation, appointment setting, event promotion, or market research, we deliver the conversations that move your business forward."
      features={features}
      benefits={benefits}
      image="/images/cc-man-headset.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
