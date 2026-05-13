# Javier Roman Pasaro Portfolio

Personal portfolio for Javier Roman Pasaro, built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

The site is fully bilingual in English and Spanish, includes a light/dark theme switcher, and keeps structured content in `src/data/content.ts`. Downloadable CV PDFs are served from `public/docs/`.

## Source Material Used

- English CV: `docs/CV_JRoman_English_2026.pdf`
- Spanish CV: `docs/CV_JRoman_Español_2026.pdf`
- Earlier Spanish CV with additional technical training: `docs/CV_JRoman_Español.pdf`
- Presentation / cover context: `docs/Presentación_JRoman_2026.pdf`
- Public profile and research confirmation:
  - LinkedIn public profile: <https://www.linkedin.com/in/javierromanpasaro/>
  - CLiC profile: <https://clic.ub.edu/en/j_roman>
  - SCRIBAL project page: <https://scribal.cat>
  - INTERSPEECH 2025 SCRIBAL paper: <https://www.isca-archive.org/interspeech_2025/roman25_interspeech.html>
  - Google Scholar: <https://scholar.google.es/citations?user=rrW9qxcAAAAJ&hl=es>

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```text
src/
  components/       Reusable UI sections and cards
  data/content.ts   Bilingual portfolio content and links
  hooks/            Language persistence hook
  App.tsx           Page composition
  styles.css        Tailwind entry and global CSS
public/
  docs/             Public CV downloads
.github/workflows/  GitHub Pages deployment
```

## GitHub Pages Deployment

This repository is named `javiromanp.github.io`, so Vite is configured with `base: "/"`.

Recommended deployment:

1. Push the repository to GitHub.
2. In GitHub, open **Settings > Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to the `main` branch.
5. The workflow in `.github/workflows/deploy.yml` will install dependencies, build `dist/`, and deploy it to GitHub Pages.

Manual deployment alternative:

```bash
npm install
npm run build
```

Then upload the generated `dist/` folder through your preferred Pages workflow.

## Manual Customization Checklist

- Replace the GitHub placeholder in `src/data/content.ts` if the final profile URL is different.
- Add public repository/demo links for personal projects when ready.
- Add an Open Graph image if you want rich social previews.
- Replace or refine `public/favicon.ico` if you want another browser icon.
- Review phone visibility: the CV includes a phone number, but the website currently keeps contact focused on email and profile links.
- Update dates after June 2026 if the SCRIBAL role continues or changes.
- Add more personal projects by appending items to `projects` in both language blocks.
