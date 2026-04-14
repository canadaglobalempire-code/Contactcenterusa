import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Education Call Center Services | Enrollment & Student Support | Contact Center USA",
  description:
    "Education call center services for enrollment management, student services, alumni relations, and financial aid support. Improve student satisfaction and enrollment rates.",
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
  name: "Dr. Karen Williams",
  title: "VP of Enrollment Management",
  company: "Crestview University",
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

const relatedServices = [
  {
    title: "Inbound Call Center",
    desc: "Professional inbound support for student and parent inquiries.",
    href: "/services/inbound",
  },
  {
    title: "Outbound Campaigns",
    desc: "Enrollment outreach, alumni fundraising, and student engagement campaigns.",
    href: "/services/outbound",
  },
  {
    title: "Help Desk Support",
    desc: "IT and LMS help desk services for students, faculty, and staff.",
    href: "/services/help-desk",
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
    />
  );
}
