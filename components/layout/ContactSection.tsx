'use client';

import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import ContactCard from '../common/ContactCard';
import { contactOptions } from '../data/contact';
import { staggerContainer } from '../utils/animations';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-blue-900 py-24">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader
          eyebrow="Get Started Today"
          title="Ready to Grow Your Business?"
          description="Let's discuss how our marketing expertise can help you achieve your business goals"
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
      </div>
    </section>
  );
};

export default ContactSection;