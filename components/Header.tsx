"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    children: [
      { label: "About Us", href: "/about/about-us" },
      { label: "Our General Overseer", href: "/about/general-overseer" },
      { label: "Our Statement of Faith", href: "/about/statement-of-faith" },
      { label: "Our History & Vision", href: "/about/history-and-vision" },
    ],
  },
  {
    label: "Contact",
    children: [
      { label: "Contact Us", href: "/contact-us" },
      { label: "How to Become a Christian", href: "/how-to-become-a-christian" },
      { label: "Prayer Requests", href: "/prayer-requests" },
    ],
  },
  {
    label: "Ministries",
    children: [
      { label: "Church Departments", href: "/church-departments" },
      { label: "Resources for TOLIC Church Pastors", href: "/resources-for-pastors" },
    ],
  },
  {
    label: "Explore",
    children: [
      { label: "Celebration", href: "/celebration" },
      { label: "Videos", href: "/videos" },
      { label: "Directory", href: "/directory" },
    ],
  },
  {
    label: "Links",
    children: [
      { label: "Firebrand Int'l Gospel Missions", href: "/firebrand-missions" },
      { label: "Women's Ministry", href: "/womens-ministry" },
      { label: "Staff Email", href: "/staff-email" },
    ],
  },
];

const dropdownLinkClass =
  "block px-4 py-2 text-[#f5f0e6] normal-case hover:bg-white/10";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const pathname = usePathname();

  // Close the mobile menu after navigating to a new page.
  useEffect(() => {
    setOpen(false);
    setOpenSub(null);
  }, [pathname]);

  // Stop the page behind the open menu from scrolling.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-[#0f2e1a] text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        {/* Logo and church name */}
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="TOLIC Logo"
            width={40}
            height={40}
            className="h-10 w-10 shrink-0"
            priority
          />
          <span
            className="text-xs font-bold leading-tight tracking-wider text-green-700 sm:text-sm"
            style={{ fontVariant: "small-caps" }}
          >
            Tree of Life International Churches
          </span>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-6 text-sm font-semibold uppercase lg:flex xl:gap-8">
          <li>
            <Link
              href="/"
              className={`pb-1 ${
                pathname === "/" ? "border-b-2 border-white" : ""
              }`}
            >
              Home
            </Link>
          </li>

          {NAV.filter((item) => item.children).map((item) => (
            <li key={item.label} className="group relative">
              <button type="button" className="cursor-pointer uppercase">
                {item.label}
              </button>
              <ul className="absolute left-0 top-full z-20 hidden min-w-56 flex-col bg-black py-2 shadow-lg group-focus-within:flex group-hover:flex">
                {item.children!.map((child) => (
                  <li key={child.href}>
                    <Link href={child.href} className={dropdownLinkClass}>
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* Hamburger button (phones and tablets) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-md hover:bg-white/10 lg:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-white transition ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-white/10 bg-[#0f2e1a] lg:hidden"
        >
          <ul className="px-4 py-2 sm:px-6">
            <li className="border-b border-white/10">
              <Link
                href="/"
                className={`block py-4 text-lg font-semibold ${
                  pathname === "/" ? "text-white" : "text-white/90"
                }`}
              >
                Home
              </Link>
            </li>

            {NAV.filter((item) => item.children).map((item) => (
              <li
                key={item.label}
                className="border-b border-white/10 last:border-0"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenSub(openSub === item.label ? null : item.label)
                  }
                  aria-expanded={openSub === item.label}
                  className="flex w-full items-center justify-between py-4 text-left text-lg font-semibold"
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={`text-sm transition-transform ${
                      openSub === item.label ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {openSub === item.label && (
                  <ul className="pb-3 pl-4">
                    {item.children!.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block py-3 text-base text-[#f5f0e6]"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}