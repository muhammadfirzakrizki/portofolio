"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ChevronRight } from "lucide-react";
import * as React from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import { projects } from "@/data/projects";
import AnimatedSectionHeader from '@/components/animated/animatedsectionheader';
import AnimatedParagraph from '@/components/animated/animatedparagraph';
import { techColorMap } from "@/utils/techcolors";

export default function Projects() {
  const t = useTranslations("project");
  const currentLocale = useLocale();
  const badgeText = currentLocale === 'id' ? 'Contoh' : 'Example'; // Menyesuaikan teks badge

  return (
    <section
      id="project"
      className="relative px-6 py-20 transition-colors duration-300"
    >
      <div className="container mx-auto flex flex-col items-center gap-16 text-center z-10 relative max-w-6xl">
        <div className="w-full max-w-3xl">
          <AnimatedSectionHeader
            title={t("sectionTitle")}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-600 dark:text-purple-600 mb-6 drop-shadow-sm"
          />
          <AnimatedParagraph delay={0.1}>
            {t.rich('introParagraph', {
              strong: (chunks) => <strong key={typeof chunks === 'string' ? chunks : Math.random()}>{chunks}</strong>,
            })}
          </AnimatedParagraph>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="my-12"
          >
            <Link
              href={`/${currentLocale}/projects`}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-lg font-semibold
                         bg-blue-600 text-white shadow-lg transition-all duration-300
                         hover:bg-blue-700 hover:shadow-xl
                         dark:bg-purple-600 dark:hover:bg-purple-700"
            >
              {t("buttonAllProject")} <ChevronRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="relative w-full max-w-6xl mx-auto py-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-8 overflow-visible">
            {projects.map((project, i) => (
              <CarouselItem
                key={project.name.id}
                className="pl-8 basis-full md:basis-1/2 lg:basis-1/2 group z-10 hover:z-50"
              >
                <motion.div
                  className="relative flex h-full flex-col overflow-hidden rounded-2xl
                             bg-white/20 text-gray-800 backdrop-blur-sm border border-white/10
                             dark:bg-gray-800/20 dark:text-gray-200 dark:border-gray-700
                             
                             shadow-xl transform
                             transition-all duration-300 ease-in-out
                             group-hover:shadow-2xl group-hover:shadow-blue-500/30
                             group-hover:border-blue-500/50 dark:group-hover:border-blue-500/50
                             "
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
                >
                  {/* Badge proyek contoh yang diperbarui untuk kontras lebih baik */}
                  {project.isPlaceholder && (
                    <div className="absolute top-0 right-0 z-30 flex justify-end p-3">
                      <span className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold leading-none
                                       bg-gray-800 text-white shadow-xl
                                       dark:bg-white dark:text-gray-800">
                        {badgeText}
                      </span>
                    </div>
                  )}

                  {/* Project Image */}
                  {project.image && (
                    <div className="relative w-full aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={currentLocale === 'id' ? project.name.id : project.name.en}
                        width={800}
                        height={450}
                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  )}

                  <div className="flex flex-col flex-grow p-6 text-left">
                    {/* Title */}
                    <h3 className="mb-2 text-2xl font-bold text-blue-dark dark:text-white
                      group-hover:text-blue-accent group-hover:dark:text-purple-600 
                      transition-colors duration-300 drop-shadow-sm">
                      {currentLocale === 'id' ? project.name.id : project.name.en}
                    </h3>

                    {/* Tech Stack Tags */}
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tech.map((techItem, techIdx) => (
                        <span
                          key={techIdx}
                          className={`rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${techColorMap[techItem.color]}`}
                        >
                          {techItem.name}
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="mb-6 text-base leading-relaxed text-gray-700 dark:text-gray-300
                                  md:h-0 md:opacity-0 md:group-hover:h-auto md:group-hover:opacity-100 md:transition-all md:duration-300 md:ease-in-out md:overflow-hidden">
                      {currentLocale === 'id' ? project.desc.id : project.desc.en}
                    </p>

                    {/* Links */}
                    <div className="mt-auto flex justify-end gap-3">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg
                                       bg-blue-600 text-white
                                       dark:bg-blue-800 dark:text-blue-100
                                       px-5 py-2 text-sm font-semibold shadow-md transition-colors duration-200 ease-in-out
                                       hover:bg-blue-700 dark:hover:bg-blue-700"
                        >
                          <Github size={18} /> GitHub
                        </a>
                      )}
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg
                                     bg-gray-200 text-gray-800
                                     dark:bg-gray-700 dark:text-gray-200
                                     px-5 py-2 text-sm font-semibold shadow-md transition-colors duration-200 ease-in-out
                                     hover:bg-gray-300 dark:hover:bg-gray-600"
                        >
                          <ExternalLink size={18} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
