"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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

type LeadPattern = {
  pattern: "lead";
  heading: string;
  body: string | string[];
  image?: string;
};

type SplitStatsPattern = {
  pattern: "split-stats";
  eyebrow?: string;
  heading: string;
  body: string | string[];
  stats: { stat: string; label: string }[];
};

type NumberedPattern = {
  pattern: "numbered";
  eyebrow?: string;
  heading: string;
  intro?: string;
  items: { title: string; body: string | string[] }[];
};

type IndustryRowPattern = {
  pattern: "industry-row";
  eyebrow?: string;
  heading: string;
  intro?: string;
  items: { icon?: IconKey; title: string; body: string }[];
};

type SplitImagePattern = {
  pattern: "split-image";
  eyebrow?: string;
  heading: string;
  body: string | string[];
  image: string;
  imagePosition?: "left" | "right";
};

type ClosingPattern = {
  pattern: "closing";
  heading: string;
  body: string | string[];
};

export type SEOPattern =
  | LeadPattern
  | SplitStatsPattern
  | NumberedPattern
  | IndustryRowPattern
  | SplitImagePattern
  | ClosingPattern;

/* ============================================================
   Shared primitives
   ============================================================ */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-red">
      {children}
    </div>
  );
}

function Heading({ children, size = "md" }: { children: React.ReactNode; size?: "md" | "lg" }) {
  const cls =
    size === "lg"
      ? "text-[34px] font-bold leading-[1.12] tracking-[-0.015em] text-navy sm:text-[44px]"
      : "text-[28px] font-bold leading-[1.15] tracking-[-0.01em] text-navy sm:text-[36px]";
  return <h2 className={cls}>{children}</h2>;
}

