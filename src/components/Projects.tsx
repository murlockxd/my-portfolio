"use client";

import { useEffect, useState } from "react";
import { ExternalLink, X } from "lucide-react";
import { useTheme } from "next-themes";
import { projectsData, Project } from "../data/projects";
import { GithubIcon } from "./Icons";

const MODAL_ANIMATION_MS = 300;

export default function Projects() {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  const getProjectColor = (project: Project) =>
    isDark ? project.darkColor : project.color;

  const openModal = (project: Project) => {
    if (project.status === "coming-soon") return;

    setSelectedProject(project);

    // Faz o modal montar e só então ativa o estado visual aberto
    requestAnimationFrame(() => {
      setIsModalVisible(true);
    });
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);

    setTimeout(() => {
      setSelectedProject(null);
    }, MODAL_ANIMATION_MS);
  };

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const modalColor = selectedProject ? getProjectColor(selectedProject) : "";

  return (
    <section
      id="projects"
      className="relative min-h-screen pt-24 pb-12 3xl:pt-32 3xl:pb-20 px-6 overflow-hidden 
      bg-[linear-gradient(to_bottom,#fefaff_88%,#f0f9fb_90%,#e1f4f7_92%,#b3e3ec_95%,#95d7e4_97%,#67c6d8_100%)]
      dark:bg-[linear-gradient(to_bottom,#0a0015_0%,#0a0015_75%,#0c101c_100%)]
      transition-colors duration-300"
    >
      <style>{`
        @keyframes float-blue {
          0%, 100% { transform: translate(0, -50%); }
          50% { transform: translate(calc(100vw - 30rem), -50%); }
        }

        @keyframes float-pink {
          0%, 100% { transform: translate(0, -50%); }
          50% { transform: translate(calc(-100vw + 30rem), -50%); }
        }

        .animate-orb-blue {
          animation: float-blue 20s ease-in-out infinite;
        }

        .animate-orb-pink {
          animation: float-pink 20s ease-in-out infinite;
        }
      `}</style>

      {/* Orbs animadas */}
      <div
        className="absolute top-1/2 left-0 w-[30rem] h-[30rem] bg-[#ff5e00]
                   rounded-full blur-[150px] opacity-40 dark:opacity-20
                   pointer-events-none animate-orb-blue"
      ></div>

      <div
        className="absolute top-1/2 right-0 w-[30rem] h-[30rem] bg-[#8b00ff]
                   rounded-full blur-[150px] opacity-30 dark:opacity-20
                   pointer-events-none animate-orb-pink"
      ></div>

      <div className="container mx-auto max-w-7xl 2xl:max-w-[1600px] relative z-10 min-h-[calc(100svh-10rem)] 3xl:min-h-[calc(100svh-16rem)] flex flex-col ">
        <div className="text-center mb-16">
          <h2
            className="font-[family-name:var(--font-orbitron)] mb-4 text-transparent bg-clip-text
            bg-[linear-gradient(135deg,#00d9ff_0%,#8b00ff_50%,#ff006e_100%)]"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: "900" }}
          >
            PROJECTS
          </h2>
          {/* Linha colorida de separação */}
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d9ff] via-[#8b00ff] to-[#ff006e] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 2xl:gap-10 flex-1 content-start xl:content-center">
          {projectsData.map((project) => {
            const currentColor = getProjectColor(project);
            const isComingSoon = project.status === "coming-soon";

            return (
              <div key={project.id} className="group relative ">
                {/* Glow do card */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl pointer-events-none"
                  style={{ backgroundColor: currentColor }}
                ></div>

                <div
                  className="relative flex h-full flex-col rounded-2xl bg-white/40 dark:bg-[#1a0033]/40 border 
                  overflow-hidden transition-transform duration-300 ease-out
                  transform-gpu will-change-transform 
                  group-hover:-translate-y-2 group-hover:scale-[1.015]"
                  style={{ borderColor: `${currentColor}40` }}
                >
                  {/* Imagem */}
                  <div
                    className="relative aspect-video rounded-t-2xl overflow-hidden border-b-2"
                    style={{ borderColor: `${currentColor}30` }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover origin-center scale-[1.03] 
                      transform-gpu will-change-transform
                      transition-transform duration-500 ease-out 
                      group-hover:scale-100"
                    />

                    {/* Overlay responsivo */}
                    <div className="absolute -inset-px bg-gradient-to-t from-black/45 via-black/10 to-transparent opacity-60"></div>
                    <div className="absolute -inset-px bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>

                    {/* Botões flutuantes */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open ${project.title} on GitHub`}
                          className="p-3 rounded-xl border backdrop-blur-md transition-transform duration-200 hover:scale-110 z-20"
                          style={{
                            backgroundColor: `${currentColor}20`,
                            borderColor: currentColor,
                          }}
                        >
                          <GithubIcon
                            className="size-6"
                            style={{ color: currentColor }}
                          />
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open live demo for ${project.title}`}
                          className="p-3 rounded-xl border backdrop-blur-md transition-transform duration-200 hover:scale-110 z-20"
                          style={{
                            backgroundColor: `${currentColor}20`,
                            borderColor: currentColor,
                          }}
                        >
                          <ExternalLink
                            className="size-5"
                            style={{ color: currentColor }}
                          />
                        </a>
                      )}
                    </div>

                    {/* Badge */}
                    {isComingSoon && (
                      <div
                        className="absolute top-4 right-4 px-3 py-1 rounded-md border z-10"
                        style={{
                          backgroundColor: `${currentColor}20`,
                          borderColor: `${currentColor}50`,
                          color: currentColor,
                        }}
                      >
                        <span className="font-[family-name:var(--font-orbitron)] text-xs font-bold tracking-wider">
                          COMING SOON
                        </span>
                      </div>
                    )}
                  </div>
                  {/* Conteúdo */}
                  <div
                    className="relative p-6 z-10 flex flex-col flex-1 
                               transition-transform duration-300 ease-out
                               transform-gpu will-change-transform
                               origin-center
                               group-hover:scale-[0.9852]"
                  >
                    {/* scale 1.015 efeito ficou legal tmb */}
                    <h3
                      className="font-[family-name:var(--font-orbitron)] mb-3"
                      style={{
                        fontSize: "22px",
                        fontWeight: "700",
                        color: currentColor,
                      }}
                    >
                      {project.title}
                    </h3>
                    {/* Tags abaixo do título */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 rounded-md font-[family-name:var(--font-rajdhani)] border"
                          style={{
                            fontSize: "14px",
                            fontWeight: "600",
                            backgroundColor: `${currentColor}10`,
                            borderColor: `${currentColor}30`,
                            color: currentColor,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p
                      className="font-[family-name:var(--font-rajdhani)] text-gray-800 dark:text-gray-300 mb-6 flex-1"
                      style={{
                        fontSize: "16px",
                        fontWeight: "700",
                        lineHeight: "1.5",
                      }}
                    >
                      {project.shortDescription}
                    </p>
                    <button
                      onClick={() => openModal(project)}
                      disabled={isComingSoon}
                      className="w-full py-3 rounded-lg font-[family-name:var(--font-orbitron)] 
                                text-sm font-bold tracking-widest transition-transform 
                                transform-gpu will-change-transform
                                duration-200 border cursor-pointer hover:scale-[0.9852] 
                                hover:opacity-100 disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{
                        borderColor: `${currentColor}40`,
                        color: currentColor,
                        backgroundColor: `${currentColor}10`,
                        boxShadow: isComingSoon
                          ? "none"
                          : `0 0 0px ${currentColor}`,
                      }}
                      onMouseEnter={(e) => {
                        if (!isComingSoon) {
                          e.currentTarget.style.boxShadow = `0 0 18px ${currentColor}35`;
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      {isComingSoon ? "COMING SOON" : "LEARN MORE"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedProject && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
            !isModalVisible ? "pointer-events-none" : ""
          }`}
        >
          <div
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-400 ease-out ${
              isModalVisible ? "opacity-100" : "opacity-0"
            }`}
            onClick={handleCloseModal}
          ></div>

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className={`relative w-full max-w-2xl rounded-2xl bg-[#fefaff] dark:bg-[#0a0a0a] 
              border shadow-2xl overflow-hidden transform-gpu will-change-transform transition-all duration-400 ease-out ${
                isModalVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-100 scale-5"
              }`}
            style={{
              borderColor: modalColor,
              boxShadow: `0 0 50px ${modalColor}30`,
            }}
          >
            <button
              onClick={handleCloseModal}
              aria-label="Close project modal"
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 z-20 transition-colors"
            >
              <X className="size-5" />
            </button>

            <div
              className="relative h-48 sm:h-64 overflow-hidden border-b-2"
              style={{
                borderColor: `${modalColor}30`,
                boxShadow: `0 0 50px ${modalColor}30`,
              }}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#fefaff]/90 via-[#fefaff]/0 via-20% dark:from-[#0a0a0a] dark:via-[#0a0a0a]/0 to-transparent"></div>
            </div>

            <div className="p-6 sm:p-8 relative z-10 -mt-12">
              <h3
                id="project-modal-title"
                className="font-[family-name:var(--font-orbitron)] mb-4 text-2xl sm:text-3xl font-bold"
                style={{ color: modalColor }}
              >
                {selectedProject.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full font-[family-name:var(--font-rajdhani)] text-sm font-bold border"
                    style={{
                      backgroundColor: `${modalColor}10`,
                      borderColor: `${modalColor}40`,
                      color: modalColor,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p
                className="font-[family-name:var(--font-rajdhani)] text-gray-800 dark:text-gray-200 mb-8"
                style={{ fontSize: "18px", lineHeight: "1.6" }}
              >
                {selectedProject.fullDescription}
              </p>

              <div className="flex gap-4">
                {selectedProject.github && (
                  <div className="relative flex-1 group/code py-6">
                    <div
                      className="absolute inset-0 rounded-lg border
                                 pointer-events-none
                                 transition-transform duration-200 ease-out
                                 group-hover/code:scale-[1.02]"
                      style={{
                        borderColor: modalColor,
                        backgroundColor: `${modalColor}10`,
                      }}
                    ></div>
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View code for ${selectedProject.title}`}
                      className="absolute inset-0 z-10 flex gap-2 
                                 justify-center items-center 
                                 transition-opacity duration-200
                                 hover:opacity-70"
                      style={{
                        color: modalColor,
                      }}
                    >
                      <GithubIcon className="size-5" />
                      <span className="font-[family-name:var(--font-orbitron)] font-bold text-sm tracking-wider transition-transform hover:scale-[1]">
                        VIEW CODE
                      </span>
                    </a>
                  </div>
                )}

                {selectedProject.live && (
                  <div className="relative flex-1 group/live py-6">
                    <div
                      className="absolute inset-0 rounded-lg
                                point-events-none
                                transition-transform duration-200 ease-out
                                group-hover/live:scale-[1.02]"
                      style={{ backgroundColor: modalColor }}
                    ></div>
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open live demo for ${selectedProject.title}`}
                      className="absolute inset-0 z-10 gap-2 
                               flex items-center justify-center
                               transition-opacity duration-200
                               hover:opacity-70"
                      style={{
                        color: isDark ? "#000" : "#fff",
                      }}
                    >
                      <ExternalLink className="size-5" />
                      <span className="font-[family-name:var(--font-orbitron)] font-bold text-sm tracking-wider">
                        LIVE DEMO
                      </span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
