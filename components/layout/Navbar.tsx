"use client";
import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

const nav = [
  { label: "Finance", href: "/finance" },
  { label: "Santé", href: "/sante" },
  { label: "Mathématiques", href: "/maths" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-surface-100">
      <nav className="container-xl flex items-center justify-between h-16">
        <Link href="/" className="flex-shrink-0">
          <Logo />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="btn-ghost">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/finance/calculateur-pret" className="btn-primary text-sm">
            Essayer gratuitement
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-surface-600 hover:bg-surface-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-surface-100 bg-white">
          <div className="container-xl py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-3 rounded-xl text-surface-700 hover:bg-surface-50 font-medium transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/finance/calculateur-pret"
              className="btn-primary mt-2 justify-center"
              onClick={() => setOpen(false)}
            >
              Essayer gratuitement
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
