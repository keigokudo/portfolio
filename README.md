# Portfolio

A Next.js App Router application for a software engineering portfolio. It uses the published [@krnjs/react-ui](https://www.npmjs.com/package/@krnjs/react-ui) package; the component library can be reviewed in [Storybook](https://aquamarine-quokka-e5ba7c.netlify.app/).

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Use `npm run lint` to lint the application and `npm run build` to create a production build.

## Routes

- `/` — Home placeholder
- `/work` — Work placeholder
- `/work/phrase-recall` — PhraseRecall
- `/work/react-ui` — @krnjs/react-ui
- `/work/ottobock-expert-search` — Ottobock Expert Search
- `/work/local-transcriber` — Local Transcriber
- `/work/url-transcriber` — URL Transcriber
- `/about` — About placeholder

## Architecture status

The repository currently provides the production application foundation: Next.js, React, TypeScript, ordinary CSS, Server Components by default, and a narrow client component for pathname-aware navigation. Final page compositions, project data, and content integrations have not yet been migrated.
