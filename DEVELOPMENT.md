# Development Guide

## Code Quality Standards

This project uses professional-grade tooling to maintain code quality and consistency.

### Tools

- **ESLint**: Linting and code quality checks
- **Prettier**: Code formatting
- **TypeScript**: Static type checking
- **Husky**: Git hooks for pre-commit checks
- **lint-staged**: Run linters on staged files only

## Available Scripts

### Development

```bash
npm run dev          # Start development server
npm run host         # Start dev server with network access
```

### Code Quality

```bash
npm run lint         # Run ESLint (no auto-fix, max 0 warnings)
npm run lint:fix     # Run ESLint with auto-fix
npm run lint:check   # Check linting without fixing
npm run format       # Format all files with Prettier
npm run format:check # Check formatting without fixing
npm run type-check   # Run TypeScript compiler checks
npm run check-all    # Run all checks (type + lint + format)
```

### Build

```bash
npm run build        # Build for production
npm run preview      # Preview production build
```

## Git Hooks

### Pre-commit Hook

Every commit automatically runs (on **staged files only**):

1. **ESLint** with auto-fix on staged TypeScript/TSX files
2. **Prettier** formatting on staged files

**Fast & Efficient** - Only checks files you're committing, keeping commits quick.

### Pre-push Hook

Every push automatically runs (on **entire codebase**):

1. **TypeScript compilation** (`npm run type-check`)
2. **ESLint** on all files (`npm run lint:check`)
3. **Prettier** format check on all files (`npm run format:check`)

**Thorough Quality Gate** - Ensures no broken code reaches the remote repository.

If any check fails, the push will be blocked until you fix the issues.

## TypeScript Rules

### Strict Mode Enabled

- `noImplicitAny`: All variables must have explicit types
- `strictNullChecks`: Null and undefined must be explicitly handled
- `noUncheckedIndexedAccess`: Array/object access returns `T | undefined`
- `noUnusedLocals`: No unused variables allowed
- `noUnusedParameters`: No unused function parameters

### Allowed Patterns

```typescript
// Prefix with underscore to ignore unused variables
function example(_unusedParam: string): void {
  const _unusedVar = "ignored";
}
```

## ESLint Rules

### Banned

- Explicit `any` types
- `var` keyword (use `const` or `let`)
- `console.log` (use `console.warn` or `console.error`)
- Debugger statements
- Loose equality (`==`, use `===`)

### Warnings

- Missing return types on functions
- Not using optional chaining when possible
- Not using nullish coalescing when possible
- Template literals vs string concatenation

### React Rules

- **Hooks exhaustive deps**: Dependencies must be declared
- **Component exports**: Only export components from files

### Accessibility

All JSX elements must follow accessibility best practices (via `eslint-plugin-jsx-a11y`).

## Common Issues & Fixes

### "Type 'any' is not allowed"

```typescript
// Bad
const data: any = await fetch();

// Good
interface ApiResponse {
  id: number;
  name: string;
}
const data: ApiResponse = await fetch();
```

### "Variable is declared but never used"

```typescript
// Bad
const result = calculate();

// Good - use it
const result = calculate();
console.warn(result);

// Good - prefix with _ if intentionally unused
const _result = calculate();
```

### "Function return type missing"

```typescript
// Bad
function getData() {
  return { id: 1 };
}

// Good
function getData(): { id: number } {
  return { id: 1 };
}

// Good - inline expressions don't need return types
const getData = () => ({ id: 1 });
```

### "Missing dependencies in useEffect"

```typescript
// Bad
useEffect(() => {
  fetchData(userId);
}, []); // Missing 'userId' dependency

// Good
useEffect(() => {
  fetchData(userId);
}, [userId]);
```

## Best Practices

1. **Git hooks run automatically** - Pre-commit checks staged files, pre-push runs full check-all
2. **Use explicit types** instead of relying on inference for public APIs
3. **Handle null/undefined** explicitly with optional chaining or null checks
4. **Prefix unused variables** with underscore (`_`)
5. **Use `const`** by default, `let` only when reassignment is needed
6. **Avoid console.log** in production code (use proper logging or remove)
7. **Write accessible JSX** following ARIA guidelines

## IDE Setup

### VS Code (Recommended)

Install extensions:

- **ESLint** (`dbaeumer.vscode-eslint`)
- **Prettier** (`esbenp.prettier-vscode`)

Add to `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

## Troubleshooting

### Git hooks not running

```bash
npm run prepare
chmod +x .husky/pre-commit
chmod +x .husky/pre-push
```

### ESLint errors on config files

Config files (`.js`, `.ts` in root) are excluded from strict type checking.

### Type checking is slow

Type checking requires parsing `tsconfig` - this is normal. Use `npm run lint:fix` for faster checks during development.

### Pre-push hook takes too long

The pre-push hook runs the full `check-all` suite. This ensures code quality but may take 10-30 seconds. This is intentional and prevents broken code from reaching the repository.
