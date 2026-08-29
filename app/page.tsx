import { NavBar } from "@/components/ui/navigation-menu";
import Hero from "@/components/hero";
import About from "@/components/about";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Portfolio from "@/components/portofolio";
import Experience from "@/components/experience";
import Pencapaian from "@/components/pencapaian";
import Kontak from "@/components/kontak";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <NavBar />

      {/* Animasi beam membungkus semua section KECUALI footer */}
      <BackgroundBeamsWithCollision className="w-full flex-1">
        <main className="w-full">
          <Hero />
          <About />
          <Portfolio />
          <Experience />
          <Pencapaian />
          <Kontak />
        </main>
      </BackgroundBeamsWithCollision>

      {/* Footer di LUAR beam — laser pecah tepat di atas sini */}
      <Footer />
    </div>
  );
}