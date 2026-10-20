"use client";

import React, { FormEvent, useState } from "react";
import Link from "next/link";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setSubmitted(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    // Temporary submit logic.
    // Later we will connect this with your API + CRM.
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log(formData);

    setLoading(false);
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-slate-950">
        {/* Background effects */}
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Hero content */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-blue-400" />

                <span className="text-sm font-medium text-slate-300">
                  We&apos;re here to help
                </span>
              </div>

              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Let&apos;s build something
                <span className="text-blue-400"> meaningful.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
                Have a question, service enquiry, partnership idea or want to
                work with SevaNex? Send us a message and our team will get back
                to you.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:hello@sevanex.in"
                  className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Email us
                </a>

                <Link
                  href="/about"
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Learn about SevaNex
                </Link>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative hidden lg:block">
              <div className="relative mx-auto h-[360px] w-[360px]">
                {/* Outer circle */}
                <div className="absolute inset-0 rounded-full border border-blue-500/20" />

                <div className="absolute inset-8 rounded-full border border-blue-500/20" />

                <div className="absolute inset-16 rounded-full border border-blue-500/20" />

                {/* Center */}
                <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl shadow-blue-900/50">
                  <div className="text-center text-white">
                    <div className="text-3xl font-bold">SN</div>

                    <div className="mt-1 text-xs tracking-widest text-blue-100">
                      SEVANEX
                    </div>
                  </div>
                </div>

                {/* Floating cards */}

                <div className="absolute left-0 top-20 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl">
                  <div className="text-xs text-slate-400">Service</div>

                  <div className="mt-1 text-sm font-semibold text-white">
                    Simplified
                  </div>
                </div>

                <div className="absolute right-0 top-8 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl">
                  <div className="text-xs text-slate-400">Digital</div>

                  <div className="mt-1 text-sm font-semibold text-white">
                    Connected
                  </div>
                </div>

                <div className="absolute bottom-12 right-4 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl">
                  <div className="text-xs text-slate-400">Support</div>

                  <div className="mt-1 text-sm font-semibold text-white">
                    Human + AI
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT CARDS ================= */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
        <div className="grid gap-5 md:grid-cols-3">
          {/* Email */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </div>

            <h3 className="mt-5 text-lg font-semibold">Email us</h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Send us your questions or enquiries.
            </p>

            <a
              href="mailto:hello@sevanex.in"
              className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              hello@sevanex.in
            </a>
          </div>

          {/* Phone */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>

            <h3 className="mt-5 text-lg font-semibold">Call us</h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Talk to our support team.
            </p>

            <p className="mt-4 text-sm font-semibold text-indigo-600">
              +91 XXXXX XXXXX
            </p>
          </div>

          {/* Location */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </div>

            <h3 className="mt-5 text-lg font-semibold">Our location</h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              We are building SevaNex from India.
            </p>

            <p className="mt-4 text-sm font-semibold text-violet-600">India</p>
          </div>
        </div>
      </section>

      {/* ================= FORM ================= */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
            <div className="grid lg:grid-cols-5">
              {/* Left information */}
              <div className="bg-gradient-to-br from-blue-700 to-indigo-800 p-8 text-white sm:p-10 lg:col-span-2 lg:p-12">
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
                  Get in touch
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight">
                  We&apos;d love to hear from you.
                </h2>

                <p className="mt-5 text-sm leading-7 text-blue-100">
                  Whether you are a citizen, service provider, business partner
                  or someone interested in our mission, feel free to reach out.
                </p>

                <div className="mt-10 space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      ✓
                    </div>

                    <div>
                      <h3 className="font-semibold">Service enquiries</h3>

                      <p className="mt-1 text-sm text-blue-200">
                        Get help understanding available services.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      ✓
                    </div>

                    <div>
                      <h3 className="font-semibold">Partnership</h3>

                      <p className="mt-1 text-sm text-blue-200">
                        Interested in joining the SevaNex network?
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      ✓
                    </div>

                    <div>
                      <h3 className="font-semibold">Business enquiries</h3>

                      <p className="mt-1 text-sm text-blue-200">
                        Talk to us about technology and collaboration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="p-8 sm:p-10 lg:col-span-3 lg:p-12">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900">
                    Send us a message
                  </h2>

                  <p className="mt-2 text-sm text-slate-500">
                    Fill in the details below and we&apos;ll get back to you.
                  </p>
                </div>

                {submitted && (
                  <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                    ✓ Your message has been submitted successfully.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name + Email */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-slate-700"
                      >
                        Full name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-slate-700"
                      >
                        Email address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />
                    </div>
                  </div>

                  {/* Phone + Subject */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-slate-700"
                      >
                        Phone number
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-2 block text-sm font-medium text-slate-700"
                      >
                        Subject
                      </label>

                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      >
                        <option value="">Select subject</option>

                        <option value="service">Service enquiry</option>

                        <option value="partnership">Partnership</option>

                        <option value="business">Business enquiry</option>

                        <option value="technical">Technical support</option>

                        <option value="agent">Become a service agent</option>

                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                  </div>

                  {/* Submit */}
                  <div className="flex items-center justify-between gap-5">
                    <p className="hidden max-w-xs text-xs leading-5 text-slate-400 sm:block">
                      By submitting this form, you agree that SevaNex may
                      contact you regarding your enquiry.
                    </p>

                    <button
                      type="submit"
                      disabled={loading}
                      className="ml-auto rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {loading ? "Sending..." : "Send message →"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER CTA ================= */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 text-center sm:px-10">
          <p className="text-sm text-slate-500">SevaNex</p>

          <p className="mt-2 text-sm text-slate-400">
            Digital services, delivered simply.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Contact;
