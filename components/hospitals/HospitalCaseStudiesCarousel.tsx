'use client';

import { useKeenSlider } from 'keen-slider/react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const hospitalCaseStudies = [
  {
    title: "City General Hospital",
    specialty: "Multi-Specialty Hospital",
    stats: "400% increase in patient inquiries",
    description: "Complete digital transformation including website redesign, video marketing, and social media strategy",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d",
    results: ["400% more patient inquiries", "250% increase in online appointments", "95% patient satisfaction score"]
  },
  {
    title: "Sunrise Medical Center",
    specialty: "Urgent Care",
    stats: "300% boost in urgent care visits",
    description: "Local SEO optimization and targeted Google Ads campaign for urgent care services",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136",
    results: ["300% increase in urgent care visits", "150% more online bookings", "Top 3 Google ranking"]
  },
  {
    title: "Advanced Dental Care",
    specialty: "Dental Practice",
    stats: "250% increase in new patients",
    description: "Comprehensive dental marketing including video testimonials and social media campaigns",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95",
    results: ["250% more new patients", "180% increase in cosmetic procedures", "5-star average rating"]
  },
  {
    title: "Heart & Vascular Institute",
    specialty: "Cardiology",
    stats: "350% increase in consultations",
    description: "Specialized cardiology marketing with educational content and patient success stories",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56",
    results: ["350% more consultations", "200% increase in procedures", "Expanded service area"]
  },
  {
    title: "Wellness Rehabilitation Center",
    specialty: "Physical Therapy",
    stats: "280% increase in referrals",
    description: "Multi-channel marketing approach focusing on patient outcomes and recovery stories",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    results: ["280% more referrals", "190% increase in treatment plans", "Reduced patient acquisition cost"]
  }
];

export default function HospitalCaseStudiesCarousel() {
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
      <div ref={sliderRef} className="keen-slider min-h-[500px]">
        {hospitalCaseStudies.map((study, index) => (
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
                    {study.specialty}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2">{study.title}</h3>
                <p className="text-blue-600 font-semibold mb-4">{study.stats}</p>
                <p className="text-gray-600 mb-6">{study.description}</p>
                
                <div className="space-y-2 mb-6">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {result}
                    </div>
                  ))}
                </div>
                
                <Button variant="link" className="p-0 text-blue-600 hover:text-blue-700">
                  Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
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