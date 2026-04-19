"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  Landmark,
  Users,
  ClipboardCheck,
  Shield,
  Info,
  HeadphonesIcon,
} from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { PageFAQ } from "@/components/shared/PageFAQ";
import { SEOContentSection, type SEOPattern } from "@/components/shared/SEOContentSection";
import { siteConfig } from "@/lib/seo-config";

const features = [
  { icon: HeadphonesIcon, title: "Citizen Support Hotlines", desc: "Dedicated hotlines staffed by US-based agents trained to assist citizens with inquiries, applications, benefits, and service requests with patience, clarity, and professionalism." },
  { icon: ClipboardCheck, title: "Benefits & Enrollment", desc: "Guided enrollment assistance for healthcare, social services, SNAP, Medicaid, and public programs — ensuring every eligible citizen can access the benefits they need without confusion." },
  { icon: Shield, title: "Compliance & Reporting Lines", desc: "Confidential fraud, waste, and abuse reporting hotlines with secure data handling, chain-of-custody documentation, and whistleblower protection protocols built into every call." },
  { icon: Info, title: "Public Information Campaigns", desc: "High-volume information dissemination for public health campaigns, emergency notifications, census outreach, and government program awareness — reaching millions of citizens." },
  { icon: Users, title: "Constituent Outreach", desc: "Proactive outreach campaigns for voter registration, census participation, public hearings, community engagement, and satisfaction surveys that strengthen civic participation." },
  { icon: Landmark, title: "Agency Internal Support", desc: "IT help desks, HR inquiry lines, and interdepartmental coordination services for government employees — reducing internal bottlenecks and improving agency efficiency." },
];

const processSteps = [
  { step: "01", title: "Requirements & Clearance", desc: "We review your RFP or SOW, identify security clearance requirements, compliance standards, and SLA targets, then build a staffing and technology plan that meets every specification." },
  { step: "02", title: "Agent Vetting & Training", desc: "Every agent undergoes thorough background checks, fingerprinting, and security screening. Training covers your programs, regulations, citizen communication protocols, and escalation procedures." },
  { step: "03", title: "Secure Deployment", desc: "We deploy on FISMA-compliant infrastructure with encrypted communications, role-based access, call recording, and real-time quality monitoring — all ready for government audit." },
  { step: "04", title: "SLA Monitoring & Reporting", desc: "Transparent performance reporting against contracted SLAs with full audit trails, weekly reviews, and continuous improvement plans that exceed government performance standards." },
];

const industries = [
  { name: "Federal Agencies", desc: "Citizen-facing support for federal programs including benefits enrollment, tax assistance, immigration inquiries, and veteran services with cleared personnel.", href: "/industries/government" },
  { name: "State Government", desc: "State-level hotlines for Medicaid, SNAP, unemployment insurance, DMV support, and public health services with compliance across all fifty states.", href: "/industries/government" },
  { name: "Local & Municipal", desc: "311 services, utility billing support, permit inquiries, code enforcement reporting, and community services for cities and counties of all sizes.", href: "/industries/government" },
  { name: "Healthcare (Public)", desc: "Public health hotlines, Medicaid enrollment assistance, vaccine scheduling, and health information campaigns for state and county health departments.", href: "/industries/healthcare-call-center-services" },
  { name: "Education (Public)", desc: "Student enrollment support, financial aid hotlines, school district communication, and parent outreach services for K-12 and higher education systems.", href: "/industries/education-call-center-services" },
  { name: "Emergency Management", desc: "Disaster response hotlines, evacuation coordination, shelter information, and FEMA assistance support that activates within hours of an emergency declaration.", href: "/industries/government" },
];

