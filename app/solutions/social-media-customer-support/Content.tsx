"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  Share2,
  MessageCircle,
  Users,
  AlertTriangle,
  TrendingUp,
  Eye,
} from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { PageFAQ } from "@/components/shared/PageFAQ";
import { siteConfig } from "@/lib/seo-config";

const features = [
  { icon: Eye, title: "24/7 Social Monitoring", desc: "Real-time monitoring of brand mentions, hashtags, competitor activity, and industry conversations across Facebook, X, Instagram, LinkedIn, TikTok, and Reddit — so nothing slips through the cracks." },
  { icon: MessageCircle, title: "Response Management", desc: "Timely, on-brand responses to customer comments, questions, DMs, and complaints on every social platform — maintaining your brand voice at scale while resolving issues before they escalate." },
  { icon: Users, title: "Community Engagement", desc: "Active community management that sparks conversations, nurtures followers, highlights user-generated content, and transforms casual followers into passionate brand advocates." },
  { icon: AlertTriangle, title: "Crisis Response & Containment", desc: "Rapid response protocols with tiered escalation paths for negative viral content, PR incidents, and brand threats — containing damage within minutes, not hours, before it spreads." },
  { icon: Star, title: "Reputation Management", desc: "Review monitoring, sentiment analysis, and proactive reputation defense across Google Reviews, Yelp, BBB, Trustpilot, and industry-specific platforms to protect your brand perception." },
  { icon: TrendingUp, title: "Social Analytics & Insights", desc: "Weekly and monthly reporting covering engagement metrics, sentiment trends, response times, competitor benchmarks, and actionable recommendations that inform your entire social strategy." },
];

const processSteps = [
  { step: "01", title: "Brand Voice Discovery", desc: "We immerse ourselves in your brand — studying your tone, vocabulary, visual style, and customer personas to build detailed response guidelines that sound authentically you." },
  { step: "02", title: "Platform Setup & Integration", desc: "We connect to your social accounts, CRM, and help desk tools via secure APIs. Monitoring dashboards, escalation workflows, and response templates are configured for every platform." },
  { step: "03", title: "Team Training & Launch", desc: "Dedicated social media agents complete brand voice certification, crisis response drills, and platform-specific training before handling their first customer interaction on your behalf." },
  { step: "04", title: "Optimization & Reporting", desc: "Continuous performance tracking with weekly reports, monthly strategy reviews, and A/B testing of response approaches to keep engagement rates climbing and sentiment scores strong." },
];

const industries = [
  { name: "Ecommerce & Retail", desc: "Product complaint resolution, order inquiry responses, review management, and UGC engagement across Instagram, Facebook, and TikTok for DTC and retail brands.", href: "/industries/ecommerce-customer-service-outsourcing" },
  { name: "Hospitality & Travel", desc: "Real-time guest complaint handling, booking inquiry responses, review management, and destination engagement across TripAdvisor, Google, and social platforms.", href: "/industries/hospitality" },
  { name: "Healthcare", desc: "HIPAA-compliant social media responses, patient review management, health campaign engagement, and appointment inquiry routing for healthcare providers.", href: "/industries/healthcare-call-center-services" },
  { name: "Financial Services", desc: "Compliant social media responses for banks, fintech, and insurance companies — handling account inquiries, fraud reports, and regulatory-sensitive conversations.", href: "/industries/financial-services-call-center" },
  { name: "Technology & SaaS", desc: "Technical support triage via social channels, product feedback collection, community forum management, and developer relations for software companies.", href: "/industries/saas-technology-support" },
  { name: "Food & Beverage", desc: "Brand engagement, influencer interaction management, complaint resolution, and location-specific social support for restaurant chains and CPG brands.", href: "/industries/restaurant" },
];

const comparisonData = [
  { feature: "Response Time", inHouse: "Hours to days", outsourced: "Under 5 minutes" },
  { feature: "Coverage Hours", inHouse: "Business hours only", outsourced: "24/7/365" },
  { feature: "Platform Expertise", inHouse: "1-2 platforms", outsourced: "All major platforms" },
  { feature: "Crisis Readiness", inHouse: "Ad-hoc response", outsourced: "Trained protocols" },
  { feature: "Staffing Costs", inHouse: "$50K-$75K per SMM", outsourced: "40% lower" },
  { feature: "Scalability", inHouse: "Fixed headcount", outsourced: "Flex with volume" },
  { feature: "Analytics Depth", inHouse: "Basic metrics", outsourced: "Full sentiment + competitive" },
  { feature: "Brand Consistency", inHouse: "Varies by employee", outsourced: "Certified voice guidelines" },
];

