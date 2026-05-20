# 🛢️ Petro Energy — Site Corporativo

Trabalho Semestral — Desenvolvimento de Aplicações Web

| Aluno | RA |
|---|---|
| Gabriel Camargo Vanin | 28325665 |
| Adriano Viana Dama | 28326260 |
| Arthur Faria Cardial | 28326154 |
| Caio Fellipe Soares Mendes | 28326042 |

---

## 📋 Sobre o Projeto

O **Petro Energy** é um site corporativo fictício desenvolvido como trabalho semestral, utilizando **Angular** como framework principal. A aplicação é uma **SPA (Single Page Application)** que simula o portal de uma empresa petrolífera brasileira, com feed de notícias, projetos sociais, página institucional, busca integrada e visualização de posts completos.

---

## 🎯 Requisitos Atendidos

| Requisito | Status |
|---|---|
| Mínimo de 3 páginas | ✅ 5 páginas |
| Framework Angular | ✅ |
| SPA (Single Page Application) | ✅ |
| Componentes reutilizáveis | ✅ |
| Cabeçalho, menu e rodapé | ✅ |
| HTML semântico | ✅ |
| Acessibilidade (WCAG 2 AA) | ✅ |
| Layout totalmente responsivo | ✅ |
| Consumo de API REST | ✅ JSON Server |
| Services para comunicação com API | ✅ |
| Rotas configuradas | ✅ |
| Layout limpo e organizado | ✅ |
| CSS modularizado por componente | ✅ |
| Media queries em cada módulo | ✅ |
| Boas práticas Angular | ✅ |

---

## 🗂️ Estrutura do Projeto

```
src/app/
│
├── components/
│   ├── header/
│   │   ├── header.ts
│   │   ├── header.html
│   │   └── header.css
│   ├── footer/
│   │   ├── footer.ts
│   │   ├── footer.html
│   │   └── footer.css
│   ├── logo/
│   │   ├── logo.ts
│   │   ├── logo.html
│   │   └── logo.css
│   ├── post-card/
│   │   ├── post-card.ts
│   │   ├── post-card.html
│   │   └── post-card.css
│   ├── search-bar/
│   │   ├── search-bar.ts
│   │   ├── search-bar.html
│   │   └── search-bar.css
│   ├── social-links/
│   │   ├── social-links.ts
│   │   ├── social-links.html
│   │   └── social-links.css
│   ├── scroll-to-top/
│   │   ├── scroll-to-top.ts
│   │   ├── scroll-to-top.html
│   │   └── scroll-to-top.css
│   └── cookie-consent/
│       ├── cookie-consent.ts
│       ├── cookie-consent.html
│       └── cookie-consent.css
│
├── pages/
│   ├── home/
│   │   ├── home.ts
│   │   ├── home.html
│   │   └── home.css
│   ├── sobre/
│   │   ├── sobre.ts
│   │   ├── sobre.html
│   │   └── sobre.css
│   ├── projetos/
│   │   ├── projetos.ts
│   │   ├── projetos.html
│   │   └── projetos.css
│   ├── post-view/
│   │   ├── post-view.ts
│   │   ├── post-view.html
│   │   └── post-view.css
│   └── busca/
│       ├── busca.ts
│       ├── busca.html
│       └── busca.css
│
├── services/
│   └── posts.ts
│
├── interfaces/
│   ├── post.ts
│   ├── projetos.ts
│   └── busca.ts
│
├── app.ts
├── app.html
├── app.css
├── app.routes.ts
└── app.config.ts
```

---

## 📄 Páginas

### Home (`/`)
- Hero section com apresentação da empresa
- Seção "Quem somos" com resumo institucional
- Feed com os 3 últimos posts consumidos via API
- Cards clicáveis com redirecionamento para página de detalhes

### Sobre (`/sobre`)
- Hero da página institucional
- História da empresa
- Cards de Missão, Visão e Valores
- Seção de números da empresa

