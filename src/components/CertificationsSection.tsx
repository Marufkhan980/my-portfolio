import { useState } from 'react';
import { Eye, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS, CertificationItem } from '../data/portfolioData';

interface CertificationsSectionProps {
  onSelectCert: (cert: CertificationItem) => void;
}

type CertFilter = 'all' | 'marketing' | 'tech';

export function CertificationsSection({ onSelectCert }: CertificationsSectionProps) {
  const [filter, setFilter] = useState<CertFilter>('all');

  const visibleCerts =
    filter === 'all'
      ? CERTIFICATIONS
      : CERTIFICATIONS.filter((c) => c.category === filter);

  return (
    <section
      id="certifications"
      className="py-16 sm:py-20 border-t border-emerald-950/10 dark:border-emerald-300/15"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-[#0C1F17] dark:text-[#ECF7F1]">
              04. Certifications
            </h2>
            <p className="mt-1.5 text-sm text-[#3E564B] dark:text-[#9AB8A8]">
              Verified credentials in digital marketing, Shopify, and Python AI.
            </p>
          </div>

          <div
            role="group"
            aria-label="Filter certifications"
            className="inline-flex items-center gap-1 p-1 rounded-xl glass-surface border border-emerald-950/10 dark:border-emerald-300/15 self-start md:self-auto"
          >
            {(
              [
                { id: 'all', label: 'All' },
                { id: 'marketing', label: 'Digital Marketing' },
                { id: 'tech', label: 'AI & Python' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  filter === tab.id
                    ? 'bg-emerald-700 text-white dark:bg-emerald-500 dark:text-[#04120B] shadow-sm'
                    : 'text-[#3E564B] dark:text-[#9AB8A8] hover:text-[#0C1F17] dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Compact 4-column card grid, view-only */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {visibleCerts.map((cert) => (
            <article
              key={cert.id}
              className="flex flex-col justify-between rounded-xl glass-surface border border-emerald-950/10 dark:border-emerald-300/15 p-3.5 sm:p-4"
            >
              <div>
                <button
                  type="button"
                  onClick={() => onSelectCert(cert)}
                  className="group relative block w-full aspect-[16/10] rounded-lg overflow-hidden border border-emerald-950/10 dark:border-emerald-300/15 bg-white dark:bg-[#09150F] cursor-pointer focus-visible:outline-2 focus-visible:outline-emerald-600"
                  aria-label={`View ${cert.title} certificate`}
                >
                  <img
                    src={cert.imageUrl}
                    alt={`${cert.title} issued by ${cert.issuer}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-2.5">
                    <span className="text-[11px] font-medium text-white inline-flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Certificate</span>
                    </span>
                  </div>
                </button>

                <div className="mt-3 flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-emerald-700 dark:text-emerald-400">
                  <span>{cert.issuer}</span>
                  <span aria-hidden="true">·</span>
                  <span>{cert.date}</span>
                </div>

                <h3 className="mt-1 font-display font-bold text-sm sm:text-base text-[#0C1F17] dark:text-[#ECF7F1] leading-snug">
                  {cert.title}
                </h3>
              </div>

              <div className="mt-3 pt-2.5 border-t border-emerald-950/10 dark:border-emerald-300/15 flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-[#3E564B] dark:text-[#9AB8A8] truncate">
                  {cert.durationOrGrade}
                </span>

                <div className="flex items-center gap-2.5 shrink-0">
                  <button
                    type="button"
                    onClick={() => onSelectCert(cert)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-900 dark:hover:text-emerald-300 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View</span>
                  </button>

                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#0C1F17] dark:text-[#ECF7F1] hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors whitespace-nowrap"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
