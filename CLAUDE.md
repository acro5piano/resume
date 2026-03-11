# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start Vite dev server
pnpm build      # Type-check (tsc) then build static output
pnpm preview    # Preview production build
```

## Architecture

A bilingual resume site built with **Vite + React 19 + TypeScript**.

### Content

Resume content lives in `content/en.md` and `content/ja.md` as markdown with YAML frontmatter. Frontmatter holds structured data (name, subtitle, description, contact info with localized labels). The markdown body contains sections like work experience, education, skills, etc.

A single `---` in the markdown body acts as a **column break** — it renders as `<hr>` which CSS styles with `break-before: column` to force two-column layout separation.

### Rendering

- `src/App.tsx` — imports both markdown files as raw strings via `?raw`, parses frontmatter with `js-yaml`, selects language based on `window.location.pathname`
- `src/Resume.tsx` — renders the header/contact bar from frontmatter and passes the markdown body to `react-markdown`
- `src/app.css` — CSS variables for theming (`--info: #40cec0`), two-column layout via CSS `columns`, print-optimized styles

### Multi-page build

Vite builds two separate entry points: `index.html` (en) and `ja/index.html` (ja). Language detection is path-based (`/ja` → Japanese, `/` → English).

## Style

- Single quotes, no semicolons (enforced by prettier)
- 2-space indentation
