import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Cable Media BPO & Media Call Center Services in USA | Contact Center USA",
  description:
    "US-based cable media BPO and media call center services — cable TV customer support, billing, tier-2 tech support, retention, and OTT subscriber care for cable, broadband, and media companies.",
  keywords: [
    "cable media bpo",
    "media call center services",
    "cable tv customer support",
    "broadband call center outsourcing",
    "cable subscriber retention bpo",
    "tier 2 tech support outsourcing",
    "ott streaming customer support",
    "telecom cable billing bpo",
  ],
  alternates: { canonical: "/industries/cable-media-call-center" },
};

const features = [
  {
    title: "Billing & Account Support",
    desc: "Comprehensive billing inquiry handling including payment processing, plan explanations, promotional pricing, account adjustments, and dispute resolution to reduce churn and improve subscriber satisfaction.",
  },
  {
    title: "Technical Troubleshooting",
    desc: "Tiered technical support from basic connectivity issues to advanced equipment diagnostics. Our agents walk subscribers through step-by-step resolutions, reducing truck rolls and improving first-call resolution rates.",
  },
  {
    title: "Service Activation & Setup",
    desc: "Smooth onboarding experiences for new subscribers with guided self-installation support, equipment provisioning, channel package configuration, and welcome call programs that reduce early churn.",
  },
  {
    title: "Subscriber Retention Programs",
    desc: "Trained save-team agents who engage disconnecting subscribers with tailored offers, win-back campaigns, and loyalty incentives — proven to reduce voluntary churn by up to 30%.",
  },
  {
    title: "Upgrade & Upsell Campaigns",
    desc: "Revenue-generating outbound campaigns that identify upgrade opportunities, promote premium packages, bundle additional services, and maximize average revenue per subscriber.",
  },
  {
    title: "Outage Communication & Updates",
    desc: "Rapid-response outage management with proactive subscriber notification, real-time status updates, estimated restoration times, and credit processing for extended service interruptions.",
  },
];

const benefits = [
  "30% reduction in voluntary churn",
  "24/7 technical support coverage",
  "Reduced truck roll rates",
  "Bilingual English/Spanish agents",
  "Real-time CRM & billing integration",
  "Custom retention offer scripting",
];

const stats = [
  { value: 92, suffix: "%", label: "First-Call Resolution" },
  { value: 30, suffix: "%", label: "Churn Reduction" },
  { value: 3, suffix: "M+", label: "Subscriber Calls Handled" },
  { value: 45, suffix: "%", label: "Fewer Truck Rolls" },
];

const testimonial = {
  quote:
    "Since partnering with Contact Center USA, our subscriber churn dropped 30% and our NPS increased by 22 points. Their retention team is exceptional — they truly understand the cable and media landscape.",
  name: "J.W.",
  title: "SVP Customer Experience",
  company: "A National Cable Provider",
  initials: "JW",
};

