'use client'

import { useState } from 'react'
import { useLanguage } from './LanguageProvider'
import Image from 'next/image'

const projects = [
  {
    titleKey: 'work_item1_title',
    typeKey: 'work_item1_type',
    descKey: 'work_item1_desc',
    image: '/projects/civilwork.jpg',
  },
  {
    titleKey: 'work_item2_title',
    typeKey: 'work_item2_type',
    descKey: 'work_item2_desc',
    image: '/projects/Accessories Installation.jpg',
  },
  {
    titleKey: 'work_item3_title',
    typeKey: 'work_item3_type',
    descKey: 'work_item3_desc',
    image: '/projects/Electrical & Power Systems.jpg',
  },
  {
    titleKey: 'work_item4_title',
    typeKey: 'work_item4_type',
    descKey: 'work_item4_desc',
    image: '/projects/Pemeliharaan Perangkat & Tower.jpg',
  },
  {
    titleKey: 'work_item5_title',
    typeKey: 'work_item5_type',
    descKey: 'work_item5_desc',
    image: '/projects/Instalasi & Pembongkaran Tower.jpg',
  },
  {
    titleKey: 'work_item6_title',
    typeKey: 'work_item6_type',
    descKey: 'work_item6_desc',
    image: '/projects/Instalasi Perangkat & Aplikasi Smart Cluster.jpg',
  },
]

export default function Work() {
  const { t } = useLanguage()
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set())
  
  return (
    <section
      id="work"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0b1021] via-[#0f1731] to-[#0b1021]"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-primary-200 mb-2">
            {t('work_kicker')}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {t('work_title')}
          </h2>
          <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
            {t('work_body')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl shadow-primary-500/10 hover:shadow-2xl hover:shadow-primary-500/20 transition-all"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-300 to-indigo-500">
                {!imageErrors.has(idx) ? (
                  <Image
                    src={project.image}
                    alt={t(project.titleKey)}
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                    onError={() => {
                      setImageErrors((prev) => new Set(prev).add(idx))
                    }}
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1021]/60 via-transparent to-transparent" />
              </div>
              <div className="p-6 space-y-3">
                <p className="text-xs uppercase tracking-[0.2em] text-primary-200">
                  {t(project.typeKey)}
                </p>
                <h3 className="text-xl font-semibold text-white">
                  {t(project.titleKey)}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t(project.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

