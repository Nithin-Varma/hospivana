'use client';

import { useKeenSlider } from 'keen-slider/react';
import { Card } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    quote: "The transformation in our online presence has been remarkable. We're seeing more patient inquiries than ever before.",
    author: "Dr. Rajesh Kumar",
    role: "Medical Director",
    hospital: "City Hospital"
  },
  {
    quote: "Their video marketing strategy helped us showcase our facilities and expertise in a way that really connects with patients.",
    author: "Dr. Priya Reddy",
    role: "CEO",
    hospital: "Medicare Center"
  },
  {
    quote: "Professional, responsive, and results-driven. They've helped us establish a strong digital presence in Nizamabad.",
    author: "Dr. Suresh Rao",
    role: "Chairman",
    hospital: "Global Hospitals"
  },
  {
    quote: "The ROI we've seen from their digital marketing efforts has been exceptional. Highly recommended!",
    author: "Dr. Anita Sharma",
    role: "Director",
    hospital: "Care Hospitals"
  }
];

export default function TestimonialsCarousel() {
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
      <div ref={sliderRef} className="keen-slider min-h-[300px]">
        {testimonials.map((testimonial, idx) => (
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
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.role}</p>
                <p className="text-blue-600">{testimonial.hospital}</p>
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