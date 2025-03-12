'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/common/SectionHeader';
import ServiceCard from '@/components/common/ServiceCard';
import { services } from '../data/services';
import { staggerContainer } from '../utils/animations';

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-white py-24">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader
          eyebrow="Our Services"
          title="Comprehensive Digital Marketing Solutions"
          description="Everything your hospital needs to thrive in the digital age"
        />

        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;