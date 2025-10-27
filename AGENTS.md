# Repository Guidelines

## Project Structure & Module Organization

- `apps/`: runnable apps.
  - `apps/docs/`: Next.js docs site and API reference.
  - `apps/showcase/`: Expo showcase app.
- `packages/`: reusable libraries.
  - `packages/cli/`: CLI tool (@blen/usmds), built with `tsup`.
  - `packages/registry/`: React Native UI components (USMDS) and tests.

Common entry points: `packages/registry/src/index.ts`, components in `packages/registry/src/usa/components/ui/*.tsx`, tests in `packages/registry/src/usa/tests/*.*`.

## Build, Test, and Development Commands

- `pnpm build`: Turbo build for all workspaces.
- `pnpm dev`: Run all dev scripts (e.g., docs, showcase, CLI) where defined.
- `pnpm build:docs`: Build the docs app only.
- `pnpm dev:docs`: Run the docs app in development mode.
- `pnpm dev:showcase`: Run the showcase app in development mode.
- Registry tests: `pnpm --filter @blen/react-native-usmds-registry test` (watch: `test:watch`, coverage: `test:coverage`).

Node 22+ and pnpm 10+ are required.

## Coding Style & Naming Conventions

- TypeScript across packages; React Native components export PascalCase (e.g., `Button`) from lowercase files (e.g., `button.tsx`).
- Indentation: 2 spaces; avoid semicolons in TSX where existing files omit them; prefer named exports.
- Styling via `nativewind`/Tailwind utilities and `class-variance-authority` (`cva`).
- Formatting: `pnpm format` (Prettier 3) on `ts`, `tsx`, `md`.

## Testing Guidelines

- Framework: Jest with `@testing-library/react-native` and `jest-expo` setup (`packages/registry/jest.setup.js`).
- Location: place tests under `packages/registry/src/usa/tests/`, name `component.test.tsx`.
- Run: `pnpm --filter @blen/react-native-usmds-registry test` before opening a PR. Aim to cover variants/props and accessibility roles.

## Commit & Pull Request Guidelines

- Commits: Conventional Commits (e.g., `feat(button): add loading state`).
- PRs must include: concise description, linked issues, relevant screenshots/GIFs for visual changes, tests for new behavior, and docs updates when applicable.
- Keep changes scoped to a single feature/fix; update CHANGELOG is automated via semantic-release.

## Security & Configuration Tips

- Avoid committing secrets; prefer `.env` only in app workspaces when needed (not committed).
- Use `pnpm --filter` to target specific workspaces to keep CI fast.
