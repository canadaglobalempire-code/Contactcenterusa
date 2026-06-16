import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  Monitor,
  Wrench,
  Laptop,
  HardDrive,
  Headset,
  BookOpen,
} from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { PageFAQ } from "@/components/shared/PageFAQ";
import { SEOContentSection, type SEOPattern } from "@/components/shared/SEOContentSection";
import { siteConfig } from "@/lib/seo-config";

const features = [
  { icon: Headset, title: "Tier 1-3 Technical Support", desc: "Structured escalation tiers from basic troubleshooting to advanced engineering — ensuring every technical issue reaches the right expert at the right time for fast resolution." },
  { icon: Wrench, title: "Diagnostic Troubleshooting", desc: "Methodical diagnostic processes and guided resolution steps that solve problems quickly, reduce repeat contacts, and build a growing knowledge base of documented solutions." },
  { icon: Laptop, title: "Software & Application Support", desc: "Installation guidance, configuration help, bug triage, user training, and ongoing application support for SaaS platforms, desktop software, mobile apps, and custom-built tools." },
  { icon: HardDrive, title: "Hardware & Device Support", desc: "Device troubleshooting, warranty coordination, RMA processing, setup assistance, and remote diagnostics for consumer electronics, enterprise equipment, and IoT devices." },
  { icon: Monitor, title: "IT Help Desk Services", desc: "Full-service internal IT support — password resets, network troubleshooting, VPN configuration, system access management, and endpoint support for your distributed workforce." },
  { icon: BookOpen, title: "Knowledge Base & Documentation", desc: "Continuous documentation of solutions, troubleshooting guides, and FAQs that improve self-service deflection rates and reduce ticket volume by up to 30% over time." },
];

const processSteps = [
  { step: "01", title: "Technical Assessment & Scoping", desc: "We audit your current support operations, analyze ticket patterns, map product complexity, and identify the optimal tier structure and staffing model for your needs." },
  { step: "02", title: "Product Training & Certification", desc: "Agents complete intensive hands-on training with your products, systems, and tools — including lab environments, documentation review, and technical certification exams before going live." },
  { step: "03", title: "System Integration & Pilot", desc: "We integrate with your ticketing system, remote access tools, and monitoring platforms. A controlled pilot validates escalation paths, SLAs, and resolution quality before full-scale launch." },
  { step: "04", title: "Continuous Improvement & Reporting", desc: "Weekly ticket analysis, knowledge base updates, agent coaching, and monthly business reviews ensure resolution rates improve and cost per ticket decreases over time." },
];

const industries = [
  { name: "Technology & SaaS", desc: "Application support, bug triage, feature guidance, API troubleshooting, and onboarding assistance for software companies from startups to enterprise.", href: "/industries/saas-technology-support" },
  { name: "Healthcare", desc: "HIPAA-compliant technical support for EHR systems, medical devices, telehealth platforms, and healthcare IT infrastructure with 24/7 availability.", href: "/industries/healthcare-call-center-services" },
  { name: "Financial Services", desc: "PCI-compliant IT help desk for banking platforms, trading systems, fintech applications, and compliance-critical financial infrastructure.", href: "/industries/financial-services-call-center" },
  { name: "Ecommerce & Retail", desc: "Platform troubleshooting, POS system support, payment gateway issues, inventory system assistance, and storefront technical support for retail brands.", href: "/industries/ecommerce-customer-service-outsourcing" },
  { name: "Manufacturing", desc: "Industrial IoT device support, ERP system assistance, production line technology troubleshooting, and equipment monitoring for manufacturers.", href: "/industries" },
  { name: "Insurance", desc: "Claims platform support, underwriting system assistance, agent portal troubleshooting, and policy management technology support for carriers.", href: "/industries/insurance-call-center-outsourcing" },
];

const comparisonData = [
  { feature: "Time to Full Staffing", inHouse: "3-6 months hiring", outsourced: "3-4 weeks" },
  { feature: "Cost Per Ticket", inHouse: "$22-$40", outsourced: "40-50% less" },
  { feature: "First-Call Resolution", inHouse: "Varies widely", outsourced: "82%+ guaranteed" },
  { feature: "24/7 Coverage", inHouse: "3 shifts + weekends", outsourced: "Included standard" },
  { feature: "Product Training", inHouse: "Months of ramp-up", outsourced: "Certified in 2-3 weeks" },
  { feature: "Tier Escalation", inHouse: "Ad hoc, unstructured", outsourced: "Documented SLA-backed tiers" },
  { feature: "Knowledge Base", inHouse: "Often neglected", outsourced: "Maintained and growing" },
  { feature: "Flexibility", inHouse: "Fixed headcount costs", outsourced: "Scale by ticket volume" },
];

