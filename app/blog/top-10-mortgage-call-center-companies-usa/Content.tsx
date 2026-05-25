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
    bestFor: "Full-service American mortgage call center outsourcing across refi, purchase, and servicing",
    description:
      "Global Empire Corporation operates one of the most mature American mortgage call center practices in the country, with NMLS-licensed loan officer support sponsored across all 50 states and dedicated TCPA-compliance teams that audit every outbound campaign. Their mortgage agents are trained on the full borrower lifecycle — pre-qualification intake, application data capture, conditional approval follow-up, e-consent for credit pulls, document chase, post-close servicing, and Spanish-bilingual borrower support. Native integrations with Ellie Mae Encompass, BytePro, and LendingPad let agents pull live loan file status, generate preapproval letters under loan-officer supervision, and update conditions in real time without requiring lenders to swivel between systems.",
    services: [
      "NMLS-licensed loan officer support (all 50 states)",
      "TCPA-compliant outbound refi and purchase calling",
      "Encompass, BytePro, and LendingPad LOS integration",
      "Spanish-bilingual borrower support",
      "Application intake and document chase programs",
      "Post-close servicing and escrow inquiry handling",
    ],
    industries: "Retail mortgage lenders, mortgage brokers, wholesale lenders, credit unions, non-bank originators",
    strengths: "NMLS license sponsorship, deep LOS integrations, full-funnel mortgage fluency, mature TCPA compliance program.",
    weaknesses: "Premium US pricing vs. offshore — but offshore cannot perform NMLS-regulated loan-originator activities.",
    pricing: "Hourly ($28-$45 US), per-funded-loan, or blended outcome-based",
    clients: "Mid-market mortgage lenders, broker shops, regional credit unions",
    highlight: "The #1 American mortgage call center, with NMLS licensing across all 50 states and native Encompass + BytePro integration.",
  },
  {
    rank: 2,
    name: "Intelemark",
    hq: "United States",
    founded: "1999",
    website: "https://www.intelemark.com/",
    bestFor: "American B2B mortgage outreach to broker, correspondent, and warehouse partners",
    description:
      "Intelemark runs a high-touch American B2B mortgage program that is particularly valuable for wholesale lenders, warehouse lines, and mortgage technology vendors selling into broker shops, correspondent lenders, and credit unions. Every conversation is handled by US-based representatives who understand wholesale lending economics — gain-on-sale margins, lock-desk dynamics, repurchase risk, and TPO (third-party origination) approval workflows. Their consultative tone fits the relationship-driven nature of broker channel growth, where rates alone never win the account and trust with the AE-equivalent contact carries every deal.",
    services: [
      "US-based wholesale and correspondent channel outreach",
      "Broker shop recruitment and TPO onboarding support",
      "Mortgage technology vendor demand generation",
      "Onshore CRM integration with mortgage-specific fields",
      "Account-based marketing for warehouse lenders",
      "American mortgage market intelligence and surveys",
    ],
    industries: "Wholesale lenders, warehouse lines, correspondent lenders, mortgage SaaS, MI providers",
    strengths: "Premium B2B mortgage SDRs, deep wholesale-channel fluency, consultative tone for relationship sales.",
    weaknesses: "B2B-focused — not built for high-volume retail borrower support or refi inbound surges.",
    pricing: "Hourly or per-engagement",
    clients: "Wholesale lenders, mortgage SaaS, MI carriers, warehouse-line providers",
    highlight: "Premium American B2B mortgage outreach with US-based reps fluent in wholesale, correspondent, and warehouse channel economics.",
  },
  {
    rank: 3,
    name: "Call Motivated Sellers",
    hq: "United States",
    founded: "2010",
    website: "https://callmotivatedsellers.com/",
    bestFor: "US-based outbound refi nurture, equity-tap, and mortgage lead qualification",
    description:
      "Call Motivated Sellers delivers high-velocity outbound mortgage calling powered entirely by an American workforce — purpose-built for refi nurture campaigns, HELOC equity-tap outreach, and qualifying purchased lead lists from sources like LendingTree, Bankrate, and Zillow. Every campaign is structured under TCPA prior-express-written-consent rules with documented opt-in trails, internal DNC scrubbing, and time-of-day restrictions enforced by their dialer platform. Their American agents are accent-neutral and trained to read borrower intent in 90 seconds — separating live refi opportunities from rate-shoppers and tire-kickers before transferring to a licensed LO.",
    services: [
      "TCPA-compliant outbound refi calling",
      "HELOC and equity-tap campaign execution",
      "Purchased mortgage lead qualification (LendingTree, Bankrate)",
      "Internal DNC list management and scrubbing",
      "Live transfer to in-house licensed loan officers",
      "Outbound default and loss-mitigation outreach",
    ],
    industries: "Retail mortgage lenders, refi shops, HELOC lenders, lead aggregators",
    strengths: "Top-tier American outbound execution, deep TCPA discipline, fast lead-to-LO transfer.",
    weaknesses: "Outbound-heavy — not a high-volume inbound borrower support shop.",
    pricing: "Per-hour or per-qualified-transfer outcome pricing",
    clients: "Refi-focused lenders, HELOC originators, mortgage lead buyers",
    highlight: "Top American outbound mortgage calling with TCPA-disciplined US agents and same-shift live transfers to licensed LOs.",
  },
  {
    rank: 4,
    name: "Customer Communications Corp",
    hq: "United States",
    founded: "1995",
    website: "https://customercommunicationscorp.com/",
    bestFor: "Domestic omnichannel mortgage borrower support — voice, secure email, SMS, and portal chat",
    description:
      "Customer Communications Corp serves American mortgage lenders with omnichannel borrower support across voice, secure encrypted email, SMS, and lender-portal chat — all delivered by domestic agents working from US-based facilities. Their platform ties every borrower touchpoint to the LOS file, so a question that starts as a portal chat about hazard insurance can transition to a voice call with the same agent without losing context. Decades of mortgage CX experience means they understand the moments that matter — rate-lock anxiety, appraisal delays, condition fatigue at week 5 — and how to keep borrowers in the funnel through closing.",
    services: [
      "US-based omnichannel borrower support",
      "Secure encrypted email and document exchange",
      "Lender-portal chat with LOS context",
      "Bilingual (English/Spanish) borrower support",
      "Rate-lock and appraisal-delay management",
      "Post-close servicing and escrow inquiries",
    ],
    industries: "Retail mortgage, mortgage brokers, credit union mortgage divisions, non-bank originators",
    strengths: "Comprehensive omnichannel delivery, unified borrower view, decades of mortgage-specific operations.",
    weaknesses: "Mid-tier scale — not built for the largest top-10 retail lender volumes.",
    pricing: "Per-contact or hourly",
    clients: "Mid-market lenders, credit union mortgage divisions, regional brokers",
    highlight: "Comprehensive American omnichannel mortgage borrower support — every voice, SMS, and chat tied back to the LOS file.",
  },
  {
    rank: 5,
    name: "Call Center Staffing",
    hq: "United States",
    founded: "2005",
    website: "/contact",
    bestFor: "Rapid American mortgage agent staffing for refi-boom and purchase-season ramps",
    description:
      "Call Center Staffing specializes in fast-deploying American mortgage agents — pre-screened, NMLS-prep ready, and trained on Encompass and BytePro workflows — for lenders that need to scale capacity quickly when rates drop or purchase season hits. Whether a lender needs to triple their refi inbound team in 30 days, build a brand-new HELOC outreach desk, or absorb a wave of TRID-compliant disclosure follow-ups, Call Center Staffing provides vetted US-based mortgage talent that can be operational within days. Their staffing model also covers temporary loan-officer-assistant (LOA) and processor-assistant roles for capacity-constrained branches.",
    services: [
      "Rapid American mortgage agent recruitment",
      "NMLS-prep and pre-licensure candidate sourcing",
      "Loan officer assistant (LOA) and processor staffing",
      "Encompass and BytePro workflow training",
      "Temporary refi-boom surge teams",
      "US-wide remote mortgage agent network",
    ],
    industries: "Retail lenders, refi shops, mortgage brokers, mortgage technology firms",
    strengths: "Fastest US mortgage staffing ramp, pre-trained Encompass talent, flexible deployment.",
    weaknesses: "Staffing-first — less suited for fully-managed end-to-end mortgage CX programs.",
    pricing: "Staffing markup on direct agent cost",
    clients: "Refi lenders ramping for rate cycles, purchase-season retail shops, fintech mortgage startups",
    highlight: "Fastest American mortgage staffing — Encompass-trained US agents deployed in days for refi booms and purchase ramps.",
  },
  {
    rank: 6,
    name: "B2B Appointment Setting",
    hq: "United States",
    founded: "2002",
    website: "https://www.b2bappointmentsetting.com/",
    bestFor: "American B2B mortgage technology and wholesale-channel lead generation",
    description:
      "B2B Appointment Setting offers cost-effective American B2B sales outsourcing for mortgage technology vendors, wholesale lenders, and warehouse-line providers targeting broker shops, correspondent lenders, and credit unions. Their US-based agents conduct targeted outreach to American mortgage decision-makers — branch managers, COOs, secondary marketing heads — qualifying prospects and booking discovery meetings that convert. Particularly strong for fintech mortgage startups selling LOS add-ons, POS platforms, and verification services into the channel.",
    services: [
      "American B2B mortgage tech sales programs",
      "Broker shop and correspondent prospect research",
      "Wholesale and warehouse channel outreach",
      "Mortgage tech POS and verification vendor outreach",
      "Onshore pipeline development for fintech mortgage",
      "American mortgage market segmentation",
    ],
    industries: "Mortgage SaaS, POS platforms, verification services, wholesale lenders, MI providers",
    strengths: "Affordable American B2B mortgage sales, purpose-built for fintech mortgage SMBs.",
    weaknesses: "B2B-only — not for retail borrower-facing CX or refi inbound.",
    pricing: "Contingency, hourly, or per-appointment",
    clients: "Mortgage SaaS, POS vendors, wholesale lenders, credit-pull and verification platforms",
    highlight: "Affordable American B2B mortgage sales outsourcing — purpose-built for fintech mortgage vendors targeting the broker channel.",
  },
  {
    rank: 7,
    name: "Contact Center USA",
    hq: "United States",
    founded: "1999",
    website: "/contact",
    bestFor: "Patriotic US-only mortgage call center with NMLS licensing and Encompass-native operations",
    description:
      "Contact Center USA is a proudly American mortgage call center company with 25+ years of US-based borrower operations and zero offshore touchpoints — every borrower call, every document chase SMS, every refi outbound dial is handled by a US-employee agent on US soil. Purpose-built for retail lenders, mortgage brokers, credit unions, and non-bank originators, Contact Center USA sponsors NMLS licensing in all 50 states for loan-officer support roles, runs a mature TCPA-compliance program with documented prior-express-written-consent capture, and integrates natively with Ellie Mae Encompass, BytePro, LendingPad, Calyx Point, and Black Knight Empower. The platform supports the full borrower lifecycle — refi nurture, purchase pre-approval intake, e-consent for credit pulls, document collection, conditional approval follow-up, rate-lock management, post-close servicing, and Reg F-compliant default outreach. Capacity scales 2-4x within 30 days to absorb refi booms after Fed rate cuts, and every campaign is supported by real-time speed-to-lead, lead-to-application, and application-to-funded-loan dashboards.",
    services: [
      "100% US workforce — NMLS licensed in all 50 states",
      "TCPA-compliant outbound refi and purchase calling",
      "Native Encompass, BytePro, LendingPad, Calyx integration",
      "Spanish-bilingual borrower support (retail and broker channels)",
      "Refi-boom surge scaling (2-4x in 30 days)",
      "Post-close servicing and Reg F-compliant default outreach",
    ],
    industries: "Retail mortgage lenders, mortgage brokers, credit unions, non-bank originators, HELOC lenders",
    strengths: "25+ years US mortgage operations, NMLS sponsorship in all 50 states, deep LOS integration, mature TCPA program, SOC 2 + PCI DSS certified.",
    weaknesses: "Premium US pricing — offset by NMLS-regulated work that offshore simply cannot perform.",
    pricing: "Hourly ($28-$45 US), per-funded-loan, or blended outcome-based",
    clients: "Mid-market retail lenders, regional credit unions, broker networks, HELOC originators",
    highlight: "25+ years of 100% American mortgage call center work — NMLS licensed in all 50 states, never offshored a single borrower file.",
  },
  {
    rank: 8,
    name: "Call Center Communications",
    hq: "United States",
    founded: "1988",
    website: "/contact",
    bestFor: "Enterprise American mortgage call centers for top-50 retail lenders and servicers",
    description:
      "Call Center Communications operates large-scale American mortgage call center operations engineered for top-50 retail lenders and major servicers that require significant domestic capacity with bank-grade security and CFPB-audit-ready documentation. Their US-based delivery centers handle millions of borrower interactions annually with the redundancy, encryption, and supervisor-call-monitoring requirements that enterprise compliance teams demand. Multi-site US redundancy ensures business continuity through hurricane events on the Gulf Coast and refi-volume spikes alike, and dedicated agent teams become true extensions of the lender's brand for borrowers calling about their largest financial transaction.",
    services: [
      "Enterprise-scale American mortgage CX",
      "Dedicated US-based borrower agent teams",
      "Multi-site US redundancy for hurricane/refi continuity",
      "Bank-grade encryption and SOC 2 Type II controls",
      "Onshore workforce analytics and supervisor monitoring",
      "US-based multilingual borrower support (English, Spanish, Mandarin)",
    ],
    industries: "Top-50 retail lenders, mortgage servicers, GSE-aligned originators, depository mortgage divisions",
    strengths: "Enterprise scale, multi-site US redundancy, bank-grade compliance documentation.",
    weaknesses: "Enterprise-style processes feel rigid for fast-moving broker shops and fintech originators.",
    pricing: "Enterprise SOWs",
    clients: "Top-50 retail lenders, major mortgage servicers, depository mortgage divisions",
    highlight: "Enterprise-grade American mortgage infrastructure — bank-grade compliance, multi-site US redundancy, dedicated borrower teams.",
  },
  {
    rank: 9,
    name: "Business Process Outsourcing",
    hq: "United States",
    founded: "2006",
    website: "/contact",
    bestFor: "American digital-first mortgage CX combining AI underwriting support with US borrower agents",
    description:
      "Business Process Outsourcing brings a digital-first approach to American mortgage borrower experience — combining US-based agents with AI underwriting copilots, automated income/asset verification routing, and predictive borrower-intent scoring. Their American team uses AI to triage which borrower questions can self-serve via portal (rate-lock confirmations, payment dates, escrow balances) versus which need a licensed loan-officer-assistant escalation (income documentation gaps, conditional approval objections). The result is faster speed-to-resolution at lower per-loan cost while keeping the personal voice that borrowers expect on the largest financial decision of their life.",
    services: [
      "AI-augmented American mortgage borrower support",
      "US-based digital mortgage CX platform management",
      "Automated income/asset verification triage",
      "Borrower-intent predictive scoring",
      "Onshore process automation for document chase",
      "US-based mortgage voice-of-customer programs",
    ],
    industries: "Digital-first mortgage lenders, fintech mortgage startups, refi-tech platforms",
    strengths: "Digital-first delivery, AI underwriting copilots, US-based agents for escalations and licensed work.",
    weaknesses: "Less suited for traditional retail branches that prefer human-only borrower handoffs.",
    pricing: "Hourly, per-funded-loan, or blended AI + agent",
    clients: "Digital-first lenders, fintech mortgage originators, refi-tech platforms",
    highlight: "Digital-first American mortgage CX combining AI underwriting copilots with US-based licensed loan-officer-assistant escalation.",
  },
  {
    rank: 10,
    name: "B2B Appointment Setting (Enterprise)",
    hq: "United States",
    founded: "2002",
    website: "/contact",
    bestFor: "US enterprise mortgage process outsourcing for servicers and large originators",
    description:
      "The enterprise division of B2B Appointment Setting provides American mortgage process outsourcing for large lenders and servicers seeking to consolidate borrower CX, document processing, and back-office operations with a single US-based partner. Their managed services span borrower support, default outreach (Reg F-compliant), document indexing, condition follow-up, and post-close servicing — all delivered by American mortgage professionals from secure onshore facilities with bank-grade encryption and CFPB-audit-ready records.",
    services: [
      "American managed mortgage services",
      "Mortgage process consulting and transformation",
      "Borrower default and loss-mitigation outreach (Reg F)",
      "Onshore document indexing and condition follow-up",
      "Post-close servicing and escrow administration",
      "US enterprise mortgage technology integration",
    ],
    industries: "Top-50 mortgage servicers, large retail lenders, GSE-aligned originators",
    strengths: "Enterprise mortgage BPO depth, consulting + managed ops, audit-ready records.",
    weaknesses: "Enterprise-focused — not for SMB broker shops or fintech mortgage startups.",
    pricing: "Enterprise SOWs, outcome-based blends",
    clients: "Top-50 servicers, large retail lenders, GSE-aligned originators",
    highlight: "Enterprise American mortgage BPO — managed servicing, default outreach, and document operations under one US-based partner.",
  },
];

