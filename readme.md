# Memo AI

![image](https://github.com/user-attachments/assets/72b7429e-e661-439a-90a1-54f8d67976a1)

## Introdução

Memo AI é uma plataforma de IA que permite fazer upload de conversas em formato de áudio e gerar uma transcrição completa dessa conversa, bem como fazer um resumo detalhado. É possível também interagir com essas transcrições e resumos através de um chatbot.

<img src="https://img.shields.io/static/v1?label=STATUS&message=DEVELOPING&color=000000&style=for-the-badge"/> <img src="https://img.shields.io/static/v1?label=NODE&message=V20.18.1&color=000000&style=for-the-badge"/> <img src="https://img.shields.io/static/v1?label=LICENSE&message=MIT&color=000000&style=for-the-badge"/>

## Tecnologias

- Linguagem: [TypeScript](https://www.typescriptlang.org/)
- Biblioteca: [ReactJS](https://react.dev/)
- Framework: [Next.js](https://nextjs.org/)
- Componentes: [Shadcn-ui](https://ui.shadcn.com/)
- Ícones: [Lucide React](https://lucide.dev/)
- Requisições HTTP: [Axios](https://axios-http.com/ptbr/docs/intro)
- SDK de IA: [Vercel AI SDK](https://ai-sdk.dev/)

## Funcionalidades

- [x] Transcrição de áudios em tempo real.
- [ ] Resumo detalhado da transcrição.
- [ ] Chatbot integrado com as transcrições e resumos.

## Instalação

Clone o repositório:

```bash
git clone https://github.com/izaiasmorais/memo-ai
cd memo-ai
```

Instale as dependências:

```bash
pnpm install
```

Configure o arquivo .env com suas credenciais:

```env
DATABASE_URL=
OPENAI_API_KEY=
```

## Executando o Projeto

Inicie o servidor:

```bash
pnpm dev
```

Acesse o projeto em `http://localhost:3000`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está sob a licença MIT.
