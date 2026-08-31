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

      Untuk membuat efek gambar ornamen teknologi (garis sirkuit, ikon server) yang melayang di belakang foto profil, Anda harus menggunakan teknik Absolute Positioning dan Z-Index di Tailwind CSS.

Anda perlu membungkus elemen foto Anda dengan sebuah container, lalu meletakkan gambar latar belakang dengan posisi absolute dan z-index yang lebih rendah (-z-10), sehingga posisinya tertumpuk di belakang foto utama Anda.

Berikut adalah kode yang sudah diperbarui khusus untuk bagian KOLOM KANAN. Ganti bagian KOLOM KANAN di kode Anda dengan kode di bawah ini:

JavaScript
      {/* KOLOM KANAN: Foto Profil & Background Tech */}
      <div className="flex-1 flex justify-center items-center w-full mt-10 md:mt-0 relative min-h-[400px]">
        
        {/* 1. BACKGROUND ORNAMEN TECH (Di Belakang) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none -z-10 scale-125 md:scale-150">
          {/* Jika Anda punya gambar aset sendiri (misal tech-bg.png), gunakan tag Image Next.js ini: */}
          {/* <Image src="/tech-bg.png" alt="Tech Background" fill className="object-contain" /> */}

          {/* Atau, sebagai contoh instan, ini adalah inline SVG ala sirkuit & server: */}
          <svg className="w-full h-full max-w-[600px] text-neutral-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Garis Sirkuit Atas */}
            <path d="M 10 80 L 50 80 L 70 40 L 130 40" strokeDasharray="3 3" />
            <circle cx="10" cy="80" r="2" fill="currentColor" />
            <circle cx="130" cy="40" r="2" fill="currentColor" />
            
            {/* Garis Sirkuit Bawah */}
            <path d="M 190 120 L 150 120 L 130 160 L 70 160" />
            <circle cx="190" cy="120" r="2" fill="currentColor" />
            <circle cx="70" cy="160" r="2" fill="currentColor" />

            {/* Ikon ala Server di Kanan Atas */}
            <rect x="140" y="25" width="24" height="30" rx="2" />
            <line x1="145" y1="32" x2="159" y2="32" />
            <line x1="145" y1="40" x2="159" y2="40" />
            <line x1="145" y1="48" x2="152" y2="48" />

            {/* Ikon ala Kode di Kiri Bawah */}
            <rect x="25" y="140" width="30" height="24" rx="2" />
            <polyline points="32,147 28,152 32,157" />
            <polyline points="48,147 52,152 48,157" />
            <line x1="42" y1="147" x2="38" y2="157" />
          </svg>
        </div>

        {/* 2. FOTO PROFIL UTAMA (Di Depan) */}
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