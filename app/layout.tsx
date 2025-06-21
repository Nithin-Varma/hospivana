import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'MarketingLead - Digital Marketing Agency | Grow Your Business',
  description: 'Professional digital marketing services for businesses of all sizes. We offer social media management, website development, Google Ads, Meta Ads, YouTube marketing, and comprehensive marketing strategies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}