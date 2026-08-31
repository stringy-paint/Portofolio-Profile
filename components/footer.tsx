"use client";
import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaTerminal } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const headerOffset = 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 50);
  };

  return (
    <footer className="border-t border-neutral-800 bg-[#0d1117] pt-12 sm:pt-16 pb-8 font-sans text-gray-300">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-8 sm:mb-12">
          
          {/* Kolom 1: Brand & Tagline */}
          <div className="space-y-3 sm:space-y-4">
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-xl sm:text-2xl font-extrabold tracking-tighter text-white flex items-center gap-2 w-fit hover:text-green-400 transition-colors cursor-pointer">
              <FaTerminal className="size-5 sm:size-6 text-green-500" />
              <span>Ryan.</span>
            </button>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs">
              terbuka Untuk peluang kolaborasi, proyek pengembangan web, dan diskusi seputar keamanan siber. 
            </p>
          </div>

          {/* Kolom 2: Tautan Cepat */}
          <div>
            <h3 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Navigasi Sistem</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li><button onClick={() => scrollTo("about")} className="hover:text-green-400 transition-colors cursor-pointer text-left">Tentang Saya</button></li>
              <li><button onClick={() => scrollTo("Projects")} className="hover:text-green-400 transition-colors cursor-pointer text-left">Arsip Proyek</button></li>
              <li><button onClick={() => scrollTo("experience")} className="hover:text-green-400 transition-colors cursor-pointer text-left">Riwayat Pengalaman</button></li>
              <li><button onClick={() => scrollTo("pencapaian")} className="hover:text-green-400 transition-colors cursor-pointer text-left">Sertifikasi & Pencapaian</button></li>
              <li><button onClick={() => scrollTo("kontak")} className="hover:text-green-400 transition-colors cursor-pointer text-left">Kontak</button></li>
            </ul>
          </div>

          {/* Kolom 3: Jaringan Sosial */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Jaringan Eksternal</h3>
            <div className="flex gap-3 sm:gap-4 flex-wrap">
              <a href="https://github.com/stringy-paint" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-green-500 hover:text-green-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all min-w-[40px] min-h-[40px] flex items-center justify-center">
                <FaGithub className="size-4 sm:size-5" />
              </a>
              <a href="https://www.linkedin.com/in/ryan-hidayatullah-b20408280/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-green-500 hover:text-green-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all min-w-[40px] min-h-[40px] flex items-center justify-center">
                <FaLinkedin className="size-4 sm:size-5" />
              </a>
              <a href="https://www.instagram.com/ryans.hd/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-green-500 hover:text-green-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all min-w-[40px] min-h-[40px] flex items-center justify-center">
                <FaInstagram className="size-4 sm:size-5" />
              </a>
              <a href="mailto:ryanhidayatullah0612@gmail.com" aria-label="Email" className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-emerald-500 hover:text-emerald-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all min-w-[40px] min-h-[40px] flex items-center justify-center">
                <FaEnvelope className="size-4 sm:size-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Hak Cipta & Info Teknologi */}
        <div className="border-t border-neutral-800 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-3 sm:gap-0 text-center sm:text-left">
          <p>&copy; {currentYear} Ryan Hidayatullah. Seluruh hak cipta dilindungi.</p>
          <p className="flex items-center gap-1 font-mono text-xs">
            Dikompilasi menggunakan <span className="text-green-500 font-semibold">Next.js</span> & <span className="text-green-500 font-semibold">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}