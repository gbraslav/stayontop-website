import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — StayOnTop",
  description:
    "Learn how StayOnTop handles your data, what email information is accessed, and what controls you have.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white dark:bg-stone-950">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-stone-500 dark:text-stone-400">
            Last updated: April 2026
          </p>

          <div className="prose-stone mt-12 space-y-10 text-base leading-relaxed text-stone-700 dark:text-stone-300">
            <section>
              <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
                What StayOnTop is
              </h2>
              <p className="mt-3">
                StayOnTop is a tool that helps busy families and households catch important tasks
                hidden in email — bills, school forms, renewals, registrations, and reminders — and
                organize them into a simple review-and-action workflow. This policy explains how
                your data is handled when you use the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
                What data is accessed
              </h2>
              <p className="mt-3">
                When you connect an email account, StayOnTop accesses incoming email messages to
                detect items that may require action — such as bills, payment notices, school
                forms, insurance renewals, registration deadlines, and appointment requests.
              </p>
              <p className="mt-3">
                StayOnTop processes email metadata (sender, subject, date) and message content
                to identify likely action items. It does not access or process emails for
                advertising, profiling, or any purpose other than surfacing tasks for your review.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
                Why your data is accessed
              </h2>
              <p className="mt-3">
                Your email data is accessed solely to provide the core service: identifying
                important tasks in your inbox and presenting them in a structured workflow. This
                includes:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Scanning incoming messages for likely action items</li>
                <li>Extracting relevant details (what, when, from whom)</li>
                <li>Presenting items in your review queue</li>
                <li>Sending daily summaries of items needing attention</li>
                <li>Improving detection accuracy over time based on your approvals and dismissals</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
                How your data is stored
              </h2>
              <p className="mt-3">
                StayOnTop stores extracted task information (item descriptions, due dates,
                source references) needed to power your review queue and action list. Full email
                content is not permanently stored.
              </p>
              <p className="mt-3">
                Data is stored using encrypted, industry-standard cloud infrastructure. Access
                is limited to what is necessary to operate and improve the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
                Your controls
              </h2>
              <p className="mt-3">
                You are in control of your data and your experience with StayOnTop:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Review first:</strong> Every detected item is presented for your review
                  before it becomes active. Nothing is acted on automatically.
                </li>
                <li>
                  <strong>Dismiss items:</strong> You can dismiss any item that is not relevant
                  to you.
                </li>
                <li>
                  <strong>Manage accounts:</strong> You can connect and disconnect email accounts
                  at any time.
                </li>
                <li>
                  <strong>Data export:</strong> You can request an export of your data.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
                Disconnecting accounts
              </h2>
              <p className="mt-3">
                You can disconnect any email account from StayOnTop at any time. When an account
                is disconnected, StayOnTop will stop scanning that account for new items. Existing
                items already in your review queue or action list will remain until you remove
                them or request deletion.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
                Data deletion
              </h2>
              <p className="mt-3">
                You can request complete deletion of your account and all associated data at any
                time. Upon request, all stored task data, account connections, and preferences
                will be permanently deleted. Deletion requests are processed promptly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
                Third parties
              </h2>
              <p className="mt-3">
                StayOnTop does not sell, share, or provide your email data to advertisers, data
                brokers, or any third parties for marketing purposes. Service providers used to
                operate the platform (such as cloud hosting) are bound by data processing
                agreements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
                Contact
              </h2>
              <p className="mt-3">
                If you have questions about this privacy policy or how your data is handled,
                contact us at{" "}
                <a
                  href="mailto:hello@stayontop.app"
                  className="text-teal-600 underline decoration-teal-300 underline-offset-4 hover:text-teal-700 dark:text-teal-400 dark:decoration-teal-700 dark:hover:text-teal-300"
                >
                  hello@stayontop.app
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
                Changes to this policy
              </h2>
              <p className="mt-3">
                This privacy policy may be updated as the product evolves. Significant changes
                will be communicated through the service or by email. Continued use of StayOnTop
                after changes constitutes acceptance of the updated policy.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
