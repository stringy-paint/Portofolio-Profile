import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, FileText, Medal, Shield, BookOpen, Users, ExternalLink } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function Pencapaian() {
  return (
    <section id="pencapaian" className="container mx-auto px-6 md:px-16 pt-40 pb-24 font-sans text-gray-300">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Pencapaian & Sertifikasi
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Validasi keahlian teknis, publikasi akademis, dan partisipasi aktif dalam ekosistem teknologi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <Link 
            href="https://www.linkedin.com/in/ryan-hidayatullah-b20408280/details/honors/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group"
          >
            <Card className="bg-[#0d1117] border-neutral-800 group-hover:border-green-500/50 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 h-full flex flex-col overflow-hidden relative">
              <ExternalLink className="absolute top-4 right-4 size-5 text-neutral-500 group-hover:text-green-500 transition-colors z-10" />
              
              {/* Preview Gambar Sertifikat */}
              <div className="relative w-full h-48 bg-neutral-900 border-b border-neutral-800 overflow-hidden">
                <Image 
                  src="/sertif-cbc.jpg" 
                  alt="Sertifikat CBC"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-xl bg-green-500/10 text-green-500 w-fit">
                  <Medal className="size-6" />
                </div>
                <CardTitle className="text-xl text-white">CBC (Cyber Breaker Competition) Season 3 tahap lanjut CBD National </CardTitle>
                <CardDescription className="text-green-500/80 font-mono text-sm mt-2">
                  Participant • Mei 2026
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-400 text-sm leading-relaxed flex-1">
                Pengerjaan CTF (Capture The Flag) tingkat lanjut, dimana disana saya bertanding dengan prang orang yang lulus dari tahap national dan rank 8 Besar dari kompetesi CBC Season 2.
              </CardContent>
            </Card>
          </Link>

          {/* Card 2 */}
          <Link 
            href="https://www.linkedin.com/in/ryan-hidayatullah-b20408280/details/honors/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group"
          >
            <Card className="bg-[#0d1117] border-neutral-800 group-hover:border-green-500/50 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 h-full flex flex-col overflow-hidden relative">
              <ExternalLink className="absolute top-4 right-4 size-5 text-neutral-500 group-hover:text-green-500 transition-colors z-10" />
              
              <div className="relative w-full h-48 bg-neutral-900 border-b border-neutral-800 overflow-hidden">
                <Image 
                  src="/sertif-cbd-nasion.jpg" 
                  alt="Sertifikat Cbd National"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-xl bg-green-500/10 text-green-500 w-fit">
                  <Medal className="size-6" />
                </div>
                <CardTitle className="text-xl text-white">CBD (Cyber Breaker Development) National</CardTitle>
                <CardDescription className="text-green-500/80 font-mono text-sm mt-2">
                  Rank 8 of 33 Teams • Mei 2026
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-400 text-sm leading-relaxed flex-1">
                Tahap kedua dari kompetisi CBD, dimana saya berhasil menembus 8 besar dari 33 tim yang berpartisipasi di tingkat nasional dan terkualifikasi untuk lanjut ke kompetisi CBC (Cyber Breaker Competition).
              </CardContent>
            </Card>
          </Link>

          {/* Card 3 */}
          <Link 
            href="https://www.linkedin.com/in/ryan-hidayatullah-b20408280/details/honors/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group"
          >
            <Card className="bg-[#0d1117] border-neutral-800 group-hover:border-green-500/50 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 h-full flex flex-col overflow-hidden relative">
              <ExternalLink className="absolute top-4 right-4 size-5 text-neutral-500 group-hover:text-green-500 transition-colors z-10" />
              
              <div className="relative w-full h-48 bg-neutral-900 border-b border-neutral-800 overflow-hidden">
                <Image 
                  src="/sertif-cbd-region.jpg" 
                  alt="Sertifikat Cbd Regional"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-xl bg-green-500/10 text-green-500 w-fit">
                  <Medal className="size-6" />
                </div>
                <CardTitle className="text-xl text-white">CBD (Cyber Breaker Development) Regional</CardTitle>
                <CardDescription className="text-green-500/80 font-mono text-sm mt-2">
                  Rank 4 of 306 Teams • Mei 2026
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-400 text-sm leading-relaxed flex-1">
                Tahap pertama dari kompetisi CBD, dimana saya berhasil menembus 4 besar dari 306 tim yang berpartisipasi di regional.
              </CardContent>
            </Card>
          </Link>

           <Link 
            href="https://www.linkedin.com/in/ryan-hidayatullah-b20408280/details/honors/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group"
          >
            <Card className="bg-[#0d1117] border-neutral-800 group-hover:border-green-500/50 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 h-full flex flex-col overflow-hidden relative">
              <ExternalLink className="absolute top-4 right-4 size-5 text-neutral-500 group-hover:text-green-500 transition-colors z-10" />
              
              <div className="relative w-full h-48 bg-neutral-900 border-b border-neutral-800 overflow-hidden">
                <Image 
                  src="/sertif-cbd-region.jpg" 
                  alt="Sertifikat Cbd Regional"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-xl bg-green-500/10 text-green-500 w-fit">
                  <FileText className="size-6" />
                </div>
                <CardTitle className="text-xl text-white">CBD (Cyber Breaker Development) Regional</CardTitle>
                <CardDescription className="text-green-500/80 font-mono text-sm mt-2">
                  Rank 4 of 306 Teams • Mei 2026
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-400 text-sm leading-relaxed flex-1">
                Tahap pertama dari kompetisi CBD, dimana saya berhasil menembus 4 besar dari 306 tim yang berpartisipasi di regional.
              </CardContent>
            </Card>
          </Link>

           <Link 
            href="https://www.linkedin.com/in/ryan-hidayatullah-b20408280/details/honors/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group"
          >
            <Card className="bg-[#0d1117] border-neutral-800 group-hover:border-green-500/50 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 h-full flex flex-col overflow-hidden relative">
              <ExternalLink className="absolute top-4 right-4 size-5 text-neutral-500 group-hover:text-green-500 transition-colors z-10" />
              
              <div className="relative w-full h-48 bg-neutral-900 border-b border-neutral-800 overflow-hidden">
                <Image 
                  src="/sertif-cbd-region.jpg" 
                  alt="Sertifikat Cbd Regional"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-xl bg-green-500/10 text-green-500 w-fit">
                  <FileText className="size-6" />
                </div>
                <CardTitle className="text-xl text-white">CBD (Cyber Breaker Development) Regional</CardTitle>
                <CardDescription className="text-green-500/80 font-mono text-sm mt-2">
                  Rank 4 of 306 Teams • Mei 2026
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-400 text-sm leading-relaxed flex-1">
                Tahap pertama dari kompetisi CBD, dimana saya berhasil menembus 4 besar dari 306 tim yang berpartisipasi di regional.
              </CardContent>
            </Card>
          </Link>

           <Link 
            href="https://www.linkedin.com/in/ryan-hidayatullah-b20408280/details/honors/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group"
          >
            <Card className="bg-[#0d1117] border-neutral-800 group-hover:border-green-500/50 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 h-full flex flex-col overflow-hidden relative">
              <ExternalLink className="absolute top-4 right-4 size-5 text-neutral-500 group-hover:text-green-500 transition-colors z-10" />
              
              <div className="relative w-full h-48 bg-neutral-900 border-b border-neutral-800 overflow-hidden">
                <Image 
                  src="/sertif-cbd-region.jpg" 
                  alt="Sertifikat Cbd Regional"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-xl bg-green-500/10 text-green-500 w-fit">
                  <FileText className="size-6" />
                </div>
                <CardTitle className="text-xl text-white">CBD (Cyber Breaker Development) Regional</CardTitle>
                <CardDescription className="text-green-500/80 font-mono text-sm mt-2">
                  Rank 4 of 306 Teams • Mei 2026
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-400 text-sm leading-relaxed flex-1">
                Tahap pertama dari kompetisi CBD, dimana saya berhasil menembus 4 besar dari 306 tim yang berpartisipasi di regional.
              </CardContent>
            </Card>
          </Link>

        </div>
      </div>
    </section>
  );
}