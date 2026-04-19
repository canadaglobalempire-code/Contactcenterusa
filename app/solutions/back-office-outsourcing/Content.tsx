"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  FileText,
  Mail,
  ClipboardList,
  Database,
  ShoppingCart,
  FolderOpen,
} from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { PageFAQ } from "@/components/shared/PageFAQ";
import { SEOContentSection, type SEOPattern } from "@/components/shared/SEOContentSection";
import { siteConfig } from "@/lib/seo-config";

const features = [
  { icon: Database, title: "Data Entry & Processing", desc: "High-volume, high-accuracy data entry outsourcing with multi-layer quality checks that maintain 99.5%+ accuracy rates across every project — from medical records to financial data." },
  { icon: FileText, title: "Document Management", desc: "End-to-end document processing including scanning, indexing, classification, OCR extraction, digital archiving, and compliance-ready filing to eliminate paper-based bottlenecks permanently." },
  { icon: Mail, title: "Email & Correspondence", desc: "Professional email management including inbox triage, response drafting, template-based replies, and escalation routing — ensuring every customer message gets a timely, accurate response." },
  { icon: ShoppingCart, title: "Order Fulfillment Support", desc: "Fast, error-free order entry, verification, inventory coordination, and fulfillment tracking so your customers receive exactly what they ordered, on time, every time." },
  { icon: FolderOpen, title: "Records & Compliance", desc: "Secure digital records storage, retrieval, audit-trail management, and regulatory-compliant filing systems that meet HIPAA, SOC 2, and industry-specific requirements." },
  { icon: ClipboardList, title: "Quality Assurance & Auditing", desc: "Multi-tier review processes combining automated validation, peer audits, and supervisor spot-checks to ensure every deliverable meets your exact standards before delivery." },
];

const processSteps = [
  { step: "01", title: "Operations Audit", desc: "We analyze your current back office workflows, identify inefficiencies, and map every process that can be outsourced to reduce costs and improve turnaround times." },
  { step: "02", title: "Team Configuration", desc: "We recruit, vet, and train a dedicated US-based team on your systems, tools, SOPs, and quality benchmarks — ensuring they operate as a true extension of your organization." },
  { step: "03", title: "Integration & Onboarding", desc: "Your team is connected to your CRM, ERP, document management, and communication platforms with secure VPN access, role-based permissions, and real-time dashboards." },
  { step: "04", title: "Performance & Optimization", desc: "Ongoing KPI tracking, weekly reporting, and continuous process improvement ensure accuracy rates stay above 99.5% and turnaround times keep shrinking quarter over quarter." },
];

const industries = [
  { name: "Healthcare", desc: "Medical records processing, claims data entry, insurance verification, and HIPAA-compliant document management for healthcare providers and payers.", href: "/industries/healthcare-call-center-services" },
  { name: "Financial Services", desc: "Account reconciliation, transaction processing, loan documentation, and audit-ready records management for banks, lenders, and insurance companies.", href: "/industries/financial-services-call-center" },
  { name: "Ecommerce & Retail", desc: "Product catalog management, order processing, returns handling, inventory data updates, and vendor correspondence for online and brick-and-mortar retailers.", href: "/industries/ecommerce-customer-service-outsourcing" },
  { name: "Legal", desc: "Legal document preparation, case file management, court filing coordination, and privileged correspondence handling with strict chain-of-custody protocols.", href: "/industries/legal" },
  { name: "Real Estate", desc: "Property listing data entry, lease administration, closing document preparation, and tenant records management for real estate firms and property managers.", href: "/industries/real-estate-call-center-services" },
  { name: "Insurance", desc: "Policy administration, claims intake documentation, underwriting support, and renewal processing with compliance tracking across all fifty states.", href: "/industries/insurance-call-center-outsourcing" },
];

const comparisonData = [
  { feature: "Staffing Costs", inHouse: "$45K-$55K per employee", outsourced: "40% lower" },
  { feature: "Hiring & Training", inHouse: "4-8 weeks per hire", outsourced: "Pre-trained teams" },
  { feature: "Data Accuracy", inHouse: "95-97% typical", outsourced: "99.5%+ guaranteed" },
  { feature: "Scalability", inHouse: "Slow, costly hiring", outsourced: "Scale in days" },
  { feature: "Technology Stack", inHouse: "Expensive licenses", outsourced: "Included" },
  { feature: "Overtime & Benefits", inHouse: "$15K+ per employee", outsourced: "Bundled pricing" },
  { feature: "Disaster Recovery", inHouse: "Single location risk", outsourced: "Multi-site redundancy" },
  { feature: "Management Overhead", inHouse: "Supervisors, QA teams", outsourced: "Fully managed" },
];

