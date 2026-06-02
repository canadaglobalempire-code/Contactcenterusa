"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Lock, MapPin, Clock } from "lucide-react";
import {
  appendLeadAttribution,
  getLeadFormEndpoint,
  SPLITFORMS_ACCESS_KEY,
  submitLeadForm,
  trackLeadEvent,
} from "@/lib/lead-tracking";

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

const inputClass =
  "mt-1.5 h-12 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none transition-colors focus:border-red focus:ring-2 focus:ring-red/20";
const selectClass =
  "mt-1.5 h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm outline-none transition-colors focus:border-red focus:ring-2 focus:ring-red/20";

export function ContactFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("submitted") === "1") {
      setIsSubmitted(true);
    }
  }, []);

  // Red highlight for any required field the user left blank/unselected.
  const errorRing = (name: string) =>
    errors.has(name) ? " !border-red ring-2 ring-red/20" : "";

  // Clear a field's error as soon as it becomes valid.
  const clearFieldError = (e: React.ChangeEvent<HTMLFormElement>) => {
    const target = e.target;
    if (
      !(target instanceof HTMLInputElement) &&
      !(target instanceof HTMLSelectElement) &&
      !(target instanceof HTMLTextAreaElement)
    ) {
      return;
    }
    if (target.name && errors.has(target.name) && target.checkValidity()) {
      setErrors((prev) => {
        const next = new Set(prev);
        next.delete(target.name);
        return next;
      });
    }
  };

  const markFieldInvalid = (e: React.InvalidEvent<HTMLFormElement>) => {
    const target = e.target;
    if (
      !(target instanceof HTMLInputElement) &&
      !(target instanceof HTMLSelectElement) &&
      !(target instanceof HTMLTextAreaElement)
    ) {
      return;
    }

    if (target.name) {
      setErrors((prev) => new Set(prev).add(target.name));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    // If any required field is missing, show it clearly instead of silently
    // doing nothing.
    if (!form.checkValidity()) {
      const invalid = new Set<string>();
      let firstInvalid: HTMLInputElement | HTMLSelectElement | null = null;
      for (const el of Array.from(form.elements) as (
        | HTMLInputElement
        | HTMLSelectElement
      )[]) {
        if (el.name && typeof el.checkValidity === "function" && !el.checkValidity()) {
          invalid.add(el.name);
          if (!firstInvalid) firstInvalid = el;
        }
      }
      setErrors(invalid);
      form.reportValidity();
      firstInvalid?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setErrors(new Set());
    setIsSubmitting(true);

    const formData = new FormData(form);
    // Accept the website with or without a protocol; normalize to a full URL.
    const website = (formData.get("website") ?? "").toString().trim();
    if (website && !/^https?:\/\//i.test(website)) {
      formData.set("website", `https://${website}`);
    }
    appendLeadAttribution(formData, {
      ctaLocation: "contact_page_form",
      leadOffer: "General call center quote",
    });

    try {
      const { data, response } = await submitLeadForm(formData);
      if (response.ok && data.success) {
        trackLeadEvent("lead_form_submit", {
          cta_location: formData.get("cta_location")?.toString(),
          form_name: "contact_page_form",
          lead_offer: formData.get("lead_offer")?.toString(),
          source_page: formData.get("source_page")?.toString(),
        });
        setIsSubmitted(true);
      } else {
        alert("Error: " + (data.message || "Something went wrong. Please try again."));
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
                <h3 className="mt-4 text-2xl font-bold text-navy">Thank You!</h3>
                <p className="mt-2 text-gray-700">
                  Your message has been sent. We will contact you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form
                action={getLeadFormEndpoint()}
                method="POST"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
                onChange={clearFieldError}
                onInvalid={markFieldInvalid}
                className="mt-8 space-y-6"
              >
                {errors.size > 0 && (
                  <div
                    role="alert"
                    className="rounded-xl border border-red/30 bg-red/5 px-4 py-3 text-sm font-medium text-red-dark"
                  >
                    Please complete the highlighted required fields below.
                  </div>
                )}

                <input
                  type="hidden"
                  name="subject"
                  value="New Contact Form Submission — ContactCenterUSA.com"
                />
                <input
                  type="hidden"
                  name="access_key"
                  value={SPLITFORMS_ACCESS_KEY}
                />
                <input type="hidden" name="redirect" value="/contact?submitted=1" />
                <input type="hidden" name="source_page" />
                <input type="hidden" name="cta_location" />
                <input type="hidden" name="lead_offer" />
                <input type="hidden" name="submitted_at" />
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                  style={{ display: "none" }}
                />

                {/* Name & Company */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-navy">Name *</label>
                    <input
                      name="name"
                      required
                      aria-label="Name"
                      placeholder="John Smith"
                      className={inputClass + errorRing("name")}
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
                      className={inputClass + errorRing("company")}
                    />
                  </div>
                </div>

                {/* Company Email & Phone */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-navy">
                      Company Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      aria-label="Company email"
                      placeholder="you@company.com"
                      className={inputClass + errorRing("email")}
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
                      className={inputClass + errorRing("phone")}
                    />
                  </div>
                </div>

                {/* Website & Solution Type */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-navy">Website</label>
                    <input
                      name="website"
                      type="text"
                      inputMode="url"
                      aria-label="Company website"
                      placeholder="acme.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-navy">
                      Solution Type
                    </label>
                    <select
                      name="solution_type"
                      aria-label="Solution type"
                      defaultValue=""
                      className={selectClass}
                    >
                      <option value="">Select solution type</option>
                      {solutionTypes.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Service Type & Agent Requirements */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-navy">
                      Call Center Services Type
                    </label>
                    <select
                      name="service_type"
                      aria-label="Call center services type"
                      defaultValue=""
                      className={selectClass}
                    >
                      <option value="">Select service type</option>
                      {serviceTypes.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-navy">
                      Agent Requirements
                    </label>
                    <select
                      name="agents"
                      aria-label="Agent requirements"
                      defaultValue=""
                      className={selectClass}
                    >
                      <option value="">Select agent count</option>
                      {agentOptions.map((a) => (
                        <option key={a} value={a}>
                          {a}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Call Volume & Operating Schedule */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-navy">
                      Call Volume (Records/month)
                    </label>
                    <select
                      name="call_volume"
                      aria-label="Call volume"
                      defaultValue=""
                      className={selectClass}
                    >
                      <option value="">Select volume</option>
                      {volumeOptions.map((v) => (
                        <option key={v} value={v}>
                          {v}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-navy">
                      Operating Schedule
                    </label>
                    <select
                      name="schedule"
                      aria-label="Operating schedule"
                      defaultValue=""
                      className={selectClass}
                    >
                      <option value="">Select schedule</option>
                      {scheduleOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
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
                  Our team is available to answer your questions and discuss your
                  needs.
                </p>

                <div className="mt-8 space-y-5">
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
