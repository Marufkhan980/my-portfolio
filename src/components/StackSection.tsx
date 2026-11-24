import { STACK_ITEMS } from '../data/portfolioData';
import { TechSymbol } from './TechIcons';

export function StackSection() {
  const marqueeLoop = [...STACK_ITEMS, ...STACK_ITEMS];

  return (
    <section
      id="stack"
      className="py-14 sm:py-20 border-t border-emerald-950/10 dark:border-emerald-300/15"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-[#0C1F17] dark:text-[#ECF7F1]">
            03. Tech Stack &amp; Tools
          </h2>
          <p className="text-sm text-[#3E564B] dark:text-[#9AB8A8]">
            Core engineering technologies and digital growth platforms.
          </p>
        </div>

        {/* Borderless, slower single-line marquee */}
        <div className="mt-7 overflow-hidden py-2">
          <div className="animate-stack-marquee items-center">
            {marqueeLoop.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="inline-flex items-center gap-2.5 px-6 shrink-0 text-sm font-medium text-[#0C1F17] dark:text-[#ECF7F1]"
              >
                <TechSymbol id={item.id} className="w-5 h-5" />
                <span>{item.name}</span>
                <span
                  aria-hidden="true"
                  className="ml-4 text-emerald-700/40 dark:text-emerald-400/40"
                >
                  ·
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Stack Grid with Symbols & Names */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {STACK_ITEMS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center text-center p-4 rounded-xl glass-surface border border-emerald-950/10 dark:border-emerald-300/15 hover:-translate-y-0.5 transition-transform duration-150"
            >
              <TechSymbol id={item.id} className="w-8 h-8" />
              <span className="mt-2.5 text-sm font-medium text-[#0C1F17] dark:text-[#ECF7F1] whitespace-nowrap">
                {item.name}
              </span>
              <span className="mt-0.5 text-[11px] font-mono text-[#3E564B] dark:text-[#9AB8A8]">
                {item.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
