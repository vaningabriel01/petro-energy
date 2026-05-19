# 🛢️ Petro Energy — Site Corporativo

Trabalho Semestral — Desenvolvimento de Aplicações Web 

**Aluno:** Adriano Viana Dama 
**RA:** 28326260

**Aluno:** Arthur Faria Cardial 
**RA:** 28326154 

**Aluno:** Caio Fellipe Soares Mendes  
**RA:** 28326042  

**Aluno:** Gabriel Camargo Vanin  
**RA:** 28325665 

---

## 📋 Sobre o Projeto

O **Petro Energy** é um site corporativo fictício desenvolvido como trabalho semestral, utilizando **Angular** como framework principal. A aplicação é uma **SPA (Single Page Application)** que simula o portal de uma empresa petrolífera brasileira, com feed de notícias, projetos sociais, página institucional e visualização de posts completos.

---

## 🎯 Requisitos Atendidos

| Requisito | Status |
|---|---|
| Mínimo de 3 páginas | ✅ 4 páginas |
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
│   └── post-card/
│       ├── post-card.ts
│       ├── post-card.html
│       └── post-card.css
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
│   └── post-view/
│       ├── post-view.ts
│       ├── post-view.html
│       └── post-view.css
│
├── services/
│   └── posts.ts
│
├── interfaces/
│   ├── post.ts
│   └── projeto.ts
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

### Detalhes do Post (`/post/:id`)
- Rota dinâmica com parâmetro `:id`
- Busca do post específico via API pelo ID
- Exibição completa do conteúdo
- Imagem, categoria, data e texto completo
- Botão de retorno para a home

---

## 🧩 Componentes

### `app-header`
Componente compartilhado de cabeçalho com:
- Logo e nome da empresa
- Menu de navegação com `RouterLink` e `RouterLinkActive`
- `role="banner"` para acessibilidade
- Responsivo com botão de toggle para mobile

### `app-footer`
Componente compartilhado de rodapé com:
- Nome e slogan da empresa
- Links de navegação secundária
- `role="contentinfo"` para acessibilidade

### `app-post-card`
Componente reutilizável de card de post com:
- `@Input()` para receber dados do post
- Imagem, categoria, título, resumo e data
- Link para página de detalhes via `RouterLink`

---

## ⚙️ Tecnologias Utilizadas

| Tecnologia | Versão | Uso |
|---|---|---|
| Angular | 19+ | Framework principal |
| TypeScript | 5+ | Linguagem de programação |
| HTML5 | — | Marcação semântica |
| CSS3 | — | Estilização modularizada |
| JSON Server | 1+ | API REST mock |
| HttpClient | Angular | Comunicação HTTP |
| Angular Router | Angular | Navegação SPA |
| Angular Signals | Angular 17+ | Reatividade de dados |

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
- `role="main"` no conteúdo principal
- `aria-label` em todos os links e elementos interativos
- `aria-hidden="true"` em elementos decorativos
- `aria-live` em elementos de status dinâmico
- Contraste de cores aprovado (mínimo 4.5:1)
- Foco visível em todos os elementos interativos

---

## 📱 Responsividade

O layout é adaptado para três breakpoints:

| Breakpoint | Layout |
|---|---|
| Desktop (> 900px) | Grid de 3 colunas nos posts |
| Tablet (768px — 900px) | Grid de 2 colunas |
| Mobile (< 600px) | Grid de 1 coluna |

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
git clone <https://github.com/vaningabriel01/petro-energy.git>
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
   ├── app-header (fixo em todas as páginas)
   ├── main > router-outlet (conteúdo dinâmico por rota)
   │     ├── /          → HomeComponent
   │     ├── /sobre     → SobreComponent
   │     ├── /projetos  → ProjetosComponent
   │     └── /post/:id  → PostViewComponent
   └── app-footer (fixo em todas as páginas)

Comunicação com API:
Componente → PostsService → HttpClient → JSON Server (porta 3000)
```

---

## 📚 Conceitos Aplicados

- **SPA:** Navegação sem recarregamento de página via `RouterOutlet`
- **Componentização:** Separação de responsabilidades em componentes reutilizáveis
- **Injeção de dependência:** Services injetados via construtor
- **Signals:** Reatividade moderna do Angular 17+ para atualização da UI
- **Interfaces TypeScript:** Tipagem forte dos dados da API
- **CSS modular:** Cada componente possui seu próprio arquivo CSS
- **HTML semântico:** Uso correto de `header`, `nav`, `main`, `section`, `article`, `footer`
- **Rotas dinâmicas:** Parâmetro `:id` capturado via `ActivatedRoute`

---

## 👨‍💻 Autores
**FRONTEND/UI**(\)
Arthur Faria Cardial   
Caio Fellipe Soares Mendes

**BACKEND/API**(\)
Adriano Viana Dama 

**ANGULAR/ARQUITETURA**(\)
Gabriel Camargo Vanin

 
  

---

*Trabalho desenvolvido para a disciplina de Codigos de alta performance*
