import Link from "next/link";
import {
  Search,
  ClipboardPenLine,
  Upload,
  CreditCard,
  FileCheck2,
  ArrowRight,
  Check,
} from "lucide-react";

type Step = {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Choose a service",
    description:
      "Find the service you need using search or browse our service categories.",
    icon: Search,
  },
  {
    number: "02",
    title: "Submit your details",
    description:
      "Fill in a simple digital application with your basic information.",
    icon: ClipboardPenLine,
  },
  {
    number: "03",
    title: "Upload documents",
    description:
      "Securely upload the documents required for your selected service.",
    icon: Upload,
  },
  {
    number: "04",
    title: "Make payment",
    description:
      "Pay applicable service charges securely through available payment options.",
    icon: CreditCard,
  },
  {
    number: "05",
    title: "Track your application",
    description:
      "Monitor your application status and receive updates until completion.",
    icon: FileCheck2,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[var(--color-surface-alt)] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-secondary)]">
            How It Works
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl">
            Get your service in simple steps
          </h2>

          <p className="mt-4 text-base leading-7 text-[var(--color-text-secondary)]">
            SevaNex makes the process simple—from finding a service to tracking
            your application.
          </p>
        </div>

        {/* Desktop Steps */}
        <div className="relative mt-14 hidden lg:block">
          {/* Connecting line */}
          <div className="absolute left-[10%] right-[10%] top-7 h-px bg-[var(--color-border)]" />

          <div className="relative grid grid-cols-5 gap-6">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="relative text-center">
                  {/* Number/Icon */}
                  <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-[var(--color-surface-alt)] bg-[var(--color-primary)] text-white shadow-sm">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>

                  {/* Step */}
                  <p className="mt-5 text-xs font-bold tracking-wider text-[var(--color-secondary)]">
                    STEP {step.number}
                  </p>

                  <h3 className="mt-2 text-base font-semibold text-[var(--color-text)]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Steps */}
        <div className="mt-10 space-y-4 lg:hidden">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative flex gap-4 rounded-2xl border border-[var(--color-border)] bg-white p-5"
              >
                {/* Vertical line */}
                {index !== steps.length - 1 && (
                  <div className="absolute bottom-0 left-[31px] top-[68px] w-px bg-[var(--color-border)]" />
                )}

                {/* Icon */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-white">
                  <Icon className="h-4 w-4" />
                </div>

                {/* Content */}
                <div>
                  <p className="text-[11px] font-bold tracking-wider text-[var(--color-secondary)]">
                    STEP {step.number}
                  </p>

                  <h3 className="mt-1 text-base font-semibold text-[var(--color-text)]">
                    {step.title}
                  </h3>

                  <p className="mt-1.5 text-sm leading-6 text-[var(--color-text-secondary)]">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits */}
        <div className="mt-14 rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold text-[var(--color-primary)]">
                A simpler way to access services
              </p>

              <h3 className="mt-2 text-xl font-bold text-[var(--color-text)] sm:text-2xl">
                Everything organized in one place.
              </h3>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Simple digital applications",
                "Secure document handling",
                "Application tracking",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50">
                    <Check className="h-3 w-3 text-emerald-600" />
                  </div>

                  <span className="text-sm text-[var(--color-text-secondary)]">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/how-it-works"
              className="inline-flex shrink-0 items-center justify-center gap-2 text-sm font-semibold text-[var(--color-secondary)] transition-colors hover:text-[var(--color-primary)]"
            >
              Learn more
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
