"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight, CheckCircle, ExternalLink } from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";

const companies = [
  {
    rank: 1,
    name: "Global Empire Corporation",
    hq: "United States",
    founded: "1998",
    website: "https://globalempire.com/",
    bestFor: "Full-service American legal intake call center outsourcing across PI, mass tort, and consumer law",
    description:
      "Global Empire Corporation leads the American legal intake call center industry with comprehensive, 100% US-based law firm answering service and legal intake outsourcing staffed entirely by domestic intake specialists. Their legal intake practice covers 24/7 live intake, personal injury intake, mass tort qualification, SSDI, bankruptcy, family law, and criminal defense screening, plus signed retainer workflows delivered straight into Litify, Clio, MyCase, Filevine, and Salesforce Legal. Every attorney lead qualification call is handled by trained US-based legal intake specialists, not offshore agents or general receptionists, making them the top choice for PI firms, mass tort marketing shops, and multi-state consumer law practices that treat speed-to-lead as a core competitive advantage.",
    services: [
      "24/7 US-based legal intake call center",
      "Personal injury intake & lead qualification",
      "Mass tort intake call center (single-event & long-tail)",
      "After hours legal intake & overflow answering",
      "Bilingual legal intake (English & Spanish)",
      "Signed retainer workflow + Litify/Clio/MyCase integration",
    ],
    industries: "Personal injury, mass tort, SSDI, workers' comp, bankruptcy, family law, criminal defense, immigration",
    strengths: "100% US-based legal intake specialists, true 24/7 coverage, HIPAA-compliant, deep case management integrations.",
    weaknesses: "Premium US pricing vs. offshore — offset by higher retainer conversion and signed-case volume.",
    pricing: "Per-qualified-lead, per-intake, hourly ($24-$42 US), or blended outcome-based",
    clients: "National PI firms, mass tort marketing agencies, multi-state consumer law practices, SSDI advocates",
    highlight: "The #1 American legal intake call center — 100% US-based attorneys' intake specialists with HIPAA-compliant workflows and true 24/7 live intake coverage.",
  },
  {
    rank: 2,
    name: "Intelemark",
    hq: "United States",
    founded: "1999",
    website: "https://www.intelemark.com/",
    bestFor: "American B2B and corporate legal services lead generation and attorney lead qualification",
    description:
      "Intelemark runs one of the most respected American B2B engagement programs in the country and is particularly strong for law firms that serve corporate clients — commercial litigation, M&A, employment defense, IP, and regulatory practices that need consultative attorney lead qualification rather than volume consumer intake. Every call is made by trained US-based representatives who understand American business culture and can handle sophisticated conversations with in-house counsel and C-level decision-makers. Their law firm call center outsourcing model works best when every lead is high-value and relationship-sensitive.",
    services: [
      "US-based B2B attorney lead qualification",
      "Corporate legal services outreach",
      "Commercial litigation & employment defense intake",
      "Onshore CRM integration (Salesforce, HubSpot, Litify)",
      "Consultative legal answering service for business lines",
      "American market research for law firm marketing",
    ],
    industries: "Commercial litigation, employment defense, M&A, IP, regulatory, corporate law",
    strengths: "Premium US-based B2B SDRs, consultative tone, excellent for high-value corporate legal leads.",
    weaknesses: "B2B-focused; not suited for high-volume PI or mass tort intake call center programs.",
    pricing: "Hourly or per-qualified-lead",
    clients: "Corporate law firms, employment defense practices, IP boutiques, regulatory counsel",
    highlight: "Premium American B2B attorney lead qualification with US-based representatives who understand corporate legal buying cycles.",
  },
  {
    rank: 3,
    name: "Call Motivated Sellers",
    hq: "United States",
    founded: "2010",
    website: "https://callmotivatedsellers.com/",
    bestFor: "US-based outbound legal intake follow-up, signed-retainer chase, and client reactivation",
    description:
      "Call Motivated Sellers delivers high-performance outbound calling campaigns powered by an entirely American workforce — a strong fit for law firms that generate leads via paid media and need aggressive, TCPA-compliant speed-to-lead follow-up. Their agents chase unsigned leads, recover stalled e-sign retainers, and reactivate cold PI and mass tort cases from domestic facilities across the United States. Every personal injury lead qualification and mass tort follow-up call is handled by US-based specialists, fully TCPA-compliant for legal marketing outreach.",
    services: [
      "American-staffed outbound legal intake follow-up",
      "Unsigned-retainer chase & e-sign recovery",
      "Personal injury lead qualification call-backs",
      "Mass tort intake call center outbound qualification",
      "TCPA-compliant law firm outreach programs",
      "US-regulated compliance monitoring for legal marketing",
    ],
    industries: "Personal injury, mass tort, SSDI, consumer class actions, debt relief, immigration",
    strengths: "Top-tier outbound execution, TCPA-compliant, US-based agents, strong for retainer recovery and speed-to-lead.",
    weaknesses: "Outbound-heavy; not a high-volume inbound 24/7 legal intake services provider.",
    pricing: "Per-hour or per-signed-retainer outcome pricing",
    clients: "PI firms, mass tort marketing agencies, national consumer law practices",
    highlight: "Top-tier American outbound legal intake with TCPA-compliant US-based agents driving signed-retainer conversion for PI and mass tort firms.",
  },
  {
    rank: 4,
    name: "Customer Communications Corp",
    hq: "United States",
    founded: "1995",
    website: "https://customercommunicationscorp.com/",
    bestFor: "Domestic omnichannel legal intake across voice, chat, SMS, email, and web forms",
    description:
      "Customer Communications Corp provides American law firms with seamless omnichannel legal intake across voice, live chat, email, SMS, and web-form follow-up — all handled by domestic intake specialists located throughout the United States. Their platform unifies every prospect interaction into a single view and pushes qualified leads directly into Litify, Clio, MyCase, Filevine, and Salesforce Legal. With decades of experience serving American law firms, they understand case-type screening nuances, conflict checks, and statute-of-limitations routing, and they deliver the responsive law firm answering service clients expect the moment they reach out after an accident or injury.",
    services: [
      "US-based omnichannel legal intake (voice, chat, SMS, email)",
      "Case type screening & conflict checks",
      "Domestic web-form follow-up & speed-to-lead",
      "Onshore statute-of-limitations routing",
      "Litify / Clio / MyCase / Filevine integration",
      "American bilingual legal intake (English & Spanish)",
    ],
    industries: "Personal injury, mass tort, family law, bankruptcy, SSDI, workers' comp, immigration",
    strengths: "Comprehensive omnichannel delivery, unified prospect view, domestic-only intake specialists, strong case management integrations.",
    weaknesses: "Mid-tier scale; less suited for AmLaw 100 enterprise legal operations volumes.",
    pricing: "Per-intake or hourly",
    clients: "Mid-market PI firms, consumer law practices, regional mass tort agencies",
    highlight: "Comprehensive American omnichannel legal intake with unified prospect view and domestic-only intake specialists.",
  },
  {
    rank: 5,
    name: "Call Center Staffing",
    hq: "United States",
    founded: "2005",
    website: "/contact",
    bestFor: "American legal intake agent staffing & rapid mass-tort campaign deployment",
    description:
      "Call Center Staffing specializes in rapidly sourcing, training, and deploying American legal intake agents for law firms and mass tort marketing agencies that need to scale their domestic intake operations quickly — especially when a new mass tort campaign launches or a TV buy drives surge call volume overnight. Whether a firm needs to 2-4x intake capacity for a new tort, absorb a media spike, or build a fully US-based 24/7 legal intake services team from scratch, Call Center Staffing provides pre-vetted American intake specialists who can be operational within days.",
    services: [
      "Rapid American legal intake agent recruitment",
      "US-based temporary & permanent intake staffing",
      "Domestic workforce management for 24/7 legal intake services",
      "Intake specialist training for PI and mass tort",
      "Onshore overflow & surge capacity for mass tort launches",
      "US-wide remote legal intake agent network",
    ],
    industries: "Personal injury, mass tort, SSDI, consumer class actions, debt relief",
    strengths: "Fastest ramp for mass tort surges, pre-vetted US intake specialists, flexible deployment for media-driven spikes.",
    weaknesses: "Staffing-first model — less vertically integrated for fully-managed law firm call center outsourcing programs.",
    pricing: "Staffing markup on direct agent cost",
    clients: "PI firms, mass tort marketing agencies, lead-gen aggregators",
    highlight: "Fastest American legal intake staffing — trained US-based intake specialists deployed in days to absorb mass tort and TV-media surges.",
  },
  {
    rank: 6,
    name: "B2B Appointment Setting",
    hq: "United States",
    founded: "2002",
    website: "https://www.b2bappointmentsetting.com/",
    bestFor: "US-based B2B legal services lead generation for corporate and small-firm practices",
    description:
      "B2B Appointment Setting provides cost-effective, American-based sales outsourcing for law firms looking to grow their B2B pipeline — commercial litigation, employment defense, HR counsel, and small-business legal services. Their US-based agents conduct targeted outreach to American decision-makers, performing attorney lead qualification and booking meetings that convert into engagements. The company focuses specifically on the American market and understands the nuances of selling legal services to US businesses.",
    services: [
      "American-based B2B legal services sales programs",
      "US-focused attorney lead qualification & targeting",
      "Corporate decision-maker outreach for law firms",
      "Onshore pipeline development for legal practices",
      "American market segmentation for legal marketing",
      "US-based reporting & analytics for law firm marketing",
    ],
    industries: "Commercial litigation, employment defense, business law, HR counsel, regulatory",
    strengths: "Affordable US-based B2B legal sales outsourcing, purpose-built for SMB law firms.",
    weaknesses: "B2B-only; not for high-volume consumer PI or mass tort intake call center programs.",
    pricing: "Contingency, hourly, or per-appointment",
    clients: "Corporate law firms, employment defense practices, HR counsel boutiques",
    highlight: "Affordable American B2B legal services sales outsourcing purpose-built for SMB law firms targeting US corporate clients.",
  },
  {
    rank: 7,
    name: "Contact Center USA",
    hq: "United States",
    founded: "1992",
    website: "/contact",
    bestFor: "Patriotic US-only, 24/7 legal intake call center with HIPAA-compliant PI and mass tort workflows",
    description:
      "Contact Center USA is a proudly American legal intake call center company that has delivered 100% US-based law firm answering service and legal intake outsourcing for over 30 years. Every intake specialist is located in the United States, every call is answered domestically, and every conversation reflects the empathy and legal-marketing discipline that injured claimants and grieving families expect the moment they pick up the phone. Purpose-built for personal injury firms, mass tort marketing agencies, SSDI advocates, bankruptcy firms, family law practices, and criminal defense attorneys, Contact Center USA delivers true 24/7 live intake, bilingual Spanish intake, after hours legal intake and overflow coverage, case type screening, conflict checks, statute-of-limitations routing, e-sign retainer workflow, and direct integration with Litify, Clio, MyCase, Filevine, Salesforce Legal, PracticePanther, and CallRail. Every program is HIPAA-compliant, TCPA-trained, and backed by real-time speed-to-lead dashboards so partners can measure signed-retainer conversion minute by minute.",
    services: [
      "100% American workforce — no offshore legal intake agents",
      "24/7 US-based legal intake services & after hours legal intake",
      "Personal injury intake & mass tort intake call center",
      "Bilingual legal intake (English & Spanish)",
      "Onshore Litify / Clio / MyCase / Filevine integration + e-sign retainer",
      "HIPAA-compliant legal intake with patriotic US-only guarantee",
    ],
    industries: "Personal injury, mass tort, SSDI, workers' comp, bankruptcy, family law, criminal defense, immigration",
    strengths: "30+ years of US operations, true 24/7 live intake, HIPAA-compliant, bilingual Spanish intake, deep Litify/Clio/MyCase integrations, speed-to-lead under 60 seconds.",
    weaknesses: "Premium US pricing — offset by higher retainer conversion, signed-case volume, and reduced missed-lead leakage.",
    pricing: "Per-qualified-lead, per-intake, hourly ($24-$42 US), or blended outcome-based (per signed retainer)",
    clients: "National PI firms, mass tort marketing agencies, multi-state consumer law practices, SSDI advocates, regional bankruptcy and family law firms",
    highlight: "30+ years of 100% American legal intake — never offshored a single call, true 24/7 live intake coverage, and HIPAA-compliant PI and mass tort workflows built for law firm growth.",
  },
  {
    rank: 8,
    name: "Call Center Communications",
    hq: "United States",
    founded: "1988",
    website: "/contact",
    bestFor: "North American enterprise legal intake for AmLaw firms and national mass tort aggregators",
    description:
      "Call Center Communications operates large-scale American legal intake call center operations designed for AmLaw 200 firms, national mass tort aggregators, and enterprise lead-gen platforms that require significant domestic 24/7 intake capacity. Their US-based delivery centers handle millions of legal intake interactions annually with the reliability, security, HIPAA compliance, and performance standards that national legal marketing operations demand. The company maintains redundant American facilities for business continuity during mass-media campaign surges and offers dedicated intake teams that become true extensions of the firms' brands.",
    services: [
      "Enterprise-scale American legal intake CX",
      "Dedicated US-based legal intake specialist teams",
      "Domestic multi-site redundancy for mass tort media spikes",
      "Enterprise HIPAA / SOC 2 / PCI DSS compliance",
      "Onshore workforce analytics for attorney lead qualification",
      "US-based multilingual legal intake support",
    ],
    industries: "AmLaw 200 firms, national mass tort aggregators, enterprise legal marketing, national consumer law",
    strengths: "Enterprise scale, multi-site US redundancy, HIPAA + SOC 2, dedicated intake teams.",
    weaknesses: "Enterprise-style processes feel rigid for solo practitioners or small PI firms.",
    pricing: "Enterprise SOWs",
    clients: "AmLaw 200 firms, national mass tort marketing networks, enterprise legal lead-gen platforms",
    highlight: "Enterprise-grade American legal intake infrastructure with multi-site US redundancy and dedicated intake teams for AmLaw firms and national mass tort aggregators.",
  },
  {
    rank: 9,
    name: "Business Process Outsourcing",
    hq: "United States",
    founded: "2006",
    website: "/contact",
    bestFor: "American digital-first legal intake combining AI qualification with US intake specialists",
    description:
      "Business Process Outsourcing brings a digital-first approach to American legal intake, combining US-based intake specialists with AI-powered qualification bots to deliver modern, efficient law firm call center outsourcing. Their American team uses advanced analytics, legal chatbot integration, and predictive signal scoring to qualify PI, mass tort, and SSDI leads faster while maintaining the empathetic, human touch that claimants expect. The company is at the forefront of blending American intake workforce quality with cutting-edge legal-marketing CX technology like CallRail, Leads.ai, and integrated paid-media attribution.",
    services: [
      "AI-enhanced American legal intake qualification",
      "US-based digital legal CX platform management",
      "Domestic legal chatbot & virtual assistant deployment",
      "American analytics for attorney lead qualification",
      "Onshore process automation for intake and retainer e-sign",
      "US-based voice-of-client programs for law firms",
    ],
    industries: "Personal injury, mass tort, SSDI, modern consumer law, legal-tech platforms",
    strengths: "Digital-first delivery, AI investment, US-based intake specialists for complex escalations.",
    weaknesses: "Less suited for traditional relationship-driven firms that avoid automation.",
    pricing: "Hourly, per-qualified-lead, or blended AI + agent",
    clients: "Modern PI firms, mass tort marketing agencies, legal-tech lead-gen platforms",
    highlight: "Digital-first American legal intake combining US-based intake specialists with AI-powered qualification and attribution analytics.",
  },
  {
    rank: 10,
    name: "B2B Appointment Setting (Enterprise)",
    hq: "United States",
    founded: "2002",
    website: "/contact",
    bestFor: "US enterprise legal process outsourcing and managed law firm intake operations",
    description:
      "The enterprise division of B2B Appointment Setting provides comprehensive American legal process outsourcing for large firms and national legal marketing networks seeking to consolidate their domestic intake, qualification, and back-office operations with a single trusted US-based partner. Their managed services model covers 24/7 legal intake services, attorney lead qualification, back-office case processing, and data management — all delivered by American professionals from secure onshore facilities with enterprise-grade technology infrastructure.",
    services: [
      "American managed legal intake services",
      "US-based enterprise law firm process consulting",
      "Domestic intake operations transformation programs",
      "Onshore legal back-office consolidation",
      "American program management & governance for law firms",
      "US enterprise technology integration (Litify, Salesforce Legal)",
    ],
    industries: "AmLaw firms, national legal marketing networks, enterprise mass tort, large consumer law practices",
    strengths: "Enterprise legal BPO depth, consulting + managed intake operations.",
    weaknesses: "Enterprise-focused; not for solo practitioners or small PI firms.",
    pricing: "Enterprise SOWs, outcome-based blends (per signed retainer)",
    clients: "AmLaw firms, national legal marketing networks, enterprise mass tort aggregators",
    highlight: "Enterprise American legal BPO combining consulting expertise with managed onshore legal intake and attorney lead qualification operations.",
  },
];

