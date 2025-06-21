'use client';

import { useKeenSlider } from 'keen-slider/react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const caseStudies = [
  {
    title: "TechStart Solutions",
    industry: "Technology",
    stats: "400% increase in qualified leads",
    description: "Complete digital transformation including website redesign, Google Ads, and social media strategy",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    title: "Bella Vista Restaurant",
    industry: "Food & Beverage",
    stats: "250% boost in online orders",
    description: "Social media marketing campaign with food photography and targeted Meta ads",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
  },
  {
    title: "Sunrise Academy",
    industry: "Education",
    stats: "300% increase in enrollments",
    description: "Comprehensive marketing strategy including website development and digital advertising",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
  },
  {
    title: "Grand Palace Hotel",
    industry: "Hospitality",
    stats: "180% increase in bookings",
    description: "Multi-channel marketing approach with stunning visuals and targeted campaigns",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945"
  },
  {
    title: "HealthCare Plus",
    industry: "Healthcare",
    stats: "320% more patient inquiries",
    description: "Digital marketing strategy focused on trust-building and local SEO optimization",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"
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
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {study.industry}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2">{study.title}</h3>
                <p className="text-blue-600 font-semibold mb-4">{study.stats}</p>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <Button variant="link" className="p-0 text-blue-600 hover:text-blue-700">
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