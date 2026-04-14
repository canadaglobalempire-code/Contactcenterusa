"use client";

import { motion } from "framer-motion";
import { Shield, Heart, Lock, Headphones, Zap, Globe, Award, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Integrity",
    desc: "Moral principles and ethics guide every personal and business interaction we have.",
  },
  {
    icon: Shield,
    title: "Trust",
    desc: "We believe in truthfulness and always exceeding the results we promise to our clients.",
  },
  {
    icon: Lock,
    title: "Security",
    desc: "Client confidentiality and safe data protection are at the core of everything we do.",
  },
  {
    icon: Headphones,
    title: "Customer Service",
    desc: "A daily commitment to providing improved service to every customer, every time.",
  },
  {
    icon: Zap,
    title: "Innovation",
    desc: "Continuously evolving our technology and processes to stay ahead of industry demands.",
  },
  {
    icon: Globe,
    title: "Adaptability",
    desc: "Flexible solutions that adjust to seasonal demand and business fluctuations seamlessly.",
  },
  {
    icon: Award,
    title: "Experience",
    desc: "Over 30 years serving some of the largest and most complex organizations worldwide.",
  },
  {
    icon: Users,
    title: "Caring Culture",
    desc: "We invest in our people because employee quality directly drives client satisfaction.",
  },
];

export function AboutValues() {
  return (
    <section className="relative overflow-hidden bg-navy py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative mx-auto max-w-[1536px] px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/70">
            Why Work With Us
          </span>
          <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
            Our Core <span className="text-red">Values</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/50">
            These principles define who we are and how we serve every client,
            every day.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="group rounded-2xl bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red/20 text-red transition-all duration-300 group-hover:bg-red group-hover:text-white">
                <value.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-sm font-bold text-white">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
