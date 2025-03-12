'use client';

import { motion } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { fadeInUp } from '../utils/animations';

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action: string;
  href: string;
}

const ContactCard = ({ icon: Icon, title, description, action, href }: ContactCardProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeInUp}
      className="block group"
    >
      <Card className="h-full p-8 text-center bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300">
        <div className="text-white mb-4">
          <Icon className="h-8 w-8 mx-auto" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-blue-100 mb-4">{description}</p>
        <span className="inline-flex items-center text-white font-medium">
          {action} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </Card>
    </motion.a>
  );
};

export default ContactCard;