'use client'

import { useLanguage } from './LanguageProvider'

const statKeys = ['stats_1', 'stats_2', 'stats_3', 'stats_4'] as const
const statValues = ['120+', '98%', '0.8s', '3.5x']

export default function Stats() {
  const { t } = useLanguage()
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0d1324] border-b border-white/5">
      <div className="container mx-auto max-w-6xl space-y-8">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-primary-200 mb-2">
            {t('stats_kicker')}
          </p>
          <h3 className="text-2xl font-semibold text-white">
            {t('stats_heading')}
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statKeys.map((key, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center shadow-lg shadow-primary-500/10"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {statValues[idx]}
              </div>
              <p className="text-sm text-gray-300">{t(key)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

