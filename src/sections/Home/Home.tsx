import { useTranslation } from 'react-i18next'

export function Home() {
  const { t } = useTranslation()

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24 pb-20 sm:px-6 lg:px-8"
      aria-labelledby="home-heading"
    >
      <div className="absolute inset-0 bg-primary" aria-hidden />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `radial-gradient(ellipse 70% 60% at 50% 40%, rgba(14,165,233,0.08) 0%, transparent 60%)`,
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-accent/90 mb-4 animate-fade-in">
          {t('home.role')}
        </p>
        <h1
          id="home-heading"
          className="text-4xl font-bold tracking-tight text-primary-50 sm:text-5xl lg:text-6xl animate-fade-in"
        >
          {t('home.title')}{' '}
          <span className="text-accent">{t('home.name')}</span>
        </h1>
        <p className="mt-6 text-lg text-primary-400 max-w-xl mx-auto leading-relaxed sm:text-xl animate-fade-in">
          {t('home.tagline')}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-in">
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:bg-accent-light hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
          >
            {t('home.ctaExperience')}
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg border-2 border-primary-600 bg-transparent px-6 py-3 font-medium text-primary-200 transition-all duration-300 hover:border-accent/50 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-primary"
          >
            {t('home.ctaProjects')}
          </a>
        </div>
      </div>
    </section>
  )
}
