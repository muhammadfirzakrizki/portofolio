// components/nav/languageswitcher.tsx
"use client";

import { useTransition } from "react";
import { Globe, Loader2 } from "lucide-react"; // Pastikan Loader2 diimpor
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // useTransition akan mengelola status pending untuk tombol ini
  const [isPending, startTransition] = useTransition();

  const toggleLocale = () => {
    // Membungkus navigasi dengan startTransition agar isPending aktif
    startTransition(() => {
      const newLocale = locale === 'en' ? 'id' : 'en';

      // Logika untuk membangun path baru dengan locale yang benar
      const currentPathSegments = pathname.split('/');
      // Diasumsikan path selalu dimulai dengan /locale/
      // Slice(2) akan mengambil bagian path setelah /locale/
      const pathWithoutOldLocale = currentPathSegments.slice(2).join('/');
      const newPath = `/${newLocale}${pathWithoutOldLocale ? '/' + pathWithoutOldLocale : ''}`;

      router.replace(newPath);
    });
  };

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-1 p-2 rounded-full text-foreground cursor-pointer
                 hover:bg-muted dark:hover:bg-muted
                 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-accent
                 disabled:opacity-50 disabled:cursor-not-allowed" // Styling untuk kondisi disabled
      aria-label="Toggle language"
      disabled={isPending} // Tombol dinonaktifkan saat transisi pending
    >
      {isPending ? (
        // Tampilkan ikon loading (spinner) saat isPending true
        <Loader2 size={20} className="animate-spin" />
      ) : (
        // Tampilkan ikon globe saat tidak pending
        <Globe size={20} />
      )}
      <span className="font-semibold text-sm">
        {isPending ? '...' : locale.toUpperCase()} {/* Tampilkan "..." atau kode bahasa */}
      </span>
    </button>
  );
}