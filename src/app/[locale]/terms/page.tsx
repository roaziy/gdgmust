import { useTranslations } from 'next-intl';
import {getTranslations} from 'next-intl/server';
import { 
  FaFileAlt, 
  FaClock, 
  FaExclamationTriangle, 
  FaBolt, 
  FaLink, 
  FaLock, 
  FaUsers, 
  FaCheck, 
  FaTimes, 
  FaShieldAlt, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaBuilding,
  FaCircle,
  FaClipboardList,
  FaGlobe,
  FaCalendarAlt,
  FaDatabase,
  FaHeart,
  FaRedo,
  FaBullhorn
} from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: t('terms')
  };
}

// IconBox component for consistent icon rendering
const IconBox = ({
  icon: Icon,
  bg,
  size = 'w-12 h-12',
  iconSize = 'w-6 h-6',
  className = '',
}: {
  icon: React.ElementType;
  bg: string;
  size?: string;
  iconSize?: string;
  className?: string;
}) => (
  <div className={`flex items-center justify-center ${size} ${bg} rounded-xl ${className}`}>
    <Icon className={`${iconSize} text-white`} />
  </div>
);

export default function Terms() {
  const t = useTranslations('Terms');
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/20 via-purple-50/10 to-white pt-24 pb-16 px-4 md:px-8 relative overflow-hidden">
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
            <FaFileAlt className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
            {t('subtitle')}
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full shadow-md border border-gray-200/50">
            <FaClock className="w-4 h-4 text-emerald-500 mr-2" />
            <span className="text-sm text-gray-600 font-medium">
              {t('lastUpdated')}: {t('updateDate')}
            </span>
          </div>
        </div>

        {/* Welcome Section */}
        <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-xl transition-all duration-300 group mb-8">
          <div className="flex items-center mb-6">
            <div className="w-[48px] h-[48px] mr-4">
              <IconBox icon={FaClipboardList} bg="bg-gradient-to-r from-emerald-500 to-teal-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
              Welcome
            </h2>
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
              <div className="w-[48px] h-[48px] mr-4">
                <IconBox icon={FaGlobe} bg="bg-gradient-to-r from-blue-500 to-indigo-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                {t('useOfServices.title')}
              </h2>
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
              <div className="w-[48px] h-[48px] mr-4">
                <IconBox icon={FaCalendarAlt} bg="bg-gradient-to-r from-purple-500 to-pink-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                {t('eventParticipation.title')}
              </h2>
            </div>
            <div className="grid gap-4">
              {[1, 2].map((item) => (
                <div key={item} className="flex items-start p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200/50 hover:shadow-md transition-all duration-200">
                  <FaExclamationTriangle className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{t(`eventParticipation.item${item}`)}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="w-[48px] h-[48px] mr-4">
                <IconBox icon={FaBolt} bg="bg-gradient-to-r from-amber-500 to-orange-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-300">
                {t('intellectualProperty.title')}
              </h2>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200/50">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t('intellectualProperty.content')}
                </p>
              </div>
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-200/50">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
                  <div className="w-6 h-6 bg-indigo-500 rounded-lg flex items-center justify-center mr-3 p-2">
                    <FaLink className="w-3 h-3 text-white" />
                  </div>
                  {t('intellectualProperty.thirdParty.title')}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('intellectualProperty.thirdParty.content1')} {t('intellectualProperty.thirdParty.content2')}
                </p>
              </div>
            </div>
          </section>

          {/* Privacy Policy Section */}
          <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="w-[48px] h-[48px] mr-4">
                <IconBox icon={FaLock} bg="bg-gradient-to-r from-indigo-500 to-purple-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 group-hover:text-indigo-700 transition-colors duration-300">
                {t('privacySection.title')}
              </h2>
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
                    <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center mr-3 p-2">
                      <FaDatabase className="w-3 h-3 text-white" />
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
                    <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center mr-3 p-2">
                      <FaHeart className="w-3 h-3 text-white" />
                    </div>
                    {t('privacySection.dataUsage.title')}
                  </h3>
                  <div className="space-y-3">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="flex items-start">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                          <FaCheck className="w-3 h-3 text-white" />
                        </div>
                        <p className="text-gray-700">{t(`privacySection.dataUsage.item${item}`)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                      <div className="w-6 h-6 bg-orange-500 rounded-lg flex items-center justify-center mr-3 p-2">
                        <FaShieldAlt className="w-3 h-3 text-white" />
                      </div>
                      {t('privacySection.rights.title')}
                    </h3>
                    <div className="space-y-2">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="flex items-start">
                          <FaCircle className="w-2 h-2 text-orange-500 mr-2 mt-2 flex-shrink-0" />
                          <p className="text-gray-700 text-sm">{t(`privacySection.rights.item${item}`)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                      <div className="w-6 h-6 bg-red-500 rounded-lg flex items-center justify-center mr-3 p-2">
                        <FaTimes className="w-3 h-3 text-white" />
                      </div>
                      {t('privacySection.thirdParty.title')}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {t('privacySection.thirdParty.content')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Code of Conduct */}
          <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="w-[48px] h-[48px] mr-4">
                <IconBox icon={FaUsers} bg="bg-gradient-to-r from-emerald-500 to-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                {t('codeOfConduct.title')}
              </h2>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border border-emerald-200/50">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t('codeOfConduct.intro')}
                </p>
              </div>
              
              <div className="grid gap-4">
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-200/50">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <div className="w-6 h-6 bg-teal-500 rounded-lg flex items-center justify-center mr-3 p-2">
                      <FaCheck className="w-3 h-3 text-white" />
                    </div>
                    {t('codeOfConduct.expected.title')}
                  </h3>
                  <div className="space-y-3">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="flex items-start">
                        <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                          <FaCheck className="w-3 h-3 text-white" />
                        </div>
                        <p className="text-gray-700">{t(`codeOfConduct.expected.item${item}`)}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl border border-red-200/50">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <div className="w-6 h-6 bg-red-500 rounded-lg flex items-center justify-center mr-3 p-2">
                      <FaTimes className="w-3 h-3 text-white" />
                    </div>
                    {t('codeOfConduct.prohibited.title')}
                  </h3>
                  <div className="space-y-3">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="flex items-start">
                        <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                          <FaTimes className="w-3 h-3 text-white" />
                        </div>
                        <p className="text-gray-700">{t(`codeOfConduct.prohibited.item${item}`)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Changes to Terms */}
          <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="w-[48px] h-[48px] mr-4">
                <IconBox icon={FaRedo} bg="bg-gradient-to-r from-cyan-500 to-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 group-hover:text-cyan-700 transition-colors duration-300">
                {t('changes.title')}
              </h2>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-200/50">
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  {t('changes.content')}
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border border-yellow-200/50">
                <div className="flex items-center mb-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-lg flex items-center justify-center mr-3 p-2">
                    <FaBullhorn className="w-3 h-3 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {t('changes.notification.title')}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {t('changes.notification.content')}
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="w-[48px] h-[48px] mr-4">
                <IconBox icon={FaEnvelope} bg="bg-gradient-to-r from-violet-500 to-indigo-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 group-hover:text-violet-700 transition-colors duration-300">
                {t('contact.title')}
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-violet-50 to-indigo-50 p-8 rounded-xl border border-violet-200/50">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                {t('contact.intro')}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-7 h-7 bg-violet-100 rounded-md flex items-center justify-center mr-3 mt-1 p-2">
                    <FaEnvelope className="w-4 h-4 text-violet-600" />
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">{t('contact.emailLabel')}:</span>
                    <span className="text-gray-700 ml-2">{t('contact.email')}</span>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-7 h-7 bg-green-100 rounded-md flex items-center justify-center mr-3 mt-1 p-2">
                    <FaPhoneAlt className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">{t('contact.phoneLabel')}:</span>
                    <span className="text-gray-700 ml-2">{t('contact.phone')}</span>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-7 h-7 bg-gray-100 rounded-md flex items-center justify-center mr-3 mt-1 p-2">
                    <FaLocationDot className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">{t('contact.addressLabel')}:</span>
                    <p className="text-gray-700 ml-2">
                      {t('contact.address')}
                    </p>
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
