import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';

// Components of HomePage
import MainFrameCard from './components/MainFrameCard/MainFrameCard';

export default function Return() {
  const t = useTranslations('HomePage');
  return (
    <div>      
      <section>
        <MainFrameCard />
      </section>
      <Link href="/about">{t('about')}</Link>
      <h1 className='font-bold'>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
    </div>
  );
}