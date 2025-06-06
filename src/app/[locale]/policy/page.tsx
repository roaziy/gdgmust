import { useTranslations } from 'next-intl';

export default function PolicyPage() {
  const t = useTranslations('Policy');
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 pt-24 pb-16 px-4 md:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="w-96 h-96 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full absolute -top-48 -left-48 animate-pulse"></div>
        <div className="w-64 h-64 bg-gradient-to-r from-green-200/30 to-blue-200/30 rounded-full absolute top-1/2 -right-32 animate-pulse delay-1000"></div>
        <div className="w-80 h-80 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full absolute bottom-0 left-1/3 animate-pulse delay-500"></div>
      </div>

      <div className="mt-12 max-w-4xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20 relative">
          {/* Floating Icons */}
          <div className="absolute inset-0 -z-10">
            <div className="w-8 h-8 bg-blue-400/20 rounded-lg absolute top-0 left-1/4 animate-bounce delay-200" style={{animationDelay: '0.2s'}}></div>
            <div className="w-6 h-6 bg-green-400/20 rounded-full absolute top-8 right-1/3 animate-bounce delay-700" style={{animationDelay: '0.7s'}}></div>
            <div className="w-4 h-4 bg-purple-400/20 rounded-lg absolute -top-4 right-1/4 animate-bounce delay-1200" style={{animationDelay: '1.2s'}}></div>
            <div className="w-5 h-5 bg-yellow-400/20 rounded-full absolute top-12 left-1/3 animate-bounce delay-300" style={{animationDelay: '0.3s'}}></div>
          </div>
          
          {/* Privacy Shield Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
            {t('subtitle')}
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full shadow-md border border-gray-200/50">
            <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm text-gray-600 font-medium">
              {t('lastUpdated')}: {t('updateDate')}
            </span>
          </div>
        </div>        {/* Content with Enhanced Styling */}
        <div className="space-y-8">
          {/* Introduction */}
          <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">{t('introduction.title')}</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                {t('introduction.content1')}
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t('introduction.content2')}
              </p>
            </div>
          </section>

          {/* Information We Collect */}
          <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300">{t('informationCollected.title')}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl border border-blue-200/50">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  {t('informationCollected.personalInfo.title')}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {t('informationCollected.personalInfo.item1')}
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {t('informationCollected.personalInfo.item2')}
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {t('informationCollected.personalInfo.item3')}
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {t('informationCollected.personalInfo.item4')}
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-xl border border-purple-200/50">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  {t('informationCollected.automaticInfo.title')}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {t('informationCollected.automaticInfo.item1')}
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {t('informationCollected.automaticInfo.item2')}
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {t('informationCollected.automaticInfo.item3')}
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {t('informationCollected.automaticInfo.item4')}
                  </li>
                </ul>
              </div>
            </div>
          </section>          {/* How We Use Information */}
          <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-300">{t('howWeUse.title')}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="flex items-start p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200/50 hover:shadow-md transition-all duration-200">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white font-bold text-sm">{item}</span>
                  </div>
                  <p className="text-gray-700">{t(`howWeUse.item${item}`)}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Information Sharing */}
          <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 group-hover:text-red-700 transition-colors duration-300">{t('informationSharing.title')}</h2>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl border border-red-200/50 mb-6">
              <p className="text-gray-700 leading-relaxed text-lg font-medium">
                {t('informationSharing.content1')}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-start p-4 bg-white/70 rounded-lg border border-gray-200/50 hover:shadow-md transition-all duration-200">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">{t(`informationSharing.item${item}`)}</p>
                </div>
              ))}
            </div>
          </section>          {/* Data Security */}
          <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 group-hover:text-indigo-700 transition-colors duration-300">{t('dataSecurity.title')}</h2>
            </div>
            <div className="space-y-4">
              <div className="p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl border border-indigo-200/50">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t('dataSecurity.content1')}
                </p>
              </div>
              <div className="p-6 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl border border-yellow-200/50">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {t('dataSecurity.content2')}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">{t('yourRights.title')}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex items-start p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg border border-emerald-200/50 hover:shadow-md transition-all duration-200">
                  <svg className="w-6 h-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">{t(`yourRights.item${item}`)}</p>
                </div>
              ))}
            </div>
          </section>          {/* Cookies */}
          <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-300">{t('cookies.title')}</h2>
            </div>
            <div className="space-y-4">
              <div className="p-6 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl border border-amber-200/50">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t('cookies.content1')}
                </p>
              </div>
              <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t('cookies.content2')}
                </p>
              </div>
            </div>
          </section>

          {/* Third-Party Services */}
          <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 group-hover:text-violet-700 transition-colors duration-300">{t('thirdParty.title')}</h2>
            </div>
            <div className="p-6 bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl border border-violet-200/50 mb-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                {t('thirdParty.content1')}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-center p-4 bg-white/70 rounded-lg border border-gray-200/50 hover:shadow-md transition-all duration-200">
                  <div className="w-3 h-3 bg-violet-500 rounded-full mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700">{t(`thirdParty.item${item}`)}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Changes to Policy */}
          <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors duration-300">{t('changes.title')}</h2>
            </div>
            <div className="p-6 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl border border-teal-200/50">
              <p className="text-gray-700 leading-relaxed text-lg">
                {t('changes.content')}
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 group-hover:text-pink-700 transition-colors duration-300">{t('contact.title')}</h2>
            </div>
            <div className="p-6 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl border border-pink-200/50 mb-6">
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                {t('contact.content')}
              </p>
            </div>
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-xl border border-gray-200/50">
              <h3 className="font-bold text-xl text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                {t('contact.organizationName')}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <span className="font-medium text-gray-900">{t('contact.email')}:</span>
                      <a href="mailto:hello@gdgmust.dev" className="text-blue-600 hover:text-blue-800 transition-colors ml-2">hello@gdgmust.dev</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <span className="font-medium text-gray-900">{t('contact.alternativeEmail')}:</span>
                      <a href="mailto:gdgmust@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors ml-2">gdgmust@gmail.com</a>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <span className="font-medium text-gray-900">{t('contact.phone')}:</span>
                      <span className="text-gray-700 ml-2">+976-8824-5988</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-gray-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <span className="font-medium text-gray-900">{t('contact.address')}:</span>
                      <p className="text-gray-700 ml-2">{t('contact.fullAddress')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* GDPR & International Users */}
          <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-slate-500 to-gray-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 group-hover:text-slate-700 transition-colors duration-300">{t('international.title')}</h2>
            </div>
            <div className="space-y-4">
              <div className="p-6 bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl border border-slate-200/50">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t('international.content1')}
                </p>
              </div>
              <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t('international.content2')}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}