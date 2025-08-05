// components/nav/MobileNav.tsx
"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

interface MobileNavProps {
  navItems: { name: string; href: string }[];
  activeSection: string;
  isOpen: boolean;
  onLinkClick: (sectionId: string) => void;
  onClose: () => void; // Callback untuk menutup menu
}

export default function MobileNav({ navItems, activeSection, isOpen, onLinkClick, onClose }: MobileNavProps) {
  const t = useTranslations('navigation');

  // Ganti background style dengan kelas Tailwind agar konsisten
  // Default background dari Nav.tsx sudah bg-background dark:bg-blue-dark
  // Jadi overlay ini bisa tetap transparan atau disesuaikan
  if (!isOpen) return null; // Tidak render jika menu tidak terbuka

  return (
    <div
      className="md:hidden absolute top-full left-0 w-full
                 bg-background dark:bg-blue-dark // KUNCI: Gunakan kelas Tailwind untuk background
                 shadow-lg py-4 px-4 z-40 transition-all duration-300 ease-in-out" // Tambahkan transisi jika diperlukan
    >
      <div className="flex flex-col gap-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={`#${item.href}`}
            onClick={() => {
              onLinkClick(item.href);
              onClose(); // Tutup menu setelah link diklik
            }}
            className={`
              block text-foreground // KUNCI: Teks default (contoh: hitam di light, putih di dark)
              hover:text-blue-accent hover:bg-gray-100 // KUNCI: Hover di light mode (teks biru, bg abu terang)
              dark:text-white dark:hover:text-purple-600 dark:hover:bg-gray-700 // KUNCI: Hover di dark mode (teks putih/ungu, bg abu gelap)
              text-lg px-3 py-2 rounded-md
              transition-colors duration-200
              ${activeSection === item.href
                ? "font-bold text-blue-accent dark:text-purple-600" // KUNCI: Hanya ubah teks aktif, HAPUS background aktif
                : "font-medium"
              }
            `}
          >
            {t(item.name)}
          </Link>
        ))}
      </div>
    </div>
  );
}