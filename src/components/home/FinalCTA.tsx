import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const points = [
  "Discover services in one place",
  "Apply through a simple digital process",
  "Track your application easily",
];

export default function FinalCTA() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--color-primary)]">
          {/* Decorative background */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--color-secondary)]/20" />

          <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/5" />

          <div className="pointer-events-none absolute right-1/3 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

          <div className="relative px-6 py-12 text-center sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            {/* Icon */}
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
              <Sparkles
                className="h-6 w-6 text-[var(--color-accent)]"
                strokeWidth={1.8}
              />
            </div>

            {/* Heading */}
            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
              Get Started
            </p>

            <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Your services. Your time. One simple platform.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Discover the services you need, start your application and stay
              informed throughout the process with SevaNex.
            </p>

            {/* Benefits */}
            <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-x-7 sm:gap-y-3">
              {points.map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--color-accent)]" />

                  <span className="text-sm text-white/80">{point}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-[var(--radius-md)] bg-white px-6 text-sm font-semibold text-[var(--color-primary)] shadow-sm transition-all hover:bg-[var(--color-surface-alt)] active:scale-[0.98]"
              >
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/register"
                className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] border border-white/20 px-6 text-sm font-semibold text-white transition-all hover:bg-white/10 active:scale-[0.98]"
              >
                Create an Account
              </Link>
            </div>

            {/* Small note */}
            <p className="mt-6 text-xs text-white/50">
              Start exploring SevaNex and discover what&apos;s available in your
              area.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
