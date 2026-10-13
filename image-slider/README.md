# Image Slider - Galeria Interativa

Projeto de carrossel de imagens responsivo desenvolvido em **React** e **Vite**, com estilização moderna via Vanilla CSS, glassmorphism e micro-animações.

---

## 🏛️ Arquitetura de Componentes

```text
App
├── Background
├── Header
├── Hero / Introdução
└── ImageSlider
    ├── Imagens (map a partir de slides)
    ├── Conteúdo do slide ativo
    └── SliderControls
        ├── Botão anterior
        ├── Botão próximo
        ├── Indicadores de página
        └── Contador 03 / 05
```

---

## 📁 Estrutura de Pastas

```text
image-slider/
├── public/
│   └── images/
│       ├── image-1.jpg ... image-5.jpg
├── src/
│   ├── components/
│   │   ├── Background.jsx
│   │   ├── ImageSlider.jsx
│   │   └── SliderControls.jsx
│   ├── data/
│   │   └── slides.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 Como Executar o Projeto

1. Entre na pasta do projeto:
   ```bash
   cd image-slider
   ```

2. Instale as dependências (caso necessário):
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Abra a URL informada no terminal (geralmente `http://localhost:5173`) no navegador.

---

## ⌨️ Recursos e Acessibilidade

- **Navegação via teclado**: Use as setas `←` e `→` para navegar entre os slides.
- **Indicadores interativos**: Clique em qualquer indicador para saltar diretamente ao slide desejado.
- **Contador dinâmico**: Apresenta numeração com dois dígitos no formato `03 / 05`.
- **Efeito de ambientação dinâmica**: O fundo (`Background.jsx`) reage e desfoca com base no slide ativo.
