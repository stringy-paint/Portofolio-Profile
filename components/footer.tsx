import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaTerminal } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-800 bg-[#0d1117] pt-16 pb-8 font-sans text-gray-300">
      <div className="container mx-auto px-6 md:px-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Kolom 1: Brand & Tagline */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-extrabold tracking-tighter text-white flex items-center gap-2 w-fit">
              <FaTerminal className="size-6 text-green-500" />
              <span>Ryan.</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Meretas sistem untuk memahaminya, meracik kode untuk mengamankannya.
            </p>
          </div>

          {/* Kolom 2: Tautan Cepat */}
          <div>
            <h3 className="text-white font-bold mb-4">Navigasi Sistem</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="#about" className="hover:text-green-400 transition-colors">Tentang Saya</Link></li>
              <li><Link href="#portfolio" className="hover:text-green-400 transition-colors">Arsip Proyek</Link></li>
              <li><Link href="#experience" className="hover:text-green-400 transition-colors">Riwayat Pengalaman</Link></li>
              <li><Link href="#pencapaian" className="hover:text-green-400 transition-colors">Sertifikasi & Pencapaian</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Jaringan Sosial */}
          <div>
            <h3 className="text-white font-bold mb-4">Jaringan Eksternal</h3>
            <div className="flex gap-4">
              <a href="https://github.com/stringy-paint" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-green-500 hover:text-green-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all">
                <FaGithub className="size-5" />
              </a>
              <a href="https://www.linkedin.com/in/ryan-hidayatullah-b20408280/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-green-500 hover:text-green-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all">
                <FaLinkedin className="size-5" />
              </a>
              <a href="https://www.instagram.com/ryans.hd/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-green-500 hover:text-green-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all">
                <FaInstagram className="size-5" />
              </a>
              <a href="mailto:ryanhidayatullah0612@gmail.com" aria-label="Email" className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-emerald-500 hover:text-emerald-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all">
                <FaEnvelope className="size-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Hak Cipta & Info Teknologi */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>&copy; {currentYear} Ryan Hidayatullah. Seluruh hak cipta dilindungi.</p>
          <p className="mt-4 md:mt-0 flex items-center gap-1 font-mono text-xs">
            Dikompilasi menggunakan <span className="text-green-500">Next.js</span> & <span className="text-green-500">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}