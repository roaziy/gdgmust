import {getTranslations} from 'next-intl/server';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: t('community')
  };
}

export default function CommunityPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Community</h1>
        <p className="text-lg text-center max-w-2xl">
            Welcome to the GDG on Campus MUST community! Here, we bring together students, developers, and tech enthusiasts to collaborate, learn, and innovate. Join us for events, workshops, and discussions that inspire and empower the next generation of tech leaders.
        </p>
        <p className="mt-4 text-md text-gray-600">
            Stay tuned for upcoming events and opportunities to get involved!
        </p>
    </div>
  );
}