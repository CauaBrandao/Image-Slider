import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Componente SliderControls
 * Subcomponentes:
 * - Botão anterior
 * - Botão próximo
 * - Indicadores de página (com aria-current)
 * - Contador formatado (ex: 03 / 05)
 */
export default function SliderControls({
  index = 0,
  count = 0,
  onPrevious,
  onNext,
  onSelect,
}) {
  const currentFormatted = String(index + 1).padStart(2, '0');
  const totalFormatted = String(count).padStart(2, '0');

  return (
    <div
      className="w-full flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-mauve/10"
      aria-label="Controles de navegação do carrossel"
    >
      {/* Grupo: Indicadores e Contador */}
      <div className="flex items-center gap-4">
        {/* Indicadores de página */}
        <div
          role="tablist"
          aria-label="Indicadores dos slides"
          className="flex items-center gap-1.5"
        >
          {Array.from({ length: count }).map((_, i) => {
            const isActive = i === index;
            return (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-current={isActive ? 'true' : 'false'}
                aria-label={`Ir para a imagem ${i + 1} de ${count}`}
                onClick={() => onSelect?.(i)}
                className={`transition-all duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mauve ${
                  isActive
                    ? 'w-7 h-2.5 bg-mauve shadow-sm shadow-mauve/30'
                    : 'w-2.5 h-2.5 bg-mauve/25 hover:bg-mauve/45'
                }`}
              />
            );
          })}
        </div>

        {/* Contador 03 / 05 */}
        <div
          className="text-xs sm:text-sm font-semibold tracking-wider text-slate-500 tabular-nums select-none"
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="text-ink font-bold">{currentFormatted}</span>
          <span className="mx-1 text-slate-400">/</span>
          <span>{totalFormatted}</span>
        </div>
      </div>

      {/* Grupo: Botões Anterior e Próximo */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Imagem anterior"
          onClick={onPrevious}
          className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white text-ink border border-mauve/20 shadow-sm hover:bg-mauve hover:text-white hover:border-transparent transition-all duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-mauve focus-visible:outline-none cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          aria-label="Próxima imagem"
          onClick={onNext}
          className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white text-ink border border-mauve/20 shadow-sm hover:bg-mauve hover:text-white hover:border-transparent transition-all duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-mauve focus-visible:outline-none cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
