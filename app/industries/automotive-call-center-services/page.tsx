import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Automotive Call Center & Auto Industry BPO in USA | Contact Center USA",
  description:
    "US-based automotive call center and auto industry BPO services — dealer BDC, OEM customer care, recall campaigns, warranty claims, and 24/7 automotive customer support outsourcing for dealerships and manufacturers.",
  keywords: [
    "automotive call center",
    "auto industry bpo",
    "automotive customer support outsourcing",
    "dealer bdc outsourcing",
    "oem customer care bpo",
    "automotive recall call center",
    "roadside assistance call center",
    "warranty claims outsourcing",
  ],
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
  name: "M.T.",
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

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Automotive Call Center in USA",
    heading: "The automotive call center built to fill service bays, close showroom floors, and protect recall compliance.",
    accent: "fill service bays",
    body: [
      "Contact Center USA is one of the best automotive call center providers in the USA — a 100% US-based auto industry BPO with DMS-integrated agents, certified OEM training, and 24/7 roadside dispatch purpose-built for dealers and manufacturers.",
      "For dealer groups, OEMs, captive finance companies, and aftermarket businesses evaluating automotive customer support outsourcing, we deliver measurable lifts in appointment set rates, CSI scores, and recall completion — without disrupting your existing dealership workflows.",
    ],
    stats: [
      { stat: "+35%", label: "Average lift in service bay bookings within 90 days of BDC cutover" },
      { stat: "1.5M+", label: "Automotive calls handled annually across dealer and OEM accounts" },
      { stat: "<20s", label: "Average speed of answer for 24/7 roadside assistance programs" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Dealer BDC vs. Contact Center USA BPO",
    intro:
      "Most dealer groups start with in-house BDCs and hit the same ceiling: high attrition, inconsistent follow-up, and no coverage after 7pm. Here's how an internal team compares to our auto industry BPO model.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Appointment Set Rate",
        left: "Typically 18–25% on internet leads — inconsistent cadence and staffing gaps drop response times.",
        right: "35–55% on the same lead sources with speed-to-lead under 90 seconds 24/7.",
        leftYes: false,
      },
      {
        label: "Hours of Coverage",
        left: "BDC closes with the dealership — evening and Sunday leads wait until Monday morning.",
        right: "24/7/365 coverage including roadside dispatch, evening sales leads, and overnight service support.",
        leftYes: false,
      },
      {
        label: "DMS & CRM Integration",
        left: "Often siloed — BDC works in a separate tool with manual hand-offs to service advisors.",
        right: "Live integration to CDK, Reynolds, Dealertrack, VinSolutions, Elead, and Dealer.com.",
        leftYes: false,
      },
      {
        label: "Recall Campaign Execution",
        left: "Recall outreach competes with daily sales and service calls for BDC time.",
        right: "Dedicated recall teams execute NHTSA-aligned campaigns with documented completion tracking.",
        leftYes: false,
      },
      {
        label: "Multi-Rooftop Scalability",
        left: "Each rooftop builds its own BDC — duplicated overhead, inconsistent brand experience.",
        right: "Centralized auto industry BPO model with per-store branding and consolidated reporting.",
        leftYes: false,
      },
      {
        label: "Cost Per Appointment",
        left: "High fully-loaded labor cost with low utilization during off-peak hours.",
        right: "Variable cost per appointment model — pay for outcomes, not seat time.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Automotive Customer Support Outsourcing Onboarding",
    intro:
      "Every dealer group and OEM account flows through the same five-stage launch — engineered to respect your dealership culture while standing up a fully trained, fully integrated BDC in weeks.",
    steps: [
      {
        title: "Dealer Discovery",
        body: "Rooftops, franchises, DMS stack, lead sources, and OEM programs mapped with your leadership.",
      },
      {
        title: "DMS & CRM Wiring",
        body: "Secure integrations to CDK, Reynolds, Dealertrack, VinSolutions, Elead, and OEM portals.",
      },
      {
        title: "Automotive Certification",
        body: "Brand-specific agent training on your franchises, OEM programs, warranty, and service menus.",
      },
      {
        title: "Pilot Rooftop",
        body: "Live traffic on a single store with daily QA calibration and dealer-GM feedback loop.",
      },
      {
        title: "Group-Wide Rollout",
        body: "Staggered cutover across rooftops with recall, service, sales, and roadside lanes all live.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Sub-Segments",
    heading: "Automotive Sub-Segments Our BPO Supports",
    intro:
      "Dealer groups, OEMs, captive finance, and aftermarket companies all have different KPIs. Our auto industry BPO playbook flexes to each sub-segment's economics and compliance posture.",
    items: [
      {
        icon: "store",
        stat: "BDC",
        title: "Franchise Dealer Groups",
        body: "Sales BDC, service BDC, internet lead response, and appointment confirmation across rooftops.",
      },
      {
        icon: "factory",
        stat: "OEM",
        title: "Automotive Manufacturers",
        body: "White-label owner care, recall outreach, warranty escalations, and connected-vehicle support.",
      },
      {
        icon: "dollar",
        stat: "Captive",
        title: "Captive Finance & Leasing",
        body: "Lease-end retention, payment support, title & registration, and collections outreach.",
      },
      {
        icon: "wrench",
        stat: "24/7",
        title: "Aftermarket & Roadside",
        body: "Roadside dispatch, extended warranty, tire programs, and independent service network support.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Dealer Groups and OEMs Choose Contact Center USA",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Offshore automotive customer support outsourcing creates brand risk — customers hear the handoff and escalation rates spike. Generalist BPOs underinvest in DMS integration, and most dealer BDC tools aren't built for multi-rooftop coordination.",
      "Contact Center USA is different: a 100% US-based automotive call center with dedicated automotive supervisors, true DMS integrations, and a hybrid sales-and-service training curriculum built for franchise dealerships and OEM customer care alike.",
    ],
    bullets: [
      "100% US-based agents — no offshore for customer PII, deal jackets, or F&I data",
      "Native integrations to CDK, Reynolds, Dealertrack, VinSolutions, Elead, and more",
      "Dedicated sales BDC, service BDC, and recall lanes with separate QA calibration",
      "OEM-specific training modules built with your brand training team",
      "24/7 roadside dispatch with sub-20-second ASA and GPS-enabled provider network",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to outsource your automotive call center to a US-based BDC partner?",
    accent: "US-based BDC partner",
    body: "If your appointment set rates are stuck under 25%, after-hours leads are dying on the vine, or your recall completion is trailing OEM targets, request a free consultation. We'll build a dealer-specific business case covering staffing model, DMS integration plan, and projected impact on bay utilization and CSI.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
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
      seoContent={seoContent}
    />
  );
}
