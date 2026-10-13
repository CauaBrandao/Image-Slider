import { useState, useEffect } from 'react';
import { slides } from '../data/slides.js';
import SliderControls from './SliderControls.jsx';

/**
 * Componente ImageSlider
 * Arquitetura:
 * - Imagens (map a partir de slides)
 * - Conteúdo do slide ativo
 * - SliderControls (Anterior, Próximo, Indicadores, Contador 03 / 05)
 */
export default function ImageSlider() {
  // Inicia com o panda (índice 2) conforme especificação do roteiro
  const [index, setIndex] = useState(2);
  const activeSlide = slides[index];

  // Navegação circular
  const next = () => setIndex(current => (current + 1) % slides.length);
  const previous = () => setIndex(current => (current - 1 + slides.length) % slides.length);

  // Controle por teclado (setas ← e →) com limpeza de listener
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        setIndex(curr => (curr - 1 + slides.length) % slides.length);
      } else if (event.key === 'ArrowRight') {
        setIndex(curr => (curr + 1) % slides.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section
      aria-label="Galeria da vida selvagem"
      className="relative w-full max-w-lg mx-auto lg:max-w-none"
    >
      {/* Cartões inclinados no fundo com rotações estáticas (sem Math.random()) */}
      <div
        className="absolute inset-0 rounded-3xl bg-mauve/10 -rotate-3 sm:-rotate-6 transform transition-transform duration-500 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 rounded-3xl bg-white/70 border border-mauve/15 rotate-2 sm:rotate-3 shadow-md transform transition-transform duration-500 pointer-events-none"
        aria-hidden="true"
      />

      {/* Cartão principal do carrossel */}
      <article className="relative z-10 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-mauve/10 flex flex-col gap-6 backdrop-blur-sm">
        {/* Camada das Imagens com map() e transição suave */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-inner">
          {slides.map((slide, i) => {
            const isActive = i === index;
            return (
              <img
                key={slide.id}
                src={slide.image}
                alt={slide.alt}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out select-none ${
                  isActive
                    ? 'opacity-100 scale-100 z-10'
                    : 'opacity-0 scale-105 z-0 pointer-events-none'
                }`}
              />
            );
          })}
        </div>

        {/* Conteúdo do slide ativo: espécie, título, resumo e parágrafo */}
        <div className="flex flex-col gap-3 min-h-[140px] justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="inline-block text-xs font-semibold tracking-wider uppercase text-mauve bg-mauve/10 px-3 py-1 rounded-full border border-mauve/15">
                {activeSlide.badge}
              </span>
              <span className="text-xs italic text-slate-400">
                {activeSlide.species}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight transition-all duration-300">
              {activeSlide.animal}
            </h2>

            <p className="text-xs sm:text-sm font-semibold text-mauve/90">
              {activeSlide.summary}
            </p>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {activeSlide.description}
            </p>
          </div>

          {/* SliderControls integrado */}
          <SliderControls
            index={index}
            count={slides.length}
            onPrevious={previous}
            onNext={next}
            onSelect={setIndex}
          />
        </div>
      </article>
    </section>
  );
}
