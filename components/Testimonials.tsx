'use client'

import { useLanguage } from './LanguageProvider'

const testimonials = [
  { quoteKey: 'testi_1_quote', nameKey: 'testi_1_name', roleKey: 'testi_1_role' },
  { quoteKey: 'testi_2_quote', nameKey: 'testi_2_name', roleKey: 'testi_2_role' },
  { quoteKey: 'testi_3_quote', nameKey: 'testi_3_name', roleKey: 'testi_3_role' },
]

export default function Testimonials() {
  const { t } = useLanguage()
  return (
    <section
      id="testimonials"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-gray-900"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-primary-600 mb-2">
            {t('testi_kicker')}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">{t('testi_title')}</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            {t('testi_body')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="h-full rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                “{t(item.quoteKey)}”
              </p>
              <div className="text-sm font-semibold text-gray-900">
                {t(item.nameKey)}
              </div>
              <div className="text-sm text-gray-500">{t(item.roleKey)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

