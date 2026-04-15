"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Gift,
  Trophy,
  Sun,
  Megaphone,
  Calculator,
  GraduationCap,
  AlertTriangle,
  CloudLightning,
} from "lucide-react";

const surges = [
  {
    icon: Gift,
    label: "Holiday Seasons",
    desc: "Black Friday, Christmas, New Year — handle the rush with fully trained agents ready to go.",
    image: "/images/hd-agents-working.jpg",
    color: "bg-red-500",
  },
  {
    icon: Trophy,
    label: "Sporting Events",
    desc: "Super Bowl, World Cup, March Madness — scale support for massive spikes in ticket and merch inquiries.",
    image: "/images/hd-agents-pair.jpg",
    color: "bg-amber-500",
  },
  {
    icon: Sun,
    label: "Seasons of the Year",
    desc: "Summer travel, winter heating — seasonal businesses need seasonal support that scales with demand.",
    image: "/images/hd-agents-row.jpg",
    color: "bg-sky-500",
  },
  {
    icon: Megaphone,
    label: "Brand Campaigns",
    desc: "Product launches, viral moments, flash sales — be ready when your marketing drives massive response.",
    image: "/images/agent-smiling.jpg",
    color: "bg-purple-500",
  },
  {
    icon: Calculator,
    label: "Tax Season",
    desc: "Filing deadlines, refund inquiries, compliance questions — support your clients when it matters most.",
    image: "/images/hd-agents-working.jpg",
    color: "bg-emerald-500",
  },
  {
    icon: GraduationCap,
    label: "Back to School",
    desc: "Enrollment surges, parent inquiries, student support — handle the annual back-to-school wave.",
    image: "/images/hd-agents-pair.jpg",
    color: "bg-blue-500",
  },
  {
    icon: AlertTriangle,
    label: "Crisis Management",
    desc: "Product recalls, PR incidents, outages — deploy emergency response teams within hours.",
    image: "/images/agents-working.jpg",
    color: "bg-orange-500",
  },
  {
    icon: CloudLightning,
    label: "Weather Events & More",
    desc: "Hurricanes, wildfires, power outages — provide critical customer support when people need it most.",
    image: "/images/call-center-team.jpg",
    color: "bg-teal-500",
  },
];

export function SurgeSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-navy py-28">
      {/* Subtle pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-[1536px] px-5 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/70">
            Surge Support
          </span>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[44px]">
            From Expected Surges to{" "}
            <span className="text-red">Urgent Demands</span>
            <br />
            We&apos;ve Got Your Back
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-white/50">
            Access elite talent instantly, scale down seamlessly. No matter the
            season, the event, or the crisis — your team is ready.
          </p>
        </motion.div>

        {/* Interactive grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left — Tabs/buttons */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-3"
          >
            {surges.map((surge, i) => (
              <button
                key={surge.label}
                onClick={() => setActive(i)}
                aria-label={surge.label}
                className={`group flex items-center gap-3 rounded-xl p-4 text-left transition-all duration-300 ${
                  active === i
                    ? "bg-white shadow-lg"
                    : "bg-white/5 hover:bg-white/10"
                }`}
              >
                <div
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg transition-colors ${
                    active === i
                      ? `${surge.color} text-white`
                      : "bg-white/10 text-white/50"
                  }`}
                >
                  <surge.icon className="h-5 w-5" />
                </div>
                <span
                  className={`text-[14px] font-semibold transition-colors ${
                    active === i ? "text-navy" : "text-white/70"
                  }`}
                >
                  {surge.label}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Right — Active content card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="relative h-full min-h-[400px] overflow-hidden rounded-2xl"
              >
                {/* Image */}
                <Image
                  src={surges[active].image}
                  alt={`Call center agents supporting ${surges[active].label} surge demand`}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Content overlay */}
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${surges[active].color} text-white`}
                  >
                    {(() => {
                      const Icon = surges[active].icon;
                      return <Icon className="h-6 w-6" />;
                    })()}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {surges[active].label}
                  </h3>
                  <p className="mt-2 max-w-md text-[15px] leading-relaxed text-white/70">
                    {surges[active].desc}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-2 rounded-lg bg-red px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-red-dark"
                  >
                    Speak to an Expert
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
