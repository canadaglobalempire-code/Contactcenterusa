"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import {
  HeartPulse,
  Landmark,
  Signal,
  Briefcase,
  Building2,
  ShoppingBag,
  Plane,
  GraduationCap,
  Zap,
  Truck,
  Shield,
  Laptop,
  Home,
  Wrench,
  Store,
  Stethoscope,
  Factory,
  Radio,
  Tv,
  CircleDollarSign,
} from "lucide-react";

const ICON_MAP = {
  "heart-pulse": HeartPulse,
  landmark: Landmark,
  signal: Signal,
  briefcase: Briefcase,
  building: Building2,
  "shopping-bag": ShoppingBag,
  plane: Plane,
  "graduation-cap": GraduationCap,
  zap: Zap,
  truck: Truck,
  shield: Shield,
  laptop: Laptop,
  home: Home,
  wrench: Wrench,
  store: Store,
  stethoscope: Stethoscope,
  factory: Factory,
  radio: Radio,
  tv: Tv,
  dollar: CircleDollarSign,
} as const;

export type IconKey = keyof typeof ICON_MAP;

/* ============================================================
   Patterns
   ============================================================ */

type HeroStatementPattern = {
  pattern: "hero-statement";
  eyebrow?: string;
  heading: string;
  accent?: string; // Portion of heading to show in red
  body: string | string[];
  stats?: { stat: string; label: string }[];
};

type ComparisonPattern = {
  pattern: "comparison";
  eyebrow?: string;
  heading: string;
  intro?: string;
  leftTitle: string;
  rightTitle: string;
  rows: { label: string; left: string; right: string; leftYes?: boolean; rightYes?: boolean }[];
};

type FlowPattern = {
  pattern: "flow";
  eyebrow?: string;
  heading: string;
  intro?: string;
  steps: { title: string; body: string }[];
};

type FeaturedIndustriesPattern = {
  pattern: "featured-industries";
  eyebrow?: string;
  heading: string;
  intro?: string;
  items: { icon?: IconKey; stat?: string; title: string; body: string }[];
};

type SplitImagePattern = {
  pattern: "split-image";
  eyebrow?: string;
  heading: string;
  body: string | string[];
  image: string;
  imagePosition?: "left" | "right";
  bullets?: string[];
};

type DarkCtaPattern = {
  pattern: "dark-cta";
  eyebrow?: string;
  heading: string;
  accent?: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export type SEOPattern =
  | HeroStatementPattern
  | ComparisonPattern
  | FlowPattern
  | FeaturedIndustriesPattern
  | SplitImagePattern
  | DarkCtaPattern;

/* ============================================================
   Primitives
   ============================================================ */

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <div>
      {children}
    </div>
  );
}

function renderHeading(heading: string, accent?: string) {
  if (!accent) return heading;
  const idx = heading.indexOf(accent);
  if (idx === -1) return heading;
  return (
    <>
      {heading.slice(0, idx)}
      <span className="text-red">{accent}</span>
      {heading.slice(idx + accent.length)}
    </>
  );
}

/* ============================================================
   1. Hero statement — DARK NAVY
   ============================================================ */

