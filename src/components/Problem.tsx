import { AlertTriangle, Clock, Search, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const problems = [
  {
    icon: AlertTriangle,
    title: "Missed deadlines",
    body: "A form, payment, or renewal gets buried and only shows up when it is almost too late.",
  },
  {
    icon: Clock,
    title: "Last-minute stress",
    body: "You remember something important only after a reminder, penalty, or scramble.",
  },
  {
    icon: Search,
    title: "Too much inbox scanning",
    body: "You keep re-checking email just to make sure nothing critical was missed.",
  },
  {
    icon: Users,
    title: "Split household responsibility",
    body: "Important items live across different inboxes, senders, and routines.",
  },
];

export default function Problem() {
  return (
    <section className="bg-white py-24 dark:bg-stone-950 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50">
              Email is where important life admin gets lost.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-stone-600 dark:text-stone-400">
              Bills, insurance notices, school forms, activity registrations, appointment requests,
              and renewal reminders all land in the same inbox as promotions, newsletters, and noise.
              That is how important responsibilities get buried until they become urgent.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {problems.map((problem, i) => (
            <ScrollReveal key={problem.title} variant={i % 2 === 0 ? "left" : "right"} delay={i * 120}>
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 transition-shadow hover:shadow-md dark:border-stone-700 dark:bg-stone-900 lg:p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 dark:bg-amber-900/20">
                  <problem.icon className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100">
                  {problem.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-stone-600 dark:text-stone-400">
                  {problem.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
