import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Le Ravito - Bar café sportif',
  description: 'Votre bar café sur le thème du sport, notamment le running. Découvrez notre carte, réservez une table ou commandez en Click & Collect.',
  keywords: 'bar, café, sport, running, restaurant, Click & Collect, réservation',
  authors: [{ name: 'Le Ravito' }],
  creator: 'Le Ravito',
  publisher: 'Le Ravito',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://charavito.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Le Ravito - Bar café sportif',
    description: 'Votre bar café sur le thème du sport, notamment le running.',
    url: 'https://charavito.vercel.app',
    siteName: 'Le Ravito',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Le Ravito - Bar café sportif',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Le Ravito - Bar café sportif',
    description: 'Votre bar café sur le thème du sport, notamment le running.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#f97316" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
} 
