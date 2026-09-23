import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Ryan Hidayatullah | Portfolio",
  description: "Portofolio Ryan Hidayatullah - Junior Penetration Tester dan Full-Stack Web Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased scroll-smooth scroll-pt-24`}
    >
      <body className={`bg-background text-foreground ${jakarta.className} overflow-x-hidden min-h-screen`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
