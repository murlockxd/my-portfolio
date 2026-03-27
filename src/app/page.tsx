import Header from "../components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300">
      <Header />
      {/* O resto do site vai entrar aqui embaixo depois */}
      <section className="flex flex-col items-center justify-center py-20">
        <h1 className="text-4xl font-bold text-gray-800">Meu Portfólio</h1>
      </section>
    </main>
  );
}
