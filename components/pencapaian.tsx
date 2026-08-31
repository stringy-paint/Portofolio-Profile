import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Medal, ExternalLink } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function Pencapaian() {
  return (
    <section id="pencapaian" className="container mx-auto px-4 sm:px-8 md:px-16 pt-16 sm:pt-24 md:pt-40 pb-16 md:pb-24 font-sans text-gray-300 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-10 sm:mb-16 text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2 sm:mb-4">
            Pencapaian & Sertifikasi
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl">
            Validasi keahlian teknis, publikasi akademis, dan partisipasi aktif dalam ekosistem teknologi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* Card 1: CBC Season 3 */}
          <Link 
            href="https://www.linkedin.com/in/ryan-hidayatullah-b20408280/details/honors/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group"
          >
            <Card className="pt-0 pb-5 sm:pb-6 bg-[#0d1117] border-neutral-800 group-hover:border-green-500/50 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 h-full flex flex-col overflow-hidden relative">
              <ExternalLink className="absolute top-4 right-4 size-4 sm:size-5 text-neutral-500 group-hover:text-green-500 transition-colors z-10" />
              
              {/* Preview Gambar Sertifikat */}
              <div className="relative w-full h-44 sm:h-48 bg-neutral-900 border-b border-neutral-800 overflow-hidden">
                <Image 
                  src="/sertif-cbc.jpg" 
                  alt="Sertifikat CBC"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              <CardHeader>
                <div className="mb-3 sm:mb-4 inline-flex p-2.5 sm:p-3 rounded-xl bg-green-500/10 text-green-500 w-fit">
                  <Medal className="size-5 sm:size-6" />
                </div>
                <CardTitle className="text-lg sm:text-xl text-white font-bold leading-snug">CBC (Cyber Breaker Competition) Season 3 tahap lanjut CBD National</CardTitle>
                <CardDescription className="text-green-500/80 font-mono text-xs sm:text-sm mt-1.5 sm:mt-2">
                  Participant • Mei 2026
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-400 text-xs sm:text-sm leading-relaxed flex-1">
                Pengerjaan CTF (Capture The Flag) tingkat lanjut, di mana saya berkompetisi bersama para peserta yang lulus dari tahap nasional dan peraih peringkat 8 besar dari kompetisi CBC Season 2.
              </CardContent>
            </Card>
          </Link>

          {/* Card 2: CBD National */}
          <Link 
            href="https://www.linkedin.com/in/ryan-hidayatullah-b20408280/details/honors/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group"
          >
            <Card className="pt-0 pb-5 sm:pb-6 bg-[#0d1117] border-neutral-800 group-hover:border-green-500/50 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 h-full flex flex-col overflow-hidden relative">
              <ExternalLink className="absolute top-4 right-4 size-4 sm:size-5 text-neutral-500 group-hover:text-green-500 transition-colors z-10" />
              
              <div className="relative w-full h-44 sm:h-48 bg-neutral-900 border-b border-neutral-800 overflow-hidden">
                <Image 
                  src="/sertif-cbd-nasion.jpg" 
                  alt="Sertifikat Cbd National"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              <CardHeader>
                <div className="mb-3 sm:mb-4 inline-flex p-2.5 sm:p-3 rounded-xl bg-green-500/10 text-green-500 w-fit">
                  <Medal className="size-5 sm:size-6" />
                </div>
                <CardTitle className="text-lg sm:text-xl text-white font-bold leading-snug">CBD (Cyber Breaker Development) National</CardTitle>
                <CardDescription className="text-green-500/80 font-mono text-xs sm:text-sm mt-1.5 sm:mt-2">
                  Rank 8 of 33 Teams • Mei 2026
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-400 text-xs sm:text-sm leading-relaxed flex-1">
                Tahap kedua dari kompetisi CBD, di mana saya berhasil menembus 8 besar dari 33 tim yang berpartisipasi di tingkat nasional dan terkualifikasi untuk lanjut ke kompetisi CBC (Cyber Breaker Competition).
              </CardContent>
            </Card>
          </Link>

          {/* Card 3: CBD Regional */}
          <Link 
            href="https://www.linkedin.com/in/ryan-hidayatullah-b20408280/details/honors/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group"
          >
            <Card className="pt-0 pb-5 sm:pb-6 bg-[#0d1117] border-neutral-800 group-hover:border-green-500/50 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 h-full flex flex-col overflow-hidden relative">
              <ExternalLink className="absolute top-4 right-4 size-4 sm:size-5 text-neutral-500 group-hover:text-green-500 transition-colors z-10" />
              
              <div className="relative w-full h-44 sm:h-48 bg-neutral-900 border-b border-neutral-800 overflow-hidden">
                <Image 
                  src="/sertif-cbd-region.jpg" 
                  alt="Sertifikat Cbd Regional"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              <CardHeader>
                <div className="mb-3 sm:mb-4 inline-flex p-2.5 sm:p-3 rounded-xl bg-green-500/10 text-green-500 w-fit">
                  <Medal className="size-5 sm:size-6" />
                </div>
                <CardTitle className="text-lg sm:text-xl text-white font-bold leading-snug">CBD (Cyber Breaker Development) Regional</CardTitle>
                <CardDescription className="text-green-500/80 font-mono text-xs sm:text-sm mt-1.5 sm:mt-2">
                  Rank 4 of 306 Teams • Mei 2026
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-400 text-xs sm:text-sm leading-relaxed flex-1">
                Tahap pertama dari kompetisi CBD, di mana saya berhasil menembus 4 besar dari 306 tim yang berpartisipasi di regional.
              </CardContent>
            </Card>
          </Link>

        </div>
      </div>
    </section>
  );
}