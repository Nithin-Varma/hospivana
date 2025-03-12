'use client';

import { motion } from 'framer-motion';
import { Star, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ConsultationDialog from '../common/ConsultationDialog';
import { stats } from '../data/services';
import { 
  heroImageAnimation, 
  heroContentAnimation, 
  heroTagAnimation,
  statsAnimation 
} from '../utils/animations';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
      <motion.div 
        initial="initial"
        animate="animate"
        variants={heroImageAnimation}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d')] bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 via-blue-900/60 to-blue-900/80" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={heroContentAnimation}
          className="text-center max-w-5xl mx-auto pt-32 md:pt-0"
        >
          <motion.div
            initial="initial"
            animate="animate"
            variants={heroTagAnimation}
            className="inline-block"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-400 bg-blue-900/50 text-blue-200 text-sm">
              <Star className="w-4 h-4 mr-2" /> Trusted by Leading Hospitals in Nizamabad
            </span>
          </motion.div>

          <motion.div className="mt-8">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your Hospital's
              <span className="text-blue-400"> Digital Presence</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
              Modernize your hospital's marketing with professional videos, engaging social media, 
              and stunning websites that build trust and attract more patients.
            </p>
          
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <ConsultationDialog className="w-full sm:w-auto" />
            
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto px-8 py-6 text-lg rounded-full text-black hover:bg-blue-600 hover:text-white transition"
              >
                Watch Success Stories <PlayCircle className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <motion.div
              initial="initial"
              animate="animate"
              variants={statsAnimation}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-blue-200 text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;