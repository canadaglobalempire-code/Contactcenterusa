import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Auto Dealership BDC | Outsourced Sales & Service BDC",
  description:
    "US-based BDC for auto dealerships. Internet lead response, service appointment booking, missed-call recovery, and unsold follow-up. Get a quote.",
  keywords: [
    "dealership bdc outsourcing",
    "auto dealership call center",
    "service bdc outsourcing",
    "sales bdc call center",
    "car dealership answering service",
    "internet lead response dealership",
    "dealership missed call recovery",
    "service appointment booking dealership",
    "automotive bdc services",
    "unsold follow up calling",
  ],
  alternates: { canonical: "/industries/auto-dealership-bdc" },
};

const features = [
  {
    title: "Internet Lead Response",
    desc: "Every third-party and website lead answered within a minute by phone and text, qualified on vehicle, trade, timeline, and financing intent, then booked as a confirmed showroom appointment rather than passed along as a name.",
  },
  {
    title: "Service Appointment Booking",
    desc: "Service calls answered live and booked directly into your DMS against advisor capacity and shop loading — including recall, maintenance-due, and declined-service follow-up that fills the lanes on slow days.",
  },
  {
    title: "Missed-Call Recovery",
    desc: "Dealership phones abandon at rates most GMs would find alarming if they measured them. Every missed and abandoned call is called back promptly, so a service customer or a buyer does not simply drive to the next store.",
  },
  {
    title: "Unsold & Aged Lead Follow-Up",
    desc: "Structured follow-up on unsold showroom traffic, aged internet leads, and prior no-shows — inventory sitting untouched in every CRM because salespeople chase whoever walked in today.",
  },
  {
    title: "Equity Mining & Service-to-Sales",
    desc: "Outbound campaigns to customers in a positive equity position or nearing lease end, and service-lane conversion calls that turn a maintenance visit into a sales conversation.",
  },
  {
    title: "Bilingual Customer Contact",
    desc: "Native Spanish-speaking agents handle sales and service conversations end to end, which materially improves both appointment set rates and CSI in a large share of US markets.",
  },
];

const benefits = [
  "Internet leads answered within a minute",
  "100% US-based agents",
  "CDK, Reynolds, Xtime & VinSolutions integration",
  "Missed and abandoned call recovery",
  "Unsold, aged lead, and equity mining campaigns",
  "Bilingual English/Spanish customer contact",
];

const stats = [
  { value: 60, suffix: " sec", label: "Target Internet Lead Response" },
  { value: 100, suffix: "%", label: "US-Based Agents" },
  { value: 7, suffix: " days", label: "Coverage Including Evenings & Weekends" },
  { value: 4, suffix: "+ systems", label: "DMS & CRM Integrations" },
];

