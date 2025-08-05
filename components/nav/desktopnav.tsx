// components/nav/DesktopNav.tsx
"use client";

import { Link } from "@/i18n/navigation";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { useTranslations } from "next-intl";

interface DesktopNavProps {
  navItems: { name: string; href: string }[];
  activeSection: string;
  onLinkClick: (sectionId: string) => void;
}

export default function DesktopNav({ navItems, activeSection, onLinkClick }: DesktopNavProps) {
  const t = useTranslations('navigation');

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink asChild>
              <Link
                href={`#${item.href}`}
                className={`
                  text-blue-dark 
                  hover:text-blue-light
                  dark:text-white 
                  dark:hover:text-purple-600
                  text-lg transition-colors duration-200
                  px-3 py-2 rounded-md // Tetap pertahankan padding dan sudut membulat
                  ${activeSection === item.href
                    ? "font-bold text-blue-accent dark:text-purple-600 !text-blue-accent dark:!text-purple-600" // KUNCI: Tambahkan !text- untuk menimpa
                    : "font-xl"
                  }
                `}
                onClick={() => onLinkClick(item.href)}
              >
                {t(item.name)}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}