const faqs = [
  {
    question: "Can your agents handle technical troubleshooting for our specific equipment?",
    answer:
      "Yes. We train agents on your specific hardware, software, and network configurations. Whether it's cable boxes, modems, routers, streaming devices, or DVRs, our agents follow your custom troubleshooting trees and escalation protocols to resolve issues efficiently.",
  },
  {
    question: "How do you handle high call volumes during outages?",
    answer:
      "We maintain surge capacity protocols specifically for outage events. Our systems detect volume spikes and automatically activate overflow agents, deploy IVR-based status updates, and send proactive notifications to reduce inbound call volume while keeping subscribers informed.",
  },
  {
    question: "What retention strategies do your save-team agents use?",
    answer:
      "Our retention agents are trained in consultative save techniques. They identify the subscriber's reason for canceling, match it with approved retention offers, and present solutions that address the underlying concern — whether it's pricing, service quality, or competitive switching.",
  },
  {
    question: "Can you integrate with our billing and CRM systems?",
    answer:
      "Absolutely. We integrate with major cable and media billing platforms and CRM systems. Our agents work directly in your systems for real-time account access, ensuring accurate information and seamless customer interactions without data sync delays.",
  },
  {
    question: "How quickly can you scale for seasonal promotions or launches?",
    answer:
      "We can scale agent capacity by up to 200% within two weeks for planned events like new channel launches, seasonal promotions, or major content premieres. For ongoing seasonal patterns, we build predictive staffing models based on your historical data.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Cable Media BPO in USA",
    heading: "The cable media BPO that saves subscribers, kills truck rolls, and lifts ARPU — all in one workforce.",
    accent: "saves subscribers",
    body: [
      "Contact Center USA is one of the best cable media BPO providers in the USA — a 100% US-based media call center services operation with cable, broadband, and OTT experience, tier-2 tech fluency, and save-team economics that move real churn numbers.",
      "For cable MSOs, regional broadband operators, streaming platforms, and media publishers evaluating cable TV customer support partners, we deliver first-call resolution, measurable churn reduction, and upgrade revenue that more than pays for the program.",
    ],
    stats: [
      { stat: "92%", label: "First-call resolution across cable billing and tier-1 tech support queues" },
      { stat: "-30%", label: "Voluntary churn reduction after save-team integration" },
      { stat: "-45%", label: "Truck roll reduction through improved remote troubleshooting" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Cable Support vs. Contact Center USA BPO",
    intro:
      "MSOs and streaming platforms share a problem: call volumes spike on outages and content launches, then flatline. Here's how an internal center stacks up against a dedicated cable media BPO.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Outage Surge Handling",
        left: "Fixed staffing — large fiber cuts and regional outages drop abandonment rates into double digits.",
        right: "Storm-mode protocols activate overflow and proactive IVR within minutes of detection.",
        leftYes: false,
      },
      {
        label: "Save-Team Performance",
        left: "Save-team training is inconsistent; retention offers applied reactively, not strategically.",
        right: "Dedicated save team with calibrated offer matrix — 30% voluntary churn reduction is the norm.",
        leftYes: false,
      },
      {
        label: "Tier-2 Technical Depth",
        left: "Tier-2 is a career ladder — heavy attrition erodes institutional network knowledge.",
        right: "Dedicated tier-2 pods on DOCSIS, PON, Wi-Fi mesh, and set-top/streaming device diagnostics.",
        leftYes: false,
      },
      {
        label: "Upgrade & Upsell Revenue",
        left: "Reps focus on issue resolution; cross-sell and upgrade conversations go unexecuted.",
        right: "Scripted upgrade paths and ARPU-focused coaching drive measurable upsell lift.",
        leftYes: false,
      },
      {
        label: "Billing & CSG Integration",
        left: "Siloed from the billing platform — reps explain charges without real-time resolution authority.",
        right: "Live integrations to CSG, ICOMS, Salesforce, and custom billing stacks for same-call resolution.",
        leftYes: false,
      },
      {
        label: "24/7 Content Launch Support",
        left: "Launches strain existing rosters; seasonal hiring cycles can't match launch calendars.",
        right: "Pre-launch surge staffing up to 200% within two weeks — tuned to your content release calendar.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Cable Media BPO Onboarding",
    intro:
      "Every MSO, broadband operator, and OTT platform follows the same five-stage onboarding — engineered to protect subscriber data, integrate with CSG/billing, and light up save-team performance fast.",
    steps: [
      {
        title: "Operator Discovery",
        body: "Footprint, plant, bundles, OTT app stack, and retention offer matrix mapped with your ops leaders.",
      },
      {
        title: "Billing & OSS Integration",
        body: "Secure integrations to CSG, ICOMS, SingleView, Salesforce, and your TR-069/ACS provisioning.",
      },
      {
        title: "Tiered Agent Training",
        body: "Tier-1, tier-2, retention, and billing pods trained on DOCSIS/PON, set-top boxes, and streaming apps.",
      },
      {
        title: "Pilot Market",
        body: "Controlled launch in a single DMA with joint QA calibration and save-team offer stress-test.",
      },
      {
        title: "Footprint-Wide Cutover",
        body: "Staggered rollout across DMAs with storm-mode drill and content-launch surge validation.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Sub-Segments",
    heading: "Cable & Media Sub-Segments We Serve",
    intro:
      "Cable MSOs, regional broadband operators, streaming platforms, and traditional media publishers all have distinct economics. Our media call center services flex to each sub-segment's stack and margin profile.",
    items: [
      {
        icon: "tv",
        stat: "MSO",
        title: "Cable MSOs & Broadband",
        body: "Billing, tier-2 tech, plant-outage comms, and retention for cable, fiber, and hybrid operators.",
      },
      {
        icon: "radio",
        stat: "OTT",
        title: "OTT & Streaming Platforms",
        body: "Subscriber onboarding, device troubleshooting, plan changes, and lapsed-subscriber win-back.",
      },
      {
        icon: "signal",
        stat: "Regional",
        title: "Regional & Rural ISPs",
        body: "Cooperative and municipal broadband support — installs, tech support, and billing at rural scale.",
      },
      {
        icon: "building",
        stat: "Media",
        title: "Media Publishers & Networks",
        body: "Subscription support, paywall recovery, affiliate coordination, and audience-research surveys.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Cable and Media Companies Choose Contact Center USA",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Offshore cable TV customer support creates friction on tier-2 and save conversations — subscribers disengage and churn anyway. Generalist BPOs don't invest in the DOCSIS/PON/streaming device training required to keep truck-roll rates low.",
      "Contact Center USA is different: a 100% US-based media call center services operation with dedicated cable supervisors, certified tier-2 pods, and save-team playbooks calibrated to your offer matrix and subscriber LTV economics.",
    ],
    bullets: [
      "100% US-based cable media BPO workforce — no offshore handoff on PII or billing data",
      "Tier-2 pods on DOCSIS 3.1/4.0, XGS-PON, Wi-Fi 6/6E mesh, and OTT device troubleshooting",
      "Save team with offer-matrix QA and weekly churn-driver calibration",
      "Storm-mode protocols that activate within minutes of outage detection",
      "Seasonal surge capacity of 200% for content launches and promotional sprints",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to outsource your cable media BPO to a US-based specialist?",
    accent: "US-based specialist",
    body: "If your voluntary churn is trending the wrong way, truck rolls are eroding margin, or your internal center can't absorb content-launch and outage surges, request a free consultation. We'll build a subscriber-economics business case and show expected impact on churn, truck rolls, and ARPU.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Technical Support",
    desc: "Multi-tier technical support teams trained on your specific equipment and platforms.",
    href: "/solutions/technical-support-outsourcing",
  },
  {
    title: "Customer Retention",
    desc: "Proven save-team strategies that reduce churn and increase subscriber lifetime value.",
    href: "/solutions/customer-service-outsourcing",
  },
  {
    title: "Outbound Campaigns",
    desc: "Targeted upgrade and win-back campaigns that drive revenue growth.",
    href: "/solutions/outbound-call-center-services",
  },
];

export default function CableMediaPage() {
  return (
    <ServicePageTemplate
      badge="Cable & Media Call Center Services"
      title="Expert Call Center Solutions for Cable & Media Companies"
      titleHighlight="Cable & Media Companies"
      subtitle="Reduce subscriber churn, improve technical resolution rates, and drive revenue with specialized call center services built for the cable and media industry."
      description="Our cable and media call center team understands the unique challenges of subscriber-based businesses — from managing outage surges and reducing truck rolls to retaining at-risk subscribers and driving upgrade revenue. We combine industry expertise with advanced technology to deliver experiences that keep your subscribers connected and satisfied."
      features={features}
      benefits={benefits}
      image="/images/cc-team-desk.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
