import type { Metadata } from "next";
import { StatePageTemplate } from "@/components/shared/StatePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

const title = "Pennsylvania Call Center & BPO Services | US-Based Teams";
const description =
  "Get US-based call center and BPO services in Pennsylvania for healthcare, education, financial services, and back office across Philadelphia and Pittsburgh.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "bpo companies in pennsylvania",
    "bpo services in pennsylvania",
    "call center companies in pennsylvania",
    "contact center outsourcing pennsylvania",
    "philadelphia bpo services",
    "pittsburgh call center outsourcing",
    "pennsylvania call center services",
    "pennsylvania customer service outsourcing",
  ],
  alternates: { canonical: "/locations/pennsylvania" },
  openGraph: { title, description, url: "/locations/pennsylvania", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Pennsylvania BPO",
    heading: "Two Anchors: Philadelphia Health and Pittsburgh Tech",
    accent: "Health and Tech",
    body: [
      "Pennsylvania's outsourcing market runs on two very different engines. Philadelphia is one of the largest healthcare and higher-education centers on the East Coast, generating steady demand for patient access and student services. Pittsburgh has reinvented itself as a robotics, healthcare, and technology hub, shifting its support needs toward the technical.",
      "Between and around them sits a large insurance and financial services sector and a manufacturing base spread across the state. Pennsylvania programs tend to be compliance-aware and process-heavy rather than pure consumer care.",
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Compare",
    heading: "In-State Pennsylvania Call Center vs Nationwide US BPO",
    intro: "How an in-state Pennsylvania provider compares to a distributed nationwide partner.",
    leftTitle: "In-State Pennsylvania Call Center",
    rightTitle: "Contact Center USA Nationwide BPO",
    rows: [
      {
        label: "Healthcare Compliance",
        left: "Philadelphia providers often have healthcare familiarity; formal HIPAA programs vary.",
        right: "Documented HIPAA program with BAAs, access controls, and audited monitoring.",
        leftYes: true,
      },
      {
        label: "Technical Support Depth",
        left: "Pittsburgh providers can staff technical roles; Philadelphia-based ones often cannot.",
        right: "Tier 1–3 technical support staffed nationally, independent of PA metro.",
        leftYes: false,
      },
      {
        label: "Agent Cost",
        left: "Pennsylvania is moderate, but Philadelphia metro costs run above the median.",
        right: "Nationwide talent pool at cost structures below PA metro rates.",
        leftYes: false,
      },
      {
        label: "Statewide Coverage",
        left: "Single-metro providers rarely serve Harrisburg, Allentown, or Erie well.",
        right: "Statewide support with no dependence on one metro's labor market.",
        leftYes: false,
      },
      {
        label: "Winter Weather Continuity",
        left: "Snow events have disrupted single-site PA operations.",
        right: "Distributed US workforce — PA winter never takes your queue offline.",
        leftYes: false,
      },
      {
        label: "Ramp Speed",
        left: "Moderate hiring market; 30–45 day ramps are typical.",
        right: "Pilot live in under 48 hours; full PA team in under 2 weeks.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve in Pennsylvania",
    intro: "The Pennsylvania sectors where Contact Center USA delivers outsourced customer operations.",
    items: [
      { icon: "heart-pulse", stat: "HIPAA", title: "Healthcare", body: "Patient access and HIPAA-compliant intake for Philadelphia and Pittsburgh health systems." },
      { icon: "graduation-cap", stat: "Education", title: "Higher Education", body: "Student services, admissions support, and enrollment programs for PA universities." },
      { icon: "landmark", stat: "Finance", title: "Financial Services", body: "Account servicing and compliance-aware support for Pennsylvania financial firms." },
      { icon: "laptop", stat: "Tech", title: "Technology & Robotics", body: "Tier 1–3 technical support for Pittsburgh's robotics and technology cluster." },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "One Partner for Both Pennsylvania Economies",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Pennsylvania organizations often need two capabilities at once: compliance-heavy healthcare and education support associated with Philadelphia, and technical support associated with Pittsburgh's technology sector.",
      "Contact Center USA staffs both from one nationwide pool — HIPAA-ready patient and student services, Tier 1–3 technical support, and consistent QA across the whole program, all Eastern-time aligned.",
    ],
    bullets: [
      "Documented HIPAA program for PA patient and student health services",
      "Tier 1–3 technical support for Pittsburgh technology clients",
      "Higher-education student services and enrollment support",
      "Eastern-time alignment with 24/7 overflow available",
      "Statewide coverage — Philadelphia, Pittsburgh, Harrisburg, Allentown, and Erie",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to compare BPO companies in Pennsylvania?",
    accent: "BPO companies in Pennsylvania",
    body: "Whether you are a Philadelphia health system, a Pennsylvania university, or a Pittsburgh technology company, Contact Center USA can stand up a dedicated Eastern-time team in under 48 hours.",
    ctaLabel: "Get a Free Pennsylvania BPO Quote",
    ctaHref: "/contact",
  },
];

export default function PennsylvaniaPage() {
  return (
    <StatePageTemplate
      state="Pennsylvania"
      stateAbbr="PA"
      slug="pennsylvania"
      timezone="Eastern Time"
      overview={[
        "Pennsylvania's outsourcing demand splits between two anchors. Philadelphia is one of the largest healthcare and higher-education centers on the East Coast, driving patient access and student services volume. Pittsburgh has become a robotics, healthcare, and technology hub, shifting its support demand toward technical work.",
        "A large insurance and financial services sector and a statewide manufacturing base fill in around them. Together they make Pennsylvania programs compliance-aware and process-heavy rather than commodity consumer care.",
        "Contact Center USA supports Pennsylvania businesses with 100% US-based inbound, outbound, technical support, and back-office teams on Eastern time, with the healthcare and financial compliance coverage the state's leading sectors require.",
      ]}
      metros={[
        { name: "Philadelphia", href: "/call-center-services-philadelphia", focus: "A major healthcare and higher-education center. Patient access, student services, and financial support programs." },
        { name: "Pittsburgh", focus: "Robotics, healthcare, and technology hub. Tier 1–3 technical support and product-literate customer success." },
        { name: "Harrisburg", focus: "State government seat with public-sector services, insurance, and healthcare programs." },
        { name: "Allentown & Lehigh Valley", focus: "Logistics, manufacturing, and healthcare serving eastern Pennsylvania. B2B and patient support programs." },
        { name: "Erie", focus: "Manufacturing and insurance base in northwestern PA. Claims intake and B2B support programs." },
        { name: "Scranton & Wilkes-Barre", focus: "Logistics, distribution, and regional healthcare in northeastern Pennsylvania." },
      ]}
      industries={[
        { name: "Healthcare", href: "/industries/healthcare-call-center-services", note: "Patient access and HIPAA-compliant intake for Philadelphia and Pittsburgh health systems." },
        { name: "Education", href: "/industries/education-call-center-services", note: "Student services, admissions, and enrollment support for Pennsylvania universities." },
        { name: "Financial Services", href: "/industries/financial-services-call-center", note: "Account servicing and compliance-aware support for Pennsylvania financial firms." },
        { name: "Insurance", href: "/industries/insurance-call-center-outsourcing", note: "Claims intake and policyholder servicing for Pennsylvania carriers, including Erie's insurance base." },
      ]}
      faqs={[
        {
          question: "What do BPO companies in Pennsylvania typically handle?",
          answer:
            "It varies by region. Philadelphia programs skew toward healthcare patient access and higher-education student services, while Pittsburgh programs skew technical given the city's robotics and technology sector. Statewide, insurance claims and financial servicing are also common.",
        },
        {
          question: "Can you support both healthcare and technical programs?",
          answer:
            "Yes, and that is a common reason PA organizations consolidate with us. Few single-metro providers credibly do both, so companies often end up managing two vendors. We staff HIPAA-ready patient services and Tier 1–3 technical support from one nationwide pool with consistent QA.",
        },
        {
          question: "Do you handle higher-education student services?",
          answer:
            "Yes. Pennsylvania's dense university presence generates demand for admissions support, enrollment services, financial aid inquiries, and student help desks — often with sharp seasonal peaks around enrollment periods that elastic capacity handles well.",
        },
        {
          question: "Are your agents located in Pennsylvania?",
          answer:
            "Our agents are distributed across the United States. Pennsylvania clients get Eastern-time-aligned teams trained on their market and compliance requirements, without single-site winter weather exposure. All agents are 100% US-based.",
        },
        {
          question: "Do you serve smaller Pennsylvania markets?",
          answer:
            "Yes. We support businesses in Harrisburg, Allentown, Erie, Scranton, and Wilkes-Barre alongside Philadelphia and Pittsburgh. Coverage does not depend on having a facility in your city.",
        },
        {
          question: "How quickly can a Pennsylvania program launch?",
          answer:
            "A pilot can be live in under 48 hours, with a full Eastern-time team typically in place within two weeks.",
        },
      ]}
      relatedPost={{ label: "Top 10 BPO Companies in Pennsylvania", href: "/blog/top-10-bpo-companies-pennsylvania" }}
      seoContent={seoContent}
    />
  );
}
