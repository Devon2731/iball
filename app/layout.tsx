import { Providers } from 'app/provider';
import Navbar from 'components/layout/navbar';
import { GeistSans } from 'geist/font/sans';
import { ensureStartsWith } from 'lib/utils';
import Head from 'next/head';
import { ReactNode } from 'react';
import './globals.css';

const { INSTAGRAM_CREATOR, INSTAGRAM_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
const INSTAGRAMCreator = INSTAGRAM_CREATOR ? ensureStartsWith(INSTAGRAM_CREATOR, '@') : undefined;
const INSTAGRAMSite = INSTAGRAM_SITE ? ensureStartsWith(INSTAGRAM_SITE, 'https://') : undefined;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  ...(INSTAGRAMCreator &&
    INSTAGRAMSite && {
      INSTAGRAM: {
        card: 'summary_large_image',
        creator: INSTAGRAMCreator,
        site: INSTAGRAMSite
      }
    })
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
        <Navbar />
        <main>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
