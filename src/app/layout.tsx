import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://kodi-ya-kweli.vercel.app'),
  title: {
    default: 'Kodi Ya Kweli — Real Rent Prices & Tenant Toolkit for Nairobi',
    template: '%s | Kodi Ya Kweli',
  },
  description:
    'Estate-level rent benchmarks across Nairobi — real transacted prices vs. advertised rates. Plus free legal tools: deposit demand letters, inspection checklists, and rent calculators.',
  keywords: ['nairobi rent prices', 'kilimani rent', 'ruaka rent 2026', 'tenant rights kenya', 'deposit refund letter kenya', 'kodi ya kweli'],
  authors: [{ name: 'Ian Ochieng' }],
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    siteName: 'Kodi Ya Kweli',
    title: 'Kodi Ya Kweli — Real Rent Prices & Tenant Toolkit for Kenya',
    description: 'Real transacted rent rates vs advertised prices across Nairobi estates. Free deposit recovery demand letters & tenant tools.',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${inter.variable} ${outfit.variable}`}>
      <body className='font-sans bg-brand-cream text-brand-black antialiased flex flex-col min-h-screen'>
        <Navbar />
        <main className='flex-grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
