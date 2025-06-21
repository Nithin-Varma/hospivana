'use client';

import HeroSection from '@/components/layout/HeroSection';
import ServicesSection from '@/components/layout/ServicesSection';
import IndustriesSection from '@/components/layout/IndustriesSection';
import CaseStudiesSection from '@/components/layout/CaseStudiesSection';
import TestimonialsSection from '@/components/layout/TestimonialsSection';
import ContactSection from '@/components/layout/ContactSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}