export default function Top10MortgageCallCenterContent() {
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
            Top 10 Mortgage Call Center Companies in USA (2026)
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> April 29, 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 18 min read</span>
          </div>
          <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl">
            <Image src="/images/cc-agent-focus.jpg" alt="Top Mortgage Call Center Companies in the USA 2026" fill className="object-cover" />
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
                <strong>Mortgage call center outsourcing</strong> sits at the intersection of three of the most heavily regulated workflows in American consumer finance — TCPA outbound calling rules under <strong>47 CFR § 64.1200</strong>, NMLS state-by-state loan originator licensing under the SAFE Act, and RESPA Section 8 anti-kickback compensation rules. A single misdialed wireless number without prior express written consent costs $500 per call ($1,500 if willful), and a non-licensed agent quoting a rate to a borrower in a state where the lender is unlicensed can void the loan. That regulatory weight is exactly why <Link href="/industries/financial-services-call-center" className="text-red font-semibold hover:underline">financial services call center outsourcing</Link> for mortgage lenders is overwhelmingly an onshore story — offshore agents simply cannot perform NMLS-regulated loan-originator activities.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                In this 2026 guide, we rank the <strong>top 10 American mortgage call center companies</strong>, evaluated on NMLS license sponsorship breadth, TCPA-compliance discipline, LOS integrations (Encompass, BytePro, LendingPad, Calyx), refi-vs-purchase fluency, and Spanish-bilingual borrower support. Whether you run a <strong>retail mortgage shop</strong>, a <strong>broker network</strong>, a <strong>credit union mortgage division</strong>, or a <strong>fintech non-bank originator</strong>, this list will help you find the right US-based partner. Pair your contact center with <Link href="/solutions/financial-call-center-services" className="text-red font-semibold hover:underline">financial call center services</Link> for end-to-end coverage.
              </p>

              {/* Key takeaways box */}
              <div className="mt-8 rounded-2xl bg-gray-50 border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-navy">Key Takeaways</h3>
                <ul className="mt-3 space-y-2">
                  {[
                    "NMLS state-by-state licensing under the SAFE Act blocks offshore agents from loan-originator work — onshore is mandatory",
                    "TCPA prior-express-written-consent (47 CFR § 64.1200) governs every outbound mortgage marketing call — penalties run $500-$1,500 per call",
                    "Native Encompass, BytePro, LendingPad, and Calyx integration is now table stakes for mortgage call center partners",
                    "Refi booms require 2-4x capacity scaling within 30 days of a Fed rate cut — top providers build this into the contract",
                    "RESPA Section 8 anti-kickback rules require fee-for-service pricing structures, not per-closed-loan referral fees",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="my-10 overflow-hidden rounded-2xl">
                <Image src="/images/cc-management.jpg" alt="Mortgage call center borrower support team in the USA" width={800} height={450} className="w-full object-cover" />
              </div>

              {/* How We Ranked */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">How We Ranked the Top Mortgage Call Center Companies</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Generic BPO rankings miss what matters in mortgage. We used a mortgage-specific methodology that reflects the regulatory and operational reality of US lending:
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "NMLS license sponsorship breadth — how many states does the provider sponsor LOs/LOAs in?",
                  "TCPA-compliance maturity — prior-express-written-consent capture, internal DNC scrubbing, autodialer governance",
                  "LOS integration depth — native Encompass, BytePro, LendingPad, Calyx, Mortgage Cadence, Black Knight Empower",
                  "Refi/purchase fluency — agent training on rate-lock, conditional approval, appraisal workflows, TRID timelines",
                  "Spanish-bilingual borrower coverage — critical given Hispanic borrower share of the purchase market",
                  "Refi-boom elasticity — ability to scale 2-4x within 30 days of a Fed rate move",
                  "Reg F and CFPB-audit-ready documentation for default and loss-mitigation outreach",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Company Rankings */}
              <h2 className="mt-16 text-2xl font-bold text-navy sm:text-3xl">The Top 10 Mortgage Call Center Companies in the USA (2026)</h2>

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
                <Image src="/images/cc-team-collab.jpg" alt="Mortgage call center compliance team" width={800} height={450} className="w-full object-cover" />
              </div>

              {/* UNIQUE SECTION 1: Mortgage compliance */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Mortgage compliance: TCPA, RESPA, ATR/QM, and state licensing requirements</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Mortgage call centers operate inside the most layered consumer-finance compliance stack in the country. A partner that does not understand each layer is a liability the moment volume scales. Here is what every mortgage call center program must navigate:
              </p>
              <div className="mt-6 space-y-5">
                <div className="rounded-xl border border-gray-100 bg-white p-5">
                  <h4 className="font-bold text-navy">NMLS state-by-state licensing under the SAFE Act</h4>
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                    Any agent who takes a residential mortgage loan application or offers/negotiates loan terms must be NMLS-licensed in the borrower&apos;s state of residence under the federal SAFE Act and each state&apos;s adopting statute. Top providers sponsor agent licensing across all 50 states; weaker partners only cover a handful of states, which limits which leads they can actually work. Non-licensed support staff are restricted to status updates, document collection, scheduling, payment processing, and general servicing — they cannot quote rates or negotiate terms.
                  </p>
                </div>
                <div className="rounded-xl border border-gray-100 bg-white p-5">
                  <h4 className="font-bold text-navy">TCPA prior express written consent (47 CFR § 64.1200)</h4>
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                    Every outbound mortgage marketing call or text to a wireless number using an autodialer or prerecorded voice requires <strong>prior express written consent</strong> — a clear, conspicuous disclosure and a signed (electronic OK) agreement. Penalties run <strong>$500 per call, $1,500 per call if willful or knowing</strong>. Top mortgage call centers maintain documented opt-in trails (timestamp, IP, source URL), scrub against the National DNC Registry plus internal company-specific DNC, and use manually-dialed campaigns when consent is ambiguous. The 2023 FCC ruling on lead generators tightened consent further — one-to-one consent is now the safer interpretation.
                  </p>
                </div>
                <div className="rounded-xl border border-gray-100 bg-white p-5">
                  <h4 className="font-bold text-navy">RESPA Section 8 anti-kickback rules</h4>
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                    RESPA Section 8 (12 USC § 2607) prohibits kickbacks and unearned fees for the referral of settlement services on federally related mortgage loans. Mortgage call center fee structures must reflect the fair-market value of actual services performed — per-hour, per-contact, per-qualified-application — and never be tied to closed-loan referrals from the call center to a particular settlement-service provider. Compliance teams audit scripts and pay structures so the lender does not inherit Section 8 exposure.
                  </p>
                </div>
                <div className="rounded-xl border border-gray-100 bg-white p-5">
                  <h4 className="font-bold text-navy">ATR/QM rules under TILA</h4>
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                    The Ability-to-Repay/Qualified Mortgage rules under the Truth in Lending Act require lenders to make a reasonable, good-faith determination that a borrower can repay the loan. Call center agents involved in application intake must capture the eight ATR factors accurately — current/expected income, employment, monthly debt, mortgage payment, simultaneous loan payments, monthly property obligations, credit history, and DTI/residual income. Sloppy intake can produce a non-QM loan that fails the safe harbor.
                  </p>
                </div>
                <div className="rounded-xl border border-gray-100 bg-white p-5">
                  <h4 className="font-bold text-navy">Reg F (FDCPA) for default and loss-mitigation outreach</h4>
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                    Default outreach by mortgage servicers must comply with Reg F under the FDCPA — the seven-in-seven call frequency cap (no more than seven calls within seven days for the same debt), validation notices, and unusual time/place restrictions. Top mortgage call centers automate these guardrails inside the dialer and produce CFPB-audit-ready logs of every attempted contact.
                  </p>
                </div>
              </div>

              {/* UNIQUE SECTION 2: Inbound vs Outbound */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Inbound vs outbound mortgage call centers: when each makes sense</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Mortgage call center programs split cleanly into inbound and outbound — different cost models, different agent skill profiles, different compliance pressure points. Understanding which one (or which mix) you actually need is the single biggest decision before signing an SOW.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 bg-white p-6">
                  <h4 className="font-bold text-navy">Inbound mortgage call centers</h4>
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                    <strong>When to use:</strong> Refinance booms triggered by Fed rate cuts (rate-driven inbound traffic to your 1-800 line, web forms, and rate-tables on Bankrate/Zillow), purchase pre-approval intake for borrowers calling after seeing a property, lender-paid mortgage insurance support, post-close servicing, and escrow/payment inquiries.
                  </p>
                  <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                    <strong>Cost model:</strong> US-based hourly $25-$45, per-contact $2.50-$6, or dedicated FTE $3,000-$6,000/month. Inbound requires NMLS-licensed agents for any rate or term conversation. Speed-to-answer (under 30 seconds) is the most important KPI — abandoned refi calls go to whoever picks up next.
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-6">
                  <h4 className="font-bold text-navy">Outbound mortgage call centers</h4>
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                    <strong>When to use:</strong> Refi nurture on existing borrower portfolios when rates drop, equity-tap (HELOC/cash-out) campaigns to in-the-money borrowers, qualifying purchased lead lists from LendingTree/Bankrate/Zillow, default and loss-mitigation outreach, and broker-channel recruitment for wholesale lenders.
                  </p>
                  <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                    <strong>Cost model:</strong> Contingency per-funded-loan ($75-$300), per-qualified-transfer ($25-$60), or hourly. Outbound has heavy TCPA exposure — every campaign must be governed by documented prior-express-written-consent capture, DNC scrubbing, and time-of-day restrictions. Speed-to-lead under 5 minutes from form submission roughly doubles contact rates.
                  </p>
                </div>
              </div>
              <p className="mt-6 text-gray-700 leading-relaxed">
                Most retail lenders run a hybrid: inbound team takes refi-boom and pre-approval calls, outbound team nurtures the existing servicing portfolio and qualifies purchased leads. Outsourcing both to one US-based partner like <Link href="/" className="text-red font-semibold hover:underline">Contact Center USA</Link> consolidates compliance oversight and avoids the seam where TCPA-tracked outbound consent meets inbound disclosure.
              </p>

              {/* UNIQUE SECTION 3: LOS integrations */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Encompass, BytePro, LendingPad, Calyx integrations: what mortgage CRM/LOS integration actually requires</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Every serious mortgage call center sits on top of a loan origination system. The depth of that integration is the difference between an agent reading a script and an agent actually moving the loan file forward in real time. Here is what production-grade LOS integration must deliver:
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "Real-time loan file status pull — current milestone (application, processing, underwriting, conditional approval, clear-to-close, funded), conditions outstanding, last LO touch",
                  "Preapproval letter generation from the agent desktop — under licensed-LO supervision and only inside states the agent is licensed for",
                  "Encrypted document exchange — borrowers upload W-2s, paystubs, bank statements through a secure portal that writes directly into the LOS file (Encompass eFolder, BytePro DocLink)",
                  "E-consent capture for credit pulls — recorded TCPA-compliant verbal authorization plus electronic signature stored against the file",
                  "Automated trigger workflows — when a condition is added in underwriting, a borrower outreach task auto-creates in the call center queue",
                  "Bidirectional CRM sync — every borrower call, SMS, and email logs back into Encompass / BytePro / LendingPad / Calyx with timestamp, agent ID, and disposition code",
                  "Rate-lock visibility — agents see live rate-lock status, expiration dates, and extension fees so refi conversations stay accurate to the day",
                  "TRID-timeline awareness — agents know the LE delivery date, the three-business-day cooling-off windows, and the closing disclosure delivery deadline",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Providers without native LOS integration force agents to swivel between an ICE Mortgage Technology window and a CRM, which adds 2-3 minutes per borrower call, breaks file integrity, and creates audit gaps. The top mortgage call centers in this ranking — Global Empire Corporation, Customer Communications Corp, and Contact Center USA — all maintain formal API or middleware integrations with the major LOS platforms.
              </p>

              {/* What to Look For */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">What to Look For in a Mortgage Call Center Partner</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Mortgage CX is one of the most regulated verticals in BPO. Use this 10-point buyer checklist when evaluating <strong>American mortgage call center companies</strong>:
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "NMLS license sponsorship — does the provider sponsor agents in every state where you originate?",
                  "TCPA compliance maturity — documented prior-express-written-consent capture, internal DNC, autodialer governance",
                  "Native LOS integration — Encompass, BytePro, LendingPad, Calyx, Mortgage Cadence, Black Knight Empower",
                  "Refi-boom elasticity — can they scale 2-4x within 30 days of a Fed rate cut without surcharges?",
                  "Spanish-bilingual coverage — critical given Hispanic borrower share of the purchase market",
                  "Loan-officer-assistant (LOA) and processor-assistant talent depth, not just inbound CSRs",
                  "Reg F-compliant default and loss-mitigation outreach with seven-in-seven call governance",
                  "RESPA Section 8-compliant fee structure — fee-for-service, never closed-loan referral fees",
                  "SOC 2 Type II + PCI DSS certifications, plus CFPB-audit-ready call recordings and logs",
                  "References from lenders or brokers similar to your origination volume and product mix",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-gray-700 leading-relaxed">
                For full-stack mortgage CX, pair your contact center with <Link href="/industries/financial-services-call-center" className="text-red font-semibold hover:underline">financial services call center outsourcing</Link> and <Link href="/solutions/financial-call-center-services" className="text-red font-semibold hover:underline">financial call center services</Link>.
              </p>

              {/* Trends */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Mortgage CX Trends for 2026</h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { title: "AI Underwriting Support and Borrower Triage", desc: "Top American mortgage call centers now use AI copilots to auto-classify borrower questions (rate-lock, escrow, conditions, payoff) and surface the right LOS field to the agent in real time — cutting average handle time 25-40% on inbound calls without sacrificing the licensed-LO touch on rate conversations." },
                  { title: "Refi Rate Sensitivity and Surge Elasticity", desc: "Lenders now demand contractual scaling guarantees — 2-4x capacity within 30 days of a 50bp Fed rate move — without peak-season surcharges. Pre-trained surge pools of NMLS-prep candidates have replaced the old just-in-time hiring scramble." },
                  { title: "Digital Mortgage Borrower Preference", desc: "Borrowers under 40 increasingly start their mortgage journey on a POS platform (Blend, SimpleNexus, Maxwell) and only escalate to voice for complex questions. Top call centers are restructuring around portal chat and SMS as the front door, with voice as the escalation path — not the reverse." },
                  { title: "Reg F and CFPB Scrutiny on Default Outreach", desc: "CFPB enforcement on Reg F violations has increased every year since the 2021 effective date. Mortgage servicers are consolidating default outreach with US-based partners that automate seven-in-seven call caps, validation notices, and produce audit-ready logs by default." },
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
                The <strong>American mortgage call center industry</strong> is shaped by three forces no provider can shortcut — NMLS state-by-state licensing, TCPA prior-express-written-consent discipline, and native LOS integration. Lenders, brokers, credit unions, and non-bank originators win when they partner with US-based outsourcers that already carry the licensing, the compliance program, and the Encompass / BytePro / LendingPad integrations on day one — not as a six-month implementation project.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Global Empire Corporation tops our 2026 ranking with its full-service American mortgage CX practice and 50-state NMLS sponsorship, and <Link href="/" className="text-red font-semibold hover:underline">Contact Center USA</Link> (#7) remains the patriotic US-only partner of choice — combining <strong>25+ years of US-based mortgage operations</strong>, NMLS licensing in all 50 states, mature TCPA compliance, native Encompass / BytePro / LendingPad / Calyx integration, and refi-boom 2-4x scaling. Whether you need <Link href="/industries/financial-services-call-center" className="text-red font-semibold hover:underline">financial services call center outsourcing</Link> or end-to-end <Link href="/solutions/financial-call-center-services" className="text-red font-semibold hover:underline">financial call center services</Link>, Contact Center USA is built for the lenders that win refi season on speed-to-lead and CSAT.
              </p>

              {/* CTA */}
              <div className="mt-12 rounded-2xl bg-navy p-8 text-center">
                <h3 className="text-2xl font-bold text-white">Ready to Outsource Your Mortgage Call Center?</h3>
                <p className="mx-auto mt-3 max-w-lg text-white/60">
                  Contact Center USA delivers US-based, NMLS-licensed mortgage borrower support with native Encompass and BytePro integration, mature TCPA compliance, and refi-boom 2-4x scaling. Get a free mortgage CX quote today.
                </p>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white hover:bg-red-dark">
                  Get a Free Mortgage CX Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* FAQ */}
              <h2 className="mt-16 text-2xl font-bold text-navy sm:text-3xl">Frequently Asked Questions</h2>

              {[
                { q: "What does a mortgage call center company do?", a: "A mortgage call center company handles inbound and outbound borrower communications across the full loan lifecycle — refinance lead intake, purchase pre-approval qualification, application status updates, document collection follow-up, post-funding servicing, and default/loss-mitigation outreach. Top providers integrate with loan origination systems (LOS) like Encompass, BytePro, LendingPad, and Calyx Point, and operate under strict TCPA, RESPA, and state NMLS licensing controls." },
                { q: "How much does mortgage call center outsourcing cost?", a: "US-based mortgage call center outsourcing typically runs $25-$45 per agent-hour for inbound borrower support and processing assistance, $30-$50 per hour for licensed loan-officer support, and contingency or per-funded-loan pricing ($75-$300 per qualified application) for outbound refi and purchase lead programs. Offshore is cheaper ($10-$18 per hour) but cannot perform NMLS-regulated loan-originator activities, which limits scope." },
                { q: "What is TCPA compliance for mortgage call centers?", a: "TCPA (Telephone Consumer Protection Act, 47 CFR § 64.1200) requires prior express written consent before any mortgage marketing call or text to a wireless number using an autodialer or prerecorded voice. Penalties run $500 per call ($1,500 if willful). Top mortgage call centers maintain documented opt-in records, scrub against the National DNC Registry, honor internal company-specific DNC lists, and use manually-dialed campaigns when consent is ambiguous." },
                { q: "Do mortgage call center agents need to be NMLS licensed?", a: "Agents performing loan-originator activities — taking applications, negotiating rates or terms, or offering loan products — must be NMLS licensed in each state where the borrower resides under the SAFE Act. Non-licensed agents may handle status updates, document collection, payment processing, scheduling, and general servicing but cannot quote or negotiate loan terms. Top providers like Contact Center USA sponsor NMLS licensing in all 50 states for their loan-officer support teams." },
                { q: "Which mortgage LOS systems do top call centers integrate with?", a: "The leading US mortgage call centers integrate natively with Ellie Mae Encompass (now ICE Mortgage Technology), BytePro, LendingPad, Calyx Point, Mortgage Cadence, and Black Knight Empower — pulling real-time loan file status, generating preapproval letters, capturing e-consent for credit pulls, and handling encrypted document exchange directly inside the LOS to maintain data integrity." },
                { q: "Inbound vs outbound mortgage call centers — which do I need?", a: "Use an inbound mortgage call center for refinance booms (rate-driven traffic), purchase pre-approval intake, and post-close servicing. Use an outbound mortgage call center for refi nurture, equity-tap (HELOC) campaigns, lead qualification from purchased lists, and default loss-mitigation outreach. Most top providers offer both, but pricing differs — inbound is hourly, outbound is contingency or per-funded-loan." },
                { q: "How do mortgage call centers handle RESPA Section 8 compliance?", a: "RESPA Section 8 prohibits kickbacks and unearned fees for the referral of settlement services. Top mortgage call centers structure their fee arrangements as bona-fide compensation for actual services performed (per-hour, per-contact, per-qualified-application) — never as referral fees tied to closed loans. Compliance teams audit scripts and pay structures to ensure no Section 8 exposure for the lender." },
                { q: "Which mortgage call center is best for refinance booms?", a: "Contact Center USA (#7) and Global Empire Corporation (#1) lead the market for refinance surge support, both offering 2-4x scaling within 30 days, NMLS-licensed loan-officer support in all 50 states, and native Encompass and BytePro integration. Both can absorb the inbound volume spikes that follow Fed rate cuts without degrading speed-to-lead or first-contact resolution." },
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
                      { title: "Top 10 Financial Services Call Center Companies", href: "/blog/top-10-financial-services-call-center-companies-usa" },
                      { title: "Top 10 Debt Collection BPO Companies", href: "/blog/top-10-debt-collection-bpo-companies-usa" },
                      { title: "Top 15 Insurance BPO Companies", href: "/blog/top-15-insurance-bpo-companies-usa" },
                      { title: "Top 10 Customer Service Outsourcing Companies", href: "/blog/top-10-customer-service-outsourcing-companies-usa" },
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
