import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/globals.css';
import { ClientShell } from '@/components/ClientShell';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://aayulogic.com'),
  title: {
    default: 'Aayulogic | Digital Transformation Partner',
    template: '%s | Aayulogic',
  },
  description:
    'Engineering tier-1 digital transformation solutions across AI, cloud infrastructure, enterprise platforms, and cybersecurity.',
  keywords: [
    'digital transformation',
    'AI systems',
    'cloud infrastructure',
    'enterprise software',
    'DevOps',
    'RealHRsoft',
    'Aayulogic',
  ],
  authors: [{ name: 'Aayulogic' }],
  applicationName: 'Aayulogic',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/logo.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: '/',
    types: {
      'application/xml': '/sitemap.xml',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aayulogic.com',
    title: 'Aayulogic | Digital Transformation Partner',
    description:
      'Engineering tier-1 digital transformation solutions across AI, cloud infrastructure, enterprise platforms, and cybersecurity.',
    siteName: 'Aayulogic',
    images: [
      {
        url: '/logo.png',
        width: 1623,
        height: 429,
        alt: 'Aayulogic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aayulogic | Digital Transformation Partner',
    description:
      'Engineering tier-1 digital transformation solutions across AI, cloud infrastructure, enterprise platforms, and cybersecurity.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-brand-navy`} suppressHydrationWarning>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
