import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Veterinary Call Center | Vet Answering & Scheduling Service",
  description:
    "US-based veterinary call center for clinics and animal hospitals. Appointment booking, after-hours emergency triage routing, and refill requests. Get a quote.",
  keywords: [
    "veterinary call center",
    "veterinary answering service",
    "vet clinic phone answering",
    "animal hospital answering service",
    "veterinary appointment scheduling",
    "after hours veterinary answering",
    "pet clinic call center",
    "veterinary practice outsourcing",
    "vet reminder calls",
    "emergency vet call routing",
  ],
  alternates: { canonical: "/industries/veterinary-call-center" },
};

const features = [
  {
    title: "Appointment Booking & Schedule Fill",
    desc: "Wellness visits, sick appointments, surgeries, and recheck exams booked live into your practice software, respecting doctor templates, appointment durations, and species or service restrictions.",
  },
  {
    title: "After-Hours Emergency Routing",
    desc: "Live coverage when your clinic is closed, applying your triage criteria to distinguish a genuine emergency from a next-morning appointment, and routing owners to your emergency partner or on-call doctor as your protocol directs.",
  },
  {
    title: "Prescription Refill Intake",
    desc: "Refill requests captured with the medication, patient, and last-visit detail your technicians need, queued for doctor authorization rather than interrupting the clinical team mid-appointment.",
  },
  {
    title: "Reminders & Preventive Recall",
    desc: "Outbound reminder calls for vaccinations, heartworm and parasite prevention, dentals, and overdue wellness visits — the recall work that keeps preventive care compliance up and clinics full.",
  },
  {
    title: "Overflow During Clinic Hours",
    desc: "Your team is in exam rooms and restraining animals; they cannot always reach the phone. Overflow coverage catches the calls that would otherwise ring out during your busiest clinical hours.",
  },
  {
    title: "Compassionate Call Handling",
    desc: "Veterinary calls include euthanasia enquiries, critical patients, and grieving owners. Agents are trained on tone and on the strict boundary between scheduling support and anything resembling clinical advice.",
  },
];

const benefits = [
  "Live answering during clinic hours and after close",
  "100% US-based agents",
  "Booking in AVImark, Cornerstone, ezyVet & Vetspire",
  "Emergency triage routing by your written protocol",
  "Refill intake queued for doctor authorization",
  "Bilingual English/Spanish pet owner support",
];

const stats = [
  { value: 24, suffix: "/7", label: "After-Hours Coverage Available" },
  { value: 100, suffix: "%", label: "US-Based Agents" },
  { value: 3, suffix: " rings", label: "Target Answer Speed" },
  { value: 4, suffix: "+ systems", label: "Practice Software Integrations" },
];