const faqs = [
  { question: "What social media customer support services do you provide?", answer: "We provide comprehensive social media management outsourcing including 24/7 real-time monitoring, response management, community engagement, crisis response, brand reputation management, review monitoring, and social analytics across all major platforms — Facebook, X (Twitter), Instagram, LinkedIn, TikTok, Reddit, YouTube, and industry-specific forums." },
  { question: "How fast do you respond to social media inquiries and complaints?", answer: "Our average response time is under 5 minutes during monitored hours, and we provide full 24/7/365 coverage so no comment, DM, or mention goes unaddressed — even at 2 AM on a holiday. Fast response times are critical for customer satisfaction, brand perception, and platform algorithm favorability that determines your organic reach." },
  { question: "Can your team maintain our brand voice on social media?", answer: "Absolutely. We develop detailed brand voice guidelines during onboarding — covering tone, vocabulary, emoji usage, approved response templates, humor boundaries, and escalation triggers. Our agents complete brand voice certification before they handle their first interaction, and native-speaking supervisors monitor every response for consistency." },
  { question: "How do you handle social media crises and negative viral content?", answer: "We have established crisis response protocols with tiered escalation paths. Tier 1 (routine complaints) are handled immediately by frontline agents. Tier 2 (potential PR risk) are escalated to senior agents with crisis training. Tier 3 (viral/media threats) trigger immediate notification to your PR team with recommended response strategies and real-time situation monitoring." },
  { question: "What social media analytics and reporting do you provide?", answer: "We deliver weekly and monthly reports covering engagement rates, sentiment analysis, response time metrics, trending topics, share of voice, competitive benchmarks, follower growth, top-performing content themes, and actionable recommendations. Reports are customized to your KPIs and delivered in executive-ready format with clear visualizations." },
  { question: "How does social media management outsourcing save money?", answer: "Hiring a single in-house social media manager costs $50K-$75K annually plus benefits, covers only business hours, and handles only 1-2 platforms effectively. Contact Center USA provides a full team with 24/7 coverage across all platforms, crisis readiness, and advanced analytics for 40% less — and you can scale up or down based on campaign needs without hiring or layoffs." },
  { question: "Do you support social media customer support for regulated industries?", answer: "Yes. We provide compliant social media support for healthcare (HIPAA), financial services (FINRA/SEC), and government agencies. Our agents are trained on industry-specific disclosure requirements, prohibited claims, privacy protocols, and regulatory response guidelines. Every response is logged and auditable for compliance review." },
];

