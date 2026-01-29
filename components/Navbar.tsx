"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Sobre mí", href: "/about" },
  { name: "Proyectos", href: "/projects" },
  { name: "Contacto", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-200 bg-white/95 shadow-lg shadow-zinc-200/20 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/95 dark:shadow-zinc-900/20"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 blur transition-opacity duration-300 group-hover:opacity-70" />
            <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 text-sm font-bold text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-violet-500/50">
              PA
            </span>
          </div>
          <div className="hidden flex-col sm:flex">
            <span className="text-lg font-bold text-zinc-900 transition-colors group-hover:text-violet-600 dark:text-zinc-100 dark:group-hover:text-violet-400">
              Patricio Arratia
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              Ingeniero civil en Informática
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 p-1.5 dark:border-zinc-800 dark:bg-zinc-900 md:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            const isHovered = hoveredItem === item.name;

            return (
              <Link
                key={item.name}
                href={item.href}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-zinc-900 text-white shadow-lg dark:bg-white dark:text-zinc-900"
                    : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                }`}
              >
                <span className="relative z-10">
                  {item.name}
                </span>
                {/* Hover background */}
                {!isActive && isHovered && (
                  <span className="absolute inset-0 rounded-full bg-zinc-200/50 dark:bg-zinc-700/50" />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-violet-500/30"
          >
            <span className="relative z-10">Hablemos</span>
            <svg
              className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-600 transition-all hover:border-violet-300 hover:bg-violet-50 hover:text-violet-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-violet-700 dark:hover:bg-violet-950 dark:hover:text-violet-400 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Abrir menú</span>
          <div className="flex flex-col items-center justify-center gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
                mobileMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
                mobileMenuOpen ? "scale-0 opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
                mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-zinc-200 bg-white transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-950 md:hidden ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-1 px-6 py-4">
          {navigation.map((item, index) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg"
                    : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                }`}
                style={{
                  transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms",
                  transform: mobileMenuOpen ? "translateX(0)" : "translateX(-20px)",
                  opacity: mobileMenuOpen ? 1 : 0,
                }}
              >
                {item.name}
                {isActive && (
                  <svg
                    className="ml-auto h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </Link>
            );
          })}

          {/* Mobile CTA */}
          <div className="pt-4">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-3 text-base font-semibold text-white shadow-lg transition-all hover:shadow-violet-500/30"
            >
              <span>Hablemos</span>
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
