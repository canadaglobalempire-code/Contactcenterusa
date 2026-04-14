"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  DollarSign,
  CreditCard,
  Receipt,
  Search,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { PageFAQ } from "@/components/shared/PageFAQ";
import { siteConfig } from "@/lib/seo-config";

const features = [
  { icon: CreditCard, title: "Payment Processing", desc: "Secure, PCI-compliant payment handling across phone, online, and IVR channels with real-time transaction verification, tokenization, and fraud screening for every payment." },
  { icon: DollarSign, title: "Collections & Recovery", desc: "Professional, FDCPA-compliant collections services that recover past-due revenue while preserving customer relationships — first-party, third-party, early-stage, and late-stage recovery programs." },
  { icon: Receipt, title: "Billing & Invoice Support", desc: "Expert billing inquiry resolution, invoice clarification, payment plan negotiation, and proactive outreach that reduces confusion, accelerates receivables, and cuts chargebacks by up to 60%." },
  { icon: Search, title: "Account Management", desc: "Fast, accurate account lookups, balance inquiries, transaction history research, and account update handling that empowers customers with self-service backed by live agent expertise." },
  { icon: ShieldCheck, title: "Regulatory Compliance", desc: "Strict adherence to FDCPA, TCPA, PCI-DSS, Reg E, and state-specific financial regulations with ongoing agent training, call scripting, and quarterly compliance audits." },
  { icon: TrendingUp, title: "Revenue Optimization", desc: "Strategic outreach programs including payment reminders, hardship plans, early intervention calls, and win-back campaigns that maximize recovery rates without damaging brand loyalty." },
];

const processSteps = [
  { step: "01", title: "Compliance Assessment", desc: "We audit your current financial workflows, identify regulatory requirements, and design compliant processes for payment handling, collections, and billing operations." },
  { step: "02", title: "Secure Integration", desc: "Our team connects to your billing platform, payment gateway, and CRM through encrypted APIs and PCI-compliant environments — ensuring data flows securely with zero exposure." },
  { step: "03", title: "Agent Training & Certification", desc: "Every agent completes rigorous training on your products, financial regulations, de-escalation techniques, and compliance scripts before handling a single transaction." },
  { step: "04", title: "Performance Monitoring", desc: "Real-time dashboards track collection rates, payment processing volume, compliance adherence, and customer satisfaction — with weekly optimization reviews to maximize results." },
];

const industries = [
  { name: "Banking & Credit Unions", desc: "Account servicing, loan payment processing, delinquency management, and fraud alert handling for community banks and credit unions.", href: "/industries/financial-services-call-center" },
  { name: "Healthcare Revenue Cycle", desc: "Patient billing support, insurance payment posting, self-pay collections, and payment plan enrollment for hospitals and medical groups.", href: "/industries/healthcare-call-center-services" },
  { name: "Insurance", desc: "Premium payment processing, policy billing inquiries, past-due premium collections, and claims payment support for P&C and life carriers.", href: "/industries/insurance-call-center-outsourcing" },
  { name: "Utilities & Telecom", desc: "Bill payment processing, delinquent account outreach, disconnect prevention programs, and hardship plan enrollment for utility providers.", href: "/industries/utilities" },
  { name: "Ecommerce & Retail", desc: "Refund processing, chargeback dispute management, subscription billing support, and order payment verification for online retailers.", href: "/industries/ecommerce-customer-service-outsourcing" },
  { name: "SaaS & Technology", desc: "Subscription billing management, failed payment recovery, usage-based invoicing support, and enterprise accounts receivable for software companies.", href: "/industries/saas-technology-support" },
];

const comparisonData = [
  { feature: "PCI Compliance", inHouse: "Expensive annual audits", outsourced: "Built-in, audited" },
  { feature: "Collection Rates", inHouse: "15-25% recovery", outsourced: "35%+ recovery" },
  { feature: "Staffing Costs", inHouse: "$50K-$65K per agent", outsourced: "40% lower" },
  { feature: "Compliance Risk", inHouse: "Internal liability", outsourced: "Shared, managed" },
  { feature: "Technology Stack", inHouse: "$100K+ in licenses", outsourced: "Included" },
  { feature: "Scalability", inHouse: "Weeks to hire", outsourced: "Scale in days" },
  { feature: "Training & Turnover", inHouse: "Constant retraining", outsourced: "Managed for you" },
  { feature: "Reporting & Analytics", inHouse: "Manual spreadsheets", outsourced: "Real-time dashboards" },
];

