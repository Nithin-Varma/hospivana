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
          eyebrow="Contact Us"
          title="Ready to Transform Your Hospital's Marketing?"
          description="Get in touch with us today and let's discuss how we can help your hospital grow"
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