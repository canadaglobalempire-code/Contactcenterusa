import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Users,
  FileSignature,
  Clock,
  ShieldCheck,
  MessageSquareText,
  BarChart3,
  Heart,
  Landmark,
  ShoppingCart,
  Store,
  Monitor,
  Plane,
  Car,
  Award,
  Lock,
  BadgeCheck,
  CheckCircle2,
} from "lucide-react";
import { pageMeta } from "@/lib/seo-config";
import { LeadCTALink } from "@/components/shared/LeadCTALink";

const title = "About Contact Center USA | US-Based Call Center Partner";
const description =
  "Learn about Contact Center USA, a US-based call center outsourcing partner for inbound support, outbound calling, customer care, technical support, and BPO.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  ...pageMeta(title, description, "/about"),
};

const differentiators = [
  {
    icon: Users,
    title: "100% US-Based Agents",
    desc: "Every agent is located in the United States. No offshore outsourcing. No language barriers. Your customers always speak to a native English speaker.",
    href: "/solutions/inbound-call-center-services",
  },
  {
    icon: FileSignature,
    title: "No Long-Term Contracts",
    desc: "Month-to-month flexibility. Scale up during peak seasons, scale down when you don't need us. No termination fees, no lock-in periods.",
    href: "/solutions/customer-service-outsourcing",
  },
  {
    icon: Clock,
    title: "24/7/365 Coverage",
    desc: "Round-the-clock support including nights, weekends, and holidays. Your business never sleeps and neither do we.",
    href: "/services/virtual-remote-support",
  },
  {
    icon: ShieldCheck,
    title: "HIPAA, PCI & SOC 2 Certified",
    desc: "Enterprise-grade compliance for healthcare, finance, and regulated industries. We take data security as seriously as you do.",
    href: "/services/fraud-prevention-cyber-security",
  },
  {
    icon: MessageSquareText,
    title: "Custom Scripting & Brand Voice",
    desc: "Agents trained on your brand guidelines, product knowledge, and tone of voice. We sound like you, not a generic call center.",
    href: "/solutions/customer-experience-management",
  },
  {
    icon: BarChart3,
    title: "Real-Time Reporting & Analytics",
    desc: "Live dashboards, call recordings, QA scores, and detailed monthly reports. Full transparency into every interaction.",
    href: "/services/customer-experience-analytics",
  },
];

const industries = [
  {
    icon: Heart,
    name: "Healthcare",
    href: "/industries/healthcare-call-center-services",
    color: "bg-rose-100 text-rose-600",
  },
  {
    icon: ShieldCheck,
    name: "Insurance",
    href: "/industries/insurance-call-center-outsourcing",
    color: "bg-teal-100 text-teal-600",
  },
  {
    icon: Landmark,
    name: "Banking & Finance",
    href: "/industries/banking-financial-services-call-center",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: ShoppingCart,
    name: "E-Commerce",
    href: "/industries/ecommerce-customer-service-outsourcing",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: Store,
    name: "Retail",
    href: "/industries/retail-call-center-services",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: Monitor,
    name: "SaaS & Technology",
    href: "/industries/saas-technology-support",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Plane,
    name: "Travel & Hospitality",
    href: "/industries/travel-hospitality-call-center",
    color: "bg-sky-100 text-sky-600",
  },
  {
    icon: Car,
    name: "Automotive",
    href: "/industries/automotive-call-center-services",
    color: "bg-orange-100 text-orange-600",
  },
];

const certifications = [
  {
    icon: Heart,
    name: "HIPAA Compliant",
    desc: "Full compliance with the Health Insurance Portability and Accountability Act, ensuring protected health information is handled with the highest standards of privacy and security.",
  },
  {
    icon: Lock,
    name: "PCI DSS Level 1",
    desc: "The highest level of Payment Card Industry Data Security Standard certification, guaranteeing safe processing and storage of credit card data and sensitive financial information.",
  },
  {
    icon: BadgeCheck,
    name: "SOC 2 Type II",
    desc: "Rigorous third-party audit verifying our controls for security, availability, processing integrity, confidentiality, and privacy across all service operations.",
  },
  {
    icon: Award,
    name: "ISO 27001",
    desc: "International standard for information security management, demonstrating our systematic approach to managing sensitive company and customer data securely.",
  },
];

