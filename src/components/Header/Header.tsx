import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { NavItem } from '@/types'
import { LanguageSwitch } from '@/components/LanguageSwitch'
import { ThemeToggle } from '@/components/ThemeToggle/ThemeToggle'

const NAV_ITEMS: NavItem[] = [
  { id: 'home', labelKey: 'nav.home', href: '#home' },
  { id: 'about', labelKey: 'nav.about', href: '#about' },
  { id: 'technologies', labelKey: 'nav.technologies', href: '#technologies' },
  { id: 'projects', labelKey: 'nav.projects', href: '#projects' },
  { id: 'education', labelKey: 'nav.education', href: '#education' },
  { id: 'contact', labelKey: 'nav.contact', href: '#contact' },
]

export function Header() {
  const { t } = useTranslation()
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = () => setMobileOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-secondary-mid/50 transition-all duration-300">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          onClick={closeMobile}
          className="flex items-center gap-3 text-primary-100 hover:text-accent transition-colors duration-200"
        >
          <img
            src="/src/assets/PabloCode-modified.png"
            alt=""
            className="h-10 w-10 shrink-0 rounded-full object-cover"
          />
          <span className="text-xl font-semibold">{t('nav.brand')}</span>
        </a>
        <div className="flex items-center gap-2">
          <ul className="hidden md:flex items-center gap-1 lg:gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-primary-200 hover:text-accent hover:bg-primary-800/50 transition-colors duration-200"
                >
                  {t(item.labelKey)}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitch />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden rounded-lg p-2 text-primary-200 hover:bg-primary-800/50"
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {mobileOpen && (
        <ul className="md:hidden border-t border-secondary-mid/50 bg-secondary px-4 py-4 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={closeMobile}
                className="block rounded-lg px-4 py-3 text-primary-200 hover:text-accent hover:bg-primary-800/50"
              >
                {t(item.labelKey)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
