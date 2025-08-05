"use client";

import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';

// Definisi varian untuk animasi latar belakang
const backgroundVariants: Variants = {
  float: {
    y: ["-2%", "2%", "-2%"],
    x: ["-2%", "2%", "-2%"],
    transition: {
      duration: 15,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
      delay: Math.random() * 2,
    },
  },
  slowFloat: {
    y: ["-1%", "1%", "-1%"],
    x: ["-1%", "1%", "-1%"],
    transition: {
      duration: 25,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
      delay: Math.random() * 3,
    },
  },
  pulse: {
    scale: [1, 1.1, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
      delay: Math.random() * 1,
    },
  },
  orbit: {
    rotate: [0, 360],
    transition: {
      duration: 60,
      ease: "linear",
      repeat: Infinity,
    },
  },
  meteor: {
    x: ['-10%', '110%'],
    y: ['10%', '100%'],
    rotate: [0, 360],
    scale: [0.5, 1.5, 0.5],
    opacity: [0, 1, 0],
    transition: {
      duration: 5 + Math.random() * 2,
      ease: "easeIn",
      repeat: Infinity,
      repeatDelay: 10 + Math.random() * 5,
    },
  },
  glow: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
  wobble: {
    rotate: [-0.5, 0.5],
    transition: {
      duration: 8,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

// Mendefinisikan tipe prop yang ketat
interface AnimatedBackgroundProps {
  theme?: 'light' | 'dark';
}

export default function AnimatedBackground({ theme }: AnimatedBackgroundProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Jika prop `theme` diberikan, gunakan itu dan jangan panggil observer
    if (theme !== undefined) {
      setIsDark(theme === 'dark');
      return;
    }

    // Jika prop `theme` tidak diberikan, gunakan logika deteksi dari DOM
    const updateThemeState = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    updateThemeState();

    const observer = new MutationObserver(updateThemeState);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, [theme]); // Efek akan dijalankan ulang jika prop `theme` berubah

  const currentThemeIsDark = theme === 'dark' || (!theme && isDark);

  return (
    <>
      {/* Container Latar Belakang Mode Terang */}
      <div
        className="fixed inset-0 z-[-10] transition-opacity duration-500"
        style={{
          opacity: currentThemeIsDark ? 0 : 1,
          background: `radial-gradient(circle at top right, #f7d2b2 0%, #a3bded 50%, #e0e8f2 100%)`,
        }}
      >
        {/* Konten untuk mode terang */}
        <motion.div
          className="absolute rounded-full w-24 h-24 md:w-32 md:h-32 bg-yellow-300 opacity-80"
          style={{ top: "10%", left: "10%", boxShadow: "0 0 40px 10px #fcd34d" }}
          variants={backgroundVariants}
          animate={["float", "glow"]}
        />
        <motion.div
          className="absolute rounded-full w-40 h-16 bg-slate-200 opacity-60"
          style={{ top: "30%", left: "20%", zIndex: 1, boxShadow: "0 0 20px 5px #e2e8f0" }}
          variants={backgroundVariants}
          animate="pulse"
        />
        <motion.div
          className="absolute rounded-full w-52 h-20 bg-slate-200 opacity-60"
          style={{ bottom: "10%", right: "15%", zIndex: 2, boxShadow: "0 0 20px 5px #e2e8f0" }}
          variants={backgroundVariants}
          animate="slowFloat"
        />
        <motion.div
          className="absolute rounded-full w-32 h-12 bg-slate-200 opacity-40"
          style={{ top: "50%", right: "30%", zIndex: 0, boxShadow: "0 0 15px 3px #e2e8f0" }}
          variants={backgroundVariants}
          animate="float"
        />
        <motion.span
          className="absolute w-2 h-2 bg-yellow-400 rounded-full"
          style={{ top: "50%", left: "0%", boxShadow: "0 0 10px 2px #fcd34d" }}
          variants={backgroundVariants}
          animate="meteor"
        />
        <motion.span
          className="absolute w-2 h-2 bg-yellow-400 rounded-full"
          style={{ top: "20%", left: "0%", boxShadow: "0 0 10px 2px #fcd34d" }}
          variants={backgroundVariants}
          animate="meteor"
        />
      </div>

      {/* Container Latar Belakang Mode Gelap */}
      <div
        className="fixed inset-0 z-[-10] transition-opacity duration-500"
        style={{
          opacity: currentThemeIsDark ? 1 : 0,
          background: `radial-gradient(circle at center, #1a2a4b 0%, #0c152a 70%, #000000 100%)`,
        }}
      >
        {/* Konten untuk mode gelap */}
        <motion.div
          className="absolute rounded-full w-40 h-40 bg-purple-500"
          style={{ top: "10%", left: "5%", zIndex: 1, boxShadow: "0 0 60px 20px #a855f7" }}
          variants={backgroundVariants}
          animate={["float", "wobble"]}
        />
        <motion.div
          className="absolute rounded-full w-24 h-24 bg-blue-500"
          style={{ bottom: "20%", right: "10%", zIndex: 2, boxShadow: "0 0 40px 15px #3b82f6" }}
          variants={backgroundVariants}
          animate="orbit"
        />
        <motion.div
          className="absolute rounded-full w-12 h-12 bg-green-500 opacity-70"
          style={{ top: "50%", right: "25%", zIndex: 0, boxShadow: "0 0 30px 10px #22c55e" }}
          variants={backgroundVariants}
          animate="float"
        />
        <motion.span
          className="absolute w-2 h-2 bg-slate-100 rounded-full opacity-80"
          style={{ top: "30%", left: "25%", boxShadow: "0 0 10px 3px #f1f5f9" }}
          variants={backgroundVariants}
          animate="pulse"
        />
        <motion.span
          className="absolute w-1 h-1 bg-slate-100 rounded-full opacity-70"
          style={{ top: "15%", left: "60%", boxShadow: "0 0 8px 2px #f1f5f9" }}
          variants={backgroundVariants}
          animate="pulse"
        />
        <motion.span
          className="absolute w-3 h-3 bg-yellow-300 rounded-full opacity-90"
          style={{ bottom: "5%", left: "45%", boxShadow: "0 0 15px 4px #fcd34d" }}
          variants={backgroundVariants}
          animate="pulse"
        />
        <motion.span
          className="absolute w-1 h-1 bg-slate-100 rounded-full opacity-60"
          style={{ top: "60%", right: "10%", boxShadow: "0 0 8px 2px #f1f5f9" }}
          variants={backgroundVariants}
          animate="pulse"
        />
        <motion.span
          className="absolute w-1 h-1 bg-slate-100 rounded-full opacity-80"
          style={{ top: "10%", right: "0%", boxShadow: "0 0 15px 5px #f1f5f9" }}
          variants={backgroundVariants}
          animate="meteor"
        />
        <motion.span
          className="absolute w-1 h-1 bg-slate-100 rounded-full opacity-80"
          style={{ bottom: "40%", left: "0%", boxShadow: "0 0 15px 5px #f1f5f9" }}
          variants={backgroundVariants}
          animate="meteor"
        />
      </div>
    </>
  );
}
