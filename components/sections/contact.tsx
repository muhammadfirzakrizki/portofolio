"use client";

import { motion } from "framer-motion";
import { Mail, Github, Facebook, Instagram } from "lucide-react";
import { easeOut } from "framer-motion";
import { useTranslations } from "next-intl";

import AnimatedSectionHeader from '@/components/animated/animatedsectionheader';
import AnimatedParagraph from '@/components/animated/animatedparagraph';

// --- Data untuk Opsi Kontak (Diperbarui) ---
const contactOptions = [
  {
    name: "Email",
    icon: <Mail size={28} />,
    href: "mailto:firzakrizki@gmail.com",
    bgColor: "blue",
    description: "Kirim pesan kepada saya",
  },
  {
    name: "GitHub",
    icon: <Github size={28} />,
    href: "https://github.com/muhammadfirzakrizki/",
    target: "_blank",
    rel: "noopener noreferrer",
    bgColor: "gray",
    description: "Lihat kode proyek saya",
  },
  {
    name: "Facebook",
    icon: <Facebook size={28} />,
    href: "https://www.facebook.com/firzak.ramadhan",
    target: "_blank",
    rel: "noopener noreferrer",
    bgColor: "blue",
    description: "Hubungi saya di Facebook",
  },
  {
    name: "Instagram",
    icon: <Instagram size={28} />,
    href: "https://www.instagram.com/muhammadfirzakrizki/",
    target: "_blank",
    rel: "noopener noreferrer",
    bgColor: "pink",
    description: "Ikuti pembaruan saya",
  },
];

// --- Objek konfigurasi warna untuk Tailwind CSS (lebih ringkas) ---
const colorMap: { [key: string]: { [key: string]: string } } = {
  blue: {
    bg: 'bg-white/30 dark:bg-blue-950/30',
    text: 'text-blue-700 dark:text-blue-200',
    border: 'border-gray-200 dark:border-blue-800',
    from: 'from-blue-300 dark:from-blue-600',
    to: 'to-blue-500 dark:to-blue-400',
    hoverBgFrom: 'from-blue-100 dark:from-blue-900',
    hoverBgTo: 'to-blue-50 dark:to-blue-950/50',
    hoverBorder: 'border-blue-500 dark:border-blue-400',
    hoverRing: 'ring-blue-400 dark:ring-blue-600',
  },
  gray: {
    bg: 'bg-white/30 dark:bg-gray-950/30',
    text: 'text-gray-700 dark:text-gray-200',
    border: 'border-gray-200 dark:border-gray-800',
    from: 'from-gray-300 dark:from-gray-600',
    to: 'to-gray-500 dark:to-gray-400',
    hoverBgFrom: 'from-gray-100 dark:from-gray-900',
    hoverBgTo: 'to-gray-50 dark:to-gray-950/50',
    hoverBorder: 'border-gray-500 dark:border-gray-400',
    hoverRing: 'ring-gray-400 dark:ring-gray-600',
  },
  pink: {
    bg: 'bg-white/30 dark:bg-pink-950/30',
    text: 'text-pink-700 dark:text-pink-200',
    border: 'border-gray-200 dark:border-pink-800',
    from: 'from-pink-300 dark:from-pink-600',
    to: 'to-pink-500 dark:to-pink-400',
    hoverBgFrom: 'from-pink-100 dark:from-pink-900',
    hoverBgTo: 'to-pink-50 dark:to-pink-950/50',
    hoverBorder: 'border-pink-500 dark:border-pink-400',
    hoverRing: 'ring-pink-400 dark:ring-pink-600',
  },
};

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section
      id="contact"
      className="py-20 px-6
                 transition-colors duration-300 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 opacity-10 dark:opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%236B7280' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M9 10L6 7l3-3 3 3-3 3zm1.5-3L9 8.5 7.5 7 9 5.5 10.5 7z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto flex flex-col justify-center items-center text-center gap-12 relative z-10 max-w-6xl">
        <motion.div
          className="w-full max-w-3xl
                     flex flex-col items-center text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <AnimatedSectionHeader
            title={t('sectionTitle')}
            className="text-4xl md:text-4xl lg:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-6 tracking-wide drop-shadow-sm"
          />
          <AnimatedParagraph delay={0.1}>
            {t.rich('introParagraph1', {
              strong: (chunks) => <strong key={typeof chunks === 'string' ? chunks : Math.random()}>{chunks}</strong>,
            })}
          </AnimatedParagraph>
          <AnimatedParagraph delay={0.2}>
            {t.rich('introParagraph2', {
              strong: (chunks) => <strong key={typeof chunks === 'string' ? chunks : Math.random()}>{chunks}</strong>,
            })}
          </AnimatedParagraph>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-5xl md:px-4">
          {contactOptions.map((option, index) => (
            <motion.a
              key={option.name}
              href={option.href}
              target={option.target}
              rel={option.rel}
              className={`
                relative flex flex-col items-center justify-center
                p-8 rounded-2xl overflow-hidden
                shadow-md hover:shadow-xl
                transform hover:-translate-y-2
                transition-all duration-300 ease-in-out
                group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900
                ${colorMap[option.bgColor].bg}
                border-2 ${colorMap[option.bgColor].border} 
                hover:bg-gradient-to-br ${colorMap[option.bgColor].hoverBgFrom} ${colorMap[option.bgColor].hoverBgTo}
                hover:${colorMap[option.bgColor].hoverBorder}
                hover:ring-4 ${colorMap[option.bgColor].hoverRing} 
                hover:ring-offset-2 hover:ring-offset-gray-100 dark:hover:ring-offset-gray-900
              `}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Latar Belakang Ikon dengan Gradient */}
              <div className={`
                relative flex items-center justify-center w-20 h-20 rounded-full mb-4
                bg-gradient-to-br ${colorMap[option.bgColor].from} ${colorMap[option.bgColor].to}
                ${colorMap[option.bgColor].text}
                shadow-md 
                transition-all duration-300 ease-in-out
                group-hover:text-gray-900 dark:group-hover:text-gray-100
              `}>
                <div className="z-10">{option.icon}</div>
                <div className="absolute inset-0 rounded-full opacity-20"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M9 10L6 7l3-3 3 3-3 3zm1.5-3L9 8.5 7.5 7 9 5.5 10.5 7z'/%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '20px 20px',
                  }}
                />
              </div>
              <div className="flex flex-col items-center">
                <span className={`text-xl font-bold relative z-10 ${colorMap[option.bgColor].text}`}>
                  {option.name}
                </span>
                <span className="text-sm mt-1 text-gray-500 dark:text-gray-400">
                  {option.description}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
