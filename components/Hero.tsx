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

          <div className="relative group">
            {/* Multi-layer glow effects for depth */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary-500/50 via-indigo-500/40 to-purple-500/30 blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-primary-400/30 via-transparent to-indigo-400/30 blur-2xl opacity-60" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-primary-600/10 via-transparent to-indigo-600/10" />
            
            {/* Main logo container with premium styling */}
            <div className="relative rounded-3xl border border-white/30 bg-gradient-to-br from-black/70 via-[#0b1021]/90 to-black/70 backdrop-blur-3xl p-12 shadow-2xl shadow-primary-500/40 flex items-center justify-center overflow-hidden group-hover:border-primary-400/50 group-hover:shadow-primary-500/50 transition-all duration-700">
              {/* Inner glow layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/8 via-transparent to-indigo-500/8 rounded-3xl" />
              <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-t from-white/5 via-transparent to-transparent" />
              
              {/* Animated shimmer effect on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-1000" />
              
              {/* Logo with enhanced visual effects */}
              <div className="w-full max-w-md relative z-10">
                <div className="relative w-full aspect-square flex items-center justify-center p-4">
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/20 via-indigo-500/20 to-primary-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="relative z-10 w-full h-full logo-no-bg">
                    <Image
                      src="/logo-mhg.png"
                      alt="PT MOXELE INDO GROUP Logo"
                      width={480}
                      height={480}
                      className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.3)] filter brightness-[1.15] contrast-110 saturate-110 group-hover:scale-[1.08] group-hover:drop-shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all duration-700 ease-out"
                      unoptimized
                      priority
                    />
                  </div>
                  
                  {/* Subtle inner shadow for depth */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 rounded-full opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


