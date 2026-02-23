import { useState, FormEvent } from 'react'
import { useTranslation } from 'react-i18next'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function ContactForm() {
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({})
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validate = (): boolean => {
    const next: typeof errors = {}
    if (!name.trim()) next.name = t('contact.nameRequired')
    if (!email.trim()) next.email = t('contact.emailRequired')
    else if (!EMAIL_REGEX.test(email)) next.email = t('contact.emailInvalid')
    if (!message.trim()) next.message = t('contact.messageRequired')
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setStatus('idle')
    if (!validate()) return
    // TODO: integrate with Formspree, EmailJS or your backend
    setStatus('success')
    setName('')
    setEmail('')
    setMessage('')
    setErrors({})
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-lg space-y-4">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-primary-200">
          {t('contact.name')}
        </label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-lg border border-primary-600 bg-primary-800 px-4 py-2 text-primary-100 placeholder-primary-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder={t('contact.name')}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-400" role="alert">
            {errors.name}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-primary-200">
          {t('contact.email')}
        </label>
        <input
          id="contact-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-lg border border-primary-600 bg-primary-800 px-4 py-2 text-primary-100 placeholder-primary-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder={t('contact.email')}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-400" role="alert">
            {errors.email}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-primary-200">
          {t('contact.message')}
        </label>
        <textarea
          id="contact-message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 w-full rounded-lg border border-primary-600 bg-primary-800 px-4 py-2 text-primary-100 placeholder-primary-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder={t('contact.message')}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-400" role="alert">
            {errors.message}
          </p>
        )}
      </div>
      {status === 'success' && (
        <p className="text-sm text-green-400" role="status">
          {t('contact.success')}
        </p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-400" role="alert">
          {t('contact.error')}
        </p>
      )}
      <button
        type="submit"
        className="w-full rounded-lg bg-accent py-3 font-medium text-white transition-colors duration-300 hover:bg-accent-light focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary-950"
      >
        {t('contact.send')}
      </button>
    </form>
  )
}
