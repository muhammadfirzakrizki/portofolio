// components/Footer.jsx
"use client";

import { motion, Variants } from "framer-motion";
import { easeOut } from "framer-motion";
import { Coffee, Heart } from 'lucide-react';
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  // Varian animasi untuk konten teks tetap dipertahankan
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }
  };

  return (
    <motion.footer
      className="w-full py-16 px-6 relative z-10
                 flex flex-col items-center justify-center
                 transition-colors duration-500
                 
                 // Latar Belakang Tegas & Efek Garis 3D
                 bg-white text-gray-900
                 shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.1)] // Shadow 3D untuk mode terang
                 
                 dark:bg-gray-950 dark:text-gray-300
                 dark:shadow-[0_-5px_20px_-5px_rgba(255,255,255,0.05)] // Shadow 3D untuk mode gelap
                "
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* Konten Footer Utama */}
      <div className="container mx-auto relative flex flex-col items-center max-w-5xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start
                        w-full gap-10 md:gap-16
                        text-center md:text-left
                        ">
          {/* Kolom Kiri: Pesan Intro */}
          <motion.div
            className="flex flex-col items-center md:items-start w-full md:w-1/2
                       "
            variants={itemVariants}
          >
            <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              {t('footerIntroLine1')}
            </p>
            <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
              {t('footerIntroLine2')}
            </p>
          </motion.div>

          {/* Kolom Kanan: Copyright & Build Info */}
          <motion.div
            className="flex flex-col items-center md:items-end w-full md:w-1/2
                       "
            variants={itemVariants}
          >
            {/* Copyright Info */}
            <p className="text-gray-600 dark:text-gray-400 opacity-90 font-medium whitespace-nowrap text-base lg:text-lg mb-2">
              {t.rich('footerCopyright', {
                year: currentYear,
                strong: (chunks) => <strong className="text-blue-600 dark:text-blue-400">{chunks}</strong>
              })}
            </p>
            
            {/* Build Info */}
            <p className="text-gray-500 dark:text-gray-400 opacity-80 flex items-center gap-1.5 whitespace-nowrap text-sm lg:text-base">
              {t.rich('footerCrafted', {
                heartIcon: (chunks) => <span className="inline-block animate-pulse text-red-500 dark:text-red-400 text-lg"><Heart size={20} fill="currentColor" />{chunks}</span>,
                coffeeIcon: (chunks) => <span className="inline-block text-lg"><Coffee size={20} fill="currentColor" className="text-amber-700 dark:text-amber-500" />{chunks}</span>
              })}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}