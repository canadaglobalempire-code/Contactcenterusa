"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Lock, Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/seo-config";

const serviceTypes = [
  "Inbound",
  "Outbound",
  "Live Chat / Automated",
  "Back Office / Social",
  "Other or Combination",
];

const solutionTypes = [
  "Customer Support",
  "Lead Generation",
  "Market Research",
  "Appointment Setting",
  "Tech Support",
  "Email Response Management",
  "Other or Combination",
];

const agentOptions = ["5-25", "25-50", "50-100", "100+"];
const volumeOptions = ["0-5,000", "5,000-20,000", "20,000-100,000", "100,000-500,000", "500,000+"];
const scheduleOptions = ["24/7", "Monday-Friday", "Weekdays + Saturday", "Custom Schedule"];

export function ContactFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "20cc8f77-c5b7-4096-86a1-62a83bdbbcba");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-b from-white via-red/[0.015] to-white py-28">
      <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          {/* Left — Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl font-bold text-navy">
              Tell Us About Your Needs
            </h2>
            <p className="mt-2 text-gray-700">
              Fill out the form below and one of our specialists will contact you
              within 1 working day.
            </p>

            {isSubmitted ? (
              <div className="mt-12 flex flex-col items-center py-16 text-center">
                <CheckCircle className="h-16 w-16 text-green-500" />
                <h3 className="mt-4 text-2xl font-bold text-navy">
                  Thank You!
                </h3>
                <p className="mt-2 text-gray-700">
                  Your message has been sent. We will contact you within 2
                  business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <input type="hidden" name="subject" value="New Contact Form Submission — ContactCenterUSA.com" />

                {/* Name & Company */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-navy">
                      Name *
                    </label>
                    <input
                      name="name"
                      required
                      aria-label="Name"
                      placeholder="John Smith"
                      className="mt-1.5 h-12 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none transition-colors focus:border-red focus:ring-2 focus:ring-red/20"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-navy">
                      Company Name *
                    </label>
                    <input
                      name="company"
                      required
                      aria-label="Company name"
                      placeholder="Acme Inc."
                      className="mt-1.5 h-12 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none transition-colors focus:border-red focus:ring-2 focus:ring-red/20"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-navy">
                      Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      aria-label="Email address"
                      placeholder="john@acme.com"
                      className="mt-1.5 h-12 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none transition-colors focus:border-red focus:ring-2 focus:ring-red/20"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-navy">
                      Phone Number *
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      aria-label="Phone number"
                      placeholder="(555) 123-4567"
                      className="mt-1.5 h-12 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none transition-colors focus:border-red focus:ring-2 focus:ring-red/20"
                    />
                  </div>
                </div>

                {/* Website */}
                <div>
                  <label className="text-sm font-medium text-navy">
                    Website / URL
                  </label>
                  <input
                    name="website"
                    aria-label="Website URL"
                    placeholder="https://yourcompany.com"
                    className="mt-1.5 h-12 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none transition-colors focus:border-red focus:ring-2 focus:ring-red/20"
                  />
                </div>

                {/* Service Type & Solution Type */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-navy">
                      Call Center Services Type
                    </label>
                    <select
                      name="service_type"
                      aria-label="Call center services type"
                      className="mt-1.5 h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm outline-none transition-colors focus:border-red focus:ring-2 focus:ring-red/20"
                    >
                      <option value="">Select service type</option>
                      {serviceTypes.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-navy">
                      Solution Type
                    </label>
                    <select
                      name="solution_type"
                      aria-label="Solution type"
                      className="mt-1.5 h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm outline-none transition-colors focus:border-red focus:ring-2 focus:ring-red/20"
                    >
                      <option value="">Select solution type</option>
                      {solutionTypes.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Agents & Volume */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-navy">
                      Agent Requirements
                    </label>
                    <select
                      name="agents"
                      aria-label="Agent requirements"
                      className="mt-1.5 h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm outline-none transition-colors focus:border-red focus:ring-2 focus:ring-red/20"
                    >
                      <option value="">Select agent count</option>
                      {agentOptions.map((a) => (
                        <option key={a} value={a}>{a}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-navy">
                      Call Volume (Records/month)
                    </label>
                    <select
                      name="call_volume"
                      aria-label="Call volume"
                      className="mt-1.5 h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm outline-none transition-colors focus:border-red focus:ring-2 focus:ring-red/20"
                    >
                      <option value="">Select volume</option>
                      {volumeOptions.map((v) => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Schedule */}
                <div>
                  <label className="text-sm font-medium text-navy">
                    Operating Schedule
                  </label>
                  <select
                    name="schedule"
                    aria-label="Operating schedule"
                    className="mt-1.5 h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm outline-none transition-colors focus:border-red focus:ring-2 focus:ring-red/20"
                  >
                    <option value="">Select schedule</option>
                    {scheduleOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Comments */}
                <div>
                  <label className="text-sm font-medium text-navy">
                    Additional Comments
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your company, your program, or your requirements..."
                    aria-label="Additional comments"
                    className="mt-1.5 w-full rounded-xl border border-gray-200 p-4 text-sm outline-none transition-colors focus:border-red focus:ring-2 focus:ring-red/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-label="Submit form"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-red py-4 text-[15px] font-semibold text-white transition-all hover:bg-red-dark disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                  {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                </button>

                <p className="flex items-center justify-center gap-1.5 text-sm text-gray-600">
                  <Lock className="h-3 w-3" />
                  Your information is secure and never shared.
                </p>
              </form>
            )}
          </motion.div>

          {/* Right — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="rounded-2xl bg-navy p-8 text-white">
                <h3 className="text-xl font-bold">Reach Us Directly</h3>
                <p className="mt-2 text-white/60 text-sm">
                  Our team is available to answer your questions and discuss
                  your needs.
                </p>

                <div className="mt-8 space-y-5">
                  <a
                    className="flex items-center gap-4"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red/20">
                      <Phone className="h-5 w-5 text-red" />
                    </div>
                    <div>
                      <div className="text-xs text-white/50">Phone</div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-4"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red/20">
                      <Mail className="h-5 w-5 text-red" />
                    </div>
                    <div>
                      <div className="text-xs text-white/50">Email</div>
                      <div className="font-bold">{siteConfig.email}</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red/20">
                      <MapPin className="h-5 w-5 text-red" />
                    </div>
                    <div>
                      <div className="text-xs text-white/50">Location</div>
                      <div className="font-bold">United States</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red/20">
                      <Clock className="h-5 w-5 text-red" />
                    </div>
                    <div>
                      <div className="text-xs text-white/50">Availability</div>
                      <div className="font-bold">24/7/365</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick stats */}
              <div className="rounded-2xl border border-gray-100 bg-white p-6">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-navy">500+</div>
                    <div className="mt-1 text-sm text-gray-600">US Agents</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-navy">30+</div>
                    <div className="mt-1 text-sm text-gray-600">Years Exp.</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-navy">98%</div>
                    <div className="mt-1 text-sm text-gray-600">CSAT Score</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-navy">&lt;48h</div>
                    <div className="mt-1 text-sm text-gray-600">Go Live</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
