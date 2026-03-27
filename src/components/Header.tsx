"use client"; // Linha obrigatoria no NEXT.JS (rodar no client-side)

import { Mail, Sun, Moon } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 
        border-b border-[#ff006e]/50 backdrop-blur-md bg-white/80 dark:bg-black/80"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Lado Esquerdo: Logo/Nome */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 blur-xl bg-[#ff006e] opacity-50"></div>
              <h1
                className="relative font-[family-name:var(--font-orbitron)] tracking-wider neon-text"
                style={{
                  fontSize: "28px",
                  fontWeight: "900",
                  background:
                    "linear-gradient(135deg, #ff006e 0%, #00d9ff 50%, #ffea00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 20px rgba(255, 0, 110, 0.5)",
                }}
              >
                PORTIFOLIO
              </h1>
            </div>
          </div>

          {/* Centro: Links de Navegação */}
          <nav className="flex items-center gap-6">
            <a
              href="#sobre"
              className="
              text-gray-800
              dark:text-gray-200
              font-[family-name:var(--font-rajdhani)] 
              tracking-wide hover:text-[#ff006e] 
              transition-colors duration-300"
              style={{ fontWeight: "600" }}
            >
              SOBRE
            </a>
            <a
              href="#projetos"
              className="
              text-gray-800
              dark:text-gray-200
              font-[family-name:var(--font-rajdhani)] 
              tracking-wide hover:text-[#00d9ff] 
              transition-colors duration-300"
              style={{ fontWeight: "600" }}
            >
              PROJETOS
            </a>
            <a
              href="#contato"
              className="
              text-gray-800
              dark:text-gray-200
              font-[family-name:var(--font-rajdhani)] 
              tracking-wide hover:text-[#ffea00] 
              transition-colors duration-300"
              style={{ fontWeight: "600" }}
            >
              CONTATO
            </a>
          </nav>

          {/* Lado Direito: Social Links */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg border 
              border-[#ff006e]/30 
              hover:border-[#ff006e] 
              hover:bg-[#ff006e]/10 
              transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="size-5 text-[#ffea00]" />
              ) : (
                <Moon className="size-5 text-[#8b00ff]" />
              )}
            </button>
            <a
              href="https://github.com/murlockxd"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border 
              border-[#ff006e]/30 
              hover:border-[#ff006e] 
              hover:bg-[#ff006e]/10 
              transition-all duration-300
              text-gray-800 dark:text-gray-200"
            >
              <GithubIcon />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-[#00d9ff]/30 hover:border-[#00d9ff] hover:bg-[#00d9ff]/10 transition-all duration-300 text-gray-800 dark:text-gray-200"
            >
              <LinkedinIcon />
            </a>
            <a
              href="mailto:contato@exemplo.com"
              className="p-2 rounded-lg border border-[#ffea00]/30 hover:border-[#ffea00] hover:bg-[#ffea00]/10 transition-all duration-300 text-gray-800 dark:text-gray-200"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
