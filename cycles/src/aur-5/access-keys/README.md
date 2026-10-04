# access-keys

Módulo sintético de chaves virtuais para fechaduras inteligentes.
Material da **S4 do Ciclo 7 — TypeScript avançado (AUR-5)**.

Código legado, escrito com `strict: false`. Sua missão na S4 é migrá-lo para `strict: true`.

## Como rodar

```bash
npm install
npm run demo          # compila (sem strict) e executa os fluxos principais
npm run check:strict  # compila com strict: true e lista os erros
npm run baseline      # mede any explícitos + erros do strict
```

## Estrutura

| Arquivo | O que faz |
|---|---|
| `src/types.ts` | Tipos de domínio: `VirtualKey`, `Lock`, `User` |
| `src/lock-sdk.ts` | Simula o SDK do fabricante (callback + Promise) |
| `src/key-repository.ts` | "Banco" em memória |
| `src/key-service.ts` | Regras de negócio (onde está a maior parte dos problemas) |
| `src/index.ts` | Demo que exercita todos os fluxos |

## Baseline (medida em 01/10/2026, TypeScript 5.6)

| Métrica | Valor |
|---|---|
| Linhas de código | 229 |
| `any` explícitos | 5 |
| Erros com `strict: true` | 32 |

Erros por código:

| Código | Qtd | Significado |
|---|---|---|
| TS7006 | 17 | Parâmetro com `any` implícito (`noImplicitAny`) |
| TS18048 | 8 | Valor possivelmente `undefined` (`strictNullChecks`) |
| TS7053 | 4 | Acesso por índice com `any` implícito |
| TS2345 | 2 | Argumento incompatível com o parâmetro |
| TS18046 | 1 | Valor do tipo `unknown` usado sem narrowing |

## Regras da migração

1. **Meta:** `npm run baseline` termina com **0 any explícitos e 0 erros**.
2. **Proibido:** `any`, `as any`, `// @ts-ignore`, `// @ts-expect-error` e non-null assertion (`!`).
3. **Permitido:** `unknown` + narrowing, type guards, mudar tipos em `types.ts`, criar tipos novos.
4. **`lock-sdk.ts`:** pode tipar, mas não pode mudar o comportamento (callback, Promise com string JSON, erro como objeto).
5. **Comportamento:** a saída do `npm run demo` deve continuar a mesma para os casos felizes.

## 🐛 Bônus

Este código tem **pelo menos 3 bugs de runtime** que hoje estão escondidos.
O strict mode vai apontar todos. Anote quais são e como você decidiu tratá-los
(lançar erro, retornar `null`, valor padrão…). A decisão faz parte da entrega.
