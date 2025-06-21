'use client';

import SectionHeader from '@/components/common/SectionHeader';
import HospitalCaseStudiesCarousel from './HospitalCaseStudiesCarousel';

const HospitalCaseStudiesSection = () => {
  return (
    <section id="case-studies" className="section-padding bg-gray-50 py-24">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader
          eyebrow="Healthcare Success Stories"
          title="Real Results for Real Healthcare Providers"
          description="See how we've helped hospitals and medical practices across the region transform their digital presence"
        />

        <HospitalCaseStudiesCarousel />
      </div>
    </section>
  );
};

export default HospitalCaseStudiesSection;