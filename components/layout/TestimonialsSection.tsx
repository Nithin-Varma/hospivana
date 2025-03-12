'use client';

import SectionHeader from '@/components/common/SectionHeader';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-white py-24">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader
          eyebrow="Testimonials"
          title="What Hospital Leaders Say"
        />

        <TestimonialsCarousel />
      </div>
    </section>
  );
};

export default TestimonialsSection;