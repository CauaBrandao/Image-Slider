import { useState } from 'react';
import { Menu } from 'lucide-react';
import Background from './components/Background.jsx';
import ImageSlider from './components/ImageSlider.jsx';
import { slides } from './data/slides.js';

/**
 * Componente Raiz App fiel ao Figma do professor:
 * Artboards: Desktop (1440 × 900) e Mobile (390 × 844)
 * Identidade: WILD / STORIES
 * Arquitetura:
 * App
 * ├── Background (com forma lilás no topo direito)
 * ├── Header (marca + links EXPLORAR / SOBRE / menu mobile)
 * ├── Hero / Introdução (Kicker dinâmico, título em 2 linhas, descrição, stack)
 * └── ImageSlider (Kicker de destaque, cartões inclinados, imagem, textos e controles)
 */
export default function App() {
  // Inicia com o Panda (índice 2) conforme o artboard do Figma
  const [index, setIndex] = useState(2);

  // Navegação circular
  const next = () => setIndex(curr => (curr + 1) % slides.length);
  const previous = () => setIndex(curr => (curr - 1 + slides.length) % slides.length);

  const formattedCurrent = String(index + 1).padStart(2, '0');
  const formattedTotal = String(slides.length).padStart(2, '0');

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-lavender text-ink flex flex-col justify-between selection:bg-mauve selection:text-white">
      {/* 1. Background com ambiência e a forma arredondada lilás no canto superior direito */}
      <Background />

      {/* 2. Header */}
      <header className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pt-8 pb-4 flex items-center justify-between z-20">
        <a href="#" className="flex items-center gap-1 group focus-visible:outline-none">
          <strong className="text-lg sm:text-xl font-black tracking-widest text-ink group-hover:text-mauve transition-colors">
            WILD <span className="text-mauve font-light">/</span> STORIES
          </strong>
        </a>

        {/* Links Desktop (posicionados sobre a área lilás) */}
        <nav aria-label="Navegação principal" className="hidden sm:flex items-center gap-8">
          <a
            href="#explorar"
            className="text-xs font-bold tracking-widest uppercase text-ink/80 hover:text-mauve transition-colors"
          >
            EXPLORAR
          </a>
          <a
            href="#sobre"
            className="text-xs font-bold tracking-widest uppercase text-ink/80 hover:text-mauve transition-colors"
          >
            SOBRE
          </a>
        </nav>

        {/* Menu Hamburguer Mobile */}
        <button
          type="button"
          aria-label="Abrir menu"
          className="sm:hidden p-1.5 rounded-lg text-ink hover:text-mauve focus-visible:ring-2 focus-visible:ring-mauve focus-visible:outline-none cursor-pointer"
        >
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* 3. Grid Principal de Conteúdo (Hero na coluna esquerda + ImageSlider na direita) */}
      <main className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-8 lg:py-12 grid gap-10 lg:gap-16 lg:grid-cols-2 lg:items-center my-auto z-10">
        {/* Coluna Esquerda: Hero / Introdução */}
        <section className="flex flex-col justify-center space-y-6 lg:space-y-8">
          {/* Kicker Superior Dinâmico (Figma: EXPLORAÇÃO • 03 / 05) */}
          <div className="text-xs font-bold tracking-wider uppercase text-mauve">
            EXPLORAÇÃO • {formattedCurrent} / {formattedTotal}
          </div>

          {/* Título Principal em 2 linhas */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-ink tracking-tight leading-[1.12]">
            A natureza em <br className="hidden sm:inline" />
            cada detalhe.
          </h1>

          {/* Descrição fiel ao Figma */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md">
            Descubra espécies extraordinárias em uma experiência visual interativa. Navegue entre imagens e conheça curiosidades do mundo animal.
          </p>

          {/* Tag de tecnologias no rodapé da coluna esquerda (Figma) */}
          <div className="pt-4 lg:pt-12 text-[11px] sm:text-xs font-semibold tracking-widest text-slate-400 uppercase select-none">
            REACT • TAILWIND CSS • JAVASCRIPT
          </div>
        </section>

        {/* Coluna Direita: ImageSlider */}
        <div className="w-full flex justify-center lg:justify-end">
          <ImageSlider
            index={index}
            onPrevious={previous}
            onNext={next}
            onSelect={setIndex}
          />
        </div>
      </main>

      {/* Espaçador inferior invisível para manter equilíbrio vertical */}
      <div className="h-6 pointer-events-none" aria-hidden="true" />
    </div>
  );
}
