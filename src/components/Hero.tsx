import { ArrowRight, ChevronDown } from "lucide-react";

const mockupItems = [
  { label: "Car insurance renewal", tag: "Renewal", days: "Due in 5 days", color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" },
  { label: "School field trip form", tag: "Form", days: "Due in 3 days", color: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400" },
  { label: "Electric bill payment", tag: "Bill", days: "Due in 7 days", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
  { label: "Soccer registration", tag: "Registration", days: "Due in 10 days", color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-stone-950">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-50/50 to-transparent dark:from-teal-950/20 dark:to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-32 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div className="flex flex-col justify-center">
            <p className="hero-animate hero-animate-delay-1 mb-4 text-sm font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
              For busy families and households
            </p>
            <h1 className="hero-animate hero-animate-delay-2 text-4xl font-bold leading-tight tracking-tight text-stone-900 sm:text-5xl lg:text-6xl dark:text-stone-50">
              Never miss the important stuff buried in email.
            </h1>
            <p className="hero-animate hero-animate-delay-3 mt-6 text-lg leading-relaxed text-stone-600 dark:text-stone-400">
              StayOnTop helps you catch bills, school forms, renewals, registrations, and other
              important tasks hiding in your inbox — then turns them into a simple review-and-action
              list.
            </p>

            <div className="hero-animate hero-animate-delay-4 mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#beta"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-teal-700 hover:shadow-md hover:-translate-y-0.5"
              >
                Join the beta
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-stone-300 bg-white px-6 py-3.5 text-base font-semibold text-stone-700 shadow-sm transition-all hover:bg-stone-50 hover:shadow-md hover:-translate-y-0.5 dark:border-stone-600 dark:bg-stone-900 dark:text-stone-300 dark:hover:bg-stone-800"
              >
                See how it works
                <ChevronDown className="h-4 w-4" />
              </a>
            </div>

            <p className="hero-animate hero-animate-delay-4 mt-6 text-sm text-stone-500 dark:text-stone-500">
              Built to reduce missed deadlines, last-minute stress, and household inbox overload.
            </p>
          </div>

          {/* Mockup */}
          <div className="hero-mockup-animate flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-lg dark:border-stone-700 dark:bg-stone-900">
                {/* App mockup header */}
                <div className="border-b border-stone-200 bg-stone-50 px-5 py-3 dark:border-stone-700 dark:bg-stone-800">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-stone-300 dark:bg-stone-600" />
                    <div className="h-3 w-3 rounded-full bg-stone-300 dark:bg-stone-600" />
                    <div className="h-3 w-3 rounded-full bg-stone-300 dark:bg-stone-600" />
                    <span className="ml-3 text-xs font-medium text-stone-400">StayOnTop</span>
                  </div>
                </div>
                {/* Mockup content */}
                <div className="p-5">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500">
                    Items to review
                  </p>
                  {mockupItems.map((item, i) => (
                    <div
                      key={item.label}
                      className="hero-mockup-item-animate mb-3 flex items-center justify-between rounded-xl border border-stone-200 px-4 py-3 last:mb-0 dark:border-stone-700"
                      style={{ animationDelay: `${0.6 + i * 0.12}s` }}
                    >
                      <div>
                        <p className="text-sm font-medium text-stone-900 dark:text-stone-100">{item.label}</p>
                        <div className="mt-1 flex items-center gap-2">
                          <span className={`inline-block rounded-md px-2 py-0.5 text-xs font-medium ${item.color}`}>
                            {item.tag}
                          </span>
                          <span className="text-xs text-stone-400 dark:text-stone-500">{item.days}</span>
                        </div>
                      </div>
                      <div className="flex gap-1.5">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-teal-50 text-xs text-teal-600 dark:bg-teal-900/30 dark:text-teal-400">
                          &#10003;
                        </span>
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-stone-100 text-xs text-stone-400 dark:bg-stone-800 dark:text-stone-500">
                          &#10005;
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
