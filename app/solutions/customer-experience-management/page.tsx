import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Customer Experience Management USA | CXM BPO | Contact Center USA",
  description:
    "US-based customer experience management services and CX management outsourcing. CXM BPO USA covering journey mapping, NPS/CSAT programs, voice-of-customer analytics, and omnichannel CX strategy.",
  keywords: [
    "customer experience management",
    "cx management outsourcing",
    "cxm bpo usa",
    "customer experience outsourcing",
    "nps program management",
    "voice of customer analytics",
    "cx strategy consulting",
    "omnichannel cx services",
  ],
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

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Customer Experience Management in USA",
    heading: "The CXM BPO that turns customer experience from a survey score into a P&L lever.",
    accent: "a P&L lever",
    body: [
      "Contact Center USA is one of the best customer experience management providers in the USA — a 100% US-based CX management outsourcing partner with certified CX strategists, survey engineers, and VoC analysts who measure outcomes in retention and revenue, not just NPS.",
      "For leaders searching for a CXM BPO in the USA that can actually move customer lifetime value, we deliver journey mapping, VoC programs, closed-loop workflows, and executive reporting that ties every CX investment to the customer-loyalty line on your income statement.",
    ],
    stats: [
      { stat: "+30 pts", label: "Average NPS lift inside 6 months of program launch" },
      { stat: "+22%", label: "Increase in customer retention across managed CXM programs" },
      { stat: "500K+", label: "Surveys designed, fielded, and closed-the-loop annually" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House CX Team vs. Outsourced CXM BPO",
    intro:
      "Building a modern customer experience management function in-house means hiring CX strategists, survey engineers, VoC analysts, text-analytics specialists, and closed-loop ops — all before seeing any lift. Here's how CX management outsourcing compares on the metrics leaders actually measure.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Time to First Value",
        left: "9–18 months to hire the team, pick a platform, and ship an NPS program.",
        right: "First NPS/CSAT waves live in 30 days; journey map and VoC in 90 days.",
        leftYes: false,
      },
      {
        label: "Survey & VoC Depth",
        left: "Survey fatigue, low response rates, shallow open-text analysis.",
        right: "Multi-wave design, AI text analytics, and multi-source VoC integration.",
        leftYes: false,
      },
      {
        label: "Closed-Loop Discipline",
        left: "Detractor follow-up happens when someone has time — or never.",
        right: "SLA-bound closed-loop workflows with owner, action, and outcome tracking.",
        leftYes: false,
      },
      {
        label: "ROI Attribution",
        left: "CX shown as scores, not dollars; hard to defend budget at executive reviews.",
        right: "NPS/CSAT tied to retention, ARPU, LTV, and cost-to-serve in the same view.",
        leftYes: false,
      },
      {
        label: "Omnichannel Consistency",
        left: "Channel teams operate in silos; experience drifts between phone, chat, and social.",
        right: "Omnichannel experience design, journey governance, and cross-channel QA.",
        leftYes: false,
      },
      {
        label: "Cost Structure",
        left: "Fully loaded team + platform licensing + analytics tooling eat any early lift.",
        right: "Flat managed-service pricing with variable survey volume — transparent and predictable.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our CX Management Program Lifecycle",
    intro:
      "Every customer experience management engagement runs through the same disciplined five-stage lifecycle — designed to turn survey data into measurable business outcomes.",
    steps: [
      {
        title: "Discovery & Journey Mapping",
        body: "Stakeholder interviews, data analysis, and collaborative mapping workshops to document the as-is customer journey.",
      },
      {
        title: "Program Design",
        body: "NPS, CSAT, CES, and VoC program architecture — sampling, channels, cadence, and closed-loop ownership.",
      },
      {
        title: "Survey & Analytics Launch",
        body: "Multi-channel distribution, AI-powered text analytics, and real-time executive dashboards live in weeks.",
      },
      {
        title: "Closed-Loop & Coaching",
        body: "Detractor recovery, service recovery playbooks, and coaching feedback loops wired into frontline ops.",
      },
      {
        title: "ROI & Governance",
        body: "Quarterly business reviews tying CX metrics to retention, LTV, and cost-to-serve — plus roadmap for next horizon.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries That Rely on Our CXM BPO Programs",
    intro:
      "Every industry has different CX stakes — regulatory overlays, lifecycle models, and revenue sensitivity. Our CXM programs are tuned to the economics of each sector we serve.",
    items: [
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Pharma",
        body: "Patient experience (PX) programs, CAHPS support, member satisfaction, and HIPAA-compliant VoC across care journeys.",
      },
      {
        icon: "landmark",
        stat: "PCI DSS",
        title: "Financial Services",
        body: "Retail banking CX, wealth-client NPS, lending-journey satisfaction, and dispute-resolution experience measurement.",
      },
      {
        icon: "shopping-bag",
        stat: "SOC 2",
        title: "Retail & Ecommerce",
        body: "Purchase-journey NPS, post-delivery CSAT, returns experience measurement, and loyalty-program VoC.",
      },
      {
        icon: "laptop",
        stat: "SOC 2",
        title: "SaaS & Technology",
        body: "Onboarding NPS, renewal-risk sensing, product CSAT, and support-driven expansion insights.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Choose Contact Center USA for CX Management Outsourcing",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Most CXM vendors either sell you software and walk away or hand you a journey map that never turns into action. Neither moves the retention number. Pure-play agencies lack the contact-center operational muscle to actually close the loop on detractor feedback at scale.",
      "Contact Center USA is different: a US-based customer experience management partner that owns the strategy and the execution — survey design, VoC analytics, and the frontline closed-loop workflows that turn feedback into retained revenue.",
    ],
    bullets: [
      "US-based CX strategists and VoC analysts tied to real operational ops",
      "Platform-agnostic — Qualtrics, Medallia, Zendesk, Salesforce, HubSpot",
      "ROI reporting tied to retention, LTV, and cost-to-serve",
      "Closed-loop workflows with SLA-bound detractor recovery",
      "Omnichannel journey governance across phone, chat, email, and social",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to make customer experience a competitive advantage?",
    accent: "competitive advantage",
    body: "If your NPS is flat, your detractors never get closed the loop, or your CX investments lack ROI attribution, request a free CXM program review. We'll benchmark your current state and show expected retention and revenue lift before any engagement starts.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
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
      seoContent={seoContent}
    />
  );
}
