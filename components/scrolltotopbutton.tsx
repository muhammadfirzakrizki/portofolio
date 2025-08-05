'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Efek untuk memantau posisi gulir halaman
  useEffect(() => {
    const toggleVisibility = () => {
      // Tombol akan terlihat jika gulir melebihi 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Bersihkan event listener saat komponen di-unmount
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Fungsi untuk menggulir halaman ke bagian atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-3 rounded-full bg-blue-500 text-white shadow-lg 
                       hover:bg-blue-600 transition-colors duration-300
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                       dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-600"
          >
            <ChevronUp size={24} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
