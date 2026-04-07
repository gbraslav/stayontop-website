import { Link2, Eye, ThumbsUp, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Link2,
    step: "1",
    title: "Connect your inboxes",
    body: "Link one or more email accounts. StayOnTop scans for messages that look like they need action — bills, forms, renewals, registrations, and more.",
  },
  {
    icon: Eye,
    step: "2",
    title: "Review what matters",
    body: "New items appear in a review queue. You see what was found, why it was flagged, and when it might be due.",
  },
  {
    icon: ThumbsUp,
    step: "3",
    title: "Approve or dismiss",
    body: "Decide what belongs on your action list and what you can safely ignore. Nothing moves forward without your review.",
  },
  {
    icon: TrendingUp,
    step: "4",
    title: "Stay ahead",
    body: "Approved items go to your active list, sorted by urgency. Daily summaries keep important tasks visible so nothing disappears into noise.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24 dark:bg-stone-950 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50">
            How it works
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.step} className="relative text-center">
              {/* Step number */}
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-600 text-lg font-bold text-white shadow-sm">
                {step.step}
              </div>
              <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100">
                {step.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-stone-600 dark:text-stone-400">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-base text-stone-500 dark:text-stone-500">
          Over time, StayOnTop learns which types of emails matter most to your household and gets
          better at surfacing the right things.
        </p>
      </div>
    </section>
  );
}
