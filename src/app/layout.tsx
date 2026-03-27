import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-rajdhani",
});

export const metadata: Metadata = {
  title: "Iago | Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning é necessário para o next-themes funcionar sem erros
    <html
      lang="pt-BR"
      className={`${geistSans.variable} 
      ${geistMono.variable} h-full antialiased 
      ${orbitron.variable} ${rajdhani.variable}`}
      suppressHydrationWarning
    >
      {/* Aqui já deixamos o fundo da página preparado para mudar de cor suavemente */}
      <body className="bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
