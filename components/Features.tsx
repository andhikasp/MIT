'use client'

import { useLanguage } from './LanguageProvider'

const services = [
  { titleKey: 'svc_brand_title', descKey: 'svc_brand_desc', pill: 'Survey' },
  { titleKey: 'svc_saas_title', descKey: 'svc_saas_desc', pill: 'Expert Team' },
  { titleKey: 'svc_perf_title', descKey: 'svc_perf_desc', pill: 'Installation' },
  { titleKey: 'svc_design_title', descKey: 'svc_design_desc', pill: 'Maintenance' },
  { titleKey: 'svc_copy_title', descKey: 'svc_copy_desc', pill: 'Safety' },
]

export default function Features() {
  const { t } = useLanguage()
  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-gray-900"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-primary-600 mb-2">
            {t('services_kicker')}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            {t('services_title')}
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            {t('services_body')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-200 w-full text-center"
            >
              <span className="inline-flex items-center rounded-full bg-primary-50 text-primary-700 px-3 py-1 text-xs font-semibold">
                {service.pill}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mt-4">
                {t(service.titleKey)}
              </h3>
              <p className="text-gray-600 mt-2">{t(service.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


