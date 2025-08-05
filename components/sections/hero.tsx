// components/hero.tsx
"use client";

import { useTranslations } from "next-intl";
import AnimatedText from '@/components/animated/animatedtext';
import Image from "next/image";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const t = useTranslations('hero');

  // Array of background image paths
  const backgroundImages = [
    "/hero/hero1.jpg",
    "/hero/hero2.jpg",
    "/hero/hero3.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Change image every 7 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImages.length
      );
    }, 7000); // 7000ms = 7 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Hapus definisi warna neon karena tidak lagi digunakan

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center p-4 py-16 md:py-20 lg:py-24
                 relative overflow-hidden text-white" // Teks default section tetap putih untuk fallback
    >
      {/* Background Images with Enhanced Fade & Scale Transition */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 2.0, ease: "easeInOut" }}
          className="absolute inset-0 -z-10"
        >
          <Image
            src={backgroundImages[currentImageIndex]}
            alt={`Background image ${currentImageIndex + 1} for hero section`}
            fill
            className="object-cover object-center brightness-75 dark:brightness-50 transition-all duration-500"
            priority={currentImageIndex === 0}
            quality={80}
          />
        </motion.div>
      </AnimatePresence>


      {/* Overlay Gelap untuk Keterbacaan Teks */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/40 -z-5"></div>

      {/* Konten Teks & Tombol di Tengah */}
      <div className="container mx-auto relative z-10 flex flex-col items-center justify-center h-full text-center max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight
                       text-blue-accent dark:text-purple-600 // KUNCI: Warna teks langsung dari theme
                       drop-shadow-lg // Pertahankan drop-shadow standar untuk keterbacaan
                       ">
          <AnimatedText text={t('title')} />
        </h1>
        <p
          className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed opacity-90 drop-shadow-md"
        >
          {t.rich('description', {
            bold: (chunks) => <strong key={typeof chunks === 'string' ? chunks : Math.random()}>{chunks}</strong>,
          })}
        </p>
        <a
          href="#contact"
          className="inline-block relative overflow-hidden
                     bg-white text-gray-900
                     px-10 py-4 rounded-full font-bold text-lg
                     shadow-xl border-2 border-white
                     hover:bg-gray-200 hover:scale-105
                     hover:shadow-2xl hover:border-blue-400
                     dark:bg-gray-800 dark:text-white dark:border-gray-700
                     dark:hover:bg-gray-700 dark:hover:border-purple-400 dark:hover:shadow-2xl
                     transition-all duration-300 ease-out transform
                     focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2
                     dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
        >
          {t('button')}

          <span className="absolute inset-0 rounded-full
                           ring-0 ring-blue-500/50 dark:ring-purple-500/50
                           group-hover:ring-4 group-hover:ring-offset-2
                           group-hover:ring-offset-gray-100 dark:group-hover:ring-offset-gray-900
                           transition-all duration-500 ease-out animate-none group-hover:animate-pulse">
          </span>
        </a>
      </div>
    </section>
  );
}