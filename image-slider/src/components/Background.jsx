/**
 * Componente Background
 * Renderiza o fundo com tons claros (#FAF8FF), gradientes suaves em lilás/violeta
 * e elementos decorativos com posições/rotações estáticas (sem Math.random()).
 */
export default function Background() {
  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-lavender"
      aria-hidden="true"
    >
      {/* Halo de luz lilás no topo esquerdo */}
      <div className="absolute -top-40 -left-40 w-[28rem] h-[28rem] rounded-full bg-mauve/10 blur-[100px]" />

      {/* Halo de luz violeta na base direita */}
      <div className="absolute -bottom-48 -right-48 w-[34rem] h-[34rem] rounded-full bg-mauve/15 blur-[120px]" />

      {/* Cartões decorativos de fundo no desktop com ângulos e posições fixas */}
      <div className="hidden xl:block absolute top-[20%] right-[10%] w-96 h-[32rem] rounded-3xl bg-white/40 border border-mauve/10 shadow-lg -rotate-6 transition-transform" />
      <div className="hidden xl:block absolute top-[24%] right-[6%] w-96 h-[32rem] rounded-3xl bg-white/30 border border-mauve/10 shadow-md rotate-3 transition-transform" />
    </div>
  );
}
