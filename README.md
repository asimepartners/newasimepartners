# Asime Partners Website

Marketing site for Asime Partners, built with Vite, React, and TypeScript.

## Tech stack

- Vite 6
- React 18
- TypeScript
- Bootstrap 5

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Production build

```bash
npm run lint
npm run build
npm run preview
```

The static output is written to `dist/` (`index.html` for the home page and `privacy.html` for the privacy page).

## Deploy on Vercel

This repo is configured for [Vercel](https://vercel.com) static hosting via `vercel.json`.

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. In the Vercel dashboard, choose **Add New Project** and import the repo.
3. Vercel should detect the Vite project automatically. Confirm these settings if prompted:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm ci` (or `npm install`)
4. Deploy. No environment variables are required for the current site.

### CLI deploy (optional)

```bash
npm i -g vercel
vercel
```

Follow the prompts for a preview deployment, then run `vercel --prod` when ready.

### Routes

- `/` — home page
- `/privacy` — privacy & cookies (rewritten to `privacy.html`)

## Main files

- `index.html` / `src/main.tsx` — home page entry
- `privacy.html` / `src/privacy.tsx` — privacy page entry
- `src/App.tsx` — home page sections
- `src/data/content.ts` — site copy and navigation links
- `vercel.json` — Vercel build and routing configuration