const faqs = [
  { question: "Are your financial call center services PCI-DSS compliant?", answer: "Yes. Our facilities, systems, and processes are fully PCI-DSS compliant and audited annually by certified third-party assessors. We use encrypted payment handling, tokenization, restricted-access workstations, and secure telephony to protect cardholder data at every touchpoint. Our agents never see or store full card numbers." },
  { question: "How much does collections outsourcing cost?", answer: "Collections outsourcing costs vary based on portfolio size, age of accounts, and recovery strategy, but most businesses see a 35%+ improvement in recovery rates that far exceeds the cost of service. Contact Center USA offers flexible pricing including contingency-based (pay only on successful collections), fixed-fee, and hybrid models with no long-term contracts." },
  { question: "What types of collections services do you offer?", answer: "We provide first-party and third-party collections, early-stage and late-stage recovery, skip tracing, payment plan negotiation, hardship program enrollment, and legal pre-collection notices. All activities are fully compliant with FDCPA, TCPA, Reg E, and applicable state regulations. Our agents are trained in empathetic, professional communication." },
  { question: "How do you handle sensitive financial data securely?", answer: "We employ enterprise-grade security including end-to-end encryption, role-based data access, secure workstations with disabled USB ports and screen capture, continuous network monitoring, and thorough background checks on all agents. Our facilities maintain SOC 2 Type II certification and undergo regular penetration testing." },
  { question: "Can you integrate with our existing billing and payment systems?", answer: "Absolutely. We integrate with major billing platforms (Stripe, Square, Braintree), payment gateways, ERP systems (SAP, Oracle, NetSuite), and CRMs (Salesforce, HubSpot). Our IT team handles all integration during onboarding to ensure seamless data flow, real-time transaction processing, and accurate reconciliation." },
  { question: "How do your services reduce chargebacks and billing disputes?", answer: "Our agents proactively address billing confusion, clarify charges before they escalate to disputes, and provide clear payment confirmations with reference numbers. This preventive approach typically reduces chargebacks by 40-60% compared to automated-only billing systems. We also handle dispute responses and representment on your behalf." },
  { question: "What financial regulations do your agents follow?", answer: "Our agents are trained and certified on FDCPA (Fair Debt Collection Practices Act), TCPA (Telephone Consumer Protection Act), PCI-DSS, Regulation E, state-specific collection laws, and mini-Miranda requirements. Training is updated quarterly as regulations change, and every call is recorded and available for compliance review." },
];

