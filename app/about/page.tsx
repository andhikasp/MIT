 'use client'

import { useLanguage } from '@/components/LanguageProvider'
import Leadership from '@/components/Leadership'
import OrganizationChart from '@/components/OrganizationChart'

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0b1021] via-[#0d1730] to-[#0b1021] text-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-10">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-primary-200 mb-2">
            {t('about_kicker')}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold">{t('about_title')}</h1>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-primary-500/10">
            <h2 className="text-xl font-semibold text-white mb-3">
              {t('about_card_about')}
            </h2>
            <p className="text-gray-200 leading-relaxed">{t('about_body')}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-primary-500/10">
            <h2 className="text-xl font-semibold text-white mb-3">
              {t('about_card_vision')}
            </h2>
            <p className="text-gray-200 leading-relaxed">
              {t('about_vision_body')}
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-primary-500/10">
            <h2 className="text-xl font-semibold text-white mb-3">
              {t('about_card_mission')}
            </h2>
            <p className="text-gray-200 leading-relaxed">
              {t('about_mission_body')}
            </p>
          </div>
        </div>

        {/* Leadership Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            {t('leader_section_title')}
          </h2>
          <Leadership />
        </div>

        {/* Organization Chart Section */}
        <div className="mt-16">
          <OrganizationChart />
        </div>

        {/* <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: t('about_pill1_title'),
              desc: t('about_pill1_desc'),
            },
            {
              title: t('about_pill2_title'),
              desc: t('about_pill2_desc'),
            },
            {
              title: t('about_pill3_title'),
              desc: t('about_pill3_desc'),
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-primary-500/10"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-200">{item.desc}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}

