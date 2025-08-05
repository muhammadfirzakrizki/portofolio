// components/CircularProgress.tsx
"use client";

import React from "react";
import { motion, useInView, easeOut } from "framer-motion";

interface CircularProgressProps {
  size?: number; // Ukuran lingkaran (width/height)
  strokeWidth?: number; // Ketebalan garis
  progress: number; // Nilai progres (0-100)
  circleColor?: string; // Warna latar belakang lingkaran
  progressColor?: string; // Warna progres
  delay?: number; // Delay animasi
  children?: React.ReactNode; // <--- TAMBAHKAN INI UNTUK MENERIMA ANAK-ANAK KOMPONEN
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  size = 60,
  strokeWidth = 6,
  progress,
  circleColor = 'var(--color-muted)',
  progressColor = 'var(--color-blue-accent)',
  delay = 0,
  children, // <--- TERIMA CHILDREN DI SINI
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });

  const circleVariants = {
    hidden: { strokeDashoffset: circumference },
    visible: {
      strokeDashoffset: offset,
      transition: {
        duration: 1.5,
        delay: delay,
        ease: easeOut,
      },
    },
  };

  return (
    <div ref={ref} className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-90 transform"
      >
        {/* Lingkaran latar belakang */}
        <circle
          stroke={circleColor}
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        {/* Lingkaran progres */}
        <motion.circle
          stroke={progressColor}
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeLinecap="round"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={circleVariants}
          style={{
            strokeDasharray: circumference,
          }}
        />
      </svg>
      {/* Tampilkan children (misalnya ikon skill) di tengah lingkaran */}
      <div className="absolute flex items-center justify-center text-[--color-blue-accent]">
        {children} {/* <--- RENDER CHILDREN DI SINI */}
      </div>
    </div>
  );
};

export default CircularProgress;