import type { Metadata } from "next";
import { Container } from "@krnjs/react-ui";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/work/react-ui",
  },
  title: "@krnjs/react-ui",
  description:
    "A reusable React UI package with TypeScript APIs, Storybook, accessibility validation, npm distribution, and a real Next.js downstream consumer.",
};

const deliveryWorkflow = [
  "Product requirements",
  "Visual direction",
  "Reusable UI boundaries",
  "React package",
  "Storybook",
  "Automated validation",
  "npm package",
  "Next.js Portfolio consumer",
];

export default function ReactUiPage() {
  return (
    <Container>
      <article className="case-study">
        <Link className="case-study__back-link" href="/work">
          ← Back to Work
        </Link>

        <header className="case-study__header">
          <p className="case-study__eyebrow">REUSABLE UI SYSTEM</p>
          <h1 className="case-study__title">@krnjs/react-ui</h1>

          <div className="case-study__header-details">
            <p className="case-study__summary">
              A reusable React UI package that separates shared design,
              component and accessibility concerns from Portfolio-specific
              Next.js composition.
            </p>

            <dl className="case-study__metadata">
              <div>
                <dt>TYPE</dt>
                <dd>Open-source UI package</dd>
              </div>
              <div>
                <dt>FOCUS</dt>
                <dd>Design systems · TypeScript · Storybook · npm</dd>
              </div>
            </dl>
          </div>
        </header>

        <div className="case-study__sections">
          <section className="case-study__section">
            <h2>Overview</h2>
            <div className="case-study__prose">
              <p>
                <code>@krnjs/react-ui</code> is not an isolated design-system
                exercise. It sits in a real delivery chain: reusable React
                package, Storybook reference, automated validation, npm
                distribution, and the Next.js Portfolio as a downstream
                consumer.
              </p>
              <p>
                That final consumer matters. Components must work through the
                published API and stylesheet outside their Storybook
                environment, while the application remains free to own its
                routing, content, and page composition.
              </p>
            </div>
          </section>

          <section className="case-study__section">
            <h2>The problem</h2>
            <div className="case-study__prose">
              <p>
                The Portfolio needed a coherent visual and interaction system.
                Without a reusable boundary, it could accumulate duplicated
                styles, one-off components, inconsistent states, inaccessible
                variants, and imports from package internals.
              </p>
              <p>
                Moving every concern into a library would create the opposite
                problem: Next.js coupling, product-specific abstractions, and a
                speculative design system. The solution was a deliberately
                narrow boundary derived from real application requirements.
              </p>
            </div>
          </section>

          <section className="case-study__section">
            <h2>Architecture boundary</h2>
            <div className="case-study__prose">
              <p>
                Reusable UI belongs in the package; product-specific composition
                belongs in the application.
              </p>

              <div className="case-study__boundary">
                <div>
                  <h3>UI package owns</h3>
                  <ul>
                    <li>Design tokens and package styling</li>
                    <li>Reusable primitives and interaction states</li>
                    <li>Accessibility behaviour</li>
                    <li>Reusable Portfolio editorial patterns</li>
                    <li>Supported public package APIs</li>
                  </ul>
                </div>
                <div>
                  <h3>Portfolio application owns</h3>
                  <ul>
                    <li>Routing, metadata, and SEO</li>
                    <li>Content and page composition</li>
                    <li>Next.js-specific behaviour</li>
                    <li>Framework-specific navigation and media choices</li>
                    <li>Project-specific layouts</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="case-study__section">
            <h2>Package architecture</h2>
            <dl className="case-study__evidence-list">
              <div>
                <dt>Explicit public entry points</dt>
                <dd>
                  <ul className="case-study__package-paths">
                    <li>
                      <code>@krnjs/react-ui</code> for generic primitives
                    </li>
                    <li>
                      <code>@krnjs/react-ui/portfolio</code> for opinionated
                      Portfolio patterns
                    </li>
                    <li>
                      <code>@krnjs/react-ui/styles.css</code> for the design
                      foundation and component styles
                    </li>
                  </ul>
                  Consumers use these declared boundaries instead of reaching
                  into <code>src/</code>, <code>dist/</code>, or direct
                  <code>node_modules</code> paths.
                </dd>
              </div>
              <div>
                <dt>React peer dependencies</dt>
                <dd>
                  React and React DOM are supplied by the consuming application,
                  avoiding a second library-owned React runtime.
                </dd>
              </div>
              <div>
                <dt>ESM-only distribution</dt>
                <dd>
                  The package uses a deliberate modern module constraint and
                  does not claim CommonJS compatibility.
                </dd>
              </div>
              <div>
                <dt>Explicit CSS consumption</dt>
                <dd>
                  JavaScript does not silently inject styles. Consumers choose
                  where the public stylesheet enters their graph, while CSS is
                  marked as a package side effect so the built output is
                  preserved.
                </dd>
              </div>
              <div>
                <dt>Semantic design foundation</dt>
                <dd>
                  Warm neutral surfaces, direct typography, generous rhythm,
                  fine borders, and restrained accent are expressed through
                  semantic <code>--portfolio-*</code> custom properties shared
                  by components and the Portfolio.
                </dd>
              </div>
            </dl>
          </section>

          <section className="case-study__section">
            <h2>Engineering decisions</h2>
            <ol className="case-study__decisions">
              <li>
                <h3>Derive components from real usage</h3>
                <p>
                  Components are added when Portfolio or broadly reusable UI
                  requirements justify them. This keeps the package aligned with
                  YAGNI rather than building a speculative catalogue first.
                </p>
              </li>
              <li>
                <h3>Separate generic primitives from Portfolio patterns</h3>
                <p>
                  Controls such as buttons, inputs, status feedback, and
                  progress are generic. Editorial patterns such as PageIntro,
                  ProjectRow, SiteHeader, and SiteFooter are exposed through the
                  dedicated <code>/portfolio</code> entry point.
                </p>
              </li>
              <li>
                <h3>Keep framework concerns outside</h3>
                <p>
                  Package components do not own Next.js routing, metadata, SEO,
                  or image optimisation. The application composes reusable UI
                  around those framework responsibilities.
                </p>
              </li>
              <li>
                <h3>Prefer public APIs over internal imports</h3>
                <p>
                  Declared exports give consumers a stable integration surface
                  and let internal files change without turning implementation
                  paths into accidental contracts.
                </p>
              </li>
            </ol>
          </section>

          <section className="case-study__section">
            <h2>Storybook &amp; validation</h2>
            <div className="case-study__prose">
              <h3>Executable component reference</h3>
              <p>
                Storybook supports isolated component development, documents
                important states, exercises narrow viewports, and tests page
                compositions. Verified compositions cover Home, Work, Work
                Detail, and About without pretending that Storybook is the
                product application.
              </p>

              <h3>Accessibility as a validation requirement</h3>
              <p>
                Vitest browser projects run Storybook tests through Playwright,
                and the Storybook accessibility addon is configured so
                violations fail browser validation. This is an engineering
                target, not a claim of formal WCAG certification or complete
                coverage.
              </p>

              <ul className="case-study__compact-list">
                <li>TypeScript typecheck and ESLint</li>
                <li>Package and Storybook production builds</li>
                <li>Vitest browser testing with Playwright</li>
                <li>Story interaction and responsive-overflow checks</li>
                <li>
                  Accessibility-oriented primitives including VisuallyHidden,
                  native Progress, semantic form controls, and focus-visible
                  foundations
                </li>
              </ul>
            </div>
          </section>

          <section className="case-study__section">
            <h2>Real downstream consumer</h2>
            <div className="case-study__prose">
              <p>
                This Portfolio consumes the published package rather than a
                local copy of its source. The current application imports
                generic primitives, opinionated Portfolio patterns, and the
                stylesheet through the three supported public entry points.
              </p>
              <ul className="case-study__package-paths">
                <li>
                  <code>@krnjs/react-ui</code>
                </li>
                <li>
                  <code>@krnjs/react-ui/portfolio</code>
                </li>
                <li>
                  <code>@krnjs/react-ui/styles.css</code>
                </li>
              </ul>
              <p>
                That makes real application consumption part of package
                validation: the system must remain usable outside isolated
                stories while leaving product-specific composition in Next.js.
              </p>
            </div>
          </section>

          <section className="case-study__section case-study__section--workflow">
            <h2>Delivery workflow</h2>
            <div className="case-study__workflow-content">
              <p>
                Reuse follows product evidence through implementation,
                validation, distribution, and consumption.
              </p>

              <ol className="case-study__workflow case-study__workflow--package">
                {deliveryWorkflow.map((stage, index) => (
                  <li key={stage}>
                    <span className="case-study__workflow-stage">{stage}</span>
                    {index < deliveryWorkflow.length - 1 ? (
                      <span
                        className="case-study__workflow-arrow"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    ) : null}
                  </li>
                ))}
              </ol>

              <p className="case-study__note">
                Storybook documents and validates the implementation; it does
                not generate the production package or application code.
              </p>
            </div>
          </section>

          <section className="case-study__section">
            <h2>Result &amp; reflection</h2>
            <div className="case-study__prose">
              <p>
                The result is a narrow, independently distributed UI package
                with explicit exports, documented behaviour, reusable tested
                APIs, and a real downstream consumer. Repeated UI decisions live
                in one place without taking routing or product composition away
                from the Portfolio.
              </p>
              <p>
                A design system is useful when it removes repeated decisions
                without removing product-specific flexibility. The package is
                intentionally scoped to that responsibility rather than
                presenting itself as a universal enterprise system.
              </p>
            </div>
          </section>

          <section className="case-study__section">
            <h2>Evidence</h2>
            <ul className="case-study__links">
              <li>
                <a
                  href="https://github.com/keigokudo/ui-library"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>GitHub repository</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/@krnjs/react-ui"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>npm package</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://aquamarine-quokka-e5ba7c.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Storybook</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </Container>
  );
}
