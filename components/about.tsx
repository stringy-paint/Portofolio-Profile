import { Code2, Server, ShieldCheck, Cuboid, Terminal } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="container mx-auto px-6 md:px-16 pt-70 pb-16 font-sans text-gray-300">
      
      {/* Wrapper Utama: Grid 2 Kolom dengan items-stretch */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        
        {/* --- KOLOM KIRI: ABOUT ME (TERMINAL) --- */}
        <div className="w-full flex flex-col h-full">
          {/* Judul di luar kotak */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-8">
            Tentang Saya
          </h2>

          {/* Jendela Terminal (ditambah flex-1 agar melar mengisi sisa ruang) */}
          <div className="rounded-xl overflow-hidden bg-black/40 backdrop-blur-sm border border-neutral-800 shadow-[0_0_30px_rgba(0,0,0,0.5)] font-mono flex-1 flex flex-col">
            
            {/* Header Bar Terminal */}
            <div className="bg-black/50 px-4 py-3 flex items-center gap-2 border-b border-neutral-800">
              <div className="size-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors"></div>
              <div className="size-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors"></div>
              <div className="size-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors"></div>
              <div className="ml-4 flex items-center gap-2 text-neutral-400 text-xs tracking-wider">
                <Terminal className="size-3" />
                <span>guest@ryan-server:~</span>
              </div>
            </div>

            {/* Isi Layar Terminal */}
            <div className="p-6 md:p-8 text-sm md:text-base space-y-6 leading-relaxed flex-1">
              {/* Command 1: whoami */}
              <div>
                <div className="flex gap-2 items-center mb-2">
                  <span className="text-green-500 font-bold">guest@ryan-server</span>
                  <span className="text-white">:</span>
                  <span className="text-green-500">~</span>
                  <span className="text-white">$</span>
                  <span className="text-gray-100 typing-animation">whoami</span>
                </div>
                <p className="text-gray-300 pl-4 border-l-2 border-neutral-700">
                  Halo! Saya Ryan Hidayatullah, seorang Mahasiswa Teknik Informatika di UIN Syarif Hidayatullah Jakarta. Saya memiliki ketertarikan mendalam pada dua dunia yang saling melengkapi: <strong className="text-white">Cybersecurity</strong> dan <strong className="text-white">Web Development</strong>.
                </p>
              </div>

              {/* Command 2: cat mindset.log */}
              <div>
                <div className="flex gap-2 items-center mb-2">
                  <span className="text-green-500 font-bold">guest@ryan-server</span>
                  <span className="text-white">:</span>
                  <span className="text-green-500">~</span>
                  <span className="text-white">$</span>
                  <span className="text-gray-100">cat mindset.log</span>
                </div>
                <p className="text-gray-300 pl-4 border-l-2 border-neutral-700">
                  Berbekal pengalaman magang sebagai Junior Penetration Tester di VINIX7 dan fondasi keamanan dari TryHackMe, saya terlatih untuk melihat celah dalam sebuah sistem. Di saat yang sama, kemampuan Full-Stack Development memungkinkan saya untuk tidak hanya meretas, tetapi juga membangun arsitektur web yang tangguh, aman, dan dapat diskalakan.
                </p>
              </div>

              {/* Command 3: eksekusi script */}
              <div>
                <div className="flex gap-2 items-center mb-2">
                  <span className="text-green-500 font-bold">guest@ryan-server</span>
                  <span className="text-white">:</span>
                  <span className="text-green-500">~</span>
                  <span className="text-white">$</span>
                  <span className="text-gray-100">./print_motto.sh</span>
                </div>
                <p className="text-yellow-400 pl-4 italic">
                  "Break the system to understand it, build the future to secure it."
                </p>
              </div>

              {/* Kursor Berkedip */}
                <div className="flex gap-2 items-center pt-2">
                <span className="text-green-500 font-bold">guest@ryan-server</span>
                <span className="text-white">:</span>
                <span className="text-green-500">~</span>
                <span className="text-white">$</span>
                <span className="w-2.5 h-5 bg-gray-400 animate-pulse"></span>
              </div>
            </div>
          </div>
        </div>

        {/* --- KOLOM KANAN: SKILLS (BADGE STYLE) --- */}
        <div className="w-full flex flex-col h-full">
          
          {/* Trik Spacer: Teks tembus pandang untuk menekan kotak ke bawah agar sejajar dengan judul sebelah kiri */}
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 invisible hidden lg:block" aria-hidden="true">
            Spacer
          </h2>
          
          {/* Kotak Skills (ditambah flex-1 agar tingginya sama rata dengan terminal) */}
          <div className="bg-black/40 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 md:p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex-1 flex flex-col justify-center">
            
            {/* Judul di DALAM kotak */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-8">
              Keahlian Teknis
            </h2>
            
            <div className="space-y-8">
              {/* Frontend (Warna Biru) */}
              <div>
                <div className="flex items-center gap-3 mb-4 text-green-400">
                  <Code2 className="size-5" />
                  <h3 className="text-lg font-semibold text-white">Frontend Development</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="border border-neutral-600 px-3 py-1.5 text-sm text-gray-300">JavaScript (ES6+)</span>
                  <span className="border border-neutral-600 px-3 py-1.5 text-sm text-gray-300">React.js</span>
                  <span className="border border-neutral-600 px-3 py-1.5 text-sm text-gray-300">Next.js</span>
                  <span className="border border-neutral-600 px-3 py-1.5 text-sm text-gray-300">Tailwind CSS</span>
                  <span className="border border-neutral-600 px-3 py-1.5 text-sm text-gray-300">Bootstrap</span>
                </div>
              </div>

              {/* Backend (Warna Hijau) */}
              <div>
                <div className="flex items-center gap-3 mb-4 text-green-400">
                  <Server className="size-5" />
                  <h3 className="text-lg font-semibold text-white">Backend & Database</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="border border-neutral-600 px-3 py-1.5 text-sm text-gray-300">Node.js</span>
                  <span className="border border-neutral-600 px-3 py-1.5 text-sm text-gray-300">Python</span>
                  <span className="border border-neutral-600 px-3 py-1.5 text-sm text-gray-300">PHP</span>
                  <span className="border border-neutral-600 px-3 py-1.5 text-sm text-gray-300">PostgreSQL</span>
                  <span className="border border-neutral-600 px-3 py-1.5 text-sm text-gray-300">MySQL</span>
                  <span className="border border-neutral-600 px-3 py-1.5 text-sm text-gray-300">Supabase</span>
                </div>
              </div>

              {/* Cybersecurity (Warna Teal) */}
              <div>
                <div className="flex items-center gap-3 mb-4 text-green-400">
                  <ShieldCheck className="size-5" />
                  <h3 className="text-lg font-semibold text-white">Cybersecurity</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="border border-neutral-600 px-3 py-1.5 text-sm text-gray-300">Penetration Testing</span>
                  <span className="border border-neutral-600 px-3 py-1.5 text-sm text-gray-300">Vulnerability Assessment</span>
                  <span className="border border-neutral-600 px-3 py-1.5 text-sm text-gray-300">Digital Forensics</span>
                  <span className="border border-neutral-600 px-3 py-1.5 text-sm text-gray-300">Network Fundamentals</span>
                  <span className="border border-neutral-600 px-3 py-1.5 text-sm text-gray-300">Linux / CLI Ops</span>
                  <span className="border border-neutral-600 px-3 py-1.5 text-sm text-gray-300">Web Architecture</span>
                </div>
              </div>

              {/* Web3 (Warna Ungu) */}
              <div>
                <div className="flex items-center gap-3 mb-4 text-green-400">
                  <Cuboid className="size-5" />
                  <h3 className="text-lg font-semibold text-white">Web3 & Blockchain</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="border border-neutral-600 px-3 py-1.5 text-sm text-gray-300">Solidity</span>
                  <span className="border border-neutral-600 px-3 py-1.5 text-sm text-gray-300">Ether.js</span>
                  <span className="border border-neutral-600 px-3 py-1.5 text-sm text-gray-300">Smart Contracts</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}