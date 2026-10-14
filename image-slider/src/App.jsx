import { useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
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
 * ├── Header (marca + links EXPLORAR / SOBRE / avatar suporte + menu mobile)
 * ├── Hero / Introdução (Kicker dinâmico, título em 2 linhas, descrição, stack)
 * └── ImageSlider (Kicker de destaque, cartões inclinados, imagem, textos e controles)
 */

/**
 * SupportAvatar — Avatar de suporte na navbar
 * Exibe foto circular com indicador de status online e
 * abre um mini-card de contato ao clicar.
 */
function SupportAvatar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative" id="support-avatar">
      {/* Botão do avatar */}
      <button
        type="button"
        aria-label="Abrir suporte"
        aria-expanded={open}
        onClick={() => setOpen(prev => !prev)}
        className="relative flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mauve rounded-full cursor-pointer"
      >
        {/* Foto circular */}
        <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden ring-2 ring-[#E2DCF4] group-hover:ring-mauve transition-all duration-200 shadow-sm">
          <img
            src="/images/avatar.jpg"
            alt="Foto do suporte"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Indicador online (bolinha verde) */}
        <span
          className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-white rounded-full shadow-sm"
          aria-hidden="true"
        />

        {/* Label de suporte — apenas desktop */}
        <span className="hidden sm:flex flex-col items-start leading-none">
          <span className="text-[11px] font-black tracking-wider text-ink group-hover:text-mauve transition-colors uppercase">Suporte</span>
          <span className="text-[10px] text-emerald-500 font-semibold">● Online</span>
        </span>
      </button>

      {/* Popover card de suporte */}
      {open && (
        <>
          {/* Overlay invisível para fechar ao clicar fora */}
          <div
            className="fixed inset-0 z-30"
            aria-hidden="true"
            onClick={() => setOpen(false)}
          />

          <div
            role="dialog"
            aria-label="Chat de suporte"
            className="absolute right-0 top-14 z-40 w-72 bg-white rounded-2xl shadow-2xl border border-[#EDE8F8] overflow-hidden animate-[fadeInDown_0.2s_ease]"
            style={{ animation: 'fadeInDown 0.2s ease' }}
          >
            {/* Header do card */}
            <div className="bg-mauve px-5 py-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/40 shrink-0">
                <img
                  src="/images/avatar.jpg"
                  alt="Avatar do suporte"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-bold text-sm truncate">Equipe WILD / STORIES</p>
                <p className="text-white/70 text-xs flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full inline-block" />
                  Online agora
                </p>
              </div>
              <button
                type="button"
                aria-label="Fechar suporte"
                onClick={() => setOpen(false)}
                className="text-white/60 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Corpo do card */}
            <div className="px-5 py-4 space-y-3">
              <div className="bg-[#F4F1FC] rounded-xl rounded-tl-sm px-4 py-3 text-sm text-ink leading-relaxed">
                Olá! 👋 Bem-vindo ao <strong>WILD / STORIES</strong>.<br />
                Como posso te ajudar hoje?
              </div>

              <button
                type="button"
                id="support-chat-btn"
                className="w-full flex items-center justify-center gap-2 bg-mauve hover:bg-[#4E2B91] active:scale-[0.98] text-white text-sm font-bold py-3 rounded-xl transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                Iniciar conversa
              </button>

              <p className="text-center text-[11px] text-slate-400">
                Resposta típica em menos de 1 minuto
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

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

        {/* Links Desktop + Avatar de Suporte */}
        <div className="hidden sm:flex items-center gap-8">
          <nav aria-label="Navegação principal" className="flex items-center gap-8">
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

          {/* Separador */}
          <div className="w-px h-5 bg-[#E2DCF4]" aria-hidden="true" />

          {/* Avatar de Suporte */}
          <SupportAvatar />
        </div>

        {/* Mobile: avatar de suporte + menu hamburguer */}
        <div className="sm:hidden flex items-center gap-3">
          <SupportAvatar />
          <button
            type="button"
            aria-label="Abrir menu"
            className="p-1.5 rounded-lg text-ink hover:text-mauve focus-visible:ring-2 focus-visible:ring-mauve focus-visible:outline-none cursor-pointer"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
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
