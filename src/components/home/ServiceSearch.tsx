"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  FileText,
  CreditCard,
  Building2,
  Home,
  X,
} from "lucide-react";

type Service = {
  id: string;
  name: string;
  description: string;
  category: string;
  href: string;
  icon: React.ElementType;
  color: string;
};

const services: Service[] = [
  {
    id: "documents",
    name: "Documents & Certificates",
    description: "Apply for essential documents and certificates.",
    category: "Documents",
    href: "/services/documents",
    icon: FileText,
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: "financial",
    name: "Financial Services",
    description: "Access convenient financial and payment services.",
    category: "Financial",
    href: "/services/financial",
    icon: CreditCard,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    id: "business",
    name: "Business Services",
    description: "Digital services designed for businesses.",
    category: "Business",
    href: "/services/business",
    icon: Building2,
    color: "bg-orange-50 text-orange-600",
  },
  {
    id: "home",
    name: "Doorstep Services",
    description: "Get selected services at your doorstep.",
    category: "Doorstep",
    href: "/services/doorstep",
    icon: Home,
    color: "bg-purple-50 text-purple-600",
  },
];

export default function ServiceSearch() {
  const [query, setQuery] = useState("");

  const filteredServices = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (!search) {
      return services;
    }

    return services.filter(
      (service) =>
        service.name.toLowerCase().includes(search) ||
        service.description.toLowerCase().includes(search) ||
        service.category.toLowerCase().includes(search),
    );
  }, [query]);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-secondary)]">
            Find a Service
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl">
            What service do you need?
          </h2>

          <p className="mt-4 text-base leading-7 text-[var(--color-text-secondary)]">
            Search for a service and discover how SevaNex can help you complete
            it digitally.
          </p>
        </div>

        {/* Search Box */}
        <div className="mx-auto mt-8 max-w-2xl">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--color-text-muted)]" />

            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search services..."
              aria-label="Search services"
              className="h-14 w-full rounded-xl border border-[var(--color-border)] bg-white pl-12 pr-12 text-base text-[var(--color-text)] shadow-[var(--shadow-md)] outline-none transition-all placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-secondary)] focus:ring-4 focus:ring-[var(--color-secondary)]/10"
            />

            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-surface-alt)] hover:text-[var(--color-text)]"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Search hint */}
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            <span className="text-xs text-[var(--color-text-muted)]">
              Popular:
            </span>

            {["Documents", "Financial", "Business", "Doorstep"].map(
              (category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setQuery(category)}
                  className="text-xs font-medium text-[var(--color-secondary)] hover:underline"
                >
                  {category}
                </button>
              ),
            )}
          </div>
        </div>

        {/* Results */}
        <div className="mt-10">
          {filteredServices.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {filteredServices.map((service) => {
                const Icon = service.icon;

                return (
                  <Link
                    key={service.id}
                    href={service.href}
                    className="group rounded-xl border border-[var(--color-border)] bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-secondary)]/30 hover:shadow-[var(--shadow-md)]"
                  >
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-lg ${service.color}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-4 text-base font-semibold text-[var(--color-text)]">
                      {service.name}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                      {service.description}
                    </p>

                    <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-[var(--color-secondary)]">
                      Explore
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            /* Empty State */
            <div className="rounded-xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface-alt)] px-6 py-12 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white">
                <Search className="h-5 w-5 text-[var(--color-text-muted)]" />
              </div>

              <h3 className="mt-4 text-base font-semibold text-[var(--color-text)]">
                No services found
              </h3>

              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                Try searching for another service or category.
              </p>

              <button
                type="button"
                onClick={() => setQuery("")}
                className="mt-4 text-sm font-semibold text-[var(--color-secondary)] hover:underline"
              >
                Clear search
              </button>
            </div>
          )}
        </div>

        {/* All Services */}
        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-secondary)]"
          >
            View all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
