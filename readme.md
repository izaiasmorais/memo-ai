# Memory Mind

## Introdução

Memory Mind é uma plataforma de IA que permite criar agentes inteligentes com memória contextual. Você pode subir documentos, blocos de texto ou código para treinar a IA em chats específicos, tornando cada chat um especialista no tema desejado. Por exemplo, crie um chat "Clean Architecture", envie exemplos de código e faça perguntas para obter respostas contextualizadas e precisas, otimizando o uso da IA para aprendizado, desenvolvimento e automação de conhecimento.

<img src="https://img.shields.io/static/v1?label=STATUS&message=DEVELOPING&color=000000&style=for-the-badge"/> <img src="https://img.shields.io/static/v1?label=NODE&message=V20.18.1&color=000000&style=for-the-badge"/> <img src="https://img.shields.io/static/v1?label=LICENSE&message=MIT&color=000000&style=for-the-badge"/>

## Tecnologias

- Linguagem: [TypeScript](https://www.typescriptlang.org/)
- Biblioteca: [ReactJS](https://react.dev/)
- Framework: [Next.js](https://nextjs.org/)
- Componentes: [Shadcn-ui](https://ui.shadcn.com/)
- Gerenciamento de formulários: [React Hook Form](https://www.react-hook-form.com/)
- Validação: [Zod](https://zod.dev/)
- Ícones: [Lucide React](https://lucide.dev/)
- SDK de IA: [Vercel AI SDK](https://ai-sdk.dev/)

## Funcionalidades

- [ ] Dashboard com visão geral dos agentes e chats.
- [ ] Criação de chats especializados (agentes) com memória contextual.
- [ ] Upload de documentos, textos e códigos para treinar a IA de cada chat.
- [ ] Chat inteligente para interação com agentes treinados.
- [ ] Geração de resumos automáticos a partir dos conteúdos enviados.
- [ ] Organização e consulta de documentos enviados.
- [ ] Podcasts e áudios integrados para consumo de conteúdo.
- [ ] Outras ferramentas de produtividade baseadas em IA.
- [ ] Ajuda e suporte integrado.
- [ ] Design responsivo e modo noturno.

## Instalação

Clone o repositório:

```bash
git clone https://github.com/izaiasmorais/memory-mind
cd memory-mind
```

Instale as dependências:

```bash
pnpm install
```

Configure o arquivo .env com suas credenciais:

```env
# Exemplo de variáveis de ambiente
DATABASE_URL=
OPENAI_API_KEY=
# Outras chaves de provedores de IA, se necessário
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
