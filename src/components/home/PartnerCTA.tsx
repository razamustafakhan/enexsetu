import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Handshake,
  Users,
} from "lucide-react";

const benefits = [
  "Reach more customers through a digital platform",
  "Manage service requests from one place",
  "Track applications and service operations",
  "Build a trusted digital presence",
];

export default function PartnerCTA() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--color-primary)]">
          {/* Decorative elements */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5" />

          <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[var(--color-secondary)]/10" />

          <div className="relative grid lg:grid-cols-[1.2fr_0.8fr]">
            {/* Left */}
            <div className="p-7 sm:p-10 lg:p-14">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <Handshake
                  className="h-5 w-5 text-[var(--color-accent)]"
                  strokeWidth={1.8}
                />
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                Partner with SevaNex
              </p>

              <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Grow your service business with a digital platform.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                Join the SevaNex partner ecosystem and connect your services
                with customers looking for convenient digital assistance.
              </p>

              {/* Benefits */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]"
                      strokeWidth={2}
                    />

                    <span className="text-sm leading-5 text-white/80">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/partners/apply"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-[var(--radius-md)] bg-white px-5 text-sm font-semibold text-[var(--color-primary)] transition-all hover:bg-[var(--color-surface-alt)] active:scale-[0.98]"
                >
                  Become a Partner
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/partners"
                  className="inline-flex h-11 items-center justify-center rounded-[var(--radius-md)] border border-white/20 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right */}
            <div className="relative border-t border-white/10 bg-white/5 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-14">
              <p className="text-sm font-semibold text-white">
                Built for the ecosystem
              </p>

              <p className="mt-2 text-sm leading-6 text-white/60">
                SevaNex is designed to connect multiple participants through one
                operational platform.
              </p>

              {/* Ecosystem */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <Users className="h-5 w-5 text-white" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Customers
                    </p>
                    <p className="mt-0.5 text-xs text-white/50">
                      Discover and request services
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="h-5 w-px bg-white/20" />
                </div>

                <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <Building2 className="h-5 w-5 text-white" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Service Partners
                    </p>
                    <p className="mt-0.5 text-xs text-white/50">
                      Deliver services and manage requests
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="h-5 w-px bg-white/20" />
                </div>

                <div className="rounded-xl border border-[var(--color-secondary)]/30 bg-[var(--color-secondary)]/10 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-secondary)]">
                    SevaNex Platform
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    One connected service ecosystem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
