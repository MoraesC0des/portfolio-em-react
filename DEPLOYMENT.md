# 🚀 Guia de Deploy

## Vercel (Recomendado)

1. Push seu código para GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique em "New Project"
4. Selecione seu repositório
5. Framework: **Vite**
6. Build Command: `npm run build`
7. Output Directory: `dist`
8. Deploy!

```bash
# Ou via CLI
npm i -g vercel
vercel
```

## Netlify

1. Push para GitHub
2. Acesse [netlify.com](https://netlify.com)
3. Clique "New site from Git"
4. Connect GitHub
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy!

```bash
# Ou via CLI
npm i -g netlify-cli
netlify deploy --prod
```

## GitHub Pages

1. Atualize `vite.config.ts`:
```ts
export default defineConfig({
  base: '/gabriel-portfolio/',
  // ...
})
```

2. Push para GitHub
3. Settings → Pages → Deploy from `gh-pages` branch
4. Run:
```bash
npm run build
git add dist -f
git commit -m "Deploy"
git subtree push --prefix dist origin gh-pages
```

## Self-hosted (VPS/Servidor)

```bash
# Build
npm run build

# Copie o diretório `dist` para seu servidor
scp -r dist user@server:/var/www/portfolio

# Configure seu web server (nginx/apache)
# Aponte root para o diretório dist
# Configure redirect de todas as rotas para index.html (SPA)
```

### Nginx config exemplo:
```nginx
server {
  listen 80;
  server_name gabrielmoraes.dev;
  root /var/www/portfolio/dist;
  
  location / {
    try_files $uri $uri/ /index.html;
  }
  
  location ~* \.(js|css|png|jpg|jpeg|svg|ico)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
  }
}
```

## Docker

Crie um `Dockerfile`:
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build e run:
```bash
docker build -t gabriel-portfolio .
docker run -p 80:80 gabriel-portfolio
```

## Variáveis de Ambiente

Se usar APIs no futuro, crie um `.env` baseado em `.env.example`:

```bash
VITE_API_URL=https://api.example.com
VITE_ENABLE_ANALYTICS=true
```

Acesse em seu código:
```ts
const apiUrl = import.meta.env.VITE_API_URL
```

## Performance Checklist

- ✅ Minified CSS/JS
- ✅ Image optimization
- ✅ Lazy loading
- ✅ Cache busting (done by Vite)
- ✅ GZIP compression
- ✅ CDN (Vercel/Netlify auto)
- ✅ Dark mode support
- ✅ SEO meta tags

## Monitoramento

- Lighthouse: `npm run build && npx serve dist`
- Sentry: Adicionar para error tracking
- Google Analytics: Implementar com `gtag`
- Uptime monitoring: StatusPage.io, Pingdom

## Troubleshooting

**Blank page após deploy?**
- Verificar base URL em `vite.config.ts`
- Verificar se server redireciona rotas para `index.html`

**CSS/JS não carregam?**
- Verificar MIME types no server
- GZIP compression ativado?

**Imagens não aparecem?**
- Paths absolutas em vez de relativas
- Usar URLs públicas para imagens externas

---

Deploy feito? Parabéns! 🎉
