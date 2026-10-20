"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What is SevaNex?",
    answer:
      "SevaNex is a digital service platform designed to help people discover, apply for and track services through one convenient online experience.",
  },
  {
    question: "What services are available on SevaNex?",
    answer:
      "The platform is being designed to support multiple service categories, including government-related services, documents and certificates, financial services, business services, digital services and eligible doorstep assistance.",
  },
  {
    question: "Can I apply for a service online?",
    answer:
      "For supported services, you will be able to complete the application process digitally, provide the required information, upload documents and track the progress of your request.",
  },
  {
    question: "Can I track my application?",
    answer:
      "Yes. SevaNex is designed with application tracking so users can view the progress of their requests and receive important status updates.",
  },
  {
    question: "Is my information secure?",
    answer:
      "SevaNex is being built with security, privacy and responsible data handling as important parts of the platform architecture. Specific security and privacy practices will depend on the services and integrations offered.",
  },
  {
    question: "Can service providers join SevaNex?",
    answer:
      "Yes. Service providers and eligible businesses can apply to become SevaNex partners. Approved partners will be able to manage service requests and participate in the platform ecosystem.",
  },
  {
    question: "Will SevaNex have a mobile app?",
    answer:
      "The platform is being designed with a mobile-first approach. A dedicated mobile experience can be introduced as the platform and service network grow.",
  },
  {
    question: "How can I contact SevaNex support?",
    answer:
      "You can use the contact and support options available on the platform. As the support system develops, SevaNex can provide dedicated customer support channels and application assistance.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="bg-[var(--color-surface-alt)] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-secondary)]">
            FAQ
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl">
            Frequently asked questions
          </h2>

          <p className="mt-4 text-base leading-7 text-[var(--color-text-secondary)]">
            Have a question about SevaNex? Find answers to some common questions
            below.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-[var(--color-border)] last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left transition-colors hover:bg-[var(--color-surface-alt)] sm:px-6"
                >
                  <span className="text-sm font-semibold text-[var(--color-text)] sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    className={[
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
                      "bg-[var(--color-surface-alt)]",
                      "text-[var(--color-text-muted)]",
                      "transition-transform duration-200",
                      isOpen ? "rotate-180" : "",
                    ].join(" ")}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                <div id={`faq-answer-${index}`} hidden={!isOpen}>
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                    <p className="max-w-3xl text-sm leading-7 text-[var(--color-text-secondary)]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom */}
        <p className="mt-6 text-center text-sm text-[var(--color-text-muted)]">
          Can&apos;t find what you&apos;re looking for?{" "}
          <a
            href="/contact"
            className="font-semibold text-[var(--color-secondary)] hover:underline"
          >
            Contact our team
          </a>
          .
        </p>
      </div>
    </section>
  );
}
