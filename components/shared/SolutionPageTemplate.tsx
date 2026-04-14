"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { generateServiceSchema } from "@/lib/schema";
import { HeroContactForm } from "@/components/shared/HeroContactForm";
import { StatsBar } from "@/components/shared/StatsBar";
import { PageTestimonial } from "@/components/shared/PageTestimonial";
import { PageFAQ } from "@/components/shared/PageFAQ";
import { RelatedServices } from "@/components/shared/RelatedServices";
import { PageCTA } from "@/components/shared/PageCTA";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface SolutionPageTemplateProps {
  label: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  heroImage: string;
  introHeading: string;
  introText: string;
  introText2?: string;
  features: Feature[];
  benefits: string[];
  stats?: { value: number; suffix: string; label: string; prefix?: string; decimals?: number }[];
  testimonial?: { quote: string; name: string; title: string; company: string; initials: string };
  faqs?: { question: string; answer: string }[];
  relatedServices?: { title: string; desc: string; href: string }[];
  ctaHeading?: string;
  ctaSubtitle?: string;
}

export function SolutionPageTemplate({
  label,
  title,
  titleAccent,
  subtitle,
  heroImage,
  introHeading,
  introText,
  introText2,
  features,
  benefits,
  stats,
  testimonial,
  faqs,
  relatedServices,
  ctaHeading,
  ctaSubtitle,
}: SolutionPageTemplateProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceSchema(
            label,
            subtitle,
            `https://www.contactcenterusa.com/solutions/${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
          )),
        }}
      />
      {/* Hero — with background image */}
      <section className="relative min-h-[70vh] overflow-hidden">
        {/* Background image */}
        <Image
          src={heroImage}
          alt={`${label} - Contact Center USA`}
          fill
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
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90 backdrop-blur-sm">
                {label}
              </span>
              <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[56px]">
                {title} <span className="text-red">{titleAccent}</span>
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
            </motion.div>
            {/* Right — Form (2 cols) */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <HeroContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Solutions", href: "/solutions" },
        { label: label, href: "#" },
      ]} />

      {/* Intro Section with Image */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-red/[0.02] to-white py-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative min-h-[400px] overflow-hidden rounded-2xl shadow-2xl lg:min-h-[500px]">
                <Image
                  src={heroImage}
                  alt={introHeading}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">
                {label}
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-navy sm:text-4xl">
                {introHeading}
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
                {introText}
              </p>
              {introText2 && (
                <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                  {introText2}
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-bg-alt py-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-red">
              What We Offer
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Our {label} Capabilities
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red/10 text-red transition-colors group-hover:bg-red group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-navy">{feature.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-gray-700">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">
                Why Choose Us
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-navy sm:text-4xl">
                Benefits of Our {label}
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
                Partner with Contact Center USA and experience the difference
                that US-based, professionally trained agents bring to your
                operations.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    className="flex items-center gap-2.5"
                  >
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red" />
                    <span className="text-sm text-gray-600">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative min-h-[400px] overflow-hidden rounded-2xl shadow-2xl lg:min-h-[500px]">
                <Image
                  src={heroImage}
                  alt={`Benefits of ${label}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-navy/20" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {stats && <StatsBar stats={stats} />}
      {testimonial && <PageTestimonial {...testimonial} />}
      {faqs && faqs.length > 0 && <PageFAQ faqs={faqs} />}
      {relatedServices && relatedServices.length > 0 && <RelatedServices items={relatedServices} />}

      <PageCTA heading={ctaHeading} subtitle={ctaSubtitle} />
    </>
  );
}