const faqs = [
  { question: "What levels of technical support outsourcing do you offer?", answer: "We provide Tier 1 (basic troubleshooting, password resets, FAQ-based support, known issue resolution), Tier 2 (advanced diagnostics, configuration, application-level debugging, and complex workflow support), and Tier 3 (deep technical investigation, root cause analysis, and engineering-level escalation). Each tier has dedicated specialists with relevant certifications and experience." },
  { question: "How do you train agents on our specific technology products?", answer: "We run intensive product training that includes hands-on lab environments mirroring your production systems, documentation deep-dives, certification testing, recorded call reviews, and live call shadowing with your existing team. Agents do not take live tickets until they pass technical assessments. We also maintain living knowledge bases that are updated with every product release, patch, and known issue." },
  { question: "Can you provide 24/7 technical support coverage?", answer: "Yes. We offer round-the-clock technical support 24/7/365 with US-based agents staffed across multiple time zones. This ensures your customers, employees, and partners always reach a live, knowledgeable technician regardless of when issues arise — including nights, weekends, and holidays." },
  { question: "How does outsourcing technical support reduce costs?", answer: "You eliminate recruiting, training, benefits, facilities, and technology infrastructure costs for in-house technical staff. Our shared-resource and dedicated agent models offer flexibility to match your volume. Most clients see 40-50% lower cost per ticket while maintaining or improving resolution quality, and you avoid the hidden costs of turnover and retraining." },
  { question: "What ticketing and remote support tools do you work with?", answer: "Our agents are experienced with major ticketing platforms (Zendesk, ServiceNow, Freshdesk, Jira Service Management, ConnectWise), remote access tools (TeamViewer, LogMeIn, Splashtop, BeyondTrust), monitoring systems (Datadog, PagerDuty, Nagios), and CRM platforms. We adapt to your existing toolset rather than requiring you to change." },
  { question: "How do you handle after-hours and weekend technical emergencies?", answer: "Our 24/7 support model means there are no after-hours — every hour is covered. For critical issues, we have dedicated escalation paths with guaranteed response times defined in your SLA. P1 (critical) issues receive immediate agent assignment, and your internal team is notified simultaneously via your preferred alert channels." },
  { question: "What is the typical first-call resolution rate for outsourced technical support?", answer: "Our technical support teams consistently achieve 80-85% first-call resolution rates across client programs. This is achieved through comprehensive agent training, well-maintained knowledge bases, access to diagnostic tools, and structured escalation procedures. FCR rates typically improve 3-5 percentage points in the first 90 days as our knowledge base matures." },
];