const faqs = [
  {
    question: "Do your agents give medical advice?",
    answer:
      "No, and this boundary is absolute. Agents do not assess, diagnose, or advise on any animal's condition. What they do is apply your written triage criteria to decide routing — whether a call goes to your emergency partner, your on-call doctor, or a next-day appointment — and read only from guidance you have approved in advance. Anything ambiguous is escalated rather than judged.",
  },
  {
    question: "How does after-hours emergency routing work?",
    answer:
      "You supply the protocol and we follow it exactly. Typically that means a documented list of presentations that route immediately to your emergency partner or on-call doctor, with contact details and escalation order, and a defined set that can safely be scheduled for the next morning. Owners always receive a clear next step and a number, never a message promising an unspecified callback.",
  },
  {
    question: "Can you book into our practice management software?",
    answer:
      "Yes. Agents are provisioned in AVImark, Cornerstone, ezyVet, Vetspire, Covetrus Pulse, or your system of record, and book against live availability during the call — honoring appointment durations, doctor preferences, and any species or service restrictions you set.",
  },
  {
    question: "Can you handle prescription refill requests?",
    answer:
      "Yes. Agents capture the patient, medication, dose, pharmacy preference, and last visit date, then queue the request for doctor or technician authorization through your normal process. Agents never authorize a refill. This alone removes a large volume of interruptions from the clinical team's day.",
  },
  {
    question: "Do you run reminder and recall calls?",
    answer:
      "Yes. Vaccination reminders, heartworm and parasite prevention, dental month campaigns, and overdue wellness recall are all outbound work that improves preventive compliance and fills the schedule — and all work a clinical team almost never has time to do consistently.",
  },
  {
    question: "How do you handle euthanasia and grieving owners?",
    answer:
      "With training and a very clear boundary. Agents are prepared for these calls so an owner does not encounter a scripted or awkward response at the worst moment. They handle scheduling and logistics with appropriate care, and route anything clinical or decision-related to your team. We would rather escalate a call than have an agent improvise in that conversation.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Veterinary Call Center Services",
    heading: "Your team is restraining a patient. The phone is still ringing.",
    accent: "The phone is still ringing",
    body: [
      "Contact Center USA answers for veterinary clinics and animal hospitals with US-based agents — appointment booking, refill intake, preventive recall, and after-hours emergency routing by your written protocol.",
      "Veterinary practices lose calls for a reason no scheduling software fixes: the people who answer the phone are the same people holding a frightened animal. Overflow and after-hours coverage is the only structural answer.",
    ],
    stats: [
      { stat: "24/7", label: "After-hours coverage with protocol-driven emergency routing" },
      { stat: "100%", label: "US-based agents booking in your practice software" },
      { stat: "4+", label: "Practice systems supported including ezyVet and Cornerstone" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "A General Answering Service vs. a Veterinary Call Center",
    intro:
      "Most clinics have used a generic answering service at some point. The recurring complaint is the same: it stops the phone ringing without resolving anything, and the next morning starts with a stack of messages.",
    leftTitle: "General Answering Service",
    rightTitle: "Contact Center USA",
    rows: [
      {
        label: "Appointment Booking",
        left: "Takes a message; the owner is called back and often books elsewhere first.",
        right: "Booked live in your practice software during the call.",
        leftYes: false,
      },
      {
        label: "Emergency Routing",
        left: "Passes everything through, or escalates nothing consistently.",
        right: "Routed by your written protocol to your emergency partner or on-call doctor.",
        leftYes: false,
      },
      {
        label: "Refill Requests",
        left: "Message only, re-entered by a technician the next morning.",
        right: "Full detail captured and queued for authorization through your process.",
        leftYes: false,
      },
      {
        label: "Daytime Overflow",
        left: "Not offered — coverage is after-hours only.",
        right: "Overflow during clinic hours when your team is in exam rooms.",
        leftYes: false,
      },
      {
        label: "Preventive Recall",
        left: "No outbound capability at all.",
        right: "Vaccination, prevention, and dental recall campaigns with reporting.",
        leftYes: false,
      },
      {
        label: "Sensitive Calls",
        left: "Untrained operators handling euthanasia and critical calls awkwardly.",
        right: "Trained tone with a hard boundary and escalation to your team.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "From Ringing Phone to a Booked Appointment",
    intro:
      "Every veterinary engagement starts with your triage protocol, because routing decisions matter more here than anywhere else in the workflow.",
    steps: [
      {
        title: "Triage Protocol Documentation",
        body: "We capture, in writing, which presentations route to emergency, to on-call, and to a next-day appointment.",
      },
      {
        title: "Software Provisioning",
        body: "Agents given scheduling access in AVImark, Cornerstone, ezyVet, Vetspire, or your system.",
      },
      {
        title: "Boundary Training",
        body: "Agents trained on your approved language and the absolute limit on anything clinical.",
      },
      {
        title: "Go Live After Hours",
        body: "Start with nights and weekends, then add daytime overflow once routing is proven.",
      },
      {
        title: "Add Recall Campaigns",
        body: "Layer in vaccination, prevention, and wellness recall to fill the schedule proactively.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Practices We Answer For",
    heading: "Across Companion, Emergency, and Specialty Practice",
    intro:
      "A general companion practice and a specialty referral hospital have very different call profiles and routing needs.",
    items: [
      {
        icon: "heart-pulse",
        stat: "GP",
        title: "Companion Animal Practices",
        body: "Wellness and sick appointments, refills, preventive recall, and after-hours routing.",
      },
      {
        icon: "zap",
        stat: "ER",
        title: "Emergency & Urgent Care",
        body: "High-urgency intake with clear directions, arrival guidance, and capacity communication.",
      },
      {
        icon: "stethoscope",
        stat: "Spec",
        title: "Specialty & Referral",
        body: "Referral intake from primary practices, records coordination, and consult scheduling.",
      },
      {
        icon: "building",
        stat: "Group",
        title: "Multi-Site Veterinary Groups",
        body: "Central intake with location-aware routing across a group of clinics.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Veterinary Phone Coverage Is a Structural Problem",
    image: "/images/cc-agent-smile.jpg",
    imagePosition: "right",
    body: [
      "In most businesses a missed call means someone was busy. In a veterinary clinic it means the person who answers the phone is currently holding an animal that does not want to be held. No amount of training or scheduling software changes that.",
      "Contact Center USA provides the coverage that does change it — overflow during clinical hours, live answering after close, routing by your written triage protocol, and refill intake that stops interrupting your technicians. The clinical boundary is absolute, and every ambiguous call escalates to you.",
    ],
    bullets: [
      "Overflow during clinic hours, not just after-hours coverage",
      "Emergency routing strictly by your documented protocol",
      "Live booking in AVImark, Cornerstone, ezyVet, and Vetspire",
      "Refill detail captured and queued for your authorization",
      "Absolute boundary on clinical advice, with escalation by default",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Stop losing appointments to a phone nobody can reach.",
    accent: "a phone nobody can reach",
    body: "Send us your call volume, practice software, and emergency protocol. We will build a coverage plan for overflow, after-hours routing, and preventive recall.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Healthcare Call Center Services",
    desc: "Patient communication programs across human healthcare practices and systems.",
    href: "/industries/healthcare-call-center-services",
  },
  {
    title: "Virtual Receptionist Services",
    desc: "Front-desk coverage for single-site clinics that need reception more than a queue.",
    href: "/industries/virtual-receptionist-services",
  },
  {
    title: "Inbound Call Center Services",
    desc: "Scaled inbound coverage for multi-site veterinary groups and referral hospitals.",
    href: "/solutions/inbound-call-center-services",
  },
];

export default function VeterinaryCallCenterPage() {
  return (
    <ServicePageTemplate
      badge="Veterinary Call Center"
      title="Appointment & Emergency Coverage for Veterinary Practices"
      titleHighlight="Veterinary Practices"
      subtitle="Clinics, emergency hospitals, and multi-site groups use our US-based agents to catch overflow during clinic hours, cover after close, and route emergencies by their own written protocol."
      description="Veterinary practices miss calls because the people answering the phone are the people restraining the patient. We provide overflow coverage during clinic hours and live answering after close, booking appointments directly in AVImark, Cornerstone, ezyVet, or Vetspire, capturing refill requests for your authorization, and routing emergencies strictly by the triage protocol you document — never by agent judgment."
      features={features}
      benefits={benefits}
      image="/images/cc-support-team.jpg"
      stats={stats}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
