import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SliderControls() {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        aria-label="Imagem anterior"
        className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-ink border border-mauve/20 shadow-sm hover:bg-mauve hover:text-white hover:border-transparent transition-colors focus-visible:ring-2 focus-visible:ring-mauve focus-visible:outline-none"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        type="button"
        aria-label="Próxima imagem"
        className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-ink border border-mauve/20 shadow-sm hover:bg-mauve hover:text-white hover:border-transparent transition-colors focus-visible:ring-2 focus-visible:ring-mauve focus-visible:outline-none"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
