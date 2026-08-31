import React from "react";
import { Briefcase, Code, GraduationCap, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="container mx-auto px-4 sm:px-8 md:px-16 pt-16 sm:pt-24 md:pt-40 pb-16 md:pb-24 font-sans text-gray-300 scroll-mt-20 sm:scroll-mt-24">
      
      {/* Menggunakan max-w-7xl agar posisinya sejajar sempurna dengan halaman About dan Portfolio */}
      <div className="max-w-7xl w-full mx-auto">
        
        {/* Header */}
        <div className="mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2 sm:mb-4 text-left">
            Riwayat Pengalaman
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg text-left">
            Perjalanan karier dan riwayat akademis.
          </p>
        </div>

        {/* Timeline Wrapper (Garis Vertikal) */}
        <div className="relative border-l-2 border-neutral-800 ml-4 sm:ml-6 md:ml-8 space-y-8 sm:space-y-12 pb-6 sm:pb-8">
          
          {/* Timeline Item 1: MBKM Vinix */}
          <div className="relative ml-6 sm:ml-8 md:ml-12 group">
            {/* Titik Cahaya Nuansa Hijau (Emerald) */}
            <div className="absolute -left-[2.5rem] sm:-left-[3.25rem] md:-left-[4.25rem] top-1 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#0d1117] border border-green-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] group-hover:scale-110 transition-transform">
              <Briefcase className="size-4 sm:size-5 text-green-500" />
            </div>
            
            {/* Kartu Konten */}
            <div className="bg-[#0d1117] border border-neutral-800 rounded-xl p-4 sm:p-6 md:p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:border-green-500/30 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4 gap-2">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Junior Penetration Tester</h3>
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-green-400 font-mono bg-green-500/10 px-2.5 py-1 sm:px-3 rounded-full w-fit">
                  <Calendar className="size-3.5 sm:size-4" />
                  <span>Januari 2026 - Juni 2026</span>
                </div>
              </div>
              <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-300 mb-3 sm:mb-4">MBKM Vinix Batch 7 - Divisi Cybersecurity</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm md:text-base text-gray-400 list-disc list-inside">
                <li>Melakukan vulnerability assessment dan penetration testing pada sistem target.</li>
                <li>Mendokumentasikan log aktivitas keamanan dan menyusun laporan kerentanan.</li>
                <li>Mengoperasikan Linux/CLI dan tools keamanan jaringan secara komprehensif.</li>
              </ul>
            </div>
          </div>

          {/* Timeline Item 2: UIN Portal */}
          <div className="relative ml-6 sm:ml-8 md:ml-12 group">
            {/* Titik Cahaya Nuansa Hijau */}
            <div className="absolute -left-[2.5rem] sm:-left-[3.25rem] md:-left-[4.25rem] top-1 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#0d1117] border border-green-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] group-hover:scale-110 transition-transform">
              <Code className="size-4 sm:size-5 text-green-500" />
            </div>
            
            {/* Kartu Konten */}
            <div className="bg-[#0d1117] border border-neutral-800 rounded-xl p-4 sm:p-6 md:p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:border-green-500/30 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4 gap-2">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Full-Stack Web Developer</h3>
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-green-400 font-mono bg-green-500/10 px-2.5 py-1 sm:px-3 rounded-full w-fit">
                  <Calendar className="size-3.5 sm:size-4" />
                  <span>Januari 2026 - Juni 2026</span>
                </div>
              </div>
              <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-300 mb-3 sm:mb-4">Proyek Digital Pusat Karir UIN Jakarta</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm md:text-base text-gray-400 list-disc list-inside">
                <li>Membangun situs web portal Pusat karier secara penuh dari sisi Frontend hingga Backend.</li>
                <li>Menyusun konfigurasi lingkungan aplikasi (environment) dan komponen admin.</li>
                <li>Mendesain dan mengimplementasikan relasi tabel database.</li>
              </ul>
            </div>
          </div>

          {/* Timeline Item 3: Akademis */}
          <div className="relative ml-6 sm:ml-8 md:ml-12 group">
            {/* Titik Cahaya Nuansa Hijau */}
            <div className="absolute -left-[2.5rem] sm:-left-[3.25rem] md:-left-[4.25rem] top-1 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#0d1117] border border-green-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] group-hover:scale-110 transition-transform">
              <GraduationCap className="size-4 sm:size-5 text-green-500" />
            </div>
            
            {/* Kartu Konten */}
            <div className="bg-[#0d1117] border border-neutral-800 rounded-xl p-4 sm:p-6 md:p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:border-green-500/30 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4 gap-2">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Mahasiswa Teknik Informatika</h3>
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-green-400 font-mono bg-green-500/10 px-2.5 py-1 sm:px-3 rounded-full w-fit">
                  <Calendar className="size-3.5 sm:size-4" />
                  <span>Saat Ini</span>
                </div>
              </div>
              <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-300 mb-3 sm:mb-4">UIN Syarif Hidayatullah Jakarta</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm md:text-base text-gray-400 list-disc list-inside">
                <li>Fokus peminatan pada Cybersecurity, Kriptografi Kunci Publik, dan Web Architecture.</li>
                <li>Mempelajari implementasi Digital Forensics dan simulasi routing jaringan.</li>
                <li>Mendalami core knowledge algoritma dan logika pemrograman.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}