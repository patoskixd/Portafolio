"use client";

import Image from "next/image";
import { CallToAction, Badge, ProjectCard } from "@/components";
import { profile } from "@/data/profile";
import { getFeaturedProjects } from "@/data/projects";
import { useEffect, useState } from "react";

// Typewriter effect hook
const useTypewriter = (words: string[], typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < word.length) {
          setCurrentText(word.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return currentText;
};

// Icon components
const Icons = {
  code: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  brain: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  smartphone: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  arrow: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  ),
  github: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  linkedin: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  email: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const [mounted, setMounted] = useState(false);
  const typedText = useTypewriter([
    "Desarrollo Full-Stack",
    "Inteligencia Artificial",
    "Aplicaciones Móviles",
    "Arquitecturas Escalables",
  ]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24">
        {/* Main content */}
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          {/* Profile Image */}
          <div className={`-mt-6 mb-8 transition-all duration-700 sm:-mt-8 md:-mt-10 ${mounted ? "translate-y-0 opacity-100 scale-100" : "-translate-y-4 opacity-0 scale-95"}`}>
            <div className="relative mx-auto">
              {/* Glow effect - softened */}
              <div className="absolute -inset-6 mx-auto h-40 w-40 rounded-full bg-gradient-to-r from-violet-600/80 to-purple-600/80 opacity-15 blur-2xl sm:h-48 sm:w-48 md:h-56 md:w-56" />
              {/* Image container */}
              <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-full border-4 border-white shadow-2xl ring-4 ring-violet-500/15 dark:border-zinc-800 dark:ring-violet-400/15 sm:h-44 sm:w-44 md:h-52 md:w-52">
                <Image
                  src="/images/profile/Foto.jpg"
                  alt="Patricio Arratia"
                  width={208}
                  height={208}
                  className="h-full w-full scale-110 object-cover object-top"
                  priority
                />
              </div>
              {/* Status indicator */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 shadow-lg dark:bg-zinc-800 sm:px-4 sm:py-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
                </span>
                <span className="text-xs font-medium text-zinc-600 dark:text-zinc-300 sm:text-sm">Disponible</span>
              </div>
            </div>
          </div>

          {/* Greeting */}
          <p className={`mb-4 text-lg font-medium text-zinc-600 transition-all delay-100 duration-700 dark:text-zinc-400 ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
             ¡Hola! Soy
          </p>

          {/* Name with gradient */}
          <h1 className={`bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 bg-clip-text text-5xl font-bold tracking-tight text-transparent transition-all delay-200 duration-700 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-100 sm:text-6xl md:text-7xl lg:text-8xl ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            {profile.name}
          </h1>

          {/* Role */}
          <p className={`mt-4 text-xl font-semibold text-zinc-700 transition-all delay-300 duration-700 dark:text-zinc-300 sm:text-2xl ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            {profile.role}
          </p>

          {/* Typewriter effect */}
          <div className={`mt-6 flex flex-col items-center justify-center gap-1 transition-all delay-[400ms] duration-700 sm:flex-row sm:gap-2 ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            <span className="text-base text-zinc-500 dark:text-zinc-500 sm:text-lg">Especializado en</span>
            <span className="inline-block min-w-[200px] text-center text-base font-semibold text-violet-600 dark:text-violet-400 sm:min-w-[280px] sm:text-left sm:text-lg">
              {typedText}
              <span className="animate-blink ml-0.5 inline-block h-5 w-0.5 bg-violet-600 dark:bg-violet-400" />
            </span>
          </div>

          {/* Tagline */}
          <p className={`mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-600 transition-all delay-500 duration-700 dark:text-zinc-400 ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            {profile.tagline}
          </p>

          {/* CTAs */}
          <div className={`mt-10 flex flex-wrap items-center justify-center gap-4 transition-all delay-[600ms] duration-700 ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            <CallToAction href="/projects" className="group gap-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500">
              Ver Proyectos
              <span className="transition-transform duration-300 group-hover:translate-x-1">{Icons.arrow}</span>
            </CallToAction>
            <CallToAction href={profile.cvUrl} variant="secondary" download>
              Descargar CV
            </CallToAction>
            <CallToAction href="/contact" variant="ghost">
              Contactar
            </CallToAction>
          </div>

          {/* Social Links */}
          <div className={`mt-12 flex items-center justify-center gap-4 transition-all delay-700 duration-700 ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition-all hover:scale-110 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-300 dark:hover:bg-zinc-100 dark:hover:text-zinc-900"
              aria-label="GitHub"
            >
              {Icons.github}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition-all hover:scale-110 hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-blue-500 dark:hover:bg-blue-600 dark:hover:text-white"
              aria-label="LinkedIn"
            >
              {Icons.linkedin}
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition-all hover:scale-110 hover:border-emerald-600 hover:bg-emerald-600 hover:text-white dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:bg-emerald-600 dark:hover:text-white"
              aria-label="Email"
            >
              {Icons.email}
            </a>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="relative py-24">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent dark:via-violet-500/10" />
        
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <span className="inline-block rounded-full bg-gradient-to-r from-violet-500 to-purple-600 px-4 py-1.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25">
              ¿Qué puedo hacer?
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              Especialidades Técnicas
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
              Áreas donde combino experiencia práctica con tecnologías de vanguardia
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {profile.highlights.map((highlight, index) => {
              const gradients = [
                "from-violet-500 to-purple-600",
                "from-pink-500 to-rose-600",
                "from-cyan-500 to-blue-600",
              ];
              const gradient = gradients[index % gradients.length];
              
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-zinc-200/60 bg-gradient-to-br from-white via-white to-zinc-50 p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-zinc-700/60 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800"
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-[0.03]`} />
                  
                  {/* Decorative blur */}
                  <div className={`absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-gradient-to-br ${gradient} opacity-10 blur-3xl transition-all duration-500 group-hover:opacity-20 group-hover:scale-110`} />

                  {/* Icon */}
                  <div className={`relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}>
                    {Icons[highlight.icon as keyof typeof Icons]}
                  </div>

                  <h3 className="relative mb-3 text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    {highlight.title}
                  </h3>
                  <p className="relative mb-5 text-sm text-zinc-600 dark:text-zinc-400">
                    {highlight.description}
                  </p>

                  {/* Technologies */}
                  {'technologies' in highlight && (
                    <div className="relative flex flex-wrap gap-2">
                      {(highlight.technologies as string[]).map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-lg border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Bottom border gradient */}
                  <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${gradient} transition-all duration-500 group-hover:w-full`} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-end">
            <div className="text-center sm:text-left">
              <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                Portfolio
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
                Proyectos Destacados
              </h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Soluciones reales con impacto medible
              </p>
            </div>
            <CallToAction href="/projects" variant="ghost" className="group gap-2">
              Ver todos
              <span className="transition-transform duration-300 group-hover:translate-x-1">{Icons.arrow}</span>
            </CallToAction>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                description={project.shortDescription}
                technologies={project.technologies}
                category={project.category}
                image={project.image}
                imageLayout={project.imageLayout}
                featured={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600" />
        
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Me encantaría conocer sobre tu próximo proyecto y cómo puedo ayudarte a hacerlo realidad.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <CallToAction
              href="/contact"
              className="border-2 border-white bg-white text-violet-600 hover:bg-transparent hover:text-white"
            >
              Hablemos
            </CallToAction>
            <CallToAction
              href={`mailto:${profile.email}`}
              variant="ghost"
              className="border-2 border-white/30 text-white hover:border-white hover:bg-white/10"
            >
              {profile.email}
            </CallToAction>
          </div>
        </div>
      </section>
    </main>
  );
}
