import { useState } from 'react';
import { slides } from '../data/slides.js';
import SliderControls from './SliderControls.jsx';

export default function ImageSlider() {
  const [index, setIndex] = useState(2);
  const activeSlide = slides[index];

  const next = () => setIndex(current => (current + 1) % slides.length);
  const previous = () => setIndex(current => (current - 1 + slides.length) % slides.length);

  return (
    <section aria-label="Galeria da vida selvagem" className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Cartões inclinados de fundo (com ângulos fixos, sem Math.random) */}
      <div className="absolute inset-0 rounded-3xl bg-mauve/10 -rotate-3 transform transition-transform" />
      <div className="absolute inset-0 rounded-3xl bg-white/70 border border-mauve/15 rotate-2 shadow-sm transform transition-transform" />

      {/* Cartão principal do carrossel */}
      <div className="relative z-10 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-mauve/10 flex flex-col gap-6">
        {/* Camada das Imagens com map() e transição */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100">
          {slides.map((slide, i) => (
            <img
              key={slide.id}
              src={slide.image}
              alt={slide.alt}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-out ${
                i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            />
          ))}
        </div>

        {/* Informações dinâmicas do slide ativo */}
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-mauve bg-mauve/10 px-3 py-1 rounded-full">
              {activeSlide.badge || activeSlide.species}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink">
              {activeSlide.animal}
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {activeSlide.description}
            </p>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <SliderControls
              index={index}
              count={slides.length}
              onPrevious={previous}
              onNext={next}
              onSelect={setIndex}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
