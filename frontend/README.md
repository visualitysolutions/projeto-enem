# Passo — landing page de estudos para o Enem

Frontend responsivo em Next.js (App Router), TypeScript, Tailwind CSS v4 e shadcn/ui com Radix. Fraunces nos títulos e Instrument Sans nos textos, servidas localmente por Fontsource. A logo fornecida está em `public/enem-logo.png`.

## Executar

Requer Node.js 20.9 ou superior.

```bash
npm install
npm run dev
```

Abra http://localhost:3000. Para compilar e executar em produção:

```bash
npm run build
npm start
```

## Conteúdo e interações

- Navegação por âncoras para início, sobre e planos; menu próprio no celular.
- Prévia semanal interativa: clicar em um dia altera a matéria e os exercícios exibidos.
- Comparação entre dois planos e cadastro com o plano selecionado.
- Fluxo de navegação e seleção de planos sem autenticação.
- Perguntas frequentes expansíveis e navegação por teclado.
- Metadados em português, favicon próprio, suporte a movimento reduzido e fontes locais.

## Limites desta entrega

Somente a landing page foi implementada. Não há backend, autenticação, cobrança, área do aluno ou download de materiais. A marca Passo, os preços e os benefícios dos planos são propostas ilustrativas para revisão antes do lançamento.

## Onde editar

- `src/app/page.tsx`: textos, exemplos da semana, planos e interações.
- `src/app/globals.css`: identidade visual, tokens de cores e responsividade.
- `src/app/layout.tsx`: fontes e metadados.
- `src/components/ui/`: componentes shadcn/ui.

O comando `npm run build` verifica TypeScript e gera a versão de produção. `npm run lint` está disponível para análise estática.
