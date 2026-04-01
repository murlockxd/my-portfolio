"use client";
import Image from "next/image";
import avatarLight from "../assets/avatar-light.svg";
import avatarDark from "../assets/avatar-dark.svg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fundo de grade animada com opacidade controlada para claro/escuro */}
      <div className="absolute inset-0 opacity-20 dark:opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(139, 0, 255, 0.3) 1px, transparent 5px),
                              linear-gradient(90deg, rgba(139, 0, 255, 0.3) 1px, transparent 5px)`,
            backgroundSize: "50px 50px",
            transform: "perspective(500px) rotateX(50deg)",
            transformOrigin: "center bottom",
          }}
        ></div>
      </div>
      {/* Esferas brilhantes (Ajustadas para não ofuscarem muito no modo claro) */}
      <div
        className="
        absolute top-20 left-20 w-96 h-96 
        bg-[#ff006e] rounded-full blur-[180px] 
        opacity-20 dark:opacity-30 animate-pulse"
      ></div>
      <div
        className="
        absolute bottom-20 right-20 w-96 h-96
        bg-[#00d9ff] rounded-full blur-[180px] 
        opacity-20 dark:opacity-30 animate-pulse"
      ></div>
      <div
        className="
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96
        bg-[#8b00ff] rounded-full blur-[200px] 
        opacity-15 dark:opacity-25 animate-pulse"
        style={{ animationDelay: "3s" }}
      ></div>
      {/* Conteúdo Principal (mt-20 compensa o espaço do cabeçalho fixo) */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-5 flex flex-col items-center">
        {/* Área do Avatar com Neon */}
        <div className="relative w-80 h-60 mb-8 mx-auto flex justify-center group">
          {/* Neon LIGHT (Rosa/Amarelo - Warm) */}
          <div
            className="absolute inset-10 rounded-full 
                       transition-all duration-500 ease-in-out
                       opacity-80 dark:opacity-0 blur-2xl
                       bg-[linear-gradient(0deg,#ff006e,#ffea00)]"
          ></div>
          {/* Neon DARK (Ciano/Púrpura - Cool) */}
          <div
            className="absolute inset-10 rounded-full 
                       transition-all duration-500 ease-in-out
                       opacity-0 dark:opacity-60 blur-2xl
                       bg-[linear-gradient(135deg,#00d9ff,#8b00ff)]"
          ></div>
          <div className="relative z-10 w-full h-full">
            {/* Avatar LIGHT */}
            <Image
              src={avatarLight}
              alt="Iago Ilustração (Modo Claro)"
              className="absolute inset-0 w-full h-full 
                       transition-all duration-500 ease-in-out
                       opacity-100 scale-100 dark:opacity-0 dark:scale-90"
              /* ^ Explicando (Zoom): Opacidade 100%. No escuro, opacidade 0 e diminui de tamanho sutilmente */
            />

            {/* Avatar DARK */}
            <Image
              src={avatarDark}
              alt="Iago Ilustração (Modo Escuro)"
              className="absolute inset-0 w-full h-full 
                       transition-all duration-500 ease-in-out
                       opacity-0 scale-90 dark:opacity-100 dark:scale-100"
              /* ^ Explicando (Zoom): Opacidade 0. No escuro, opacidade 100% e aumenta de tamanho sutilmente */
            />
          </div>
        </div>
        <div className="mb-6">
          <p
            className="font-[family-name:var(--font-rajdhani)] 
            tracking-[0.3em] mb-4 text-[#00d9ff] uppercase"
            style={{ fontSize: "18px", fontWeight: "500" }}
          >
            WELCOME TO THE FUTURE
          </p>
        </div>
        <h1
          className="font-[family-name:var(--font-orbitron)] mb-6 
             text-transparent bg-clip-text
             bg-[linear-gradient(135deg,#ff006e_0%,#00d9ff_50%,#ff5e00_100%)]
             dark:bg-[linear-gradient(135deg,#ff006e_0%,#00d9ff_50%,#ffea00_100%)]"
          style={{
            fontSize: "clamp(48px, 8vw, 96px)",
            fontWeight: "900",
            lineHeight: "1.1",
            textShadow: "0 0 40px rgba(255, 0, 110, 0.3)",
          }}
        >
          FULL STACK <br /> DEVELOPER
        </h1>
        <p
          className="font-[family-name:var(--font-rajdhani)] max-w-2xl
          mx-auto mb-12 text-gray-700 dark:text-gray-300"
          style={{ fontSize: "24px", fontWeight: "400", lineHeight: "1.6" }}
        >
          Creating digital experiences with modern technologies and a portfolio
          with a touch of 80s nostalgia.
        </p>

        <div className="flex gap-6 justify-center flex-wrap">
          <a
            href="#projects"
            className="group relative px-8 py-4 
            font-[family-name:var(--font-rajdhani)] 
            tracking-wider overflow-hidden rounded-lg 
            flex items-center justify-center"
            style={{ fontWeight: "700", fontSize: "18px" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff006e] to-[#8b00ff] opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#00d9ff] to-[#ff5e00] dark:to-[#ffea00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 text-white group-hover:text-black mt-[1px]">
              JUMP TO PROJECTS
            </span>
          </a>
          <a
            href="#contact"
            className="group relative px-16 py-4 
            font-[family-name:var(--font-rajdhani)]
            tracking-wider rounded-lg border-2 
            overflow-hidden border-[#00d9ff]
            flex items-center justify-center"
            style={{ fontWeight: "700", fontSize: "18px" }}
          >
            <div className="absolute inset-0 bg-[#00d9ff] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <span className="relative z-10 text-transparent mt-[1px] bg-gradient-to-r bg-clip-text from-[#ff006e] to-[#8b00ff] dark:from-[#00d9ff] dark:to-[#ffea00]">
              GET IN TOUCH
            </span>
          </a>
        </div>

        {/* Indicador de Scroll animado */}
        <div
          className="absolute bottom-10 left-[51%]
          -translate-x-0 animate-bounce"
        >
          <div className="w-6 h-10 border-2 border-[#ff006e] rounded-full p-1">
            <div className="w-1 h-3 bg-[#ff006e] rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
