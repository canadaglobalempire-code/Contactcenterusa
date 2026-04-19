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
   SEVEN CONTENT PATTERNS — each section looks visually distinct
   ============================================================ */

type StatementPattern = {
  pattern: "statement";
  body: string | string[];
};

type CriteriaPattern = {
  pattern: "criteria";
  eyebrow?: string;
  heading: string;
  intro?: string;
  items: { title: string; body: string }[];
};

type EditorialPattern = {
  pattern: "editorial";
  eyebrow?: string;
  heading: string;
  body: string | string[];
  image: string;
  imagePosition?: "left" | "right";
};

type StatsPattern = {
  pattern: "stats";
  eyebrow?: string;
  heading: string;
  intro?: string;
  items: { stat: string; title: string; body: string }[];
};

type ProcessPattern = {
  pattern: "process";
  eyebrow?: string;
  heading: string;
  intro?: string;
  steps: { title: string; body: string }[];
};

type GridPattern = {
  pattern: "grid";
  eyebrow?: string;
  heading: string;
  intro?: string;
  items: { icon?: IconKey; title: string; body: string }[];
};

type ClosingPattern = {
  pattern: "closing";
  heading: string;
  body: string | string[];
};

export type SEOPattern =
  | StatementPattern
  | CriteriaPattern
  | EditorialPattern
  | StatsPattern
  | ProcessPattern
  | GridPattern
  | ClosingPattern;

/* ============================================================
   SHARED PRIMITIVES
   ============================================================ */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-red">
      {children}
    </div>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[30px] font-bold leading-[1.15] tracking-[-0.01em] text-navy sm:text-[38px]">
      {children}
    </h2>
  );
}

