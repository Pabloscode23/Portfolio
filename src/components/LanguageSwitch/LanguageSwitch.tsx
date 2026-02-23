import { useTranslation } from 'react-i18next'

const LANGUAGES = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
] as const

export function LanguageSwitch() {
  const { i18n } = useTranslation()

  return (
    <div
      className="LanguageSwitch flex rounded-lg bg-primary-800 p-1"
      role="group"
      aria-label="Select language"
    >
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => i18n.changeLanguage(code)}
          className={`rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
            i18n.language === code
              ? 'bg-accent text-white shadow'
              : 'text-primary-300 hover:text-primary-100'
          }`}
          aria-pressed={i18n.language === code}
          aria-label={`Language: ${label}`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
