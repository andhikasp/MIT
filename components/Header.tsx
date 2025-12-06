'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from './LanguageProvider'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { locale, setLocale, t } = useLanguage()
  const pathname = usePathname()

  return (
    <header className="fixed top-0 w-full bg-[#0b1021]/80 backdrop-blur-md border-b border-white/10 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white">
              Moxelle Indo Group
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link
                href="/"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === '/'
                    ? 'text-white bg-primary-600/20 rounded-lg border border-primary-500/50'
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                {t('nav_home')}
              </Link>
              <Link
                href="/about"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === '/about'
                    ? 'text-white bg-primary-600/20 rounded-lg border border-primary-500/50'
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                {t('nav_about')}
              </Link>
              <Link
                href="/services"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === '/services'
                    ? 'text-white bg-primary-600/20 rounded-lg border border-primary-500/50'
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                {t('nav_services')}
              </Link>
              <Link
                href="/projects"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === '/projects'
                    ? 'text-white bg-primary-600/20 rounded-lg border border-primary-500/50'
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                {t('nav_projects')}
              </Link>
              <Link
                href="/products"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === '/products'
                    ? 'text-white bg-primary-600/20 rounded-lg border border-primary-500/50'
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                {t('nav_products')}
              </Link>
              <Link
                href="/subsidiaries"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === '/subsidiaries'
                    ? 'text-white bg-primary-600/20 rounded-lg border border-primary-500/50'
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                {t('nav_subsidiaries')}
              </Link>
              <Link
                href="/contact"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === '/contact'
                    ? 'text-white bg-primary-600/20 rounded-lg border border-primary-500/50'
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                {t('nav_contact')}
              </Link>
              <div className="flex items-center gap-1 rounded-full bg-white/5 border border-white/10 px-2 py-1">
                <button
                  onClick={() => setLocale('id')}
                  className={`px-2 py-1 text-xs font-semibold rounded-full transition-colors ${
                    locale === 'id'
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-200 hover:text-white'
                  }`}
                >
                  ID
                </button>
                <button
                  onClick={() => setLocale('en')}
                  className={`px-2 py-1 text-xs font-semibold rounded-full transition-colors ${
                    locale === 'en'
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-200 hover:text-white'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          {/* <div className="hidden md:block">
            <Link
              href="#contact"
              className="bg-primary-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/30"
            >
              Get Started
            </Link>
          </div> */}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 border-t border-white/10">
              <Link
                href="/"
                className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                  pathname === '/'
                    ? 'text-white bg-primary-600/20 border border-primary-500/50'
                    : 'text-gray-200 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav_home')}
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                  pathname === '/about'
                    ? 'text-white bg-primary-600/20 border border-primary-500/50'
                    : 'text-gray-200 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav_about')}
              </Link>
              <Link
                href="/services"
                className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                  pathname === '/services'
                    ? 'text-white bg-primary-600/20 border border-primary-500/50'
                    : 'text-gray-200 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav_services')}
              </Link>
              <Link
                href="/projects"
                className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                  pathname === '/projects'
                    ? 'text-white bg-primary-600/20 border border-primary-500/50'
                    : 'text-gray-200 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav_projects')}
              </Link>
              <Link
                href="/products"
                className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                  pathname === '/products'
                    ? 'text-white bg-primary-600/20 border border-primary-500/50'
                    : 'text-gray-200 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav_products')}
              </Link>
              <Link
                href="/subsidiaries"
                className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                  pathname === '/subsidiaries'
                    ? 'text-white bg-primary-600/20 border border-primary-500/50'
                    : 'text-gray-200 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav_subsidiaries')}
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors mt-2 ${
                  pathname === '/contact'
                    ? 'text-white bg-primary-600 border border-primary-500/50'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav_contact')}
              </Link>
              <div className="flex items-center gap-2 px-3 pt-2">
                <button
                  onClick={() => {
                    setLocale('id')
                    setIsMenuOpen(false)
                  }}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
                    locale === 'id'
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-200 hover:text-white border border-white/10'
                  }`}
                >
                  ID
                </button>
                <button
                  onClick={() => {
                    setLocale('en')
                    setIsMenuOpen(false)
                  }}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
                    locale === 'en'
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-200 hover:text-white border border-white/10'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}


