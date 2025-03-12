'use client';

import SectionHeader from '@/components/common/SectionHeader';
import CaseStudiesCarousel from '@/components/CaseStudiesCarousel';

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="section-padding bg-gray-50 py-24">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader
          eyebrow="Success Stories"
          title="Real Results for Real Hospitals"
          description="See how we've helped hospitals across Nizamabad transform their digital presence"
        />

        <CaseStudiesCarousel />
      </div>
    </section>
  );
};

export default CaseStudiesSection;