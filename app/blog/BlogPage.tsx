"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";

const blogPosts = [
  {
    title: "Call Center Outsourcing Cost Per Hour in 2026 (Real Pricing by Country)",
    excerpt:
      "How much does call center outsourcing cost per hour in 2026? Real rates for US, nearshore, and offshore providers, by service type, seniority, and pricing model — with a full cost breakdown.",
    category: "Pricing Guide",
    readTime: "14 min read",
    image: "/images/hd-agents-working.jpg",
    href: "/blog/call-center-outsourcing-cost-per-hour-2026",
  },
  {
    title: "In-House vs Outsourced Call Center: True Cost Comparison (2026)",
    excerpt:
      "Should you build or outsource your call center in 2026? A line-by-line cost comparison of in-house vs outsourced operations — salaries, benefits, tech, facilities, and hidden overhead.",
    category: "Cost Comparison",
    readTime: "13 min read",
    image: "/images/cc-management.jpg",
    href: "/blog/in-house-vs-outsourced-call-center",
  },
  {
    title: "How to Write a Call Center RFP (Free Template + Checklist)",
    excerpt:
      "Write a call center RFP that gets apples-to-apples vendor proposals. Free 25-section RFP template, scoring rubric, and the exact questions top BPO buyers ask in 2026.",
    category: "Buyer's Toolkit",
    readTime: "15 min read",
    image: "/images/cc-team-plan.jpg",
    href: "/blog/call-center-rfp-template",
  },
  {
    title: "Teleperformance Alternatives: 7 Better Options for Mid-Market (2026)",
    excerpt:
      "Looking for a Teleperformance alternative in 2026? Compare 7 outsourcing partners that deliver better CX, flexible contracts, and lower cost — ranked for mid-market brands.",
    category: "Competitor Comparison",
    readTime: "12 min read",
    image: "/images/cc-team-huddle.jpg",
    href: "/blog/teleperformance-alternatives",
  },
  {
    title: "HIPAA-Compliant Call Center Services: Complete 2026 Guide",
    excerpt:
      "Everything healthcare leaders need to know about HIPAA-compliant call centers — BAA requirements, safeguards, vendor checklist, cost, and 2026 compliance trends.",
    category: "Healthcare Compliance",
    readTime: "16 min read",
    image: "/images/cc-agent-headset.jpg",
    href: "/blog/hipaa-compliant-call-center-services",
  },
  {
    title: "AI Call Center vs Human Agents: Cost, Quality & What to Outsource (2026)",
    excerpt:
      "Should you use AI call center agents, human agents, or both in 2026? Honest comparison of cost, CX quality, deflection rates, and exactly which calls to route where.",
    category: "AI & Automation",
    readTime: "14 min read",
    image: "/images/cc-agent-monitor.jpg",
    href: "/blog/ai-call-center-vs-human-agents",
  },
  {
    title: "2026 Call Center Benchmarks: AHT, CSAT, FCR & More by Industry",
    excerpt:
      "2026 call center benchmarks for every metric that matters — AHT, CSAT, FCR, NPS, abandon rate, occupancy, attrition — broken down by industry and channel.",
    category: "Benchmarks & Data",
    readTime: "17 min read",
    image: "/images/cc-agent-focus.jpg",
    href: "/blog/call-center-benchmarks-2026",
  },
  {
    title: "Top 10 Small Business Call Center Companies in USA (2026)",
    excerpt:
      "Compare the top 10 call center services for small business in the USA. Ranked by affordability, no-minimum contracts, 24/7 answering, overflow capacity, and SMB-friendly pricing.",
    category: "Industry Rankings",
    readTime: "18 min read",
    image: "/images/cc-agent-smile.jpg",
    href: "/blog/top-10-small-business-call-center-companies-usa",
  },
  {
    title: "Top 10 Legal Intake Call Center Companies in USA (2026)",
    excerpt:
      "Compare the top 10 legal intake call center companies in the USA. Ranked by 24/7 live intake, personal injury & mass tort qualification, bilingual Spanish, and Litify/Clio integrations.",
    category: "Industry Rankings",
    readTime: "18 min read",
    image: "/images/cc-agent-headset.jpg",
    href: "/blog/top-10-legal-intake-call-center-companies-usa",
  },
  {
    title: "Top 10 HVAC & Home Services Call Center Companies in USA (2026)",
    excerpt:
      "Compare the top 10 HVAC, plumbing, and home services call center companies in the USA. Ranked by 24/7 emergency dispatch, ServiceTitan/Jobber integrations, and bilingual booking support.",
    category: "Industry Rankings",
    readTime: "18 min read",
    image: "/images/cc-agent-headset.jpg",
    href: "/blog/top-10-hvac-home-services-call-center-companies-usa",
  },
  {
    title: "Top 10 AI Call Center Companies in USA (2026)",
    excerpt:
      "Compare the top 10 AI call center companies in the USA. Ranked by conversational AI, voice agents, AI call deflection, agent-assist copilots, and AI + human hybrid delivery models.",
    category: "Industry Rankings",
    readTime: "18 min read",
    image: "/images/cc-team-huddle.jpg",
    href: "/blog/top-10-ai-call-center-companies-usa",
  },
  {
    title: "Top 10 Appointment Setting Companies in USA (2026)",
    excerpt:
      "Compare the top 10 appointment setting companies in the USA. Ranked by B2B pipeline performance, per-appointment pricing, LinkedIn + phone outreach, and Salesforce/HubSpot integrations.",
    category: "Industry Rankings",
    readTime: "18 min read",
    image: "/images/cc-discussion.jpg",
    href: "/blog/top-10-appointment-setting-companies-usa",
  },
  {
    title: "Top 10 Inbound Call Center Companies in USA (2026)",
    excerpt:
      "Compare the top 10 inbound call center companies in the USA. Ranked by 24/7 coverage, FCR, CSAT, omnichannel technology, and compliance — covering inbound customer support, IVR, and ACD.",
    category: "Industry Rankings",
    readTime: "18 min read",
    image: "/images/cc-agent-headset.jpg",
    href: "/blog/top-10-inbound-call-center-companies-usa",
  },
  {
    title: "Top 10 Outbound Call Center Companies in USA (2026)",
    excerpt:
      "Compare the top 10 outbound call center companies in the USA. Ranked by TCPA compliance, predictive dialer technology, lead qualification, and appointment setting performance.",
    category: "Industry Rankings",
    readTime: "18 min read",
    image: "/images/cc-agent-focus.jpg",
    href: "/blog/top-10-outbound-call-center-companies-usa",
  },
  {
    title: "Top 10 Telemarketing Companies in USA (2026)",
    excerpt:
      "Compare the top 10 telemarketing companies in the USA for B2B and B2C campaigns. Ranked by TCPA compliance, DNC scrubbing, dialer technology, and lead qualification performance.",
    category: "Industry Rankings",
    readTime: "18 min read",
    image: "/images/cc-discussion.jpg",
    href: "/blog/top-10-telemarketing-companies-usa",
  },
  {
    title: "Top 10 Lead Generation Companies in USA (2026)",
    excerpt:
      "Compare the top 10 lead generation companies in the USA. Ranked by B2B pipeline performance, SDR-as-a-service quality, appointment setting, and ABM-ready outreach campaigns.",
    category: "Industry Rankings",
    readTime: "18 min read",
    image: "/images/cc-agent-smile.jpg",
    href: "/blog/top-10-lead-generation-companies-usa",
  },
  {
    title: "Top 10 Live Chat Outsourcing Companies in USA (2026)",
    excerpt:
      "Compare the top 10 live chat outsourcing companies in the USA. Ranked by 24/7 chat coverage, chatbot + live agent hybrid models, and Zendesk/Intercom/Drift platform integrations.",
    category: "Industry Rankings",
    readTime: "18 min read",
    image: "/images/cc-agent-smile.jpg",
    href: "/blog/top-10-live-chat-outsourcing-companies-usa",
  },
  {
    title: "Top 10 Answering Service Companies in USA (2026)",
    excerpt:
      "Compare the top 10 answering service companies in the USA. Ranked by 24/7 live answering, after-hours coverage, HIPAA-compliant medical answering, and bilingual service quality.",
    category: "Industry Rankings",
    readTime: "18 min read",
    image: "/images/cc-agent-headset.jpg",
    href: "/blog/top-10-answering-service-companies-usa",
  },
  {
    title: "Top 10 Virtual Receptionist Companies in USA (2026)",
    excerpt:
      "Compare the top 10 virtual receptionist companies in the USA. Ranked by professional call handling, appointment booking, CRM integration, and specialty industry coverage (law, medical, SMB).",
    category: "Industry Rankings",
    readTime: "18 min read",
    image: "/images/cc-agent-smile.jpg",
    href: "/blog/top-10-virtual-receptionist-companies-usa",
  },
  {
    title: "Top 10 Multilingual Call Center Companies in USA (2026)",
    excerpt:
      "Compare the top 10 multilingual call center companies in the USA. Ranked by Spanish bilingual quality, language coverage (French, Mandarin, Portuguese, Vietnamese), and cultural fluency.",
    category: "Industry Rankings",
    readTime: "18 min read",
    image: "/images/cc-diverse-team.jpg",
    href: "/blog/top-10-multilingual-call-center-companies-usa",
  },
  {
    title: "Top 10 Real Estate Call Center Companies in USA (2026)",
    excerpt:
      "Compare the top 10 real estate call center companies in the USA. Ranked by ISA services, speed-to-lead, motivated seller outreach, and CRM integration (Follow Up Boss, kvCORE, Salesforce).",
    category: "Industry Rankings",
    readTime: "18 min read",
    image: "/images/cc-discussion.jpg",
    href: "/blog/top-10-real-estate-call-center-companies-usa",
  },
  {
    title: "Top 10 SaaS Customer Support Companies in USA (2026)",
    excerpt:
      "Compare the top 10 SaaS customer support companies in the USA. Ranked by Tier 1-3 coverage, NRR/activation outcomes, in-app chat, and Intercom/Zendesk/Front/HubSpot integrations.",
    category: "Industry Rankings",
    readTime: "18 min read",
    image: "/images/cc-team-huddle.jpg",
    href: "/blog/top-10-saas-customer-support-companies-usa",
  },
  {
    title: "Top 10 Debt Collection BPO Companies in USA (2026)",
    excerpt:
      "Compare the top 10 debt collection BPO companies in the USA. Ranked by FDCPA compliance, recovery rates, technology, and client satisfaction — covering first-party and third-party collections.",
    category: "Industry Rankings",
    readTime: "19 min read",
    image: "/images/cc-management.jpg",
    href: "/blog/top-10-debt-collection-bpo-companies-usa",
  },
  {
    title: "Top 10 Financial Services Call Center Companies in USA (2026)",
    excerpt:
      "Compare the top 10 financial services call center companies in the USA. Ranked by PCI/SOC 2 compliance, CX quality, and technology — covering banks, lenders, credit unions, and fintech.",
    category: "Industry Rankings",
    readTime: "19 min read",
    image: "/images/cc-agent-focus.jpg",
    href: "/blog/top-10-financial-services-call-center-companies-usa",
  },
  {
    title: "Top 10 Customer Service Outsourcing Companies in USA (2026)",
    excerpt:
      "Compare the top 10 customer service outsourcing companies in the USA. Ranked by CX quality, omnichannel technology, and scalability — covering inbound support, chat, and email outsourcing.",
    category: "Industry Rankings",
    readTime: "18 min read",
    image: "/images/cc-agent-smile.jpg",
    href: "/blog/top-10-customer-service-outsourcing-companies-usa",
  },
  {
    title: "Top 10 E-commerce Call Center Companies in USA (2026)",
    excerpt:
      "Compare the top 10 e-commerce call center companies in the USA. Ranked by peak-season scaling, Shopify/Gorgias integration, and CX quality — ideal for DTC, subscription, and omnichannel brands.",
    category: "Industry Rankings",
    readTime: "18 min read",
    image: "/images/cc-management.jpg",
    href: "/blog/top-10-ecommerce-call-center-companies-usa",
  },
  {
    title: "Top 10 Technical Support Outsourcing Companies in USA (2026)",
    excerpt:
      "Compare the top 10 technical support outsourcing companies in the USA. Ranked by Tier 1-3 coverage, ITIL maturity, platform integrations, and CX quality — covering SaaS, IT help desk, and device support.",
    category: "Industry Rankings",
    readTime: "19 min read",
    image: "/images/cc-team-huddle.jpg",
    href: "/blog/top-10-technical-support-outsourcing-companies-usa",
  },
  {
    title: "Call Center Outsourcing Cost: Complete 2026 Guide",
    excerpt:
      "How much does call center outsourcing really cost in 2026? We break down per-agent pricing, per-minute models, hidden fees, and proven strategies to maximize your ROI.",
    category: "Industry Guide",
    readTime: "8 min read",
    image: "/images/agents-working.jpg",
    href: "/blog/call-center-outsourcing-cost",
  },
  {
    title: "Onshore vs. Offshore vs. Nearshore: Pros, Cons & Costs",
    excerpt:
      "Not sure whether to go onshore, offshore, or nearshore? Compare costs, quality, time zones, and cultural fit side-by-side to find the best outsourcing model for your business.",
    category: "Comparison",
    readTime: "10 min read",
    image: "/images/diverse-team.jpg",
    href: "/blog/onshore-vs-offshore-vs-nearshore",
  },
  {
    title: "Inbound vs Outbound Call Centers: Which Is Right?",
    excerpt:
      "Understand the key differences between inbound and outbound call centers, when to use each model, and how a hybrid approach can maximize your customer engagement results.",
    category: "Best Practices",
    readTime: "10 min read",
    image: "/images/hd-office-team.jpg",
    href: "/blog/inbound-vs-outbound-call-centers",
  },
  {
    title: "Top 10 KPIs Every Outsourced Call Center Should Track",
    excerpt:
      "First call resolution, average handle time, CSAT, and more — learn which call center KPIs actually move the needle and how top-performing teams benchmark them in 2026.",
    category: "Best Practices",
    readTime: "6 min read",
    image: "/images/agents-team-row.jpg",
    href: "/blog/call-center-kpis",
  },
  {
    title: "Benefits of US-Based Call Center Services",
    excerpt:
      "Discover why leading brands are choosing domestic call centers for native-English support, cultural alignment, regulatory compliance, and measurably stronger customer relationships.",
    category: "Insights",
    readTime: "5 min read",
    image: "/images/call-center-team.jpg",
    href: "/blog/benefits-us-based-call-center",
  },
  {
    title: "How to Choose the Right Call Center Outsourcing Partner",
    excerpt:
      "Use this step-by-step evaluation framework to vet call center providers on technology, compliance, scalability, agent quality, and total cost of ownership before you sign.",
    category: "Strategy",
    readTime: "9 min read",
    image: "/images/hd-agents-pair.jpg",
    href: "/blog/how-to-choose-call-center-partner",
  },
  {
    title: "Top 15 Healthcare BPO Companies in the USA (2026 Rankings)",
    excerpt:
      "Comprehensive ranking of the best healthcare BPO companies in the USA. Compare HIPAA-compliant providers for medical billing, patient support, and revenue cycle outsourcing.",
    category: "Industry Rankings",
    readTime: "18 min read",
    image: "/images/cc-team-meeting.jpg",
    href: "/blog/top-15-healthcare-bpo-companies-usa",
  },
  {
    title: "Top 15 BPO Companies in the USA (2026 Rankings)",
    excerpt:
      "Discover the best BPO outsourcing companies in America for 2026. Compare call center services, customer support, back office, and business process outsourcing providers.",
    category: "Industry Rankings",
    readTime: "20 min read",
    image: "/images/cc-management.jpg",
    href: "/blog/top-10-bpo-companies-in-usa",
  },
  {
    title: "Top 15 Insurance BPO Companies in the USA (2026)",
    excerpt:
      "Compare the best insurance BPO companies for claims processing, policy support, open enrollment, and compliance-driven outsourcing ranked by performance.",
    category: "Industry Rankings",
    readTime: "18 min read",
    image: "/images/cc-agent-focus.jpg",
    href: "/blog/top-15-insurance-bpo-companies-usa",
  },
  {
    title: "Top 15 American Call Centers: Best US-Based Companies (2026)",
    excerpt:
      "Discover the best American call center companies for onshore, domestic customer support outsourcing. Compare US-based providers ranked by quality and compliance.",
    category: "Industry Rankings",
    readTime: "16 min read",
    image: "/images/cc-team-huddle.jpg",
    href: "/blog/american-call-centers",
  },
  {
    title: "De-Escalation Techniques for Customer Service",
    excerpt:
      "10 proven de-escalation techniques every call center agent needs. Scripts, phrases, and training strategies to turn angry customers into loyal advocates.",
    category: "Best Practices",
    readTime: "14 min read",
    image: "/images/cc-team-collab.jpg",
    href: "/blog/de-escalation-techniques-customer-service",
  },
  {
    title: "Medical Call Center Services: Complete Guide",
    excerpt:
      "Everything healthcare providers need to know about medical call centers — HIPAA compliance, patient scheduling, triage, billing, and outsourcing best practices.",
    category: "Healthcare",
    readTime: "16 min read",
    image: "/images/cc-agent-headset.jpg",
    href: "/blog/medical-call-center-services",
  },
  {
    title: "Inside Sales Outsourcing: Complete Guide for 2026",
    excerpt:
      "How to outsource inside sales — pricing models, SDR-as-a-service, appointment setting, and how to choose the right inside sales outsourcing company.",
    category: "Sales",
    readTime: "14 min read",
    image: "/images/cc-discussion.jpg",
    href: "/blog/inside-sales-outsourcing-guide",
  },
  {
    title: "Customer Service Best Practices: 15 Rules for Excellence",
    excerpt:
      "15 customer service best practices for 2026 — from the 3-to-11 rule to empathy statements. Plus 20 ready-to-use empathy phrases for call center agents.",
    category: "Best Practices",
    readTime: "15 min read",
    image: "/images/cc-agent-smile.jpg",
    href: "/blog/customer-service-best-practices",
  },
  {
    title: "Nearshore Call Center Outsourcing: Complete Guide",
    excerpt:
      "Compare nearshore call center locations — Mexico, Colombia, Costa Rica, El Salvador. Pricing, pros/cons, and when to choose nearshore vs onshore outsourcing.",
    category: "Outsourcing Guide",
    readTime: "15 min read",
    image: "/images/cc-management.jpg",
    href: "/blog/nearshore-call-center-outsourcing",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy pt-36 pb-20 lg:pt-40 lg:pb-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative mx-auto max-w-[1536px] px-5 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/70">
              Our Blog
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Latest Insights &{" "}
              <br /><span className="text-red">Industry News</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
              Expert perspectives on call center outsourcing, customer service
              trends, and strategies to elevate your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  href={post.href}
                  className="group block overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:border-gray-200"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4">
                      <span className="rounded-full bg-red px-3 py-1 text-xs font-semibold text-white">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold leading-snug text-navy transition-colors group-hover:text-red">
                      {post.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-700">
                      {post.excerpt}
                    </p>
                    <div className="mt-5 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-sm text-gray-600">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </div>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-red transition-colors group-hover:text-red-dark">
                        Read Article
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
