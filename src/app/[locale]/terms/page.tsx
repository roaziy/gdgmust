import { useTranslations } from 'next-intl';

export default function Terms() {
  const t = useTranslations('Terms');
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/20 via-purple-50/10 to-white pt-24 pb-16 px-4 md:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      {/* <div className="absolute inset-0 -z-10">
        <div className="w-96 h-96 bg-gradient-to-r from-emerald-200/30 to-blue-200/30 rounded-full absolute -top-48 -left-48 animate-pulse"></div>
        <div className="w-64 h-64 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full absolute top-1/2 -right-32 animate-pulse delay-1000"></div>
        <div className="w-80 h-80 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-full absolute bottom-0 left-1/3 animate-pulse delay-500"></div>
      </div> */}

      <div className="mt-10 max-w-4xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20 relative">
          {/* Floating Icons */}
          <div className="absolute inset-0 -z-10">
            <div className="w-8 h-8 bg-blue-400/20 rounded-lg absolute top-0 left-1/4 animate-bounce delay-200" style={{animationDelay: '0.2s'}}></div>
            <div className="w-6 h-6 bg-green-400/20 rounded-full absolute top-8 right-1/3 animate-bounce delay-700" style={{animationDelay: '0.7s'}}></div>
            <div className="w-4 h-4 bg-purple-400/20 rounded-lg absolute -top-4 right-1/4 animate-bounce delay-1200" style={{animationDelay: '1.2s'}}></div>
            <div className="w-5 h-5 bg-yellow-400/20 rounded-full absolute top-12 left-1/3 animate-bounce delay-300" style={{animationDelay: '0.3s'}}></div>
          </div>
          
          {/* Legal Document Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-xl">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
            {t('subtitle')}
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full shadow-md border border-gray-200/50">
            <svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm text-gray-600 font-medium">
              {t('lastUpdated')}: {t('updateDate')}
            </span>
          </div>
        </div>

        {/* Welcome Section */}
        <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-xl transition-all duration-300 group mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10m0 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2m10 0v10a2 2 0 01-2 2H9a2 2 0 01-2-2V8m10 0H7" />
              </svg>
            </div>            <h2 className="text-3xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">Welcome</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg">
              {t('welcome')}
            </p>
          </div>
        </section>

        {/* Content with Enhanced Styling */}
        <div className="space-y-8">
          {/* Use of Our Services */}
          <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">{t('useOfServices.title')}</h2>
            </div>
            <div className="grid gap-4">
              {[1, 2].map((item) => (
                <div key={item} className="flex items-start p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200/50 hover:shadow-md transition-all duration-200">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">{item}</span>
                  </div>
                  <p className="text-gray-700">{t(`useOfServices.item${item}`)}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Event Participation */}
          <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">{t('eventParticipation.title')}</h2>
            </div>
            <div className="grid gap-4">
              {[1, 2].map((item) => (
                <div key={item} className="flex items-start p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200/50 hover:shadow-md transition-all duration-200">
                  <svg className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <p className="text-gray-700">{t(`eventParticipation.item${item}`)}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-300">{t('intellectualProperty.title')}</h2>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200/50">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t('intellectualProperty.content')}
                </p>
              </div>
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-200/50">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
                  <div className="w-6 h-6 bg-indigo-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  {t('intellectualProperty.thirdParty.title')}
                </h3>                <p className="text-gray-700 leading-relaxed">
                  {t('intellectualProperty.thirdParty.content1')} {t('intellectualProperty.thirdParty.content2')}
                </p>
              </div>
            </div>
          </section>          {/* Privacy Policy Section */}
          <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 group-hover:text-indigo-700 transition-colors duration-300">{t('privacySection.title')}</h2>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200/50">
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  {t('privacySection.intro')}
                </p>
              </div>
              
              <div className="grid gap-4">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200/50">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
                    <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    {t('privacySection.dataCollection.title')}
                  </h3>
                  <div className="space-y-3">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="flex items-start">
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                          <span className="text-white text-xs font-bold">•</span>
                        </div>
                        <p className="text-gray-700">{t(`privacySection.dataCollection.item${item}`)}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200/50">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    {t('privacySection.dataUsage.title')}
                  </h3>
                  <div className="space-y-3">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="flex items-start">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                          <span className="text-white text-xs font-bold">•</span>
                        </div>
                        <p className="text-gray-700">{t(`privacySection.dataUsage.item${item}`)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Code of Conduct Section */}
          <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 group-hover:text-rose-700 transition-colors duration-300">{t('codeOfConduct.title')}</h2>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl border border-rose-200/50">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t('codeOfConduct.intro')}
                </p>
              </div>
              
              <div className="grid gap-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200/50">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {t('codeOfConduct.expectedBehavior.title')}
                  </h3>
                  <div className="space-y-3">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="flex items-start">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                          <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="4" />
                          </svg>
                        </div>
                        <p className="text-gray-700">{t(`codeOfConduct.expectedBehavior.item${item}`)}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-xl border border-red-200/50">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <div className="w-6 h-6 bg-red-500 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    {t('codeOfConduct.unacceptableBehavior.title')}
                  </h3>
                  <div className="space-y-3">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="flex items-start">
                        <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                          <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="4" />
                          </svg>
                        </div>
                        <p className="text-gray-700">{t(`codeOfConduct.unacceptableBehavior.item${item}`)}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border border-yellow-200/50">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <div className="w-6 h-6 bg-yellow-500 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                      </svg>
                    </div>
                    {t('codeOfConduct.reporting.title')}
                  </h3>
                  <div className="space-y-3">
                    <p className="text-gray-700">{t('codeOfConduct.reporting.content')}</p>
                    <div className="mt-4 p-4 bg-white bg-opacity-60 rounded-lg border border-yellow-300/50">
                      <p className="text-sm text-yellow-800 font-medium mb-1">{t('codeOfConduct.reporting.emailLabel')}</p>
                      <a href={`mailto:${t('contact.conductEmail')}`} className="text-yellow-700 hover:text-yellow-900 transition-colors font-medium">
                        {t('contact.conductEmail')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Changes to Terms */}
          <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-xl transition-all duration-300 group">
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
          
          {/* Contact Section */}
          <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-xl transition-all duration-300 group">
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
                      <span className="font-medium text-gray-900">{t('contact.emailLabel')}:</span>
                      <a href={`mailto:${t('contact.email')}`} className="text-blue-600 hover:text-blue-800 transition-colors ml-2">{t('contact.email')}</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <div>
                      <span className="font-medium text-gray-900">{t('contact.conductEmailLabel')}:</span>
                      <a href={`mailto:${t('contact.conductEmail')}`} className="text-blue-600 hover:text-blue-800 transition-colors ml-2">{t('contact.conductEmail')}</a>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <span className="font-medium text-gray-900">{t('contact.phoneLabel')}:</span>
                      <span className="text-gray-700 ml-2">{t('contact.phone')}</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-gray-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <span className="font-medium text-gray-900">{t('contact.addressLabel')}:</span>
                      <p className="text-gray-700 ml-2">{t('contact.address')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
