'use client'

import Image from 'next/image'
import { useLanguage } from '@/components/LanguageProvider'

const subsidiaries = [
  { titleKey: 'subs_item4_title', descKey: 'subs_item4_desc', logo: '/logo-mit.png' },
  { titleKey: 'subs_item5_title', descKey: 'subs_item5_desc' },
  { titleKey: 'subs_item6_title', descKey: 'subs_item6_desc' },
  { titleKey: 'subs_item7_title', descKey: 'subs_item7_desc' },
]

export default function SubsidiariesPage() {
  const { t } = useLanguage()
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0b1021] via-[#0d1730] to-[#0b1021] text-white">
      <div className="container mx-auto max-w-5xl space-y-10">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-primary-200">
            {t('subs_kicker')}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold">
            {t('subs_title')}
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto">{t('subs_body')}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {subsidiaries.map((item) => (
            <div
              key={item.titleKey}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-primary-500/10"
            >
              {item.logo ? (
                <div className="grid grid-cols-2 gap-4 items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {t(item.titleKey)}
                    </h3>
                    <p className="text-gray-200">{t(item.descKey)}</p>
                  </div>
                  <div className="flex justify-center items-center">
                    <Image
                      src={item.logo}
                      alt={t(item.titleKey)}
                      width={200}
                      height={200}
                      className="w-full h-auto max-w-[150px] object-contain opacity-80 rounded-lg"
                      unoptimized
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {t(item.titleKey)}
                  </h3>
                  <p className="text-gray-200">{t(item.descKey)}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

