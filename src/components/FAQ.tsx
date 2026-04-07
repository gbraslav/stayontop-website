"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What does StayOnTop actually do?",
    a: "StayOnTop connects to your email accounts and scans incoming messages for items that look like they need action — bills, school forms, insurance renewals, registration deadlines, appointment requests, and similar. It brings those items into a simple review-and-action workflow so you can decide what needs attention without constantly re-checking your inbox.",
  },
  {
    q: "Does StayOnTop read all my email?",
    a: "StayOnTop processes incoming email to detect messages that look like action items. It does not store the full content of your emails or use them for any purpose other than identifying tasks. You stay in control of what gets surfaced and what gets dismissed.",
  },
  {
    q: "Is my email data shared with anyone?",
    a: "No. Your email data is not shared with advertisers, data brokers, or third parties for marketing. StayOnTop is designed to help you manage household tasks, not to monetize your data.",
  },
  {
    q: "Can I disconnect my email at any time?",
    a: "Yes. You can disconnect any email account at any time, and you can request deletion of your data. We believe you should always be in control of your information.",
  },
  {
    q: "Who is StayOnTop for?",
    a: "StayOnTop is designed for busy parents, household organizers, and anyone who manages important family responsibilities through email. If you have ever missed a payment deadline, forgotten to return a school form, or let a registration lapse because it got buried in your inbox, StayOnTop is built for you.",
  },
  {
    q: "How is this different from email filters or labels?",
    a: "Email filters and labels require you to set up rules and keep maintaining them. StayOnTop automatically detects likely action items and presents them in a dedicated review queue — no setup required. Over time, it learns what matters most to your household.",
  },
  {
    q: "Is StayOnTop available now?",
    a: "StayOnTop is currently in development and accepting beta signups. Join the beta to be among the first to try it and help shape the product.",
  },
  {
    q: "How much will StayOnTop cost?",
    a: "Pricing has not been finalized. Beta users will get early access and will help inform the pricing model. The goal is to keep it affordable for families.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-stone-200 dark:border-stone-700">
      <button
        className="flex w-full items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="pr-4 text-base font-semibold text-stone-900 dark:text-stone-100">
          {q}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-stone-400 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-base leading-relaxed text-stone-600 dark:text-stone-400">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-24 dark:bg-stone-950 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50">
          Frequently asked questions
        </h2>
        <div className="mt-12">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
