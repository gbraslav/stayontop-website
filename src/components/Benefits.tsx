import { DollarSign, BrainCircuit, LayoutDashboard, Heart } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const benefits = [
  {
    icon: DollarSign,
    title: "Fewer expensive misses",
    body: "Catch the kinds of emails that can lead to late fees, missed renewals, or registration problems.",
  },
  {
    icon: BrainCircuit,
    title: "Less mental load",
    body: "Spend less energy re-reading inboxes and trying to remember what still needs action.",
  },
  {
    icon: LayoutDashboard,
    title: "One clearer view",
    body: "Bring scattered household responsibilities into one place.",
  },
  {
    icon: Heart,
    title: "More peace of mind",
    body: "Know that important tasks are less likely to disappear into email clutter.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-stone-50 py-24 dark:bg-stone-900 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50">
              What you get
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {benefits.map((benefit, i) => (
            <ScrollReveal key={benefit.title} variant="scale" delay={i * 120}>
              <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 dark:border-stone-700 dark:bg-stone-800 lg:p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 dark:bg-teal-900/30">
                  <benefit.icon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-stone-600 dark:text-stone-400">
                  {benefit.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
