# cv

Personal CV website built with Next.js and deployed via GitHub Pages.

## Stack

- Next.js (App Router)
- TypeScript
- Static export (`output: export`)
- GitHub Actions Pages deployment

## Local development

```bash
npm install
npm run dev
```

## Build static output

```bash
npm run build
```

The static site will be generated in `out/`.

## Deploy

Push to `main`. The workflow at `.github/workflows/deploy.yml` builds and deploys automatically to GitHub Pages.

## Content source

This site is based on `public/CV_Diogo_Miranda.pdf`.