### Projetos Sociais (`/projetos`)
- Hero da página
- Introdução sobre responsabilidade social
- Grid de cards dos projetos sociais consumidos via API
- Exibição dos posts extras da API

### Detalhes do Post (`/post/:id`)
- Rota dinâmica com parâmetro `:id`
- Busca do post específico via API pelo ID
- Exibição completa do conteúdo
- Imagem, categoria, data e texto completo
- Botão de retorno para a home

### Busca (`/busca`)
- Página de resultados de busca
- Busca simultânea em posts e projetos via `forkJoin`
- Filtra por título, resumo e categoria
- Resultados clicáveis com redirecionamento

---

## 🧩 Componentes

### `app-header`
Cabeçalho fixo com logo, menu de navegação, barra de busca integrada e menu mobile com overlay. Utiliza `RouterLink`, `RouterLinkActive` e Signals para controle de estado.

### `app-footer`
Rodapé com logo, links de navegação, barra de busca, informações de contato, portal da transparência e botões de redes sociais.

### `app-logo`
Componente isolado da identidade visual da empresa, utilizando SVG externo da pasta `public/`.

### `app-post-card`
Card reutilizável que recebe um objeto `Post` via `@Input()` e exibe imagem, categoria, título, resumo, data e link para detalhes.

### `app-search-bar`
Barra de busca com Signal para controle do termo digitado. Ao submeter, navega para `/busca?q=termo` via `Router`.

### `app-social-links`
Botões circulares com SVG inline das redes sociais (LinkedIn, Instagram, YouTube e X), abrindo em nova aba com `rel="noopener noreferrer"`.

### `app-scroll-to-top`
Botão flutuante que aparece após 250px de scroll usando `@HostListener('window:scroll')` e rola a página suavemente ao topo.

### `app-cookie-consent`
Banner de consentimento de cookies com opções de aceitar todos ou apenas os necessários. Persiste a decisão no `localStorage`.

---

## ⚙️ Tecnologias Utilizadas

| Tecnologia | Versão | Uso |
|---|---|---|
| Angular | 21+ | Framework principal |
| TypeScript | 5.9+ | Linguagem de programação |
| HTML5 | — | Marcação semântica |
| CSS3 | — | Estilização modularizada |
| JSON Server | 1+ | API REST mock |
| HttpClient | Angular | Comunicação HTTP |
| Angular Router | Angular | Navegação SPA |
| Angular Signals | Angular 17+ | Reatividade de dados |
| FormsModule | Angular | Two-way binding na busca |
| RxJS forkJoin | RxJS 7.8 | Requisições paralelas na busca |
| Vitest | 4+ | Testes unitários |
| Prettier | 3+ | Formatação de código |

---

## 🔌 API REST — JSON Server

A aplicação consome uma API mock criada com **JSON Server** a partir do arquivo `db.json`.

