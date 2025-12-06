'use client'

import { useLanguage } from './LanguageProvider'

export default function TrustSection() {
  const { t } = useLanguage()
  
  const trustItems = [
    { key: 'trust_item1' },
    { key: 'trust_item2' },
    { key: 'trust_item3' },
    { key: 'trust_item4' },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0b1021] via-[#0d1730] to-[#0b1021] text-white border-t border-white/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {t('trust_title')}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t('trust_subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item) => (
            <div
              key={item.key}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center hover:bg-white/10 transition-all"
            >
              <div className="text-4xl mb-4">✓</div>
              <p className="text-gray-200 font-medium">
                {t(item.key)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-primary-400 mb-2">
                {t('trust_stat1_number')}
              </div>
              <p className="text-gray-300 text-sm">
                {t('trust_stat1_label')}
              </p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-primary-400 mb-2">
                {t('trust_stat2_number')}
              </div>
              <p className="text-gray-300 text-sm">
                {t('trust_stat2_label')}
              </p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-primary-400 mb-2">
                {t('trust_stat3_number')}
              </div>
              <p className="text-gray-300 text-sm">
                {t('trust_stat3_label')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

