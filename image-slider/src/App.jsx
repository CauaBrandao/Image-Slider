import Background from './components/Background.jsx';
import ImageSlider from './components/ImageSlider.jsx';

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-lavender text-ink flex flex-col justify-between">
      <Background />

      {/* Header */}
      <header className="w-full max-w-7xl mx-auto px-6 sm:px-12 pt-8 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-mauve" />
          <strong className="text-xl sm:text-2xl font-black tracking-widest text-ink">
            WILD <span className="text-mauve font-light">/</span> STORIES
          </strong>
        </div>
        <span className="text-xs sm:text-sm font-medium uppercase tracking-wider text-mauve bg-mauve/10 px-3.5 py-1.5 rounded-full border border-mauve/15">
          Galeria Exclusiva
        </span>
      </header>

      {/* Main Grid: 2 colunas no desktop, vertical no mobile */}
      <main className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-10 lg:py-16 grid gap-12 lg:gap-16 lg:grid-cols-2 lg:items-center my-auto">
        <section className="space-y-6 lg:space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mauve/10 border border-mauve/20 text-mauve text-xs font-semibold uppercase tracking-wider">
            Curadoria Visual
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink tracking-tight leading-tight">
            A natureza em cada detalhe.
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-slate-600 max-w-xl">
            Descubra espécies extraordinárias através de uma experiência imersiva de fotografia editorial da vida selvagem.
          </p>

          <div className="pt-2 flex items-center gap-4 text-xs sm:text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-mauve" /> 5 Espécies em Destaque
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-mauve" /> Navegação Interativa
            </span>
          </div>
        </section>

        <ImageSlider />
      </main>

      {/* Footer sutil */}
      <footer className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-6 text-center text-xs text-slate-400">
        © 2026 WILD / STORIES — Atividade Prática React + Tailwind CSS
      </footer>
    </div>
  );
}
