import {getTranslations} from 'next-intl/server';
import { Suspense } from 'react';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: t('contact')
  };
}

export default function ContactPage() {
  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <h1 className="text-4xl font-bold mb-4">About GDG on Campus MUST</h1>
        <p className="text-lg text-center max-w-2xl">
          GDG on Campus at Mongolian University of Science and Technology is a community of developers, designers, and tech enthusiasts who come together to learn, share, and grow in the field of technology. We organize events, workshops, and meetups to foster collaboration and innovation.
        </p>
      </div>
    </Suspense>
  );
}