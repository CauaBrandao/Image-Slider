import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Componente SliderControls fiel ao Figma
 * - Botão anterior (fundo branco, borda lilás, seta escura)
 * - Botão próximo (fundo roxo #6039AD, seta branca)
 * - Indicadores de página (5 pontos, ponto ativo #6039AD, inativos #D8CEF0)
 * - Contador formatado (ex: 03 / 05, exibido à direita no mobile)
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
      className="w-full flex items-center justify-between gap-4 pt-4"
      aria-label="Controles do carrossel"
    >
      {/* Botões Anterior e Próximo + Indicadores de página */}
      <div className="flex items-center gap-3 sm:gap-5">
        {/* Botão Anterior */}
        <button
          type="button"
          aria-label="Slide anterior"
          onClick={onPrevious}
          className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-ink border border-[#E2DCF4] shadow-xs hover:border-mauve hover:text-mauve transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-mauve focus-visible:outline-none cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Botão Próximo */}
        <button
          type="button"
          aria-label="Próximo slide"
          onClick={onNext}
          className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-mauve text-white shadow-xs hover:bg-[#4E2B91] transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-mauve focus-visible:outline-none cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Indicadores de página (dots) - Visíveis no Desktop e adaptáveis no Mobile */}
        <div
          role="tablist"
          aria-label="Indicadores dos slides"
          className="hidden sm:flex items-center gap-2 pl-2"
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
                className={`transition-all duration-300 rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mauve ${
                  isActive
                    ? 'w-2.5 h-2.5 bg-mauve ring-2 ring-mauve/30'
                    : 'w-2 h-2 bg-[#D8CEF0] hover:bg-mauve/50'
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* Contador 03 / 05 (Exibido no Mobile e disponível para leitores de tela) */}
      <div
        className="sm:hidden text-xs font-bold tracking-wider text-mauve tabular-nums select-none"
        aria-live="polite"
        aria-atomic="true"
      >
        <span>{currentFormatted}</span>
        <span className="mx-0.5 text-slate-400">/</span>
        <span>{totalFormatted}</span>
      </div>
    </div>
  );
}
