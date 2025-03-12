"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { X } from "lucide-react";

interface BookOnlineCallProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookOnlineCall({ isOpen, onClose }: BookOnlineCallProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative"
      >
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-600 hover:text-gray-900">
          <X className="h-5 w-5" />
        </button>

        <h2 className="text-lg font-semibold text-center text-gray-800 mb-4">Choose One</h2>

        {/* Booking Buttons */}
        <div className="flex flex-col gap-4">
          <Button className="w-full bg-blue-600 text-white hover:bg-blue-800 transition-all">
            <Link href="https://calendly.com/mnithin1422/consulting" target="_blank" className="w-full flex justify-center">
              <span className="font-semibold">Book InPerson Appointment</span>
            </Link>
          </Button>

          <Button className="w-full bg-blue-600 text-white hover:bg-blue-800 transition-all">
            <Link href="https://calendly.com/mnithin1422/30min" target="_blank" className="w-full flex justify-center">
              <span className="font-semibold">Book Online Meeting</span>
            </Link>
          </Button>
        </div>
        <h4 className="text-sm font-semibold text-center text-blue-900 mt-4">Close after successfully booking</h4>
      </motion.div>
    </div>
  );
}
