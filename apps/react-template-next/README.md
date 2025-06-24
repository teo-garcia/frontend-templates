# Next.js Template

A production-ready Next.js 15 template with server-side rendering, API routes, and modern React features.

![Package License](https://img.shields.io/github/license/teo-garcia/react-template-next)
![Package Version](https://img.shields.io/github/package-json/v/teo-garcia/react-template-next)

## 🚀 Features

### Next.js Specific

- **Next.js 15** with App Router
- **Server-side rendering (SSR)** and **Static site generation (SSG)**
- **API routes** with built-in middleware support
- **Layouts** and nested routing
- **Image optimization** with `next/image`
- **Font optimization** with `next/font`
- **Metadata API** for SEO

### Development & Testing

- **TypeScript** with strict configuration
- **Tailwind CSS 4** for styling
- **ESLint + Prettier** for code quality
- **Jest + Testing Library** for unit testing
- **Playwright** for E2E testing
- **MSW** for API mocking

## 🏗️ Project Structure

```
react-template-next/
├── app/
│   ├── api/                     # API routes
│   ├── components/              # Shared components
│   │   ├── global-providers/    # Context providers
│   │   ├── theme-switch/        # Theme switching
│   │   └── viewport-info/       # Responsive utilities
│   ├── features/                # Feature-specific components
│   ├── lib/                     # Utilities and configurations
│   │   ├── hooks/               # Custom hooks
│   │   ├── misc/                # Utilities
│   │   ├── mocks/               # MSW mocks
│   │   └── styles/              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── error.tsx                # Error boundary
│   └── not-found.tsx            # 404 page
├── e2e/                         # Playwright tests
└── [config files]              # Next.js, TypeScript, etc.
```

## 🔧 Development

### Running the App

From the monorepo root:

```bash
# Development server
pnpm dev:next

# Production build
pnpm build:next

# Run tests
pnpm test:next

# Lint code
pnpm lint:next
```

### Next.js Specific Commands

```bash
# Start production server (after build)
cd apps/react-template-next
pnpm start

# Analyze bundle size
pnpm analyze
```
