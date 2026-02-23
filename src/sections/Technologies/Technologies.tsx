import { useTranslation } from 'react-i18next'
import { useTheme } from '@/contexts/ThemeContext'
import { technologyCategories } from '@/data/technologies'

export function Technologies() {
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <section
      id="technologies"
      className="relative scroll-mt-20 overflow-hidden py-28 px-4 sm:px-6 lg:px-8"
      aria-labelledby="technologies-heading"
    >
      {/* Subtle background gradient for depth */}
      <div
        className="absolute inset-0 bg-secondary"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 50% at 50% 0%, rgba(14,165,233,0.06) 0%, transparent 50%)`,
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <header className="text-center mb-16 sm:mb-20">
          <h2
            id="technologies-heading"
            className="text-4xl font-bold text-primary-50 sm:text-5xl tracking-tight"
          >
            {t('technologies.title')}
          </h2>
          <p className="mt-4 text-lg text-primary-400 max-w-2xl mx-auto leading-relaxed">
            {t('technologies.subtitle')}
          </p>
        </header>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {technologyCategories.map((category) => (
            <article
              key={category.id}
              className="relative rounded-2xl border border-white/[0.06] bg-primary-950/80 p-6 sm:p-7 shadow-card backdrop-blur-md transition-all duration-300 hover:shadow-card-hover hover:border-accent/20"
            >
              {/* Category header with accent line */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="h-0.5 w-8 shrink-0 rounded-full bg-accent/80"
                  aria-hidden
                />
                <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">
                  {t(`technologies.${category.id}`)}
                </h3>
              </div>

              <ul className="flex flex-wrap gap-2.5">
                {category.items.map((item) => {
                  const Icon = item.icon
                  const color = theme === 'light' && item.colorLight ? item.colorLight : item.color
                  return (
                    <li
                      key={item.name}
                      className="group flex items-center gap-2.5 rounded-full bg-primary-900/90 px-3.5 py-2.5 border border-white/[0.06] shadow-pill transition-all duration-200 hover:border-white/[0.1] hover:bg-primary-800/90 hover:shadow-md"
                      title={item.name}
                    >
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-200 group-hover:scale-110"
                        style={{
                          backgroundColor: `${color}20`,
                          color,
                          boxShadow: `0 0 0 1px ${color}30`,
                        }}
                      >
                        <Icon className="h-4 w-4" aria-hidden style={{ color }} />
                      </span>
                      <span className="text-sm font-medium text-primary-100 truncate max-w-[130px] sm:max-w-[180px]">
                        {item.name}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
