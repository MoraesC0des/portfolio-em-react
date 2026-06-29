# Gabriel Moraes Portfolio

Um portfolio moderno e responsivo desenvolvido com **React 18**, **TypeScript** e **Vite**.

## 🎯 Características

- ✨ **Componentes reutilizáveis** com CSS Modules
- 🎨 **Dark Mode** com Context API
- 🖱️ **Hooks customizados** (useScrollSpy, useReveal, useTypewriter)
- 📱 **Fully responsive** (desktop, tablet, mobile)
- 🎬 **Animações suaves** com Intersection Observer
- ♿ **Acessibilidade** (ARIA labels, semantic HTML)
- ⚡ **Performance otimizada** (lazy loading, code splitting)
- 🚀 **Vite** para build rápido

## 📁 Estrutura do Projeto

```
gabriel-portfolio/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Contact.tsx
│   │   ├── CTA.tsx
│   │   ├── Footer.tsx
│   │   ├── Icon.tsx
│   │   ├── Reveal.tsx
│   │   └── *.module.css
│   ├── hooks/               # Custom Hooks
│   │   ├── useScrollSpy.ts
│   │   ├── useReveal.ts
│   │   └── useTypewriter.ts
│   ├── context/             # Context API
│   │   └── ThemeContext.tsx
│   ├── data/                # Dados estáticos
│   │   └── index.ts
│   ├── styles/              # Estilos globais
│   │   └── globals.css
│   ├── App.tsx              # Componente raiz
│   └── main.tsx             # Entry point
├── public/                  # Assets estáticos
│   └── favicon.svg
├── index.html               # HTML template
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🚀 Começar

### Pré-requisitos
- Node.js >= 16
- npm ou yarn

### Instalação

```bash
# Clonar repositório
git clone <url>
cd gabriel-portfolio

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## 🎨 Customização

### Cores e Design Tokens
Edit `src/styles/globals.css` para mudar cores, tipografia e espaçamento:

```css
:root {
  --primary: #000000;
  --secondary: #0051d5;
  /* ... outros tokens */
}
```

### Dados
Edite `src/data/index.ts` para atualizar:
- Projetos (PROJECTS)
- Experiência (EXPERIENCE)
- Skills (SKILLS)
- Stack técnica (TECH)

### Componentes
Cada componente está em seu próprio arquivo em `src/components/`:
- `.tsx` = lógica React
- `.module.css` = estilos isolados do componente

## 🔧 Hooks Customizados

### `useScrollSpy(ids, offset)`
Detecta qual seção está visível durante o scroll e atualiza o nav.

```tsx
const activeSection = useScrollSpy(['home', 'about', 'projects'], 200)
```

### `useReveal(threshold)`
Dispara animações quando elementos entram na viewport usando Intersection Observer.

```tsx
const ref = useReveal(0.15)
return <div ref={ref} className="reveal">Conteúdo animado</div>
```

### `useTypewriter(texts, speed, pause)`
Cria efeito de digitação cíclica.

```tsx
const typed = useTypewriter(['React', 'TypeScript', 'Next.js'], 65, 2200)
```

## 🌓 Dark Mode

Implementado via `ThemeContext`. Toggle automático salva preferência em localStorage.

```tsx
const { dark, toggle } = useTheme()
```

## 📊 Performance

- **Lighthouse Score**: 98+
- **Core Web Vitals**: Otimizados
- **Bundle size**: ~25KB gzipped (React + components)

## 📝 Commits

Siga a convenção:
```
feat: add new component
fix: resolve layout issue
docs: update README
style: format code
refactor: improve performance
```

## 📄 Licença

MIT © Gabriel Moraes

## 📧 Contato

- Email: moraescodes@gmail.com
- LinkedIn: [linkedin.com/in/gabrielmoraes](https://www.linkedin.com/in/gabriel-moraes-61399b261/)
- GitHub: [github.com/gabrielmoraes](https://github.com/MoraesC0des)
