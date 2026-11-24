import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { PROFILE, PROJECTS } from '../data/portfolioData';

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-16 sm:py-20 border-t border-emerald-950/10 dark:border-emerald-300/15"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-[#0C1F17] dark:text-[#ECF7F1]">
              02. Recent Projects
            </h2>
            <p className="mt-1.5 text-sm text-[#3E564B] dark:text-[#9AB8A8]">
              Full-stack web applications deployed on Vercel.
            </p>
          </div>

          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-lg glass-surface border border-emerald-950/15 dark:border-emerald-300/20 text-[#0C1F17] dark:text-[#ECF7F1] hover:bg-emerald-500/10 transition-colors self-start sm:self-auto whitespace-nowrap shrink-0"
          >
            <Github className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
            <span>GitHub Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="flex flex-col justify-between rounded-2xl glass-surface border border-emerald-950/10 dark:border-emerald-300/15 p-5 sm:p-6 transition-transform duration-200 hover:-translate-y-1"
            >
              <div>
                {/* Compact Project Screenshot */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative h-40 sm:h-44 w-full rounded-xl overflow-hidden border border-emerald-950/10 dark:border-emerald-300/15 bg-white dark:bg-[#09150F]"
                >
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} live website screenshot`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-200 hover:scale-[1.02]"
                  />
                </a>

                <div className="mt-4 flex items-center justify-between gap-2">
                  <h3 className="font-display font-bold text-xl text-[#0C1F17] dark:text-[#ECF7F1] tracking-tight">
                    {project.title}
                  </h3>
                  <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400">
                    {project.year}
                  </span>
                </div>

                <p className="mt-0.5 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                  {project.subtitle}
                </p>

                <p className="mt-2.5 text-sm text-[#3E564B] dark:text-[#9AB8A8] leading-relaxed">
                  {project.summary}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-emerald-950/10 dark:border-emerald-300/15 flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs font-mono text-[#3E564B] dark:text-[#9AB8A8]">
                  {project.technologies.join(' · ')}
                </p>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-[#04120B] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Live Link</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
