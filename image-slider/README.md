# WILD / STORIES — Image Slider (React + Tailwind CSS)

> **Atividade Prática — Aula 11 | Desenvolvimento Frontend com React e Tailwind CSS v4**

Uma experiência visual e editorial imersiva para descobrir cinco espécies da fauna mundial através de fotografias, dados sincronizados, navegação circular e micro-animações.

---

## 🎨 Especificação Visual & Identidade

- **Conceito**: Fotografia editorial e narrativa da vida selvagem (*WILD / STORIES*).
- **Artboards de Referência**: Desktop (1440 × 900) e Mobile (390 × 844).
- **Paleta de Cores**:
  - `Fundo (#FAF8FF)`: `--color-lavender`
  - `Texto Principal / Títulos (#1F1836)`: `--color-ink`
  - `Roxo Destaque (#6039AD)`: `--color-mauve`
  - `Textos Secundários`: Cinza-violeta / Slate suave
- **Estilo Visual**: Imagem central em `object-cover` com cantos arredondados generosos (`rounded-3xl`), cartões inclinados no fundo com rotações estáticas e halo de iluminação difusa.

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
│       ├── image-1.jpg (Cachorrinhos)
│       ├── image-2.jpg (Urso)
│       ├── image-3.jpg (Panda-gigante)
│       ├── image-4.jpg (Leão)
│       └── image-5.jpg (Girafa)
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

## 🐾 Catálogo de Espécies (`slides.js`)

| ID | Imagem | Espécie | Categoria / Badge | Resumo |
| :--- | :--- | :--- | :--- | :--- |
| `cachorros` | `image-1.jpg` | *Canis lupus familiaris* | Companheiros | Lealdade, curiosidade e afeto sem limites. |
| `urso` | `image-2.jpg` | *Ursus arctos* | Vida Selvagem | Força bruta e adaptabilidade nas florestas. |
| `panda` | `image-3.jpg` | *Ailuropoda melanoleuca* | Espécie Protegida | O panda se alimenta principalmente de bambu. |
| `leao` | `image-4.jpg` | *Panthera leo* | Predador Alfa | Estrutura social única e olhar imponente. |
| `girafa` | `image-5.jpg` | *Giraffa camelopardalis* | Herbívoro Gigante | Animal terrestre de grande altura. |

---

## 🚀 Como Executar o Projeto

1. **Acessar a pasta da aplicação**:
   ```bash
   cd image-slider
   ```

2. **Instalar as dependências**:
   ```bash
   npm install
   ```

3. **Iniciar o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```
   Acesse a aplicação no navegador em `http://localhost:5173/`.

4. **Validar a qualidade e integridade do código**:
   ```bash
   npm run lint
   npm run build
   ```

---

## ♿ Acessibilidade e Recursos de Interatividade

- **Navegação Circular**: O carrossel utiliza aritmética modular (`% slides.length`) para transição contínua tanto no avanço quanto no retorno.
- **Atalhos de Teclado**: Suporte nativo às teclas `ArrowLeft` (←) e `ArrowRight` (→) configurado via `useEffect` com desassociação segura no encerramento.
- **Indicadores Interativos**: Cada marcador possui `role="tab"`, estado `aria-current="true"` dinâmico e permite salto direto para o slide correspondente.
- **Contador Formatado**: Exibição tabular no formato com dois dígitos `03 / 05` com `aria-live="polite"`.
- **Destaque de Foco e Tipos**: Botões explícitos com `type="button"`, `aria-label` descritivos e anéis de foco visíveis (`focus-visible:ring-2 focus-visible:ring-mauve`).
- **Renderização Estável**: Cartões inclinados com rotações pré-fixadas (sem o uso de `Math.random()` durante a renderização), preservando o layout uniforme.

---

## 📝 Histórico de Commits Semânticos

O desenvolvimento seguiu rigorosamente a progressão pedagógica da atividade:

1. `chore: initialize image slider with vite`
2. `feat: create static slider components`
3. `style: implement responsive slider with tailwind`
4. `feat: model animal slides data`
5. `feat: add carousel navigation with useState`
6. `feat: add pagination and keyboard controls`
7. `docs: complete README and screenshots`
