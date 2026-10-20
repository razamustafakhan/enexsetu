import Link from "next/link";

const services = [
  {
    icon: "▣",
    title: "Government Services",
    description:
      "Get assistance with eligible government-related applications, registrations and online services.",
    color: "blue",
    services: [
      "Online Applications",
      "Certificate Services",
      "Government Forms",
      "Application Tracking",
    ],
  },
  {
    icon: "◈",
    title: "Document Services",
    description:
      "Get help preparing, uploading and managing documents required for different services.",
    color: "indigo",
    services: [
      "Document Upload",
      "Document Scanning",
      "Document Assistance",
      "Digital Records",
    ],
  },
  {
    icon: "⌂",
    title: "Doorstep Services",
    description:
      "Request assistance at your home when you need help with a digital service.",
    color: "violet",
    services: [
      "Home Assistance",
      "Document Collection",
      "Service Requests",
      "Appointment Booking",
    ],
  },
  {
    icon: "₹",
    title: "Financial Services",
    description:
      "Access eligible financial and business-related assistance through our service network.",
    color: "emerald",
    services: [
      "Application Assistance",
      "Business Services",
      "Payment Assistance",
      "Service Support",
    ],
  },
  {
    icon: "▤",
    title: "Business Services",
    description:
      "Digital assistance for entrepreneurs, small businesses and organizations.",
    color: "orange",
    services: [
      "Business Applications",
      "Registrations",
      "Digital Documentation",
      "Business Support",
    ],
  },
  {
    icon: "✦",
    title: "Digital Assistance",
    description:
      "Get guided assistance for digital services through SevaNex and our service network.",
    color: "cyan",
    services: [
      "Form Assistance",
      "Digital Guidance",
      "Online Applications",
      "Service Support",
    ],
  },
];

const colorClasses: Record<string, string> = {
  blue: "bg-blue-50 text-blue-600",
  indigo: "bg-indigo-50 text-indigo-600",
  violet: "bg-violet-50 text-violet-600",
  emerald: "bg-emerald-50 text-emerald-600",
  orange: "bg-orange-50 text-orange-600",
  cyan: "bg-cyan-50 text-cyan-600",
};

const Services = () => {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-blue-400" />

              <span className="text-sm font-medium text-slate-300">
                Services by SevaNex
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Essential services,
              <span className="text-blue-400"> made simpler.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Discover services, understand requirements, submit requests and
              get assistance when you need it — all from one platform.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        {/* Section heading */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Explore services
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              What can we help you with?
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-500">
            Services and availability may vary by location and applicable rules.
            SevaNex does not represent itself as a government authority.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40"
            >
              {/* Icon */}
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-bold ${colorClasses[service.color]}`}
              >
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {service.description}
              </p>

              {/* Services */}
              <div className="mt-6 space-y-3">
                {service.services.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-600"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">
                      ✓
                    </span>

                    {item}
                  </div>
                ))}
              </div>

              {/* Button */}
              <Link
                href="/register"
                className="mt-8 inline-flex items-center text-sm font-semibold text-blue-600 transition hover:text-blue-700"
              >
                Request assistance
                <span className="ml-2 transition group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Simple process
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Get your service in four steps.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Choose",
                description:
                  "Find the service you need from the SevaNex service catalog.",
              },
              {
                number: "02",
                title: "Request",
                description:
                  "Create your request and provide the required information.",
              },
              {
                number: "03",
                title: "Assist",
                description:
                  "Our service network can assist with documents and applications.",
              },
              {
                number: "04",
                title: "Track",
                description:
                  "Follow your request and receive updates throughout the process.",
              },
            ].map((step) => (
              <div key={step.number} className="relative text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-600/20">
                  {step.number}
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= AI SECTION ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 to-indigo-800 p-8 sm:p-12 lg:p-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-xl text-white">
                ✦
              </div>

              <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
                Smart assistance with AI.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-blue-100">
                SevaNex is designed to use AI to help people understand
                services, identify requirements, assist with forms and provide
                guidance throughout their service journey.
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

            {/* AI visual */}
            <div className="hidden lg:block">
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                <div className="rounded-2xl bg-slate-950/40 p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-sm font-bold text-white">
                      AI
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        SevaNex Assistant
                      </p>

                      <p className="text-xs text-blue-200">Online</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="ml-auto max-w-xs rounded-2xl rounded-br-md bg-blue-600 px-4 py-3 text-sm text-white">
                      I need help with a service.
                    </div>

                    <div className="max-w-xs rounded-2xl rounded-bl-md bg-white/10 px-4 py-3 text-sm text-blue-100">
                      I can help you understand the available services and
                      required documents.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Not sure which service you need?
          </h2>

          <p className="mt-4 text-slate-500">
            Create an account and get started with SevaNex.
          </p>

          <Link
            href="/register"
            className="mt-7 inline-flex rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
          >
            Create your account
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Services;
