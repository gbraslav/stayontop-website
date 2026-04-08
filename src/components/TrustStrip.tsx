import { Clock, ShieldCheck, BrainCircuit, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const items = [
  { icon: Clock, text: "Catch important deadlines sooner" },
  { icon: ShieldCheck, text: "Stay in control with review first" },
  { icon: BrainCircuit, text: "Reduce inbox scanning and mental load" },
  { icon: Users, text: "Built for busy families" },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-stone-200 bg-stone-50 dark:border-stone-700 dark:bg-stone-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <ScrollReveal key={item.text} delay={i * 100}>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 dark:bg-teal-900/30">
                  <item.icon className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                </div>
                <p className="text-sm font-medium text-stone-700 dark:text-stone-300">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
