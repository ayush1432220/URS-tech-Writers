"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { Button } from "@/app/components/common/Button.jsx";
import { NAV_LINKS } from "@/app/components/constants/navigation.js";

export default function Navbar() {
  const [activeDesktopMenu, setActiveDesktopMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);

  const toggleMobileMenu = (label) => {
    setActiveMobileMenu((current) => (current === label ? null : label));
    setActiveMobileSubmenu(null);
  };

  const toggleMobileSubmenu = (label) => {
    setActiveMobileSubmenu((current) => (current === label ? null : label));
  };

  const closeAllMenus = () => {
    setActiveDesktopMenu(null);
    setMobileMenuOpen(false);
    setActiveMobileMenu(null);
    setActiveMobileSubmenu(null);
  };

  return (
    <nav className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-3 py-2 lg:px-10">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logoo.jpg"
            alt="UrsWriter"
            width={180}
            height={65}
            className="h-auto"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-10 text-md text-slate-600 lg:flex">
          {NAV_LINKS.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => {
                if (item.children) {
                  setActiveDesktopMenu(item.label);
                }
              }}
              onMouseLeave={() => {
                if (item.children) {
                  setActiveDesktopMenu(null);
                }
              }}
            >
              <Link
                className="flex items-center gap-1 transition hover:text-blue-600"
                href={item.href}
              >
                {item.label}
                {item.children ? <ChevronDown size={16} strokeWidth={1.8} /> : null}
              </Link>

              {item.children && activeDesktopMenu === item.label ? (
                <div className="absolute left-1/2 top-full z-50 w-[min(1016px,calc(100vw-96px))] -translate-x-1/2 pt-3">
                  <div className="grid grid-cols-4 gap-x-14 gap-y-8 rounded-lg bg-white px-9 py-9 shadow-[0_20px_55px_rgba(15,23,42,0.18)]">
                    {item.children.map((child) => (
                      <div key={child.label} className="min-w-0">
                        <Link
                          href={child.href}
                          className="mb-4 block text-base font-semibold leading-tight text-blue-600 transition hover:text-blue-700"
                        >
                          {child.label}
                        </Link>

                        {child.children ? (
                          <div className="space-y-3">
                            {child.children.map((grandchild) => (
                            <Link
                              key={grandchild.label}
                              href={grandchild.href}
                              className="flex items-center gap-3 text-[15px] leading-5 text-[#00125f] transition hover:text-blue-600"
                            >
                              <ChevronRight
                                size={15}
                                strokeWidth={1.9}
                                className="shrink-0 text-[#00125f]"
                              />
                              <span className="truncate">{grandchild.label}</span>
                            </Link>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          {/* <Button as="link" href="/about" variant="ghost" className="hidden md:inline-flex">
            About Us
          </Button> */}
          <Button as="link" href="/#pricing">
            Get Quote
          </Button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-blue-600 hover:text-blue-600 lg:hidden"
            onClick={() => setMobileMenuOpen((current) => !current)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen ? (
        <div className="border-t border-slate-200 bg-white px-8 py-4 lg:hidden">
          <div className="mx-auto max-w-7xl space-y-2">
            {NAV_LINKS.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200/80">
                <div className="flex items-center justify-between px-4 py-3">
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
                    onClick={closeAllMenus}
                  >
                    {item.label}
                  </Link>

                  {item.children ? (
                    <button
                      type="button"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-600 transition hover:bg-slate-100 hover:text-blue-600"
                      onClick={() => toggleMobileMenu(item.label)}
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <ChevronDown
                        size={18}
                        className={activeMobileMenu === item.label ? "rotate-180 transition" : "transition"}
                      />
                    </button>
                  ) : null}
                </div>

                {item.children && activeMobileMenu === item.label ? (
                  <div className="border-t border-slate-200 bg-slate-50/80 px-3 py-3">
                    {item.children.map((child) => (
                      <div key={child.label} className="overflow-hidden rounded-xl bg-white">
                        <div className="flex items-center justify-between px-4 py-3">
                          <Link
                            href={child.href}
                            className="text-sm text-slate-700 transition hover:text-blue-600"
                            onClick={closeAllMenus}
                          >
                            {child.label}
                          </Link>

                          {child.children ? (
                            <button
                              type="button"
                              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-600 transition hover:bg-slate-100 hover:text-blue-600"
                              onClick={() => toggleMobileSubmenu(child.label)}
                              aria-label={`Toggle ${child.label} submenu`}
                            >
                              <ChevronRight
                                size={18}
                                className={activeMobileSubmenu === child.label ? "rotate-90 transition" : "transition"}
                              />
                            </button>
                          ) : null}
                        </div>

                        {child.children && activeMobileSubmenu === child.label ? (
                          <div className="border-t border-slate-200 bg-white px-4 py-2">
                            {child.children.map((grandchild) => (
                              <Link
                                key={grandchild.label}
                                href={grandchild.href}
                                className="block py-3 text-sm text-slate-600 transition hover:text-blue-600"
                                onClick={closeAllMenus}
                              >
                                {grandchild.label}
                              </Link>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
}
