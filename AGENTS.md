# AI Agent Instructions for EffiAutoTask

## Overview

EffiAutoTask is a pnpm monorepo with a React/Vite frontend and a Node/Express backend.

- Frontend: `client/fronted/EffiAutoTask`
- Backend: `server/backend/EffiAutoTAsk`
- Root package scripts use `pnpm --recursive` for workspace commands.

## Key commands

Use the root workspace commands whenever possible:

- `pnpm install`
- `pnpm dev`
- `pnpm build`
- `pnpm lint`
- `pnpm test`
- `pnpm frontend:dev` (frontend only)
- `pnpm backend:dev` (backend only)

If a workspace script appears broken, use the package-local commands directly:

- Frontend: `cd client/fronted/EffiAutoTask && pnpm run dev`
- Backend: `cd server/backend/EffiAutoTAsk && pnpm run dev`

## Frontend notes

- Built with React 19, TypeScript, Vite, Tailwind CSS, and i18next.
- Main frontend source: `client/fronted/EffiAutoTask/src`
- Component folder: `client/fronted/EffiAutoTask/src/components`
- Important config files:
  - `client/fronted/EffiAutoTask/vite.config.ts`
  - `client/fronted/EffiAutoTask/tsconfig.json`
  - `client/fronted/EffiAutoTask/eslint.config.js`
  - `client/fronted/EffiAutoTask/tailwind.config.js`

## Backend notes

- Backend is a small Express/MongoDB service using ES modules.
- Main backend source: `server/backend/EffiAutoTAsk/src`
- Entrypoint: `server/backend/EffiAutoTAsk/index.js` via `pnpm run dev`
- API routes and services are in:
  - `server/backend/EffiAutoTAsk/src/routes/userRoutes.js`
  - `server/backend/EffiAutoTAsk/src/services/useService.js`
  - `server/backend/EffiAutoTAsk/src/models/users.js`

## Documents worth referencing

- Architecture docs: `client/docs/architecture/`
- Design decisions: `client/docs/decisions/`

## Developer guidance for AI agents

- Preserve existing frontend patterns and component conventions.
- Keep backend changes aligned with simple Express/MongoDB auth flows.
- Prefer workspace-level operations over manual package installs.
- If you modify scripts or package names, double-check the workspace `pnpm-workspace.yaml` and the actual package names.

## Notes for reviewers

- The repo currently has a backend package named `your-project-name` inside `server/backend/EffiAutoTAsk`.
- Avoid assuming that `pnpm backend` works without verifying the package selector.
