import Link from "next/link";

const categories = [
  "All",
  "Government Schemes",
  "Digital Services",
  "How To",
  "Business",
  "Technology",
];

const posts = [
  {
    category: "Government Schemes",
    title: "Understanding Government Schemes and How to Apply",
    description:
      "A simple guide to understanding government schemes, eligibility requirements and the application process.",
    date: "May 12, 2026",
    readTime: "6 min read",
    color: "from-blue-600 to-indigo-600",
  },
  {
    category: "Digital Services",
    title: "How Digital Services Are Changing Everyday Life",
    description:
      "Learn how digital platforms are making essential services more accessible, convenient and transparent.",
    date: "May 08, 2026",
    readTime: "5 min read",
    color: "from-violet-600 to-purple-600",
  },
  {
    category: "How To",
    title: "How to Prepare Your Documents Before Applying Online",
    description:
      "A practical checklist to help you prepare your documents before starting an online service application.",
    date: "May 04, 2026",
    readTime: "4 min read",
    color: "from-emerald-600 to-teal-600",
  },
  {
    category: "Business",
    title: "Digital Tools Every Small Business Should Know",
    description:
      "Explore useful digital tools that can help small businesses manage customers, documents and daily operations.",
    date: "April 29, 2026",
    readTime: "7 min read",
    color: "from-orange-500 to-red-500",
  },
  {
    category: "Technology",
    title: "How AI Can Simplify Service Delivery",
    description:
      "Discover how artificial intelligence can assist users with forms, documents, support and service discovery.",
    date: "April 24, 2026",
    readTime: "8 min read",
    color: "from-cyan-600 to-blue-600",
  },
  {
    category: "Government Schemes",
    title: "A Beginner's Guide to Finding the Right Scheme",
    description:
      "Learn what information to check before choosing a government scheme and starting an application.",
    date: "April 20, 2026",
    readTime: "5 min read",
    color: "from-pink-600 to-rose-600",
  },
];

const Blog = () => {
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
                SevaNex Insights
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Knowledge that makes
              <span className="text-blue-400"> services simpler.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Guides, practical information and insights about digital services,
              government schemes, technology and everyday business.
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
                  placeholder="Search articles..."
                  className="h-11 w-full bg-transparent px-2 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                />

                <button
                  type="button"
                  className="hidden rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:block"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl overflow-x-auto px-6 sm:px-10 lg:px-12">
          <div className="flex min-w-max items-center gap-2 py-5">
            {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  index === 0
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED ARTICLE ================= */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
        <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-2">
          {/* Visual */}
          <div className="relative min-h-[320px] overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-800">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

            <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-blue-300/10 blur-2xl" />

            <div className="relative flex h-full min-h-[320px] items-center justify-center p-10">
              <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-sm font-bold text-blue-700">
                    SN
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      SevaNex Guide
                    </p>

                    <p className="text-xs text-blue-200">Digital Services</p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="h-3 w-3/4 rounded-full bg-white/20" />
                  <div className="h-3 w-full rounded-full bg-white/10" />
                  <div className="h-3 w-5/6 rounded-full bg-white/10" />
                </div>

                <div className="mt-6 flex gap-3">
                  <div className="h-16 flex-1 rounded-xl bg-white/10" />
                  <div className="h-16 flex-1 rounded-xl bg-white/10" />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <span className="w-fit rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600">
              Featured Guide
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Making digital services easier for everyone
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
              Technology can make essential services easier to understand and
              access. Explore how SevaNex aims to connect people with digital
              assistance, service information and doorstep support.
            </p>

            <div className="mt-6 flex items-center gap-4 text-xs text-slate-400">
              <span>May 15, 2026</span>
              <span>•</span>
              <span>8 min read</span>
            </div>

            <Link
              href="/blog/making-digital-services-easier"
              className="mt-8 inline-flex w-fit items-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Read article
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= ARTICLES ================= */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Latest articles
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
                Explore our latest insights
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              Practical information designed to help you better understand
              digital services and technology.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40"
              >
                {/* Article visual */}
                <div
                  className={`relative h-48 overflow-hidden bg-gradient-to-br ${post.color}`}
                >
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />

                  <div className="absolute -bottom-16 -left-8 h-40 w-40 rounded-full bg-white/10" />

                  <div className="relative flex h-full items-center justify-center">
                    <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-5 backdrop-blur">
                      <div className="h-2 w-24 rounded-full bg-white/60" />

                      <div className="mt-3 h-2 w-32 rounded-full bg-white/30" />

                      <div className="mt-3 h-2 w-20 rounded-full bg-white/20" />
                    </div>
                  </div>
                </div>

                {/* Article content */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold text-blue-600">
                      {post.category}
                    </span>

                    <span className="text-xs text-slate-400">
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold leading-snug text-slate-900 transition group-hover:text-blue-600">
                    {post.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
                    {post.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-xs text-slate-400">{post.date}</span>

                    <Link
                      href="/blog"
                      className="text-sm font-semibold text-blue-600 transition hover:text-blue-700"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-10">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-xl text-white shadow-lg shadow-blue-600/20">
            ✉
          </div>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">
            Stay informed.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            Get useful guides, digital-service updates and SevaNex news
            delivered to your inbox.
          </p>

          <div className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email address"
              className="h-12 flex-1 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            <button
              type="button"
              className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Subscribe
            </button>
          </div>

          <p className="mt-3 text-xs text-slate-400">
            You can unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-10">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Need help with a service?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
            Explore SevaNex services or contact our support team if you need
            assistance.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/services"
              className="rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Explore services
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
