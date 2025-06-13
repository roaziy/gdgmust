import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';


export default function Return() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <Link href="/about">{t('about')}</Link>
      <h1 className='font-bold'>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
    </div>
  );
}