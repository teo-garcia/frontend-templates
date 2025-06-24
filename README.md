# React Templates

A modern monorepo containing production-ready React application templates with shared tooling and best practices.

## 🚀 Templates

| Template                | Framework      | Port | Description                        |
| ----------------------- | -------------- | ---- | ---------------------------------- |
| **react-template-next** | Next.js 15     | 3000 | Full-stack React with Next.js      |
| **react-template-rr**   | React Router 7 | 5173 | Full-stack React with React Router |

## ⚡ Quick Start

```bash
# Install dependencies
pnpm install

# Run both templates simultaneously
pnpm dev

# Run specific template
pnpm dev:next    # Next.js on http://localhost:3000
pnpm dev:rr      # React Router on http://localhost:5173
```

## 🏗️ Monorepo Structure

```
react-templates/
├── apps/
│   ├── react-template-next/     # Next.js template
│   └── react-template-rr/       # React Router template
├── packages/
│   ├── eslint-config-custom/    # Shared ESLint configuration
│   ├── prettier-config/         # Shared Prettier configuration
│   └── tsconfig/               # Shared TypeScript configuration
└── [root configs]              # Nx, pnpm, husky, lint-staged
```

## 📚 Template Documentation

- **[Next.js Template](./apps/react-template-next/README.md)** - Server-side rendering, API routes, and Next.js features
- **[React Router Template](./apps/react-template-rr/README.md)** - Single-page application with React Router

## 🛠️ Shared Features

All templates include:

- **React 19** with latest features
- **TypeScript 5** with strict configuration
- **Tailwind CSS 4** for styling
- **ESLint + Prettier** for code quality
- **Jest + Testing Library** for unit testing
- **Playwright** for E2E testing
- **MSW** for API mocking
- **Husky + Lint-staged** for git hooks

## 🔧 Development Commands

```bash
# Development
pnpm dev           # Run both apps
pnpm dev:next      # Run Next.js app only
pnpm dev:rr        # Run React Router app only

# Building
pnpm build         # Build both apps
pnpm build:next    # Build Next.js app only
pnpm build:rr      # Build React Router app only

# Testing
pnpm test          # Run tests for both apps
pnpm test:next     # Run Next.js tests only
pnpm test:rr       # Run React Router tests only

# Linting
pnpm lint          # Lint both apps
pnpm lint:next     # Lint Next.js app only
pnpm lint:rr       # Lint React Router app only
```

## 📦 Package Management

### Adding Dependencies

**Shared dependency** (used by multiple templates):

```bash
pnpm add react-query
```

**Template-specific dependency**:

```bash
pnpm --filter react-template-next add next-auth
pnpm --filter react-template-rr add @remix-run/router
```
