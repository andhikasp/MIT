'use client'

import Link from 'next/link'
import { useLanguage } from './LanguageProvider'

export default function CTA() {
  const { t } = useLanguage()
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-indigo-600 text-white">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('cta_title')}</h2>
        <p className="text-lg text-primary-50 mb-8 max-w-3xl mx-auto">
          {t('cta_body')}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/contact"
            className="bg-white text-primary-700 px-7 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg shadow-primary-500/30"
          >
            {t('cta_primary')}
          </Link>
          <Link
            href="/projects"
            className="border border-white/50 text-white px-7 py-3 rounded-full text-lg font-semibold hover:bg-white/10 transition-all"
          >
            {t('cta_secondary')}
          </Link>
        </div>
      </div>
    </section>
  )
}


