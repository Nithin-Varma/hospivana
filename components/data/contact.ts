import { Phone, Mail, MessageSquare } from 'lucide-react';

export const contactOptions = [
  {
    icon: Phone,
    title: "WhatsApp",
    description: "Chat with us directly",
    action: "Open WhatsApp",
    href: "https://wa.me/+919876543210"
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us a message",
    action: "Send Email",
    href: "mailto:mnithin1422@gmail.com"
  },
  {
    icon: MessageSquare,
    title: "Book a Call",
    description: "Schedule a consultation",
    action: "Book Now",
    href: "https://calendly.com/mnithin1422/30min"
  }
];