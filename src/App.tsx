/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { StackSection } from './components/StackSection';
import { CertificationsSection } from './components/CertificationsSection';
import { EducationAndResumeSection } from './components/EducationAndResumeSection';
import { ContactSection } from './components/ContactSection';
import { CertificateModal } from './components/Modals';
import {
  ThemeEffectType,
  ThemeTransitionOverlay,
} from './components/ThemeTransitionOverlay';
import { CertificationItem, PROFILE } from './data/portfolioData';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof document === 'undefined') return true;
    return document.documentElement.classList.contains('dark');
  });

  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const [themeEffect, setThemeEffect] = useState<ThemeEffectType>(null);
  const effectTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      try {
        localStorage.setItem('maruf-portfolio-theme', 'dark');
      } catch {
        // Ignore storage errors
      }
    } else {
      root.classList.remove('dark');
      try {
        localStorage.setItem('maruf-portfolio-theme', 'light');
      } catch {
        // Ignore storage errors
      }
    }
  }, [isDark]);

  useEffect(() => {
    return () => {
      if (effectTimerRef.current !== null) {
        window.clearTimeout(effectTimerRef.current);
      }
    };
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      if (effectTimerRef.current !== null) {
        window.clearTimeout(effectTimerRef.current);
      }
      setThemeEffect(nextIsDark ? 'bats' : 'glass-water');
      effectTimerRef.current = window.setTimeout(() => {
        setThemeEffect(null);
      }, 950);
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#F6FAF7] text-[#0C1F17] dark:bg-[#060E0A] dark:text-[#ECF7F1] transition-colors duration-200">
      {/* Ambient Botanical Emerald Backdrop for Frosted Glass Depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 overflow-hidden z-0"
      >
        <div className="absolute -top-32 -left-24 w-[32rem] h-[32rem] rounded-full bg-emerald-400/18 dark:bg-emerald-500/14 blur-3xl" />
        <div className="absolute top-[36%] -right-28 w-[30rem] h-[30rem] rounded-full bg-teal-400/14 dark:bg-emerald-700/16 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 w-[28rem] h-[28rem] rounded-full bg-emerald-300/16 dark:bg-emerald-600/12 blur-3xl" />
      </div>

      {/* Lightweight Theme Transition Animation */}
      <ThemeTransitionOverlay effect={themeEffect} />

      {/* Main Content Stack */}
      <div className="relative z-10">
        <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

        <main>
          <HeroSection />

          <AboutSection />

          <ProjectsSection />

          <StackSection />

          <CertificationsSection onSelectCert={setSelectedCert} />

          <EducationAndResumeSection />

          <ContactSection />
        </main>

        {/* Minimal Footer */}
        <footer className="border-t border-emerald-950/10 dark:border-emerald-300/15 py-7">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#3E564B] dark:text-[#9AB8A8]">
            <p>&copy; {new Date().getFullYear()} {PROFILE.name}</p>

            <div className="flex items-center gap-5">
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
              >
                GitHub
              </a>
              <a
                href="#top"
                aria-label="Back to top"
                className="inline-flex items-center gap-1 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
              >
                <span>Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </footer>
      </div>

      {/* View-only Certificate Lightbox */}
      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
}
