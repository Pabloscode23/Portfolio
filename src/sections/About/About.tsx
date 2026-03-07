import { useTranslation } from 'react-i18next'
import { experience, formatDuration } from '@/data/experience'

export function About() {
  const { t } = useTranslation()

  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden py-24 px-4 sm:px-6 lg:px-8"
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-0 bg-primary" aria-hidden />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(ellipse 60% 40% at 80% 20%, rgba(14,165,233,0.08) 0%, transparent 50%)`,
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <header className="mb-14">
          <h2
            id="about-heading"
            className="text-4xl font-bold text-primary-50 sm:text-5xl tracking-tight"
          >
            {t('about.title')}
          </h2>
          <div className="mt-4 flex items-center gap-3">
            <span
              className="h-0.5 w-12 rounded-full bg-accent/80"
              aria-hidden
            />
            <p className="text-lg text-primary-300 leading-relaxed max-w-2xl">
              {t('about.bio')}
            </p>
          </div>
        </header>

        <h3 className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">
          {t('about.subtitle')}
        </h3>

        <ul className="space-y-6" aria-label={t('about.subtitle')}>
          {experience.map((item) => (
            <li key={item.id}>
              <article className="rounded-2xl border border-white/[0.06] bg-primary-950/80 p-6 sm:p-8 shadow-card backdrop-blur-sm transition-all duration-300 hover:border-accent/20 hover:shadow-card-hover">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <p className="font-semibold text-primary-50 text-lg">
                      {t(`about.${item.id}.role`)}
                    </p>
                    <p className="text-accent font-medium">
                      {t(`about.${item.id}.company`)}
                    </p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-0.5">
                    <p className="text-sm text-primary-500 whitespace-nowrap">
                      {t(`about.${item.id}.date`)}
                    </p>
                    <p className="text-xs text-primary-400 whitespace-nowrap">
                      {formatDuration(item, t)}
                    </p>
                  </div>
                </div>
                <ul className="mt-5 space-y-2.5">
                  <li className="flex gap-3 text-primary-300 text-sm sm:text-base leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80" aria-hidden />
                    <span>{t(`about.${item.id}.point1`)}</span>
                  </li>
                  <li className="flex gap-3 text-primary-300 text-sm sm:text-base leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80" aria-hidden />
                    <span>{t(`about.${item.id}.point2`)}</span>
                  </li>
                  <li className="flex gap-3 text-primary-300 text-sm sm:text-base leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80" aria-hidden />
                    <span>{t(`about.${item.id}.point3`)}</span>
                  </li>
                </ul>
                <h4 className="mt-6 text-sm font-semibold uppercase tracking-widest text-accent">
                  {t('about.technologies')}
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary-800 px-3 py-1 text-xs font-medium text-primary-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
