import { MessageSquare } from "lucide-react";

export default function FounderNote() {
  return (
    <section className="bg-stone-50 py-24 dark:bg-stone-900 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50">
          Why I&apos;m building this
        </h2>

        <div className="mt-12 rounded-2xl border border-stone-200 bg-white p-8 shadow-sm dark:border-stone-700 dark:bg-stone-800 lg:p-10">
          <blockquote className="text-lg leading-relaxed text-stone-700 dark:text-stone-300">
            &ldquo;Important family responsibilities too often arrive through email and then
            disappear into noise. Missing just one insurance renewal, registration form, or payment
            can create unnecessary cost and stress. I&apos;m building StayOnTop to make those
            responsibilities easier to catch, review, and manage before they become
            urgent.&rdquo;
          </blockquote>

          <p className="mt-6 text-base leading-relaxed text-stone-500 dark:text-stone-400">
            Built by a product and technology leader who has spent years designing software that
            helps people manage complexity more clearly.
          </p>
        </div>

        <div className="mt-8 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-base font-semibold text-teal-600 transition-colors hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
          >
            <MessageSquare className="h-4 w-4" />
            Questions? Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
