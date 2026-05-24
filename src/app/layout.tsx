import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/globals.css';

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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} text-brand-navy relative`} suppressHydrationWarning>
        {/* Full-page video background — 100% visible */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed inset-0 w-full h-full object-cover -z-10"
          style={{
            pointerEvents: 'none',
          }}
        >
          <source src="/herobackground.mp4" type="video/mp4" />
        </video>

        <div className="flex flex-col min-h-screen relative">
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
