'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/common/SectionHeader';
import ServiceCard from '@/components/common/ServiceCard';
import { hospitalServices } from './data/hospitalServices';
import { staggerContainer } from '../utils/animations';

const HospitalServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-white py-24">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader
          eyebrow="Healthcare Marketing Services"
          title="Comprehensive Digital Marketing for Healthcare"
          description="HIPAA-compliant marketing solutions designed specifically for hospitals, clinics, and healthcare providers"
        />

        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {hospitalServices.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </motion.div>

        {/* Compliance Notice */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-blue-50 border border-blue-200 rounded-lg p-8 text-center"
        >
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            100% HIPAA Compliant Marketing
          </h3>
          <p className="text-blue-700 max-w-3xl mx-auto">
            All our healthcare marketing services are fully compliant with HIPAA regulations and medical advertising laws. 
            We understand the unique challenges of healthcare marketing and ensure patient privacy is always protected.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HospitalServicesSection;