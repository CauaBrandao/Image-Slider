export default function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-lavender" aria-hidden="true">
      {/* Luz ambiente suave no topo esquerdo */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-mauve/10 blur-3xl" />
      
      {/* Luz ambiente suave na base direita */}
      <div className="absolute -bottom-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-mauve/15 blur-3xl" />

      {/* Cartões decorativos de fundo com rotações fixas (sem Math.random()) */}
      <div className="hidden lg:block absolute top-1/4 right-[8%] w-80 h-96 rounded-3xl bg-white/40 border border-mauve/10 shadow-lg -rotate-6" />
      <div className="hidden lg:block absolute top-1/3 right-[5%] w-80 h-96 rounded-3xl bg-white/30 border border-mauve/10 shadow-md rotate-3" />
    </div>
  );
}
