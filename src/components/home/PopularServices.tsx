import Link from "next/link";
import {
  ArrowRight,
  FileText,
  CreditCard,
  Landmark,
  BriefcaseBusiness,
  Smartphone,
  Home,
} from "lucide-react";

type PopularService = {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  href: string;
};

const popularServices: PopularService[] = [
  {
    id: "income-certificate",
    title: "Income Certificate",
    description:
      "Apply for an income certificate through a simple digital process.",
    category: "Certificates",
    icon: FileText,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    href: "/services/income-certificate",
  },
  {
    id: "financial-services",
    title: "Financial Services",
    description:
      "Access convenient financial services with assistance when you need it.",
    category: "Financial",
    icon: CreditCard,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    href: "/services/financial",
  },
  {
    id: "government-services",
    title: "Government Services",
    description:
      "Discover essential government-related digital services in one place.",
    category: "Government",
    icon: Landmark,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    href: "/services/government",
  },
  {
    id: "business-registration",
    title: "Business Services",
    description:
      "Get help with registrations, documentation and other business needs.",
    category: "Business",
    icon: BriefcaseBusiness,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    href: "/services/business",
  },
  {
    id: "digital-services",
    title: "Digital Services",
    description:
      "Get assistance with common digital services and online applications.",
    category: "Digital",
    icon: Smartphone,
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
    href: "/services/digital",
  },
  {
    id: "doorstep-services",
    title: "Doorstep Services",
    description:
      "Request eligible services and assistance from the comfort of your home.",
    category: "Doorstep",
    icon: Home,
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
    href: "/services/doorstep",
  },
];

export default function PopularServices() {
  return (
    <section className="bg-[var(--color-background)] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-secondary)]">
              Popular Services
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl">
              Services people use most
            </h2>

            <p className="mt-4 text-base leading-7 text-[var(--color-text-secondary)]">
              Find commonly requested services and start your application
              online.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-secondary)]"
          >
            View all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Service Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {popularServices.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.id}
                href={service.href}
                className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-secondary)]/30 hover:shadow-[var(--shadow-lg)]"
              >
                {/* Top */}
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${service.iconBg}`}
                  >
                    <Icon
                      className={`h-6 w-6 ${service.iconColor}`}
                      strokeWidth={1.8}
                    />
                  </div>

                  <span className="rounded-full bg-[var(--color-surface-alt)] px-2.5 py-1 text-[11px] font-medium text-[var(--color-text-muted)]">
                    {service.category}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-5 text-lg font-semibold text-[var(--color-text)]">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                  {service.description}
                </p>

                {/* CTA */}
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[var(--color-secondary)]">
                  Start now
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>

                {/* Decorative background */}
                <div className="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-[var(--color-secondary)]/5 transition-transform duration-300 group-hover:scale-150" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
