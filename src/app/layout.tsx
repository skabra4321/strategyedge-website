import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'StrategyEdge Advisory | GCC Strategy & Transformation',
    template: '%s | StrategyEdge Advisory',
  },
  description:
    'StrategyEdge Advisory is a premier boutique strategy and transformation firm exclusively serving GCC governments, sovereign-linked organisations, and leading enterprises. Founded by ex-BCG principals.',
  keywords: [
    'GCC consulting',
    'strategy consulting GCC',
    'transformation advisory',
    'boutique consulting firm',
    'management consulting Saudi Arabia',
    'UAE strategy firm',
    'BCG consulting GCC',
    'expert secondment',
    'procurement transformation',
    'finance transformation GCC',
  ],
  authors: [{ name: 'StrategyEdge Advisory' }],
  creator: 'StrategyEdge Advisory',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://strategyedge.com',
    siteName: 'StrategyEdge Advisory',
    title: 'StrategyEdge Advisory | GCC Strategy & Transformation',
    description:
      'Premier boutique strategy and transformation advisory for GCC governments and leading enterprises. Founded by former BCG principals.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'StrategyEdge Advisory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StrategyEdge Advisory | GCC Strategy & Transformation',
    description: 'Premier boutique strategy and transformation advisory for the GCC.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#F0F4F8] text-[#0A1628] antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
