"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { CheckCircle } from "lucide-react";
import { generateServiceSchema } from "@/lib/schema";
import { HeroContactForm } from "@/components/shared/HeroContactForm";
import { StatsBar } from "@/components/shared/StatsBar";
import { PageTestimonial } from "@/components/shared/PageTestimonial";
import { PageFAQ } from "@/components/shared/PageFAQ";
import { RelatedServices } from "@/components/shared/RelatedServices";
import { PageCTA } from "@/components/shared/PageCTA";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SEOContentSection, type SEOPattern } from "@/components/shared/SEOContentSection";

interface ServicePageTemplateProps {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  description: string;
  features: { title: string; desc: string }[];
  benefits: string[];
  image: string;
  stats?: { value: number; suffix: string; label: string; prefix?: string; decimals?: number }[];
  testimonial?: { quote: string; name: string; title: string; company: string; initials: string };
  faqs?: { question: string; answer: string }[];
  relatedServices?: { title: string; desc: string; href: string }[];
  ctaHeading?: string;
  ctaSubtitle?: string;
  seoContent?: SEOPattern[];
}

export function ServicePageTemplate({
  badge,
  title,
  titleHighlight,
  subtitle,
  description,
  features,
  benefits,
  image,
  stats,
  testimonial,
  faqs,
  relatedServices,
  ctaHeading,
  ctaSubtitle,
  seoContent,
}: ServicePageTemplateProps) {
  const titleParts = title.split(titleHighlight);
  const pathname = usePathname();
  const section =
    pathname.startsWith("/industries/")
      ? { label: "Industries", href: "/industries" }
      : pathname.startsWith("/solutions/")
        ? { label: "Solutions", href: "/solutions" }
        : { label: "Services", href: "/services" };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceSchema(
            badge,
            subtitle,
            `https://contactcenterusa.com${pathname}`
          )),
        }}
      />
      {/* Hero — with background image */}
      <section className="relative min-h-[70vh] overflow-hidden">
        {/* Background image */}
        <Image
          src={image}
          alt={`${badge} - Contact Center USA`}
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover object-top"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[70vh] pt-40 max-w-[1536px] items-center px-5 py-28 lg:px-8 lg:py-36">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-5">
            {/* Left — Text (3 cols) */}
            <div className="lg:col-span-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90 backdrop-blur-sm">
                {badge}
              </span>
              <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[56px]">
                {titleParts[0]}
                <span className="text-red">{titleHighlight}</span>
                {titleParts[1] || ""}
              </h1>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/70">
                {subtitle}
              </p>

              {/* Trust badges */}
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <CheckCircle className="h-4 w-4 text-red" />
                  100% US-Based
                </div>
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <CheckCircle className="h-4 w-4 text-red" />
                  24/7 Support
                </div>
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <CheckCircle className="h-4 w-4 text-red" />
                  No Contracts
                </div>
              </div>
            </div>

            {/* Right — Form (2 cols) */}
            <div className="lg:col-span-2">
              <HeroContactForm />
            </div>
          </div>
        </div>
      </section>

      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: section.label, href: section.href },
        { label: badge, href: "#" },
      ]} />

      {/* Split Section — Image + Description + Benefits */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-red/[0.02] to-white py-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            {/* Left — Image */}
            <div className="relative">
              <div className="relative min-h-[400px] overflow-hidden rounded-2xl shadow-2xl lg:min-h-[500px]">
                <Image
                  src={image}
                  alt={badge}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right — Content */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">
                Why Choose Us
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-navy sm:text-4xl">
                What Sets Us <span className="text-red">Apart</span>
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
                {description}
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {benefits.map((item, i) => (
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-gray-50 py-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">
              Features
            </span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">
              Key <span className="text-red">Capabilities</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">
              Explore the comprehensive features that power our {badge.toLowerCase()} solutions.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <div className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-red/20 hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red/10">
                  <CheckCircle className="h-6 w-6 text-red" />
                </div>
                <h3 className="text-lg font-semibold text-navy">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {seoContent && <SEOContentSection sections={seoContent} />}
      {stats && <StatsBar stats={stats} />}
      {testimonial && <PageTestimonial {...testimonial} />}
      {faqs && faqs.length > 0 && <PageFAQ faqs={faqs} />}
      {relatedServices && relatedServices.length > 0 && <RelatedServices items={relatedServices} />}

      <PageCTA heading={ctaHeading} subtitle={ctaSubtitle} />
    </>
  );
}
