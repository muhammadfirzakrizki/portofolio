import { notFound } from 'next/navigation';

// File ini berfungsi sebagai rute "catch-all" untuk semua URL yang tidak valid.
// Next.js akan membaca file ini saat tidak ada `page.tsx` yang cocok.
// Saat diakses, ia akan langsung memanggil `notFound()`
// yang akan merender `not-found.tsx` yang berada di direktori yang sama.
export default function CatchAllPage() {
  notFound();
}
