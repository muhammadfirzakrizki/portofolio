// components/AnimatedText.tsx
"use client";

import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  delay?: number; // Opsional: untuk menyesuaikan delay animasi
}

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: [0, -10, 0], // Animasi naik turun
    transition: {
      delay: i * 0.05, // Delay per karakter
      duration: 0.8,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
      repeatDelay: 2, // Jeda sebelum mengulang
    },
  }),
};

export default function AnimatedText({ text }: AnimatedTextProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={textVariants}
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          custom={i}
          className="inline-block" // Penting agar setiap karakter adalah elemen terpisah untuk animasi
        >
          {char === " " ? "\u00A0" : char} {/* Menangani spasi agar tetap sebagai entitas terpisah */}
        </motion.span>
      ))}
    </>
  );
}