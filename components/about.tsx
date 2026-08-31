import { Code2, Server, ShieldCheck, Cuboid, Terminal } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="container mx-auto px-4 sm:px-8 md:px-16 pt-16 sm:pt-24 md:pt-36 pb-12 sm:pb-16 font-sans text-gray-300 scroll-mt-20 sm:scroll-mt-24">
      
      {/* Wrapper Utama: Grid 2 Kolom dengan items-stretch */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        
        {/* --- KOLOM KIRI: ABOUT ME (TERMINAL) --- */}
        <div className="w-full flex flex-col h-full">
          {/* Judul di luar kotak */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 sm:mb-8">
            Tentang Saya
          </h2>

          {/* Jendela Terminal */}
          <div className="rounded-xl overflow-hidden bg-black/40 backdrop-blur-sm border border-neutral-800 shadow-[0_0_30px_rgba(0,0,0,0.5)] font-mono flex-1 flex flex-col">
            
            {/* Header Bar Terminal */}
            <div className="bg-black/50 px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2 border-b border-neutral-800">
              <div className="size-2.5 sm:size-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors"></div>
              <div className="size-2.5 sm:size-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors"></div>
              <div className="size-2.5 sm:size-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors"></div>
              <div className="ml-3 sm:ml-4 flex items-center gap-1.5 sm:gap-2 text-neutral-400 text-[11px] sm:text-xs tracking-wider truncate">
                <Terminal className="size-3 shrink-0" />
                <span className="truncate">guest@ryan-server:~</span>
              </div>
            </div>

            {/* Isi Layar Terminal */}
            <div className="p-4 sm:p-6 md:p-8 text-xs sm:text-sm md:text-base space-y-5 sm:space-y-6 leading-relaxed flex-1">
              {/* Command 1: whoami */}
              <div>
                <div className="flex flex-wrap items-center gap-x-1.5 sm:gap-x-2 gap-y-0.5 mb-2 font-mono text-xs sm:text-sm">
                  <span className="text-green-500 font-bold">guest@ryan-server</span>
                  <span className="text-white">:</span>
                  <span className="text-green-500">~</span>
                  <span className="text-white">$</span>
                  <span className="text-gray-100 font-semibold">whoami</span>
                </div>
                <p className="text-gray-300 pl-3 sm:pl-4 border-l-2 border-neutral-700 text-xs sm:text-sm md:text-base">
                  Halo! Saya Ryan Hidayatullah, seorang Mahasiswa Teknik Informatika di UIN Syarif Hidayatullah Jakarta. Saya memiliki ketertarikan mendalam pada dua dunia yang saling melengkapi: <strong className="text-white">Cybersecurity</strong> dan <strong className="text-white">Web Development</strong>.
                </p>
              </div>

              {/* Command 2: cat mindset.log */}
              <div>
                <div className="flex flex-wrap items-center gap-x-1.5 sm:gap-x-2 gap-y-0.5 mb-2 font-mono text-xs sm:text-sm">
                  <span className="text-green-500 font-bold">guest@ryan-server</span>
                  <span className="text-white">:</span>
                  <span className="text-green-500">~</span>
                  <span className="text-white">$</span>
                  <span className="text-gray-100 font-semibold">cat mindset.log</span>
                </div>
                <p className="text-gray-300 pl-3 sm:pl-4 border-l-2 border-neutral-700 text-xs sm:text-sm md:text-base">
                  Berbekal pengalaman magang sebagai Junior Penetration Tester di VINIX7 dan fondasi keamanan dari TryHackMe, saya terlatih untuk melihat celah dalam sebuah sistem. Di saat yang sama, kemampuan Full-Stack Development memungkinkan saya untuk tidak hanya meretas, tetapi juga membangun arsitektur web yang tangguh, aman, dan dapat diskalakan.
                </p>
              </div>

              {/* Command 3: eksekusi script */}
              <div>
                <div className="flex flex-wrap items-center gap-x-1.5 sm:gap-x-2 gap-y-0.5 mb-2 font-mono text-xs sm:text-sm">
                  <span className="text-green-500 font-bold">guest@ryan-server</span>
                  <span className="text-white">:</span>
                  <span className="text-green-500">~</span>
                  <span className="text-white">$</span>
                  <span className="text-gray-100 font-semibold">./print_motto.sh</span>
                </div>
                <p className="text-yellow-400 pl-3 sm:pl-4 italic text-xs sm:text-sm md:text-base">
                  &quot;Break the system to understand it, build the future to secure it.&quot;
                </p>
              </div>

              {/* Kursor Berkedip */}
              <div className="flex items-center gap-x-1.5 sm:gap-x-2 pt-1 font-mono text-xs sm:text-sm">
                <span className="text-green-500 font-bold">guest@ryan-server</span>
                <span className="text-white">:</span>
                <span className="text-green-500">~</span>
                <span className="text-white">$</span>
                <span className="w-2 h-4 sm:w-2.5 sm:h-5 bg-gray-400 animate-pulse inline-block ml-0.5"></span>
              </div>
            </div>
          </div>
        </div>

        {/* --- KOLOM KANAN: SKILLS (BADGE STYLE) --- */}
        <div className="w-full flex flex-col h-full">
          {/* Judul di luar kotak (sejajar dengan Tentang Saya) */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 sm:mb-8">
            Keahlian Teknis
          </h2>
          
          {/* Kotak Skills */}
          <div className="bg-black/40 backdrop-blur-sm border border-neutral-800 rounded-xl p-4 sm:p-6 md:p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex-1 flex flex-col justify-center">
            
            <div className="space-y-6 sm:space-y-8">
              {/* Frontend */}
              <div>
                <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4 text-green-400">
                  <Code2 className="size-4 sm:size-5 shrink-0" />
                  <h3 className="text-base sm:text-lg font-semibold text-white">Frontend Development</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <span className="border border-neutral-700 bg-neutral-900/40 rounded-md px-2.5 py-1 text-xs sm:text-sm text-gray-300 hover:border-green-500/50 hover:text-white transition-colors">JavaScript (ES6+)</span>
                  <span className="border border-neutral-700 bg-neutral-900/40 rounded-md px-2.5 py-1 text-xs sm:text-sm text-gray-300 hover:border-green-500/50 hover:text-white transition-colors">React.js</span>
                  <span className="border border-neutral-700 bg-neutral-900/40 rounded-md px-2.5 py-1 text-xs sm:text-sm text-gray-300 hover:border-green-500/50 hover:text-white transition-colors">Next.js</span>
                  <span className="border border-neutral-700 bg-neutral-900/40 rounded-md px-2.5 py-1 text-xs sm:text-sm text-gray-300 hover:border-green-500/50 hover:text-white transition-colors">Tailwind CSS</span>
                  <span className="border border-neutral-700 bg-neutral-900/40 rounded-md px-2.5 py-1 text-xs sm:text-sm text-gray-300 hover:border-green-500/50 hover:text-white transition-colors">Bootstrap</span>
                </div>
              </div>

              {/* Backend */}
              <div>
                <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4 text-green-400">
                  <Server className="size-4 sm:size-5 shrink-0" />
                  <h3 className="text-base sm:text-lg font-semibold text-white">Backend & Database</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <span className="border border-neutral-700 bg-neutral-900/40 rounded-md px-2.5 py-1 text-xs sm:text-sm text-gray-300 hover:border-green-500/50 hover:text-white transition-colors">Node.js</span>
                  <span className="border border-neutral-700 bg-neutral-900/40 rounded-md px-2.5 py-1 text-xs sm:text-sm text-gray-300 hover:border-green-500/50 hover:text-white transition-colors">Python</span>
                  <span className="border border-neutral-700 bg-neutral-900/40 rounded-md px-2.5 py-1 text-xs sm:text-sm text-gray-300 hover:border-green-500/50 hover:text-white transition-colors">PHP</span>
                  <span className="border border-neutral-700 bg-neutral-900/40 rounded-md px-2.5 py-1 text-xs sm:text-sm text-gray-300 hover:border-green-500/50 hover:text-white transition-colors">PostgreSQL</span>
                  <span className="border border-neutral-700 bg-neutral-900/40 rounded-md px-2.5 py-1 text-xs sm:text-sm text-gray-300 hover:border-green-500/50 hover:text-white transition-colors">MySQL</span>
                  <span className="border border-neutral-700 bg-neutral-900/40 rounded-md px-2.5 py-1 text-xs sm:text-sm text-gray-300 hover:border-green-500/50 hover:text-white transition-colors">Supabase</span>
                </div>
              </div>

              {/* Cybersecurity */}
              <div>
                <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4 text-green-400">
                  <ShieldCheck className="size-4 sm:size-5 shrink-0" />
                  <h3 className="text-base sm:text-lg font-semibold text-white">Cybersecurity</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <span className="border border-neutral-700 bg-neutral-900/40 rounded-md px-2.5 py-1 text-xs sm:text-sm text-gray-300 hover:border-green-500/50 hover:text-white transition-colors">Penetration Testing</span>
                  <span className="border border-neutral-700 bg-neutral-900/40 rounded-md px-2.5 py-1 text-xs sm:text-sm text-gray-300 hover:border-green-500/50 hover:text-white transition-colors">Vulnerability Assessment</span>
                  <span className="border border-neutral-700 bg-neutral-900/40 rounded-md px-2.5 py-1 text-xs sm:text-sm text-gray-300 hover:border-green-500/50 hover:text-white transition-colors">Digital Forensics</span>
                  <span className="border border-neutral-700 bg-neutral-900/40 rounded-md px-2.5 py-1 text-xs sm:text-sm text-gray-300 hover:border-green-500/50 hover:text-white transition-colors">Network Fundamentals</span>
                  <span className="border border-neutral-700 bg-neutral-900/40 rounded-md px-2.5 py-1 text-xs sm:text-sm text-gray-300 hover:border-green-500/50 hover:text-white transition-colors">Linux / CLI Ops</span>
                  <span className="border border-neutral-700 bg-neutral-900/40 rounded-md px-2.5 py-1 text-xs sm:text-sm text-gray-300 hover:border-green-500/50 hover:text-white transition-colors">Web Architecture</span>
                </div>
              </div>

              {/* Web3 */}
              <div>
                <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4 text-green-400">
                  <Cuboid className="size-4 sm:size-5 shrink-0" />
                  <h3 className="text-base sm:text-lg font-semibold text-white">Web3 & Blockchain</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <span className="border border-neutral-700 bg-neutral-900/40 rounded-md px-2.5 py-1 text-xs sm:text-sm text-gray-300 hover:border-green-500/50 hover:text-white transition-colors">Solidity</span>
                  <span className="border border-neutral-700 bg-neutral-900/40 rounded-md px-2.5 py-1 text-xs sm:text-sm text-gray-300 hover:border-green-500/50 hover:text-white transition-colors">Ether.js</span>
                  <span className="border border-neutral-700 bg-neutral-900/40 rounded-md px-2.5 py-1 text-xs sm:text-sm text-gray-300 hover:border-green-500/50 hover:text-white transition-colors">Smart Contracts</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}