# 🏍️ TampaCoco — E-commerce de Capacetes para Motociclistas

E-commerce moderno para venda de capacetes de motocicleta, construído com **Next.js 14**, **React 18** e **CSS Modules**.

## ✨ Funcionalidades

- **Catálogo de Produtos** — navegação e filtragem de capacetes
- **Página de Produto** — detalhes, imagens e especificações
- **Carrinho de Compras** — adicionar, remover e atualizar itens
- **Checkout** — fluxo de finalização de pedido
- **HelmGuide** — quiz interativo para ajudar na escolha do capacete ideal
- **HelmSize** — calculadora de tamanho de capacete
- **Certificações (HelmSafe)** — informações sobre certificações de segurança
- **Comparador** — comparação lado a lado entre capacetes
- **Blog** — artigos e conteúdos sobre o universo motociclista
- **FAQ** — perguntas frequentes
- **Sobre** — página institucional
- **Login / Cadastro** — autenticação de usuários
- **Conta** — área do usuário

## 🛠️ Tecnologias

| Tecnologia | Versão |
|---|---|
| Next.js | 14.2.35 |
| React | 18.x |
| Node.js | ≥ 18 |
| CSS Modules | — |
| ESLint | 8.x |

## 📁 Estrutura do Projeto

```
site/
├── src/
│   ├── app/                  # Rotas e páginas (App Router)
│   │   ├── page.js           # Página inicial (Home)
│   │   ├── layout.js         # Layout raiz
│   │   ├── globals.css       # Estilos globais
│   │   ├── blog/             # Página do blog
│   │   ├── carrinho/         # Página do carrinho
│   │   ├── catalogo/         # Catálogo de produtos
│   │   ├── certificacoes/    # Certificações de segurança
│   │   ├── checkout/         # Finalização de compra
│   │   ├── comparador/       # Comparador de capacetes
│   │   ├── conta/            # Área do usuário
│   │   ├── faq/              # Perguntas frequentes
│   │   ├── helmguide/        # Quiz de escolha de capacete
│   │   ├── helmsize/         # Calculadora de tamanho
│   │   ├── login/            # Login e cadastro
│   │   ├── produto/          # Página de detalhe do produto
│   │   └── sobre/            # Página institucional
│   ├── components/           # Componentes reutilizáveis
│   │   ├── Header.jsx        # Cabeçalho / Navegação
│   │   ├── Footer.jsx        # Rodapé
│   │   └── ProductCard.jsx   # Card de produto
│   ├── context/              # Contextos do React (ex: CartContext)
│   └── data/                 # Dados estáticos (produtos, certificações, etc.)
├── public/                   # Arquivos estáticos
├── package.json
├── next.config.mjs
└── jsconfig.json
```

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) versão **18 ou superior**
- [npm](https://www.npmjs.com/) (já incluso com o Node.js) ou outro gerenciador de pacotes (yarn, pnpm, bun)
- [Git](https://git-scm.com/)

### 1. Clonar o repositório

```bash
git clone <url-do-repositório>
cd capacete/site
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Rodar o servidor de desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador para ver a aplicação.

> A página atualiza automaticamente conforme você edita os arquivos.

### 4. Gerar build de produção

```bash
npm run build
```

### 5. Rodar a versão de produção localmente

```bash
npm run start
```

### 6. Rodar o linter (verificação de código)

```bash
npm run lint
```

## 📜 Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção otimizado |
| `npm run start` | Inicia o servidor de produção (requer build) |
| `npm run lint` | Executa o ESLint para verificação de código |

## 🚢 Deploy

A forma mais simples de fazer deploy é pela [Vercel](https://vercel.com/), a plataforma criada pelos mesmos desenvolvedores do Next.js.

Consulte a [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.

## 📚 Saiba Mais

- [Documentação do Next.js](https://nextjs.org/docs) — recursos e API do Next.js
- [Tutorial Interativo do Next.js](https://nextjs.org/learn) — aprenda Next.js na prática
- [Repositório do Next.js no GitHub](https://github.com/vercel/next.js)
