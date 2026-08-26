import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Roofing Contractor Call Center | Storm Surge & Lead Intake",
  description:
    "US-based roofing contractor call center and answering service. 24/7 storm damage intake, insurance claim lead capture, and inspection appointment setting.",
  keywords: [
    "roofing call center",
    "roofing answering service",
    "storm damage call intake",
    "roofing lead response service",
    "contractor call center roofing",
    "roof replacement appointment setting",
    "roofing answering service 24 7",
  ],
  alternates: { canonical: "/industries/roofing-call-center-services" },
};

const features = [
  {
    title: "Storm Surge & Hail Catastrophe Intake",
    desc: "When hail, tornadoes, or hurricanes hit, call volumes spike by 500% in minutes. Our scalable US team absorbs the massive surge so you capture every insurance replacement lead while competitors' lines ring busy.",
  },
  {
    title: "High-Ticket Roof Replacement Qualification",
    desc: "Agents qualify inbound callers by gathering roof age, square footage, leak severity, material type, and insurance carrier status before booking inspection slots for your sales reps.",
  },
  {
    title: "CRM & Calendar Sync (AccuLynx, JobNimbus)",
    desc: "Our agents book inspection appointments directly into AccuLynx, JobNimbus, Roofr, or HubSpot, routing leads by zip code to the appropriate territory estimator.",
  },
  {
    title: "Instant Inbound Digital Lead Response",
    desc: "Speed to lead is critical. When homeowners submit quote requests on Google, Facebook, or Angi, our agents dial the prospect within 60 seconds to secure the inspection before they shop around.",
  },
  {
    title: "Outbound Past-Customer Re-engagement",
    desc: "Turn your past client list into repeat revenue. We run structured outbound campaigns for gutter cleanings, storm checkups, commercial roof inspections, and referral generation.",
  },
  {
    title: "24/7 Emergency Tarp & Leak Dispatch",
    desc: "Live US agents answer after-hours calls from distressed homeowners, dispatch emergency tarping crews, and secure high-intent roof restoration jobs.",
  },
];

const benefits = [
  "24/7/365 live answering for storm damage and emergency leaks",
  "100% US-based agents trained on roofing materials & insurance claims",
  "AccuLynx, JobNimbus, Roofr, and CRM calendar integration",
  "Sub-60-second speed-to-lead response for digital ad clicks",
  "Instant scalability during major regional storm events",
  "Month-to-month contracts with no lock-in or minimums",
];

const stats = [
  { value: 60, suffix: " Sec", label: "Average Web Lead Response Time", prefix: "<" },
  { value: 45, suffix: "%", label: "Higher Inspection Booking Rate" },
  { value: 0, suffix: " Busy Signals", label: "During Severe Storm Surges", prefix: "" },
  { value: 24, suffix: "/7/365", label: "Emergency Tarp Dispatch" },
];

const testimonial = {
  quote:
    "When the hail storm hit our metro area last spring, we received over 1,200 calls in 48 hours. Contact Center USA answered every single call, booked 410 roof inspection appointments into AccuLynx, and helped us generate over $3.2M in signed replacement contracts.",
  name: "Tyler R.",
  title: "President & Founder",
  company: "A Multi-State Roofing & Restoration Contractor (Midwest)",
  initials: "TR",
};

const faqs = [
  {
    question: "How does your call center handle sudden storm spikes and hail surges?",
    answer:
      "Our multi-site US agent network provides elastic surge capacity. When severe weather hits your market, our team immediately scales up agent allocation to handle hundreds of concurrent calls with zero busy signals.",
  },
  {
    question: "Can your agents book directly into AccuLynx or JobNimbus?",
    answer:
      "Yes. Our agents are experienced with roofing CRM and field tools including AccuLynx, JobNimbus, Roofr, HubSpot, and Salesforce. We schedule inspection appointments directly onto your estimators' calendars based on territory and zip code.",
  },
  {
    question: "How quickly do you respond to web leads from Google Ads and Facebook?",
    answer:
      "We connect with your lead capture webhooks. The moment a homeowner submits a digital quote form, our system triggers an outbound call to the prospect in under 60 seconds, drastically increasing contact rates and booked inspections.",
  },
  {
    question: "Do you require long-term contracts?",
    answer:
      "No. We provide month-to-month agreements. You can scale up during active storm seasons and scale down during winter or quiet months without penalty.",
  },
];

