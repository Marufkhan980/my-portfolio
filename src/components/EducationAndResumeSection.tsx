import { useState } from 'react';
import { Download, FileText, GraduationCap, ArrowDownToLine } from 'lucide-react';
import { EDUCATION, PROFILE } from '../data/portfolioData';
import { downloadAssetFile } from '../utils/downloadFile';

export function EducationAndResumeSection() {
  const [downloadingDoc, setDownloadingDoc] = useState<'dev' | 'cv' | null>(null);

  const handleDownload = async (doc: 'dev' | 'cv') => {
    setDownloadingDoc(doc);
    const url = doc === 'dev' ? PROFILE.resumeDevPdf : PROFILE.resumeFullCvPdf;
    const name = doc === 'dev' ? PROFILE.resumeDevFilename : PROFILE.resumeFullCvFilename;
    await downloadAssetFile(url, name);
    setDownloadingDoc(null);
  };

  return (
    <section
      id="education"
      className="py-16 sm:py-20 border-t border-emerald-950/10 dark:border-emerald-300/15"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left 7 Columns: Academic Background */}
          <div className="lg:col-span-7">
            <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-[#0C1F17] dark:text-[#ECF7F1]">
              05. Education &amp; Resume
            </h2>

            <div className="mt-6 rounded-2xl glass-surface border border-emerald-950/10 dark:border-emerald-300/15 divide-y divide-emerald-950/10 dark:divide-emerald-300/15">
              {EDUCATION.map((item) => (
                <div
                  key={item.degree}
                  className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5"
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400">
                      <GraduationCap className="w-4 h-4" />
                      <span>{item.period}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.field}</span>
                    </div>
                    <h3 className="mt-1 font-display font-semibold text-base sm:text-lg text-[#0C1F17] dark:text-[#ECF7F1]">
                      {item.degree}
                    </h3>
                    <p className="text-sm text-[#3E564B] dark:text-[#9AB8A8]">
                      {item.institution}
                    </p>
                  </div>

                  <span className="font-mono text-sm font-medium text-[#0C1F17] dark:text-[#ECF7F1] shrink-0">
                    {item.result}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right 5 Columns: Premium Resume & CV Download Box */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl glass-surface border border-emerald-600/25 dark:border-emerald-400/25 shadow-[0_20px_50px_-24px_rgba(16,185,129,0.28)] p-6 sm:p-7">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-16 -right-16 w-44 h-44 rounded-full bg-emerald-400/15 dark:bg-emerald-400/10 blur-2xl"
              />

              <div className="relative flex items-start justify-between gap-4 pb-5 border-b border-emerald-950/10 dark:border-emerald-300/15">
                <div>
                  <p className="text-xs font-mono text-emerald-700 dark:text-emerald-400">
                    Official Documents
                  </p>
                  <h3 className="mt-1 font-display font-bold text-xl sm:text-2xl text-[#0C1F17] dark:text-[#ECF7F1]">
                    Curriculum Vitae
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/12 border border-emerald-500/25 flex items-center justify-center text-emerald-700 dark:text-emerald-300 shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
              </div>

              <div className="relative divide-y divide-emerald-950/10 dark:divide-emerald-300/15">
                {/* Original Developer Resume PDF */}
                <div className="py-5 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <h4 className="font-display font-semibold text-base text-[#0C1F17] dark:text-[#ECF7F1]">
                      MERN Developer Resume
                    </h4>
                    <p className="mt-0.5 text-xs text-[#3E564B] dark:text-[#9AB8A8]">
                      1 Page · Technical Stack &amp; Projects · PDF
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDownload('dev')}
                    disabled={downloadingDoc === 'dev'}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-[#04120B] shadow-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer disabled:opacity-60"
                  >
                    <Download className="w-4 h-4" />
                    <span>{downloadingDoc === 'dev' ? 'Saving...' : 'Download'}</span>
                  </button>
                </div>

                {/* Original Complete Academic CV PDF */}
                <div className="pt-5 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <h4 className="font-display font-semibold text-base text-[#0C1F17] dark:text-[#ECF7F1]">
                      Complete Academic CV
                    </h4>
                    <p className="mt-0.5 text-xs text-[#3E564B] dark:text-[#9AB8A8]">
                      2 Pages · Full Personal &amp; Academic Profile · PDF
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDownload('cv')}
                    disabled={downloadingDoc === 'cv'}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl border border-emerald-700/35 dark:border-emerald-400/35 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-500/10 transition-colors whitespace-nowrap shrink-0 cursor-pointer disabled:opacity-60"
                  >
                    <ArrowDownToLine className="w-4 h-4" />
                    <span>{downloadingDoc === 'cv' ? 'Saving...' : 'Download'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
