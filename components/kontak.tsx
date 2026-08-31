"use client";

import React, { useState } from "react";
import { Mail, MapPin, Terminal, Send, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Kontak() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");

    // 1. Simpan referensi form secara langsung di awal
    const form = event.currentTarget;

    const formData = new FormData(form);
    formData.append("access_key", "e8096835-d47e-4362-bc70-e5635c067dfe");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Pesan berhasil terkirim!");
        // 2. Gunakan variabel form yang sudah disimpan tadi
        form.reset();
      } else {
        setResult("Gagal mengirim pesan. Silakan coba lagi.");
      }
    } catch (error) {
      console.error(error);
      setResult("Terjadi kesalahan sistem.");
    }

    setIsSubmitting(false);
  };

  return (
    <section id="kontak" className="container mx-auto px-4 sm:px-8 md:px-16 pt-16 sm:pt-24 md:pt-40 pb-16 sm:pb-24 md:pb-32 font-sans text-gray-300 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        
        {/* --- KOLOM KIRI: Informasi & Sapaan --- */}
        <div className="flex flex-col">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 sm:mb-6">
            Mari Terhubung.
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-10 leading-relaxed max-w-md">
            Apakah Anda memiliki peluang kolaborasi, proyek pengembangan web, atau diskusi seputar keamanan siber? Sistem saya selalu terbuka untuk menerima ping dari Anda.
          </p>

          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex items-center justify-center size-10 sm:size-12 rounded-full bg-[#0d1117] border border-neutral-800 text-green-500 shadow-[0_0_15px_rgba(16,185,129,0.15)] shrink-0">
                <Mail className="size-4 sm:size-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm text-gray-500 font-mono mb-0.5 sm:mb-1">Email</p>
                <a href="mailto:ryanhidayatullah0612@gmail.com" className="text-sm sm:text-base md:text-lg font-semibold text-gray-200 hover:text-green-400 transition-colors break-all">
                  ryanhidayatullah0612@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex items-center justify-center size-10 sm:size-12 rounded-full bg-[#0d1117] border border-neutral-800 text-green-500 shadow-[0_0_15px_rgba(16,185,129,0.15)] shrink-0">
                <MapPin className="size-4 sm:size-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm text-gray-500 font-mono mb-0.5 sm:mb-1">Lokasi</p>
                <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-200">
                  Tangerang Selatan, Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- KOLOM KANAN: Formulir Kontak --- */}
        <div className="bg-[#0d1117] border border-neutral-800 rounded-2xl p-5 sm:p-8 md:p-10 shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden group w-full">
          
          <div className="flex items-center gap-2 mb-6 sm:mb-8 border-b border-neutral-800 pb-3 sm:pb-4">
            <Terminal className="size-4 sm:size-5 text-green-500" />
            <span className="text-xs sm:text-sm font-mono text-green-500/80">~/send_message.sh</span>
          </div>

          <form onSubmit={onSubmit} className="space-y-4 sm:space-y-6">
            <div className="space-y-1.5 sm:space-y-2">
              <label htmlFor="name" className="text-xs sm:text-sm font-medium text-gray-300">Nama Lengkap</label>
              <Input 
                id="name" 
                name="name"
                required
                autoComplete="name"
                placeholder="Masukkan nama lengkap Anda" 
                className="bg-neutral-900/50 border-neutral-800 focus-visible:ring-green-500 focus-visible:border-green-500 text-gray-200 h-11 sm:h-12 text-sm sm:text-base rounded-xl"
              />
            </div>
            
            <div className="space-y-1.5 sm:space-y-2">
              <label htmlFor="email" className="text-xs sm:text-sm font-medium text-gray-300">Alamat Email</label>
              <Input 
                id="email" 
                name="email"
                type="email" 
                required
                autoComplete="email"
                placeholder="Masukkan alamat email Anda" 
                className="bg-neutral-900/50 border-neutral-800 focus-visible:ring-green-500 focus-visible:border-green-500 text-gray-200 h-11 sm:h-12 text-sm sm:text-base rounded-xl"
              />
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <label htmlFor="message" className="text-xs sm:text-sm font-medium text-gray-300">Pesan</label>
              <Textarea 
                id="message" 
                name="message"
                required
                placeholder="Masukkan pesan Anda di sini..." 
                className="bg-neutral-900/50 border-neutral-800 focus-visible:ring-green-500 focus-visible:border-green-500 text-gray-200 min-h-[100px] sm:min-h-[120px] text-sm sm:text-base rounded-xl resize-y"
              />
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-green-600 hover:bg-green-500 text-white font-bold h-11 sm:h-12 rounded-xl text-sm sm:text-base transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  <span>Mengirim...</span>
                </>
              ) : (
                <>
                  <Send className="size-4" />
                  <span>Kirim Pesan</span>
                </>
              )}
            </Button>

            {/* Pesan Sukses / Error */}
            {result && (
              <p
                role="status"
                aria-live="polite"
                className={`text-center text-xs sm:text-sm font-medium mt-3 sm:mt-4 ${result.includes("berhasil") ? "text-green-500" : "text-red-500"}`}
              >
                {result}
              </p>
            )}
          </form>
          
        </div>
      </div>
    </section>
  );
}