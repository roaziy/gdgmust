import {getTranslations} from 'next-intl/server';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: t('contact')
  };
}

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-center max-w-2xl">
            If you have any questions, suggestions, or just want to say hello, feel free to reach out to us! You can contact us via email at </p>
        <p className="text-lg text-center max-w-2xl font-mono"></p>
    </div>
  );
}