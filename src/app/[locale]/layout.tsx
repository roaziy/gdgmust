import type { Metadata } from "next";

// Global styles
import "@/styles/globals.css";

// i18n imports
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

// Local font imports - English
import localFont from 'next/font/local'
const googleSans = localFont({
  src: [
    {
      path: '../../../public/fonts/en/GoogleSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/en/GoogleSans-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/en/GoogleSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/en/GoogleSans-Bold-Italic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-google-sans'
});

// Font imports - Mongolian
import { Manrope } from 'next/font/google';
const manrope = Manrope({
  subsets: ['cyrillic'],
  weight: ['400', '500', '600', '700'],
  style: 'normal',
  variable: '--font-manrope'
});


// Components
// Console message for fun
import ConsoleMessage from '@/app/ConsoleMessage';

// Navigation Bar
import MainNavbar from "@/components/navbar/MainNavbar";

// Footer
import Footer from "@/components/footer/footer";

// Metadata
export const metadata: Metadata = {
  title: "GDG on Campus MUST",
  description: "This is a website for GDG on Campus at Mongolian University of Science and Technology",
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  return (
    <html lang={locale} className={`${googleSans.variable} ${manrope.variable}`}>
      <body className="flex flex-col min-h-screen">
        <NextIntlClientProvider>
          
          {/* Main navigation bar */}
          <nav className="fixed left-0 right-0 pointer-events-none">
            <MainNavbar />
          </nav>

          {/* console fun message */}
          <ConsoleMessage />

          {/* main content */}
          {children}
          
          {/* footer */}
          <footer className="mt-auto">
            <Footer />
          </footer>

        </NextIntlClientProvider>
      </body>
    </html>
  );
}