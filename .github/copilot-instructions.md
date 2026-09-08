# GitHub Copilot & Coding Agent Instructions

## Project Overview
This repository contains the personal website and portfolio for **Eoin Traynor**, Engineering Manager at CrowdStrike.
It is built as a static site hosted on **GitHub Pages** using **Next.js (App Router)** and modern web tooling.

## Tech Stack & Architecture
- **Framework:** Next.js 15 (App Router, static export `output: 'export'`)
- **Language:** TypeScript (`strict: true`)
- **Styling:** Tailwind CSS (v3), `tailwind-merge`, `clsx`
- **Component Library:** Radix UI primitives with shadcn/ui pattern (`components/ui`)
- **Icons:** `lucide-react`
- **Theming:** `next-themes` (Dark/Light mode support with CSS variables)
- **Deployment:** GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)

## Key Architecture & Code Rules
1. **Static Export Compatibility:**
   - All pages and routes must be statically exportable (`output: 'export'`).
   - Do not use dynamic server-only features (e.g. dynamic SSR headers, server actions requiring dynamic runtime) unless statically pre-rendered.
   - Images use `unoptimized: true` in `next.config.js` for GitHub Pages static hosting.
2. **Path Aliases:**
   - Always use the `@/*` path alias mapped to `./*` (e.g. `@/components/...`, `@/lib/...`).
3. **Component Design:**
   - Follow shadcn/ui and Radix UI patterns.
   - Reusable UI primitives belong in `components/ui/`.
   - Feature components belong in `components/`.
   - Use `cn()` helper from `@/lib/utils` for conditional Tailwind class merging.
4. **Code Quality:**
   - Ensure all changes pass `npm run lint`, `npm run typecheck`, and `npm run build`.
