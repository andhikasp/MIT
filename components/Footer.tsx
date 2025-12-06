'use client'

import Link from 'next/link'
import { useLanguage } from './LanguageProvider'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="bg-[#080c16] text-gray-300 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Grid 1: Brand */}
          <div className="space-y-4">
            <div>
              <h4 className="text-white font-semibold mb-3">
                {t('footer_location_title')}
              </h4>
              <p className="text-white font-semibold mb-2">
                {t('footer_company_name')}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {t('footer_address_new')}
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>
                  <span className="text-gray-400">Tel:</span>{' '}
                  <a
                    href={`tel:${t('contact_phone_full').replace(/\s/g, '')}`}
                    className="hover:text-white transition-colors"
                  >
                    {t('contact_phone_full')}
                  </a>
                </p>
                <p>
                  <span className="text-gray-400">Email:</span>{' '}
                  <a
                    href={`mailto:${t('contact_email_full')}`}
                    className="hover:text-white transition-colors"
                  >
                    {t('contact_email_full')}
                  </a>
                </p>
                <p>
                  <span className="text-gray-400">Website:</span>{' '}
                  <a
                    href={`https://${t('contact_website')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {t('contact_website')}
                  </a>
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-white font-semibold mb-2 text-sm">
                  {t('footer_operational_hours')}
                </p>
                <div className="space-y-1 text-sm text-gray-300">
                  <p>{t('footer_operational_weekday')}</p>
                  <p>{t('footer_operational_saturday')}</p>
                  <p>{t('footer_operational_sunday')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Grid 2: Maps */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {t('contact_address')}
            </h4>
            <div className="w-full h-[250px] rounded-lg overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5!2d106.753785!3d-6.5694554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c518b443000b%3A0x9b43a7429005514b!2s4W%20Office%20Jl.%20Ring%20Road%20Jl.%20Raya%20Bubulak%20No.A-4%20RT.01%2FRW.11%2C%20Bubulak%20Kec.%20Bogor%20Bar.%2C%20Kota%20Bogor%2C%20Jawa%20Barat%2016115!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Grid 3: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {t('footer_quicklinks')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {t('nav_home')}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  {t('nav_about')}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  {t('nav_services')}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  {t('nav_projects')}
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-white transition-colors"
                >
                  {t('nav_products')}
                </Link>
              </li>
              <li>
                <Link
                  href="/subsidiaries"
                  className="hover:text-white transition-colors"
                >
                  {t('nav_subsidiaries')}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  {t('nav_contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Grid 4: Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {t('footer_contact')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${t('contact_email_full')}`}
                  className="hover:text-white transition-colors"
                >
                  {t('contact_email_full')}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${t('contact_phone_full').replace(/\s/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {t('contact_phone_full')}
                </a>
              </li>
              <li>
                <a
                  href={`https://${t('contact_website')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {t('contact_website')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} PT. MOXELE INDO GROUP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


