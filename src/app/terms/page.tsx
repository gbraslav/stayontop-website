import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Use — StayOnTop",
  description:
    "Terms of use for StayOnTop, the tool that helps families stay ahead of important tasks hidden in email.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white dark:bg-stone-950">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50">
            Terms of Use
          </h1>
          <p className="mt-4 text-sm text-stone-500 dark:text-stone-400">
            Last updated: April 2026
          </p>

          <div className="prose-stone mt-12 space-y-10 text-base leading-relaxed text-stone-700 dark:text-stone-300">
            <section>
              <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
                Service description
              </h2>
              <p className="mt-3">
                StayOnTop is a tool that connects to your email accounts and scans incoming
                messages to detect items that may require action — such as bills, school forms,
                insurance renewals, registration deadlines, and reminders. Detected items are
                presented in a review-and-action workflow so you can decide what needs attention.
              </p>
              <p className="mt-3">
                StayOnTop is designed to assist your judgment by surfacing likely action items.
                It does not guarantee that all important emails will be detected, nor does it
                take action on your behalf without your explicit approval.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
                Your account
              </h2>
              <p className="mt-3">
                To use StayOnTop, you must create an account and connect at least one email
                account. You are responsible for maintaining the security of your account
                credentials and for all activity that occurs under your account.
              </p>
              <p className="mt-3">
                You must be at least 18 years old to create an account and use the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
                Your responsibilities
              </h2>
              <p className="mt-3">You agree to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Use StayOnTop only for its intended purpose — managing household and personal
                  tasks surfaced from email
                </li>
                <li>
                  Review items presented by StayOnTop and use your own judgment about what
                  requires action
                </li>
                <li>
                  Not rely solely on StayOnTop for time-critical obligations — the service is
                  designed to help, not replace, your attention to important responsibilities
                </li>
                <li>
                  Not attempt to misuse, reverse-engineer, or interfere with the operation of
                  the service
                </li>
                <li>
                  Provide accurate information when creating your account
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
                What StayOnTop provides
              </h2>
              <p className="mt-3">
                StayOnTop provides a best-effort service to detect and surface likely action
                items from your connected email accounts. The service includes:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Automated scanning of incoming emails for likely action items</li>
                <li>A review queue where detected items are presented for your approval</li>
                <li>An active list of approved items sorted by urgency</li>
                <li>Daily summary notifications</li>
                <li>The ability to connect and disconnect email accounts</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
                Disclaimer
              </h2>
              <p className="mt-3">
                StayOnTop is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
                warranties of any kind, either express or implied. While we work to make the
                service reliable and accurate, we do not guarantee that:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>All important emails will be detected and surfaced</li>
                <li>Detection will always be accurate or timely</li>
                <li>The service will be uninterrupted or error-free</li>
                <li>The service will meet all of your specific requirements</li>
              </ul>
              <p className="mt-3">
                StayOnTop is not a substitute for your own attention to important
                responsibilities. You should not rely exclusively on StayOnTop for managing
                critical deadlines, payments, or obligations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
                Limitation of liability
              </h2>
              <p className="mt-3">
                To the maximum extent permitted by law, StayOnTop and its operators shall not be
                liable for any indirect, incidental, special, consequential, or punitive damages,
                including but not limited to loss of data, missed deadlines, late fees, or other
                financial losses arising from your use of or inability to use the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
                Termination
              </h2>
              <p className="mt-3">
                You may stop using StayOnTop and delete your account at any time. We reserve the
                right to suspend or terminate accounts that violate these terms or are used in
                ways that could harm the service or other users.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
                Changes to these terms
              </h2>
              <p className="mt-3">
                These terms may be updated as the product evolves. Significant changes will be
                communicated through the service or by email. Continued use of StayOnTop after
                changes constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
                Contact
              </h2>
              <p className="mt-3">
                If you have questions about these terms, contact us at{" "}
                <a
                  href="mailto:hello@stayontop.app"
                  className="text-teal-600 underline decoration-teal-300 underline-offset-4 hover:text-teal-700 dark:text-teal-400 dark:decoration-teal-700 dark:hover:text-teal-300"
                >
                  hello@stayontop.app
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