### Endpoints disponíveis

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/posts` | Lista todos os posts |
| GET | `/posts/:id` | Busca post por ID |
| GET | `/projetos` | Lista todos os projetos sociais |

### Estrutura do db.json

```json
{
  "posts": [
    {
      "id": 1,
      "titulo": "string",
      "resumo": "string",
      "conteudo": "string",
      "imagem": "string (url)",
      "data": "string (YYYY-MM-DD)",
      "categoria": "string"
    }
  ],
  "projetos": [
    {
      "id": 1,
      "nome": "string",
      "descricao": "string",
      "imagem": "string (url)",
      "area": "string"
    }
  ]
}
```

---

## 🛣️ Rotas Configuradas

```typescript
const routes: Routes = [
  { path: '',          component: Home },
  { path: 'sobre',     component: Sobre },
  { path: 'projetos',  component: Projetos },
  { path: 'post/:id',  component: PostView },
  { path: 'busca',     component: Busca },
  { path: '**',        redirectTo: '' }
];
```

---

## ♿ Acessibilidade

O projeto foi desenvolvido seguindo as diretrizes **WCAG 2 AA** e validado com a extensão **axe DevTools**:

- `lang="pt-BR"` no HTML
- `meta description` configurado
- Skip link para pular ao conteúdo principal
- `role="banner"` no header
- `role="contentinfo"` no footer
- `aria-label` em todos os links e elementos interativos
- `aria-hidden="true"` em elementos decorativos
- `aria-live` em elementos de status dinâmico
- Contraste de cores aprovado (mínimo 4.5:1)
- Foco visível em todos os elementos interativos
- `rel="noopener noreferrer"` em links externos

---

## 📱 Responsividade

O layout é adaptado para três breakpoints:

| Breakpoint | Layout |
|---|---|
| Desktop (> 900px) | Grid de 3 colunas nos posts |
| Tablet (768px — 900px) | Grid de 2 colunas |
| Mobile (< 600px) | Grid de 1 coluna, menu hamburguer |

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js 18+
- npm 9+
- Angular CLI 17+
- JSON Server

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/vaningabriel01/petro-energy.git
cd petro-energy

# Instalar dependências
npm install

# Instalar Angular CLI globalmente (se necessário)
npm install -g @angular/cli

# Instalar JSON Server globalmente (se necessário)
npm install -g json-server
```

### Executando

Abra **dois terminais** na pasta do projeto:

**Terminal 1 — API:**
```bash
json-server --watch db.json --port 3000
```

**Terminal 2 — Angular:**
```bash
ng serve
```

Acesse a aplicação em: **http://localhost:4200**
Acesse a API em: **http://localhost:3000**

---

## 🏗️ Arquitetura da Aplicação

```
Usuário
   ↓
index.html (app-root)
   ↓
AppComponent (app.html)
   ├── app-cookie-consent (banner de cookies)
   ├── app-header (fixo em todas as páginas)
   │     ├── app-logo
   │     └── app-search-bar
   ├── main > router-outlet (conteúdo dinâmico por rota)
   │     ├── /           → Home
   │     ├── /sobre      → Sobre
   │     ├── /projetos   → Projetos
   │     ├── /post/:id   → PostView
   │     └── /busca      → Busca
   ├── app-scroll-to-top (botão flutuante)
   └── app-footer (fixo em todas as páginas)
         ├── app-logo
         ├── app-search-bar
         └── app-social-links

Comunicação com API:
Componente → PostsService → HttpClient → JSON Server (:3000)
Busca simultânea: forkJoin([getPosts(), getProjetos()])
```

---

## 📚 Conceitos Aplicados

- **SPA:** Navegação sem recarregamento de página via `RouterOutlet`
- **Componentização:** Separação de responsabilidades em componentes reutilizáveis
- **Injeção de dependência:** Services injetados via construtor
- **Signals:** Reatividade moderna do Angular 17+ para atualização da UI
- **Interfaces TypeScript:** Tipagem forte dos dados da API e da busca
- **CSS modular:** Cada componente possui seu próprio arquivo CSS
- **HTML semântico:** Uso correto de `header`, `nav`, `main`, `section`, `article`, `footer`
- **Rotas dinâmicas:** Parâmetro `:id` capturado via `ActivatedRoute`
- **forkJoin:** Requisições paralelas para busca simultânea em posts e projetos
- **HostListener:** Detecção de scroll para exibir botão de voltar ao topo
- **localStorage:** Persistência da preferência de cookies
- **SVG inline:** Ícones vetoriais sem dependências externas

---

## 👨‍💻 Autores

| Aluno | RA |
|---|---|
| Gabriel Camargo Vanin | 28325665 |
| Adriano Viana Dama | 28326260 |
| Arthur Faria Cardial | 28326154 |
| Caio Fellipe Soares Mendes | 28326042 |

---

*Trabalho desenvolvido para a disciplina de Códigos de Alta Performance*
