import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageLoader from '@/components/PageLoader';
import ScrollReveal from '@/components/ScrollReveal';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: {
    default: 'Almazora Motors Corporation | Vehicle Body Builder Philippines',
    template: '%s | Almazora Motors Corporation',
  },
  description: 'Almazora Motors Corporation — over 100 years of bus, Special Purpose Vehicle, and Utility Vehicle body building excellence in the Philippines. Trusted by Toyota, Isuzu, Mitsubishi, and more.',
  metadataBase: new URL('https://www.almazoramotors.com'),
  openGraph: {
    type: 'website',
    siteName: 'Almazora Motors Corporation',
    title: 'Almazora Motors Corporation | Vehicle Body Builder Philippines',
    description: 'Over 100 years of bus, Special Purpose Vehicle, and Utility Vehicle body building in the Philippines.',
    url: 'https://www.almazoramotors.com',
    images: [{ url: '/assets/LOGOS/amc-logo-desktop.png', width: 400, height: 100, alt: 'Almazora Motors Corporation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Almazora Motors Corporation | Vehicle Body Builder Philippines',
    description: 'Over 100 years of bus, Special Purpose Vehicle, and Utility Vehicle body building in the Philippines.',
    images: ['/assets/LOGOS/amc-logo-desktop.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageLoader />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