export default function TechnicalSupportContent({ seoContent }: { seoContent?: SEOPattern[] } = {}) {
  return (
    <>
      {/* HERO — Image bg + form */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <Image src="/images/cc-agent-night.jpg" alt="Technical Support Outsourcing USA - Contact Center USA" fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[80vh] pt-40 max-w-[1536px] items-center px-5 py-28 lg:px-8">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90 backdrop-blur-sm">
                <Wrench className="h-4 w-4" /> Technical Support Outsourcing
              </span>
              <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[52px]">
                Expert <span className="text-red">Technical Support</span> Outsourcing — US-Based Technicians
              </h1>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/70">
                Tier 1-3 technical support from trained US-based technicians who resolve issues fast, reduce escalations, and keep your customers productive — 24/7/365.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 82% First-Call Resolution</div>
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 50% Lower Cost Per Ticket</div>
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> No Long-Term Contracts</div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <HeroContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-navy py-12">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              { value: 82, suffix: "%", label: "First-Call Resolution" },
              { value: 50, suffix: "%", label: "Lower Cost Per Ticket" },
              { value: 45, suffix: "%", label: "Fewer Escalations" },
              { value: 4.8, suffix: "/5", label: "Agent Quality Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white"><AnimatedCounter target={stat.value} suffix={stat.suffix} /></div>
                <div className="mt-1 text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS TECHNICAL SUPPORT OUTSOURCING — Long-form content */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">What is Technical Support Outsourcing?</span>
              <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-navy sm:text-4xl">
                Resolve Issues Faster, <span className="text-red">Retain</span> More Customers
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
                Technical support outsourcing means partnering with a <strong>specialized provider to handle your technology-related customer and employee support</strong> — from basic troubleshooting and password resets to advanced software debugging and hardware diagnostics. Instead of hiring, training, and managing an internal tech support team, you leverage a partner&apos;s skilled technicians, proven processes, and enterprise tools.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                At Contact Center USA, our technical support agents are <strong>certified on your specific products and systems</strong>. We don&apos;t just read from scripts — our technicians understand how your technology works, diagnose root causes methodically, and resolve issues with the expertise of an in-house engineering team. Our structured Tier 1-2-3 model ensures every ticket reaches the right level of expertise.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                The results speak for themselves: clients using our IT help desk outsourcing see <strong>40-50% lower cost per ticket</strong>, <strong>82% first-call resolution rates</strong>, and <strong>45% fewer escalations</strong>. Combine with our <Link href="/solutions/customer-service-outsourcing" className="text-red font-semibold hover:underline">customer service outsourcing</Link> for non-technical inquiries, or add <Link href="/services/ai-call-center-automation" className="text-red font-semibold hover:underline">AI automation</Link> for intelligent self-service.
              </p>

              <div className="mt-8 space-y-3">
                {["82% first-call resolution with certified technicians", "Structured Tier 1-2-3 escalation with SLA guarantees", "24/7/365 coverage for customers in every time zone", "Continuous knowledge base improvement reduces future tickets"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red" />
                    <span className="text-[15px] text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image src="/images/cc-agent-monitor.jpg" alt="Technical support specialists at Contact Center USA" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-red px-6 py-5 text-white shadow-xl">
                <div className="text-3xl font-bold">82%</div>
                <div className="text-sm text-white/80">First-Call Resolution</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES — 6 cards */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-red/[0.02] py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Our Capabilities</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Technical Support <span className="text-red">Solutions</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">From help desk basics to advanced engineering escalations, our technical support covers the full spectrum of your technology needs.</p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="group rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red/10 text-red transition-all group-hover:bg-red group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — 4 steps */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Our Process</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">How Technical Support Outsourcing <span className="text-red">Works</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">From assessment to continuous improvement, we build a technical support program that resolves issues faster and costs less.</p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red text-xl font-bold text-white shadow-lg">{step.step}</div>
                <h3 className="mt-6 text-lg font-bold text-navy">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Cost Comparison</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Technical Support: <span className="text-red">In-House vs. Outsourced</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">See why technology companies choose outsourced technical support over hiring and managing in-house tech teams.</p>
          </div>
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

      {/* INDUSTRIES THAT BENEFIT */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Industries</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Industries That Rely on <span className="text-red">Technical Support Outsourcing</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">Our technical support solutions are built for the complexity, compliance requirements, and product-specific needs of every major industry.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <div key={i}>
                <Link href={ind.href} className="group block rounded-2xl border border-gray-100 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-xl">
                  <h3 className="text-lg font-bold text-navy">{ind.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">{ind.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-red transition-all group-hover:gap-3">Learn More <ArrowRight className="h-4 w-4" /></div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Client Success</span>
              <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">What Our Clients <span className="text-red">Say</span></h2>
              <div className="mt-10 flex items-center gap-10">
                <div>
                  <div className="text-4xl font-bold text-navy">4.8/5</div>
                  <div className="mt-1 flex items-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}</div>
                  <div className="mt-1 text-sm text-gray-600">Agent Quality Rating</div>
                </div>
                <div className="h-16 w-px bg-gray-200" />
                <div>
                  <div className="text-4xl font-bold text-navy">50%</div>
                  <div className="mt-1 text-sm text-gray-600">Lower Cost Per Ticket</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-6 -top-6 h-full w-full rounded-3xl bg-gray-50" />
              <div className="relative z-10 rounded-2xl bg-white p-10 shadow-xl">
                <div className="absolute -top-5 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-red text-2xl font-bold text-white shadow-lg">&ldquo;</div>
                <div className="flex items-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />)}</div>
                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  Outsourcing our Tier 1 and Tier 2 support to Contact Center USA cut our cost per ticket in half while improving first-call resolution to 82%. Their agents genuinely understand our software platform and resolve issues like in-house engineers. Our internal team can now focus on product development instead of support queues.
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red to-red-dark text-lg font-bold text-white">TP</div>
                  <div>
                    <div className="font-bold text-navy">Thomas Park</div>
                    <div className="text-sm text-gray-600">CTO, A Fast-Growing SaaS Platform</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
            Related <span className="text-red">Services</span>
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { title: "Customer Service", desc: "Complement technical support with general customer service for non-technical inquiries, account management, and retention programs.", href: "/solutions/customer-service-outsourcing" },
              { title: "AI Automation", desc: "Add intelligent chatbots and automated troubleshooting to deflect common tickets and accelerate resolution for known issues.", href: "/services/ai-call-center-automation" },
              { title: "Inbound Services", desc: "Professional call answering and help desk support as the front door to your technical support operation.", href: "/solutions/inbound-call-center-services" },
            ].map((item, i) => (
              <div key={i}>
                <Link href={item.href} className="group block rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">{item.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-red transition-all group-hover:gap-3">Learn More <ArrowRight className="h-4 w-4" /></div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {/* SEO CONTENT — keyword-rich patterned sections */}
      {seoContent && <SEOContentSection sections={seoContent} />}

      <PageFAQ heading="Technical Support Outsourcing FAQ" faqs={faqs} />

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Upgrade Your Technical Support?</h2>
              <p className="mt-3 text-white/60">See how outsourced technical support can cut costs by 50% and improve resolution rates for your business.</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-red-dark">
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
