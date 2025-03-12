'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  textColor?: 'light' | 'dark';
}

const SectionHeader = ({ 
  eyebrow, 
  title, 
  description,
  textColor = 'dark'
}: SectionHeaderProps) => {
  const isLight = textColor === 'light';
  
  return (
    <motion.div 
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="text-center mb-16"
    >
      <span className={`text-blue-600 font-semibold mb-4 block ${isLight ? 'text-blue-300' : 'text-blue-600'}`}>
        {eyebrow}
      </span>
      <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 ${isLight ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${isLight ? 'text-blue-100' : 'text-gray-600'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;