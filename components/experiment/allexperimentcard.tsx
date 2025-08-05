// components/experiment/allexperimentcard.tsx

"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import React from 'react';
import { useTranslations, useLocale } from 'next-intl';

// Import data eksperimen dari sumber data
import { experiments } from '@/data/experiments';
import { techColorMap } from '@/utils/techcolors';

/**
 * Komponen ini menampilkan semua eksperimen dalam tata letak grid yang responsif.
 *
 * Menggunakan:
 * - `framer-motion` untuk animasi saat kartu muncul dan di-hover.
 * - `next-intl` untuk terjemahan teks berdasarkan lokal saat ini.
 * - `lucide-react` untuk ikon.
 * - Tailwind CSS untuk styling, dengan tata letak grid yang beradaptasi.
 */
export default function AllExperimentCard() {
    // Mengambil fungsi terjemahan dan lokal saat ini
    const t = useTranslations('experiment');
    const currentLocale = useLocale();

    return (
        // Container utama yang membungkus seluruh komponen dengan lebar penuh
        <div className="container mx-auto max-w-full px-8 py-12">
            {/* Grid utama untuk kartu-kartu eksperimen. Tata letak akan berubah sesuai ukuran layar. */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
                {
                    // Melakukan perulangan pada semua data eksperimen
                    experiments.map((exp, index) => {
                        // Mengambil judul dan deskripsi berdasarkan lokal saat ini
                        const title = (currentLocale === 'id' ? exp.title.id : exp.title.en);
                        const description = (currentLocale === 'id' ? exp.description.id : exp.description.en);

                        // Kelas kondisional untuk kartu contoh
                        const cardClasses = exp.isExample
                            ? 'bg-gray-800/60 dark:bg-gray-900/60 border-2 border-dashed border-gray-400 dark:border-gray-600'
                            : 'bg-white/20 dark:bg-gray-800/20 border border-white/10';

                        // Kelas kondisional untuk image
                        const imageClasses = exp.isExample
                            ? 'opacity-50 grayscale'
                            : 'opacity-100';

                        return (
                            <motion.div
                                key={exp.id}
                                // Animasi yang disederhanakan untuk performa yang lebih baik
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5 }} // Menghapus delay untuk mencegah lag saat scrolling cepat
                                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl
                                           backdrop-blur-sm text-gray-800 dark:text-gray-200
                                           shadow-xl transform transition-all duration-300 ease-in-out
                                           hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30
                                           ${cardClasses}`}
                            >
                                {/* Tulisan "Contoh" di tengah jika eksperimen adalah contoh */}
                                {exp.isExample && (
                                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20
                                                    text-5xl font-extrabold uppercase tracking-widest
                                                    text-white/30 dark:text-gray-400/30
                                                    rotate-[-5deg]">
                                        {t('example')}
                                    </div>
                                )}

                                {/* Gambar Thumbnail Eksperimen */}
                                {exp.image && (
                                    <div className="relative w-full aspect-video overflow-hidden">
                                        <img
                                            src={exp.image}
                                            alt={title}
                                            width={800}
                                            height={450}
                                            className={`h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 ${imageClasses}`}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                )}

                                {/* Konten Kartu (Judul, Deskripsi, Tags, Tombol) */}
                                <div className="flex flex-col flex-grow p-6 text-left">
                                    <h3 className="mb-2 text-2xl font-bold text-blue-dark dark:text-white group-hover:text-blue-accent group-hover:drop-shadow-lg group-hover:dark:text-purple-600 transition-colors duration-300 ">
                                        {title}
                                    </h3>
                                    <p className="mb-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                                        {description}
                                    </p>

                                    {/* Tags Teknologi */}
                                    <div className="mb-6 flex flex-wrap gap-2">
                                        {exp.tags.map(tag => {
                                            const color = tag.color;
                                            return (
                                                <span
                                                    key={tag.name}
                                                    className={`rounded-full px-3 py-1 text-xs font-semibold ${techColorMap[color]} shadow-sm`}
                                                >
                                                    {tag.name}
                                                </span>
                                            );
                                        })}
                                    </div>

                                    {/* Link Aksi (GitHub dan Demo) */}
                                    <div className="flex justify-end gap-3 mt-auto pt-2">
                                        {exp.github && (
                                            <a
                                                href={exp.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 rounded-lg
                                                         bg-blue-600 text-white
                                                         dark:bg-blue-800 dark:text-blue-100
                                                         px-5 py-2 text-sm font-semibold shadow-md transition-colors duration-200 ease-in-out
                                                         hover:bg-blue-700 dark:hover:bg-blue-700"
                                            >
                                                <Github size={18} /> {t('github')}
                                            </a>
                                        )}
                                        {exp.link && (
                                            <a
                                                href={exp.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 rounded-lg
                                                       bg-gray-200 text-gray-800
                                                       dark:bg-gray-700 dark:text-gray-200
                                                       px-5 py-2 text-sm font-semibold shadow-md transition-colors duration-200 ease-in-out
                                                       hover:bg-gray-300 dark:hover:bg-gray-600"
                                            >
                                                <ExternalLink size={18} /> {t('demo')}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })
                }
            </div>
        </div>
    );
}
