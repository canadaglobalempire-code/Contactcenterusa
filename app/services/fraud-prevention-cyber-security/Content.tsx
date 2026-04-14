"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Fingerprint,
  Eye,
  Lock,
  AlertTriangle,
  FileCheck,
  Star,
  Phone,
} from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { PageFAQ } from "@/components/shared/PageFAQ";
import { siteConfig } from "@/lib/seo-config";

const features = [
  { icon: Fingerprint, title: "Identity Verification", desc: "Multi-factor authentication and advanced identity proofing that verifies customers in real time using voice biometrics, knowledge-based authentication, and device fingerprinting — without adding friction to the experience." },
  { icon: Eye, title: "Real-Time Transaction Monitoring", desc: "AI-driven analysis of every transaction to detect suspicious patterns, flag anomalies, score risk levels, and prevent fraud before it impacts your business — processing thousands of decisions per second." },
  { icon: Lock, title: "PCI DSS Compliance", desc: "End-to-end PCI DSS Level 1 compliant payment processing with secure card handling, tokenization, point-to-point encryption, and regular third-party audits to maintain the highest certification level." },
  { icon: Shield, title: "Data Protection & Encryption", desc: "Enterprise-grade encryption (AES-256 at rest, TLS 1.3 in transit), role-based access controls, data masking, and data loss prevention protocols that safeguard sensitive customer information at every stage." },
  { icon: AlertTriangle, title: "Threat Intelligence", desc: "Proactive threat intelligence and 24/7 monitoring that identifies emerging risks, phishing attempts, social engineering tactics, and insider threats targeting your contact center operations." },
  { icon: FileCheck, title: "Compliance Management", desc: "Automated regulatory compliance tracking for HIPAA, SOC 2 Type II, GDPR, CCPA, and industry-specific requirements with audit-ready documentation and continuous control monitoring." },
];

const processSteps = [
  { step: "01", title: "Security Assessment", desc: "We conduct a comprehensive vulnerability assessment of your contact center operations, identify risk areas, evaluate existing controls, and prioritize remediation based on threat likelihood and impact." },
  { step: "02", title: "Security Architecture Design", desc: "Our security engineers design a multi-layered defense framework — from identity verification protocols and payment security to network segmentation, access controls, and incident response procedures." },
  { step: "03", title: "Implementation & Hardening", desc: "We deploy fraud detection systems, configure monitoring tools, implement encryption and access controls, and train your team on security protocols. Every system is penetration-tested before going live." },
  { step: "04", title: "Continuous Monitoring & Response", desc: "24/7 security operations center (SOC) monitoring with real-time alerting, automated threat response, weekly threat intelligence briefings, and quarterly security reviews to stay ahead of evolving risks." },
];

const industries = [
  { name: "Financial Services", desc: "Fraud prevention for banks, credit unions, and lenders — including account takeover prevention, transaction fraud detection, and PCI-compliant payment processing across all channels.", href: "/industries/financial-services-call-center" },
  { name: "Healthcare", desc: "HIPAA-compliant security operations for healthcare providers — protecting patient data, securing telehealth interactions, and preventing medical identity theft and insurance fraud.", href: "/industries/healthcare-call-center-services" },
  { name: "Insurance", desc: "Claims fraud detection, policy manipulation prevention, and regulatory compliance management for insurance carriers and brokers handling sensitive policyholder information.", href: "/industries/insurance-call-center-outsourcing" },
  { name: "Ecommerce & Retail", desc: "Payment fraud prevention, account takeover protection, and chargebacks reduction for online retailers processing high volumes of card-not-present transactions.", href: "/industries/ecommerce-customer-service-outsourcing" },
  { name: "Government", desc: "Secure contact center operations for government agencies with FedRAMP-aligned controls, citizen data protection, and compliance with federal security mandates.", href: "/industries/government" },
  { name: "Technology & SaaS", desc: "API security, account protection, and data breach prevention for technology companies managing large volumes of user accounts and sensitive platform data.", href: "/industries/saas-technology-support" },
];

const comparisonData = [
  { feature: "Fraud Detection Rate", inHouse: "70-80%", outsourced: "99.9%" },
  { feature: "Time to Detect Threats", inHouse: "Hours to days", outsourced: "Real-time (milliseconds)" },
  { feature: "Compliance Certifications", inHouse: "Self-assessed", outsourced: "PCI L1, SOC 2, HIPAA" },
  { feature: "Security Team", inHouse: "1-2 generalists", outsourced: "Dedicated SOC team" },
  { feature: "Threat Intelligence", inHouse: "Reactive", outsourced: "Proactive + predictive" },
  { feature: "Penetration Testing", inHouse: "Annual (maybe)", outsourced: "Quarterly + continuous" },
  { feature: "Incident Response Time", inHouse: "Hours", outsourced: "Minutes" },
  { feature: "Annual Security Cost", inHouse: "$300K-$1M+", outsourced: "Fraction of the cost" },
];

