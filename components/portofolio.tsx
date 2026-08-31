import React from "react";
import Image from "next/image";
import { PinContainer } from "@/components/ui/3d-pin";
import { ShieldAlert, ServerCog, Database, Lock, Network } from "lucide-react";

export default function Portfolio() {
  return (
    <section
      id="Projects"
      className="container mx-auto px-4 sm:px-8 md:px-16 pt-16 sm:pt-24 md:pt-32 pb-16 md:pb-24 font-sans flex flex-col items-center scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Wrapper max-w-7xl agar lebarnya sama persis dengan kotak About */}
      <div className="max-w-7xl w-full mx-auto mb-10 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2 sm:mb-4 text-left">
          Proyek
        </h2>
        <p className="text-gray-400 max-w-2xl text-sm sm:text-base md:text-lg text-left">
          Kumpulan studi kasus penetrasi keamanan dan pengembangan arsitektur
          web digital.
        </p>
      </div>

      {/* Grid dirapatkan dengan gap-x-6 dan gap-y-12/16 */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 sm:gap-y-16">
        {/* Proyek 1: BlockPresence App */}
        <div className="h-[20rem] sm:h-[22rem] flex items-center justify-center w-full">
          <PinContainer
            title="blockpresence-app.vercel.app"
            href="https://blockpresence-app.vercel.app"
          >
            <div className="flex basis-full flex-col p-4 sm:p-5 tracking-tight text-slate-100/50 w-[17.5rem] sm:w-[21rem] md:w-[22rem] max-w-[calc(100vw-4.5rem)] h-[19rem] sm:h-[20rem] bg-[#0d1117] border border-neutral-800 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-4">
                <ShieldAlert className="text-green-500 size-5 sm:size-6 shrink-0" />
                <h3 className="max-w-xs !pb-1 !m-0 font-bold text-base sm:text-lg text-slate-100 truncate">
                  BlockPresence App
                </h3>
              </div>
              <div className="text-xs sm:text-sm !m-0 !p-0 font-normal flex-1">
                <span className="text-slate-400 line-clamp-3 sm:line-clamp-4">
                  Aplikasi Absensi Berbasis Web yang memanfaatkan QR Code untuk memverifikasi kehadiran peserta menggunakan blockhain
                </span>
              </div>
              <div className="relative flex w-full h-28 sm:h-32 rounded-lg mt-3 sm:mt-4 bg-gradient-to-br from-green-500/20 to-green-900/40 border border-green-500/30 overflow-hidden shrink-0">
                <Image
                  src="/tampilan-block.png"
                  alt="Preview BlockPresence"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </PinContainer>
        </div>

        {/* Proyek 2: UIN Career Portal */}
        <div className="h-[20rem] sm:h-[22rem] flex items-center justify-center w-full">
          <PinContainer
            title="uin-career-portal.id"
            href="https://github.com/stringy-paint"
          >
            <div className="flex basis-full flex-col p-4 sm:p-5 tracking-tight text-slate-100/50 w-[17.5rem] sm:w-[21rem] md:w-[22rem] max-w-[calc(100vw-4.5rem)] h-[19rem] sm:h-[20rem] bg-[#0d1117] border border-neutral-800 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-4">
                <ShieldAlert className="text-green-500 size-5 sm:size-6 shrink-0" />
                <h3 className="max-w-xs !pb-1 !m-0 font-bold text-base sm:text-lg text-slate-100 truncate">
                  Web Pusat Karir UIN
                </h3>
              </div>
              <div className="text-xs sm:text-sm !m-0 !p-0 font-normal flex-1">
                <span className="text-slate-400 line-clamp-3 sm:line-clamp-4">
                  Pengembangan penuh (full-stack) situs web portal karier UIN
                  Jakarta, mencakup konfigurasi lingkungan aplikasi, relasi
                  tabel database, dan komponen admin.
                </span>
              </div>
              <div className="relative flex w-full h-28 sm:h-32 rounded-lg mt-3 sm:mt-4 bg-gradient-to-br from-green-500/20 to-green-900/40 border border-green-500/30 overflow-hidden shrink-0">
                <Image
                  src="/tampilan.png"
                  alt="Preview Web Pusat Karir UIN Jakarta"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </PinContainer>
        </div>

        {/* Proyek 3: Docker & Cryptography */}
        <div className="h-[20rem] sm:h-[22rem] flex items-center justify-center w-full">
          <PinContainer
            title="ngerti-in.vercel.app"
            href="https://ngerti-in.vercel.app/"
          >
            <div className="flex basis-full flex-col p-4 sm:p-5 tracking-tight text-slate-100/50 w-[17.5rem] sm:w-[21rem] md:w-[22rem] max-w-[calc(100vw-4.5rem)] h-[19rem] sm:h-[20rem] bg-[#0d1117] border border-neutral-800 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-4">
                <ServerCog className="text-green-500 size-5 sm:size-6 shrink-0" />
                <h3 className="max-w-xs !pb-1 !m-0 font-bold text-base sm:text-lg text-slate-100 truncate">
                  Ngerti-in Web Belajar
                </h3>
              </div>
              <div className="text-xs sm:text-sm !m-0 !p-0 font-normal flex-1">
                <span className="text-slate-400 line-clamp-3 sm:line-clamp-4">
                  Platform Peer-to-Peer (P2P) akademik yang menghubungkan mahasiswa dengan kating berkompeten. Solusi belajar efektif dengan bahasa sebaya sekaligus ruang monetisasi keahlian bagi pengajar.
                </span>
              </div>
              <div className="relative flex w-full h-28 sm:h-32 rounded-lg mt-3 sm:mt-4 bg-gradient-to-br from-green-500/20 to-green-900/40 border border-green-500/30 overflow-hidden shrink-0">
                <Image
                  src="/aplikasi-belajar.png"
                  alt="Preview Ngerti-in"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </PinContainer>
        </div>
      </div>
    </section>
  );
}