const seoSections: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Roofing Call Center Outsourcing",
    heading: "In storm restoration, the contractor who answers the phone in 60 seconds wins the $20,000 roof replacement.",
    accent: "wins the $20,000 roof replacement",
    body: [
      "When hail strikes a neighborhood, hundreds of homeowners search for roofers simultaneously. The company whose phones ring busy or send callers to voicemail loses tens of thousands of dollars in high-margin insurance restoration jobs.",
      "Contact Center USA provides roofing contractors with a dedicated US-based call center team that answers every call live, dials web leads in under 60 seconds, and packs your estimators' calendars with qualified appointments.",
    ],
    stats: [
      { stat: "<60s", label: "Instant response on all digital quote submissions" },
      { stat: "AccuLynx", label: "Direct CRM calendar and territory booking" },
      { stat: "Elastic", label: "Massive scale capacity for severe weather spikes" },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Dominate Your Market",
    heading: "Maximize ROI on Every Roofing Marketing Dollar and Storm Event",
    image: "/images/cc-agents-working.jpg",
    imagePosition: "right",
    body: [
      "Roofing leads from Google Ads, local service ads, and door-to-door canvassing are expensive. Don't let valuable advertising dollars go to waste with missed calls or delayed callbacks.",
      "With Contact Center USA, professional American agents represent your roofing company with authority, qualify property owners, and ensure your sales team stays focused on closing high-ticket contracts.",
    ],
    bullets: [
      "24/7 live storm damage and emergency leak response",
      "Qualify homeowner insurance claims and roof specifications",
      "Sync seamlessly with AccuLynx, JobNimbus, and Roofr",
      "Instant 60-second follow-up on digital web leads",
      "Flexible month-to-month agreements with no lock-in",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to capture every high-ticket roof replacement lead?",
    accent: "high-ticket roof replacement lead",
    body: "Contact Center USA can integrate with your roofing CRM and deploy your dedicated 24/7 lead capture team in as little as 48 hours.",
    ctaLabel: "Get a Free Roofing Call Center Quote",
    ctaHref: "/contact",
  },
];

export default function RoofingPage() {
  return (
    <ServicePageTemplate
      badge="Roofing & Restoration"
      title="Roofing Contractor Call Center & Answering Service"
      titleHighlight="Roofing Contractor Call Center"
      subtitle="24/7 Storm Damage Intake, AccuLynx Sync & 60-Second Web Lead Response"
      description="Capture every high-ticket roof replacement and storm restoration lead. Our 100% US-based agents answer calls live, respond to web leads in under 60 seconds, and schedule inspections directly in AccuLynx & JobNimbus 24/7/365."
      features={features}
      benefits={benefits}
      image="/images/cc-agents-working.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={[
        {
          title: "Home Services Call Center",
          desc: "Comprehensive support for HVAC, plumbing, electrical, and general contractors.",
          href: "/industries/home-services-call-center",
        },
        {
          title: "Lead Generation & Appointment Setting",
          desc: "Outbound appointment setting and fast speed-to-lead qualification.",
          href: "/solutions/lead-generation-appointment-setting",
        },
        {
          title: "Virtual & Remote Support",
          desc: "24/7 virtual receptionist and overflow answering services.",
          href: "/services/virtual-remote-support",
        },
      ]}
      ctaHeading="Ready to book more high-ticket roof replacements?"
      ctaSubtitle="Get a customized roofing call center plan tailored to your CRM and sales territory."
      seoContent={seoSections}
    />
  );
}
