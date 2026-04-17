# Project Notes

## Stack
- React 19 + Vite
- Tailwind CSS v4 (CSS-based config, no `tailwind.config.js`)
- ESLint flat config (v9)
- No TypeScript

## Commands
```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # Lint with ESLint
npm run preview  # Preview production build
```

## Notable Config
- `eslint.config.js`: `no-unused-vars` allows uppercase variables (e.g., `SOME_CONST`)
- Tailwind v4 configured via `@theme` in `src/index.css`
- Dark mode via CSS `prefers-color-scheme` media query
