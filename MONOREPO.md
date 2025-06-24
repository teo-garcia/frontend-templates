# Frontend Templates Monorepo

## 🏗️ Structure

```
frontend-templates/
├── apps/
│   ├── react-template-next/     # Next.js app (port 3000)
│   └── react-template-rr/       # React Router app (port 5173)
├── packages/
│   ├── eslint-config-custom/    # Shared ESLint config
│   ├── prettier-config/         # Shared Prettier config
│   └── tsconfig/               # Shared TypeScript config
└── [root configs]              # Nx, pnpm, husky, lint-staged
```

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Run both apps in development
pnpm dev

# Run specific app
pnpm dev:next    # Next.js on http://localhost:3000
pnpm dev:rr      # React Router on http://localhost:5173

# Build all apps
pnpm build

# Run tests
pnpm test

# Lint all code
pnpm lint
```

## 📦 Dependency Management

### Hoisted Dependencies (Root Level)

- **React ecosystem**: `react`, `react-dom`, `@tanstack/react-query`
- **Development tools**: `typescript`, `eslint`, `prettier`, `jest`
- **Testing utilities**: `@testing-library/*`, `@playwright/test`
- **Common utilities**: `clsx`, `lucide-react`

### App-Specific Dependencies

- **Next.js app**: `next`, `@next/*`, `next-themes`, `client-only`, `server-only`
- **React Router app**: `@react-router/*`, `react-router`, `vite`, `@vitejs/*`

### Why This Structure?

- ✅ **Consistency**: All apps use the same React version
- ✅ **Efficiency**: Shared dependencies installed once
- ✅ **Flexibility**: Apps can have different framework versions
- ✅ **Clarity**: Dependencies are where you expect them

## 🔧 Available Scripts

### Root Level Scripts

```bash
# Development
pnpm dev           # Run both apps in parallel
pnpm dev:next      # Run only Next.js app
pnpm dev:rr        # Run only React Router app

# Building
pnpm build         # Build both apps in parallel
pnpm build:next    # Build only Next.js app
pnpm build:rr      # Build only React Router app

# Testing
pnpm test          # Run tests for both apps
pnpm test:next     # Run tests for Next.js app
pnpm test:rr       # Run tests for React Router app

# Linting
pnpm lint          # Lint both apps in parallel
pnpm lint:next     # Lint only Next.js app
pnpm lint:rr       # Lint only React Router app

# Utilities
pnpm clean         # Clean all node_modules and Nx cache
```

## 🪝 Git Hooks (Husky)

### Pre-commit Hook

Automatically runs on every commit:

1. **Type checking** for all apps in parallel
2. **Lint-staged** for formatting and linting changed files

### Lint-staged Configuration

- **Apps**: Prettier + ESLint for `.{js,jsx,ts,tsx}` files
- **Packages**: Prettier + ESLint for shared configs
- **Global**: Prettier for `.json`, `.md`, `.css` files

## 🏗️ Nx Configuration

### Caching

All build, test, and lint operations are cached for faster subsequent runs.

### Parallel Execution

- Development: Both apps can run simultaneously
- Building: Apps build in parallel for faster CI/CD
- Testing: Tests run in parallel across apps

### Task Targets

- `dev`: Development server
- `build`: Production build
- `test`: Unit tests
- `lint`: ESLint checking
- `lint:ts`: TypeScript type checking

## 🌐 Port Configuration

- **Next.js**: `http://localhost:3000`
- **React Router**: `http://localhost:5173`

This avoids port conflicts and uses each framework's conventional ports.

## 🔄 Workflow

### Adding New Dependencies

**Shared dependency** (used by multiple apps):

```bash
# Add to root
pnpm add react-query
```

**App-specific dependency**:

```bash
# Add to specific app
pnpm --filter react-template-next add next-auth
pnpm --filter react-template-rr add @remix-run/router
```

### Creating New Apps

1. Create in `apps/` directory
2. Add `project.json` with Nx configuration
3. Update root scripts if needed
4. Add app-specific dependencies to app's `package.json`

### Creating New Packages

1. Create in `packages/` directory
2. Add to other apps using `workspace:*` reference
3. Export from package's `package.json`

## 🚨 Common Pitfalls to Avoid

❌ **Don't** add React/React-DOM to individual apps
❌ **Don't** create separate husky configs in apps
❌ **Don't** duplicate lint-staged configurations
❌ **Don't** use the same ports for different apps
❌ **Don't** add framework-specific deps to root

✅ **Do** hoist truly shared dependencies
✅ **Do** keep framework deps in their respective apps
✅ **Do** use workspace references for internal packages
✅ **Do** leverage Nx caching and parallel execution
✅ **Do** maintain consistent script naming

## 📚 Best Practices

1. **Dependency Hoisting**: Only hoist dependencies used by 2+ apps
2. **Version Pinning**: Use exact versions (no `^` or `~`) for predictability
3. **Workspace References**: Use `workspace:*` for internal packages
4. **Parallel Execution**: Leverage `--parallel` for faster operations
5. **Caching**: Let Nx handle caching automatically
6. **Port Management**: Use conventional ports to avoid conflicts
