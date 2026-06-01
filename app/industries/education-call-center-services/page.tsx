import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Education Call Center | Contact Center USA",
  description:
    "US-based education call center support for customer care, inbound calls, outbound outreach, and back office workflows. Request an outsourcing quote.",
  keywords: [
    "education call center",
    "university bpo services",
    "student support outsourcing",
    "higher education call center",
    "enrollment management bpo",
    "financial aid call center",
    "alumni fundraising outsourcing",
    "lms help desk support",
  ],
  alternates: { canonical: "/industries/education-call-center-services" },
};

const features = [
  {
    title: "Enrollment & Admissions Support",
    desc: "Trained agents who guide prospective students through the admissions process, answer program questions, assist with applications, and nurture leads from inquiry to enrollment.",
  },
  {
    title: "Student Services & Help Desk",
    desc: "Comprehensive student support including registration assistance, course scheduling, campus resource navigation, IT help desk, and general inquiries to improve the student experience.",
  },
  {
    title: "Alumni Relations & Engagement",
    desc: "Dedicated alumni outreach for fundraising campaigns, event invitations, mentorship programs, and network building that strengthens alumni connections and drives giving.",
  },
  {
    title: "Financial Aid & Billing Support",
    desc: "Knowledgeable agents who help students and families navigate FAFSA, scholarships, tuition payment plans, and billing inquiries — reducing confusion and improving financial aid completion rates.",
  },
  {
    title: "Emergency Communication & Alerts",
    desc: "Rapid mass notification support for campus emergencies, weather closures, and urgent announcements with multi-channel delivery across phone, text, and email.",
  },
  {
    title: "Online Learning Support",
    desc: "Technical and academic support for online and hybrid learning platforms including LMS navigation, login issues, course access, and virtual classroom troubleshooting.",
  },
];

const benefits = [
  "Enrollment conversion optimization",
  "FERPA-compliant processes",
  "SIS & LMS integrations",
  "Financial aid guidance",
  "Alumni fundraising support",
  "Multilingual student services",
];

const stats = [
  { value: 30, suffix: "%", label: "Increase in Enrollment" },
  { value: 95, suffix: "%", label: "Student Satisfaction Rate" },
  { value: 200, suffix: "K+", label: "Student Inquiries Handled" },
  { value: 50, suffix: "%", label: "Faster Response Times" },
];

const testimonial = {
  quote:
    "Contact Center USA helped us increase enrollment by 30% in one admissions cycle. Their agents understand higher education and treat every prospective student with the care and attention they deserve.",
  name: "K.W.",
  title: "VP of Enrollment Management",
  company: "A State University System",
  initials: "KW",
};

