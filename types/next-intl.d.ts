// types/next-intl.d.ts
// Pastikan path relatif ke file JSON Anda sudah benar dari lokasi file ini.
// Umumnya, jika types/next-intl.d.ts di root, maka pathnya adalah '../messages/...'
// atau './messages/...' jika types ada di folder yang sama dengan messages (tidak direkomendasikan).

// Untuk setiap namespace/folder terjemahan yang Anda miliki, tambahkan import di sini.
type Messages =
  typeof import('./messages/Index/en.json') &
  typeof import('./messages/Navigation/en.json') &
  typeof import('./messages/ContactSection/en.json') &
  typeof import('./messages/FooterSection/en.json');
  // & typeof import('./messages/LocaleSwitcher/en.json'); // Tambahkan jika ada

// Deklarasikan interface global
declare interface IntlMessages extends Messages {}

// Tambahkan definisi untuk locales dan namespaces agar bisa diimpor di tempat lain
// Ini optional, tapi sangat membantu untuk type safety di i18n.ts dan layout.tsx
declare module '../../i18n' {
  const locales: readonly ['en', 'id'];
  type Locale = (typeof locales)[number];

  const namespaces: readonly [
    'Index',
    'Navigation',
    'ContactSection',
    'FooterSection',
    // 'LocaleSwitcher',
  ];
  type Namespace = (typeof namespaces)[number];
}

// Opsional: Untuk Next.js Link dengan locale
declare module 'next-intl/link' {
  import type { LinkProps as NextIntlLinkProps } from 'next-intl/dist/src/navigation';
  import type { ComponentProps } from 'react';

  // Sesuaikan tipe LinkProps jika diperlukan
  export interface LinkProps<Pathname extends string = string> extends Omit<ComponentProps<typeof Link>, 'href'> {
    href: Pathname | URL; // Allow URL objects for href
    locale?: Parameters<typeof createSharedPathnamesNavigation>[0]['locales'][number];
  }
}