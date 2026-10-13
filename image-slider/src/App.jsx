import { useState } from 'react';
import Background from './components/Background';
import ImageSlider from './components/ImageSlider';
import slides from './data/slides';

/**
 * Arquitetura de componentes:
 * App
 * ├── Background
 * ├── Header
 * ├── Hero / Introdução
 * └── ImageSlider
 *     ├── Imagens (map a partir de slides)
 *     ├── Conteúdo do slide ativo
 *     └── SliderControls
 *         ├── Botão anterior
 *         ├── Botão próximo
 *         ├── Indicadores de página
 *         └── Contador 03 / 05
 */
function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const activeSlide = slides[currentSlideIndex] || slides[0];

  return (
    <div className="app-container">
      {/* 1. Background dinâmico */}
      <Background activeSlide={activeSlide} />

      <div className="app-layout">
        {/* 2. Header */}
        <header className="app-header">
          <div className="header-brand">
            <span className="brand-dot" />
            <h1 className="brand-name">Lumina Slider</h1>
          </div>
          <nav className="header-nav">
            <span className="nav-tag">Coleção 2026</span>
          </nav>
        </header>

        {/* 3. Hero / Introdução */}
        <section className="app-hero">
          <div className="hero-pill">Galeria Interativa</div>
          <h2 className="hero-title">
            Explore a Vida Selvagem em Alta Definição
          </h2>
          <p className="hero-description">
            Navegue pelos cenários mais inspiradores e descubra detalhes marcantes através dos controles intuitivos do slider.
          </p>
        </section>

        {/* 4. ImageSlider */}
        <main className="app-main">
          <ImageSlider
            slides={slides}
            currentIndex={currentSlideIndex}
            onSlideChange={setCurrentSlideIndex}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