function HeroStatementBlock({ data }: { data: HeroStatementPattern }) {
  const paras = Array.isArray(data.body) ? data.body : [data.body];
  return (
    <section className="relative overflow-hidden bg-navy py-28">
      {/* Subtle grid pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* Red glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-red/20 blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1200px] px-5 lg:px-8">
        <FadeIn>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
            <div>
              {data.eyebrow && (
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-red" />
                  {data.eyebrow}
                </div>
              )}
              <h2 className="mt-6 text-[44px] font-bold leading-[1.08] tracking-[-0.02em] text-white sm:text-[60px] lg:text-[72px]">
                {renderHeading(data.heading, data.accent)}
              </h2>
              <div className="mt-8 max-w-[640px] space-y-5 text-[17px] leading-[1.75] text-white/70 lg:text-[18px]">
                {paras.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {data.stats && (
              <div className="grid grid-cols-1 gap-8 lg:mt-6">
                {data.stats.map((s, i) => (
                  <div className="border-l-2 border-red pl-6">
                    <div className="text-[44px] font-bold leading-[0.95] tracking-[-0.02em] text-white lg:text-[52px]">
                      {s.stat}
                    </div>
                    <div className="mt-2 text-[14.5px] text-white/65">{s.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ============================================================
   2. Comparison table
   ============================================================ */

function ComparisonBlock({ data }: { data: ComparisonPattern }) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-[780px] text-center">
            {data.eyebrow && (
              <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-red">
                {data.eyebrow}
              </div>
            )}
            <h2 className="mt-3 text-[30px] font-bold leading-[1.15] tracking-[-0.01em] text-navy sm:text-[40px]">
              {data.heading}
            </h2>
            {data.intro && (
              <p className="mx-auto mt-5 max-w-[680px] text-[16.5px] leading-[1.75] text-gray-700">
                {data.intro}
              </p>
            )}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mx-auto mt-14 max-w-[1000px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_1px_0_rgba(15,23,42,0.04)]">
            {/* Header */}
            <div className="grid grid-cols-[1fr_1fr_1fr] items-center divide-x divide-gray-200 border-b border-gray-200 bg-gray-50/60">
              <div className="px-6 py-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                Attribute
              </div>
              <div className="px-6 py-5">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                  Typical
                </div>
                <div className="mt-1 text-[15.5px] font-semibold text-gray-600">
                  {data.leftTitle}
                </div>
              </div>
              <div className="relative px-6 py-5">
                <div className="absolute left-0 top-0 h-full w-[2px] bg-red" />
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red">
                  Recommended
                </div>
                <div className="mt-1 text-[15.5px] font-semibold text-navy">
                  {data.rightTitle}
                </div>
              </div>
            </div>

            {/* Rows */}
            {data.rows.map((row, i) => (
              <div className="grid grid-cols-[1fr_1fr_1fr] items-start divide-x divide-gray-200 border-b border-gray-100 last:border-b-0">
                <div className="px-6 py-5 text-[15.5px] font-semibold tracking-tight text-navy">
                  {row.label}
                </div>
                <div className="flex items-start gap-3 px-6 py-5 text-[14.5px] leading-[1.65] text-gray-600">
                  {row.leftYes === false && (
                    <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400" strokeWidth={2.5} />
                  )}
                  {row.leftYes === true && (
                    <Check
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400"
                      strokeWidth={2.5}
                    />
                  )}
                  <span>{row.left}</span>
                </div>
                <div className="flex items-start gap-3 bg-red/[0.02] px-6 py-5 text-[14.5px] leading-[1.65] text-navy">
                  {row.rightYes !== false ? (
                    <Check
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-red"
                      strokeWidth={2.75}
                    />
                  ) : (
                    <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-red" strokeWidth={2.5} />
                  )}
                  <span className="font-medium">{row.right}</span>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ============================================================
   3. Horizontal flow
   ============================================================ */

function FlowBlock({ data }: { data: FlowPattern }) {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-[780px] text-center">
            {data.eyebrow && (
              <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-red">
                {data.eyebrow}
              </div>
            )}
            <h2 className="mt-3 text-[30px] font-bold leading-[1.15] tracking-[-0.01em] text-navy sm:text-[40px]">
              {data.heading}
            </h2>
            {data.intro && (
              <p className="mx-auto mt-5 max-w-[680px] text-[16.5px] leading-[1.75] text-gray-700">
                {data.intro}
              </p>
            )}
          </div>
        </FadeIn>

        {/* Flow diagram */}
        <FadeIn delay={0.1}>
          <div className="relative mt-16">
            {/* Connecting line */}
            <div
              aria-hidden
              className="absolute left-0 right-0 top-6 hidden h-[2px] bg-gradient-to-r from-gray-200 via-red/30 to-gray-200 lg:block"
            />
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-4">
              {data.steps.map((step, i) => (
                <div className="relative">
                  <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(15,23,42,0.06)] ring-1 ring-gray-200 lg:mx-0">
                    <span className="text-[14px] font-bold tabular-nums text-navy">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6">
                    <h3 className="text-[16px] font-semibold leading-[1.3] tracking-tight text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[14.5px] leading-[1.65] text-gray-600">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ============================================================
   4. Featured industries
   ============================================================ */

function FeaturedIndustriesBlock({ data }: { data: FeaturedIndustriesPattern }) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-[780px]">
            {data.eyebrow && (
              <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-red">
                {data.eyebrow}
              </div>
            )}
            <h2 className="mt-3 text-[30px] font-bold leading-[1.15] tracking-[-0.01em] text-navy sm:text-[40px]">
              {data.heading}
            </h2>
            {data.intro && (
              <p className="mt-5 text-[16.5px] leading-[1.75] text-gray-700">{data.intro}</p>
            )}
          </div>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 md:grid-cols-2 lg:grid-cols-4">
          {data.items.map((item, i) => {
            const Icon = item.icon ? ICON_MAP[item.icon] : null;
            return (
              <div className="relative bg-white p-7 lg:p-8">
                {Icon && (
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                )}
                {item.stat && (
                  <div className="mb-3 text-[28px] font-bold leading-none tracking-[-0.02em] text-red">
                    {item.stat}
                  </div>
                )}
                <h3 className="text-[17px] font-semibold leading-snug tracking-tight text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.65] text-gray-600">{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   5. Split image — asymmetric with offset card
   ============================================================ */

function SplitImageBlock({ data }: { data: SplitImagePattern }) {
  const imageLeft = data.imagePosition !== "right";
  const paras = Array.isArray(data.body) ? data.body : [data.body];
  return (
    <section className="bg-gray-50 py-28">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <FadeIn>
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
            {/* Image with offset accent */}
            <div className={imageLeft ? "lg:order-1" : "lg:order-2"}>
              <div className="relative">
                {/* Offset background accent block */}
                <div
                  aria-hidden
                  className={`absolute inset-0 rounded-2xl bg-red ${
                    imageLeft ? "-left-4 -bottom-4" : "-right-4 -bottom-4"
                  }`}
                  style={{ transform: imageLeft ? "translate(-16px, 16px)" : "translate(16px, 16px)" }}
                />
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-xl">
                  <Image
                    src={data.image}
                    alt={data.heading}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 500px, 100vw"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className={imageLeft ? "lg:order-2" : "lg:order-1"}>
              {data.eyebrow && (
                <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-red">
                  {data.eyebrow}
                </div>
              )}
              <h2 className="mt-3 text-[30px] font-bold leading-[1.15] tracking-[-0.01em] text-navy sm:text-[36px]">
                {data.heading}
              </h2>
              <div className="mt-6 space-y-4 text-[16px] leading-[1.78] text-gray-700">
                {paras.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              {data.bullets && (
                <ul className="mt-6 space-y-3">
                  {data.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15.5px] text-navy">
                      <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red/10">
                        <Check className="h-3 w-3 text-red" strokeWidth={3} />
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ============================================================
   6. Dark CTA
   ============================================================ */

function DarkCtaBlock({ data }: { data: DarkCtaPattern }) {
  return (
    <section className="relative overflow-hidden bg-navy py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-red/25 blur-[120px]"
      />

      <div className="relative mx-auto max-w-[900px] px-5 text-center lg:px-8">
        <FadeIn>
          {data.eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-red" />
              {data.eyebrow}
            </div>
          )}
          <h2 className="mt-6 text-[34px] font-bold leading-[1.12] tracking-[-0.015em] text-white sm:text-[48px]">
            {renderHeading(data.heading, data.accent)}
          </h2>
          <p className="mx-auto mt-6 max-w-[680px] text-[17px] leading-[1.75] text-white/75">
            {data.body}
          </p>
          {data.ctaLabel && data.ctaHref && (
            <div className="mt-10">
              <Link
                href={data.ctaHref}
                className="inline-flex items-center gap-2 rounded-full bg-red px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-red-dark"
              >
                {data.ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}

/* ============================================================
   Main export
   ============================================================ */

export function SEOContentSection({ sections }: { sections: SEOPattern[] }) {
  return (
    <>
      {sections.map((section, i) => {
        switch (section.pattern) {
          case "hero-statement":
            return <HeroStatementBlock key={i} data={section} />;
          case "comparison":
            return <ComparisonBlock key={i} data={section} />;
          case "flow":
            return <FlowBlock key={i} data={section} />;
          case "featured-industries":
            return <FeaturedIndustriesBlock key={i} data={section} />;
          case "split-image":
            return <SplitImageBlock key={i} data={section} />;
          case "dark-cta":
            return <DarkCtaBlock key={i} data={section} />;
        }
      })}
    </>
  );
}
