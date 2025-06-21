'use client';

import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import ContactCard from '../common/ContactCard';
import { contactOptions } from '../data/contact';
import { staggerContainer } from '../utils/animations';

const HospitalContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-blue-900 py-24">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader
          eyebrow="Ready to Grow Your Practice?"
          title="Transform Your Healthcare Marketing Today"
          description="Get in touch with our healthcare marketing specialists and discover how we can help you attract more patients while maintaining full HIPAA compliance"
          textColor="light"
        />

        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {contactOptions.map((contact, index) => (
            <ContactCard 
              key={index}
              icon={contact.icon}
              title={contact.title}
              description={contact.description}
              action={contact.action}
              href={contact.href}
            />
          ))}
        </motion.div>

        {/* Healthcare-specific CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">
              Free Healthcare Marketing Audit
            </h3>
            <p className="text-blue-100 mb-6">
              Get a comprehensive analysis of your current digital presence and discover opportunities 
              to attract more patients while staying compliant with healthcare regulations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <span className="text-blue-200 text-sm">✓ HIPAA Compliant</span>
              <span className="text-blue-200 text-sm">✓ No Obligation</span>
              <span className="text-blue-200 text-sm">✓ Healthcare Specialists</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HospitalContactSection;