// src/data/projects.ts

export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  tags: string[];
  color: string;
  darkColor: string;
  github?: string;
  live?: string;
  status: "live" | "coming-soon";
};

export const projectsData: Project[] = [
  {
    id: "cyberpunk-portfolio",
    title: "Cyberpunk Portfolio",
    shortDescription:
      "A highly interactive, retro-futuristic personal portfolio.",
    fullDescription:
      "Designed from scratch with a cyberpunk aesthetic, featuring dynamic theme switching, responsive grid calculations via Custom Hooks, and custom animations. Built to showcase my journey from hardware enthusiast to full-stack developer.",
    image:
      "https://images.unsplash.com/photo-1621855013629-0b53571d07a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    color: "#ff006e",
    darkColor: "#ff006e",
    github: "https://github.com/seu-usuario/portfolio",
    live: "https://seusite.com",
    status: "live",
  },
  {
    id: "wealth-wise-mate",
    title: "WealthWiseMatePro",
    shortDescription:
      "Desktop application for financial management with complex table logic.",
    fullDescription:
      "A robust desktop application built to handle complex financial data structures. It features a custom-styled, interactive table-based interface, managing state and data flow securely entirely offline.",
    image:
      "https://images.unsplash.com/photo-1719651543718-30e0e640272d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Java", "JavaFX", "Desktop", "OOP"],
    color: "#8b00ff",
    darkColor: "#00d9ff",
    github: "https://github.com/seu-usuario/wealthwisemate",
    status: "live",
  },
  {
    id: "deception-logic",
    title: "Board Game Logic Engine",
    shortDescription:
      "Core logic and game state management for a virtual Deception-style game.",
    fullDescription:
      "A logic engine aiming to translate complex board game rules into robust code. Focuses on state machines, real-time sync planning, and strict game phase validations using Object-Oriented principles.",
    image:
      "https://images.unsplash.com/photo-1767481626772-b5da73fd2584?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Java", "Spring Boot", "WebSockets"],
    color: "#ff5e00",
    darkColor: "#ffea00",
    status: "coming-soon",
  },
];
