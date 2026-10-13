/**
 * Componente Background fiel ao Figma
 * Fundo claro (#FAF8FF) com a grande forma orgânica arredondada em tom lilás suave (#EDE8F8)
 * localizada no canto superior direito conforme os artboards Desktop e Mobile.
 */
export default function Background() {
  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-lavender"
      aria-hidden="true"
    >
      {/* Forma orgânica arredondada no canto superior direito (Figma) */}
      <div className="absolute top-0 right-0 w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] lg:w-[620px] lg:h-[580px] rounded-bl-[200px] sm:rounded-bl-[280px] lg:rounded-bl-[360px] bg-[#EDE8F8]/90" />

      {/* Leve gradiente difuso adicional para profundidade sutil */}
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-tr-[180px] bg-[#EDE8F8]/40" />
    </div>
  );
}
