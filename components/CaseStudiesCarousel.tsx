'use client';

import { useKeenSlider } from 'keen-slider/react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const caseStudies = [
  {
    title: "City Hospital Nizamabad",
    stats: "300% increase in patient inquiries",
    description: "Complete digital transformation including website redesign and video marketing campaign",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"
  },
  {
    title: "Medicare Center",
    stats: "5x social media engagement",
    description: "Comprehensive social media strategy and content creation",
    image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283"
  },
  {
    title: "Care Hospitals",
    stats: "200% increase in appointments",
    description: "Integrated digital marketing campaign with focus on video content",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907"
  }
];

export default function CaseStudiesCarousel() {
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
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="relative px-4 md:px-8">
      <div ref={sliderRef} className="keen-slider min-h-[400px]">
        {caseStudies.map((study, index) => (
          <div key={index} className="keen-slider__slide">
            <Card className="overflow-hidden h-full">
              <div className="relative h-48 md:h-64">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2">{study.title}</h3>
                <p className="text-blue-600 font-semibold mb-4">{study.stats}</p>
                <p className="text-gray-600">{study.description}</p>
                <Button variant="link" className="mt-4 p-0 text-blue-600 hover:text-blue-700">
                  Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
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