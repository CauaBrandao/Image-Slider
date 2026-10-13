import SliderControls from './SliderControls.jsx';

export default function ImageSlider() {
  return (
    <section aria-label="Galeria da vida selvagem" className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Cartões inclinados de fundo (com ângulos fixos, sem Math.random) */}
      <div className="absolute inset-0 rounded-3xl bg-mauve/10 -rotate-3 transform transition-transform" />
      <div className="absolute inset-0 rounded-3xl bg-white/70 border border-mauve/15 rotate-2 shadow-sm transform transition-transform" />

      {/* Cartão principal do carrossel */}
      <div className="relative z-10 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-mauve/10 flex flex-col gap-6">
        {/* Imagem do slide */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100">
          <img
            src="/images/image-3.jpg"
            alt="Pandas em seu habitat"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Informações e controles */}
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-mauve bg-mauve/10 px-3 py-1 rounded-full">
              Espécie Protegida
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink">
              Panda-gigante
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Uma das espécies mais carismáticas da China. O panda se alimenta principalmente de bambu e representa a harmonia com as florestas orientais.
            </p>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <SliderControls />
          </div>
        </div>
      </div>
    </section>
  );
}