export default function FinancialSolutionsContent() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <Image src="/images/cc-headset-desk.jpg" alt="Financial Call Center Services - Contact Center USA" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[80vh] pt-40 max-w-[1536px] items-center px-5 py-28 lg:px-8">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-5">
            <motion.div className="lg:col-span-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90 backdrop-blur-sm">
                <DollarSign className="h-4 w-4" /> Financial Solutions
              </span>
              <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[52px]">
                Secure Financial Call Center <span className="text-red">Services</span> You Can Trust
              </h1>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/70">
                PCI-compliant payment processing, professional collections outsourcing, and expert billing support — all handled by trained US-based agents who protect your revenue and your reputation.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> PCI-DSS Compliant</div>
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 35%+ Collection Recovery</div>
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
              { value: 99.9, suffix: "%", label: "PCI Compliance" },
              { value: 35, suffix: "%+", label: "Collection Recovery" },
              { value: 60, suffix: "%", label: "Fewer Chargebacks" },
              { value: 12, suffix: "M+", label: "Transactions Processed" },
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
              <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Why Financial Outsourcing?</span>
              <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-navy sm:text-4xl">
                Financial Call Center Services <span className="text-red">Built on Trust</span> and Compliance
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
                Handling financial transactions requires <strong>precision, security, and regulatory compliance</strong> at every touchpoint. A single data breach or FDCPA violation can cost your business millions in fines and irreparable reputational damage.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                Contact Center USA delivers <strong>PCI-DSS compliant payment processing, professional collections outsourcing, and expert billing support</strong> from secure US-based facilities staffed by agents who are trained and certified on financial regulations. We don&apos;t just process transactions — we protect your revenue, recover past-due accounts, and reduce billing disputes through proactive customer engagement.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                The result? Our clients typically see <strong>35%+ improvement in collection recovery rates</strong>, <strong>40-60% reduction in chargebacks</strong>, and <strong>complete peace of mind</strong> knowing every interaction meets <Link href="/solutions/government-call-center-services" className="text-red font-semibold hover:underline">federal and state compliance</Link> standards.
              </p>

              <div className="mt-8 space-y-3">
                {["PCI-DSS, FDCPA, and TCPA compliant operations", "Trained agents — not scripts — handling sensitive transactions", "35%+ improvement in past-due account recovery", "Real-time dashboards for every financial KPI"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red" />
                    <span className="text-[15px] text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image src="/images/cc-agent-writing.jpg" alt="Financial call center agents at Contact Center USA" fill className="object-cover" />
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="absolute -bottom-6 -right-6 rounded-2xl bg-red px-6 py-5 text-white shadow-xl">
                <div className="text-3xl font-bold">35%+</div>
                <div className="text-sm text-white/80">Recovery Rate</div>
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
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Financial Call Center <span className="text-red">Services</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">From payment processing to collections recovery, our PCI-compliant teams handle every financial interaction with precision and professionalism.</p>
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
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">How Financial Outsourcing <span className="text-red">Works</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">From compliance assessment to performance optimization, we handle every step with the rigor your financial operations demand.</p>
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
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">In-House vs. <span className="text-red">Outsourced</span> Financial Services</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">See why businesses choose Contact Center USA for payment processing and collections over building internal teams.</p>
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
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Industries That Rely on <span className="text-red">Financial Call Center Services</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">Our financial solutions are tailored to the compliance, security, and volume requirements of every major industry.</p>
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
                  <div className="text-4xl font-bold text-navy">4.9/5</div>
                  <div className="mt-1 flex items-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}</div>
                  <div className="mt-1 text-sm text-gray-600">Average Rating</div>
                </div>
                <div className="h-16 w-px bg-gray-200" />
                <div>
                  <div className="text-4xl font-bold text-navy">35%</div>
                  <div className="mt-1 text-sm text-gray-600">Better Recovery Rates</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="absolute -right-6 -top-6 h-full w-full rounded-3xl bg-gray-50" />
              <div className="relative z-10 rounded-2xl bg-white p-10 shadow-xl">
                <div className="absolute -top-5 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-red text-2xl font-bold text-white shadow-lg">&ldquo;</div>
                <div className="flex items-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />)}</div>
                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  Contact Center USA transformed our revenue cycle. Their collections team recovered 38% more past-due accounts than our previous vendor, and their PCI-compliant payment processing eliminated the compliance headaches we dealt with for years. The real-time reporting alone is worth the partnership.
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red to-red-dark text-lg font-bold text-white">PA</div>
                  <div>
                    <div className="font-bold text-navy">Patricia Alvarez</div>
                    <div className="text-sm text-gray-600">Director of Revenue Cycle, Summit Healthcare Partners</div>
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
              { title: "Back Office Support", desc: "Streamline data entry, document processing, and administrative tasks that feed into your financial operations.", href: "/solutions/back-office-outsourcing" },
              { title: "Outbound Services", desc: "Proactive payment reminders, follow-up calls, and collection outreach campaigns that accelerate cash flow.", href: "/solutions/outbound-call-center-services" },
              { title: "AI Automation", desc: "Automate payment reminders, billing notifications, and routine account inquiries with intelligent AI workflows.", href: "/services/ai-call-center-automation" },
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

      {/* FAQ */}
      <PageFAQ heading="Financial Services FAQ" faqs={faqs} />

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Secure Your Financial Operations?</h2>
              <p className="mt-3 text-white/60">See how PCI-compliant payment processing and professional collections can protect your revenue and improve recovery rates.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-red-dark">
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={siteConfig.phoneHref} className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-white/5">
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
