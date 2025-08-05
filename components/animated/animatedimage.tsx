// components/AnimatedImage.tsx
"use client";

import { motion, Variants } from 'framer-motion';\
import Image from 'next/image';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string; // Untuk meneruskan kelas Tailwind CSS
}

const imageVariants: Variants = {
  initial: { rotate: 0, scale: 1 },
  animate: {
    rotate: [0, 5, -5, 0], // Rotasi kecil
    scale: [1, 1.05, 1], // Animasi scale kecil
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

export default function AnimatedImage({ src, alt, className }: AnimatedImageProps) {
  return (
    <motion.div
      variants={imageVariants}
      initial="initial"
      animate="animate"
      className="flex justify-center p-4 md:p-0" // Kelas wrapper, bisa disesuaikan
    >
      <Image
        src={src}
        alt={alt}
        className={className} // Kelas dari prop
      />
    </motion.div>
  );
}