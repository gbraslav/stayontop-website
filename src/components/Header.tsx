"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
  { label: "Privacy", href: "/privacy" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur-sm dark:border-stone-700 dark:bg-stone-950/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="StayOnTop home">
          <Image
            src="/logo-horizontal.png"
            alt="StayOnTop"
            width={2822}
            height={574}
            priority
            className="h-20 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-stone-600 transition-colors hover:text-teal-600 dark:text-stone-400 dark:hover:text-teal-400"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#beta"
            className="rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
          >
            Join beta
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="inline-flex items-center justify-center rounded-lg p-2 text-stone-600 transition-colors hover:bg-stone-100 md:hidden dark:text-stone-400 dark:hover:bg-stone-800"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-stone-200 bg-white px-4 pb-6 pt-4 md:hidden dark:border-stone-700 dark:bg-stone-950"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-base font-medium text-stone-700 transition-colors hover:text-teal-600 dark:text-stone-300 dark:hover:text-teal-400"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#beta"
              className="mt-2 inline-block rounded-xl bg-teal-600 px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-teal-700"
              onClick={() => setMobileOpen(false)}
            >
              Join beta
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
