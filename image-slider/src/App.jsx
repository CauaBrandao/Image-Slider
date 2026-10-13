import Background from './components/Background.jsx';
import ImageSlider from './components/ImageSlider.jsx';

/**
 * Arquitetura de Componentes da Aplicação:
 * App
 * ├── Background
 * ├── Header
 * ├── Hero / Introdução
 * └── ImageSlider
 *     ├── Imagens (map a partir de slides)
 *     ├── Conteúdo do slide ativo
 *     └── SliderControls
 *         ├── Botão anterior
 *         ├── Botão próximo
 *         ├── Indicadores de página
 *         └── Contador 03 / 05
 */
export default function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-lavender text-ink flex flex-col justify-between selection:bg-mauve selection:text-white">
      {/* 1. Background com ambiência e cartões inclinados */}
      <Background />

      {/* 2. Header */}
      <header className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-8 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-mauve animate-pulse" />
          <strong className="text-xl sm:text-2xl font-black tracking-widest text-ink font-serif">
            WILD <span className="text-mauve font-light">/</span> STORIES
          </strong>
        </div>

        <nav aria-label="Navegação secundária">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-mauve bg-mauve/10 px-3.5 py-1.5 rounded-full border border-mauve/15">
            Coleção 2026
          </span>
        </nav>
      </header>

      {/* 3. Grid Principal: Hero / Introdução + ImageSlider */}
      <main className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-8 lg:py-16 grid gap-12 lg:gap-16 lg:grid-cols-2 lg:items-center my-auto">
        {/* Hero / Introdução */}
        <section className="space-y-6 lg:space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mauve/10 border border-mauve/20 text-mauve text-xs font-semibold uppercase tracking-wider">
            Fotografia & Vida Selvagem
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink tracking-tight leading-[1.12]">
            A natureza em cada detalhe.
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-slate-600 max-w-xl">
            Descubra espécies extraordinárias através de uma experiência imersiva com fotografia editorial, fatos fascinantes e navegação intuitiva.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-1.5 bg-white/70 px-3 py-1.5 rounded-full border border-mauve/10 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-mauve" /> 5 Espécies Selecionadas
            </span>
            <span className="flex items-center gap-1.5 bg-white/70 px-3 py-1.5 rounded-full border border-mauve/10 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500" /> Navegação Circular
            </span>
            <span className="hidden sm:flex items-center gap-1.5 bg-white/70 px-3 py-1.5 rounded-full border border-mauve/10 shadow-xs">
              Atalhos de Teclado (← / →)
            </span>
          </div>
        </section>

        {/* 4. ImageSlider */}
        <div className="w-full">
          <ImageSlider />
        </div>
      </main>

      {/* Rodapé institucional */}
      <footer className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-6 text-center text-xs text-slate-400">
        <p>WILD / STORIES — Experiência visual interativa desenvolvida com React, Vite e Tailwind CSS v4.</p>
      </footer>
    </div>
  );
}