export default function SocialMediaContent() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <Image src="/images/cc-agent-laptop.jpg" alt="Social Media Customer Support - Contact Center USA" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[80vh] pt-40 max-w-[1536px] items-center px-5 py-28 lg:px-8">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-5">
            <motion.div className="lg:col-span-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90 backdrop-blur-sm">
                <Share2 className="h-4 w-4" /> Social Media Support
              </span>
              <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[52px]">
                Social Media Customer Support <span className="text-red">& Management</span> That Protects Your Brand
              </h1>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/70">
                24/7 social media monitoring, response management, and crisis containment by dedicated US-based teams — protecting your brand reputation while boosting engagement by 40%.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> Under 5 Min Response</div>
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 24/7 Monitoring</div>
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> Crisis Response Ready</div>
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
              { value: 5, suffix: "min", label: "Avg Response Time" },
              { value: 40, suffix: "%", label: "Engagement Increase" },
              { value: 95, suffix: "%", label: "Sentiment Recovery" },
              { value: 24, suffix: "/7", label: "Social Monitoring" },
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
              <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Why Social Media Outsourcing?</span>
              <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-navy sm:text-4xl">
                Your Brand Is <span className="text-red">Always On</span> — Your Support Should Be Too
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
                Social media never sleeps. A customer complaint posted at 2 AM can go viral by breakfast, and a positive review left unacknowledged is a missed opportunity to build loyalty. <strong>Your brand&apos;s social presence is a 24/7 customer service channel</strong> whether you treat it like one or not.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                Contact Center USA provides <strong>dedicated social media management outsourcing</strong> teams that monitor, engage, and protect your brand across every platform around the clock. Our agents are not generic moderators — they are <strong>brand-certified specialists</strong> trained on your voice, products, and escalation protocols who respond to every comment, DM, and mention as if they were your own team.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                The result? Businesses using our <Link href="/solutions/customer-service-outsourcing" className="text-red font-semibold hover:underline">social media customer support</Link> see a <strong>40% increase in engagement</strong>, <strong>95% sentiment recovery on negative interactions</strong>, and <strong>under-5-minute average response times</strong> — all while spending 40% less than hiring an in-house social media team.
              </p>

              <div className="mt-8 space-y-3">
                {["24/7/365 monitoring across all major platforms", "Brand-certified agents who sound like your team", "Crisis containment within minutes, not hours", "Full analytics with sentiment and competitive insights"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red" />
                    <span className="text-[15px] text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image src="/images/cc-woman-typing.jpg" alt="Social media management team at Contact Center USA" fill className="object-cover" />
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="absolute -bottom-6 -right-6 rounded-2xl bg-red px-6 py-5 text-white shadow-xl">
                <div className="text-3xl font-bold">40%</div>
                <div className="text-sm text-white/80">More Engagement</div>
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
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Social Media Management <span className="text-red">Services</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">From round-the-clock monitoring to crisis containment, our dedicated teams protect and grow your brand presence on every platform.</p>
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
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">How Social Media Outsourcing <span className="text-red">Works</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">From brand voice discovery to performance optimization, we build social media teams that feel like your own.</p>
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
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">In-House vs. <span className="text-red">Outsourced</span> Social Media Support</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">See why brands choose Contact Center USA for social media management over building internal social support teams.</p>
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
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Industries That Need <span className="text-red">Social Media Support</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">Our social media management services are tailored to the compliance, voice, and engagement requirements of every major industry.</p>
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
                  <div className="text-4xl font-bold text-navy">5 min</div>
                  <div className="mt-1 flex items-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}</div>
                  <div className="mt-1 text-sm text-gray-600">Avg Response Time</div>
                </div>
                <div className="h-16 w-px bg-gray-200" />
                <div>
                  <div className="text-4xl font-bold text-navy">40%</div>
                  <div className="mt-1 text-sm text-gray-600">Engagement Increase</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="absolute -right-6 -top-6 h-full w-full rounded-3xl bg-gray-50" />
              <div className="relative z-10 rounded-2xl bg-white p-10 shadow-xl">
                <div className="absolute -top-5 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-red text-2xl font-bold text-white shadow-lg">&ldquo;</div>
                <div className="flex items-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />)}</div>
                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  Contact Center USA&apos;s social media team caught a potential PR crisis on X at 2 AM and had it contained within 15 minutes. Their 24/7 monitoring and lightning-fast response times have increased our social engagement by 40% and protected our brand through two product recalls. They&apos;re worth every penny.
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red to-red-dark text-lg font-bold text-white">AF</div>
                  <div>
                    <div className="font-bold text-navy">Angela Foster</div>
                    <div className="text-sm text-gray-600">Brand Manager, Verde Organic Foods</div>
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
              { title: "Customer Service", desc: "Extend social media support with comprehensive phone, email, and chat customer service for a unified experience.", href: "/solutions/customer-service-outsourcing" },
              { title: "Multilingual Services", desc: "Engage diverse audiences on social media with native-speaking agents in Spanish and 20+ languages.", href: "/solutions/multilingual-call-center-services" },
              { title: "AI Automation", desc: "Automate initial social media responses, sentiment routing, and FAQ handling with intelligent AI chatbots.", href: "/services/ai-call-center-automation" },
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
      <PageFAQ heading="Social Media Support FAQ" faqs={faqs} />

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Master Your Social Presence?</h2>
              <p className="mt-3 text-white/60">See how 24/7 social media management outsourcing can protect your brand, boost engagement, and turn followers into customers.</p>
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