const comparisonData = [
  { feature: "Security Clearances", inHouse: "Lengthy hiring process", outsourced: "Pre-vetted agents" },
  { feature: "Compliance (FISMA/FedRAMP)", inHouse: "Costly certification", outsourced: "Already certified" },
  { feature: "Surge Capacity", inHouse: "Months to scale", outsourced: "48-72 hours" },
  { feature: "Cost per Interaction", inHouse: "$8-$15 per contact", outsourced: "40% lower" },
  { feature: "Multilingual Coverage", inHouse: "Limited availability", outsourced: "20+ languages" },
  { feature: "SLA Compliance", inHouse: "Self-monitored", outsourced: "98%+ guaranteed" },
  { feature: "Disaster Recovery", inHouse: "Single-site risk", outsourced: "Multi-site redundancy" },
  { feature: "Audit Readiness", inHouse: "Significant prep needed", outsourced: "Always audit-ready" },
];

const faqs = [
  { question: "Do your government call center agents have security clearances?", answer: "Our agents can obtain security clearances as required by your contract — including Public Trust, Secret, and Top Secret levels. All government-facing agents undergo thorough background investigations, fingerprinting, drug screening, and credit checks that meet federal, state, and local requirements. We maintain a pool of pre-cleared agents ready for rapid deployment." },
  { question: "Are your facilities compliant with government security standards?", answer: "Yes. Our infrastructure is designed to meet FISMA, FedRAMP, and HIPAA requirements. We maintain SOC 2 Type II certification, conduct regular penetration testing and vulnerability scans, and separate government operations into dedicated secure environments with restricted physical and logical access controls." },
  { question: "Can you handle emergency response surge capacity?", answer: "Absolutely. We maintain trained reserve teams that can be activated within 48-72 hours for emergency response, disaster relief hotlines, public health crises, and seasonal enrollment surges. Our surge capacity allows us to triple staffing levels rapidly while maintaining quality standards and SLA compliance." },
  { question: "What government agencies have you supported?", answer: "We support federal, state, and local agencies across healthcare, social services, transportation, public safety, and education. Our experience includes Medicaid enrollment hotlines, 311 services, benefits inquiry lines, emergency management support, and compliance reporting systems for agencies at every level of government." },
  { question: "How do you ensure consistent quality for government contracts?", answer: "We implement rigorous quality monitoring including 100% call recording, screen capture, supervisor listening, and regular calibration sessions aligned to your quality standards. All performance metrics are reported transparently against contracted SLAs with full audit trails available for government review at any time." },
  { question: "Do you support multilingual citizen interactions?", answer: "Yes. We provide native-speaker support in Spanish and 20+ additional languages to serve diverse citizen populations. This includes compliance with Executive Order 13166 and Title VI language access requirements, ensuring LEP (Limited English Proficiency) citizens receive equal access to government services." },
  { question: "How does citizen support outsourcing save government agencies money?", answer: "Government agencies typically save 30-40% compared to internal staffing by eliminating recruitment, training, benefits, facility, and technology costs. Our flexible contract models — including per-call, per-hour, and FTE-based pricing — allow agencies to pay only for the capacity they use, with the ability to scale up or down without workforce reduction challenges." },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Government Call Center in USA",
    heading: "The government call center federal, state, and local agencies trust for secure, accessible citizen services.",
    accent: "trust for secure",
    body: [
      "Contact Center USA is one of the best government call center providers in the USA — a 100% US-based government bpo services partner delivering citizen hotlines, benefits enrollment, emergency response, and constituent outreach from FISMA- and FedRAMP-aligned domestic facilities.",
      "For federal agencies, state programs, and municipal governments searching for public sector call center outsourcing with US-person staffing, security-clearance-capable agents, and Section 508 accessibility, we deliver mission-critical service levels without the overhead of building internal call center capacity.",
    ],
    stats: [
      { stat: "100%", label: "US-based agents — security-clearance capable and background-screened" },
      { stat: "99.9%", label: "SLA adherence across citizen hotline and emergency response programs" },
      { stat: "40+", label: "Federal, state, and local agency engagements delivered" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House vs. Contact Center USA BPO",
    intro:
      "Every program director faces the same decision: staff an internal citizen contact center or partner with a specialized government bpo services provider. Here's how the two compare on cost, compliance, and surge capacity.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Clearance & Background Screening",
        left: "Lengthy internal clearance process; turnover resets the clock on every vacancy.",
        right: "US-person agents, public-trust and higher clearances available, background-screened.",
        leftYes: false,
      },
      {
        label: "FISMA / FedRAMP / CJIS Alignment",
        left: "Authority to Operate (ATO) workstreams consume months of agency staff time.",
        right: "FISMA Moderate aligned, FedRAMP-ready, and CJIS-capable controls in place.",
        leftYes: false,
      },
      {
        label: "Accessibility & Language Access",
        left: "Section 508 and LEP compliance handled ad hoc; often a gap at audit time.",
        right: "Section 508 digital accessibility, TTY/relay, and 20+ language coverage by default.",
        leftYes: false,
      },
      {
        label: "Surge Capacity",
        left: "Disaster, open-enrollment, and tax-season peaks crush fixed internal staffing.",
        right: "Scale public sector call center outsourcing capacity up/down in 10–15 business days.",
        leftYes: false,
      },
      {
        label: "Cost Structure",
        left: "Fully loaded FTE costs, PTO, training, and facility — funded 100% by the agency.",
        right: "Fixed-fee or per-interaction government bpo services pricing — predictable budgets.",
        leftYes: false,
      },
      {
        label: "Reporting & Transparency",
        left: "Manual reports and inconsistent KPIs make oversight and audits painful.",
        right: "Real-time SLA, AHT, FCR, and CSAT dashboards — audit-ready for IG and GAO.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Government Call Center Onboarding Process",
    intro:
      "Every government call center engagement follows the same disciplined five-step playbook — engineered to meet federal acquisition standards, ATO timelines, and citizen service expectations.",
    steps: [
      {
        title: "Requirements & Authority",
        body: "Work with your COR/contracting officer to align on PWS, SLAs, privacy, and ATO requirements.",
      },
      {
        title: "Security & Clearance",
        body: "Stand up US-person staffing, background screening, and FISMA Moderate controls on shared or dedicated environments.",
      },
      {
        title: "Program Design",
        body: "Build call flows, knowledge base, escalation paths, and Section 508 accessible self-service.",
      },
      {
        title: "Go-Live & Surge Plan",
        body: "Launch citizen hotlines with pre-positioned surge capacity for disasters, enrollment windows, and emergencies.",
      },
      {
        title: "Oversight & Reporting",
        body: "Monthly program reviews with audit-ready KPI dashboards — ready for IG, GAO, or state oversight.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Sectors",
    heading: "Public Sector Call Center Outsourcing We Deliver",
    intro:
      "Each level of government carries its own regulatory and constituent dynamics. Our workflows are tuned to the specific requirements of every sector we serve.",
    items: [
      {
        icon: "shield",
        stat: "FISMA",
        title: "Federal Agencies",
        body: "Citizen hotlines, benefits enrollment, and program support aligned to FISMA Moderate and FedRAMP controls.",
      },
      {
        icon: "landmark",
        stat: "State",
        title: "State Governments",
        body: "Unemployment insurance, DMV, Medicaid, and public assistance hotlines with surge capacity for enrollment peaks.",
      },
      {
        icon: "building",
        stat: "Local",
        title: "Municipal & County",
        body: "311 non-emergency services, utility billing, permits, and constituent engagement hotlines.",
      },
      {
        icon: "heart-pulse",
        stat: "HHS",
        title: "Health & Human Services",
        body: "HIPAA-compliant benefits enrollment, clinical support lines, and public health campaigns.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Choose Contact Center USA for Government Call Center Services",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Offshore vendors cannot meet US-person staffing requirements common across federal and state government programs. Small local providers lack the surge capacity required when disaster response, open enrollment, or tax season hits. Mega-vendors bury agencies in contract complexity and opaque subcontractor stacks.",
      "Contact Center USA is different: a 100% US-based government bpo services partner operating from FISMA-aligned domestic facilities, staffed by background-screened, clearance-capable US-person agents — delivering public sector call center outsourcing with the transparency and surge capacity modern agencies need.",
    ],
    bullets: [
      "100% US-person workforce — security-clearance and public-trust capable",
      "FISMA Moderate, FedRAMP-ready, HIPAA, and CJIS-aligned controls",
      "Section 508 digital accessibility and 20+ language support built-in",
      "Pre-positioned surge capacity for disasters, enrollment, and tax seasons",
      "Audit-ready reporting for IG, GAO, and state oversight boards",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to evaluate a better government call center partner?",
    accent: "better government call center",
    body: "If your citizen hotlines are stretched, your enrollment windows are overwhelming internal staff, or your current public sector call center outsourcing vendor is missing SLAs, request a free consultation. We'll benchmark your current program KPIs and show you exactly what government bpo services with Contact Center USA would look like.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

export default function GovernmentServicesContent() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <Image src="/images/cc-team-row-2.jpg" alt="Government Call Center Services - Contact Center USA" fill className="object-cover object-top" priority />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[80vh] pt-40 max-w-[1536px] items-center px-5 py-28 lg:px-8">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-5">
            <motion.div className="lg:col-span-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90 backdrop-blur-sm">
                <Landmark className="h-4 w-4" /> Government Services
              </span>
              <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[52px]">
                Trusted Government Call Center <span className="text-red">Services</span> for Citizen Support
              </h1>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/70">
                100% US-based, security-cleared agents delivering compliant citizen support outsourcing for federal, state, and local government agencies — scalable, auditable, and always ready.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 100% US-Based</div>
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> FISMA/FedRAMP Ready</div>
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 98%+ SLA Compliance</div>
              </div>
            </motion.div>
            <motion.div className="lg:col-span-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <HeroContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-navy py-12">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              { value: 100, suffix: "%", label: "US-Based Agents" },
              { value: 98, suffix: "%+", label: "SLA Compliance" },
              { value: 15, suffix: "+", label: "Agencies Served" },
              { value: 4, suffix: "M+", label: "Citizen Interactions" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white"><AnimatedCounter target={stat.value} suffix={stat.suffix} /></div>
                <div className="mt-1 text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LONG-FORM INTRO */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Why Government Outsourcing?</span>
              <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-navy sm:text-4xl">
                Citizen Support Outsourcing <span className="text-red">Built for Government</span> Standards
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
                Government agencies face unique challenges: <strong>strict security requirements, fluctuating demand, multilingual populations, and public accountability</strong> for every interaction. Internal contact centers struggle to meet these demands without massive budgets and lengthy procurement cycles.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                Contact Center USA provides <strong>dedicated, security-cleared teams</strong> operating from FISMA-compliant facilities with the infrastructure, training, and oversight that government contracts demand. Our agents are not general-purpose operators — they are <strong>trained on your specific programs</strong>, regulations, and citizen communication protocols.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                From benefits enrollment surges to emergency response activations, we scale from 50 to 500 agents within days — maintaining <strong>98%+ SLA compliance</strong> and full audit readiness throughout. Our <Link href="/solutions/multilingual-call-center-services" className="text-red font-semibold hover:underline">multilingual capabilities</Link> ensure every citizen receives equal access to services regardless of language.
              </p>

              <div className="mt-8 space-y-3">
                {["Security-cleared agents with background investigations", "FISMA, FedRAMP, and HIPAA compliant infrastructure", "Surge capacity: triple staffing in 48-72 hours", "20+ languages for diverse citizen populations"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red" />
                    <span className="text-[15px] text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image src="/images/cc-team-masks.jpg" alt="Government call center agents serving citizens at Contact Center USA" fill className="object-cover" />
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="absolute -bottom-6 -right-6 rounded-2xl bg-red px-6 py-5 text-white shadow-xl">
                <div className="text-3xl font-bold">98%+</div>
                <div className="text-sm text-white/80">SLA Compliance</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-red/[0.02] py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Our Capabilities</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Government Call Center <span className="text-red">Services</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">From citizen hotlines to emergency response, our security-cleared teams deliver compliant, compassionate government support.</p>
          </motion.div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red/10 text-red transition-all group-hover:bg-red group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Our Process</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">How Government Outsourcing <span className="text-red">Works</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">From RFP response to SLA reporting, we meet every government requirement with precision and transparency.</p>
          </motion.div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red text-xl font-bold text-white shadow-lg">{step.step}</div>
                <h3 className="mt-6 text-lg font-bold text-navy">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Cost Comparison</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Internal vs. <span className="text-red">Outsourced</span> Government Support</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">See why government agencies partner with Contact Center USA instead of building internal contact center operations.</p>
          </motion.div>
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="grid grid-cols-3 bg-navy p-4 text-center text-sm font-semibold text-white">
              <div>Feature</div><div>Internal</div><div>Contact Center USA</div>
            </div>
            {comparisonData.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 p-4 text-center text-sm ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <div className="font-medium text-navy">{row.feature}</div>
                <div className="text-gray-600">{row.inHouse}</div>
                <div className="flex items-center justify-center gap-1 font-semibold text-red"><CheckCircle className="h-4 w-4" />{row.outsourced}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Sectors We Serve</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Government Sectors That Rely on <span className="text-red">Outsourced Support</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">Our government call center services are tailored to the unique security, compliance, and service delivery requirements of every level of government.</p>
          </motion.div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link href={ind.href} className="group block rounded-2xl border border-gray-100 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-xl">
                  <h3 className="text-lg font-bold text-navy">{ind.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">{ind.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-red transition-all group-hover:gap-3">Learn More <ArrowRight className="h-4 w-4" /></div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Client Success</span>
              <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">What Our Clients <span className="text-red">Say</span></h2>
              <div className="mt-10 flex items-center gap-10">
                <div>
                  <div className="text-4xl font-bold text-navy">98%</div>
                  <div className="mt-1 flex items-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}</div>
                  <div className="mt-1 text-sm text-gray-600">SLA Compliance</div>
                </div>
                <div className="h-16 w-px bg-gray-200" />
                <div>
                  <div className="text-4xl font-bold text-navy">40%</div>
                  <div className="mt-1 text-sm text-gray-600">Cost Savings vs. Internal</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="absolute -right-6 -top-6 h-full w-full rounded-3xl bg-gray-50" />
              <div className="relative z-10 rounded-2xl bg-white p-10 shadow-xl">
                <div className="absolute -top-5 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-red text-2xl font-bold text-white shadow-lg">&ldquo;</div>
                <div className="flex items-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />)}</div>
                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  Contact Center USA handled our Medicaid enrollment surge flawlessly. They scaled from 50 to 200 agents in three weeks and maintained 98% SLA compliance throughout the open enrollment period. Their security protocols exceeded our federal requirements, and the audit trail they provided made our compliance review effortless.
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red to-red-dark text-lg font-bold text-white">JC</div>
                  <div>
                    <div className="font-bold text-navy">James Crawford</div>
                    <div className="text-sm text-gray-600">Program Director, State Department of Health Services</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center text-3xl font-bold text-navy sm:text-4xl">
            Related <span className="text-red">Services</span>
          </motion.h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { title: "Multilingual Services", desc: "Serve diverse citizen populations with native-speaking agents in Spanish and 20+ additional languages.", href: "/solutions/multilingual-call-center-services" },
              { title: "Back Office Support", desc: "Document processing, data entry, and records management for government administrative operations.", href: "/solutions/back-office-outsourcing" },
              { title: "Inbound Services", desc: "Professional call answering for citizen hotlines, information lines, and public service inquiries.", href: "/solutions/inbound-call-center-services" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link href={item.href} className="group block rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">{item.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-red transition-all group-hover:gap-3">Learn More <ArrowRight className="h-4 w-4" /></div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <SEOContentSection sections={seoContent} />

      {/* FAQ */}
      <PageFAQ heading="Government Services FAQ" faqs={faqs} />

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Improve Citizen Services?</h2>
              <p className="mt-3 text-white/60">See how outsourced government call center services can reduce costs, improve SLA compliance, and better serve your citizens.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-red-dark">
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