const faqs = [
  {
    question: "Are your agents trained on FERPA compliance?",
    answer:
      "Yes, all education support agents complete FERPA training before handling student interactions. They understand information release requirements, directory vs. non-directory information, and proper identity verification procedures for student records.",
  },
  {
    question: "Can you integrate with our student information system?",
    answer:
      "We integrate with major SIS platforms including Banner, PeopleSoft, Workday Student, and Jenzabar. Agents access student records, enrollment status, and course information in real time while maintaining strict data security protocols.",
  },
  {
    question: "How do you handle enrollment and admissions outreach?",
    answer:
      "We run structured outreach campaigns that nurture prospective students through the admissions funnel — from initial inquiry to campus visit scheduling to application completion. Agents follow custom scripts designed to increase yield rates.",
  },
  {
    question: "Do you support alumni fundraising campaigns?",
    answer:
      "Absolutely. Our agents conduct alumni outreach for annual giving, capital campaigns, reunion events, and survey research. We use data-driven calling strategies and warm, conversational approaches that typically outperform internal calling programs.",
  },
  {
    question: "Can you provide support for online and distance learners?",
    answer:
      "Yes, we offer technical and academic support for students using LMS platforms like Canvas, Blackboard, and Moodle. Agents help with login issues, course navigation, assignment submissions, and virtual classroom access to keep online learners on track.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Education Call Center in USA",
    heading: "The education call center that turns inquiries into enrollments and protects every student interaction under FERPA.",
    accent: "under FERPA",
    body: [
      "Contact Center USA is one of the best education call center providers in the USA — a 100% US-based university BPO services operation with FERPA-certified agents, SIS integrations, and enrollment playbooks built for the US higher-ed funnel.",
      "For universities, community colleges, EdTech platforms, and K-12 district offices evaluating student support outsourcing, we deliver faster response times, higher yield, and accessible, empathetic service across every stage of the student lifecycle.",
    ],
    stats: [
      { stat: "+30%", label: "Enrollment lift after a full admissions-cycle partnership" },
      { stat: "95%", label: "Student satisfaction score across inbound support queues" },
      { stat: "200K+", label: "Student inquiries handled annually for higher-ed partners" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Student Support vs. Contact Center USA BPO",
    intro:
      "Most institutions staff enrollment, student services, financial aid, and alumni relations as separate units — budget pressure leaves every queue understaffed. Here's how an internal model compares to dedicated university BPO services.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Lead Response Time",
        left: "Prospective students wait 24–72 hours; high-intent leads go cold before second contact.",
        right: "Sub-5-minute response 24/7 — inquiry to application with a consistent nurture cadence.",
        leftYes: false,
      },
      {
        label: "FERPA Compliance",
        left: "Training inconsistent across enrollment, financial aid, and help desk functions.",
        right: "Every agent FERPA-certified before go-live with quarterly recertification and QA audits.",
        leftYes: false,
      },
      {
        label: "Peak Cycle Scaling",
        left: "Open houses, FAFSA windows, and add/drop create chronic queue overflow.",
        right: "Pre-planned seasonal surge staffing tied to your academic calendar.",
        leftYes: false,
      },
      {
        label: "SIS & LMS Integration",
        left: "Manual lookups across Banner, PeopleSoft, Workday Student, Canvas, and Blackboard.",
        right: "Live integrations for real-time record access and single-call resolution.",
        leftYes: false,
      },
      {
        label: "Alumni Fundraising Output",
        left: "Student callers and in-house phonathon programs produce inconsistent giving lift.",
        right: "Professional alumni outreach agents with calibrated ask ladders and gift-processing discipline.",
        leftYes: false,
      },
      {
        label: "Accessibility & Languages",
        left: "Limited TTY/TDD, Section 508, and non-English coverage.",
        right: "Full accessibility stack plus English/Spanish/Mandarin and 200+ languages on demand.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Student Support Outsourcing Onboarding",
    intro:
      "Every institution and EdTech platform follows the same five-stage launch — engineered to protect student records, stand up FERPA-compliant workflows, and move the needle on yield and retention.",
    steps: [
      {
        title: "Institution Discovery",
        body: "Programs, funnel, FERPA posture, SIS/LMS stack, and academic calendar mapped with your team.",
      },
      {
        title: "Data & System Integration",
        body: "Secure connections to Banner, PeopleSoft, Workday, Canvas, Blackboard, Salesforce Education.",
      },
      {
        title: "FERPA & Program Training",
        body: "Agents certified on FERPA plus your majors, financial aid, residence life, and student policies.",
      },
      {
        title: "Pilot Queue Launch",
        body: "Controlled rollout on enrollment or help desk with joint QA calibration and yield tracking.",
      },
      {
        title: "Lifecycle Expansion",
        body: "Expanding to financial aid, student services, alumni, and LMS help desk over the academic year.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Sub-Segments",
    heading: "Education Sub-Segments Our BPO Supports",
    intro:
      "Four-year universities, community colleges, online programs, and K-12 districts all have different KPIs. Our university BPO services flex to the economics of each sub-segment.",
    items: [
      {
        icon: "graduation-cap",
        stat: "4-Year",
        title: "Universities & Colleges",
        body: "Enrollment management, residence life, financial aid, and bursar support for traditional institutions.",
      },
      {
        icon: "building",
        stat: "2-Year",
        title: "Community & Technical Colleges",
        body: "Open-enrollment support, workforce program outreach, and student success coaching.",
      },
      {
        icon: "laptop",
        stat: "Online",
        title: "Online & OPM Programs",
        body: "Lead nurture, LMS help desk, proctoring support, and student retention outreach.",
      },
      {
        icon: "graduation-cap",
        stat: "K-12",
        title: "K-12 Districts & EdTech",
        body: "Parent hotlines, emergency notification, EdTech tier-1 support, and student family services.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Universities and EdTech Choose Contact Center USA",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Offshore student support outsourcing breaks trust with families and prospects; generalist BPOs treat FERPA as an afterthought. In-house programs can't staff for the compression of open enrollment, FAFSA season, and move-in weekend all landing inside a 60-day window.",
      "Contact Center USA is different: a 100% US-based education call center with FERPA-certified supervisors, SIS-integrated agents, and a funnel-obsessed enrollment management playbook that consistently lifts yield.",
    ],
    bullets: [
      "100% US-based education call center workforce — families hear clear, domestic voices",
      "FERPA certification, Section 508 accessibility, and TTY/TDD baked into every program",
      "Live SIS/LMS integration with Banner, PeopleSoft, Workday, Canvas, Blackboard",
      "Dedicated enrollment, financial aid, retention, and alumni pods with separate QA",
      "Academic-calendar surge model covering FAFSA, add/drop, commencement, and giving days",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to outsource your education call center to a US-based BPO?",
    accent: "US-based BPO",
    body: "If your yield is slipping, your financial aid queues are overwhelmed at FAFSA season, or your alumni fundraising has plateaued, request a free consultation. We'll build a funnel and lifecycle model that quantifies enrollment lift and student-satisfaction impact before you sign a thing.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Inbound Call Center",
    desc: "Professional inbound support for student and parent inquiries.",
    href: "/solutions/inbound-call-center-services",
  },
  {
    title: "Outbound Campaigns",
    desc: "Enrollment outreach, alumni fundraising, and student engagement campaigns.",
    href: "/solutions/outbound-call-center-services",
  },
  {
    title: "Help Desk Support",
    desc: "IT and LMS help desk services for students, faculty, and staff.",
    href: "/solutions/technical-support-outsourcing",
  },
];

export default function EducationPage() {
  return (
    <ServicePageTemplate
      badge="Education Call Center Services"
      title="Call Center Solutions for Educational Institutions"
      titleHighlight="Educational Institutions"
      subtitle="From enrollment and admissions to alumni engagement and financial aid, support every stage of the student journey with dedicated, FERPA-compliant agents."
      description="Educational institutions juggle enrollment targets, student satisfaction, alumni relations, and tight budgets — all at once. Our agents bring higher education expertise to every interaction, whether it is guiding a prospective student through admissions, helping a current student navigate financial aid, or connecting with alumni for fundraising. We help you do more with less while delivering experiences that reflect your institution's values."
      features={features}
      benefits={benefits}
      image="/images/hd-agents-row.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
