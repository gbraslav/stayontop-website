import { Scan, ListChecks, CheckCircle2, LayoutList, Bell, ShieldAlert } from "lucide-react";

const bullets = [
  { icon: Scan, text: "Detect likely bills, deadlines, forms, renewals, and registrations from connected email" },
  { icon: ListChecks, text: "Surface new items in a review queue so you see what arrived" },
  { icon: CheckCircle2, text: "Approve or dismiss each item before it becomes active" },
  { icon: LayoutList, text: "Keep a clean, prioritized list of what actually needs attention" },
  { icon: Bell, text: "Simple daily summary so nothing slips through quietly" },
];

export default function Solution() {
  return (
    <section className="bg-stone-50 py-24 dark:bg-stone-900 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50">
            StayOnTop turns buried emails into clear next actions.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-stone-600 dark:text-stone-400">
            Instead of forcing you to search your inbox over and over, StayOnTop scans connected
            email accounts for likely action items and brings them into one focused workflow. You
            review what matters, dismiss what does not, and keep moving.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <ul className="space-y-5">
            {bullets.map((bullet) => (
              <li key={bullet.text} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-100 dark:bg-teal-900/30">
                  <bullet.icon className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                </div>
                <p className="pt-1.5 text-base leading-relaxed text-stone-700 dark:text-stone-300">
                  {bullet.text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Callout */}
        <div className="mx-auto mt-12 max-w-2xl">
          <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6 dark:border-teal-800 dark:bg-teal-900/20">
            <div className="flex items-start gap-3">
              <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-teal-600 dark:text-teal-400" />
              <p className="text-base leading-relaxed text-teal-800 dark:text-teal-200">
                <span className="font-semibold">Helpful, not reckless.</span> StayOnTop is designed
                to assist your judgment — not make silent decisions on your behalf.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
