import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fefaff] dark:bg-[#0a0015] transition-colors duration-300">
      <Header />
      <Hero />
      <About />
      <Projects />
      {/* O resto do site vai entrar aqui embaixo depois */}
      <section className="flex flex-col items-center justify-center py-20">
        <h1 className="text-4xl font-bold text-gray-800">Meu Portfólio</h1>
      </section>
    </main>
  );
}
