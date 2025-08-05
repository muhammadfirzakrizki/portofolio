// components/Skills.tsx
"use client";

import { motion, Variants } from "framer-motion";
import { easeOut } from "framer-motion";
import { useTranslations } from "next-intl";
import AnimatedSectionHeader from '@/components/animated/animatedsectionheader';
import AnimatedParagraph from '@/components/animated/animatedparagraph';
import { skillsData } from "@/data/skill"; // Periksa kembali path ini jika ada masalah (seharusnya '@/data/skills')
import CircularProgress from "@/components/animated/circularprogress";

export default function Skills() {
  const t = useTranslations('skills');

  const baseTransition = { duration: 0.6, ease: easeOut };

  const contentVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0, transition: baseTransition },
  };

  const skillItemVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    whileInView: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: easeOut, delay: i * 0.07 },
    }),
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center py-20 px-6 mx-auto
                 duration-300 relative overflow-hidden"
    >
      {/* Konten Utama Skills */}
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center text-center md:text-left gap-12 z-10 relative max-w-6xl">
        {/* Kiri: Teks Konten */}
        <motion.div
          className="flex-1 max-w-2xl"
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.7 }}
          variants={contentVariants}
        >
          <AnimatedSectionHeader title={t('title')} />
          <AnimatedParagraph delay={0.1}>
            {t.rich('description1', {
              strong: (chunks) => <strong key={typeof chunks === 'string' ? chunks : Math.random()}>{chunks}</strong>,
            })}
          </AnimatedParagraph>
          <AnimatedParagraph delay={0.2}>
            {t.rich('description2', {
              strong: (chunks) => <strong key={typeof chunks === 'string' ? chunks : Math.random()}>{chunks}</strong>,
            })}
          </AnimatedParagraph>
          <AnimatedParagraph delay={0.3}>
            {t('expertisePrompt')}
          </AnimatedParagraph>
        </motion.div>

        {/* Kanan: Daftar Skill dengan Circular Progress */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md
                         // KUNCI PERUBAHAN: Efek Glassmorphism
                         bg-white/20 text-gray-800 backdrop-blur-sm border border-white/10
                         dark:bg-gray-800/20 dark:text-gray-200 dark:backdrop-blur-sm dark:border-gray-700
                         
                         hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              initial="hidden"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.7 }}
              custom={i}
              variants={skillItemVariants}
            >
              <CircularProgress
                size={80}
                strokeWidth={8}
                progress={skill.visualLevel}
                delay={0.2 + i * 0.07}
              >
                {/* Ikon di tengah lingkaran progress - warna teks menggunakan aksen biru */}
                <div className="absolute flex items-center justify-center text-blue-600 dark:text-purple-600">
                  {skill.icon}
                </div>
              </CircularProgress>
              {/* Nama skill - warna teks menggunakan warna teks default kartu */}
              <span className="mt-3 text-gray-900 dark:text-gray-100 font-semibold text-lg text-center">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}