# Eoin Traynor — Personal Website

[![CI](https://github.com/EoinTraynor/eointraynor.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/EoinTraynor/eointraynor.github.io/actions/workflows/ci.yml)
[![Deploy to GitHub Pages](https://github.com/EoinTraynor/eointraynor.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/EoinTraynor/eointraynor.github.io/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Personal website and portfolio of [Eoin Traynor](https://eointraynor.github.io), Engineering Manager at CrowdStrike.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, Static Export)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) & [Radix UI](https://www.radix-ui.com/)
- **Icons:** [Lucide Icons](https://lucide.dev/)
- **Theming:** [next-themes](https://github.com/pacocoursey/next-themes) (Light / Dark mode)
- **Deployment:** [GitHub Pages](https://pages.github.com/) via GitHub Actions

## Getting Started

### Prerequisites
- Node.js 24+ (managed via `.nvmrc`)
- npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Quality Checks

```bash
# Run ESLint checks
npm run lint

# Run TypeScript type verification
npm run typecheck
```

### Production Build & Export

```bash
# Builds and exports static assets to ./out
npm run build
```

## Continuous Deployment

This repository uses **GitHub Actions** for automated CI/CD:
- **CI Workflow (`.github/workflows/ci.yml`):** Runs linting, type-checking, and build validation on every pull request and push to the default branch.
- **Deploy Workflow (`.github/workflows/deploy.yml`):** Automatically compiles the static site and deploys it directly to GitHub Pages upon pushing to `main`/`master`.
- **Security & Dependency Auditing:** Dependabot, CodeQL static analysis, and Dependency Review actions continuously monitor and update dependencies.

## Cloud Development (GitHub Codespaces / Dev Containers)

This repository includes a [Dev Container](.devcontainer/devcontainer.json) configuration. You can launch an immediate cloud development environment directly within GitHub Codespaces or locally in VS Code with all extensions and settings pre-configured.

## License

This project is licensed under the [MIT License](LICENSE).
