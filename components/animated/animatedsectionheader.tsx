// components/AnimatedSectionHeader.tsx
"use client";

import { motion, Variants } from 'framer-motion';
import { easeOut } from 'framer-motion';

interface AnimatedSectionHeaderProps {
  title: string;
  className?: string;
}

const baseTransition = { duration: 0.8, ease: easeOut };

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: baseTransition },
};

// KUNCI: Varian di sini tidak lagi memiliki properti 'hover'
const underlineVariants: Variants = {
  hidden: { width: 0, opacity: 0 },
  whileInView: { 
    width: '30%', // Garis akan tetap pada panjang ini
    opacity: 1, 
    transition: { delay: 0.3, duration: 0.8, ease: easeOut }
  },
};

export default function AnimatedSectionHeader({ title, className }: AnimatedSectionHeaderProps) {
  return (
    <motion.h2
      className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-medium dark:text-purple-600 mb-6 drop-shadow-sm
                 relative inline-block pb-3 ${className || ''}`}
      initial="hidden"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.7 }}
      variants={headerVariants}
    >
      {title}
      {/* KUNCI: motion.span tidak lagi memiliki prop whileHover */}
      <motion.span
        className="absolute bottom-0 left-0 h-1.5
                   rounded-full
                   transition-all duration-300 ease-in-out
                   dark:bg-gradient-to-r dark:from-purple-600 dark:to-purple-accent
                   "
        style={{
          background: `linear-gradient(90deg, var(--blue-medium) 0%, var(--blue-accent) 100%)`
        }}
        initial="hidden"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.7 }}
        variants={underlineVariants}
      ></motion.span>
    </motion.h2>
  );
}