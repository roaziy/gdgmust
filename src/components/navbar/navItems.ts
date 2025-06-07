import { useTranslations } from 'next-intl';

export const useNavItems = () => {
  const t = useTranslations('Navigation');
  
  return [
    {
      label: t('home'),
      anchor: '/',
      subItems: []
    },
    {
      label: t('about'),
      anchor: '/about',
      subItems: []
    },
    {
      label: t('community'),
      anchor: '/community',
      subItems: []
    },
    {
      label: t('events'),
      anchor: '/events',
      subItems: []
    },
    {
      label: t('other'),
      anchor: '',
      subItems: [
        { label: t('contact'), anchor: '/contact' },
        { label: t('terms'), anchor: '/terms' }
      ]
    }
  ];
};