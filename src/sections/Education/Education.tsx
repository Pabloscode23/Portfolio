import { useEffect, useState, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { certifications } from '@/data/education'
import cenfotecLogoSrc from '@/assets/cenfoteclogo.jpg'
import { StoryReveal } from '@/components/StoryReveal/StoryReveal'

export function Education() {
  const { t } = useTranslation()
  const [modalOpen, setModalOpen] = useState(false)
  const awsCertificateUrl =
    certifications.find((c) => c.id === 'awsCloudPractitionerEssentials')?.credentialUrl ?? ''

  useEffect(() => {
    if (!modalOpen) return
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalOpen(false)
    }
    globalThis.addEventListener('keydown', onEsc)
    return () => globalThis.removeEventListener('keydown', onEsc)
  }, [modalOpen])

  return (
    <section
      id="education"
      className="section-enter relative scroll-mt-20 overflow-hidden py-28 px-4 sm:px-6 lg:px-8"
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
        <StoryReveal>
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
            <p className="text-primary-400 leading-relaxed max-w-3xl">
              {t('education.subtitle')}
            </p>
          </div>
        </header>
        </StoryReveal>

        <StoryReveal delayMs={80}>
        <article className="rounded-2xl border border-white/[0.06] bg-primary-950/80 p-6 sm:p-8 shadow-card backdrop-blur-sm transition-all duration-300 hover:border-accent/20 hover:shadow-card-hover mb-12">
          <div className="flex items-start gap-5">
            <img
              src={cenfotecLogoSrc}
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
        </StoryReveal>

        <StoryReveal delayMs={120}>
        <div className="flex items-center gap-3 mb-8">
          <span
            className="h-0.5 w-8 shrink-0 rounded-full bg-accent/80"
            aria-hidden
          />
          <h3 className="text-base font-semibold uppercase tracking-widest text-accent">
            {t('education.certifications.title')}
          </h3>
        </div>
        </StoryReveal>

        <ul
          className="grid gap-4 sm:grid-cols-2"
          aria-label={t('education.certifications.title')}
        >
          {certifications.map((cert, index) => {
            const name = t(`education.certifications.${cert.id}.name`)
            const issuer = t(`education.certifications.${cert.id}.issuer`)
            const isAwsCert = cert.id === 'awsCloudPractitionerEssentials'
            const hasExternalCredential = !!cert.credentialUrl && !isAwsCert
            let credentialAction: ReactNode = (
              <span className="mt-4 text-sm text-accent/80 font-medium">
                {t('education.certifications.showCredential')}
              </span>
            )

            if (isAwsCert) {
              credentialAction = (
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="mt-4 text-sm text-accent hover:underline font-medium text-left"
                >
                  {t('education.certifications.showCredential')}
                </button>
              )
            } else if (hasExternalCredential) {
              credentialAction = (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-sm text-accent hover:underline font-medium"
                >
                  {t('education.certifications.showCredential')}
                </a>
              )
            }

            return (
              <li key={cert.id}>
                <StoryReveal delayMs={140 + index * 70}>
                <article className="rounded-2xl border border-white/[0.06] bg-primary-950/80 p-5 sm:p-6 shadow-card backdrop-blur-sm transition-all duration-300 hover:border-accent/20 hover:shadow-card-hover h-full flex flex-col">
                  <p className="font-semibold text-accent text-lg leading-snug">
                    {name}
                  </p>
                  <p className="text-primary-50 font-medium mt-1.5 text-sm">
                    {issuer}
                  </p>
                  {credentialAction}
                </article>
                </StoryReveal>
              </li>
            )
          })}
        </ul>
      </div>
      {modalOpen && (
        <dialog
          open
          className="fixed inset-0 z-[100] m-0 flex h-screen w-screen items-center justify-center bg-black/80 p-4"
          aria-label="AWS Certificate"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Close certificate backdrop"
            onClick={() => setModalOpen(false)}
          />
          <div
            className="relative h-[85vh] w-full max-w-5xl rounded-xl border border-white/10 bg-primary-950 p-2 shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute right-3 top-3 rounded-md bg-black/50 px-3 py-1 text-sm text-white hover:bg-black/70"
              aria-label="Close certificate"
            >
              ✕
            </button>
            <iframe
              src={awsCertificateUrl}
              title="AWS Cloud Practitioner Essentials Certificate"
              className="h-full w-full rounded-md"
            />
          </div>
        </dialog>
      )}
    </section>
  )
}
