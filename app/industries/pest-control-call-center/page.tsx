import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Pest Control Answering Service & Call Center | Lead Intake",
  description:
    "US-based pest control answering service and call center. 24/7 lead qualification, recurring service agreement sales, FieldRoutes/PestPac scheduling, and emergency dispatch.",
  keywords: [
    "pest control answering service",
    "pest control call center",
    "termite inspection appointment setting",
    "pest control customer service outsourcing",
    "fieldroutes answering service",
    "pestpac call center",
    "bed bug lead response service",
  ],
  alternates: { canonical: "/industries/pest-control-call-center" },
};

const features = [
  {
    title: "Instant Inbound Lead Response & Inspection Booking",
    desc: "When a homeowner spots rodents, bed bugs, or termites, they call in high distress. Our US agents answer in under 3 rings, identify the pest issue, quote your starting inspection fees, and lock the inspection onto your technician's route.",
  },
  {
    title: "PestPac & FieldRoutes Software Integration",
    desc: "Our agents work directly inside your pest management software (PestPac, FieldRoutes, Briostack, Jobber, GorillaDesk) to schedule treatments, check route density, and update customer accounts live.",
  },
  {
    title: "Recurring Service Agreement Upselling",
    desc: "Turn one-time pest extermination calls into lucrative quarterly or bi-monthly recurring service plans. Our agents explain the value of ongoing barrier protection to maximize customer lifetime value.",
  },
  {
    title: "High-Ticket Termite & Wildlife Qualification",
    desc: "Qualify high-value termite treatments, crawlspace encapsulations, and wildlife exclusion inquiries, gathering property square footage and damage details for your commercial estimators.",
  },
  {
    title: "Spring & Summer Seasonal Surge Management",
    desc: "When ant, mosquito, and wasp seasons kick off in spring and summer, call volumes triple. Our scalable team absorbs rollover volume so no prospective customer goes to voicemail.",
  },
  {
    title: "Outbound Seasonal Reactivation Campaigns",
    desc: "Turn past customers and dormant accounts into revenue by running outbound campaigns for seasonal mosquito sprays, termite renewals, and winter rodent inspections.",
  },
];

const benefits = [
  "24/7/365 live answering for urgent pest and rodent emergencies",
  "100% US-based agents who understand pest control treatments",
  "PestPac, FieldRoutes, Briostack & Jobber direct calendar booking",
  "Higher conversion rates on expensive digital ad leads",
  "Upsell one-time callers into recurring service contracts",
  "Flexible month-to-month agreements with zero lock-in",
];

const stats = [
  { value: 98.6, suffix: "%", label: "Calls Answered Under 3 Rings", decimals: 1 },
  { value: 44, suffix: "%", label: "Higher Recurring Plan Conversion Rate" },
  { value: 0, suffix: " Lost Inquiries", label: "During Spring & Summer Surges", prefix: "" },
  { value: 24, suffix: "/7/365", label: "Pest Emergency Intake" },
];

const testimonial = {
  quote:
    "In pest control, whoever answers first gets the inspection. Contact Center USA integrated directly with FieldRoutes and started booking 70% of our inbound callers into quarterly protection plans on the first call. They transformed our summer sales numbers.",
  name: "Eric M.",
  title: "General Manager",
  company: "A Multi-Branch Pest Control Operator (North Carolina & Georgia)",
  initials: "EM",
};

const faqs = [
  {
    question: "Do your agents know how to book in FieldRoutes and PestPac?",
    answer:
      "Yes. Our agents are trained on leading pest management software including FieldRoutes, PestPac, Briostack, GorillaDesk, and Jobber. We book treatments according to your technician route zones and service intervals.",
  },
  {
    question: "Can your agents sell recurring service plans rather than just one-time treatments?",
    answer:
      "Yes. We train agents on customized sales scripts that highlight the benefits and warranty protection of recurring quarterly or bi-monthly plans, dramatically boosting your recurring monthly revenue (RMR).",
  },
];

const seoSections: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Pest Control Call Center Outsourcing",
    heading: "Homeowners with pest problems do not wait for callbacks. Live speed to lead wins the customer.",
    accent: "wins the customer",
    body: [
      "Whether it is termites in the walls, rodents in the attic, or wasps by the front door, pest problems cause immediate emotional urgency. When callers reach voicemail, they immediately call the next exterminator on Google.",
      "Contact Center USA provides dedicated US agents who answer immediately, empathize with the customer, quote your initial inspection rate, and book the job directly onto your route.",
    ],
    stats: [
      { stat: "<3 Rings", label: "Instant response on all inbound pest inquiries" },
      { stat: "FieldRoutes / PestPac", label: "Live route scheduling and account creation" },
      { stat: "Recurring RMR", label: "Trained upsell scripts for ongoing service agreements" },
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to scale your pest control business with 24/7 live booking?",
    accent: "24/7 live booking",
    body: "Contact Center USA can deploy your dedicated pest control answering and dispatch team in as little as 48 hours.",
    ctaLabel: "Get a Free Pest Control Call Center Quote",
    ctaHref: "/contact",
  },
];

export default function PestControlPage() {
  return (
    <ServicePageTemplate
      badge="Pest Control & Extermination"
      title="Pest Control Answering Service & Call Center"
      titleHighlight="Pest Control Answering Service"
      subtitle="24/7 Lead Intake, FieldRoutes & PestPac Sync, and Recurring Agreement Upselling"
      description="Capture every high-value pest inspection and turn one-time callers into recurring service revenue. Our 100% US-based agents schedule appointments directly in FieldRoutes & PestPac 24/7/365."
      features={features}
      benefits={benefits}
      image="/images/cc-agent-headset.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={[
        {
          title: "Home Services Call Center",
          desc: "Full support for HVAC, plumbing, electrical, and roofing contractors.",
          href: "/industries/home-services-call-center",
        },
        {
          title: "Lead Generation & Appointment Setting",
          desc: "Targeted outbound appointment setting and seasonal customer reactivation.",
          href: "/solutions/lead-generation-appointment-setting",
        },
        {
          title: "Virtual & Remote Support",
          desc: "24/7 virtual receptionist and overflow answering services.",
          href: "/services/virtual-remote-support",
        },
      ]}
      ctaHeading="Ready to book more recurring pest control contracts?"
      ctaSubtitle="Get a customized pest control answering plan built for your software and territory."
      seoContent={seoSections}
    />
  );
}
