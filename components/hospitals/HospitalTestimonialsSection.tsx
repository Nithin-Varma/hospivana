'use client';

import SectionHeader from '@/components/common/SectionHeader';
import HospitalTestimonialsCarousel from './HospitalTestimonialsCarousel';

const HospitalTestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-white py-24">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader
          eyebrow="What Healthcare Leaders Say"
          title="Trusted by Medical Professionals"
          description="Hear from doctors, administrators, and healthcare leaders who have transformed their practices with our marketing expertise"
        />

        <HospitalTestimonialsCarousel />
      </div>
    </section>
  );
};

export default HospitalTestimonialsSection;