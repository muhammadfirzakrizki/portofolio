// components/experiment/allexperimentheader.tsx

"use client";

import { useTranslations } from "next-intl";
import { motion } from 'framer-motion';

export default function AllExperimentHeader() {
    const t = useTranslations('allexperiments');

    return (
        <header className="text-center mb-12 pt-12">
            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl font-bold text-blue-accent dark:text-purple-600"
            >
                {t('title')}
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-4 text-lg text-gray-600 dark:text-gray-400"
            >
                {t('description')}
            </motion.p>
        </header>
    )
}
