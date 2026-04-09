"use client";

import { useState } from "react";
import { Send, CheckCircle2, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mqegoewd", {
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
    <section id="contact" className="bg-stone-50 py-24 dark:bg-stone-900 lg:py-32">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50">
              Get in touch
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-stone-600 dark:text-stone-400">
              Interested in the product, partnerships, feedback, or early conversations? Send a
              message.
            </p>
          </div>
        </ScrollReveal>

        {submitted ? (
          <ScrollReveal variant="scale">
            <div className="mt-12 rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center dark:border-emerald-800 dark:bg-emerald-900/20">
              <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600 dark:text-emerald-400" />
              <p className="mt-4 text-lg font-semibold text-emerald-800 dark:text-emerald-200">
                Thanks — I&apos;ll get back to you soon.
              </p>
            </div>
          </ScrollReveal>
        ) : (
          <ScrollReveal delay={150}>
            <form onSubmit={handleSubmit} className="mt-12 space-y-6">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-stone-700 dark:text-stone-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  className="mt-2 block w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-base text-stone-900 placeholder:text-stone-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-100 dark:placeholder:text-stone-500 dark:focus:border-teal-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-stone-700 dark:text-stone-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  className="mt-2 block w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-base text-stone-900 placeholder:text-stone-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-100 dark:placeholder:text-stone-500 dark:focus:border-teal-400"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-reason"
                  className="block text-sm font-medium text-stone-700 dark:text-stone-300"
                >
                  Reason
                </label>
                <select
                  id="contact-reason"
                  name="reason"
                  required
                  className="mt-2 block w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-base text-stone-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-100 dark:focus:border-teal-400"
                >
                  <option value="">Select a reason...</option>
                  <option value="beta">Beta interest</option>
                  <option value="feedback">Feedback</option>
                  <option value="partnership">Partnership</option>
                  <option value="press">Press</option>
                  <option value="general">General question</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-stone-700 dark:text-stone-300"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  className="mt-2 block w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-base text-stone-900 placeholder:text-stone-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-100 dark:placeholder:text-stone-500 dark:focus:border-teal-400"
                  placeholder="Your message..."
                />
              </div>

              <input type="hidden" name="_subject" value="StayOnTop Contact Form" />

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-teal-700 hover:shadow-md hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Sending..." : "Send message"}
                {!submitting && <Send className="h-4 w-4" />}
              </button>
            </form>
          </ScrollReveal>
        )}

        <ScrollReveal delay={200}>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-stone-500 dark:text-stone-400">
            <Mail className="h-4 w-4" />
            <a
              href="mailto:hello@stayontop.app"
              className="underline decoration-stone-300 underline-offset-4 transition-colors hover:text-teal-600 dark:decoration-stone-600 dark:hover:text-teal-400"
            >
              hello@stayontop.app
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
