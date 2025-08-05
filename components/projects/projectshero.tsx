'use client';

import { useTranslations } from 'next-intl';
import { motion, Variants } from 'framer-motion';

// Varian animasi untuk elemen
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

/**
 * Komponen hero section untuk halaman Proyek.
 * Menampilkan judul dan deskripsi halaman dengan animasi.
 */
export default function ProjectsHero() {
  const t = useTranslations("projectspage");

  return (
    <motion.div variants={itemVariants} className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-accent dark:text-purple-600 mb-4">
        {t('pageTitle')}
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        {t('pageDescription')}
      </p>
    </motion.div>
  );
}
