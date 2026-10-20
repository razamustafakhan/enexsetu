"use client";
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const About = () => {
  const { data, status } = useSession();

  console.log(data);
  console.log(status);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-700">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-500/40" />
        <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-blue-800/40" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-200">
              About SevaNex
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Making essential digital services
              <span className="text-blue-200"> simpler for everyone.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              SevaNex is building a digital platform that helps people discover,
              request, manage and track essential services from one place —
              including assisted and doorstep services.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Our Mission
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Technology that works for people.
            </h2>

            <p className="mt-6 text-base leading-7 text-gray-600">
              Many digital services are available online, but accessing them can
              still be difficult for people who are unfamiliar with technology
              or who need assistance with documents and applications.
            </p>

            <p className="mt-4 text-base leading-7 text-gray-600">
              SevaNex aims to bridge that gap by combining technology, assisted
              service delivery, field agents and intelligent automation into one
              platform.
            </p>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Our goal is simple: make digital services easier to understand,
              easier to access and easier to track.
            </p>
          </div>

          {/* Mission card */}
          <div className="rounded-3xl bg-slate-50 p-8 sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-2xl text-white">
              ✦
            </div>

            <h3 className="mt-6 text-2xl font-bold text-gray-900">
              One platform. Many services.
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              From service discovery and applications to documents, payments,
              appointments and doorstep assistance, SevaNex is designed to bring
              the entire journey together.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              How SevaNex Works
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              From request to completion.
            </h2>

            <p className="mt-4 text-gray-600">
              We are designing the platform around the complete service journey.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Discover",
                description:
                  "Find the service you need and understand the requirements.",
              },
              {
                number: "02",
                title: "Request",
                description:
                  "Submit your information and required documents securely.",
              },
              {
                number: "03",
                title: "Assist",
                description:
                  "Get help from our service network when assistance is required.",
              },
              {
                number: "04",
                title: "Track",
                description:
                  "Track your application and receive updates throughout the process.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-2xl bg-white p-7 shadow-sm"
              >
                <span className="text-sm font-bold text-blue-600">
                  {item.number}
                </span>

                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="rounded-3xl bg-blue-700 p-8 sm:p-12 lg:p-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-200">
            Our Vision
          </p>

          <h2 className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl">
            Building infrastructure for the next generation of assisted digital
            services.
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-7 text-blue-100">
            We envision a future where citizens can access essential services
            through a simple digital experience while service operators, field
            agents and organizations can manage their work through powerful
            technology.
          </p>

          <div className="mt-8">
            <Link
              href="/register"
              className="inline-flex rounded-xl bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Get started
            </Link>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Have questions about SevaNex?
          </h2>

          <p className="mt-2 text-gray-600">We would love to hear from you.</p>

          <Link
            href="/contact"
            className="mt-5 inline-flex font-semibold text-blue-600 hover:underline"
          >
            Contact us →
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
