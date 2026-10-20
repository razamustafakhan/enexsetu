import Link from "next/link";
import {
  ShieldCheck,
  Zap,
  Smartphone,
  Home,
  Activity,
  Headphones,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
};

const features: Feature[] = [
  {
    title: "Secure by design",
    description:
      "We are building SevaNex with security and responsible handling of customer information at its core.",
    icon: ShieldCheck,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Simple & convenient",
    description:
      "A straightforward digital experience helps you find services, submit applications and manage requests.",
    icon: Zap,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    title: "Digital-first experience",
    description:
      "Access your services and applications from the web today, with mobile experiences planned for the future.",
    icon: Smartphone,
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    title: "Doorstep assistance",
    description:
      "For eligible services, connect with assistance from local service partners without unnecessary travel.",
    icon: Home,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "Track your application",
    description:
      "Keep an eye on your application progress and receive important updates throughout the process.",
    icon: Activity,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    title: "Help when you need it",
    description:
      "Get support when you have questions about services, applications or the next step in your journey.",
    icon: Headphones,
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
  },
];

export default function WhySevaNex() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-secondary)]">
              Why SevaNex
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl">
              Designed around the way people need services
            </h2>

            <p className="mt-4 text-base leading-7 text-[var(--color-text-secondary)]">
              We are building a simpler digital platform where people can
              discover services, complete applications and stay informed without
              unnecessary complexity.
            </p>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-secondary)]"
          >
            Learn about SevaNex
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Features */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-[var(--color-border)] bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-secondary)]/30 hover:shadow-[var(--shadow-md)]"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.iconBg}`}
                >
                  <Icon
                    className={`h-6 w-6 ${feature.iconColor}`}
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="mt-5 text-base font-semibold text-[var(--color-text)]">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Panel */}
        <div className="mt-12 overflow-hidden rounded-2xl bg-[var(--color-primary)]">
          <div className="grid lg:grid-cols-[1.2fr_1fr]">
            {/* Content */}
            <div className="p-7 sm:p-9 lg:p-12">
              <p className="text-sm font-semibold text-[var(--color-accent)]">
                One platform. Many possibilities.
              </p>

              <h3 className="mt-3 max-w-xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Making digital services more accessible, one step at a time.
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
                SevaNex is being designed as a technology platform that can
                connect citizens, service providers and partners through a
                common digital experience.
              </p>

              <Link
                href="/services"
                className="mt-7 inline-flex h-11 items-center gap-2 rounded-[var(--radius-md)] bg-white px-5 text-sm font-semibold text-[var(--color-primary)] transition-all hover:bg-[var(--color-surface-alt)] active:scale-[0.98]"
              >
                Explore services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Checklist */}
            <div className="border-t border-white/10 bg-white/5 p-7 sm:p-9 lg:border-l lg:border-t-0 lg:p-12">
              <p className="text-sm font-semibold text-white">
                What we're building
              </p>

              <div className="mt-6 space-y-4">
                {[
                  "A simple service discovery experience",
                  "Digital application and document workflows",
                  "Transparent application tracking",
                  "A growing partner ecosystem",
                  "Web and mobile access",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent)]" />

                    <span className="text-sm leading-6 text-white/80">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
