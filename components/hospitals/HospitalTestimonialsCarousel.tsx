'use client';

import { useKeenSlider } from 'keen-slider/react';
import { Card } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const hospitalTestimonials = [
  {
    quote: "MarketingLead transformed our hospital's online presence completely. We've seen a 400% increase in patient inquiries and our reputation has never been stronger.",
    author: "Dr. Sarah Mitchell",
    role: "Chief Medical Officer",
    hospital: "City General Hospital",
    specialty: "Multi-Specialty Hospital",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
  },
  {
    quote: "Their understanding of healthcare marketing compliance is exceptional. They helped us grow our urgent care visits by 300% while maintaining full HIPAA compliance.",
    author: "Dr. Michael Rodriguez",
    role: "Medical Director",
    hospital: "Sunrise Medical Center",
    specialty: "Urgent Care",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d"
  },
  {
    quote: "The video testimonials and social media strategy they created for our dental practice brought in 250% more new patients. Highly recommended!",
    author: "Dr. Emily Chen",
    role: "Practice Owner",
    hospital: "Advanced Dental Care",
    specialty: "Dental Practice",
    image: "https://images.unsplash.com/photo-1594824388853-d0c2b8e8e8e8"
  },
  {
    quote: "Professional, knowledgeable, and results-driven. They understand the unique challenges of cardiology marketing and delivered exceptional results.",
    author: "Dr. James Wilson",
    role: "Cardiologist",
    hospital: "Heart & Vascular Institute",
    specialty: "Cardiology",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54"
  },
  {
    quote: "Our rehabilitation center saw a 280% increase in referrals thanks to their targeted marketing campaigns. They truly understand healthcare marketing.",
    author: "Dr. Lisa Thompson",
    role: "Director of Rehabilitation",
    hospital: "Wellness Rehabilitation Center",
    specialty: "Physical Therapy",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
  }
];

export default function HospitalTestimonialsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 32 },
      },
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="relative px-4 md:px-8">
      <div ref={sliderRef} className="keen-slider min-h-[400px]">
        {hospitalTestimonials.map((testimonial, idx) => (
          <div key={idx} className="keen-slider__slide">
            <Card className="p-8 h-full hover:shadow-lg transition-all duration-300">
              <div className="flex gap-2 mb-6">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-start space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-blue-600 text-sm">{testimonial.hospital}</p>
                  <span className="inline-block mt-2 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                    {testimonial.specialty}
                  </span>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {loaded && instanceRef.current && (
        <div className="flex justify-center gap-4 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => instanceRef.current?.prev()}
            disabled={currentSlide === 0}
            className={cn(
              "rounded-full transition-opacity",
              currentSlide === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-50"
            )}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => instanceRef.current?.next()}
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
            className={cn(
              "rounded-full transition-opacity",
              currentSlide === instanceRef.current.track.details.slides.length - 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-50"
            )}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}