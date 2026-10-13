import React, { useEffect, useCallback } from 'react';
import SliderControls from './SliderControls';

/**
 * Componente ImageSlider
 * Arquitetura:
 * - Imagens (map a partir de slides)
 * - Conteúdo do slide ativo
 * - SliderControls (Anterior, Próximo, Indicadores, Contador)
 */
export default function ImageSlider({
  slides = [],
  currentIndex = 0,
  onSlideChange
}) {
  const total = slides.length;

  const handlePrev = useCallback(() => {
    if (total === 0) return;
    const nextIndex = currentIndex === 0 ? total - 1 : currentIndex - 1;
    onSlideChange?.(nextIndex);
  }, [currentIndex, total, onSlideChange]);

  const handleNext = useCallback(() => {
    if (total === 0) return;
    const nextIndex = currentIndex === total - 1 ? 0 : currentIndex + 1;
    onSlideChange?.(nextIndex);
  }, [currentIndex, total, onSlideChange]);

  const handleSelect = useCallback((index) => {
    onSlideChange?.(index);
  }, [onSlideChange]);

  // Navegação por teclado (Setas Esquerda e Direita)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  if (!slides || slides.length === 0) {
    return (
      <div className="slider-empty">
        <p>Nenhum slide disponível.</p>
      </div>
    );
  }

  const activeSlide = slides[currentIndex];

  return (
    <div className="image-slider-wrapper">
      <div className="image-slider-card">
        {/* Camada das Imagens: renderizadas via .map a partir de slides */}
        <div className="slider-media-stage">
          {slides.map((slide, index) => {
            const isActive = index === currentIndex;
            const isPrev = (index === currentIndex - 1) || (currentIndex === 0 && index === total - 1);
            const isNext = (index === currentIndex + 1) || (currentIndex === total - 1 && index === 0);

            let stateClass = 'slide-hidden';
            if (isActive) stateClass = 'slide-active';
            else if (isPrev) stateClass = 'slide-prev';
            else if (isNext) stateClass = 'slide-next';

            return (
              <div
                key={slide.id || index}
                className={`slide-item ${stateClass}`}
                aria-hidden={!isActive}
              >
                <img
                  src={slide.image}
                  alt={slide.alt || slide.title}
                  className="slide-image"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                <div className="slide-media-gradient" />
              </div>
            );
          })}
        </div>

        {/* Conteúdo do slide ativo */}
        <div className="slide-content-overlay">
          <div key={activeSlide.id} className="slide-info-panel">
            {activeSlide.tag && (
              <span
                className="slide-tag"
                style={{ borderColor: activeSlide.accent || 'currentColor', color: activeSlide.accent || '#fff' }}
              >
                {activeSlide.tag}
              </span>
            )}

            {activeSlide.subtitle && (
              <span className="slide-subtitle">{activeSlide.subtitle}</span>
            )}

            <h2 className="slide-title">{activeSlide.title}</h2>

            <p className="slide-description">{activeSlide.description}</p>
          </div>

          {/* SliderControls */}
          <div className="slider-controls-wrapper">
            <SliderControls
              current={currentIndex}
              total={total}
              onPrev={handlePrev}
              onNext={handleNext}
              onSelect={handleSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