const faqs = [
  { question: "What back office outsourcing services does Contact Center USA provide?", answer: "We provide comprehensive back office outsourcing including data entry and processing, document management, email correspondence, order fulfillment support, records management, quality assurance, and administrative task handling. All work is performed by trained US-based professionals who integrate directly with your existing systems and workflows." },
  { question: "How much does back office outsourcing cost compared to in-house?", answer: "Businesses typically save 30-40% on operational costs by outsourcing back office functions. You eliminate expenses for hiring, training, benefits, office space, equipment, and software licenses. Contact Center USA offers flexible pricing models including per-unit, hourly, and monthly retainer options with no long-term contracts required." },
  { question: "How do you maintain data accuracy in outsourced data entry?", answer: "We maintain 99.5%+ data accuracy through a multi-layer quality assurance system that includes automated validation rules, peer review checks, supervisor audits, and statistical sampling. Every project has defined accuracy KPIs, and our QA team monitors performance daily with real-time error tracking and correction protocols." },
  { question: "Is my sensitive data secure with an outsourced back office team?", answer: "Absolutely. Our US-based facilities maintain SOC 2 Type II certification, HIPAA compliance, and PCI-DSS compliance. We use encrypted file transfers, role-based access controls, secure VPN connections, and endpoint monitoring. All agents undergo thorough background checks and sign NDAs before accessing any client data." },
  { question: "Can you scale back office support during peak seasons?", answer: "Yes — elastic scalability is one of the biggest advantages of back office outsourcing. We can ramp up staffing within days for seasonal surges like year-end processing, open enrollment, tax season, or holiday order volumes, then scale back down when demand normalizes. You only pay for the capacity you use." },
  { question: "How quickly can you onboard a new back office outsourcing project?", answer: "Most back office outsourcing projects are fully operational within 2-4 weeks. This includes process documentation, team training, system integration, quality benchmark setup, and a controlled ramp-up period. Complex projects with specialized compliance requirements may take 4-6 weeks for thorough preparation." },
  { question: "What systems and software do your back office teams work with?", answer: "Our teams are experienced with all major platforms including Salesforce, SAP, Oracle, Microsoft Dynamics, QuickBooks, NetSuite, SharePoint, and dozens of industry-specific tools. We integrate via secure API connections, VPN access, or direct platform login — whatever your IT team prefers. If your system is proprietary, we train our agents on it during onboarding." },
];

