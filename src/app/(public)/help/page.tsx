import Link from "next/link";

const helpCategories = [
  {
    icon: "◉",
    title: "Account & Profile",
    description:
      "Get help with registration, login, profile and account settings.",
    questions: [
      "How do I create an account?",
      "How do I update my profile?",
      "I forgot my password",
    ],
  },
  {
    icon: "▣",
    title: "Services",
    description:
      "Understand available services and what documents you may need.",
    questions: [
      "How do I find a service?",
      "What documents are required?",
      "How do I request a service?",
    ],
  },
  {
    icon: "◷",
    title: "Applications",
    description: "Track your application and understand its current status.",
    questions: [
      "How can I track my application?",
      "What does my application status mean?",
      "My application is delayed",
    ],
  },
  {
    icon: "₹",
    title: "Payments",
    description: "Get assistance with fees, payments, receipts and refunds.",
    questions: [
      "How do I make a payment?",
      "Where can I find my receipt?",
      "My payment was unsuccessful",
    ],
  },
  {
    icon: "⌂",
    title: "Doorstep Service",
    description: "Learn how our home assistance and agent visits work.",
    questions: [
      "How do I request a home visit?",
      "How is an agent assigned?",
      "How do I reschedule my appointment?",
    ],
  },
  {
    icon: "✦",
    title: "AI Assistance",
    description:
      "Learn how SevaNex AI can help you understand services and forms.",
    questions: [
      "What can the AI assistant do?",
      "Can AI fill my application?",
      "How does AI use my information?",
    ],
  },
];

const popularQuestions = [
  "How do I create a SevaNex account?",
  "How can I request a doorstep service?",
  "How can I track my application?",
  "What documents do I need?",
  "How do I update my profile?",
  "Where can I find my payment receipt?",
];

const Help = () => {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-blue-400" />

              <span className="text-sm font-medium text-slate-300">
                SevaNex Help Center
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              How can we
              <span className="text-blue-400"> help you?</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Find answers, understand services, track applications and get
              assistance with your SevaNex account.
            </p>

            {/* Search */}
            <div className="mx-auto mt-9 max-w-2xl">
              <div className="flex items-center rounded-2xl border border-white/10 bg-white p-2 shadow-2xl">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center text-slate-400">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-4-4" />
                  </svg>
                </div>

                <input
                  type="text"
                  placeholder="Search for help..."
                  className="h-11 w-full bg-transparent px-2 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                />

                <button
                  type="button"
                  className="hidden rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:block"
                >
                  Search
                </button>
              </div>

              <p className="mt-3 text-xs text-slate-500">
                Try searching for &quot;application tracking&quot; or
                &quot;forgot password&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= POPULAR QUESTIONS ================= */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Quick answers
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Popular questions
            </h2>
          </div>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {popularQuestions.map((question) => (
            <button
              key={question}
              type="button"
              className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:border-blue-200 hover:shadow-md"
            >
              <span className="pr-4 text-sm font-medium text-slate-700 transition group-hover:text-blue-600">
                {question}
              </span>

              <span className="shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600">
                →
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* ================= HELP CATEGORIES ================= */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Help topics
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              What do you need help with?
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Choose a topic to find useful information and answers.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {helpCategories.map((category) => (
              <div
                key={category.title}
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-100/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-lg font-bold text-blue-600">
                  {category.icon}
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {category.description}
                </p>

                <div className="mt-6 space-y-3">
                  {category.questions.map((question) => (
                    <button
                      key={question}
                      type="button"
                      className="flex w-full items-center gap-2 text-left text-sm text-slate-600 transition hover:text-blue-600"
                    >
                      <span className="text-blue-500">›</span>
                      <span>{question}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW TO GET HELP ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              1
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
              Find an answer
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Search our help center to quickly find information about your
              account, services or application.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              2
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
              Check your application
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Sign in to your account to view application updates, documents,
              payments and service requests.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
              3
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
              Contact support
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              If you cannot find an answer, our support team can help you with
              your service request.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SUPPORT CTA ================= */}
      <section className="border-t border-slate-200 bg-slate-950">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-10">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-xl text-white shadow-lg shadow-blue-600/20">
            ?
          </div>

          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
            Still need help?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            Our support team is here to help you understand the next step and
            resolve issues related to your SevaNex service requests.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Contact support
            </Link>

            <Link
              href="/services"
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Help;