const milestones = [
  { year: "1999", event: "Founded as a small inbound support center in Southern California with a team of 10 agents handling customer service for local businesses." },
  { year: "2003", event: "Expanded to our second location in Dallas, Texas, growing to 75 agents and adding outbound calling and lead generation services." },
  { year: "2007", event: "Survived the dot-com bust and emerged stronger, opening our Chicago operations center and crossing the 200-agent milestone." },
  { year: "2010", event: "Navigated the 2008 financial crisis by pivoting to healthcare and financial services support, earning our first HIPAA and PCI certifications." },
  { year: "2015", event: "Launched omnichannel support capabilities, adding live chat, SMS, and email to our voice services and expanding to Miami and Phoenix." },
  { year: "2019", event: "Crossed 500 agents across five US locations, achieved SOC 2 Type II certification, and served over 300 active client accounts." },
  { year: "2023", event: "Introduced AI-powered call routing and chatbot solutions, integrating machine learning to improve first-call resolution and reduce wait times." },
  { year: "2025", event: "Achieved ISO 27001 certification and expanded AI capabilities, serving businesses across healthcare, finance, insurance, SaaS, retail, and more." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy pt-40 pb-20 lg:pb-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative mx-auto max-w-[1536px] px-5 text-center lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/70">
            About Contact Center USA
          </span>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            About Contact Center USA | 25+ Years of{" "}
            <span className="text-red">US-Based Call Center Outsourcing</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/60">
            Founded in 1999, Contact Center USA is one of the nation&apos;s oldest and most trusted US-based call center outsourcing providers. We deliver HIPAA-compliant, PCI-certified inbound and outbound support for businesses across every industry — no contracts, no offshore agents, no hidden fees.
          </p>
          <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-4">
            <LeadCTALink
              ctaLocation="about_hero_cta"
              leadOffer="About page consultation quote"
              className="inline-flex items-center gap-2 rounded-lg bg-red px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-red/25 transition-all hover:bg-red-dark hover:shadow-red/35"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </LeadCTALink>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-white/10"
            >
              View Our Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-navy/95 py-12">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              { value: "500+", label: "US-Based Agents" },
              { value: "5", label: "US Locations" },
              { value: "25+", label: "Years in Business" },
              { value: "24/7/365", label: "Availability" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white sm:text-4xl">{stat.value}</div>
                <div className="mt-2 text-sm font-medium text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <video
                preload="metadata"
                autoPlay
                loop
                muted
                playsInline
                className="aspect-[4/3] w-full object-cover"
              >
                <source src="/images/video-3.mp4" type="video/mp4" />
              </video>
            </div>

            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">
                Our Story
              </span>
              <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">
                From a Small Office in Southern California to{" "}
                <span className="text-red">a National Leader</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                Contact Center USA was founded in 1999 as a small inbound support center in Southern California. What started with just 10 agents in a single office has grown into one of the nation&apos;s most respected US-based call center outsourcing providers, with over 500 agents operating across five strategically located centers in Los Angeles, Dallas, Chicago, Miami, and Phoenix.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Our journey has been defined by resilience and adaptation. When the dot-com bubble burst in the early 2000s, many of our competitors shuttered their doors. We doubled down on quality, investing in agent training and building deeper relationships with the clients who stayed. That commitment to excellence carried us through the 2008 financial crisis as well — a period where we pivoted our service offerings to support the healthcare and financial services industries that needed reliable customer communication more than ever.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                In 2015, we recognized that the customer experience landscape was shifting rapidly. Phone calls were no longer enough — customers wanted to reach brands through live chat, SMS text messaging, email, and social media. We made a significant investment in{" "}
                <Link href="/services/omnichannel-contact-center-solutions" className="font-semibold text-red hover:text-red-dark">
                  omnichannel contact center solutions
                </Link>
                , building a unified platform that allows seamless channel switching and consistent customer experiences regardless of how a customer chooses to connect.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Then came 2020 and the COVID-19 pandemic. While many outsourced call centers struggled with remote work transitions and quality degradation, our investment in cloud-based infrastructure and our established{" "}
                <Link href="/services/virtual-remote-support" className="font-semibold text-red hover:text-red-dark">
                  virtual remote support
                </Link>{" "}
                capabilities allowed us to maintain service continuity without missing a beat. Our clients experienced zero downtime during one of the most challenging periods in modern business history.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                In 2023, we launched our{" "}
                <Link href="/services/ai-call-center-automation" className="font-semibold text-red hover:text-red-dark">
                  AI-powered call center automation
                </Link>{" "}
                solutions, integrating intelligent call routing, predictive analytics, and conversational chatbot technology to enhance — not replace — our human agents. This hybrid approach has improved first-call resolution rates by 22% while reducing average wait times by 35%.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Today, Contact Center USA holds the industry&apos;s most demanding certifications: we are SOC 2 Type II certified, fully HIPAA compliant, PCI DSS Level 1 certified, and ISO 27001 certified. These aren&apos;t just badges on our website — they represent a culture of compliance and security that permeates every level of our organization, from our onboarding processes to our daily operations.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                We serve over 300 active client accounts across healthcare, insurance, banking, e-commerce, retail, SaaS, travel, and automotive industries. Our agents undergo rigorous training programs — typically four weeks or more — before they take their first live call. We develop custom scripts, brand voice guidelines, and product knowledge bases for every client, ensuring that when a customer calls your company, they feel like they&apos;re talking to your company.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Explore our{" "}
                <Link href="/about/company-history" className="font-semibold text-red hover:text-red-dark">
                  full company history
                </Link>{" "}
                or learn about our{" "}
                <Link href="/services/live-chat-outsourcing" className="font-semibold text-red hover:text-red-dark">
                  live chat outsourcing
                </Link>{" "}
                and other service offerings. At Contact Center USA, we believe that great customer experiences start with great people — and we&apos;ve been proving that for over 25 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">
              Our Journey
            </span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">
              Key <span className="text-red">Milestones</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">
              Over two decades of growth, resilience, and innovation in US-based call center outsourcing.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((milestone) => (
              <div
                key={milestone.year}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="text-2xl font-bold text-red">{milestone.year}</div>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">{milestone.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">
              Why Choose Us
            </span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">
              What Sets <span className="text-red">Contact Center USA</span> Apart
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">
              We deliver the quality, compliance, and flexibility that businesses demand — all from agents based right here in the United States.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((diff) => {
              const Icon = diff.icon;
              return (
                <Link
                  key={diff.title}
                  href={diff.href}
                  className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all hover:border-red/20 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red/10 text-red transition-all group-hover:bg-red group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy">{diff.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-700">{diff.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-red transition-colors group-hover:text-red-dark">
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="relative overflow-hidden bg-navy py-20 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/70">
              Industries We Serve
            </span>
            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              Specialized Support for{" "}
              <span className="text-red">Every Industry</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/50">
              Our agents receive industry-specific training to deliver knowledgeable, compliant, and brand-aligned customer experiences.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <Link
                  key={industry.name}
                  href={industry.href}
                  className="group flex h-full flex-col rounded-2xl bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${industry.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-white">{industry.name}</h3>
                  <div className="mt-auto flex items-center gap-1.5 pt-4 text-sm font-semibold text-red">
                    Explore
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">
              Certifications & Compliance
            </span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">
              Enterprise-Grade <span className="text-red">Security & Compliance</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">
              We maintain the highest industry certifications to protect your data and ensure regulatory compliance across every interaction.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => {
              const Icon = cert.icon;
              return (
                <div
                  key={cert.name}
                  className="rounded-2xl border border-gray-200 bg-white p-7 text-center shadow-sm transition-all hover:shadow-md"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red/10 text-red">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy">{cert.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-700">{cert.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/new-flag.jpg"
            alt="American flag background representing US-based call center outsourcing services"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1536px] px-5 py-20 text-center lg:px-8 lg:py-28">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Partner with a <span className="text-red">Proven US Call Center</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Get a free, no-obligation consultation and discover why hundreds of businesses trust Contact Center USA with their customer experience.
          </p>
          <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-4">
            <LeadCTALink
              ctaLocation="about_bottom_cta_quote"
              leadOffer="About page bottom quote"
              className="inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-red-dark"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </LeadCTALink>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-white/10"
            >
              View Our Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
