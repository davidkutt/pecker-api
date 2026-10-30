# AGENTS.md

## Project

pecker-api is the TypeScript service of the pecker project and the TypeScript pilot repository for nest V1 (the Pi configuration in `davidkutt/pecker-nest`). For now it is a toolchain skeleton: one pure utility module (`src/slug.ts`) with tests, so agents and quality gates have real code to work on. The HTTP layer is not chosen yet.

## Commands

| Purpose | Command |
| --- | --- |
| Install | `pnpm install --frozen-lockfile` |
| Check (lint, types, tests) | `pnpm run check` |
| Unit tests | `pnpm test` |
| One test file | `pnpm exec vitest run src/slug.test.ts` |
| One test by name | `pnpm exec vitest run -t "name"` |
| Typecheck only | `pnpm run typecheck` |
| Lint only | `pnpm run lint` |

`pnpm run check` is the quality gate (`.pi/gate.json`). It must pass before a task counts as done.

## Architecture rules

- All source lives in `src/`, one module per concern. Tests sit next to the code as `<module>.test.ts`.
- Modules in `src/` are pure unless their name says otherwise: no network, filesystem or environment access in utility modules.
- No runtime dependencies yet. Adding one, including the HTTP framework, needs approval first.
- Node 22.18 or newer; the container runs Node 24.

## Code conventions

- TypeScript `strict` with `noUncheckedIndexedAccess`. No `any` without a comment explaining why; no `@ts-ignore` or `@ts-expect-error`.
- ESM with named exports. Relative imports end in `.js` (NodeNext resolution), also in tests.
- Tabs for indentation, double quotes.
- Tests use Vitest (`describe`/`it`/`expect`); test names state behavior.

## Definition of done

1. Behavior change is covered by a test that failed before the change.
2. `pnpm run check` passes.
3. No unrelated changes in the diff.
4. Public API changes are noted in the PR description.
