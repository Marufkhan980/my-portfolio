import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, Github, Linkedin, ArrowUpRight, User } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { TechSymbol } from './TechIcons';

const FLOATING_SYMBOLS = [
  {
    id: 'js',
    title: 'JavaScript',
    pos: 'top-2 left-4 sm:top-4 sm:left-6',
    delay: 0,
    duration: 4.4,
  },
  {
    id: 'react',
    title: 'React.js',
    pos: 'top-5 right-2 sm:top-7 sm:right-4',
    delay: 0.5,
    duration: 4.9,
  },
  {
    id: 'node',
    title: 'Node.js',
    pos: 'bottom-10 left-0 sm:bottom-12 sm:left-2',
    delay: 0.9,
    duration: 4.6,
  },
  {
    id: 'mongo',
    title: 'MongoDB',
    pos: 'bottom-4 right-4 sm:bottom-6 sm:right-8',
    delay: 1.2,
    duration: 5.1,
  },
  {
    id: 'ts',
    title: 'TypeScript',
    pos: 'top-1/2 -right-2 sm:right-0 -translate-y-1/2',
    delay: 0.3,
    duration: 4.5,
  },
];

export function HeroSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="top" className="relative pt-10 pb-16 sm:pt-16 sm:pb-22 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Concise Display Typography */}
          <div className="lg:col-span-7">
            <p className="text-xs sm:text-sm font-medium text-emerald-700 dark:text-emerald-400 tracking-wide">
              MERN Stack Developer · Digital Marketer
            </p>

            <h1 className="mt-4 font-display font-extrabold tracking-[-0.03em] text-[#0C1F17] dark:text-[#ECF7F1] text-[clamp(2.35rem,4.8vw,3.9rem)] leading-[1.06] [text-wrap:balance]">
              Building{' '}
              <span className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 dark:from-emerald-300 dark:via-emerald-400 dark:to-teal-300 bg-clip-text text-transparent">
                fast full-stack
              </span>{' '}
              web products and measurable growth.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-[#3E564B] dark:text-[#9AB8A8] leading-relaxed max-w-xl">
              {PROFILE.summary}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm sm:text-base font-medium rounded-xl bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-[#04120B] shadow-sm transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
              >
                <span>View Projects</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm sm:text-base font-medium rounded-xl glass-surface border border-emerald-950/15 dark:border-emerald-300/20 text-[#0C1F17] dark:text-[#ECF7F1] hover:bg-emerald-500/10 transition-colors whitespace-nowrap shrink-0"
              >
                <Linkedin className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm sm:text-base font-medium rounded-xl glass-surface border border-emerald-950/15 dark:border-emerald-300/20 text-[#0C1F17] dark:text-[#ECF7F1] hover:bg-emerald-500/10 transition-colors whitespace-nowrap shrink-0"
              >
                <Github className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>

          {/* Right Column: Circular Glassy Portrait with Floating Tech Symbols */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-[300px] h-[300px] sm:w-[370px] sm:h-[370px] flex items-center justify-center">
              {/* Outer Frosted Glass Halo Ring */}
              <div
                aria-hidden="true"
                className="absolute inset-4 rounded-full glass-surface border border-emerald-600/25 dark:border-emerald-400/25 shadow-[0_0_60px_-15px_rgba(16,185,129,0.35)]"
              />

              {/* Subtle Rotating Orbital Ring */}
              <motion.div
                aria-hidden="true"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-1 rounded-full border border-dashed border-emerald-700/25 dark:border-emerald-400/25"
              />

              {/* Circular Glass Portrait Container */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full p-2 glass-surface border border-emerald-700/25 dark:border-emerald-300/30 shadow-xl overflow-hidden">
                <div className="w-full h-full rounded-full overflow-hidden bg-emerald-950/10">
                  {!imgError ? (
                    <img
                      src={PROFILE.portraitUrl}
                      alt="Maruf Khan"
                      referrerPolicy="no-referrer"
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-emerald-900/15 text-center p-4">
                      <User className="w-12 h-12 text-emerald-700 dark:text-emerald-400 mb-1" />
                      <span className="font-display font-semibold text-sm">{PROFILE.name}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Floating SVG Tech Stack Symbols */}
              {FLOATING_SYMBOLS.map((sym) => (
                <motion.div
                  key={sym.id}
                  animate={{ y: [-6, 6, -6] }}
                  transition={{
                    duration: sym.duration,
                    delay: sym.delay,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  title={sym.title}
                  aria-label={sym.title}
                  className={`absolute ${sym.pos} z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full glass-surface border border-emerald-950/15 dark:border-emerald-300/25 shadow-lg flex items-center justify-center select-none`}
                >
                  <TechSymbol id={sym.id} className="w-6 h-6 sm:w-7 sm:h-7" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
