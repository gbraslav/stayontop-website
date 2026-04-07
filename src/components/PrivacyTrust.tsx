import Link from "next/link";
import { Shield, Eye, UserX, Trash2, Lock } from "lucide-react";

const controls = [
  { icon: Eye, text: "You review every item before it becomes active — nothing is acted on automatically" },
  { icon: Shield, text: "Email content is processed to detect action items, not stored for other purposes" },
  { icon: UserX, text: "No data is shared with advertisers or third parties for marketing" },
  { icon: Trash2, text: "You can disconnect accounts and request data deletion at any time" },
  { icon: Lock, text: "Designed with minimal-access principles — only what is needed to surface tasks" },
];

export default function PrivacyTrust() {
  return (
    <section className="bg-stone-50 py-24 dark:bg-stone-900 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50">
            Built with privacy and trust in mind
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-stone-600 dark:text-stone-400">
            If a product touches your email, trust is not optional. StayOnTop is being built to help
            you identify important household tasks while keeping you in control of what gets surfaced
            and acted on.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <ul className="space-y-5">
            {controls.map((control) => (
              <li key={control.text} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 dark:bg-teal-900/30">
                  <control.icon className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                </div>
                <p className="pt-1.5 text-base leading-relaxed text-stone-700 dark:text-stone-300">
                  {control.text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/privacy"
            className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-700 shadow-sm transition-all hover:bg-stone-50 hover:shadow-md dark:border-stone-600 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700"
          >
            Read privacy details
          </Link>
        </div>
      </div>
    </section>
  );
}
