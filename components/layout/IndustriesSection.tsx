'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/common/SectionHeader';
import { industries } from '../data/services';
import { staggerContainer, fadeInUp } from '../utils/animations';

const IndustriesSection = () => {
  return (
    <section id="industries" className="section-padding bg-gray-50 py-24">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader
          eyebrow="Industries We Serve"
          title="Tailored Marketing for Every Business"
          description="We understand that every industry has unique challenges. Our specialized approach delivers results across all sectors."
        />

        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group"
            >
              <Card className="overflow-hidden h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48">
                  <img 
                    src={industry.image} 
                    alt={industry.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold mb-1">{industry.name}</h3>
                    <p className="text-sm text-gray-200">{industry.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <Button variant="link" className="p-0 text-blue-600 hover:text-blue-700">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;