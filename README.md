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

## Project structure

- `data/cv.ts`: Single source of truth for all CV content (profile, skills, experience, education, languages, open-source).
- `app/page.tsx`: Main page layout and section rendering.
- `app/globals.css`: Styling and theme tokens.
- `components/`: Reusable UI elements (theme toggle, print button).
- `public/`: Static assets (certificates, images). Place PDFs here if you want them linked.

## Content source

The CV content now lives in `data/cv.ts`. If you want to link PDFs (e.g., certificates), place them in `public/` and reference the filename.

## License
This project is licensed under CC BY-NC-SA 4.0. Personal use is encouraged! Commercial use or sale by third-party services is strictly prohibited.
