"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CALENDLY_URL = "https://calendly.com/p-bisadi/15min";

const links = [
  { href: "#mission", label: "Mission" },
  { href: "#metrics", label: "Therapy Metrics" },
  { href: "#content", label: "Personalized Content" },
  { href: "#approach", label: "Our Approach" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-teal-100 bg-surface/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="#top" className="flex items-center" aria-label="Conscious Flow AI home">
          <Image
            src="/logo.png"
            alt="Conscious Flow AI"
            width={1974}
            height={780}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7 text-sm font-medium text-muted">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-teal-600">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-violet-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-violet-600"
          >
            Book a call
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-teal-700 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-teal-100 bg-surface md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3 text-sm font-medium text-muted">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2 transition-colors hover:bg-teal-50 hover:text-teal-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full bg-violet-500 px-5 py-2 text-center font-semibold text-white"
              >
                Book a call
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
