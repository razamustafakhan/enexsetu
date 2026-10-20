import Link from "next/link";
import { ShieldCheck, Mail, MapPin, ArrowUpRight } from "lucide-react";

const serviceLinks = [
  { name: "All Services", href: "/services" },
  { name: "Government Services", href: "/services/government" },
  { name: "Documents & Certificates", href: "/services/documents" },
  { name: "Financial Services", href: "/services/financial" },
  { name: "Business Services", href: "/services/business" },
  { name: "Doorstep Services", href: "/services/doorstep" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

const partnerLinks = [
  { name: "Become a Partner", href: "/partners" },
  { name: "Partner Login", href: "/partner/login" },
  { name: "Partner Benefits", href: "/partners/benefits" },
  { name: "Business Solutions", href: "/business" },
  { name: "API Platform", href: "/developers" },
];

const supportLinks = [
  { name: "Help Center", href: "/support" },
  { name: "FAQs", href: "/faq" },
  { name: "Contact Support", href: "/support/contact" },
  { name: "Service Status", href: "/status" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Refund Policy", href: "/refund-policy" },
  { name: "Security", href: "/security" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex items-center gap-2"
              aria-label="SevaNex Home"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                <span className="text-xl font-bold text-[var(--color-primary)]">
                  S
                </span>
              </div>

              <span className="text-2xl font-bold tracking-tight">
                <span className="text-white">Seva</span>
                <span className="text-[var(--color-accent)]">Nex</span>
              </span>
            </Link>

            <p className="mt-5 text-sm leading-6 text-slate-300">
              Making essential digital services simple, accessible and
              convenient for everyone.
            </p>

            {/* Security */}
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent)]" />

              <div>
                <p className="text-sm font-semibold text-white">
                  Built with security in mind
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Your information and documents are handled with care.
                </p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>

            <ul className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition-colors hover:text-[var(--color-accent)]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition-colors hover:text-[var(--color-accent)]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Partners
            </h3>

            <ul className="mt-5 space-y-3">
              {partnerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition-colors hover:text-[var(--color-accent)]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Support
            </h3>

            <ul className="mt-5 space-y-3">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition-colors hover:text-[var(--color-accent)]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Email */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
              <Mail className="h-4 w-4 text-[var(--color-accent)]" />
            </div>

            <div>
              <p className="text-xs text-slate-400">Email</p>

              <a
                href="mailto:support@sevanex.com"
                className="text-sm text-slate-200 transition-colors hover:text-[var(--color-accent)]"
              >
                support@sevanex.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
              <MapPin className="h-4 w-4 text-[var(--color-accent)]" />
            </div>

            <div>
              <p className="text-xs text-slate-400">Based in</p>

              <p className="text-sm text-slate-200">India</p>
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3 sm:justify-start lg:justify-end">
            <p className="text-sm text-slate-400">Follow SevaNex</p>

            <div className="flex items-center gap-2">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-xs font-bold transition-colors hover:bg-[var(--color-secondary)]"
              >
                in
              </a>

              <a
                href="#"
                aria-label="X"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-sm font-bold transition-colors hover:bg-[var(--color-secondary)]"
              >
                X
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-xs font-bold transition-colors hover:bg-[var(--color-secondary)]"
              >
                IG
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-xs font-bold transition-colors hover:bg-[var(--color-secondary)]"
              >
                f
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} SevaNex Technologies. All rights
            reserved.
          </p>

          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-slate-400 transition-colors hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
