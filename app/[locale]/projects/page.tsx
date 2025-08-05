'use client';

import { motion, Variants } from 'framer-motion';

// components
import ProjectsHeader from '@/components/projects/projectsheader';
import ProjectsHero from '@/components/projects/projectshero';
import ProjectCard from '@/components/projects/projectcard';
import AnimatedBackground from '@/components/animated/animatedbackground';
import ScrollToTopButton from '@/components/scrolltotopbutton';

import Footer from '@/components/sections/footer';

// Mengimpor data proyek yang telah kita definisikan
import { projects } from '@/data/projects';

// Varian animasi untuk container
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function ProjectsPage() {
  return (
    <div className="text-gray-900 dark:text-gray-100 min-h-screen">
      <AnimatedBackground />
      <ScrollToTopButton />
      <ProjectsHeader />

      <motion.section
        className="container mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Menggunakan komponen hero section yang sudah dipisah */}
        <ProjectsHero />

        {/* Menggunakan komponen kartu proyek yang sudah dipisah */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.name.id} project={project} />
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