const faqs = [
  { question: "What are the most common types of call center fraud?", answer: "The most common types include social engineering (where fraudsters manipulate agents into revealing account information), account takeover (using stolen credentials to access accounts), identity spoofing (impersonating legitimate customers), payment fraud (using stolen card numbers), and internal data theft (employees accessing data improperly). Contact Center USA's multi-layered security approach addresses each of these threat vectors with specific countermeasures." },
  { question: "What are PCI DSS compliance requirements for contact centers?", answer: "PCI DSS requires contact centers to encrypt cardholder data in transit and at rest, restrict access on a need-to-know basis, maintain secure networks, implement strong access controls, regularly test security systems, and maintain an information security policy. Contact Center USA is PCI DSS Level 1 certified — the highest level of compliance — and undergoes annual third-party audits to maintain certification." },
  { question: "How do you detect fraud in real time?", answer: "Our fraud detection stack uses AI-powered voice biometrics, behavioral analytics, real-time transaction scoring, anomaly detection algorithms, device fingerprinting, and geolocation verification. These systems work together to analyze every interaction in milliseconds and flag suspicious activity — achieving a 99.9% detection rate while maintaining a low false-positive rate that doesn't inconvenience legitimate customers." },
  { question: "How does voice biometrics prevent contact center fraud?", answer: "Voice biometrics creates a unique voiceprint for each customer based on hundreds of vocal characteristics. When a caller contacts your center, the system compares their voice against the stored voiceprint in real time — detecting imposters even if they have all the correct account information. This passive authentication happens in the background without requiring the customer to do anything differently." },
  { question: "What is the cost of a contact center data breach?", answer: "The average cost of a data breach is $4.45 million per incident (IBM 2023 report), including direct costs (remediation, legal, fines), indirect costs (customer churn, brand damage, lost revenue), and regulatory penalties. For industries like healthcare and financial services, costs are significantly higher. Investing in prevention through Contact Center USA's security solutions costs a fraction of potential breach expenses." },
  { question: "How do you ensure HIPAA compliance in your contact center?", answer: "We implement administrative safeguards (policies, training, access management), physical safeguards (facility security, workstation controls), and technical safeguards (encryption, audit trails, automatic logoff). All agents handling protected health information (PHI) complete annual HIPAA training. Our systems log every access to PHI, and we conduct regular risk assessments and internal audits." },
  { question: "Can fraud prevention be implemented without impacting customer experience?", answer: "Absolutely. Modern fraud prevention operates transparently in the background — voice biometrics verify identity passively during normal conversation, behavioral analytics assess risk without additional questions, and intelligent authentication only challenges customers when genuine risk is detected. Our approach actually improves CX by reducing security questions and speeding up verification for legitimate customers." },
];

