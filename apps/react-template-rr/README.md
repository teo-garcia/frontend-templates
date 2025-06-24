# React Router Template

A modern single-page application template built with React Router 7, Vite, and TypeScript.

![Package License](https://img.shields.io/github/license/teo-garcia/react-template-rr)
![Package Version](https://img.shields.io/github/package-json/v/teo-garcia/react-template-rr)

## 🚀 Features

### React Router Specific

- **React Router 7** with modern routing patterns
- **File-based routing** for intuitive navigation
- **Nested routes** and layouts
- **Route loaders** for data fetching
- **Route actions** for form handling
- **Error boundaries** per route

### Development & Performance

- **Vite** for lightning-fast development and optimized builds
- **TypeScript** with strict configuration
- **Tailwind CSS 4** for utility-first styling
- **ESLint + Prettier** for code quality
- **Jest + Testing Library** for unit testing
- **Playwright** for E2E testing
- **MSW** for API mocking

## 🏗️ Project Structure

```
react-template-rr/
├── app/
│   ├── components/              # Shared components
│   │   ├── theme-provider.tsx   # Theme context
│   │   ├── theme-switch/        # Theme toggle
│   │   └── viewport-info/       # Responsive utilities
│   ├── features/                # Feature-specific components
│   ├── lib/                     # Utilities and configurations
│   │   ├── hooks/               # Custom hooks
│   │   ├── misc/                # Utilities
│   │   └── mocks/               # MSW mocks
│   ├── routes/                  # Route components
│   │   └── index.tsx            # Home route
│   ├── root.tsx                 # Root component
│   ├── routes.ts                # Route configuration
│   └── app.css                  # Global styles
├── e2e/                         # Playwright tests
└── [config files]              # Vite, TypeScript, etc.
```

## 🔧 Development

### Running the App

From the monorepo root:

```bash
# Development server
pnpm dev:rr

# Production build
pnpm build:rr

# Run tests
pnpm test:rr

# Lint code
pnpm lint:rr
```

### React Router Specific Commands

```bash
# Start production server (after build)
cd apps/react-template-rr
pnpm start:web

# Preview build locally
pnpm preview
```

## 🛠️ Available Commands

| Command     | Description                      |
| ----------- | -------------------------------- |
| `dev`       | Run development server           |
| `build`     | Build for production             |
| `start:web` | Serve production build           |
| `test:unit` | Run unit tests                   |
| `test:e2e`  | Run E2E tests                    |
| `lint:css`  | Lint CSS files                   |
| `lint:js`   | Lint JavaScript/TypeScript files |
