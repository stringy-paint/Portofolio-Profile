import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/stringy-paint",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/ryan-hidayatullah-b20408280/", 
    label: "LinkedIn",
  },
  {
    icon: FaEnvelope,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=ryanhidayatullah0612@gmail.com", 
    label: "Email",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/ryans.hd/", 
    label: "Instagram",
  },
];

export default function Hero() {
  return (
    <section className="container mx-auto flex flex-col md:flex-row items-center justify-center pt-8 sm:pt-16 md:pt-24 lg:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-8 md:px-16 gap-8 md:gap-12">
      <div className="flex-1 flex flex-col items-start text-left space-y-3 sm:space-y-4 w-full">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold tracking-wider text-gray-300">
          Halo, Saya
        </h2>
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white break-words">
          Ryan Hidayatullah
        </h1>
        <h3 className="text-base sm:text-xl md:text-3xl lg:text-4xl font-bold">
          <span className="text-gray-300 leading-tight">
            Junior Penetration Tester dan Full-Stack Web Developer
          </span>
        </h3>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-lg leading-relaxed mt-3 sm:mt-6">
          Mahasiswa UIN Syarif Hidayatullah Jakarta. Berpengalaman dalam
          penetration testing dan full-stack web development.
        </p>

        {/* Ikon Sosial Media yang sudah dinamis */}
        <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
          {socialLinks.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="p-2.5 sm:p-3 rounded-full border-2 border-gray-500 text-gray-400 hover:bg-gray-300 hover:text-black hover:border-gray-300 transition-all shadow-[0_0_10px_rgba(156,163,175,0.2)] hover:shadow-[0_0_20px_rgba(156,163,175,0.6)] flex items-center justify-center min-w-[42px] min-h-[42px]"
              >
                <IconComponent className="size-4 sm:size-5" />
              </a>
            );
          })}
        </div>

        {/* Tombol Download CV */}
        <div className="pt-2 w-full sm:w-auto">
          <a href="/Cv.pdf" download="Ryan_Hidayatullah_CV.pdf" className="inline-block w-full sm:w-auto">
            <Button className="w-full sm:w-auto mt-4 sm:mt-6 rounded-full bg-black text-white font-bold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg hover:bg-neutral-900 border border-neutral-700 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all cursor-pointer">
              Download CV
            </Button>
          </a>
        </div>
      </div>

      {/* Tambahkan "isolate" agar z-index tidak tembus ke belakang background utama web */}
      <div className="flex-1 flex justify-center items-center w-full mt-10 md:mt-0 relative min-h-[400px] isolate">
        
        {/* 1. BACKGROUND ORNAMEN TECH */}
        {/* Ubah menjadi z-0 dan warna menjadi text-gray-400 agar terlihat */}
        <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none z-0 scale-125 md:scale-150">
          <svg className="w-full h-full max-w-[700px] text-gray-400" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            
            {/* Garis Putus-putus Kiri */}
            <circle cx="60" cy="220" r="8" fill="currentColor" className="opacity-80" />
            <line x1="80" y1="220" x2="160" y2="220" stroke="currentColor" strokeWidth="4" strokeDasharray="10 10" className="opacity-80" />

            {/* Garis Solid Kanan */}
            <line x1="440" y1="380" x2="520" y2="380" stroke="currentColor" strokeWidth="4" className="opacity-80" />
            <circle cx="540" cy="380" r="8" fill="currentColor" className="opacity-80" />

            {/* Angka Biner Kiri Atas */}
            <g className="opacity-20 font-mono text-lg fill-current tracking-widest">
              <text x="70" y="100">0110101</text>
              <text x="70" y="125">1010110</text>
              <text x="70" y="150">0011011</text>
              <text x="70" y="175">1101001</text>
            </g>

            {/* Ikon Server Kanan Atas */}
            <g stroke="currentColor" strokeWidth="2.5" fill="none" className="opacity-60">
              <rect x="420" y="70" width="75" height="24" rx="4" />
              <circle cx="435" cy="82" r="3" fill="currentColor" />
              <line x1="455" y1="82" x2="480" y2="82" />
              
              <rect x="420" y="104" width="75" height="24" rx="4" />
              <circle cx="435" cy="116" r="3" fill="currentColor" />
              <line x1="455" y1="116" x2="480" y2="116" />
              
              <rect x="420" y="138" width="75" height="24" rx="4" />
              <circle cx="435" cy="150" r="3" fill="currentColor" />
              <line x1="455" y1="150" x2="480" y2="150" />
            </g>

            {/* Ikon Code </> Kiri Bawah */}
            <g stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
              <rect x="70" y="420" width="80" height="60" rx="8" />
              <path d="M 95 435 L 80 450 L 95 465" />
              <path d="M 125 435 L 140 450 L 125 465" />
              <path d="M 115 430 L 105 470" />
            </g>

            {/* Jalur Sirkuit Halus (Background Belakang) */}
            <g stroke="currentColor" strokeWidth="2" className="opacity-10" fill="none">
              <path d="M 160 100 H 220 V 280 H 380 V 150 H 420" />
              <path d="M 160 450 H 280 V 380 H 440" />
            </g>
          </svg>
        </div>

        {/* 2. FOTO PROFIL UTAMA */}
        <div className="relative z-10 w-[260px] h-[330px] sm:w-[320px] sm:h-[410px] md:w-[380px] md:h-[490px] lg:w-[440px] lg:h-[540px] max-w-full overflow-hidden rounded-2xl sm:rounded-[2rem] bg-gradient-to-b from-neutral-800 to-black shadow-2xl border border-neutral-800">
          <Image
            src="/ilustrasi.jpg" 
            alt="Foto Ryan Hidayatullah"
            fill
            sizes="(max-width: 640px) 260px, (max-width: 768px) 320px, (max-width: 1024px) 380px, 440px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}