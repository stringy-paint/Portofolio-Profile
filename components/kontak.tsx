import React from "react";
import { Mail, MapPin, Terminal, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Kontak() {
  return (
    <section id="kontak" className="container mx-auto px-6 md:px-16 pt-40 pb-32 font-sans text-gray-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* --- KOLOM KIRI: Informasi & Sapaan --- */}
        <div className="flex flex-col">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Mari Terhubung.
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-md">
            Apakah Anda memiliki peluang kolaborasi, proyek pengembangan web, atau diskusi seputar keamanan siber? Sistem saya selalu terbuka untuk menerima ping dari Anda.
          </p>

          <div className="space-y-6">
            {/* Info Email */}
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center size-12 rounded-full bg-[#0d1117] border border-neutral-800 text-green-500 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                <Mail className="size-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-mono mb-1">Email</p>
                <a href="mailto:ryanhidayatullah0612@gmail.com" className="text-lg font-semibold text-gray-200 hover:text-green-400 transition-colors">
                  ryanhidayatullah0612@gmail.com
                </a>
              </div>
            </div>

            {/* Info Lokasi */}
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center size-12 rounded-full bg-[#0d1117] border border-neutral-800 text-green-500 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                <MapPin className="size-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-mono mb-1">Lokasi</p>
                <p className="text-lg font-semibold text-gray-200">
                  Tangerang Selatan, Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- KOLOM KANAN: Formulir Kontak --- */}
        <div className="bg-[#0d1117] border border-neutral-800 rounded-2xl p-8 md:p-10 shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden group">
          
          {/* Aksen Terminal di Formulir */}
          <div className="flex items-center gap-2 mb-8 border-b border-neutral-800 pb-4">
            <Terminal className="size-5 text-green-500" />
            <span className="text-sm font-mono text-green-500/80">~/send_message.sh</span>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300">Nama Lengkap</label>
              <Input 
                id="name" 
                placeholder="John Doe" 
                className="bg-neutral-900/50 border-neutral-800 focus-visible:ring-green-500 focus-visible:border-green-500 text-gray-200 h-12"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">Alamat Email</label>
              <Input 
                id="email" 
                type="email" 
                placeholder="john@example.com" 
                className="bg-neutral-900/50 border-neutral-800 focus-visible:ring-green-500 focus-visible:border-green-500 text-gray-200 h-12"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">Pesan</label>
              <Textarea 
                id="message" 
                placeholder="Tuliskan pesan, tawaran proyek, atau temuan bug di sini..." 
                className="bg-neutral-900/50 border-neutral-800 focus-visible:ring-green-500 focus-visible:border-green-500 text-gray-200 min-h-[120px] resize-y"
              />
            </div>

            <Button 
              type="button" 
              className="w-full bg-green-600 hover:bg-green-500 text-white font-bold h-12 rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2"
            >
              <Send className="size-4" />
              <span>Eksekusi Pesan</span>
            </Button>
          </form>
          
        </div>

      </div>
    </section>
  );
}