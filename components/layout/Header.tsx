'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import BookOnlineCall from '@/components/BookOnlineCall';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Blog', href: '/blog' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const industryPages = [
    { label: 'Healthcare', href: '/hospitals' },
    { label: 'Education', href: '/schools' },
    { label: 'Restaurants', href: '/restaurants' },
    { label: 'Hotels', href: '/hotels' },
  ];

  return (
    <>
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Link
              href="/"
              className={`flex items-center gap-2 ${
                scrolled ? 'text-blue-600' : 'text-white'
              }`}
            >
              <Image
                src="/favicon.ico"
                alt="MarketingLead Logo"
                width={32}
                height={32}
                className="w-8 h-8 md:w-8 md:h-8"
              />
              <span className="text-xl md:text-2xl font-bold hidden md:block">
                MarketingLead
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`font-medium hover:text-blue-500 transition-colors ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.label}
              </motion.a>
            ))}
            
            {/* Industries Dropdown */}
            <div className="relative group">
              <span className={`font-medium cursor-pointer hover:text-blue-500 transition-colors ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}>
                Industries
              </span>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {industryPages.map((page) => (
                  <Link
                    key={page.label}
                    href={page.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {page.label}
                  </Link>
                ))}
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Button
                onClick={() => setIsModalOpen(true)}
                className={
                  scrolled
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-white text-blue-600 hover:bg-blue-600 hover:text-white"
                }
              >
                Book Consultation
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`h-5 w-5 md:h-6 md:w-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-5 w-5 md:h-6 md:w-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white shadow-lg rounded-b-lg overflow-hidden absolute left-0 right-0 top-full"
            >
              {menuItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
              
              {/* Mobile Industries */}
              <div className="border-t border-gray-200">
                <div className="px-4 py-2 text-sm font-medium text-gray-500">Industries</div>
                {industryPages.map((page) => (
                  <Link
                    key={page.label}
                    href={page.href}
                    className="block py-2 px-6 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {page.label}
                  </Link>
                ))}
              </div>
              
              <div className="p-4 border-t border-gray-200">
                <Button 
                  className="w-full bg-blue-600 text-white" 
                  onClick={() => {
                    setIsModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                >
                  Book Consultation
                </Button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
    <BookOnlineCall isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}