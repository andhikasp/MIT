'use client'

import { useState } from 'react'
import { useLanguage } from './LanguageProvider'

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-gray-900"
    >
      <div className="container mx-auto max-w-6xl space-y-10">
        {/* Header Section */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-primary-600 mb-2">
            {t('contact_kicker')}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('contact_title')}
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">{t('contact_body')}</p>
        </div>

        {/* Contact Info and Form */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mx-auto">
          <div>
            
            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-sm font-semibold text-primary-600 mb-2">
                  {t('contact_address')}
                </h3>
                <p className="text-gray-700 whitespace-pre-line text-sm leading-relaxed">
                  {t('contact_address_full')}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-primary-600 mb-2">
                  Phone
                </h3>
                <a
                  href={`tel:${t('contact_phone_full').replace(/\s/g, '')}`}
                  className="text-gray-700 hover:text-primary-600 transition-colors"
                >
                  {t('contact_phone_full')}
                </a>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-primary-600 mb-2">
                  Email
                </h3>
                <a
                  href={`mailto:${t('contact_email_full')}`}
                  className="text-gray-700 hover:text-primary-600 transition-colors"
                >
                  {t('contact_email_full')}
                </a>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-primary-600 mb-2">
                  Website
                </h3>
                <a
                  href={`https://${t('contact_website')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary-600 transition-colors"
                >
                  {t('contact_website')}
                </a>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm italic">
              {t('contact_inquiry')}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
          >
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                {t('contact_name')}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-lg bg-white border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                placeholder="Nama lengkap"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  {t('contact_email')}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg bg-white border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                  placeholder="email@domain.com"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  {t('contact_phone')}
                </label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-lg bg-white border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                  placeholder="+62 xxx"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                {t('contact_desc')}
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-lg bg-white border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                placeholder={t('contact_placeholder_desc')}
              />
            </div>
            {submitStatus === 'success' && (
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                {t('contact_success')}
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {t('contact_error')}
              </div>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors"
            >
              {isSubmitting ? t('contact_submitting') : t('contact_submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

