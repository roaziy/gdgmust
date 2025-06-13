// Metadata generation for the Home page
import {getTranslations} from 'next-intl/server';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: t('home')
  };
}

// Importing the HomePage
import Return from '@/components/pages/homepage/Return';

export default function HomePage() {
  return(
    <Return />
  );
}