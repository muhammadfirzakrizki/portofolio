'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import ThemeToggle from '@/components/nav/themetoggle';
import LanguageSwitcher from '@/components/nav/languageswitcher';
import AnimatedBackground from '@/components/animated/animatedbackground';

// Varian untuk container parent
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3, // Menambahkan jeda animasi antar elemen anak
        },
    },
};

// Varian untuk setiap elemen anak
const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Menggabungkan Link dari Next.js dengan motion dari Framer Motion
const MotionLink = motion(Link);

export default function NotFound() {

    // Hook untuk terjemahan
    const t = useTranslations('404');
    const locale = useLocale();

    // Menentukan kelas CSS secara langsung menggunakan TailwindCSS `dark:` modifier.
    const glassEffectClass = 'backdrop-blur-md bg-white/30 border border-gray-400/20 dark:bg-black/30 dark:border-white/20';

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen text-center p-4 transition-colors duration-500">
            <AnimatedBackground />
            
            {/* Header dengan tampilan kartu yang baru */}
            <header className={`absolute top-4 right-4 p-3 rounded-xl z-20 flex space-x-2 transition-colors duration-500 ${glassEffectClass}`}>
                <LanguageSwitcher />
                <ThemeToggle />
            </header>

            <motion.div
                className={`relative flex flex-col items-center rounded-xl p-8 lg:p-12 z-10 transition-colors duration-500 ${glassEffectClass}`}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.h1
                    className="text-8xl md:text-9xl font-extrabold mb-4 text-blue-accent dark:text-purple-600"
                    variants={itemVariants}
                >
                    404
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl mb-8 max-w-lg text-gray-700 dark:text-gray-300"
                    variants={itemVariants}
                >
                    {t('message')}
                </motion.p>

                <motion.div variants={itemVariants}>
                    <MotionLink
                        href={`/${locale}`}
                        className="inline-block px-8 py-3 text-lg font-semibold rounded-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {t('buttonText')}
                    </MotionLink>
                </motion.div>
            </motion.div>
        </div>
    );
}
