import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const links = [
  { label: "Home", href: "/" },
  { label: "FAQ", href: "/#faq" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white py-12 dark:border-stone-700 dark:bg-stone-950">
      <ScrollReveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left">
            {/* Brand */}
            <div className="flex-1">
              <p className="text-lg font-bold text-stone-900 dark:text-stone-50">StayOnTop</p>
              <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
                Helping families stay ahead of important tasks hidden in email.
              </p>
            </div>

            {/* Links */}
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:justify-end" aria-label="Footer navigation">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-stone-500 transition-colors hover:text-teal-600 dark:text-stone-400 dark:hover:text-teal-400"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-8 border-t border-stone-200 pt-6 text-center dark:border-stone-700">
            <p className="text-sm text-stone-400 dark:text-stone-500">
              &copy; {new Date().getFullYear()} StayOnTop. All rights reserved.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}
