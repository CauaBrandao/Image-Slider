import Background from './components/Background.jsx';
import ImageSlider from './components/ImageSlider.jsx';

export default function App() {
  return (
    <div className="app">
      <Background />
      <header>
        <strong>WILD / STORIES</strong>
      </header>
      <main>
        <section>
          <h1>A natureza em cada detalhe.</h1>
          <p>Descubra espécies extraordinárias.</p>
        </section>
        <ImageSlider />
      </main>
    </div>
  );
}
