"use client";

import Link from "next/link";
import { profile } from "@/data/profile";
import { useState } from "react";

const quickLinks = [
  { name: "Inicio", href: "/" },
  { name: "Sobre mí", href: "/about" },
  { name: "Proyectos", href: "/projects" },
  { name: "Contacto", href: "/contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: profile.github,
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
    color: "hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900",
  },
  {
    name: "LinkedIn",
    href: profile.linkedin,
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "hover:bg-blue-600 hover:text-white",
  },
  {
    name: "Email",
    href: `mailto:${profile.email}`,
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    color: "hover:bg-emerald-600 hover:text-white",
  },
];

export function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Main Footer Content */}
        <div className="grid gap-12 py-16 md:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 blur transition-opacity duration-300 group-hover:opacity-70" />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 text-lg font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                  PA
                </span>
              </div>
              <div>
                <span className="block text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  Patricio Arratia
                </span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  Ingeniero Civil en Informática
                </span>
              </div>
            </Link>

            <p className="max-w-xs text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Construyendo soluciones tecnológicas que transforman ideas en realidad. 
              Especializado en desarrollo web full-stack e inteligencia artificial.
            </p>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 dark:border-green-900 dark:bg-green-950">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              <span className="text-sm font-medium text-green-700 dark:text-green-400">
                Disponible para proyectos
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              Navegación
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="group inline-flex items-center gap-2 text-zinc-600 transition-colors hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400"
                  >
                    <span
                      className={`inline-block h-1 w-1 rounded-full bg-violet-500 transition-all duration-300 ${
                        hoveredLink === link.name ? "w-4" : ""
                      }`}
                    />
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              Conectemos
            </h3>

            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-3 text-zinc-600 transition-colors hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 transition-all group-hover:bg-violet-100 group-hover:shadow-md dark:bg-zinc-800 dark:group-hover:bg-violet-900/30">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                  {profile.email}
                </span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.name !== "Email" ? "_blank" : undefined}
                  rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                  className={`group relative flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-600 transition-all duration-300 hover:scale-110 hover:border-transparent hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                  {/* Tooltip */}
                  <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 dark:bg-zinc-100 dark:text-zinc-900">
                    {social.name}
                    <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-zinc-900 dark:border-t-zinc-100" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-zinc-200 py-6 dark:border-zinc-800 sm:flex-row">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            © {currentYear} Patricio Arratia. Hecho con Next.js
          </p>

          <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
            <span className="flex items-center gap-1">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
              Todos los sistemas operativos
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
