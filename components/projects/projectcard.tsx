'use client';

import { motion, Variants, AnimatePresence } from 'framer-motion';
import { Github, Rocket } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';

// Asumsi Anda memiliki file data proyek di lokasi ini
import { Project } from '@/data/projects';
import { techColorMap } from '@/utils/techcolors';

// Varian animasi untuk elemen
const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

export default function ProjectCard({ project, lang = 'id' }: { project: Project; lang?: 'id' | 'en' }) {
    // Menentukan teks placeholder berdasarkan properti 'lang'
    const currentLocale = useLocale();
    const placeholderText = currentLocale === 'en' ? 'Example' : 'Contoh';

    // Definisi JSX untuk tampilan placeholder (skeleton loader)
    const placeholderView = (
        <div
            className="group block overflow-hidden rounded-xl shadow-lg transition-all duration-300 transform backdrop-blur-xl bg-white/30 dark:bg-gray-800/30 border border-white/20 dark:border-gray-600/20 animate-pulse"
        >
            <div className="w-full h-56 md:h-64 bg-gray-300 dark:bg-gray-700 rounded-t-xl"></div>
            <div className="p-6 flex flex-col justify-between">
                <div>
                    <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6 mb-4"></div>
                    <div className="flex flex-wrap gap-2 mb-4">
                        <div className="h-6 w-16 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                        <div className="h-6 w-20 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                        <div className="h-6 w-12 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                    </div>
                </div>
                <div className="flex justify-end gap-2 mt-4">
                    <div className="h-10 w-24 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                    <div className="h-10 w-24 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                </div>
            </div>
        </div>
    );

    // Definisi JSX untuk tampilan kartu proyek
    const projectCardView = (
        <div
            className="group block overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-xl bg-white/30 dark:bg-gray-800/30 border border-white/20 dark:border-gray-600/20"
        >
            {/* Kontainer gambar proyek */}
            <div className="relative w-full h-56 md:h-64 overflow-hidden">
                <Image
                    src={project?.image || '/images/placeholder.jpg'}
                    alt={project?.name.id || ''}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={true}
                />
            </div>
            {/* Konten teks dan tombol */}
            <div className="p-6 flex flex-col justify-between">
                <div>
                    {/* Nama proyek dengan tautan ke halaman detail */}
                    <Link
                        href={`/projects/${project?.name.id.toLowerCase().replace(/ /g, '-')}`}
                        className="group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors"
                    >
                        <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                            {project?.name.id}
                        </h2>
                    </Link>
                    {/* Deskripsi proyek */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {project?.desc.id}
                    </p>
                    {/* Badge teknologi */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project?.tech.map((tech, index) => (
                            <span
                                key={index}
                                className={`px-3 py-1 rounded-full text-xs font-semibold ${techColorMap[tech.color]}`}
                            >
                                {tech.name}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Kontainer tombol */}
                <div className="flex justify-end gap-2 mt-4">
                    {/* Tampilkan tombol Demo hanya jika demoLink ada */}
                    {project?.demoLink && (
                        <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                        >
                            <Rocket size={18} />
                            Demo
                        </a>
                    )}
                    {/* Tampilkan tombol GitHub hanya jika githubLink ada */}
                    {project?.githubLink && (
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors duration-200"
                        >
                            <Github size={18} />
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </div>
    );

    // Definisi JSX untuk tampilan kartu proyek contoh/placeholder
    // Tampilan ini akan digunakan ketika project.isPlaceholder bernilai true
    const placeholderExampleView = (
        <div
            className="group relative block overflow-hidden rounded-xl shadow-inner border-2 border-dashed border-gray-400 dark:border-gray-500 bg-gray-100/50 dark:bg-gray-700/50 backdrop-blur-sm"
        >
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <span className="text-4xl font-extrabold text-gray-500 dark:text-gray-400 opacity-60 transform -rotate-12">
                    {placeholderText}
                </span>
            </div>
            <div className="relative w-full h-56 md:h-64 overflow-hidden grayscale">
                <Image
                    src={project?.image || '/images/placeholder.jpg'}
                    alt={project?.name.id || ''}
                    fill
                    className="object-cover opacity-50"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={true}
                />
            </div>
            <div className="p-6 flex flex-col justify-between opacity-50">
                <div>
                    <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                        {project?.name.id}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {project?.desc.id}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project?.tech.map((tech, index) => (
                            <span
                                key={index}
                                className={`px-3 py-1 rounded-full text-xs font-semibold ${techColorMap[tech.color]}`}
                            >
                                {tech.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    let contentToDisplay;

    // Logika utama untuk memilih tampilan yang benar
    if (!project) {
        // Jika tidak ada data proyek sama sekali, tampilkan skeleton loader
        contentToDisplay = placeholderView;
    } else if (project.isPlaceholder) {
        // Jika data proyek ada, tetapi properti isPlaceholder-nya true, tampilkan tampilan contoh
        contentToDisplay = placeholderExampleView;
    } else {
        // Jika ada data proyek dan isPlaceholder-nya false atau tidak ada, tampilkan tampilan kartu normal
        contentToDisplay = projectCardView;
    }

    return (
        <motion.div variants={itemVariants}>
            {contentToDisplay}
        </motion.div>
    );
}