const faqs = [
  {
    question: "How is this different from an in-house BDC?",
    answer:
      "It is the same function without the staffing problem. In-house BDCs are notoriously hard to keep fully staffed: turnover is high, training is constant, and one resignation drops response times across the whole store. An outsourced BDC delivers consistent coverage across evenings and weekends without the recruiting cycle, and scales with your lead volume rather than your headcount plan.",
  },
  {
    question: "How fast do you respond to internet leads?",
    answer:
      "Within a minute, by phone and text, with a documented multi-touch cadence afterwards rather than a single attempt. Response time is the most studied variable in automotive lead handling and the one most consistently correlated with appointment set rate — and most stores are far slower than they believe, particularly in the evening and at weekends.",
  },
  {
    question: "Can you book service appointments in our DMS?",
    answer:
      "Yes. Agents are provisioned in CDK, Reynolds and Reynolds, Xtime, Dealertrack, or your scheduling platform and book against real advisor capacity and shop loading — not into a generic slot somebody has to rearrange later. Recall, maintenance-due, and declined-service campaigns run from the same system.",
  },
  {
    question: "Do you recover missed calls?",
    answer:
      "Yes, and for most stores it is the fastest measurable win available. Dealership phone abandonment is routinely far higher than management assumes, and a missed service call is a customer who books at the independent shop instead. We call back every missed and abandoned call promptly, which frequently pays for the program on service revenue alone.",
  },
  {
    question: "Can you work unsold and aged leads?",
    answer:
      "Yes. Every dealership CRM contains thousands of unsold showroom ups and aged internet leads that nobody calls, because salespeople reasonably prioritize the customer standing in front of them. Systematic follow-up on that inventory, plus equity mining and lease-end campaigns, produces appointments at a fraction of the cost of buying more leads.",
  },
  {
    question: "Do you work for single stores or groups?",
    answer:
      "Both. Single stores typically start with service BDC or internet lead response. Groups use us across multiple rooftops with store-aware routing, brand-specific scripting, and per-store reporting, which also gives the group a consistent response standard that is difficult to enforce store by store.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Auto Dealership BDC Services",
    heading: "Your abandoned-call rate is higher than anyone in the store believes.",
    accent: "higher than anyone in the store believes",
    body: [
      "Contact Center USA runs outsourced sales and service BDC for auto dealerships and dealer groups — internet lead response, service booking, missed-call recovery, and unsold follow-up.",
      "Dealerships buy leads aggressively and then answer them inconsistently, because an in-house BDC is one of the hardest departments in the store to keep staffed. Response times slip quietly, and nobody notices until the set rate drops.",
    ],
    stats: [
      { stat: "60 sec", label: "Target response time on internet leads, by phone and text" },
      { stat: "7 days", label: "Coverage across evenings and weekends" },
      { stat: "100%", label: "US-based agents working in your DMS and CRM" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House BDC vs. an Outsourced Dealership BDC",
    intro:
      "The in-house BDC is a sound idea with a persistent execution problem: it is a high-turnover role, and performance drops every time somebody leaves.",
    leftTitle: "In-House BDC",
    rightTitle: "Contact Center USA",
    rows: [
      {
        label: "Staffing Consistency",
        left: "High turnover; one resignation slows response across the store.",
        right: "Coverage independent of any individual's tenure or schedule.",
        leftYes: false,
      },
      {
        label: "Evening & Weekend Leads",
        left: "Leads arriving after close wait until the next business day.",
        right: "Answered live during the hours shoppers actually browse.",
        leftYes: false,
      },
      {
        label: "Missed Calls",
        left: "Abandoned calls rarely measured, almost never called back.",
        right: "Every missed and abandoned call returned promptly.",
        leftYes: false,
      },
      {
        label: "Unsold Follow-Up",
        left: "Salespeople chase today's ups; the CRM backlog goes untouched.",
        right: "Systematic campaigns against unsold, aged, and equity lists.",
        leftYes: false,
      },
      {
        label: "Cost Structure",
        left: "Fixed salaries plus recruiting and training on every replacement.",
        right: "Cost scales with lead and call volume rather than headcount.",
        leftYes: false,
      },
      {
        label: "Group Consistency",
        left: "Every rooftop performs differently with no enforceable standard.",
        right: "One response standard across stores with per-store reporting.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "From Lead Submission to a Confirmed Appointment",
    intro:
      "Every BDC engagement is configured around your DMS, your inventory feed, and the appointment standards your managers already hold the floor to.",
    steps: [
      {
        title: "Store & Process Setup",
        body: "We capture brand scripting, appointment standards, advisor capacity rules, and manager escalation paths.",
      },
      {
        title: "DMS & CRM Provisioning",
        body: "Agents provisioned in CDK, Reynolds, Xtime, VinSolutions, or your platform with inventory visibility.",
      },
      {
        title: "Lead Routing",
        body: "Third-party and website leads routed for response within a minute by phone and text.",
      },
      {
        title: "Launch Service or Sales",
        body: "Most stores start with service BDC or missed-call recovery, where returns appear fastest.",
      },
      {
        title: "Add Outbound Campaigns",
        body: "Layer in unsold follow-up, equity mining, and lease-end campaigns once inbound is stable.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Who We Support",
    heading: "Across Franchise and Independent Retail",
    intro:
      "A franchise service drive and an independent used-car operation have very different call mixes, so BDC programs are built per store type.",
    items: [
      {
        icon: "wrench",
        stat: "Service",
        title: "Service BDC",
        body: "Appointment booking, recall and maintenance-due campaigns, and declined-service follow-up.",
      },
      {
        icon: "dollar",
        stat: "Sales",
        title: "Sales BDC",
        body: "Internet lead response, appointment setting, unsold follow-up, and showroom confirmation calls.",
      },
      {
        icon: "building",
        stat: "Group",
        title: "Dealer Groups",
        body: "Multi-rooftop coverage with store-aware routing and per-store performance reporting.",
      },
      {
        icon: "truck",
        stat: "Indep",
        title: "Independent & Used",
        body: "Lead response and appointment setting for independent lots without a dedicated BDC.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why the BDC Is the Hardest Department to Keep Staffed",
    image: "/images/cc-agent-headset.jpg",
    imagePosition: "right",
    body: [
      "Every general manager knows what a well-run BDC is worth, and most have rebuilt theirs several times. The role has high turnover, needs constant training, and quietly degrades between hires — while the lead bills keep arriving at the same rate.",
      "Contact Center USA runs it as a service instead. Consistent response within a minute including evenings and weekends, every missed call returned, service booked into real advisor capacity, and the unsold and equity lists worked systematically. Your salespeople keep the customer in front of them.",
    ],
    bullets: [
      "Internet leads answered within a minute by phone and text",
      "Service booked into real advisor capacity in your DMS",
      "Every missed and abandoned call returned promptly",
      "Unsold, aged lead, equity mining, and lease-end campaigns",
      "One consistent response standard across every rooftop",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Measure your abandoned-call rate before you buy more leads.",
    accent: "before you buy more leads",
    body: "Send us your monthly lead volume, call volume, and DMS. We will scope a service or sales BDC program and show what missed-call recovery alone is worth.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Automotive Call Center Services",
    desc: "Broader automotive support across OEM, parts, and manufacturer programs.",
    href: "/industries/automotive-call-center-services",
  },
  {
    title: "Lead Generation & Appointment Setting",
    desc: "Our core appointment setting practice behind unsold and equity campaigns.",
    href: "/solutions/lead-generation-appointment-setting",
  },
  {
    title: "Outbound Call Center Services",
    desc: "The outbound engine for recall, maintenance-due, and lease-end calling.",
    href: "/solutions/outbound-call-center-services",
  },
];

export default function AutoDealershipBdcPage() {
  return (
    <ServicePageTemplate
      badge="Auto Dealership BDC"
      title="Outsourced Sales & Service BDC for Auto Dealerships"
      titleHighlight="Auto Dealerships"
      subtitle="Dealerships and dealer groups use our US-based agents to answer internet leads within a minute, book service into real advisor capacity, return every missed call, and work the unsold list."
      description="The BDC is the hardest department in the store to keep staffed, and performance slips quietly every time somebody leaves — while the lead bills stay the same. We run it as a service: internet leads answered within a minute by phone and text, service appointments booked into real advisor capacity in your DMS, every missed and abandoned call returned, and systematic follow-up on the unsold, aged, and equity lists nobody has time for."
      features={features}
      benefits={benefits}
      image="/images/cc-agent-call.jpg"
      stats={stats}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
