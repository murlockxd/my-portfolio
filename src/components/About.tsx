"use client";

import { Code2, Palette, Zap, Rocket, LucideIcon } from "lucide-react";
import Image from "next/image";
import profilePhoto from "../assets/profile-photo-2.png";
import { useGridSize } from "../hooks/useGridSize";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function About() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect to run only on client side
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";
  const bgSize = useGridSize(50);
  type Skill = {
    icon: LucideIcon;
    title: string;
    description: string;
    color: string;
    darkColor: string;
  };
  const skills: Skill[] = [
    {
      icon: Code2,
      title: "Development",
      description: "React, TypeScript, Node.js, Next.js",
      color: "#ff006e",
      darkColor: "#ff006e",
    },
    {
      icon: Palette,
      title: "Design",
      description: "UI/UX, Figma, Tailwind CSS",
      color: "#00b2d1",
      darkColor: "#00d9ff",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimization and Efficiency",
      color: "#ff5e00",
      darkColor: "#ffea00",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Always seeking new solutions",
      color: "#8b00ff",
      darkColor: "#8b00ff",
    },
  ];
  return (
    <section
      id="about"
      className="relative min-h-screen py-24 3xl:py-32 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20 dark:opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(139, 0, 255, 0.3) 1px, transparent 5px),
                              linear-gradient(90deg, rgba(139, 0, 255, 0.3) 1px, transparent 5px),
                              linear-gradient(to left, rgba(139, 0, 255, 0.3) 1px, transparent 5px)`,

            backgroundSize: `${bgSize} ${bgSize}, ${bgSize} ${bgSize}, 100% 100%`,
            backgroundRepeat: "repeat, repeat, no-repeat",
            backgroundPosition: "left top",
            transform: "perspective(1500px) rotateX(-50deg) translateZ(0)",
            transformOrigin: "center top",
            // camada de fade
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
            filter: "drop-shadow(0 0 0 rgba(139, 0, 255, 1))",
          }}
        ></div>
      </div>
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="text-center mb-16">
          <h2
            className="font-[family-name:var(--font-orbitron)] mb-4
            text-transparent bg-clip-text
            bg-[linear-gradient(135deg,#ff006e_0%,#00d9ff_100%)]"
            style={{ fontWeight: "900", fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            ABOUT ME
          </h2>
          {/* Linha colorida de separação */}
          <div className="w-24 h-1 bg-gradient-to-r from-[#ff006e] via-[#8b00ff] to-[#00d9ff] mx-auto rounded-full"></div>
        </div>
        {/* ÁREA PRINCIPAL */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 3xl:mb-20">
          {/* COLUNA ESQUERDA: FOTO */}
          <div className="relative group mx-auto w-full max-w-[200px] sm:max-w-sm 3xl:max-w-md">
            {/* EFEITO FOTO */}
            <div
              className="absolute inset-0 bg-gradient-to-br
                from-[#ff006e] to-[#8b00ff] rounded-2xl blur-xl opacity-30
                group-hover:opacity-50 transition-opacity duration-500"
            ></div>
            {/* CONTAINER */}
            <div className="relative aspect-auto rounded-2xl overflow-hidden border-2 border-[#ff006e] dark:border-[#ff006e]">
              {/* FOTO */}
              <Image
                src={profilePhoto}
                alt="My Profile Photo"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
          {/* COLUNA DA DIREITA: TEXTO */}
          <div className="space-y-6">
            <p
              className="font-[family-name:var(--font-rajdhani)] 
              text-gray-800 dark:text-gray-200"
              style={{ fontSize: "20px", fontWeight: "400", lineHeight: "1.5" }}
            >
              Hi, I'm Iago! I'm a Computer Science student and a developer
              fascinated by generating solutions through code. My specialties
              include{" "}
              <strong>
                Java, Spring Boot, SQL, HTML, CSS, JavaScript, Git
              </strong>{" "}
              and modern ecosystems like{" "}
              <strong>React, Tailwind CSS and Next.js</strong>.
            </p>
            <p
              className="font-[family-name:var(--font-rajdhani)] 
              text-gray-800 dark:text-gray-200"
              style={{ fontSize: "20px", fontWeight: "400", lineHeight: "1.5" }}
            >
              I built a solid logical foundation working with the structure and
              robustness of Java. I have a strong natural affinity for logic and
              learn new things very quickly. It was this adaptability that
              allowed me to expand my horizons into modern web development,
              focusing on creating dynamic and scalable applications.
            </p>
            <p
              className="font-[family-name:var(--font-rajdhani)] 
              text-gray-800 dark:text-gray-200"
              style={{ fontSize: "20px", fontWeight: "400", lineHeight: "1.5" }}
            >
              <strong>My journey</strong> in tech started at the roots: a
              curiosity for hardware and a passion for building computers piece
              by piece. Soon, that desire to understand physical machines
              naturally evolved into creating the software systems that bring
              them to life. And, as the visual of this portfolio already gives
              away, I am completely passionate about the cyberpunk aesthetic and
              the vibe of the 80s!
            </p>
          </div>
        </div>
        {/* ÁREA INFERIOR: CARDS DE SKILLS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const currentColor =
              isDark && skill.darkColor ? skill.darkColor : skill.color;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-xl 
                border bg-[#1a0033]/10 dark:bg-[#1a0033]/40
                transition-all duration-300 hover:scale-105"
                style={{ borderColor: `${currentColor}` }}
              >
                {/* Brilho no hover do card */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 
                  group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                  style={{ backgroundColor: `${currentColor}` }}
                ></div>
                {/* ICON AND TEXT */}
                <div className="relative z-10">
                  <div className="flex items-center mb-4 gap-4 3xl:block">
                    <div
                      className="w-10 3xl:w-14 h-10 3xl:h-14 rounded-lg flex 
                    items-center justify-center  3xl:mb-4"
                      style={{
                        backgroundColor: `${currentColor}20`,
                        border: `2px solid ${currentColor}40`,
                      }}
                    >
                      <Icon
                        className="size-5 3xl:size-7"
                        style={{ color: currentColor }}
                      ></Icon>
                    </div>
                    <h3
                      className="font-[family-name:var(--font-orbitron)]"
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        color: currentColor,
                      }}
                    >
                      {skill.title}
                    </h3>
                  </div>
                  <p
                    className="font-[family-name:var(--font-rajdhani)] text-gray-800 dark:text-gray-300"
                    style={{ fontSize: "16px", fontWeight: "700" }}
                  >
                    {skill.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
