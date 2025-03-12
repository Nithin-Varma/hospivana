'use client';

import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface ConsultationDialogProps {
  className?: string;
}

const ConsultationDialog = ({ className }: ConsultationDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          size="lg" 
          className={`bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 ${className}`}
        >
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
  );
};

export default ConsultationDialog;