function Prose({ body, size = "base" }: { body: string | string[]; size?: "base" | "lg" }) {
  const paras = Array.isArray(body) ? body : [body];
  const cls =
    size === "lg"
      ? "text-[18px] leading-[1.78] text-gray-700"
      : "text-[16.5px] leading-[1.78] text-gray-700";
  return (
    <div className={`space-y-5 ${cls}`}>
      {paras.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}

function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ============================================================
   PATTERN RENDERERS
   ============================================================ */

function StatementBlock({ data }: { data: StatementPattern }) {
  const paras = Array.isArray(data.body) ? data.body : [data.body];
  return (
    <section className="bg-white pt-24 pb-4">
      <div className="mx-auto max-w-[860px] px-5 lg:px-8">
        <FadeIn>
          <div className="border-l-[3px] border-red pl-8">
            {paras.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-[22px] font-medium leading-[1.5] tracking-[-0.01em] text-navy"
                    : "mt-5 text-[17px] leading-[1.75] text-gray-700"
                }
              >
                {p}
              </p>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function CriteriaBlock({ data }: { data: CriteriaPattern }) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[900px] px-5 lg:px-8">
        <FadeIn>
          {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
          <div className={data.eyebrow ? "mt-3" : ""}>
            <H2>{data.heading}</H2>
          </div>
          {data.intro && (
            <div className="mt-6">
              <Prose body={data.intro} />
            </div>
          )}

          <ol className="mt-12 divide-y divide-gray-200 border-y border-gray-200">
            {data.items.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="flex gap-6 py-7"
              >
                <div className="flex-shrink-0 pt-1">
                  <div className="flex h-7 items-baseline gap-2 text-navy">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                      No.
                    </span>
                    <span className="text-[22px] font-bold tabular-nums leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-[19px] font-semibold tracking-tight text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[16px] leading-[1.75] text-gray-700">
                    {item.body}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </FadeIn>
      </div>
    </section>
  );
}

function EditorialBlock({ data }: { data: EditorialPattern }) {
  const imageLeft = data.imagePosition !== "right";
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <FadeIn>
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
            <div className={imageLeft ? "lg:order-1" : "lg:order-2"}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100">
                <Image
                  src={data.image}
                  alt={data.heading}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 600px, 100vw"
                />
              </div>
            </div>
            <div className={imageLeft ? "lg:order-2" : "lg:order-1"}>
              {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
              <div className={data.eyebrow ? "mt-3" : ""}>
                <H2>{data.heading}</H2>
              </div>
              <div className="mt-6">
                <Prose body={data.body} />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function StatsBlock({ data }: { data: StatsPattern }) {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-[820px] text-center">
            {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
            <div className={data.eyebrow ? "mt-3" : ""}>
              <H2>{data.heading}</H2>
            </div>
            {data.intro && (
              <p className="mx-auto mt-6 max-w-[720px] text-[16.5px] leading-[1.78] text-gray-700">
                {data.intro}
              </p>
            )}
          </div>

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
            {data.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-center md:border-l md:border-gray-200 md:px-6 md:first:border-l-0"
              >
                <div className="text-[52px] font-bold leading-none tracking-[-0.02em] text-navy">
                  {item.stat}
                </div>
                <h3 className="mt-4 text-[18px] font-semibold tracking-tight text-navy">
                  {item.title}
                </h3>
                <p className="mx-auto mt-2 max-w-[320px] text-[15px] leading-[1.7] text-gray-700">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ProcessBlock({ data }: { data: ProcessPattern }) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-[820px]">
            {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
            <div className={data.eyebrow ? "mt-3" : ""}>
              <H2>{data.heading}</H2>
            </div>
            {data.intro && (
              <div className="mt-6">
                <Prose body={data.intro} />
              </div>
            )}
          </div>

          <div className="mt-14 relative">
            {/* Horizontal connector line on desktop */}
            <div
              className="absolute left-0 right-0 top-5 hidden h-px bg-gray-200 lg:block"
              aria-hidden
            />
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-6">
              {data.steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="relative"
                >
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white">
                    <span className="text-[13px] font-bold tabular-nums text-navy">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 text-[16px] font-semibold leading-[1.3] tracking-tight text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-[1.65] text-gray-600">
                    {step.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function GridBlock({ data }: { data: GridPattern }) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-[820px]">
            {data.eyebrow && <Eyebrow>{data.eyebrow}</Eyebrow>}
            <div className={data.eyebrow ? "mt-3" : ""}>
              <H2>{data.heading}</H2>
            </div>
            {data.intro && (
              <div className="mt-6">
                <Prose body={data.intro} />
              </div>
            )}
          </div>

          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-4">
            {data.items.map((item, i) => {
              const Icon = item.icon ? ICON_MAP[item.icon] : null;
              return (
                <div key={i} className="bg-white p-7">
                  {Icon && (
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-red/10">
                      <Icon className="h-5 w-5 text-red" strokeWidth={2} />
                    </div>
                  )}
                  <h3 className="text-[17px] font-semibold leading-snug tracking-tight text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.65] text-gray-700">
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ClosingBlock({ data }: { data: ClosingPattern }) {
  return (
    <section className="bg-white pb-24 pt-8">
      <div className="mx-auto max-w-[780px] px-5 text-center lg:px-8">
        <FadeIn>
          <H2>{data.heading}</H2>
          <div className="mx-auto mt-6 max-w-[680px]">
            <Prose body={data.body} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ============================================================
   MAIN EXPORT
   ============================================================ */

export function SEOContentSection({ sections }: { sections: SEOPattern[] }) {
  return (
    <>
      {sections.map((section, i) => {
        switch (section.pattern) {
          case "statement":
            return <StatementBlock key={i} data={section} />;
          case "criteria":
            return <CriteriaBlock key={i} data={section} />;
          case "editorial":
            return <EditorialBlock key={i} data={section} />;
          case "stats":
            return <StatsBlock key={i} data={section} />;
          case "process":
            return <ProcessBlock key={i} data={section} />;
          case "grid":
            return <GridBlock key={i} data={section} />;
          case "closing":
            return <ClosingBlock key={i} data={section} />;
        }
      })}
    </>
  );
}
