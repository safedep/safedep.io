# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- Development: `npm run dev` or `npm start`
- Build: `npm run build`
- Preview: `npm run preview`
- Lint: `npm run check:eslint`
- Format: `npm run check:prettier`
- Fix issues: `npm run fix` (runs eslint and prettier fixes)
- Type check: `npm run check:astro`
- Verify all: `npm run check` (runs all checks)

## Code Style
- TypeScript with strict null checks
- Indentation: 2 spaces
- Quotes: Single quotes
- Line length: 120 characters
- Components: Use .astro files for UI components
- Blog content: MDX files with required frontmatter
- Styling: TailwindCSS (see tailwind.config.js)
- Font stack: 
  - Rubik Variable for headings and UI text
  - JetBrains Mono Variable for code/monospace elements
  - Inter Variable for supplementary text
- Imports: Group by type (React/Astro first, then components, then utils)
- Error handling: Use try/catch blocks with appropriate logging
- Naming: camelCase for variables/functions, PascalCase for components