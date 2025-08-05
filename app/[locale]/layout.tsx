import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';

// Mengimpor ThemeProvider yang sudah kita buat
import { ThemeProvider } from 'next-themes'; 
import { routing } from '@/i18n/routing'; 

import './../globals.css';

const inter = Inter({ subsets: ['latin'] });

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Memastikan `locale` yang masuk valid dengan menunggu `params`
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    // Menambahkan suppressHydrationWarning untuk mengatasi error hidrasi dari next-themes
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        {/* ThemeProvider harus membungkus semua komponen agar tema dapat diakses */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* NextIntlClientProvider membungkus anak-anaknya yang membutuhkan terjemahan */}
          <NextIntlClientProvider>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
