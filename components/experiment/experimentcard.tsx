"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

// Import data eksperimen
import { experiments } from '@/data/experiments';
import { useTranslations, useLocale } from 'next-intl';

// utils
import { techColorMap } from '@/utils/techcolors';
import Link from 'next/link';

export default function ExperimentCard() {

  const t = useTranslations('experiment');
  const currentLocale = useLocale();

  // Filter eksperimen unggulan, batasi hingga 8 yang akan ditampilkan di grid utama
  const featuredExperiments = experiments.filter(exp => exp.isFeatured).slice(0, 6);
  // Cek apakah ada lebih banyak eksperimen daripada yang ditampilkan
  const hasMoreExperiments = experiments.length > featuredExperiments.length;


  return (
    <>
      < div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl" >
        {
          featuredExperiments.map((exp, index) => {

            const title = (currentLocale === 'id' ? exp.title.id : exp.title.en);
            const description = (currentLocale === 'id' ? exp.description.id : exp.description.en);

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl
                                           bg-white/20 text-gray-800 backdrop-blur-sm border border-white/10
                                           dark:bg-gray-800/20 dark:text-gray-200 dark:border-gray-700
                                           
                                           shadow-xl transform
                                           transition-all duration-300 ease-in-out
                                           hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30
                                           hover:border-blue-500/50 dark:hover:border-purple-500/50"
              >
                {/* Gambar Thumbnail */}
                {exp.image && (
                  <div className="relative w-full aspect-video overflow-hidden">
                    <img
                      src={exp.image}
                      alt={title}
                      width={800}
                      height={450}
                      className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                )}

                {/* Konten Kartu */}
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

                  {/* Link Aksi */}
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
                      <Link
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
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })
        }
      </div >

      {/* Tombol "Lihat Semua Eksperimen" jika ada lebih banyak */}
      {
        hasMoreExperiments && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <Link
              href="/experiments"
              className="inline-flex items-center gap-2 rounded-full
                                       bg-blue-600 text-white
                                       dark:bg-purple-600 dark:text-white
                                       px-6 py-3 text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out
                                       hover:bg-blue-700 hover:scale-105 dark:hover:bg-purple-700"
            >
              {t('viewAllExperiments')} <ArrowRight size={20} />
            </Link>
          </motion.div>
        )
      }
    </>
  )
}