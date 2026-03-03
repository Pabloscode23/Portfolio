import { useTranslation } from 'react-i18next'
import { certifications } from '@/data/education'

export function Education() {
  const { t } = useTranslation()

  return (
    <section
      id="education"
      className="relative scroll-mt-20 overflow-hidden py-28 px-4 sm:px-6 lg:px-8"
      aria-labelledby="education-heading"
    >
      <div className="absolute inset-0 bg-primary" aria-hidden />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(ellipse 60% 40% at 20% 80%, rgba(14,165,233,0.08) 0%, transparent 50%)`,
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <header className="mb-16 sm:mb-20">
          <h2
            id="education-heading"
            className="text-4xl font-bold text-primary-50 sm:text-5xl tracking-tight"
          >
            {t('education.title')}
          </h2>
          <div className="mt-4 flex items-center gap-3">
            <span
              className="h-0.5 w-12 rounded-full bg-accent/80"
              aria-hidden
            />
            <p className="text-lg text-primary-400 leading-relaxed max-w-2xl">
              {t('education.subtitle')}
            </p>
          </div>
        </header>

        <article className="rounded-2xl border border-white/[0.06] bg-primary-950/80 p-6 sm:p-8 shadow-card backdrop-blur-sm transition-all duration-300 hover:border-accent/20 hover:shadow-card-hover mb-12">
          <div className="flex items-start gap-5">
            <img
              src="/src/assets/cenfoteclogo.jpg"
              alt={t('education.university.school')}
              className="h-14 w-14 shrink-0 rounded-xl object-contain bg-white border border-white/[0.06]"
            />
            <div className="min-w-0">
              <p className="font-semibold text-primary-50 text-xl">
                {t('education.university.degree')}
              </p>
              <p className="text-primary-300 mt-1.5 text-base">
                {t('education.university.school')}
              </p>
            </div>
          </div>
        </article>

        <div className="flex items-center gap-3 mb-8">
          <span
            className="h-0.5 w-8 shrink-0 rounded-full bg-accent/80"
            aria-hidden
          />
          <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">
            {t('education.certifications.title')}
          </h3>
        </div>

        <ul
          className="grid gap-4 sm:grid-cols-2"
          aria-label={t('education.certifications.title')}
        >
          {certifications.map((cert) => {
            const name = t(`education.certifications.${cert.id}.name`)
            const issuer = t(`education.certifications.${cert.id}.issuer`)
            return (
              <li key={cert.id}>
                <article className="rounded-2xl border border-white/[0.06] bg-primary-950/80 p-5 sm:p-6 shadow-card backdrop-blur-sm transition-all duration-300 hover:border-accent/20 hover:shadow-card-hover h-full flex flex-col">
                  <p className="font-semibold text-primary-50 text-base leading-snug">
                    {name}
                  </p>
                  <p className="text-accent font-medium mt-1.5 text-sm">
                    {issuer}
                  </p>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 text-sm text-accent hover:underline font-medium"
                    >
                      {t('education.certifications.showCredential')}
                    </a>
                  )}
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