export function FraudPreventionContent() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <Image src="/images/cc-masked-agents.jpg" alt="Call Center Fraud Prevention - Contact Center Cyber Security by Contact Center USA" fill className="object-cover object-top" priority />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[80vh] pt-40 max-w-[1536px] items-center px-5 py-28 lg:px-8">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-5">
            <motion.div className="lg:col-span-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90 backdrop-blur-sm">
                <Shield className="h-4 w-4" /> Fraud Prevention & Cyber Security
              </span>
              <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[52px]">
                Call Center <span className="text-red">Fraud Prevention</span> & Cyber Security Solutions
              </h1>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/70">
                Protect your business with 99.9% threat detection, real-time fraud monitoring, and enterprise-grade contact center cyber security — all managed by US-based security operations experts.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 99.9% Detection Rate</div>
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> PCI DSS Level 1</div>
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 24/7 SOC Monitoring</div>
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
              { value: 99.9, suffix: "%", label: "Threat Detection" },
              { value: 100, suffix: "%", label: "PCI Compliant" },
              { value: 0, suffix: "", label: "Data Breaches" },
              { value: 24, suffix: "/7", label: "SOC Monitoring" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white"><AnimatedCounter target={stat.value} suffix={stat.suffix} /></div>
                <div className="mt-1 text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS FRAUD PREVENTION */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Why Fraud Prevention Matters</span>
              <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-navy sm:text-4xl">
                How Contact Center <span className="text-red">Cyber Security</span> Protects Your Business
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
                Contact centers are the <strong>number one target for social engineering attacks</strong> because they are the front door to customer accounts. Fraudsters exploit human trust, manipulate agents, and use stolen credentials to access sensitive data — costing businesses an average of <strong>$4.45 million per breach</strong>.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                At Contact Center USA, security is not an add-on — it is <strong>built into every layer of our operations</strong>. Our fraud prevention framework combines AI-powered real-time monitoring, voice biometric authentication, behavioral analytics, and a <strong>24/7 security operations center (SOC)</strong> staffed by certified US-based security professionals.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                The result: <strong>99.9% fraud detection rate</strong>, <strong>zero data breaches</strong>, and compliance certifications that satisfy the most demanding regulatory requirements — including PCI DSS Level 1, HIPAA, SOC 2 Type II, and GDPR. Pair security with our <Link href="/services/contact-center-software-solutions" className="text-red font-semibold hover:underline">secure contact center software</Link> and <Link href="/services/customer-experience-analytics" className="text-red font-semibold hover:underline">CX analytics</Link> for complete visibility.
              </p>

              <div className="mt-8 space-y-3">
                {["99.9% fraud detection with near-zero false positives", "Voice biometric authentication — no extra steps for customers", "24/7 SOC monitoring by certified security professionals", "PCI DSS Level 1, HIPAA, SOC 2 Type II compliant"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red" />
                    <span className="text-[15px] text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image src="/images/cc-diverse-team.jpg" alt="Security operations center at Contact Center USA" fill className="object-cover" />
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="absolute -bottom-6 -right-6 rounded-2xl bg-red px-6 py-5 text-white shadow-xl">
                <div className="text-3xl font-bold">99.9%</div>
                <div className="text-sm text-white/80">Detection Rate</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-red/[0.02] py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Security Capabilities</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Fraud Prevention & Security <span className="text-red">Solutions</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">Multi-layered security that protects your customers, your data, and your reputation — without compromising the customer experience.</p>
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

      {/* HOW IT WORKS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Our Process</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">How Fraud Prevention <span className="text-red">Implementation</span> Works</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">From assessment to 24/7 monitoring, we build a comprehensive security framework that evolves with the threat landscape.</p>
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
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Security: <span className="text-red">In-House vs. Managed</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">See why businesses trust Contact Center USA&apos;s managed security over building in-house fraud prevention capabilities.</p>
          </motion.div>
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="grid grid-cols-3 bg-navy p-4 text-center text-sm font-semibold text-white">
              <div>Capability</div><div>In-House</div><div>Contact Center USA</div>
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
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Industries That Need <span className="text-red">Fraud Prevention</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">Our security solutions are built for the compliance requirements and threat profiles of every high-risk industry.</p>
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
                  <div className="text-4xl font-bold text-navy">0</div>
                  <div className="mt-1 text-sm text-gray-600">Data Breaches</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="absolute -right-6 -top-6 h-full w-full rounded-3xl bg-gray-50" />
              <div className="relative z-10 rounded-2xl bg-white p-10 shadow-xl">
                <div className="absolute -top-5 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-red text-2xl font-bold text-white shadow-lg">&ldquo;</div>
                <div className="flex items-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />)}</div>
                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  After a competitor suffered a major data breach, we knew we needed to overhaul our contact center security. Contact Center USA implemented a comprehensive fraud prevention framework in under six weeks. Their real-time monitoring has caught every suspicious transaction since day one — zero breaches, zero compromised accounts. Our compliance team finally has complete peace of mind.
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red to-red-dark text-lg font-bold text-white">RC</div>
                  <div>
                    <div className="font-bold text-navy">Robert Callahan</div>
                    <div className="text-sm text-gray-600">CISO, Meridian Federal Credit Union</div>
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
              { title: "Contact Center Software", desc: "Secure cloud platform with built-in PCI compliance, encrypted communications, and role-based access controls.", href: "/services/contact-center-software-solutions" },
              { title: "CX Analytics", desc: "Monitor security metrics alongside customer experience data for a complete operational and risk view.", href: "/services/customer-experience-analytics" },
              { title: "A.I. Automation", desc: "AI-powered fraud detection, automated threat response, and intelligent identity verification workflows.", href: "/services/ai-call-center-automation" },
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
      <PageFAQ heading="Fraud Prevention FAQ" faqs={faqs} />

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Secure Your Contact Center?</h2>
              <p className="mt-3 text-white/60">Protect your customers and your reputation with enterprise-grade fraud prevention and 24/7 security monitoring.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-red-dark">
                Get a Security Assessment <ArrowRight className="h-4 w-4" />
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
