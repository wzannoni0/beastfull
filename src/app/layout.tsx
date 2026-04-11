import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ToastProvider } from "@/components/toast-provider";
import { StarsBackground } from "@/components/stars-background";
import { ParticleCanvas } from "@/components/particle-canvas";
import { MatrixRain } from "@/components/matrix-rain";
import { LoadingScreen } from "@/components/loading-screen";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LUNA_OS | Neural Network Platform",
  description: "LUNA_OS - Piattaforma premium con neural interface, progression system e team control.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative overflow-x-hidden">
        <LoadingScreen />
        <MatrixRain />
        <ParticleCanvas />
        <StarsBackground />
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
