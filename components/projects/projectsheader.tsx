'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// Mengimpor komponen toggle yang sudah Anda sediakan
import LanguageSwitcher from '@/components/nav/languageswitcher';
import ThemeToggle from '@/components/nav/themetoggle';

/**
 * Komponen header untuk halaman proyek.
 * Ini mencakup navigasi kembali ke beranda, tombol pengubah bahasa,
 * dan tombol pengubah tema (light/dark mode).
 */
export default function ProjectsHeader() {
  const t = useTranslations("projectspage");
  const locale = useLocale();

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm shadow-md py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 font-semibold hover:text-blue-600 dark:hover:text-purple-400 transition-colors"
        >
          <ArrowLeft size={20} />
          {t('backToHome')}
        </Link>
        <div className="flex items-center gap-4">
          {/* Menggunakan komponen toggle yang sudah dipisah */}
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
