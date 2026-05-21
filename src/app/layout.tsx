import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aayulogic | Digital Transformation Partner',
  description:
    'Engineering tier-1 digital transformation solutions across AI, cloud infrastructure, enterprise platforms, and cybersecurity.',
  keywords: [
    'digital transformation',
    'AI systems',
    'cloud infrastructure',
    'enterprise software',
    'DevOps',
  ],
  authors: [{ name: 'Aayulogic' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aayulogic.com',
    title: 'Aayulogic | Digital Transformation Partner',
    description:
      'Engineering tier-1 digital transformation solutions across AI, cloud infrastructure, enterprise platforms, and cybersecurity.',
    siteName: 'Aayulogic',
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
