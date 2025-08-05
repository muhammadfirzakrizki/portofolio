// components/AnimatedParagraph.tsx
"use client";

import { motion, Variants } from 'framer-motion';
import { easeOut } from 'framer-motion';
import { ReactNode } from 'react'; // Untuk konten yang bisa berupa JSX

interface AnimatedParagraphProps {
  children: ReactNode; // Konten paragraf
  delay?: number; // Delay animasi opsional
}

const baseTransition = { duration: 0.6, ease: easeOut };

const paragraphVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 }, // Transisi akan ditambahkan secara eksternal
};

export default function AnimatedParagraph({ children, delay = 0 }: AnimatedParagraphProps) {
  return (
    <motion.p
      className="text-lg text-[--color-foreground] leading-relaxed mb-4"
      initial="hidden"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.7 }}
      variants={paragraphVariants}
      transition={{ ...baseTransition, delay: delay }} // Terapkan delay di sini
    >
      {children}
    </motion.p>
  );
}