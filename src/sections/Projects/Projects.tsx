import { useTranslation } from 'react-i18next'
import { projects } from '@/data/projects'
import { ImageCarousel } from '@/components/ImageCarousel/ImageCarousel'

export function Projects() {
  const { t } = useTranslation()

  return (
    <section
      id="projects"
      className="relative scroll-mt-20 overflow-hidden bg-primary py-24 px-4 sm:px-6 lg:px-8"
      aria-labelledby="projects-heading"
    >
      <div className="absolute inset-0 bg-primary" aria-hidden />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(ellipse 60% 40% at 20% 80%, rgba(14,165,233,0.06) 0%, transparent 50%)`,
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <header className="mb-14">
          <h2 id="projects-heading" className="text-4xl font-bold text-primary-50 sm:text-5xl tracking-tight">
            {t('projects.title')}
          </h2>
          <p className="mt-3 text-lg text-primary-400">
            {t('projects.subtitle')}
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => {
            const title = t(`projects.${project.titleKey}.title`)
            return (
              <li key={project.id} className="flex">
                <article className="flex w-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-primary-950/80 shadow-card backdrop-blur-sm transition-all duration-300 hover:border-accent/20 hover:shadow-card-hover">
                  <ImageCarousel images={project.images} alt={title} />
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <h3 className="mt-4 text-2xl font-bold text-primary-50 sm:text-3xl">
                      {title}
                    </h3>
                    <p className="mt-4 text-primary-300 leading-relaxed">
                      {t(`projects.${project.titleKey}.description`)}
                    </p>

                    <h4 className="mt-6 text-sm font-semibold uppercase tracking-widest text-accent">
                      {t('projects.contributions')}
                    </h4>
                    <ul className="mt-3 space-y-2" role="list">
                      {Array.from({ length: project.contributionCount }, (_, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-primary-300 text-sm sm:text-base leading-relaxed"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80" aria-hidden />
                          <span>{t(`projects.${project.titleKey}.contribution${i + 1}`)}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="mt-6 text-sm font-semibold uppercase tracking-widest text-accent">
                      {t('projects.technologies')}
                    </h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-primary-800 px-3 py-1 text-xs font-medium text-primary-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <h4 className="mt-6 text-sm font-semibold uppercase tracking-widest text-accent">
                      {t('projects.impact')}
                    </h4>
                    <p className="mt-2 text-primary-300 leading-relaxed">
                      {t(`projects.${project.titleKey}.impact`)}
                    </p>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 text-accent font-medium hover:text-accent-light"
                      >
                        {t('projects.viewCode')}
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
