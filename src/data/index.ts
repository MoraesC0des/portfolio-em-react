export interface Project {
  id: number
  year: string
  title: string
  tags: string[]
  category: 'ecommerce' | 'dashboard' | 'branding' | 'all'
  desc: string
  img: string
  liveUrl?: string
  caseUrl?: string
}

export interface Experience {
  period: string
  active: boolean
  title: string
  company: string
  desc: string
}

export interface TechRow {
  icon: string
  label: string
  tags: string[]
}

export const SKILLS: string[] = [
  'HTML5', 'CSS3 / SCSS', 'React.js', 'Liquid (Shopify)',
  'Next.js', 'Tailwind CSS', 'TypeScript', 
]

export const TECH: TechRow[] = [
  { icon: '⌨', label: 'Desenvolvimento Core',    tags: ['ES6+', 'TypeScript', 'CSS/SCSS', 'JQuery'] },
  { icon: '⬡', label: 'Frameworks & Ferramentas', tags: ['React.js', 'Angular', 'Ionic', 'Firebase'] },
  { icon: '◈', label: 'E-commerce',               tags: ['Shopify', 'REST APIS', 'Google APIS', 'Linx Commerce']},
  {  icon: '⚡',label: 'Boas Práticas',           tags: ['Core Web Vitals','SEO','Performance','Responsive Design']}
]

export const PROJECTS: Project[] = [
  {
    id: 1,
    year: '2024',
    title: 'LUMINA Essentials',
    tags: ['React', 'Shopify'],
    category: 'ecommerce',
    desc: 'Storefront headless customizado com foco em tempos de carregamento <2s e storytelling imersivo para marca de luxo.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAoZPgNJmL2tfS__KKWDRQ5tAlqRpikEPfDMVP4oRdSw-g9i_1khl3h2cb9R8SO_3GfYXheLig5VLYkQgdWkz_ofWvH3BKUopzFTyc9b_5qTt75L15ylzN-q5m2byBOT0fXigUGbtRYyW6XYI7XGNu-a82G1Er5olk-oxTR0ZfZJRNhCZ289SfCLazwwNqKexOTorqPtBcdL4a51jxTUYpW_Nh72xtPoQsMBOH9WWccUy4-vVl0aU06y4gfWRydMLojFBaJkU3Xim5',
    liveUrl: '#',
    caseUrl: '#',
  },
  {
    id: 2,
    year: '2023',
    title: 'Nexus Dashboard',
    tags: ['Next.js', 'D3.js'],
    category: 'dashboard',
    desc: 'Ferramenta interna data-intensive para gestão de inventário com analytics em tempo real e reposição preditiva.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-kOtPqQCYE0_ZkDvGp1WTg4Ig5D0iTov5SS35PJXO67s_49y6gyi8r-X099JjnHXOQP3xvJzikvd5pflziRepJgSjwckSJerw8QADb_Avga4xXzawIAVhPvy0945d1svlBLz2Xx-VA8w9s9nImGmlBwvQvddXmSURDH4BkuH-Nb1oqIjX_UslzAa8RxNpSztaN5GKYSiMOZCV7KbrRm1X5ijsmLWblBJ5neOefRlum68YTX0-YpPAK7Af3ffSOxVvkPGp_hRZw0K9',
    liveUrl: '#',
    caseUrl: '#',
  },
  {
    id: 3,
    year: '2023',
    title: 'Arco Brand Studio',
    tags: ['React', 'Framer Motion'],
    category: 'branding',
    desc: 'Site institucional com animações cinematográficas e micro-interações que refletem a identidade premium da marca.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAoZPgNJmL2tfS__KKWDRQ5tAlqRpikEPfDMVP4oRdSw-g9i_1khl3h2cb9R8SO_3GfYXheLig5VLYkQgdWkz_ofWvH3BKUopzFTyc9b_5qTt75L15ylzN-q5m2byBOT0fXigUGbtRYyW6XYI7XGNu-a82G1Er5olk-oxTR0ZfZJRNhCZ289SfCLazwwNqKexOTorqPtBcdL4a51jxTUYpW_Nh72xtPoQsMBOH9WWccUy4-vVl0aU06y4gfWRydMLojFBaJkU3Xim5',
    liveUrl: '#',
    caseUrl: '#',
  },
  {
    id: 4,
    year: '2022',
    title: 'Vault Commerce',
    tags: ['Shopify', 'TypeScript'],
    category: 'ecommerce',
    desc: 'Plataforma multi-vendor com checkout unificado e integração headless via Hydrogen para loja de 8 dígitos.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-kOtPqQCYE0_ZkDvGp1WTg4Ig5D0iTov5SS35PJXO67s_49y6gyi8r-X099JjnHXOQP3xvJzikvd5pflziRepJgSjwckSJerw8QADb_Avga4xXzawIAVhPvy0945d1svlBLz2Xx-VA8w9s9nImGmlBwvQvddXmSURDH4BkuH-Nb1oqIjX_UslzAa8RxNpSztaN5GKYSiMOZCV7KbrRm1X5ijsmLWblBJ5neOefRlum68YTX0-YpPAK7Af3ffSOxVvkPGp_hRZw0K9',
    liveUrl: '#',
    caseUrl: '#',
  },
]

export const EXPERIENCE: Experience[] = [
  {
    period: '2024 – 2026',
    active: true,
    title: 'Desenvolvedor Front-End',
    company: 'Agrada Digital',
    desc: 'Desenvolvimento e manutenção de lojas virtuais na plataforma Linx Commerce, criando landing pages, implementando novas funcionalidades, corrigindo bugs e realizando customizações utilizando JavaScript, jQuery, Liquid, HTML e CSS.'
  },
  {
  period: '2022 – 2024',
  active: false,
  title: 'Desenvolvedor Front-End Freelancer',
  company: 'Autônomo',
  desc: 'Desenvolvimento de aplicações web e mobile utilizando Angular, Ionic e Firebase, participando da implementação de novas funcionalidades, integração com APIs REST, autenticação, banco de dados em tempo real e manutenção de aplicações em parceria com desenvolvedores mais experientes.'
},
] 

export const TYPEWRITER_TEXTS: string[] = [
  'Desenvolvedor Front-End',
  'Especialista Shopify',
  'Arquiteto de UI',
  'Performance Engineer',
]
