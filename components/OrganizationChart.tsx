'use client'

import { useLanguage } from './LanguageProvider'

export default function OrganizationChart() {
  const { t } = useLanguage()

  return (
    <div className="py-12">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          {t('org_chart_title')}
        </h2>
        <p className="text-gray-400 text-sm">
          {t('org_chart_subtitle')}
        </p>
      </div>

      {/* Mobile Layout - Vertical Stack */}
      <div className="block md:hidden space-y-6">
        {/* Top Level */}
        <div className="space-y-4">
          <div className="flex gap-3 justify-center">
            <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl p-4 shadow-lg shadow-blue-500/20 border border-blue-700/50 flex-1 max-w-[48%]">
              <p className="text-white font-bold text-xs text-center">
                {t('org_komut')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl p-4 shadow-lg shadow-blue-500/20 border border-blue-700/50 flex-1 max-w-[48%]">
              <p className="text-white font-bold text-xs text-center">
                {t('org_komisaris')}
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-0.5 h-6 bg-gradient-to-b from-blue-600 to-transparent"></div>
          </div>
        </div>

        {/* Director Level */}
        <div className="space-y-4">
          <div className="flex gap-3 justify-center">
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl p-4 shadow-lg shadow-emerald-500/20 border border-emerald-500/50 flex-1">
              <p className="text-white font-bold text-xs text-center">
                {t('org_direktur_utama')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl p-4 shadow-lg shadow-emerald-500/20 border border-emerald-500/50 flex-1">
              <p className="text-white font-bold text-xs text-center">
                {t('org_direktur_finance')}
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-3">
            <div className="w-0.5 h-6 bg-gradient-to-b from-emerald-500 to-transparent"></div>
            <div className="w-0.5 h-6 bg-gradient-to-b from-emerald-500 to-transparent"></div>
          </div>
        </div>

        {/* Under Direktur Utama */}
        <div className="space-y-3">
          <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-lg p-3 shadow-md border border-cyan-500/50">
            <p className="text-white font-semibold text-xs text-center">
              {t('org_hse')}
            </p>
          </div>
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg p-3 shadow-md border border-emerald-400/50">
            <p className="text-white font-semibold text-xs text-center">
              {t('org_manager_operation')}
            </p>
          </div>
          <div className="space-y-2 pl-4 border-l-2 border-emerald-400/30">
            <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg p-2.5 shadow-md border border-cyan-400/50">
              <p className="text-white font-medium text-xs text-center">
                {t('org_vendor_management')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg p-2.5 shadow-md border border-cyan-400/50">
              <p className="text-white font-medium text-xs text-center">
                {t('org_project_management')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg p-2.5 shadow-md border border-cyan-400/50">
              <p className="text-white font-medium text-xs text-center">
                {t('org_maintenance_service')}
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg p-3 shadow-md border border-emerald-400/50">
            <p className="text-white font-semibold text-xs text-center">
              {t('org_manager_business')}
            </p>
          </div>
          <div className="space-y-2 pl-4 border-l-2 border-emerald-400/30">
            <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg p-2.5 shadow-md border border-cyan-400/50">
              <p className="text-white font-medium text-xs text-center">
                {t('org_product_service')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg p-2.5 shadow-md border border-cyan-400/50">
              <p className="text-white font-medium text-xs text-center">
                {t('org_marketing')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg p-2.5 shadow-md border border-cyan-400/50">
              <p className="text-white font-medium text-xs text-center">
                {t('org_design_estimator')}
              </p>
            </div>
          </div>
        </div>

        {/* Under Direktur Finance */}
        <div className="space-y-2">
          <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-lg p-3 shadow-md border border-cyan-500/50">
            <p className="text-white font-semibold text-xs text-center">
              {t('org_accounting')}
            </p>
          </div>
          <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-lg p-3 shadow-md border border-cyan-500/50">
            <p className="text-white font-semibold text-xs text-center">
              {t('org_ga_legal')}
            </p>
          </div>
          <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-lg p-3 shadow-md border border-cyan-500/50">
            <p className="text-white font-semibold text-xs text-center">
              {t('org_hrd_procurement')}
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Horizontal */}
      <div className="hidden md:block overflow-x-auto pb-8 -mx-4 px-4">
        <div className="min-w-[900px] mx-auto">
          {/* Top Level - Komisaris */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl p-4 shadow-lg shadow-blue-500/20 border border-blue-700/50 hover:scale-105 transition-transform">
              <p className="text-white font-bold text-sm text-center">
                {t('org_komut')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl p-4 shadow-lg shadow-blue-500/20 border border-blue-700/50 hover:scale-105 transition-transform">
              <p className="text-white font-bold text-sm text-center">
                {t('org_komisaris')}
              </p>
            </div>
          </div>

          {/* Connector Line */}
          <div className="flex justify-center mb-4">
            <div className="w-0.5 h-8 bg-gradient-to-b from-blue-600 to-transparent"></div>
          </div>

          {/* Director Level */}
          <div className="flex justify-center gap-6 mb-8">
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl p-5 shadow-lg shadow-emerald-500/20 border border-emerald-500/50 hover:scale-105 transition-transform min-w-[200px]">
              <p className="text-white font-bold text-sm text-center">
                {t('org_direktur_utama')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl p-5 shadow-lg shadow-emerald-500/20 border border-emerald-500/50 hover:scale-105 transition-transform min-w-[200px]">
              <p className="text-white font-bold text-sm text-center">
                {t('org_direktur_finance')}
              </p>
            </div>
          </div>

          {/* Connector Lines */}
          <div className="flex justify-center gap-6 mb-4">
            <div className="w-0.5 h-8 bg-gradient-to-b from-emerald-500 to-transparent"></div>
            <div className="w-0.5 h-8 bg-gradient-to-b from-emerald-500 to-transparent"></div>
          </div>

          {/* Manager Level under Direktur Utama */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-lg p-3 shadow-md border border-cyan-500/50 hover:scale-105 transition-transform">
              <p className="text-white font-semibold text-xs text-center">
                {t('org_hse')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg p-3 shadow-md border border-emerald-400/50 hover:scale-105 transition-transform">
              <p className="text-white font-semibold text-xs text-center">
                {t('org_manager_operation')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg p-3 shadow-md border border-emerald-400/50 hover:scale-105 transition-transform">
              <p className="text-white font-semibold text-xs text-center">
                {t('org_manager_business')}
              </p>
            </div>
          </div>

          {/* Departments under Direktur Finance */}
          <div className="flex justify-center gap-3 mb-8">
            <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-lg p-3 shadow-md border border-cyan-500/50 hover:scale-105 transition-transform">
              <p className="text-white font-semibold text-xs text-center">
                {t('org_accounting')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-lg p-3 shadow-md border border-cyan-500/50 hover:scale-105 transition-transform">
              <p className="text-white font-semibold text-xs text-center">
                {t('org_ga_legal')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-lg p-3 shadow-md border border-cyan-500/50 hover:scale-105 transition-transform">
              <p className="text-white font-semibold text-xs text-center">
                {t('org_hrd_procurement')}
              </p>
            </div>
          </div>

          {/* Connector Lines for Manager Operation */}
          <div className="flex justify-center gap-4 mb-4">
            <div className="w-0.5 h-8 bg-gradient-to-b from-emerald-400 to-transparent"></div>
            <div className="w-0.5 h-8 bg-gradient-to-b from-emerald-400 to-transparent"></div>
            <div className="w-0.5 h-8 bg-gradient-to-b from-emerald-400 to-transparent"></div>
          </div>

          {/* Departments under Manager Operation */}
          <div className="flex justify-center gap-3 mb-8">
            <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg p-3 shadow-md border border-cyan-400/50 hover:scale-105 transition-transform">
              <p className="text-white font-medium text-xs text-center">
                {t('org_vendor_management')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg p-3 shadow-md border border-cyan-400/50 hover:scale-105 transition-transform">
              <p className="text-white font-medium text-xs text-center">
                {t('org_project_management')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg p-3 shadow-md border border-cyan-400/50 hover:scale-105 transition-transform">
              <p className="text-white font-medium text-xs text-center">
                {t('org_maintenance_service')}
              </p>
            </div>
          </div>

          {/* Connector Lines for Manager Business */}
          <div className="flex justify-center gap-4 mb-4">
            <div className="w-0.5 h-8 bg-gradient-to-b from-emerald-400 to-transparent"></div>
            <div className="w-0.5 h-8 bg-gradient-to-b from-emerald-400 to-transparent"></div>
            <div className="w-0.5 h-8 bg-gradient-to-b from-emerald-400 to-transparent"></div>
          </div>

          {/* Departments under Manager Business */}
          <div className="flex justify-center gap-3">
            <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg p-3 shadow-md border border-cyan-400/50 hover:scale-105 transition-transform">
              <p className="text-white font-medium text-xs text-center">
                {t('org_product_service')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg p-3 shadow-md border border-cyan-400/50 hover:scale-105 transition-transform">
              <p className="text-white font-medium text-xs text-center">
                {t('org_marketing')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg p-3 shadow-md border border-cyan-400/50 hover:scale-105 transition-transform">
              <p className="text-white font-medium text-xs text-center">
                {t('org_design_estimator')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

