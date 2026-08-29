import React from "react";
import { Briefcase, Code, GraduationCap, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="container mx-auto px-6 md:px-16 pt-40 pb-24 font-sans text-gray-300">
      
      {/* Menggunakan max-w-7xl agar posisinya sejajar sempurna dengan halaman About dan Portfolio */}
      <div className="max-w-7xl w-full mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 text-left">
            Riwayat Pengalaman
          </h2>
          <p className="text-gray-400 text-lg text-left">
            Perjalanan karier, proyek profesional, dan riwayat akademis.
          </p>
        </div>

        {/* Timeline Wrapper (Garis Vertikal) */}
        <div className="relative border-l-2 border-neutral-800 ml-4 md:ml-6 space-y-12 pb-8">
          
          {/* Timeline Item 1: MBKM Vinix */}
          <div className="relative ml-8 md:ml-12 group">
            {/* Titik Cahaya Nuansa Hijau (Emerald) */}
            <div className="absolute -left-[2.85rem] md:-left-[3.85rem] top-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#0d1117] border border-green-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] group-hover:scale-110 transition-transform">
              <Briefcase className="size-5 text-green-500" />
            </div>
            
            {/* Kartu Konten */}
            <div className="bg-[#0d1117] border border-neutral-800 rounded-xl p-6 md:p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:border-green-500/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <h3 className="text-xl md:text-2xl font-bold text-white">Junior Penetration Tester</h3>
                <div className="flex items-center gap-2 text-sm text-green-400 font-mono bg-green-500/10 px-3 py-1 rounded-full w-fit">
                  <Calendar className="size-4" />
                  <span>April 2026 – Sekarang</span>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-gray-300 mb-4">MBKM Vinix Batch 7 - Divisi Cybersecurity</h4>
              <ul className="space-y-2 text-gray-400 list-disc list-inside">
                <li>Melakukan vulnerability assessment dan penetration testing pada sistem target.</li>
                <li>Mendokumentasikan log aktivitas keamanan dan menyusun laporan kerentanan.</li>
                <li>Mengoperasikan Linux/CLI dan tools keamanan jaringan secara komprehensif.</li>
              </ul>
            </div>
          </div>

          {/* Timeline Item 2: UIN Portal */}
          <div className="relative ml-8 md:ml-12 group">
            {/* Titik Cahaya Nuansa Hijau */}
            <div className="absolute -left-[2.85rem] md:-left-[3.85rem] top-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#0d1117] border border-green-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] group-hover:scale-110 transition-transform">
              <Code className="size-5 text-green-500" />
            </div>
            
            {/* Kartu Konten */}
            <div className="bg-[#0d1117] border border-neutral-800 rounded-xl p-6 md:p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:border-green-500/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <h3 className="text-xl md:text-2xl font-bold text-white">Full-Stack Web Developer</h3>
                <div className="flex items-center gap-2 text-sm text-green-400 font-mono bg-green-500/10 px-3 py-1 rounded-full w-fit">
                  <Calendar className="size-4" />
                  <span>April 2026</span>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-gray-300 mb-4">Proyek Digital Career Portal UIN</h4>
              <ul className="space-y-2 text-gray-400 list-disc list-inside">
                <li>Membangun situs web portal karier secara penuh dari sisi Frontend hingga Backend.</li>
                <li>Menyusun konfigurasi lingkungan aplikasi (environment) dan komponen admin.</li>
                <li>Mendesain dan mengimplementasikan relasi tabel database.</li>
              </ul>
            </div>
          </div>

          {/* Timeline Item 3: Akademis */}
          <div className="relative ml-8 md:ml-12 group">
            {/* Titik Cahaya Nuansa Hijau */}
            <div className="absolute -left-[2.85rem] md:-left-[3.85rem] top-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#0d1117] border border-green-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] group-hover:scale-110 transition-transform">
              <GraduationCap className="size-5 text-green-500" />
            </div>
            
            {/* Kartu Konten */}
            <div className="bg-[#0d1117] border border-neutral-800 rounded-xl p-6 md:p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:border-green-500/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <h3 className="text-xl md:text-2xl font-bold text-white">Mahasiswa Teknik Informatika</h3>
                <div className="flex items-center gap-2 text-sm text-green-400 font-mono bg-green-500/10 px-3 py-1 rounded-full w-fit">
                  <Calendar className="size-4" />
                  <span>Saat Ini</span>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-gray-300 mb-4">UIN Syarif Hidayatullah Jakarta</h4>
              <ul className="space-y-2 text-gray-400 list-disc list-inside">
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