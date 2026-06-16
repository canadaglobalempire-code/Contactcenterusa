"use client";

import { useInView } from "@/hooks/useInView";
import {
  Bot,
  BrainCircuit,
  MessageSquareCode,
  BarChart3,
  Cloud,
  ShieldCheck,
  Headphones,
  Workflow,
  Smartphone,
  Globe,
  Database,
  Cpu,
} from "lucide-react";

const technologies = [
  { icon: Bot, label: "AI Chatbots", desc: "24/7 automated support" },
  { icon: BrainCircuit, label: "AI Integration", desc: "Smart routing & analytics" },
  { icon: MessageSquareCode, label: "Live Chat", desc: "Real-time web chat" },
  { icon: Headphones, label: "IVR Systems", desc: "Interactive voice response" },
  { icon: Cloud, label: "Cloud Contact Center", desc: "Scalable infrastructure" },
  { icon: BarChart3, label: "Real-Time Analytics", desc: "Live dashboards & KPIs" },
  { icon: Workflow, label: "CRM Integration", desc: "Salesforce, HubSpot, Zendesk" },
  { icon: ShieldCheck, label: "Compliance Tools", desc: "HIPAA, PCI, SOC 2" },
  { icon: Smartphone, label: "Omnichannel Platform", desc: "Voice, SMS, email, social" },
  { icon: Globe, label: "Social Media Mgmt", desc: "Facebook, X, Instagram" },
  { icon: Database, label: "Workforce Management", desc: "Scheduling & forecasting" },
  { icon: Cpu, label: "AI Voice Analytics", desc: "Sentiment & QA scoring" },
];

export function TechSection() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section className="relative overflow-hidden bg-gradient-to-bl from-white via-red/[0.02] to-gray-50 py-28">
      <div className="gradient-orb-blue -top-20 -left-40" />
      <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
        <div className={isInView ? "animate-fade-in-up" : "opacity-0"}>
          <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">
            Technology & AI
          </span>
          <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl lg:text-[44px]">
            Powered by <span className="text-red">Next-Gen Technology</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] text-gray-700">
            We combine human expertise with cutting-edge AI and automation
            to deliver faster, smarter, and more efficient customer experiences.
          </p>
        </div>

        <div ref={ref} className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {technologies.map((tech, i) => (
            <div
              key={tech.label}
              className={`group flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-red/20 hover:shadow-lg ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy transition-all duration-300 group-hover:bg-red group-hover:text-white">
                <tech.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-navy">{tech.label}</div>
                <div className="text-sm text-gray-600">{tech.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
