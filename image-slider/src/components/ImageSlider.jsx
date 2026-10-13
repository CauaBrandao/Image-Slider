import { useEffect } from 'react';
import { slides } from '../data/slides.js';
import SliderControls from './SliderControls.jsx';

/**
 * Componente ImageSlider fiel ao layout editorial do Figma:
 * - Kicker superior: EM DESTAQUE / {ANIMAL}
 * - Imagem central com cantos arredondados (rounded-3xl) e cartão inclinado lilás de fundo
 * - Mapeamento com slides.map() e transição suave
 * - Título da espécie e parágrafo descritivo
 * - SliderControls integrado com botões e indicadores
 */
export default function ImageSlider({
  index = 2,
  onPrevious,
  onNext,
  onSelect,
}) {
  const activeSlide = slides[index] || slides[0];

  // Atalhos de teclado (setas ← e →)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        onPrevious?.();
      } else if (e.key === 'ArrowRight') {
        onNext?.();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onPrevious, onNext]);

  return (
    <section
      aria-label="Galeria da vida selvagem"
      className="w-full max-w-lg lg:max-w-md xl:max-w-lg flex flex-col gap-4"
    >
      {/* Kicker Superior do Slide (Figma: EM DESTAQUE / PANDA-GIGANTE) */}
      <div className="text-xs font-bold tracking-wider uppercase text-mauve">
        EM DESTAQUE / {activeSlide.animal}
      </div>

      {/* Container da Imagem com Cartão Inclinado ao Fundo */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[5/4] my-2">
        {/* Cartão lilás inclinado ao fundo (rotação estática sem Math.random) */}
        <div
          className="absolute inset-0 rounded-[28px] sm:rounded-[36px] bg-[#E2DCF7] -rotate-3 sm:-rotate-4 transform transition-transform duration-500 pointer-events-none"
          aria-hidden="true"
        />

        {/* Segundo cartão de sombra sutil opcional para profundidade */}
        <div
          className="absolute inset-0 rounded-[28px] sm:rounded-[36px] bg-[#EDE8FA] rotate-1 sm:rotate-2 transform transition-transform duration-500 pointer-events-none"
          aria-hidden="true"
        />

        {/* Moldura da Imagem Principal */}
        <div className="relative z-10 w-full h-full rounded-[28px] sm:rounded-[36px] overflow-hidden bg-slate-200 shadow-md">
          {slides.map((slide, i) => {
            const isActive = i === index;
            return (
              <img
                key={slide.id}
                src={slide.image}
                alt={slide.alt}
                className={`absolute inset-0 w-full h-full object-cover select-none transition-all duration-500 ease-out ${
                  isActive
                    ? 'opacity-100 scale-100 z-10'
                    : 'opacity-0 scale-105 z-0 pointer-events-none'
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* Conteúdo do slide ativo: Título e Descrição */}
      <div className="space-y-1.5 pt-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
          {activeSlide.animal}
        </h2>

        <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed max-w-md">
          {activeSlide.description}
        </p>
      </div>

      {/* SliderControls: Botões, Indicadores e Contador */}
      <SliderControls
        index={index}
        count={slides.length}
        onPrevious={onPrevious}
        onNext={onNext}
        onSelect={onSelect}
      />
    </section>
  );
}
