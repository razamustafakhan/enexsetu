import {
  Users,
  Layers3,
  MapPinned,
  Handshake,
  ShieldCheck,
} from "lucide-react";

type Stat = {
  label: string;
  value: string;
  description: string;
  icon: React.ElementType;
};

const stats: Stat[] = [
  {
    value: "Growing",
    label: "Service Network",
    description: "A platform designed to bring multiple services together.",
    icon: Layers3,
  },
  {
    value: "Digital",
    label: "First Experience",
    description: "Discover, apply and track services online.",
    icon: ShieldCheck,
  },
  {
    value: "Local",
    label: "Service Partners",
    description: "Building a network of trusted service providers.",
    icon: Handshake,
  },
  {
    value: "One",
    label: "Connected Platform",
    description: "A single place for users, partners and service operations.",
    icon: Users,
  },
];

export default function Stats() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface-alt)] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-secondary)]">
            SevaNex at a Glance
          </p>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-[var(--color-text)] sm:text-3xl">
            Built to grow with the people we serve
          </h2>

          <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)] sm:text-base">
            We are building the foundation for a connected digital service
            ecosystem.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-10 grid overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={[
                  "p-6 sm:p-7",
                  index !== 0
                    ? "border-t border-[var(--color-border)] sm:border-l lg:border-t-0"
                    : "",
                  index === 2 ? "lg:border-l" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]/5">
                    <Icon
                      className="h-5 w-5 text-[var(--color-primary)]"
                      strokeWidth={1.8}
                    />
                  </div>

                  <MapPinned className="h-4 w-4 text-[var(--color-text-muted)]" />
                </div>

                <p className="mt-6 text-2xl font-bold text-[var(--color-primary)]">
                  {stat.value}
                </p>

                <p className="mt-1 text-sm font-semibold text-[var(--color-text)]">
                  {stat.label}
                </p>

                <p className="mt-2 text-xs leading-5 text-[var(--color-text-secondary)]">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust note */}
        <div className="mt-6 flex items-center justify-center gap-2 text-center">
          <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-600" />

          <p className="text-xs text-[var(--color-text-muted)]">
            Platform metrics will be updated with verified operational data as
            SevaNex grows.
          </p>
        </div>
      </div>
    </section>
  );
}
