'use client';

import { ArrowRight, Camera, Globe2, Mail, MessageSquare, Phone, PlayCircle, Users2, Star, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import CaseStudiesCarousel from '@/components/CaseStudiesCarousel';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 via-blue-900/60 to-blue-900/80" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-5xl mx-auto pt-32 md:pt-0"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
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
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105">
                      Book Free Consultation <ArrowUpRight className="ml-2 h-5 w-5" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Schedule Your Free Consultation</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <p className="text-gray-600">Please fill out the form below and we'll get back to you within 24 hours.</p>
                      {/* Add your form components here */}
                    </div>
                  </DialogContent>
                </Dialog>
              
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto px-8 py-6 text-lg rounded-full text-black hover:bg-blue-600 hover:text-white transition"
                >
                  Watch Success Stories <PlayCircle className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
              >
                {[
                  { label: "Patients Reached", value: "50K+" },
                  { label: "Video Views", value: "1M+" },
                  { label: "Success Rate", value: "95%" },
                  { label: "ROI Average", value: "300%" }
                ].map((stat, index) => (
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

      {/* Services Section */}
      <section id="services" className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-semibold mb-4 block">Our Services</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Digital Marketing Solutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Everything your hospital needs to thrive in the digital age
            </p>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Camera className="h-10 w-10 text-blue-600" />,
                title: "Professional Video Production",
                description: "High-quality videos showcasing your facilities, staff, and patient testimonials",
                features: ["Promotional Videos", "Virtual Tours", "Doctor Interviews", "Patient Stories"]
              },
              {
                icon: <Globe2 className="h-10 w-10 text-blue-600" />,
                title: "Website Development",
                description: "Modern, responsive websites that build trust and convert visitors into patients",
                features: ["Custom Design", "Mobile Optimization", "SEO Integration", "Booking System"]
              },
              {
                icon: <Users2 className="h-10 w-10 text-blue-600" />,
                title: "Social Media Management",
                description: "Strategic content creation and management across all social platforms",
                features: ["Content Strategy", "Community Management", "Paid Advertising", "Analytics"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group"
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-blue-500">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-semibold mb-4 block">Success Stories</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real Results for Real Hospitals
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              See how we've helped hospitals across Nizamabad transform their digital presence
            </p>
          </motion.div>

          <CaseStudiesCarousel />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-semibold mb-4 block">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Hospital Leaders Say
            </h2>
          </motion.div>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-blue-900">
        <div className="container mx-auto container-padding">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Hospital's Marketing?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
              Get in touch with us today and let's discuss how we can help your hospital grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <Phone className="h-8 w-8" />,
                title: "WhatsApp",
                description: "Chat with us directly",
                action: "Open WhatsApp",
                href: "https://wa.me/+919876543210"
              },
              {
                icon: <Mail className="h-8 w-8" />,
                title: "Email",
                description: "Send us a message",
                action: "Send Email",
                href: "mailto:contact@healthdigital.com"
              },
              {
                icon: <MessageSquare className="h-8 w-8" />,
                title: "Book a Call",
                description: "Schedule a consultation",
                action: "Book Now",
                href: "#"
              }
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                className="block group"
              >
                <Card className="h-full p-8 text-center bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-white mb-4">{contact.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{contact.title}</h3>
                  <p className="text-blue-100 mb-4">{contact.description}</p>
                  <span className="inline-flex items-center text-white font-medium">
                    {contact.action} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Card>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-16">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">HealthDigital</h3>
              <p className="text-blue-200">
                Transforming healthcare marketing in Nizamabad through innovative digital solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">Video Production</a></li>
                <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">Website Development</a></li>
                <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">Social Media</a></li>
                <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">Content Creation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#case-studies" className="text-blue-200 hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#testimonials" className="text-blue-200 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="text-blue-200 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-900 mt-12 pt-8 text-center text-blue-200">
            <p>&copy; 2024 HealthDigital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}