'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from './LanguageProvider'

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#0b1021] via-[#0d1730] to-[#0b1021] pt-28 pb-24 px-4 sm:px-6 lg:px-8 text-white"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-10 -top-20 h-72 w-72 rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.25em] text-primary-200">
              {t('hero_kicker')}
            </p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              {t('hero_title')}
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl">{t('hero_body')}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-semibold transition-colors shadow-lg shadow-primary-500/30"
              >
                {t('hero_cta_primary')}
              </Link>
              <Link
                href="/projects"
                className="border border-white/20 text-white px-6 py-3 rounded-full font-semibold hover:border-white/40 transition-colors"
              >
                {t('hero_cta_secondary')}
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 pt-2 text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                {t('hero_badge_certified')}
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                {t('hero_badge_quality')}
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-orange-400" />
                {t('hero_badge_support')}
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-pink-400" />
                {t('hero_badge_guarantee')}
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary-500/30 via-indigo-500/20 to-transparent blur-3xl" />
            <div className="relative rounded-3xl border border-white/10 bg-black/50 backdrop-blur-xl p-8 shadow-2xl shadow-primary-500/20 flex items-center justify-center">
              <div className="w-full max-w-md">
                <div className="relative w-full aspect-square flex items-center justify-center">
                  <Image
                    src="/logo-mhg.png"
                    alt="MHG PT MOXELE INDO GROUP Logo"
                    width={400}
                    height={400}
                    className="w-full h-full object-contain"
                    unoptimized
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


