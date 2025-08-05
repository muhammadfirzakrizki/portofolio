// hooks/useActiveSection.ts
import { useState, useEffect, useRef } from "react";

/**
 * Custom hook to determine the currently active section based on scroll position.
 * @param sectionIds An array of string IDs corresponding to the sections in your DOM.
 * @returns The ID of the currently active section. Defaults to the first section ID if none are active.
 */
export default function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || "");
  const activeSectionRef = useRef(sectionIds[0] || "");

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = document.querySelector('nav')?.offsetHeight || 0;
      let currentSection = sectionIds[0] || ""; // Default ke section pertama

      // Loop dari bawah ke atas untuk akurasi terbaik saat scroll cepat
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionId = sectionIds[i];
        const sectionElement = document.getElementById(sectionId);

        if (sectionElement) {
          const viewportHeight = window.innerHeight;
          // Toleransi untuk memungkinkan transisi lebih mulus antar section
          // Misalnya, section dianggap aktif jika bagian atasnya sudah melewati
          // batas bawah navbar ditambah 20% dari tinggi viewport
          const tolerance = viewportHeight * 0.2;

          const sectionTop = sectionElement.offsetTop;
          const sectionBottom = sectionTop + sectionElement.offsetHeight;
          const viewportTop = window.scrollY + navHeight;

          // Kondisi: Bagian atas section sudah melewati batas atas viewport (disesuaikan navHeight dan tolerance)
          // DAN bagian bawah section belum melewati batas atas viewport (artinya section masih terlihat)
          if (sectionTop <= viewportTop + tolerance && sectionBottom > viewportTop) {
            currentSection = sectionId;
            break;
          }
        }
      }

      // Hanya update state jika activeSection berubah
      if (activeSectionRef.current !== currentSection) {
        setActiveSection(currentSection);
        activeSectionRef.current = currentSection;
      }
    };

    let scrollTimeout: NodeJS.Timeout | null = null;
    const debouncedHandleScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(handleScroll, 50); // Debounce untuk performa
    };

    // Panggil handleScroll setelah komponen dimuat dan layout stabil
    const initializeDetection = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            debouncedHandleScroll();
          });
        });
      });
    };

    initializeDetection(); // Inisialisasi pada mount

    window.addEventListener("scroll", debouncedHandleScroll);
    window.addEventListener("resize", debouncedHandleScroll);

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
      window.removeEventListener("resize", debouncedHandleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [sectionIds]); // Dependensi: jalankan ulang jika sectionIds berubah (jarang)

  return activeSection;
}