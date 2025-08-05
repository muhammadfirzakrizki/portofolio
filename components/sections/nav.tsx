// Nav.tsx
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Link } from "@/i18n/navigation";

// Import komponen-komponen pembantu
import ThemeToggle from "@/components/nav/themetoggle";
import LanguageSwitcher from "@/components/nav/languageswitcher";
import DesktopNav from "@/components/nav/desktopnav";
import MobileNav from "@/components/nav/mobilenav";
import useActiveSection from "@/hooks/useActiveSection";
import useScrollDirection from "@/hooks/useScrollDirection";
import { navData } from "@/data/nav";


export default function Nav() {
  const [open, setOpen] = useState(false);

  const activeSection = useActiveSection(navData.map(item => item.href));
  const { direction, isAtTop } = useScrollDirection();

  useEffect(() => {
    // Console log dihapus atau dikomentari untuk produksi
    // console.log("Scroll Direction:", direction, "Is at top:", isAtTop);
  }, [direction, isAtTop]);


  const handleLinkClick = (sectionId: string) => {
    // setOpen(false);
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      const navHeight = document.querySelector('nav')?.offsetHeight || 0;
      window.scrollTo({
        top: sectionElement.offsetTop - navHeight,
        behavior: "smooth",
      });
    }
  };

  const navClasses = `
    w-full bg-background dark:bg-blue-dark
    shadow-md pb-2 sticky top-0 z-50 border-b border-border
    transition-all duration-300 ease-in-out
    ${direction === 'down' && !isAtTop ? '-translate-y-full' : 'translate-y-0'}
  `;

  return (

    <nav className={navClasses}>
      {/* --- Bilah Pengumuman Kontras Adaptif --- */}
      <div className="hidden md:block w-full py-3 px-4 text-center
                        bg-sky-600 text-white
                        dark:bg-purple-600 dark:text-white
                        font-semibold text-sm md:text-base tracking-wide shadow-md">
        <p>
          Siap untuk Website Baru Anda?
        </p>
      </div>
      {/* --- Akhir Bilah Pengumuman Kontras Adaptif --- */}
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center justify-center p-2"
        >
          <Image
            src="/firzak.png"
            alt="Muhammad Firzak Rizki's Logo/Avatar"
            width={48}
            height={48}
            className="rounded-full object-cover border-2 border-blue-accent // KUNCI: Ubah di sini
                       hover:border-blue-light dark:hover:border-purple-600 // KUNCI: Ubah di sini
               transition-colors duration-300 transform hover:scale-105 mr-2"
            priority
          />
          <span
            className="text-2xl font-extrabold text-blue-accent // KUNCI: Ubah di sini
                       hover:text-blue-light dark:hover:text-purple-600 // KUNCI: Ubah di sini
               transition-colors duration-300 tracking-wide"
          >
            MFR
          </span>
        </Link>

        {/* Desktop Menu dan Tombol */}
        <div className="hidden md:flex items-center gap-6">
          <DesktopNav navItems={navData} activeSection={activeSection} onLinkClick={handleLinkClick} />
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button, Dark Mode, & Language Toggle (for Mobile) */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            className="p-2 rounded-full text-foreground 
                       hover:bg-muted dark:hover:bg-purple-600 
                       transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-accent 
                       dark:focus:ring-purple-600"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay/Drawer */}
      <MobileNav
        navItems={navData}
        activeSection={activeSection}
        isOpen={open}
        onLinkClick={handleLinkClick}
        onClose={() => setOpen(false)}
      />
    </nav>
  );
}