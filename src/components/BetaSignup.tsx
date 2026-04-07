"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function BetaSignup() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xpwdgkjq", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch {
      // Silently handle - user can retry
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="beta" className="bg-white py-24 dark:bg-stone-950 lg:py-32">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50">
            Get early access
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-stone-600 dark:text-stone-400">
            Be one of the first to try StayOnTop and help shape the product.
          </p>
        </div>

        {submitted ? (
          <div className="mt-12 rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center dark:border-emerald-800 dark:bg-emerald-900/20">
            <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600 dark:text-emerald-400" />
            <p className="mt-4 text-lg font-semibold text-emerald-800 dark:text-emerald-200">
              Thanks — you&apos;re on the list.
            </p>
            <p className="mt-2 text-sm text-emerald-600 dark:text-emerald-400">
              No spam. Just product updates and beta access information.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 space-y-6">
            <div>
              <label
                htmlFor="beta-name"
                className="block text-sm font-medium text-stone-700 dark:text-stone-300"
              >
                First name
              </label>
              <input
                type="text"
                id="beta-name"
                name="name"
                required
                className="mt-2 block w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-base text-stone-900 placeholder:text-stone-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-100 dark:placeholder:text-stone-500 dark:focus:border-teal-400"
                placeholder="Your first name"
              />
            </div>

            <div>
              <label
                htmlFor="beta-email"
                className="block text-sm font-medium text-stone-700 dark:text-stone-300"
              >
                Email
              </label>
              <input
                type="email"
                id="beta-email"
                name="email"
                required
                className="mt-2 block w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-base text-stone-900 placeholder:text-stone-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-100 dark:placeholder:text-stone-500 dark:focus:border-teal-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="beta-role"
                className="block text-sm font-medium text-stone-700 dark:text-stone-300"
              >
                I would describe myself as
              </label>
              <select
                id="beta-role"
                name="role"
                required
                className="mt-2 block w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-base text-stone-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-100 dark:focus:border-teal-400"
              >
                <option value="">Select one...</option>
                <option value="busy-parent">Busy parent</option>
                <option value="household-organizer">Household organizer</option>
                <option value="beta-tester">Beta tester</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="beta-notes"
                className="block text-sm font-medium text-stone-700 dark:text-stone-300"
              >
                Anything else you&apos;d like to share?
              </label>
              <textarea
                id="beta-notes"
                name="notes"
                rows={3}
                className="mt-2 block w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-base text-stone-900 placeholder:text-stone-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-100 dark:placeholder:text-stone-500 dark:focus:border-teal-400"
                placeholder="Optional — what problems are you hoping StayOnTop will solve?"
              />
            </div>

            <input type="hidden" name="_subject" value="StayOnTop Beta Signup" />

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-teal-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Submitting..." : "Join the beta"}
              {!submitting && <ArrowRight className="h-4 w-4" />}
            </button>

            <p className="text-center text-sm text-stone-400 dark:text-stone-500">
              No spam. Just product updates and beta access information.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
