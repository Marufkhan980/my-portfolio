import { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, ArrowUpRight, Check } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 border-t border-emerald-950/10 dark:border-emerald-300/15"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl glass-surface border border-emerald-950/10 dark:border-emerald-300/15 p-7 sm:p-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-xs font-mono tracking-wider text-emerald-700 dark:text-emerald-400">
              06. Start a conversation
            </p>

            <h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl tracking-tight text-[#0C1F17] dark:text-[#ECF7F1] leading-[1.06] [text-wrap:balance]">
              Let&apos;s work together.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#3E564B] dark:text-[#9AB8A8] leading-relaxed">
              Have an interesting project or opportunity? I&apos;d love to hear from you.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#3E564B] dark:text-[#9AB8A8]">
              <button
                type="button"
                onClick={handleCopyEmail}
                title="Click to copy email address"
                className="inline-flex items-center gap-2 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors cursor-pointer"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <Mail className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                )}
                <span>{copied ? 'Email copied!' : PROFILE.email}</span>
              </button>

              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
              >
                <Github className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                <span>GitHub</span>
              </a>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                <span>LinkedIn</span>
              </a>

              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                <span>{PROFILE.location}</span>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-medium rounded-xl bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-[#04120B] shadow-sm transition-colors whitespace-nowrap shrink-0"
            >
              <span>Email me</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 text-sm sm:text-base font-medium rounded-xl border border-emerald-950/15 dark:border-emerald-300/20 text-[#0C1F17] dark:text-[#ECF7F1] hover:bg-emerald-500/10 transition-colors whitespace-nowrap shrink-0"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
