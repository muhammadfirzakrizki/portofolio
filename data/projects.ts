// data/projects.ts

// Interface untuk struktur data proyek
export interface Project {
  isPlaceholder: boolean;
  name: {
    id: string;
    en: string;
  };
  desc: {
    id: string;
    en: string;
  };
  image?: string;
  githubLink?: string;
  demoLink?: string;
  tech: {
    name: string;
    color: number;
  }[];
}

// ======================================================================
// !! PENTING: Ini adalah data placeholder. Harap ganti dengan proyek nyata Anda
// saat Anda sudah memilikinya.
// ======================================================================
export const projects: Project[] = [
  {
    "isPlaceholder": true,
    "name": {
      "id": "LifeHub",
      "en": "LifeHub"
    },
    "desc": {
      "id": "Aplikasi manajemen hidup yang terintegrasi, dirancang untuk efisiensi personal dan kolaborasi tim, mencakup fitur pelacakan tugas, kalender, dan kolaborasi real-time.",
      "en": "An integrated life management application designed for personal efficiency and team collaboration, covering task tracking, calendars, and real-time collaboration features."
    },
    "image": "/images/projects/lifehub-preview.jpg",
    "tech": [
      { "name": "Next.js", "color": 2 },
      { "name": "Laravel", "color": 5 },
      { "name": "PostgreSQL", "color": 1 },
      { "name": "Tailwind CSS", "color": 2 },
      { "name": "TypeScript", "color": 1 }
    ],
    "githubLink": "#"
  },
  {
    "isPlaceholder": true,
    "name": {
      "id": "Inventaris Lab",
      "en": "Lab Inventory System"
    },
    "desc": {
      "id": "Sistem pencatatan inventaris laboratorium berbasis web yang komprehensif, mempermudah manajemen aset, pelacakan histori penggunaan, dan notifikasi stok.",
      "en": "A comprehensive web-based laboratory inventory recording system, simplifying asset management, usage history tracking, and stock notifications."
    },
    "image": "/images/projects/inventaris-lab-preview.jpg",
    "tech": [
      { "name": "React.js", "color": 2 },
      { "name": "Express.js", "color": 3 },
      { "name": "MongoDB", "color": 4 },
      { "name": "CSS Modules", "color": 1 }
    ],
    "githubLink": "#"
  },
  {
    "isPlaceholder": true,
    "name": {
      "id": "BizStarter",
      "en": "BizStarter"
    },
    "desc": {
      "id": "Platform digital komprehensif untuk UMKM dan startup, meliputi fitur pembuatan profil bisnis, portofolio, manajemen prospek, dan integrasi pembayaran.",
      "en": "A comprehensive digital platform for MSMEs and startups, featuring business profile creation, portfolio, lead management, and payment integration."
    },
    "image": "/images/projects/bizstarter-preview.jpg",
    "tech": [
      { "name": "Next.js", "color": 2 },
      { "name": "Docker", "color": 5 },
      { "name": "Stripe API", "color": 4 },
      { "name": "AWS S3", "color": 1 },
      { "name": "TypeScript", "color": 1 }
    ],
    "githubLink": "#"
  },
  {
    "isPlaceholder": true,
    "name": {
      "id": "EduPortal",
      "en": "EduPortal"
    },
    "desc": {
      "id": "Portal edukasi online interaktif yang menyediakan kelas virtual, forum diskusi, manajemen konten kursus, dan pelacakan kemajuan siswa.",
      "en": "An interactive online education portal providing virtual classes, discussion forums, course content management, and student progress tracking."
    },
    "image": "/images/projects/eduportal-preview.jpg",
    "tech": [
      { "name": "React.js", "color": 2 },
      { "name": "REST API", "color": 1 },
      { "name": "Material UI", "color": 2 },
      { "name": "Redux", "color": 4 }
    ],
    "githubLink": "#"
  },
  {
    "isPlaceholder": true,
    "name": {
      "id": "E-Commerce Storefront",
      "en": "E-Commerce Storefront"
    },
    "desc": {
      "id": "Platform e-commerce modern dengan fitur katalog produk, keranjang belanja, proses checkout yang mulus, dan dasbor admin.",
      "en": "A modern e-commerce platform with product catalog features, shopping cart, seamless checkout process, and an admin dashboard."
    },
    "image": "/images/projects/ecommerce-preview.jpg",
    "tech": [
      { "name": "Next.js", "color": 2 },
      { "name": "Stripe", "color": 4 },
      { "name": "Sanity.io", "color": 3 },
      { "name": "GraphQL", "color": 1 },
      { "name": "Tailwind CSS", "color": 2 }
    ],
    "githubLink": "#"
  },
];
