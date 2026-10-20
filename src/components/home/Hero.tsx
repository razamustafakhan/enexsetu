import Link from "next/link";
import {
  ArrowRight,
  Search,
  ShieldCheck,
  Clock3,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-background)]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[var(--color-secondary)]/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-secondary)]/20 bg-[var(--color-secondary)]/5 px-3.5 py-1.5">
              <Sparkles className="h-4 w-4 text-[var(--color-secondary)]" />

              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-secondary)]">
                Digital Services, Simplified
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
              Essential services,
              <span className="block text-[var(--color-secondary)]">
                made simple.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg">
              Access essential digital services from one trusted platform. Apply
              online, submit documents, make payments and track your
              applications with ease.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-primary)] px-5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[var(--color-primary-hover)] active:scale-[0.98]"
              >
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/how-it-works"
                className="inline-flex h-11 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white px-5 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:bg-[var(--color-surface-alt)]"
              >
                How It Works
              </Link>
            </div>

            {/* Trust Points */}
            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 shrink-0 text-[var(--color-secondary)]" />

                <span className="text-xs font-medium text-[var(--color-text-secondary)]">
                  Secure & Trusted
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Clock3 className="h-5 w-5 shrink-0 text-[var(--color-secondary)]" />

                <span className="text-xs font-medium text-[var(--color-text-secondary)]">
                  Easy Application
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Search className="h-5 w-5 shrink-0 text-[var(--color-secondary)]" />

                <span className="text-xs font-medium text-[var(--color-text-secondary)]">
                  Track Anytime
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            {/* Main card */}
            <div className="relative rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-lg)] sm:p-6">
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-4">
                <div>
                  <p className="text-xs font-medium text-[var(--color-text-muted)]">
                    SEVANEX
                  </p>

                  <h2 className="mt-1 text-lg font-semibold text-[var(--color-text)]">
                    Find a Service
                  </h2>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-secondary)]/10">
                  <Search className="h-5 w-5 text-[var(--color-secondary)]" />
                </div>
              </div>

              {/* Search */}
              <div className="mt-5 flex h-11 items-center gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-alt)] px-3">
                <Search className="h-4 w-4 text-[var(--color-text-muted)]" />

                <span className="text-sm text-[var(--color-text-muted)]">
                  Search for a service...
                </span>
              </div>

              {/* Service Cards */}
              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between rounded-xl border border-[var(--color-border)] p-3.5 transition-colors hover:bg-[var(--color-surface-alt)]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                      <span className="text-sm font-bold text-blue-600">
                        ID
                      </span>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-[var(--color-text)]">
                        Documents & Certificates
                      </p>

                      <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">
                        Apply and track documents
                      </p>
                    </div>
                  </div>

                  <ArrowRight className="h-4 w-4 text-[var(--color-text-muted)]" />
                </div>

                <div className="flex items-center justify-between rounded-xl border border-[var(--color-border)] p-3.5 transition-colors hover:bg-[var(--color-surface-alt)]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50">
                      <span className="text-sm font-bold text-emerald-600">
                        ₹
                      </span>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-[var(--color-text)]">
                        Financial Services
                      </p>

                      <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">
                        Convenient digital services
                      </p>
                    </div>
                  </div>

                  <ArrowRight className="h-4 w-4 text-[var(--color-text-muted)]" />
                </div>

                <div className="flex items-center justify-between rounded-xl border border-[var(--color-border)] p-3.5 transition-colors hover:bg-[var(--color-surface-alt)]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50">
                      <span className="text-sm font-bold text-orange-600">
                        BS
                      </span>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-[var(--color-text)]">
                        Business Services
                      </p>

                      <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">
                        Services for businesses
                      </p>
                    </div>
                  </div>

                  <ArrowRight className="h-4 w-4 text-[var(--color-text-muted)]" />
                </div>
              </div>

              {/* Bottom */}
              <div className="mt-5 rounded-xl bg-[var(--color-primary)] p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/60">Need assistance?</p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      Ask SevaNex AI
                    </p>
                  </div>

                  <Sparkles className="h-5 w-5 text-[var(--color-accent)]" />
                </div>
              </div>
            </div>

            {/* Decorative accent */}
            <div className="absolute -bottom-5 -right-5 -z-10 h-32 w-32 rounded-2xl bg-[var(--color-secondary)]/10" />

            <div className="absolute -left-5 -top-5 -z-10 h-24 w-24 rounded-full bg-[var(--color-primary)]/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
