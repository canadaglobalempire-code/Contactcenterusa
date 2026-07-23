"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  MapPin,
  Users,
  Clock,
  Shield,
  TrendingUp,
  ArrowRight,
  Phone,
  PhoneIncoming,
  Bot,
  BarChart3,
  Globe,
  MessageSquare,
  FileText,
} from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";
import { PageFAQ } from "@/components/shared/PageFAQ";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SEOContentSection, type SEOPattern } from "@/components/shared/SEOContentSection";

export interface StateMetro {
  name: string;
  /** Optional link to an existing city page */
  href?: string;
  focus: string;
}

interface StatePageTemplateProps {
  state: string;
  stateAbbr: string;
  slug: string;
  /** Timezone label shown in the hero, e.g. "Mountain Time" */
  timezone: string;
  /** 2–3 paragraph description of the state's BPO/outsourcing landscape */
  overview: string[];
  /** Major metros in the state, linked to city pages where one exists */
  metros: StateMetro[];
  /** Industries that concentrate in this state */
  industries: { name: string; href: string; note: string }[];
  faqs: { question: string; answer: string }[];
  seoContent?: SEOPattern[];
  /** Optional cross-link to an existing ranked provider blog post for this state */
  relatedPost?: { label: string; href: string };
}

const services = [
  { icon: PhoneIncoming, title: "Inbound Call Center", desc: "24/7 customer support and help desk", href: "/solutions/inbound-call-center-services" },
  { icon: Phone, title: "Outbound Services", desc: "Sales, lead gen, and follow-ups", href: "/solutions/outbound-call-center-services" },
  { icon: Bot, title: "AI Automation", desc: "Chatbots and smart routing", href: "/services/ai-call-center-automation" },
  { icon: Globe, title: "Omnichannel", desc: "Phone, chat, email, social", href: "/services/omnichannel-contact-center-solutions" },
  { icon: BarChart3, title: "CX Analytics", desc: "Real-time insights and KPIs", href: "/services/customer-experience-analytics" },
  { icon: MessageSquare, title: "Technical Support", desc: "Tier 1-3 help desk", href: "/solutions/technical-support-outsourcing" },
  { icon: Shield, title: "Fraud Prevention", desc: "Compliance and security", href: "/services/fraud-prevention-cyber-security" },
  { icon: FileText, title: "Back Office", desc: "Data entry and processing", href: "/solutions/back-office-outsourcing" },
];

export function StatePageTemplate({
  state,
  stateAbbr,
  slug,
  timezone,
  overview,
  metros,
  industries,
  faqs,
  seoContent,
  relatedPost,
}: StatePageTemplateProps) {
  const url = `https://contactcenterusa.com/locations/${slug}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `BPO & Call Center Services in ${state}`,
            url,
            description: `US-based BPO and call center outsourcing for businesses across ${state}.`,
            serviceType: "Business process outsourcing",
            provider: {
              "@type": "Organization",
              name: "Contact Center USA",
              url: "https://contactcenterusa.com",
            },
            areaServed: {
              "@type": "State",
              name: state,
            },
          }).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" poster="/images/hd-agents-working.jpg">
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-[1536px] items-center px-5 py-28 lg:px-8">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                <MapPin className="h-4 w-4" /> {state}
              </span>
              <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[56px]">
                BPO Companies in <span className="text-red">{state}</span>
              </h1>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/80">
                US-based call center and BPO services for {state} businesses — inbound support,
                outbound sales, back office, and multilingual programs on {timezone}.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 100% US-Based</div>
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 24/7 Support</div>
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> No Contracts</div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <HeroContactForm />
            </div>
          </div>
        </div>
      </section>

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
          { label: state, href: `/locations/${slug}` },
        ]}
      />

      {/* OVERVIEW */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">
                {state} Outsourcing
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-navy sm:text-4xl">
                Call Center Outsourcing for <span className="text-red">{state}</span> Businesses
              </h2>
              {overview.map((para, i) => (
                <p key={i} className="mt-5 text-[16px] leading-relaxed text-gray-700">
                  {para}
                </p>
              ))}
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/hd-agents-pair.jpg"
                alt={`Call center team supporting ${state} businesses`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* METROS */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-red/[0.02] py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Coverage</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">
              {stateAbbr} Metros We <span className="text-red">Support</span>
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {metros.map((metro) => {
              const inner = (
                <>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-red" />
                    <h3 className="text-lg font-bold text-navy">{metro.name}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{metro.focus}</p>
                  {metro.href && (
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-red">
                      View {metro.name} services <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  )}
                </>
              );
              return metro.href ? (
                <Link
                  key={metro.name}
                  href={metro.href}
                  className="group block rounded-2xl border border-gray-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {inner}
                </Link>
              ) : (
                <div key={metro.name} className="rounded-2xl border border-gray-100 bg-white p-7">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Industries</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">
              {state} Industries We <span className="text-red">Serve</span>
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind) => (
              <Link
                key={ind.name}
                href={ind.href}
                className="group block rounded-2xl border border-gray-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-base font-bold text-navy group-hover:text-red">{ind.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{ind.note}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-red/[0.02] py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Our Services</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">
              BPO Services Available in <span className="text-red">{state}</span>
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group block rounded-2xl border border-gray-100 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red/10 text-red transition-all group-hover:bg-red group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-navy">{service.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{service.desc}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative bg-navy py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Why {state} Businesses Choose <span className="text-red">Contact Center USA</span>
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Clock, title: "Timezone-Aligned", desc: `Teams scheduled against ${timezone} business hours, with 24/7 coverage available.` },
              { icon: Users, title: "Statewide Coverage", desc: `Support for businesses across every ${stateAbbr} metro — not just one city.` },
              { icon: Shield, title: "Full Compliance", desc: `HIPAA, PCI-DSS, TCPA, and ${state} state regulations covered.` },
              { icon: TrendingUp, title: "Scale on Demand", desc: "From startup to enterprise — scale up or down with no contracts." },
            ].map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="rounded-2xl bg-white/5 p-7 backdrop-blur-sm transition-all hover:bg-white/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red/20 text-red">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-white">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-white/50">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {seoContent && <SEOContentSection sections={seoContent} />}

      {relatedPost && (
        <section className="bg-gray-50 py-6">
          <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
            <p className="text-sm text-gray-700">
              Want a ranked shortlist?{" "}
              <Link href={relatedPost.href} className="font-semibold text-red hover:underline">
                {relatedPost.label} &rarr;
              </Link>
            </p>
          </div>
        </section>
      )}

      <PageFAQ heading={`${state} BPO & Call Center FAQ`} faqs={faqs} />

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" poster="/images/hd-office-team.jpg">
          <source src="/images/video-3.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 mx-auto max-w-[1536px] px-5 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Looking for a BPO Partner in {state}?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Get a free quote for a US-based team aligned to your {stateAbbr} operating hours,
            compliance requirements, and call volumes.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-red-dark"
            >
              Get a Free {state} Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
