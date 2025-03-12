'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { fadeInUp } from '../utils/animations';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon: Icon, title, description, features }: ServiceCardProps) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="group"
    >
      <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-blue-500">
        <div className="mb-6">
          <Icon className="h-10 w-10 text-blue-600" />
        </div>
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-gray-700">
              <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;