'use client';

import HospitalHeroSection from '@/components/hospitals/HospitalHeroSection';
import HospitalServicesSection from '@/components/hospitals/HospitalServicesSection';
import HospitalCaseStudiesSection from '@/components/hospitals/HospitalCaseStudiesSection';
import HospitalTestimonialsSection from '@/components/hospitals/HospitalTestimonialsSection';
import HospitalContactSection from '@/components/hospitals/HospitalContactSection';
import Footer from '@/components/layout/Footer';

export default function HospitalsPage() {
  return (
    <main className="min-h-screen">
      <HospitalHeroSection />
      <HospitalServicesSection />
      <HospitalCaseStudiesSection />
      <HospitalTestimonialsSection />
      <HospitalContactSection />
      <Footer />
    </main>
  );
}