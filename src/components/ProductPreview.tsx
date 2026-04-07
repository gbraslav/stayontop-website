export default function ProductPreview() {
  return (
    <section className="bg-white py-24 dark:bg-stone-950 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50">
            Designed for fast review and confident action
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {/* Preview 1: Review Queue */}
          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 dark:border-stone-700 dark:bg-stone-900">
            <div className="border-b border-stone-200 bg-stone-100 px-5 py-3 dark:border-stone-700 dark:bg-stone-800">
              <p className="text-sm font-medium text-stone-500 dark:text-stone-400">Review queue</p>
            </div>
            <div className="space-y-3 p-5">
              {[
                { label: "Home insurance renewal", tag: "Renewal", urgent: true },
                { label: "School photo order form", tag: "Form", urgent: false },
                { label: "Water bill", tag: "Bill", urgent: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-xl border border-stone-200 bg-white px-4 py-3 dark:border-stone-700 dark:bg-stone-800"
                >
                  <div className="flex items-center gap-3">
                    {item.urgent && (
                      <span className="h-2 w-2 rounded-full bg-amber-500" />
                    )}
                    <span className="text-sm font-medium text-stone-900 dark:text-stone-100">
                      {item.label}
                    </span>
                  </div>
                  <span className="rounded-md bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-500 dark:bg-stone-700 dark:text-stone-400">
                    {item.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Preview 2: Active Items */}
          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 dark:border-stone-700 dark:bg-stone-900">
            <div className="border-b border-stone-200 bg-stone-100 px-5 py-3 dark:border-stone-700 dark:bg-stone-800">
              <p className="text-sm font-medium text-stone-500 dark:text-stone-400">Active items</p>
            </div>
            <div className="space-y-3 p-5">
              {[
                { label: "Car registration renewal", due: "Due tomorrow", urgency: "text-rose-600 dark:text-rose-400" },
                { label: "Soccer league signup", due: "Due in 4 days", urgency: "text-amber-600 dark:text-amber-400" },
                { label: "Dental appointment confirmation", due: "Due in 1 week", urgency: "text-stone-500 dark:text-stone-400" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-xl border border-stone-200 bg-white px-4 py-3 dark:border-stone-700 dark:bg-stone-800"
                >
                  <span className="text-sm font-medium text-stone-900 dark:text-stone-100">
                    {item.label}
                  </span>
                  <span className={`text-xs font-medium ${item.urgency}`}>{item.due}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Preview 3: Daily Summary */}
          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 dark:border-stone-700 dark:bg-stone-900">
            <div className="border-b border-stone-200 bg-stone-100 px-5 py-3 dark:border-stone-700 dark:bg-stone-800">
              <p className="text-sm font-medium text-stone-500 dark:text-stone-400">Daily summary</p>
            </div>
            <div className="p-5">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-stone-500 dark:text-stone-400">New items to review</span>
                  <span className="rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-semibold text-teal-700 dark:bg-teal-900/30 dark:text-teal-400">
                    3
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-stone-500 dark:text-stone-400">Due this week</span>
                  <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                    2
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-stone-500 dark:text-stone-400">Completed this week</span>
                  <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                    5
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Preview 4: Item Detail */}
          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 dark:border-stone-700 dark:bg-stone-900">
            <div className="border-b border-stone-200 bg-stone-100 px-5 py-3 dark:border-stone-700 dark:bg-stone-800">
              <p className="text-sm font-medium text-stone-500 dark:text-stone-400">Item detail</p>
            </div>
            <div className="p-5">
              <h4 className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                Car insurance renewal
              </h4>
              <p className="mt-1 text-xs text-stone-500 dark:text-stone-400">
                From: insurance@example.com
              </p>
              <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                Your policy expires on April 15. Review and renew to avoid a coverage gap.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="rounded-xl bg-teal-600 px-4 py-1.5 text-xs font-semibold text-white">
                  Approve
                </span>
                <span className="rounded-xl border border-stone-300 px-4 py-1.5 text-xs font-semibold text-stone-600 dark:border-stone-600 dark:text-stone-400">
                  Dismiss
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-stone-400 dark:text-stone-500">
          Early product preview. Screens shown for illustration.
        </p>
      </div>
    </section>
  );
}