function Prose({
  body,
  size = "base",
  className = "",
}: {
  body: string | string[];
  size?: "base" | "lg";
  className?: string;
}) {
  const paras = Array.isArray(body) ? body : [body];
  const cls =
    size === "lg"
      ? "text-[18px] leading-[1.78] text-gray-700"
      : "text-[16.5px] leading-[1.8] text-gray-700";
  return (
    <div className={`space-y-5 ${cls} ${className}`}>
      {paras.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}

function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

function SectionWrap({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`bg-white py-24 ${className}`}>
      <div className="mx-auto max-w-[1100px] px-5 lg:px-8">{children}</div>
    </section>
  );
}

/* ============================================================
   Pattern renderers
   ============================================================ */

function LeadBlock({ data }: { data: LeadPattern }) {
  return (
    <SectionWrap>
      <FadeIn>
        <div className="mx-auto max-w-[780px]">
          <Heading size="lg">{data.heading}</Heading>
          <div className="mt-8">
            <Prose body={data.body} size="lg" />
          </div>
        </div>
      </FadeIn>
      {data.image && (
        <FadeIn>
          <div className="relative mt-16 aspect-[16/7] w-full overflow-hidden rounded-xl bg-gray-100">
            <Image
              src={data.image}
              alt={data.heading}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 1100px, 100vw"
            />
          </div>
        </FadeIn>
      )}
    </SectionWrap>
  );
}

function SplitStatsBlock({ data }: { data: SplitStatsPattern }) {
  return (
    <SectionWrap className="border-t border-gray-100">
      <FadeIn>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          {/* Left — narrative */}
          <div>
            {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
            <div className={data.eyebrow ? "mt-4" : ""}>
              <Heading>{data.heading}</Heading>
            </div>
            <div className="mt-6">
              <Prose body={data.body} />
            </div>
          </div>

          {/* Right — tight stats column */}
          <div className="lg:pt-2">
            <div className="space-y-8 lg:border-l lg:border-gray-200 lg:pl-10">
              {data.stats.map((s, i) => (
                <div key={i}>
                  <div className="text-[44px] font-bold leading-[0.95] tracking-[-0.02em] text-navy">
                    {s.stat}
                  </div>
                  <div className="mt-2 text-[15px] font-medium leading-snug text-gray-600">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </SectionWrap>
  );
}

function NumberedBlock({ data }: { data: NumberedPattern }) {
  return (
    <SectionWrap className="border-t border-gray-100">
      <FadeIn>
        <div className="mx-auto max-w-[780px]">
          {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
          <div className={data.eyebrow ? "mt-4" : ""}>
            <Heading>{data.heading}</Heading>
          </div>
          {data.intro && (
            <div className="mt-6">
              <Prose body={data.intro} />
            </div>
          )}
        </div>
      </FadeIn>

      <div className="mx-auto mt-14 max-w-[900px]">
        {data.items.map((item, i) => {
          const paras = Array.isArray(item.body) ? item.body : [item.body];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="grid grid-cols-[auto_1fr] gap-6 border-t border-gray-200 py-10 first:border-t-0 first:pt-0 lg:grid-cols-[140px_1fr] lg:gap-10"
            >
              <div>
                <div className="text-[46px] font-bold tabular-nums leading-none tracking-[-0.02em] text-gray-200">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div>
                <h3 className="text-[22px] font-semibold tracking-tight text-navy">
                  {item.title}
                </h3>
                <div className="mt-3 space-y-3 text-[16px] leading-[1.78] text-gray-700">
                  {paras.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrap>
  );
}

function IndustryRowBlock({ data }: { data: IndustryRowPattern }) {
  return (
    <SectionWrap className="border-t border-gray-100">
      <FadeIn>
        <div className="mx-auto max-w-[780px]">
          {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
          <div className={data.eyebrow ? "mt-4" : ""}>
            <Heading>{data.heading}</Heading>
          </div>
          {data.intro && (
            <div className="mt-6">
              <Prose body={data.intro} />
            </div>
          )}
        </div>
      </FadeIn>

      <div className="mt-14 grid grid-cols-1 gap-x-14 gap-y-12 sm:grid-cols-2">
        {data.items.map((item, i) => {
          const Icon = item.icon ? ICON_MAP[item.icon] : null;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="flex gap-5"
            >
              {Icon && (
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100">
                  <Icon className="h-5 w-5 text-navy" strokeWidth={1.75} />
                </div>
              )}
              <div>
                <h3 className="text-[18px] font-semibold tracking-tight text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15.5px] leading-[1.72] text-gray-700">
                  {item.body}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrap>
  );
}

function SplitImageBlock({ data }: { data: SplitImagePattern }) {
  const imageLeft = data.imagePosition !== "right";
  return (
    <SectionWrap className="border-t border-gray-100">
      <FadeIn>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div className={imageLeft ? "lg:order-1" : "lg:order-2"}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100">
              <Image
                src={data.image}
                alt={data.heading}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 500px, 100vw"
              />
            </div>
          </div>
          <div className={imageLeft ? "lg:order-2" : "lg:order-1"}>
            {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
            <div className={data.eyebrow ? "mt-4" : ""}>
              <Heading>{data.heading}</Heading>
            </div>
            <div className="mt-6">
              <Prose body={data.body} />
            </div>
          </div>
        </div>
      </FadeIn>
    </SectionWrap>
  );
}

function ClosingBlock({ data }: { data: ClosingPattern }) {
  return (
    <section className="border-t border-gray-100 bg-white py-20">
      <div className="mx-auto max-w-[760px] px-5 text-center lg:px-8">
        <FadeIn>
          <Heading>{data.heading}</Heading>
          <div className="mx-auto mt-6 max-w-[640px]">
            <Prose body={data.body} />
          </div>
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
          case "lead":
            return <LeadBlock key={i} data={section} />;
          case "split-stats":
            return <SplitStatsBlock key={i} data={section} />;
          case "numbered":
            return <NumberedBlock key={i} data={section} />;
          case "industry-row":
            return <IndustryRowBlock key={i} data={section} />;
          case "split-image":
            return <SplitImageBlock key={i} data={section} />;
          case "closing":
            return <ClosingBlock key={i} data={section} />;
        }
      })}
    </>
  );
}
