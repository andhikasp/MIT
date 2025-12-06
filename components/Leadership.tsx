'use client'

import { useState } from 'react'
import { useLanguage } from './LanguageProvider'
import Image from 'next/image'

interface Leader {
  id: string
  name: string
  title: string
  image: string
  messagePreview: string
  messageFull: string
}

export default function Leadership() {
  const { t } = useLanguage()
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null)
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())

  const leaders: Leader[] = [
    {
      id: 'yudie',
      name: t('leader_yudie_name'),
      title: t('leader_yudie_title'),
      image: '/leaders/yudie.png',
      messagePreview: t('leader_yudie_preview'),
      messageFull: t('leader_yudie_full'),
    },
    {
      id: 'vendra',
      name: t('leader_vendra_name'),
      title: t('leader_vendra_title'),
      image: '/leaders/vendra.png',
      messagePreview: t('leader_vendra_preview'),
      messageFull: t('leader_vendra_full'),
    },
    {
      id: 'buddy',
      name: t('leader_buddy_name'),
      title: t('leader_buddy_title'),
      image: '/leaders/buddy.png',
      messagePreview: t('leader_buddy_preview'),
      messageFull: t('leader_buddy_full'),
    },
    {
      id: 'rahma',
      name: t('leader_rahma_name'),
      title: t('leader_rahma_title'),
      image: '/leaders/rahma.png',
      messagePreview: t('leader_rahma_preview'),
      messageFull: t('leader_rahma_full'),
    },
  ]

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {leaders.map((leader) => (
          <div
            key={leader.id}
            onClick={() => setSelectedLeader(leader)}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-primary-500/10 cursor-pointer hover:bg-white/10 transition-all hover:scale-105"
          >
            <div className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 mb-4">
                <div className="w-32 h-32 rounded-full border-2 border-primary-500 overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 relative">
                  {!imageErrors.has(leader.id) ? (
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                      unoptimized
                      onError={() => {
                        setImageErrors((prev) => new Set(prev).add(leader.id))
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
                      {leader.name.charAt(0)}
                    </div>
                  )}
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">
                {leader.name}
              </h3>
              <p className="text-sm text-primary-300 mb-4 italic">
                {leader.title}
              </p>
              <p className="text-sm text-gray-300 italic line-clamp-3">
                "{leader.messagePreview}"
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedLeader(leader)
                }}
                className="mt-4 text-primary-400 text-sm hover:text-primary-300 transition-colors"
              >
                {t('leader_read_more')} →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedLeader && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedLeader(null)}
        >
          <div
            className="bg-gradient-to-br from-[#0b1021] via-[#0d1730] to-[#0b1021] rounded-2xl border border-white/10 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex items-start gap-6 mb-6">
                <div className="relative w-32 h-32 flex-shrink-0">
                  <div className="w-32 h-32 rounded-full border-2 border-primary-500 overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 relative">
                  {!imageErrors.has(selectedLeader.id) ? (
                    <Image
                      src={selectedLeader.image}
                      alt={selectedLeader.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                      unoptimized
                      onError={() => {
                        setImageErrors((prev) => new Set(prev).add(selectedLeader.id))
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
                      {selectedLeader.name.charAt(0)}
                    </div>
                  )}
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-1">
                    {selectedLeader.name}
                  </h2>
                  <p className="text-primary-300 mb-2">{selectedLeader.title}</p>
                </div>
                <button
                  onClick={() => setSelectedLeader(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-200 leading-relaxed whitespace-pre-line">
                  {selectedLeader.messageFull}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

