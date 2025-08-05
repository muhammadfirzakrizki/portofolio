"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  // Menggunakan `useState` dan `useEffect` untuk mengatasi masalah hidrasi
  // Karena `resolvedTheme` hanya tersedia di sisi klien
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  // useEffect dijalankan setelah mount, jadi aman untuk menggunakan `resolvedTheme`
  useEffect(() => setMounted(true), []);

  // Jika belum terpasang (di sisi server), kembalikan null untuk menghindari error hidrasi
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full text-foreground cursor-pointer
                 hover:bg-muted dark:hover:bg-muted
                 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-accent"
      aria-label="Toggle dark mode"
    >
      {/* Menggunakan `resolvedTheme` untuk menentukan ikon */}
      {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
