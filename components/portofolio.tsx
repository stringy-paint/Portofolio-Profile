import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { ShieldAlert, Globe, ServerCog, Database, Lock, Network } from "lucide-react";

export default function Portfolio() {
  return (
    <section id="Projects" className="container mx-auto px-6 md:px-16 pt-32 pb-24 font-sans flex flex-col items-center">
      
      {/* Wrapper max-w-7xl agar lebarnya sama persis dengan kotak About */}
      <div className="max-w-7xl w-full mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 text-left">
          Proyek 
        </h2>
        <p className="text-gray-400 max-w-2xl text-lg text-left">
          Kumpulan studi kasus penetrasi keamanan dan pengembangan arsitektur web digital.
        </p>
      </div>

      {/* Grid dirapatkan dengan gap-x-6 dan gap-y-16 (PinContainer butuh ruang vertikal untuk animasi 3D) */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
        
        {/* Proyek 1: Penetration Testing Vinix */}
        <div className="h-[22rem] flex items-center justify-center w-full">
          <PinContainer title="Laporan MBKM Vinix" href="https://github.com/stringy-paint">
            <div className="flex basis-full flex-col p-5 tracking-tight text-slate-100/50 w-[20rem] sm:w-[22rem] h-[20rem] bg-[#0d1117] border border-neutral-800 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <ShieldAlert className="text-green-500 size-6" />
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-lg text-slate-100">
                  Vulnerability Assessment
                </h3>
              </div>
              <div className="text-sm !m-0 !p-0 font-normal flex-1">
                <span className="text-slate-400">
                  Log aktivitas pengujian penetrasi dan eksploitasi celah keamanan selama program magang MBKM Vinix Batch 7 di divisi Cybersecurity.
                </span>
              </div>
              <div className="flex w-full h-32 rounded-lg mt-4 bg-gradient-to-br from-green-500/20 to-green-900/40 border border-green-500/30" />
            </div>
          </PinContainer>
        </div>

        {/* Proyek 2: UIN Career Portal */}
        <div className="h-[22rem] flex items-center justify-center w-full">
          <PinContainer title="uin-career-portal.id" href="https://github.com/stringy-paint">
            <div className="flex basis-full flex-col p-5 tracking-tight text-slate-100/50 w-[20rem] sm:w-[22rem] h-[20rem] bg-[#0d1117] border border-neutral-800 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="text-green-500 size-6" />
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-lg text-slate-100">
                  Digital Career Portal UIN
                </h3>
              </div>
              <div className="text-sm !m-0 !p-0 font-normal flex-1">
                <span className="text-slate-400">
                  Pengembangan penuh (full-stack) situs web portal karier UIN Jakarta, mencakup konfigurasi lingkungan aplikasi, relasi tabel database, dan komponen admin.
                </span>
              </div>
              <div className="flex w-full h-32 rounded-lg mt-4 bg-gradient-to-br from-green-500/20 to-green-900/40 border border-green-500/30" />
            </div>
          </PinContainer>
        </div>

        {/* Proyek 3: Docker & Cryptography */}
        <div className="h-[22rem] flex items-center justify-center w-full">
          <PinContainer title="Infrastruktur & CTF" href="https://github.com/stringy-paint">
            <div className="flex basis-full flex-col p-5 tracking-tight text-slate-100/50 w-[20rem] sm:w-[22rem] h-[20rem] bg-[#0d1117] border border-neutral-800 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <ServerCog className="text-green-500 size-6" />
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-lg text-slate-100">
                  Docker Server & Crypto
                </h3>
              </div>
              <div className="text-sm !m-0 !p-0 font-normal flex-1">
                <span className="text-slate-400">
                  Penyebaran lingkungan backup server ter-containerize dengan Docker, dipadukan dengan implementasi script prediksi kloning state PRNG.
                </span>
              </div>
              <div className="flex w-full h-32 rounded-lg mt-4 bg-gradient-to-br from-green-500/20 to-green-900/40 border border-green-500/30" />
            </div>
          </PinContainer>
        </div>

        {/* Proyek 4: Placeholder LMS Moodle */}
        <div className="h-[22rem] flex items-center justify-center w-full">
          <PinContainer title="LMS Usability Inspection" href="https://github.com/stringy-paint">
            <div className="flex basis-full flex-col p-5 tracking-tight text-slate-100/50 w-[20rem] sm:w-[22rem] h-[20rem] bg-[#0d1117] border border-neutral-800 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Database className="text-green-500 size-6" />
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-lg text-slate-100">
                  Moodle LMS Integration
                </h3>
              </div>
              <div className="text-sm !m-0 !p-0 font-normal flex-1">
                <span className="text-slate-400">
                  Proyek integrasi Learning Management System menggunakan Moodle yang dikombinasikan dengan metode Usability Inspection.
                </span>
              </div>
              <div className="flex w-full h-32 rounded-lg mt-4 bg-gradient-to-br from-green-500/20 to-green-900/40 border border-green-500/30" />
            </div>
          </PinContainer>
        </div>

        {/* Proyek 5: Placeholder Hash Verification */}
        <div className="h-[22rem] flex items-center justify-center w-full">
          <PinContainer title="Digital Forensics Lab" href="https://github.com/stringy-paint">
            <div className="flex basis-full flex-col p-5 tracking-tight text-slate-100/50 w-[20rem] sm:w-[22rem] h-[20rem] bg-[#0d1117] border border-neutral-800 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="text-green-500 size-6" />
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-lg text-slate-100">
                  Hash Verification
                </h3>
              </div>
              <div className="text-sm !m-0 !p-0 font-normal flex-1">
                <span className="text-slate-400">
                  Analisis integritas data file menggunakan utilitas hashing kriptografi untuk kebutuhan laporan laboratorium forensik digital.
                </span>
              </div>
              <div className="flex w-full h-32 rounded-lg mt-4 bg-gradient-to-br from-green-500/20 to-green-900/40 border border-green-500/30" />
            </div>
          </PinContainer>
        </div>

        {/* Proyek 6: Placeholder NS2 Routing */}
        <div className="h-[22rem] flex items-center justify-center w-full">
          <PinContainer title="Wireless Sensor Network" href="https://github.com/stringy-paint">
            <div className="flex basis-full flex-col p-5 tracking-tight text-slate-100/50 w-[20rem] sm:w-[22rem] h-[20rem] bg-[#0d1117] border border-neutral-800 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Network className="text-green-500 size-6" />
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-lg text-slate-100">
                  NS2 Routing Simulation
                </h3>
              </div>
              <div className="text-sm !m-0 !p-0 font-normal flex-1">
                <span className="text-slate-400">
                  Simulasi routing jaringan sembilan node menggunakan Network Simulator 2 pada graf node acak.
                </span>
              </div>
              <div className="flex w-full h-32 rounded-lg mt-4 bg-gradient-to-br from-green-500/20 to-green-900/40 border border-green-500/30" />
            </div>
          </PinContainer>
        </div>

      </div>
    </section>
  );
}