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
    <section className="container mx-auto flex flex-col md:flex-row items-center justify-center pt-30 px-6 md:px-16 py-12 gap-8 ">
      <div className="flex-1 flex flex-col items-start text-left space-y-4">
        <h2 className="text-4xl font-bold tracking-wider text-gray-200">Halo, Saya</h2>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white">
          Ryan Hidayatullah
        </h1>
        <h3 className="text-xl md:text-4xl font-bold">
          <span className="text-gray-300">
            Junior Penetration Tester dan Full-Stack Web Developer
          </span>
        </h3>
        <p className="text-gray-400 text-lg max-w-md leading-relaxed mt-6">
          Mahasiswa UIN Syarif Hidayatullah Jakarta. Berpengalaman dalam
          penetration testing dan full-stack web development.
        </p>

        {/* Ikon Sosial Media */}
        {/* Ikon Sosial Media yang sudah dinamis */}
        <div className="flex gap-4 pt-4">
          {socialLinks.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="p-2.5 rounded-full border-2 border-gray-500 text-gray-400 hover:bg-gray-300 hover:text-black hover:border-gray-300 transition-all shadow-[0_0_10px_rgba(156,163,175,0.2)] hover:shadow-[0_0_20px_rgba(156,163,175,0.6)]"
              >
                <IconComponent className="size-5" />
              </a>
            );
          })}
        </div>

        {/* Tombol Download CV */}
        <a href="/Cv.pdf" download="Ryan_Hidayatullah_CV.pdf">
          <Button className="mt-8 rounded-full bg-black text-white font-bold px-8 py-6 text-lg hover:bg-neutral-900   shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all">
            Download CV
          </Button>
        </a>
      </div>

      {/* KOLOM KANAN: Foto Profil */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-[280px] h-[360px] md:w-[440px] md:h-[540px] overflow-hidden rounded-[2rem] bg-gradient-to-b from-neutral-800 to-black shadow-2xl">
          <Image
            src="/profile.jpeg" 
            alt="Foto Ryan Hidayatullah"
            fill
            sizes="(max-width: 768px) 280px, 440px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}