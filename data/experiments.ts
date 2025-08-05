// data/experiments.ts

/**
 * Catatan: Semua data yang ada di sini adalah contoh untuk ilustrasi.
 * Gunakan ini sebagai referensi untuk struktur data Anda sendiri.
 */

export interface ExperimentItem {
  id: string;
  title: {
    en: string;
    id: string;
  };
  description: {
    en: string;
    id: string;
  };
  link?: string;
  github?: string;
  image: string;
  tags: { name: string; color: number }[];
  isFeatured: boolean;
  isExample: boolean; // Properti baru untuk menandai apakah ini contoh
}

export const experiments: ExperimentItem[] = [
  // --- Eksperimen Unggulan (Featured) ---
  {
    id: 'nextjs-ssr-demo',
    title: {
      en: 'Next.js SSR Demo',
      id: 'Demo SSR Next.js',
    },
    description: {
      en: 'Fetching and rendering data on the server side for faster initial load.',
      id: 'Mengambil dan merender data di sisi server untuk waktu pemuatan awal yang lebih cepat.',
    },
    link: '#',
    github: '#',
    image: '/images/experiments/exp-thumb-ssr.jpg',
    tags: [
      { name: 'Next.js', color: 1 },
      { name: 'SSR', color: 2 },
      { name: 'Data Fetching', color: 3 },
      { name: 'Performance', color: 4 }
    ],
    isFeatured: true,
    isExample: true,
  },
  {
    id: 'nextjs-ssg-blog',
    title: {
      en: 'Next.js SSG Blog',
      id: 'Blog SSG Next.js',
    },
    description: {
      en: 'Building static pages from markdown files at build time for performance.',
      id: 'Membangun halaman statis dari file markdown pada waktu build untuk performa.',
    },
    link: '#',
    github: '#',
    image: '/images/experiments/exp-thumb-ssg.jpg',
    tags: [
      { name: 'Next.js', color: 1 },
      { name: 'SSG', color: 2 },
      { name: 'Markdown', color: 3 },
      { name: 'CMS', color: 5 }
    ],
    isFeatured: true,
    isExample: true,
  },
  {
    id: 'api-routes-form',
    title: {
      en: 'API Routes Form Handler',
      id: 'Penangan Formulir Rute API',
    },
    description: {
      en: 'A simple contact form handled by a Next.js API Route.',
      id: 'Formulir kontak sederhana yang ditangani oleh Rute API Next.js.',
    },
    link: '#',
    github: '#',
    image: '/images/experiments/exp-thumb-api.jpg',
    tags: [
      { name: 'Next.js', color: 1 },
      { name: 'API Routes', color: 2 },
      { name: 'Forms', color: 3 },
      { name: 'Backend', color: 4 }
    ],
    isFeatured: true,
    isExample: true,
  },
  {
    id: 'dynamic-routes-profile',
    title: {
      en: 'Dynamic User Profile',
      id: 'Profil Pengguna Dinamis',
    },
    description: {
      en: 'Showcasing dynamic routing for user-specific pages ([slug]).',
      id: 'Menampilkan perutean dinamis untuk halaman khusus pengguna ([slug]).',
    },
    link: '#',
    github: '#',
    image: '/images/experiments/exp-thumb-dynamic.jpg',
    tags: [
      { name: 'Next.js', color: 1 },
      { name: 'Routing', color: 2 },
      { name: 'URL Parameters', color: 3 },
      { name: 'Dynamic Content', color: 4 }
    ],
    isFeatured: true,
    isExample: true,
  },
  {
    id: 'image-optimization-gallery',
    title: {
      en: 'Image Optimization Gallery',
      id: 'Galeri Optimasi Gambar',
    },
    description: {
      en: 'Demonstrating efficient image loading with next/image component for better UX.',
      id: 'Mendemonstrasikan pemuatan gambar yang efisien dengan komponen next/image untuk UX yang lebih baik.',
    },
    link: '#',
    github: '#',
    image: '/images/experiments/exp-thumb-image.jpg',
    tags: [
      { name: 'Next.js', color: 1 },
      { name: 'Images', color: 2 },
      { name: 'Performance', color: 4 },
      { name: 'Optimization', color: 5 }
    ],
    isFeatured: true,
    isExample: true,
  },
  {
    id: 'isr-product-update',
    title: {
      en: 'ISR Product Updates',
      id: 'Pembaruan Produk ISR',
    },
    description: {
      en: 'Automatically revalidating static pages without redeploying for fresh content.',
      id: 'Secara otomatis memvalidasi ulang halaman statis tanpa redeploy untuk konten segar.',
    },
    link: '#',
    github: '#',
    image: '/images/experiments/exp-thumb-isr.jpg',
    tags: [
      { name: 'Next.js', color: 1 },
      { name: 'ISR', color: 2 },
      { name: 'Caching', color: 3 },
      { name: 'Data Freshness', color: 4 }
    ],
    isFeatured: true,
    isExample: true,
  },
  {
    id: 'client-server-component-chat',
    title: {
      en: 'Client/Server Component Interaction',
      id: 'Interaksi Komponen Klien/Server',
    },
    description: {
      en: 'A basic chat interface illustrating how Client and Server Components collaborate.',
      id: 'Antarmuka chat dasar yang mengilustrasikan bagaimana Komponen Klien dan Server berkolaborasi.',
    },
    link: '#',
    github: '#',
    image: '/images/experiments/exp-thumb-cs.jpg',
    tags: [
      { name: 'Next.js', color: 1 },
      { name: 'Server Components', color: 2 },
      { name: 'Client Components', color: 3 },
      { name: 'Architecture', color: 4 }
    ],
    isFeatured: true,
    isExample: true,
  },
  {
    id: 'middleware-redirect-auth',
    title: {
      en: 'Middleware Redirect/Auth',
      id: 'Middleware Redirect/Auth',
    },
    description: {
      en: 'Implementing simple authentication logic using Next.js Middleware for route protection.',
      id: 'Menerapkan logika autentikasi sederhana menggunakan Next.js Middleware untuk perlindungan rute.',
    },
    link: '#',
    github: '#',
    image: '/images/experiments/exp-thumb-middleware.jpg',
    tags: [
      { name: 'Next.js', color: 1 },
      { name: 'Middleware', color: 2 },
      { name: 'Authentication', color: 3 },
      { name: 'Security', color: 4 }
    ],
    isFeatured: true,
    isExample: true,
  },

  // --- Eksperimen Tambahan (Tidak ditampilkan di grid utama, bisa di carousel/halaman terpisah) ---
  {
    id: 'tailwind-config-extended',
    title: {
      en: 'Tailwind Extended Config',
      id: 'Konfigurasi Extended Tailwind',
    },
    description: {
      en: 'Customizing Tailwind CSS with extended themes, plugins, and custom utilities.',
      id: 'Menyesuaikan Tailwind CSS dengan tema, plugin, dan utilitas kustom yang diperluas.',
    },
    link: '#',
    github: '#',
    image: '/images/experiments/exp-thumb-tailwind.jpg',
    tags: [
      { name: 'Tailwind CSS', color: 1 },
      { name: 'Styling', color: 2 },
      { name: 'Customization', color: 3 }
    ],
    isFeatured: false,
    isExample: true,
  },
  {
    id: 'framer-motion-advanced-animations',
    title: {
      en: 'Framer Motion Advanced',
      id: 'Animasi Tingkat Lanjut Framer Motion',
    },
    description: {
      en: 'Complex animations, gestures, and interactive UI elements with Framer Motion.',
      id: 'Animasi kompleks, gerakan, dan elemen UI interaktif dengan Framer Motion.',
    },
    link: '#',
    github: '#',
    image: '/images/experiments/exp-thumb-framer.jpg',
    tags: [
      { name: 'React', color: 1 },
      { name: 'Framer Motion', color: 2 },
      { name: 'Animations', color: 3 },
      { name: 'UI/UX', color: 4 }
    ],
    isFeatured: false,
    isExample: true,
  },
  {
    id: 'data-fetching-strategies',
    title: {
      en: 'Data Fetching Strategies Comparison',
      id: 'Perbandingan Strategi Pengambilan Data',
    },
    description: {
      en: 'Comparing SWR, React Query, and native fetch for data management in Next.js.',
      id: 'Membandingkan SWR, React Query, dan fetch native untuk manajemen data di Next.js.',
    },
    link: '#',
    github: '#',
    image: '/images/experiments/exp-thumb-data-strategies.jpg',
    tags: [
      { name: 'Next.js', color: 1 },
      { name: 'Data Fetching', color: 2 },
      { name: 'SWR', color: 3 },
      { name: 'React Query', color: 4 }
    ],
    isFeatured: false,
    isExample: true,
  },
  {
    id: 'authjs-integration',
    title: {
      en: 'Auth.js (NextAuth.js) Integration',
      id: 'Integrasi Auth.js (NextAuth.js)',
    },
    description: {
      en: 'Implementing secure authentication with social providers using Auth.js.',
      id: 'Menerapkan autentikasi aman dengan penyedia sosial menggunakan Auth.js.',
    },
    link: '#',
    github: '#',
    image: '/images/experiments/exp-thumb-authjs.jpg',
    tags: [
      { name: 'Next.js', color: 1 },
      { name: 'Auth.js', color: 2 },
      { name: 'Authentication', color: 3 },
      { name: 'Security', color: 4 }
    ],
    isFeatured: false,
    isExample: true,
  },
  {
    id: 'contentlayer-mdx',
    title: {
      en: 'Contentlayer & MDX Blog',
      id: 'Blog Contentlayer & MDX',
    },
    description: {
      en: 'Generating content from local MDX files with Contentlayer for fast blogs.',
      id: 'Menghasilkan konten dari file MDX lokal dengan Contentlayer untuk blog yang cepat.',
    },
    link: '#',
    github: '#',
    image: '/images/experiments/exp-thumb-contentlayer.jpg',
    tags: [
      { name: 'Next.js', color: 1 },
      { name: 'Contentlayer', color: 2 },
      { name: 'MDX', color: 3 },
      { name: 'Blog', color: 4 },
      { name: 'Local CMS', color: 5 }
    ],
    isFeatured: false,
    isExample: true,
  },
  {
    id: 'unit-integration-testing',
    title: {
      en: 'Unit & Integration Testing Setup',
      id: 'Pengaturan Unit & Integrasi Testing',
    },
    description: {
      en: 'Configuring Jest and React Testing Library for robust Next.js component testing.',
      id: 'Mengkonfigurasi Jest dan React Testing Library untuk pengujian komponen Next.js yang robust.',
    },
    link: '#',
    github: '#',
    image: '/images/experiments/exp-thumb-testing.jpg',
    tags: [
      { name: 'Next.js', color: 1 },
      { name: 'Testing', color: 2 },
      { name: 'Jest', color: 3 },
      { name: 'RTL', color: 4 }
    ],
    isFeatured: false,
    isExample: true,
  },
  {
    id: 'advanced-form-validation',
    title: {
      en: 'Advanced Form Validation',
      id: 'Validasi Formulir Tingkat Lanjut',
    },
    description: {
      en: 'Implementing complex form validation logic with Zod and React Hook Form.',
      id: 'Menerapkan logika validasi formulir kompleks dengan Zod dan React Hook Form.',
    },
    link: '#',
    github: '#',
    image: '/images/experiments/exp-thumb-forms.jpg',
    tags: [
      { name: 'Next.js', color: 1 },
      { name: 'Forms', color: 2 },
      { name: 'Validation', color: 3 },
      { name: 'React Hook Form', color: 4 },
      { name: 'Zod', color: 5 }
    ],
    isFeatured: false,
    isExample: true,
  },
  {
    id: 'web-vitals-optimization',
    title: {
      en: 'Core Web Vitals Optimization',
      id: 'Optimasi Core Web Vitals',
    },
    description: {
      en: 'Techniques to improve LCP, FID, and CLS scores in a Next.js application.',
      id: 'Teknik untuk meningkatkan skor LCP, FID, dan CLS dalam aplikasi Next.js.',
    },
    link: '#',
    github: '#',
    image: '/images/experiments/exp-thumb-webvitals.jpg',
    tags: [
      { name: 'Next.js', color: 1 },
      { name: 'Performance', color: 2 },
      { name: 'Web Vitals', color: 3 },
      { name: 'Optimization', color: 4 }
    ],
    isFeatured: false,
    isExample: true,
  },
  {
    id: 'opengraph-seo',
    title: {
      en: 'Dynamic OpenGraph & SEO',
      id: 'OpenGraph & SEO Dinamis',
    },
    description: {
      en: 'Generating dynamic OpenGraph images and meta tags for better social sharing.',
      id: 'Menghasilkan gambar OpenGraph dan meta tag dinamis untuk berbagi sosial yang lebih baik.',
    },
    link: '#',
    github: '#',
    image: '/images/experiments/exp-thumb-seo.jpg',
    tags: [
      { name: 'Next.js', color: 1 },
      { name: 'SEO', color: 2 },
      { name: 'OpenGraph', color: 3 },
      { name: 'Metadata', color: 4 }
    ],
    isFeatured: false,
    isExample: true,
  },
  {
    id: 'storybook-component-dev',
    title: {
      en: 'Storybook Component Dev',
      id: 'Pengembangan Komponen Storybook',
    },
    description: {
      en: 'Developing and documenting isolated UI components with Storybook.',
      id: 'Mengembangkan dan mendokumentasikan komponen UI terisolasi dengan Storybook.',
    },
    link: '#',
    github: '#',
    image: '/images/experiments/exp-thumb-storybook.jpg',
    tags: [
      { name: 'Next.js', color: 1 },
      { name: 'Storybook', color: 2 },
      { name: 'UI Development', color: 3 },
      { name: 'Component Library', color: 4 }
    ],
    isFeatured: false,
    isExample: true,
  },
  {
    id: 'state-management-comparison',
    title: {
      en: 'State Management Comparison',
      id: 'Perbandingan Manajemen State',
    },
    description: {
      en: 'A playground comparing Zustand, Jotai, and native Context API for global state.',
      id: 'Sebuah playground yang membandingkan Zustand, Jotai, dan Context API native untuk state global.',
    },
    link: '#',
    github: '#',
    image: '/images/experiments/exp-thumb-state.jpg',
    tags: [
      { name: 'React', color: 1 },
      { name: 'State Management', color: 2 },
      { name: 'Zustand', color: 3 },
      { name: 'Jotai', color: 4 },
      { name: 'Context API', color: 5 }
    ],
    isFeatured: false,
    isExample: true,
  },
  {
    id: 'websocket-realtime-update',
    title: {
      en: 'WebSocket Realtime Update',
      id: 'Pembaruan Realtime WebSocket',
    },
    description: {
      en: 'Building a simple realtime feed using WebSockets with Next.js API Routes.',
      id: 'Membangun feed realtime sederhana menggunakan WebSocket dengan Rute API Next.js.',
    },
    link: '#',
    github: '#',
    image: '/images/experiments/exp-thumb-websocket.jpg',
    tags: [
      { name: 'Next.js', color: 1 },
      { name: 'WebSockets', color: 2 },
      { name: 'Realtime', color: 3 },
      { name: 'API Routes', color: 4 }
    ],
    isFeatured: false,
    isExample: true,
  },
];
