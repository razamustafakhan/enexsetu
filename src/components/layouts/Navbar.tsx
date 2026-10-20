"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { name: "All Services", href: "/services" },
  { name: "Government Services", href: "/services/government" },
  { name: "Documents & Certificates", href: "/services/documents" },
  { name: "Financial Services", href: "/services/financial" },
  { name: "Business Services", href: "/services/business" },
  { name: "Doorstep Services", href: "/services/doorstep" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="SevaNex Home"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-primary)]">
            <span className="text-lg font-bold text-white">S</span>
          </div>

          <span className="text-xl font-bold tracking-tight">
            <span className="text-[var(--color-primary)]">Seva</span>
            <span className="text-[var(--color-secondary)]">Nex</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {/* Services Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]"
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-0 top-10 w-64 rounded-xl border border-[var(--color-border)] bg-white p-2 shadow-lg">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setServicesOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-surface-alt)] hover:text-[var(--color-primary)]"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/how-it-works"
            className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]"
          >
            How It Works
          </Link>

          <Link
            href="/partners"
            className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]"
          >
            For Partners
          </Link>

          <Link
            href="/business"
            className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]"
          >
            For Businesses
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]"
          >
            About
          </Link>

          <Link
            href="/support"
            className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]"
          >
            Help
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/login"
            className="rounded-lg px-4 py-2 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:bg-[var(--color-surface-alt)]"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-lg bg-[var(--color-primary)] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[var(--color-primary-hover)]"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-[var(--color-text)] hover:bg-[var(--color-surface-alt)] lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-[var(--color-border)] bg-white lg:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="space-y-1">
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-medium text-[var(--color-text)] hover:bg-[var(--color-surface-alt)]"
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="ml-3 space-y-1 border-l border-[var(--color-border)] pl-3">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-3 py-2.5 text-sm text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-alt)]"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                href="/how-it-works"
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-[var(--color-text)] hover:bg-[var(--color-surface-alt)]"
              >
                How It Works
              </Link>

              <Link
                href="/partners"
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-[var(--color-text)] hover:bg-[var(--color-surface-alt)]"
              >
                For Partners
              </Link>

              <Link
                href="/business"
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-[var(--color-text)] hover:bg-[var(--color-surface-alt)]"
              >
                For Businesses
              </Link>

              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-[var(--color-text)] hover:bg-[var(--color-surface-alt)]"
              >
                About
              </Link>

              <Link
                href="/support"
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-[var(--color-text)] hover:bg-[var(--color-surface-alt)]"
              >
                Help & Support
              </Link>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 border-t border-[var(--color-border)] pt-4">
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg border border-[var(--color-border)] px-4 py-2.5 text-center text-sm font-semibold text-[var(--color-primary)]"
              >
                Login
              </Link>

              <Link
                href="/register"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg bg-[var(--color-primary)] px-4 py-2.5 text-center text-sm font-semibold text-white"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
