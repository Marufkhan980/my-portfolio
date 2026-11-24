import { PROFILE } from '../data/portfolioData';

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-14 sm:py-18 border-t border-emerald-950/10 dark:border-emerald-300/15"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl glass-surface border border-emerald-950/10 dark:border-emerald-300/15 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="md:w-1/3">
            <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-[#0C1F17] dark:text-[#ECF7F1]">
              01. About Me
            </h2>
            <p className="mt-1 text-xs font-mono text-emerald-700 dark:text-emerald-400">
              Developer &amp; Digital Marketer
            </p>
          </div>

          <p className="md:w-2/3 text-sm sm:text-base text-[#3E564B] dark:text-[#9AB8A8] leading-relaxed">
            {PROFILE.aboutMe}
          </p>
        </div>
      </div>
    </section>
  );
}
