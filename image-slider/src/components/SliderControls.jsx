import React from 'react';

/**
 * Componente SliderControls
 * Inclui:
 * - Botão anterior
 * - Botão próximo
 * - Indicadores de página (dots)
 * - Contador formatado (ex: 03 / 05)
 */
export default function SliderControls({
  current = 0,
  total = 0,
  onPrev,
  onNext,
  onSelect
}) {
  const formattedCurrent = String(current + 1).padStart(2, '0');
  const formattedTotal = String(total).padStart(2, '0');

  return (
    <div className="slider-controls-container" aria-label="Controles do carrossel">
      {/* Botões de navegação Anterior e Próximo */}
      <div className="slider-nav-buttons">
        <button
          type="button"
          className="slider-btn slider-btn-prev"
          onClick={onPrev}
          aria-label="Slide anterior"
          title="Slide anterior"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          type="button"
          className="slider-btn slider-btn-next"
          onClick={onNext}
          aria-label="Próximo slide"
          title="Próximo slide"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Indicadores de página (dots) */}
      <div className="slider-indicators" role="tablist" aria-label="Indicadores de slides">
        {Array.from({ length: total }).map((_, index) => {
          const isActive = index === current;
          return (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Ir para o slide ${index + 1}`}
              className={`slider-dot ${isActive ? 'active' : ''}`}
              onClick={() => onSelect(index)}
            >
              <span className="dot-fill" />
            </button>
          );
        })}
      </div>

      {/* Contador no formato 03 / 05 */}
      <div className="slider-counter" aria-live="polite">
        <span className="counter-current">{formattedCurrent}</span>
        <span className="counter-divider">/</span>
        <span className="counter-total">{formattedTotal}</span>
      </div>
    </div>
  );
}