export default function BackOfficeContent({ seoContent }: { seoContent?: SEOPattern[] } = {}) {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <Image src="/images/cc-support-team.jpg" alt="Back Office Outsourcing USA - Contact Center USA" fill className="object-cover object-top" priority />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[80vh] pt-40 max-w-[1536px] items-center px-5 py-28 lg:px-8">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-5">
            <motion.div className="lg:col-span-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90 backdrop-blur-sm">
                <Database className="h-4 w-4" /> Back Office Outsourcing
              </span>
              <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[52px]">
                US-Based Back Office <span className="text-red">Outsourcing</span> That Drives Efficiency
              </h1>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/70">
                Offload data entry, document processing, and administrative operations to our trained US-based teams — cutting costs by 40% while improving accuracy to 99.5% or higher.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 40% Cost Reduction</div>
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 99.5%+ Data Accuracy</div>
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> No Long-Term Contracts</div>
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
              { value: 40, suffix: "%", label: "Cost Reduction" },
              { value: 99.5, suffix: "%", label: "Data Accuracy" },
              { value: 2, suffix: "x", label: "Faster Turnaround" },
              { value: 500, suffix: "K+", label: "Records Monthly" },
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
              <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">What is Back Office Outsourcing?</span>
              <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-navy sm:text-4xl">
                Streamline Your Operations with <span className="text-red">US-Based</span> Back Office Teams
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
                Back office outsourcing transfers your <strong>administrative, data processing, and document management tasks</strong> to a dedicated team of trained professionals — freeing your core staff to focus on revenue-generating activities instead of paperwork.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                At Contact Center USA, our back office teams are not offshore temps. They are <strong>US-based professionals</strong> trained on your specific systems, processes, and quality standards. They work as a seamless extension of your organization, handling everything from high-volume data entry and document indexing to order processing and compliance-ready records management.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                The result? Businesses that outsource back office operations with us typically see a <strong>40% reduction in operational costs</strong>, <strong>99.5%+ data accuracy rates</strong>, and <strong>2x faster turnaround times</strong> — all while maintaining full compliance with <Link href="/solutions/government-call-center-services" className="text-red font-semibold hover:underline">industry regulations</Link> including HIPAA, SOC 2, and PCI-DSS.
              </p>

              <div className="mt-8 space-y-3">
                {["Eliminate hiring, training, and turnover costs", "Scale instantly for seasonal surges", "99.5%+ accuracy with multi-layer QA", "Secure, compliant US-based facilities"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red" />
                    <span className="text-[15px] text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image src="/images/cc-woman-typing.jpg" alt="US-based back office outsourcing team at Contact Center USA" fill className="object-cover" />
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="absolute -bottom-6 -right-6 rounded-2xl bg-red px-6 py-5 text-white shadow-xl">
                <div className="text-3xl font-bold">99.5%</div>
                <div className="text-sm text-white/80">Data Accuracy</div>
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
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Back Office Outsourcing <span className="text-red">Services</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">From data entry to document management, our US-based teams handle the operational workload so your business can focus on growth.</p>
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
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">How Back Office Outsourcing <span className="text-red">Works</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">From audit to optimization, we handle every step — so you see results fast without operational disruption.</p>
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
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">In-House vs. <span className="text-red">Outsourced</span> Back Office</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">See why leading businesses outsource back office operations to Contact Center USA instead of managing them internally.</p>
          </motion.div>
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="grid grid-cols-3 bg-navy p-4 text-center text-sm font-semibold text-white">
              <div>Feature</div><div>In-House</div><div>Contact Center USA</div>
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
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Industries</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Industries That Benefit from <span className="text-red">Back Office Outsourcing</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">Our back office outsourcing solutions are tailored to meet the compliance, accuracy, and volume requirements of every major industry.</p>
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
                  <div className="text-4xl font-bold text-navy">4.8/5</div>
                  <div className="mt-1 flex items-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}</div>
                  <div className="mt-1 text-sm text-gray-600">Average Rating</div>
                </div>
                <div className="h-16 w-px bg-gray-200" />
                <div>
                  <div className="text-4xl font-bold text-navy">40%</div>
                  <div className="mt-1 text-sm text-gray-600">Average Cost Savings</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="absolute -right-6 -top-6 h-full w-full rounded-3xl bg-gray-50" />
              <div className="relative z-10 rounded-2xl bg-white p-10 shadow-xl">
                <div className="absolute -top-5 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-red text-2xl font-bold text-white shadow-lg">&ldquo;</div>
                <div className="flex items-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />)}</div>
                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  Outsourcing our back office to Contact Center USA was the best operational decision we&apos;ve made. They reduced our data processing costs by 42% and improved accuracy from 96% to 99.7%. Our internal team now focuses entirely on strategic projects instead of drowning in paperwork.
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red to-red-dark text-lg font-bold text-white">KM</div>
                  <div>
                    <div className="font-bold text-navy">Karen Mitchell</div>
                    <div className="text-sm text-gray-600">VP of Operations, Horizon Logistics Group</div>
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
              { title: "Financial Solutions", desc: "Secure payment processing, billing support, and collections services that complement your back office operations.", href: "/solutions/financial-call-center-services" },
              { title: "Customer Service", desc: "Pair back office efficiency with frontline customer support handled by professional US-based agents.", href: "/solutions/customer-service-outsourcing" },
              { title: "AI Automation", desc: "Automate repetitive back office tasks with AI-powered workflows for data extraction, classification, and routing.", href: "/services/ai-call-center-automation" },
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

      {/* SEO CONTENT — keyword-rich patterned sections */}
      {seoContent && <SEOContentSection sections={seoContent} />}

      {/* FAQ */}
      <PageFAQ heading="Back Office Outsourcing FAQ" faqs={faqs} />

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Streamline Your Back Office?</h2>
              <p className="mt-3 text-white/60">See how outsourcing data entry and document processing can cut costs by 40% and free your team to focus on growth.</p>
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
