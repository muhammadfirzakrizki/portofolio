// components/About.tsx
"use client";

import { useTranslations } from "next-intl";
import { motion, Variants } from 'framer-motion';
import { useState, useEffect } from "react";
import AnimatedSectionHeader from '@/components/animated/animatedsectionheader';
import AnimatedParagraph from '@/components/animated/animatedparagraph';
import AnimatedImage from '@/components/animated/animatedimage';

const floatingVariants: Variants = {
  initial: { y: 0 },
  float: {
    y: [0, -8, 0, 8, 0],
    transition: {
      duration: 3,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'loop',
    },
  },
  rotate: {
    rotate: [0, 360],
    transition: {
      duration: 10,
      ease: 'linear',
      repeat: Infinity,
    },
  },
};

export default function About() {
  const t = useTranslations('about');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Fungsi untuk memeriksa tema saat ini
    const updateThemeState = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    // Panggil saat komponen pertama kali mount
    updateThemeState();

    // Gunakan MutationObserver untuk mendeteksi perubahan kelas pada <html>
    const observer = new MutationObserver(updateThemeState);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    // Hapus observer saat komponen unmount
    return () => observer.disconnect();
  }, []);

  // Tentukan warna gradien berdasarkan state tema
  const lightGradientColor = "rgba(224, 232, 242, 0.4)"; // Warna dari Haikei 'wave' light
  const darkGradientColor = "rgba(27, 36, 52, 0.4)";    // Warna dari Haikei 'wave' dark

  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20 px-6 mx-auto
                 transition-colors duration-300 relative overflow-hidden"
    >      
      {/* Main Content Container */}
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center text-center md:text-left gap-12 z-10 relative max-w-6xl">
        {/* Kiri: Teks Konten */}
        <div className="flex-1 max-w-2xl order-2 md:order-1">
          <AnimatedSectionHeader
            title={t('title')}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-6 drop-shadow-sm"
          />
          <AnimatedParagraph delay={0.1}>
            {t.rich('paragraph1', {
              strong: (chunks) => <strong key={typeof chunks === 'string' ? chunks : Math.random()}>{chunks}</strong>,
            })}
          </AnimatedParagraph>
          <AnimatedParagraph delay={0.2}>
            {t.rich('paragraph2', {
              strong: (chunks) => <strong key={typeof chunks === 'string' ? chunks : Math.random()}>{chunks}</strong>,
            })}
          </AnimatedParagraph>
          <AnimatedParagraph delay={0.3}>
            {t.rich('paragraph3', {
              strong: (chunks) => <strong key={typeof chunks === 'string' ? chunks : Math.random()}>{chunks}</strong>,
            })}
          </AnimatedParagraph>
        </div>

        {/* Kanan: Gambar Profil dengan Ikon Bergerak */}
        <div className="flex-1 flex justify-center items-center order-1 md:order-2">
          <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px]">
            <AnimatedImage
              src="/about.png"
              alt="About Me Visual"
              className="object-contain"
            />

            {/* Animated Icons */}
            <motion.img
              src="/icon/react.svg"
              alt="React Icon"
              className="absolute w-[40px] h-[40px] md:w-[50px] md:h-[50px] top-[-10%] left-[-10%] drop-shadow-md"
              variants={floatingVariants}
              initial="initial"
              animate="rotate"
            />

            <motion.img
              src="/icon/javascript.svg"
              alt="Javascript Icon"
              className="absolute w-[45px] h-[45px] md:w-[55px] md:h-[55px] top-[5%] right-[-15%] drop-shadow-md"
              variants={floatingVariants}
              initial="initial"
              animate="float"
            />

            <motion.img
              src="/icon/nextjs.svg"
              alt="Next.js Icon"
              className="absolute w-[40px] h-[40px] md:w-[50px] md:h-[50px] bottom-[-15%] left-[-10%] drop-shadow-md"
              variants={floatingVariants}
              initial="initial"
              animate="rotate"
            />

            <motion.img
              src="/icon/typescript.svg"
              alt="TypeScript Icon"
              className="absolute w-[50px] h-[50px] md:w-[60px] md:h-[60px] bottom-[-5%] right-[-20%] drop-shadow-md"
              variants={floatingVariants}
              initial="initial"
              animate="float"
            />
          </div>
        </div>
      </div>
    </section>
  );
}