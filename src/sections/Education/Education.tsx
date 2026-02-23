import { useTranslation } from 'react-i18next'

export function Education() {
  const { t } = useTranslation()

  return (
    <section
      id="education"
      className="scroll-mt-20 py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="education-heading" className="text-3xl font-bold text-primary-50 sm:text-4xl">
          {t('education.title')}
        </h2>
      </div>
    </section>
  )
}
