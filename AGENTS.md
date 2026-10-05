# Repository development contract

## Project

This repository is a Next.js / React / TypeScript software-engineering
Portfolio. It uses the Next.js App Router, Server Components by default, the
published `@krnjs/react-ui` package, application-owned page composition and
content, and a static-first architecture.

## Working principles

- Inspect existing code, configuration, and the working tree before editing.
- Preserve the existing architecture unless the task explicitly requires a change.
- Prefer the smallest correct change. Apply YAGNI and KISS.
- Do not introduce speculative abstractions or refactor unrelated code.
- Do not overwrite or discard existing user changes.
- If the tree is dirty, understand the existing diff before modifying overlapping files.
- If an earlier run was interrupted, inspect `git status` and `git diff` and continue from valid work rather than restarting.

## Application and UI package boundary

The Portfolio application owns routing, metadata/SEO, content, page composition,
project-specific layouts, and Next.js-specific behavior.

`@krnjs/react-ui` owns reusable design tokens, primitives, shared component
behavior, and reusable Portfolio UI patterns.

- Use only supported public package exports.
- Do not deep-import `node_modules`, `dist`, or package internals.
- Do not recreate package-owned primitives locally.
- Do not modify the separate UI Library repository unless explicitly required for cross-repository work.
- Report new reusable package requirements instead of silently creating local duplicates.

## React and Next.js

- Use Server Components by default.
- Add `"use client"` only for genuine browser state, browser APIs, event handlers, or equivalent client behavior.
- Keep client boundaries narrow.
- Do not add runtime JavaScript for static presentation.
- Prefer semantic HTML and native browser behavior.
- Preserve logical heading hierarchy, target WCAG 2.2 AA, preserve visible keyboard focus, and avoid horizontal overflow.

## Styling

- Preserve the existing C2 Warm / Editorial direction.
- Use existing `--portfolio-*` design tokens where appropriate.
- Application CSS may own page-specific composition.
- Do not copy package component CSS into the application.
- Avoid unnecessary cards, decoration, animation, or new visual systems unless explicitly requested.

## Content and evidence

- Do not invent metrics, outcomes, technologies, responsibilities, URLs, or contact details.
- Support open-source claims with source evidence when practical.
- Do not expose private code, configuration, schemas, metrics, internal documents, or unapproved assets in commercial/proprietary case studies.
- Prefer verified evidence over promotional claims.

## Dependencies and architecture

- Add dependencies only when the task clearly justifies them.
- Do not add a CMS, database, backend, authentication, MDX, analytics, state management, or other infrastructure without a real requirement.
- Do not introduce generic abstractions from a single example.
- Prefer existing browser and framework capabilities where they are sufficient.

## Validation

For implementation tasks, run when applicable:

- `npm run typecheck`
- `npm run lint`
- `npm run build`
- `git diff --check`

For visible responsive UI changes, verify relevant narrow and wide viewports.
If a command cannot be run, state that explicitly rather than claiming success.

## Git safety

- Do not commit, push, deploy, or publish packages unless explicitly requested.
- Never reset, clean, checkout away, or otherwise discard user changes to obtain a clean tree.
- Keep the diff scoped to the current task.

## Reporting

Completion reports should state files changed, key decisions, validation
actually performed, unresolved issues or limitations, and any out-of-scope
problem discovered.