export default function Top10LegalIntakeContent() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy pt-40 pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <Link href="/blog" className="mb-6 inline-flex items-center gap-2 text-sm text-white/50 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <div className="mb-6" />
          <span className="inline-block rounded-full bg-red px-3 py-1 text-xs font-semibold text-white mb-5">Industry Rankings</span>
          <h1 className="max-w-4xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Top 10 Legal Intake Call Center Companies in USA (2026)
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> April 21, 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 18 min read</span>
          </div>
          <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl">
            <Image src="/images/cc-agent-headset.jpg" alt="Top Legal Intake Call Center Companies in the USA 2026" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* CONTENT + SIDEBAR */}
      <section className="py-16">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Intro */}
              <p className="text-lg leading-relaxed text-gray-700">
                <strong>Legal intake call center outsourcing</strong> has become one of the highest-ROI decisions an American law firm can make. Every unanswered call after a car crash, workplace injury, or mass tort TV spot is a signed retainer lost to the next firm on Google. The best <strong>law firm call center outsourcing</strong> partners deliver <strong>24/7 legal intake services</strong>, <strong>personal injury intake</strong>, <strong>mass tort intake call center</strong> programs, <strong>bilingual legal intake</strong>, and <strong>after hours legal intake</strong> — all backed by HIPAA compliance, TCPA discipline, and native integration with Litify, Clio, MyCase, Filevine, and Salesforce Legal. For full inbound coverage, see our <Link href="/solutions/inbound-call-center-services" className="text-red font-semibold hover:underline">inbound call center services</Link>.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                In this 2026 guide, we rank the <strong>top 10 American legal intake call center companies</strong>, evaluated on speed-to-lead, attorney lead qualification quality, 24/7 coverage, bilingual Spanish intake, HIPAA-compliant legal intake workflows, case type screening accuracy, conflict checks, and signed-retainer conversion. Whether you run a <strong>personal injury firm</strong>, a <strong>mass tort marketing agency</strong>, an <strong>SSDI</strong> or <strong>bankruptcy</strong> practice, or a <strong>family law</strong> or <strong>criminal defense</strong> firm, this list will help you find the right US-based legal answering service partner.
              </p>

              {/* Key takeaways box */}
              <div className="mt-8 rounded-2xl bg-gray-50 border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-navy">Key Takeaways</h3>
                <ul className="mt-3 space-y-2">
                  {[
                    "Top American legal intake call centers compete on speed-to-lead (under 60 seconds) and signed-retainer conversion — not just call pickup",
                    "True 24/7 legal intake services and after hours legal intake are now table stakes — most PI and mass tort leads call between 6pm-8am",
                    "Bilingual legal intake (English & Spanish) is non-negotiable for PI, immigration, and mass tort firms in 2026",
                    "HIPAA-compliant legal intake workflows with Litify, Clio, MyCase, and Filevine integration are now standard at every top provider",
                    "Outcome-based pricing (per signed retainer, per qualified lead) is rising fast over hourly at top American legal intake providers",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="my-10 overflow-hidden rounded-2xl">
                <Image src="/images/cc-discussion.jpg" alt="Legal intake specialist handling a personal injury call in the USA" width={800} height={450} className="w-full object-cover" />
              </div>

              {/* How We Ranked */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">How We Ranked the Top Legal Intake Call Center Companies</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                We evaluated each provider using a legal-intake-specific methodology because generic BPO rankings do not capture what matters in <strong>law firm call center outsourcing</strong> and <strong>attorney lead qualification</strong>:
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "Speed-to-lead — percentage of inbound leads answered in under 60 seconds",
                  "24/7 coverage — true round-the-clock US-based staffing, not routed voicemail",
                  "Case type screening accuracy — PI, mass tort, SSDI, bankruptcy, family law, criminal defense",
                  "Conflict checks & statute-of-limitations routing built into the intake workflow",
                  "Litify / Clio / MyCase / Filevine / Salesforce Legal integration depth",
                  "Bilingual legal intake (English & Spanish) availability at scale",
                  "HIPAA-compliant legal intake + TCPA compliance for outbound follow-up",
                  "Signed-retainer conversion rate and e-sign retainer workflow quality",
                  "Pricing flexibility — hourly, per-intake, per-qualified-lead, or per-signed-retainer",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Company Rankings */}
              <h2 className="mt-16 text-2xl font-bold text-navy sm:text-3xl">The Top 10 Legal Intake Call Center Companies in the USA (2026)</h2>

              {companies.map((company, i) => (
                <motion.div
                  key={company.rank}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className={`mt-10 rounded-2xl border ${company.rank === 7 ? "border-red/30 bg-red/[0.02]" : "border-gray-200"} p-8`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${company.rank === 7 ? "bg-red text-white" : i < 3 ? "bg-navy text-white" : "bg-gray-100 text-navy"} text-lg font-bold`}>
                      #{company.rank}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-navy sm:text-2xl">{company.name}</h3>
                      <p className="mt-1 text-sm text-gray-600">
                        <strong>Headquarters:</strong> {company.hq} &nbsp;|&nbsp;
                        <strong>Founded:</strong> {company.founded} &nbsp;|&nbsp;
                        <strong>Best For:</strong> {company.bestFor}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-700 leading-relaxed">{company.description}</p>

                  <div className="mt-6">
                    <h4 className="text-sm font-bold text-navy uppercase tracking-wide">Services:</h4>
                    <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {company.services.map((cap, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />
                          <span className="text-sm text-gray-700">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 text-sm text-gray-600">
                    <strong>Industries Served:</strong> {company.industries}
                  </div>

                  <div className="mt-3 text-sm text-gray-600">
                    <strong>Notable Clients:</strong> {company.clients}
                  </div>

                  <div className="mt-3 text-sm text-gray-600">
                    <strong>Typical Pricing:</strong> {company.pricing}
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="rounded-xl bg-green-50 border border-green-100 p-4 text-sm">
                      <strong className="text-navy">Strengths:</strong>{" "}
                      <span className="text-gray-700">{company.strengths}</span>
                    </div>
                    <div className="rounded-xl bg-red/[0.04] border border-red/20 p-4 text-sm">
                      <strong className="text-navy">Weaknesses:</strong>{" "}
                      <span className="text-gray-700">{company.weaknesses}</span>
                    </div>
                  </div>

                  <div className="mt-4 rounded-xl bg-gray-50 p-4 text-sm">
                    <strong className="text-navy">Why They Stand Out:</strong>{" "}
                    <span className="text-gray-700">{company.highlight}</span>
                  </div>

                  {company.website.startsWith("/") ? (
                    <Link
                      href={company.website}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-red hover:underline"
                    >
                      Visit Website <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  ) : (
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-red hover:underline"
                    >
                      Visit Website <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </motion.div>
              ))}

              {/* Mid-article image */}
              <div className="my-10 overflow-hidden rounded-2xl">
                <Image src="/images/cc-team-collab.jpg" alt="Legal intake team collaborating on personal injury and mass tort qualification" width={800} height={450} className="w-full object-cover" />
              </div>

              {/* What to Look For */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">What to Look For in a Legal Intake Call Center Partner</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Legal intake has unique requirements that generic answering services cannot meet. Use this buyer checklist when evaluating <strong>American legal intake call center companies</strong> and <strong>legal intake outsourcing</strong> providers:
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "True 24/7 legal intake services with US-based specialists, not routed voicemail or offshore overflow",
                  "Speed-to-lead under 60 seconds with real-time dashboards for partners and marketing teams",
                  "Case type screening for PI, mass tort, SSDI, bankruptcy, family law, and criminal defense",
                  "Built-in conflict checks and statute-of-limitations routing",
                  "HIPAA-compliant legal intake workflows for medical records and PHI handling",
                  "Native Litify, Clio, MyCase, Filevine, and Salesforce Legal integration",
                  "Bilingual legal intake (English & Spanish) at scale, not occasional translators",
                  "After hours legal intake, weekend, and holiday coverage with the same specialists",
                  "E-sign retainer workflow (DocuSign, Filevine Sign, Adobe Sign) integrated into the intake call",
                  "TCPA-compliant outbound chase for unsigned leads and media-spike campaigns",
                  "References from PI, mass tort, or consumer law firms similar to yours",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-gray-700 leading-relaxed">
                For full-stack intake coverage, pair your legal intake program with <Link href="/solutions/inbound-call-center-services" className="text-red font-semibold hover:underline">inbound call center services</Link>, <Link href="/services/live-chat-outsourcing" className="text-red font-semibold hover:underline">live chat outsourcing</Link>, and <Link href="/services/omnichannel-contact-center-solutions" className="text-red font-semibold hover:underline">omnichannel contact center solutions</Link>.
              </p>

              {/* Trends */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Legal Intake Trends for 2026</h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { title: "AI-First Qualification with Human Closing", desc: "Top American legal intake call centers now route initial case type screening and conflict checks through AI, escalating to US-based intake specialists for empathy, close, and signed retainer — cutting cost-per-qualified-lead by 35-50% while preserving conversion." },
                  { title: "Per-Signed-Retainer Pricing Goes Mainstream", desc: "Leading providers now offer outcome-based pricing tied to signed retainers instead of hourly billing — aligning incentives between PI firms, mass tort agencies, and their legal intake outsourcing partners." },
                  { title: "Bilingual Spanish Intake as Revenue Driver", desc: "Firms report 20-40% lift in signed PI and mass tort cases when they add bilingual legal intake in Spanish at scale. Top US providers now staff native Spanish-speaking specialists alongside English counterparts 24/7." },
                  { title: "Speed-to-Lead Under 60 Seconds", desc: "The best American legal answering service providers now guarantee first-ring pickup under 60 seconds, 24/7 — because PI and mass tort claimants call three firms in the first ten minutes, and the first to answer usually signs the retainer." },
                ].map((trend, i) => (
                  <div key={i} className="rounded-xl border border-gray-100 bg-white p-5">
                    <h4 className="font-bold text-navy">{trend.title}</h4>
                    <p className="mt-2 text-sm text-gray-700">{trend.desc}</p>
                  </div>
                ))}
              </div>

              {/* Conclusion */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Conclusion</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                The <strong>American legal intake call center industry</strong> is being reshaped by AI qualification, bilingual Spanish intake expectations, and the ruthless math of speed-to-lead. Personal injury firms, mass tort marketing agencies, SSDI advocates, and consumer law practices win when they partner with US-based legal intake outsourcers that deliver true <strong>24/7 legal intake services</strong>, HIPAA-compliant workflows, native Litify/Clio/MyCase integration, and brand-aligned empathy at mid-market-friendly prices.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Global Empire Corporation tops our 2026 ranking with its full-service American legal intake practice, and <Link href="/" className="text-red font-semibold hover:underline">Contact Center USA</Link> (#7) remains the patriotic US-only partner of choice — combining <strong>30+ years of US-based legal intake operations</strong>, true 24/7 live intake, HIPAA compliance, bilingual Spanish intake, deep Litify / Clio / MyCase / Filevine integration, and flexible per-signed-retainer pricing. Whether you need <Link href="/solutions/inbound-call-center-services" className="text-red font-semibold hover:underline">24/7 inbound legal intake</Link>, <Link href="/services/live-chat-outsourcing" className="text-red font-semibold hover:underline">live chat outsourcing</Link> for law firm websites, or <Link href="/services/omnichannel-contact-center-solutions" className="text-red font-semibold hover:underline">omnichannel contact center solutions</Link>, Contact Center USA is built for the law firms that win on signed-retainer conversion.
              </p>

              {/* CTA */}
              <div className="mt-12 rounded-2xl bg-navy p-8 text-center">
                <h3 className="text-2xl font-bold text-white">Ready to Outsource Your Legal Intake?</h3>
                <p className="mx-auto mt-3 max-w-lg text-white/60">
                  Contact Center USA delivers 100% US-based, HIPAA-compliant legal intake with true 24/7 coverage, bilingual Spanish intake, and native Litify, Clio, MyCase, and Filevine integration. Get a free law firm answering service quote today.
                </p>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white hover:bg-red-dark">
                  Get a Free Legal Intake Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* FAQ */}
              <h2 className="mt-16 text-2xl font-bold text-navy sm:text-3xl">Frequently Asked Questions</h2>

              {[
                { q: "How much does legal intake call center outsourcing cost?", a: "US-based legal intake call center outsourcing typically costs $24-$42 per agent-hour for voice, $45-$125 per qualified lead, or custom per-signed-retainer pricing for PI and mass tort programs. Law firm answering service plans for smaller firms often run $250-$1,500/month for after hours legal intake and overflow coverage, while dedicated 24/7 intake teams for national PI firms and mass tort marketing agencies usually price on per-qualified-lead or per-signed-retainer outcomes. Offshore pricing is lower but signed-retainer conversion and HIPAA-compliant legal intake quality is typically worse." },
                { q: "What is personal injury intake and why does it need a specialized call center?", a: "Personal injury intake is the process of screening inbound callers who have been in accidents, evaluating case viability, performing conflict checks, confirming statute-of-limitations eligibility, capturing medical-treatment details, and securing a signed retainer — all during the first call while the claimant is still emotional and comparing firms. A specialized legal intake call center staffs trained US-based intake specialists who handle empathy, case type screening, and personal injury lead qualification at speed, instead of a generic receptionist who simply takes a message. Because PI claimants call 2-3 firms in the first ten minutes, speed-to-lead and 24/7 live intake drive the entire economics of a PI practice." },
                { q: "How do mass tort intake call centers handle media spikes?", a: "Mass tort intake call center providers pre-train surge-pool intake specialists, build elastic scaling into their contracts (usually 2-4x baseline), and combine US-based human intake with AI-powered qualification bots to absorb TV-media and paid-digital spikes without degrading signed-retainer conversion. The best American providers guarantee no hidden surge surcharges, deliver real-time dashboards during launch day, and run TCPA-compliant outbound chase on any unsigned lead within minutes of the initial call." },
                { q: "Is true 24/7 legal intake really necessary for law firms?", a: "Yes. Research consistently shows that more than half of PI, mass tort, SSDI, and family law inbound leads arrive outside standard business hours — evenings, weekends, and holidays. Firms that rely on voicemail or offshore overflow for after hours legal intake lose the majority of those leads to competitors who answer live. True 24/7 legal intake services with US-based specialists is now the baseline expectation for any serious PI or consumer law marketing operation." },
                { q: "Do legal intake call centers offer bilingual Spanish intake?", a: "Yes — bilingual legal intake (English & Spanish) is now standard at every top American legal intake call center, including Contact Center USA. Spanish-speaking intake specialists staff 24/7 alongside their English counterparts, and firms that add bilingual legal intake at scale typically see 20-40% lift in signed PI and mass tort cases, especially in California, Texas, Florida, Arizona, Nevada, and New York markets." },
                { q: "Which legal intake call center integrates best with Litify, Clio, and MyCase?", a: "Contact Center USA (#7) offers native integration with Litify, Clio, MyCase, Filevine, Salesforce Legal, PracticePanther, and CallRail — letting US-based intake specialists push qualified PI, mass tort, SSDI, bankruptcy, family law, and criminal defense leads directly into your case management system with full call recording, transcripts, and e-sign retainer workflow. Global Empire Corporation (#1) and Customer Communications Corp (#4) also offer strong integrations for dedicated-team law firm call center outsourcing engagements." },
              ].map((faq, i) => (
                <div key={i} className="mt-6 border-b border-gray-100 pb-6">
                  <h3 className="text-lg font-bold text-navy">{faq.q}</h3>
                  <p className="mt-2 text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-28 space-y-6">
                <HeroContactForm />

                {/* Related articles */}
                <div className="rounded-2xl border border-gray-100 bg-white p-6">
                  <h4 className="font-bold text-navy">Related Articles</h4>
                  <ul className="mt-4 space-y-3">
                    {[
                      { title: "Top 10 Customer Service Outsourcing Companies", href: "/blog/top-10-customer-service-outsourcing-companies-usa" },
                      { title: "Top 10 E-commerce Call Center Companies", href: "/blog/top-10-ecommerce-call-center-companies-usa" },
                      { title: "Top 10 Financial Services Call Center Companies", href: "/blog/top-10-financial-services-call-center-companies-usa" },
                      { title: "Top 10 Debt Collection BPO Companies", href: "/blog/top-10-debt-collection-bpo-companies-usa" },
                    ].map((article, i) => (
                      <li key={i}>
                        <Link href={article.href} className="text-sm text-gray-700 hover:text-red transition-colors">
                          {article.title} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
