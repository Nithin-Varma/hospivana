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
  title: 'marketinglead.in - Digital Marketing Agency In Nizamabad Telangana | Best Source To Grow Your Business',
  description: 'Professional digital marketing services for businesses of all sizes. We offer social media management, website development, Google Ads, Meta Ads, YouTube marketing, and comprehensive marketing strategies.',
  openGraph: {
    title: "Best Digital Marketing Agency in Nizamabad | marketinglead.in",
    url: 'https://marketinglead.in',
    siteName: 'marketinglead.in',
    description: "Say bye to traditional marketing and hello to digital success with marketinglead.in. We specialize in social media management, website development, Google Ads, Meta Ads, YouTube marketing, and more.",
    type: 'website',
  },
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