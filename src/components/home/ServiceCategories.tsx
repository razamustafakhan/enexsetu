import Link from "next/link";
import {
  ArrowRight,
  Landmark,
  FileText,
  WalletCards,
  BriefcaseBusiness,
  Smartphone,
  GraduationCap,
  HeartPulse,
  Plane,
  Lightbulb,
  Home,
} from "lucide-react";

type ServiceCategory = {
  id: string;
  name: string;
  description: string;
  serviceCount: string;
  href: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
};

const categories: ServiceCategory[] = [
  {
    id: "government",
    name: "Government",
    description: "Access essential government-related services.",
    serviceCount: "20+ Services",
    href: "/services/government",
    icon: Landmark,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    id: "documents",
    name: "Documents",
    description: "Apply for certificates and important documents.",
    serviceCount: "25+ Services",
    href: "/services/documents",
    icon: FileText,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    id: "financial",
    name: "Financial",
    description: "Convenient financial and payment services.",
    serviceCount: "15+ Services",
    href: "/services/financial",
    icon: WalletCards,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    id: "business",
    name: "Business",
    description: "Digital solutions for businesses and entrepreneurs.",
    serviceCount: "15+ Services",
    href: "/services/business",
    icon: BriefcaseBusiness,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    id: "digital",
    name: "Digital",
    description: "Everyday digital and online assistance.",
    serviceCount: "10+ Services",
    href: "/services/digital",
    icon: Smartphone,
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    id: "education",
    name: "Education",
    description: "Services for students, learners and institutions.",
    serviceCount: "10+ Services",
    href: "/services/education",
    icon: GraduationCap,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    description: "Discover available healthcare-related services.",
    serviceCount: "10+ Services",
    href: "/services/healthcare",
    icon: HeartPulse,
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
  },
  {
    id: "travel",
    name: "Travel",
    description: "Get assistance with travel-related services.",
    serviceCount: "8+ Services",
    href: "/services/travel",
    icon: Plane,
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
  },
  {
    id: "utilities",
    name: "Utilities",
    description: "Manage everyday utility and essential services.",
    serviceCount: "10+ Services",
    href: "/services/utilities",
    icon: Lightbulb,
    iconBg: "bg-yellow-50",
    iconColor: "text-yellow-600",
  },
  {
    id: "doorstep",
    name: "Doorstep",
    description: "Request eligible services at your doorstep.",
    serviceCount: "10+ Services",
    href: "/services/doorstep",
    icon: Home,
    iconBg: "bg-pink-50",
    iconColor: "text-pink-600",
  },
];

export default function ServiceCategories() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-secondary)]">
            Explore Categories
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl">
            Everything you need, in one place
          </h2>

          <p className="mt-4 text-base leading-7 text-[var(--color-text-secondary)]">
            Explore our growing collection of digital services organized into
            simple categories.
          </p>
        </div>

        {/* Categories */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.id}
                href={category.href}
                className="group rounded-2xl border border-[var(--color-border)] bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-secondary)]/30 hover:shadow-[var(--shadow-md)]"
              >
                {/* Icon */}
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${category.iconBg}`}
                >
                  <Icon
                    className={`h-5 w-5 ${category.iconColor}`}
                    strokeWidth={1.8}
                  />
                </div>

                {/* Name */}
                <h3 className="mt-4 text-sm font-semibold text-[var(--color-text)]">
                  {category.name}
                </h3>

                {/* Description */}
                <p className="mt-2 line-clamp-2 text-xs leading-5 text-[var(--color-text-secondary)]">
                  {category.description}
                </p>

                {/* Count */}
                <div className="mt-4 flex items-center justify-between gap-2">
                  <span className="text-[11px] font-medium text-[var(--color-text-muted)]">
                    {category.serviceCount}
                  </span>

                  <ArrowRight className="h-4 w-4 text-[var(--color-text-muted)] transition-all duration-200 group-hover:translate-x-1 group-hover:text-[var(--color-secondary)]" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex h-10 items-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white px-5 text-sm font-semibold text-[var(--color-primary)] transition-all hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
          >
            Browse all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
