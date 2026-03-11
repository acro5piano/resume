[![build](https://github.com/acro5piano/resume/actions/workflows/build.yml/badge.svg)](https://github.com/acro5piano/resume/actions/workflows/build.yml)

# Resume

Bilingual resume of Kazuya Gosho, built with Vite + React + TypeScript.

![screenshot](https://github.com/acro5piano/resume/blob/master/screenshot.png)

Why I created this repository: https://dev.to/acro5piano/5-reasons-why-git-based-resume-is-awesome-127

# Getting started

```
pnpm install
pnpm dev
```

Open http://localhost:5173 to see the English resume, or http://localhost:5173/ja for Japanese.

# Architecture

Resume content lives in `content/en.md` and `content/ja.md` as markdown with YAML frontmatter. A single `---` in the markdown body acts as a column break for the two-column layout.

Vite builds two entry points: `index.html` (English) and `ja/index.html` (Japanese).

# Production build

```
pnpm build
```

# Contribution

I am not a native English speaker, so if you find something wrong, please create an issue or send a PR.
