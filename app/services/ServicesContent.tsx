import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Monitor,
  Users,
  BarChart3,
  Globe,
  ShieldCheck,
  MessagesSquare,
  CheckCircle2,
} from "lucide-react";
import { LeadCTALink } from "@/components/shared/LeadCTALink";

const services = [
  {
    title: "A.I. Automation",
    desc: "Leverage intelligent chatbots, virtual assistants, and machine learning to automate workflows and deliver 24/7 customer support.",
    href: "/services/ai-call-center-automation",
    icon: Bot,
    image: "/images/cc-agent-monitor.jpg",
  },
  {
    title: "Contact Center Software",
    desc: "Cloud-based platforms with CRM integration, workforce management, predictive dialers, and real-time performance dashboards.",
    href: "/services/contact-center-software-solutions",
    icon: Monitor,
    image: "/images/cc-team-desk.jpg",
  },
  {
    title: "Customer Acquisition",
    desc: "Strategic lead generation, outbound campaigns, B2B/B2C marketing, appointment setting, and full-cycle sales support.",
    href: "/services/customer-acquisition-outsourcing",
    icon: Users,
    image: "/images/cc-team-collab.jpg",
  },
  {
    title: "CX Analytics",
    desc: "Customer journey analytics, sentiment analysis, quality monitoring, and NPS/CSAT tracking to optimize every interaction.",
    href: "/services/customer-experience-analytics",
    icon: BarChart3,
    image: "/images/cc-management.jpg",
  },
  {
    title: "Digital and CX Services",
    desc: "Digital transformation, social media management, email support, live chat, and mobile app support for modern customers.",
    href: "/services/digital-customer-experience-services",
    icon: Globe,
    image: "/images/cc-agent-laptop.jpg",
  },
  {
    title: "Fraud Prevention & Cyber Security",
    desc: "Identity verification, transaction monitoring, PCI compliance, data protection, and proactive threat detection.",
    href: "/services/fraud-prevention-cyber-security",
    icon: ShieldCheck,
    image: "/images/cc-agent-focus.jpg",
  },
  {
    title: "Omnichannel Solutions",
    desc: "Unified communications with seamless channel switching, chatbot-to-human handoff, and consistent CX across every platform.",
    href: "/services/omnichannel-contact-center-solutions",
    icon: MessagesSquare,
    image: "/images/cc-diverse-team.jpg",
  },
];

const stats = [
  { value: "5,000+", label: "US-Based Agents" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "40%", label: "Avg. Cost Savings" },
  { value: "24/7/365", label: "Availability" },
];

export default function ServicesContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy pt-40 pb-20 lg:pb-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative mx-auto max-w-[1536px] px-5 text-center lg:px-8">
          <div
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/70">
              Our Services
            </span>
            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Complete Call Center Solutions for{" "}
              <span className="text-red">Every Business Need</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
              From AI-powered automation to omnichannel customer engagement, we
              deliver the tools and expertise your business needs to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Intro: Video Left + Content Right */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div
              className="relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="aspect-[4/3] w-full object-cover"
              >
                <source src="/images/video-3.mp4" type="video/mp4" />
              </video>
            </div>

            <div
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">
                Why Contact Center USA
              </span>
              <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">
                End-to-End Services,{" "}
                <span className="text-red">100% US-Based</span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-700">
                We are not just another call center. Contact Center USA provides
                a full spectrum of customer engagement services — all delivered
                by trained professionals right here in the United States.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Scalable teams that grow with your business",
                  "Industry-specific training and compliance",
                  "Cutting-edge technology and AI integration",
                  "Dedicated account management",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] text-gray-700"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-red" />
                    {item}
                  </li>
                ))}
              </ul>
              <LeadCTALink
                ctaLocation="services_index_intro_cta"
                leadOffer="Service consultation quote"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-red px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-red/25 transition-all hover:bg-red-dark hover:shadow-red/35"
              >
                Get a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </LeadCTALink>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">
              What We Offer
            </span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">
              Comprehensive <span className="text-red">Service Suite</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">
              Every solution is designed, staffed, and managed right here in the
              United States — delivering the quality and reliability your
              customers deserve.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                >
                  <Link
                    href={service.href}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:border-red/20 hover:shadow-lg"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 400px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/90 backdrop-blur-sm">
                        <Icon className="h-5 w-5 text-red" />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-lg font-semibold text-navy">
                        {service.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-700">
                        {service.desc}
                      </p>
                      <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-red">
                        Learn More
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="text-center"
              >
                <div className="text-3xl font-bold text-white sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-white/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/new-flag.jpg"
            alt="American flag"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1536px] px-5 py-20 text-center lg:px-8 lg:py-28">
          <div
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Transform Your Customer Experience?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              Let our team of US-based experts build the perfect solution for
              your business. Get a free consultation today.
            </p>
            <LeadCTALink
              ctaLocation="services_index_bottom_cta"
              leadOffer="Service consultation quote"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-red-dark"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </LeadCTALink>
          </div>
        </div>
      </section>
    </>
  );
}
