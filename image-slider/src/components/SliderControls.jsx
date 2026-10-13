import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SliderControls({
  onPrevious,
  onNext
}) {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        aria-label="Imagem anterior"
        onClick={onPrevious}
        className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white text-ink border border-mauve/20 shadow-sm hover:bg-mauve hover:text-white hover:border-transparent transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-mauve focus-visible:outline-none"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        type="button"
        aria-label="Próxima imagem"
        onClick={onNext}
        className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white text-ink border border-mauve/20 shadow-sm hover:bg-mauve hover:text-white hover:border-transparent transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-mauve focus-visible:outline-none"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
