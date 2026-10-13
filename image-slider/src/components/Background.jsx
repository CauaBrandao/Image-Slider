import React from 'react';

/**
 * Componente de Background dinâmico
 * Renderiza uma camada de fundo imersiva com efeito de desfoque,
 * vinheta e gradientes suaves sincronizados com o slide ativo.
 */
export default function Background({ activeSlide }) {
  if (!activeSlide) return null;

  return (
    <div className="app-background" aria-hidden="true">
      <div
        key={activeSlide.id}
        className="app-background-image"
        style={{ backgroundImage: `url(${activeSlide.image})` }}
      />
      <div className="app-background-overlay" />
      <div
        className="app-background-glow"
        style={{ '--accent': activeSlide.accent || '#6366f1' }}
      />
    </div>
  );
}
