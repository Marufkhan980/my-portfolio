import { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { CertificationItem } from '../data/portfolioData';

interface LightboxModalProps {
  cert: CertificationItem | null;
  onClose: () => void;
}

export function CertificateModal({ cert, onClose }: LightboxModalProps) {
  useEffect(() => {
    if (!cert) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [cert, onClose]);

  if (!cert) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl glass-surface border border-emerald-950/15 dark:border-emerald-300/20 shadow-2xl p-4 sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-emerald-950/10 dark:border-emerald-300/15">
          <div>
            <p className="text-xs font-mono text-emerald-700 dark:text-emerald-400">
              {cert.issuer} · {cert.date} {cert.credentialId ? `· ID ${cert.credentialId}` : ''}
            </p>
            <h3
              id="cert-modal-title"
              className="mt-1 text-lg sm:text-xl font-display font-semibold tracking-tight text-[#0C1F17] dark:text-[#ECF7F1]"
            >
              {cert.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close certificate view"
            className="p-2.5 rounded-lg border border-emerald-950/10 dark:border-emerald-300/20 text-[#3E564B] dark:text-[#9AB8A8] hover:text-[#0C1F17] dark:hover:text-white hover:bg-emerald-500/10 transition-colors shrink-0 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4 rounded-xl overflow-hidden border border-emerald-950/10 dark:border-emerald-300/15 bg-white dark:bg-[#09150F]">
          <img
            src={cert.imageUrl}
            alt={`${cert.title} certificate from ${cert.issuer}`}
            referrerPolicy="no-referrer"
            className="w-full h-auto max-h-[68vh] object-contain mx-auto"
          />
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-emerald-950/10 dark:border-emerald-300/15">
          <span className="text-xs font-mono text-[#3E564B] dark:text-[#9AB8A8]">
            {cert.durationOrGrade}
          </span>
          {cert.verifyUrl && (
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-emerald-950/15 dark:border-emerald-300/20 text-[#0C1F17] dark:text-[#ECF7F1] hover:bg-emerald-500/10 transition-colors whitespace-nowrap shrink-0"
            >
              <span>Verify Online</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
