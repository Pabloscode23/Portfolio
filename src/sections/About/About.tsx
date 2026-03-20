import { useTranslation } from 'react-i18next'
import { experience, formatDuration, formatTotalDuration } from '@/data/experience'
import { StoryReveal } from '@/components/StoryReveal/StoryReveal'

export function About() {
  const { t } = useTranslation()

  return (
    <section
      id="profile"
      className="section-enter relative scroll-mt-20 overflow-hidden py-24 px-4 sm:px-6 lg:px-8"
      aria-labelledby="profile-heading"
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
        <StoryReveal>
        <header className="mb-16 sm:mb-20">
          <h2
            id="profile-heading"
            className="text-4xl font-bold text-primary-50 sm:text-5xl tracking-tight"
          >
            {t('about.title')}
          </h2>
          <div className="mt-4 flex items-center gap-3">
            <span
              className="h-0.5 w-12 rounded-full bg-accent/80"
              aria-hidden
            />
            <p className="text-primary-300 leading-relaxed max-w-3xl">
              {t('about.bio')}
            </p>
          </div>
        </header>
        </StoryReveal>

        <StoryReveal delayMs={60}>
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span
              className="h-0.5 w-12 rounded-full bg-accent/80 shrink-0"
              aria-hidden
            />
            <h3 className="text-3xl font-bold text-primary-50 sm:text-4xl tracking-tight">
              {t('about.experienceTitle')}
            </h3>
          </div>
          <span
            className="rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent shrink-0"
            aria-label={t('about.totalExperience')}
          >
            {formatTotalDuration(t)}
          </span>
        </div>
        </StoryReveal>

        <ul className="space-y-6" aria-label={t('about.subtitle')}>
          {experience.map((item, index) => (
            <li key={item.id}>
              <StoryReveal delayMs={120 + index * 80}>
              <article className="rounded-2xl border border-white/[0.06] bg-primary-950/80 p-7 sm:p-9 shadow-card backdrop-blur-sm transition-all duration-300 hover:border-accent/20 hover:shadow-card-hover">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <p className="font-semibold text-primary-50 text-xl">
                      {t(`about.${item.id}.role`)}
                    </p>
                    <p className="text-accent font-medium text-lg">
                      {t(`about.${item.id}.company`)}
                    </p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-0.5">
                    <p className="text-base text-primary-500 whitespace-nowrap">
                      {t(`about.${item.id}.date`)}
                    </p>
                    <p className="text-sm text-primary-400 whitespace-nowrap">
                      {formatDuration(item, t)}
                    </p>
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex gap-3 text-primary-300 leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80" aria-hidden />
                    <span>{t(`about.${item.id}.point1`)}</span>
                  </li>
                  <li className="flex gap-3 text-primary-300 leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80" aria-hidden />
                    <span>{t(`about.${item.id}.point2`)}</span>
                  </li>
                  <li className="flex gap-3 text-primary-300 leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80" aria-hidden />
                    <span>{t(`about.${item.id}.point3`)}</span>
                  </li>
                </ul>
                <h4 className="mt-7 text-base font-semibold uppercase tracking-widest text-accent">
                  {t('about.technologies')}
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary-800 px-3.5 py-1.5 text-sm font-medium text-primary-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
              </StoryReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
