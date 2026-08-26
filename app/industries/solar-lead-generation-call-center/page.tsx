import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Solar Lead Qualification & Appointment Setting Call Center",
  description:
    "US-based solar lead qualification and appointment setting call center. Sub-60-second speed-to-lead response, utility bill verification, and CRM calendar booking.",
  keywords: [
    "solar lead qualification call center",
    "solar appointment setting call center",
    "solar lead response service",
    "solar bpo outsourcing",
    "inbound solar lead qualification",
    "solar call center usa",
  ],
  alternates: { canonical: "/industries/solar-lead-generation-call-center" },
};

const features = [
  {
    title: "Sub-60-Second Inbound Lead Response",
    desc: "Digital solar leads from Facebook, Google Ads, and landing pages go cold within minutes. Our system dials prospects within 60 seconds of submission, connecting with homeowners while interest is at its absolute peak.",
  },
  {
    title: "Rigorous Homeowner & Property Qualification",
    desc: "Agents screen prospects on homeownership status, roof shading, electric utility provider, monthly electric bill average ($150+), and credit tier before passing appointments to your solar consultants.",
  },
  {
    title: "Electric Utility Bill Collection & Pre-Check",
    desc: "Agents assist homeowners in uploading or emailing their latest electric utility bill, ensuring your solar design team can generate accurate production proposals prior to the sales consultation.",
  },
  {
    title: "Direct Calendar & CRM Sync (HubSpot, Salesforce)",
    desc: "Qualified consultation appointments are booked directly onto your in-home or virtual sales reps' calendars based on territory, zip code, and availability.",
  },
  {
    title: "Automated Appointment Confirmation & Reminders",
    desc: "Reduce consultation no-show rates with multi-touch confirmation calls, SMS reminders, and calendar invites sent 24 hours and 2 hours prior to the scheduled meeting.",
  },
  {
    title: "Bilingual English & Spanish Solar Intake",
    desc: "Native bilingual agents handle solar consultations and lead qualification smoothly for Spanish-speaking homeowners across California, Texas, Arizona, and Florida.",
  },
];

const benefits = [
  "Sub-60-second speed-to-lead response across all web leads",
  "100% US-based agents who understand solar ROI and net metering",
  "Strict property, roof, and utility bill qualification criteria",
  "Higher appointment sit rates and lower customer acquisition costs",
  "Full CRM integration with Salesforce, HubSpot & HighLevel",
  "Flexible month-to-month contracts with no long-term lock-in",
];

const stats = [
  { value: 60, suffix: " Sec", label: "Average Speed-to-Lead Response", prefix: "<" },
  { value: 48, suffix: "%", label: "Higher Consultation Sit Rate" },
  { value: 100, suffix: "%", label: "US-Based Domestic Agents" },
  { value: 7, suffix: " Days/Wk", label: "Live Lead Qualification" },
];

const testimonial = {
  quote:
    "Speed to lead is everything in residential solar. Before Contact Center USA, our web lead contact rate was under 30%. With their 60-second response team qualifying homeowners and booking consultations directly into HubSpot, our sit rate jumped to 65% and our customer acquisition cost dropped by half.",
  name: "Danielle K.",
  title: "VP of Sales & Marketing",
  company: "A Multi-State Residential Solar EPC (California, Nevada, Arizona)",
  initials: "DK",
};

const faqs = [
  {
    question: "How quickly do your agents dial new web leads?",
    answer:
      "We integrate with your lead generation platforms via webhooks or Zapier. When a lead form is submitted, our agents dial the prospect in under 60 seconds, drastically increasing contact rates and appointment conversions.",
  },
  {
    question: "What qualification criteria do you screen for before booking a solar consultation?",
    answer:
      "We customize the screening rubric to your requirements, typically verifying: single-family homeownership, roof condition/shading, electric utility company, minimum monthly electric bill (e.g. $120-$150+), and credit qualification.",
  },
];

const seoSections: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Solar Call Center Outsourcing",
    heading: "In residential solar, speed to lead determines your cost per acquisition.",
    accent: "determines your cost per acquisition",
    body: [
      "Residential solar leads are among the most expensive in digital marketing. When a homeowner fills out a quote form online, they often submit their info to multiple installers. The company that calls within 60 seconds books the consultation 80% of the time.",
      "Contact Center USA provides dedicated US solar qualification agents who respond instantly, verify electric bills and roof suitability, and fill your sales reps' calendars with high-intent appointments.",
    ],
    stats: [
      { stat: "<60s", label: "Instant response on all digital solar leads" },
      { stat: "Salesforce / HubSpot", label: "Live territory calendar synchronization" },
      { stat: "Higher Sit Rates", label: "Automated multi-touch reminder cadence" },
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to scale your solar sales pipeline with instant lead response?",
    accent: "scale your solar sales pipeline",
    body: "Contact Center USA can connect to your lead capture forms and have your dedicated solar qualification team live in as little as 48 hours.",
    ctaLabel: "Get a Free Solar Call Center Quote",
    ctaHref: "/contact",
  },
];

export default function SolarPage() {
  return (
    <ServicePageTemplate
      badge="Clean Energy & Solar"
      title="Solar Lead Qualification & Appointment Setting Call Center"
      titleHighlight="Solar Lead Qualification & Appointment Setting"
      subtitle="Sub-60-Second Web Lead Response, Utility Bill Verification & Calendar Booking"
      description="Maximize ROI on every solar marketing lead. Our 100% US-based agents dial digital leads in under 60 seconds, qualify homeowners, and schedule high-intent consultations directly on your sales calendar 7 days a week."
      features={features}
      benefits={benefits}
      image="/images/cc-agent-monitor.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={[
        {
          title: "Lead Generation & Appointment Setting",
          desc: "Targeted outbound SDR and appointment setting campaigns.",
          href: "/solutions/lead-generation-appointment-setting",
        },
        {
          title: "Solar & Home Improvement Call Center",
          desc: "Full customer support and contractor services for solar installers.",
          href: "/industries/solar-home-improvement-call-center",
        },
        {
          title: "Inbound Call Center Services",
          desc: "Live inbound support, order capture, and overflow coverage.",
          href: "/solutions/inbound-call-center-services",
        },
      ]}
      ctaHeading="Ready to book more qualified solar consultations?"
      ctaSubtitle="Get a customized solar appointment setting proposal built for your sales team."
      seoContent={seoSections}
    />
  );
}
