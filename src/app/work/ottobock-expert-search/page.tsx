import { Container } from "@krnjs/react-ui";
import Link from "next/link";

const systemFlow = [
  "User search / location input",
  "Frontend search experience",
  "Location / geocoding context",
  "Algolia search service",
  "Results and result states",
];

export default function OttobockExpertSearchPage() {
  return (
    <Container>
      <article className="case-study">
        <Link className="case-study__back-link" href="/work">
          ← Back to Work
        </Link>

        <header className="case-study__header">
          <p className="case-study__eyebrow">COMMERCIAL CASE STUDY</p>
          <h1 className="case-study__title">Ottobock Expert Search</h1>

          <div className="case-study__header-details">
            <p className="case-study__summary">
              A production search experience combining structured search,
              location-aware discovery, content context, and external
              integrations.
            </p>

            <dl className="case-study__metadata">
              <div>
                <dt>TYPE</dt>
                <dd>Commercial project</dd>
              </div>
              <div>
                <dt>FOCUS</dt>
                <dd>Algolia · Geolocation · Geocoding · Integrations</dd>
              </div>
            </dl>
          </div>
        </header>

        <div className="case-study__sections">
          <section className="case-study__section">
            <h2>Overview</h2>
            <div className="case-study__prose">
              <p>
                Expert Search was work on an existing commercial production
                platform, not a greenfield search demo. Changes had to fit a
                long-lived React and Next.js codebase, established product
                flows, existing search infrastructure, and external integration
                boundaries.
              </p>
              <p>
                The engineering challenge was to evolve a real search
                experience while preserving the behaviour around it. Production
                reliability, maintainability, and compatibility mattered
                alongside the feature itself.
              </p>
            </div>
          </section>

          <section className="case-study__section">
            <h2>Context &amp; constraints</h2>
            <div className="case-study__prose">
              <p>
                The work sat inside an established application with existing
                components, user journeys, content context, search services, and
                integration contracts. Improvements could not treat any one of
                those concerns in isolation.
              </p>
              <p>
                The task was to improve a real system without destabilising the
                surrounding product. That favoured changes which respected
                current conventions and integration boundaries rather than
                replacing working architecture unnecessarily.
              </p>
            </div>
          </section>

          <section className="case-study__section">
            <h2>The search problem</h2>
            <div className="case-study__prose">
              <p>
                This experience involved more than matching free text. Search
                behaviour had to bring structured search together with location
                input, geographic resolution, content context, external
                integrations, and understandable result states.
              </p>
              <p>
                Relevance and interface behaviour also had to be evaluated
                together. A technically valid result is only useful when the
                surrounding interaction makes its context and state clear.
              </p>
            </div>
          </section>

          <section className="case-study__section case-study__section--workflow">
            <h2>System context</h2>
            <div className="case-study__workflow-content">
              <figure className="case-study__system-context">
                <figcaption>GENERALISED SYSTEM CONTEXT</figcaption>

                <ol className="case-study__workflow case-study__workflow--system">
                  {systemFlow.map((stage, index) => (
                    <li key={stage}>
                      <span className="case-study__workflow-stage">{stage}</span>
                      {index < systemFlow.length - 1 ? (
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

                <dl className="case-study__context-support">
                  <div>
                    <dt>Content context</dt>
                    <dd>
                      Contentful supplied content context around the experience,
                      distinct from Algolia&apos;s search responsibility.
                    </dd>
                  </div>
                  <div>
                    <dt>Integration context</dt>
                    <dd>
                      External integrations formed explicit boundaries around
                      the frontend experience.
                    </dd>
                  </div>
                </dl>

                <p className="case-study__note">
                  This is a conceptual view of responsibilities, not a map of
                  the private production architecture. Internal services,
                  schemas, index configuration, and provider details are
                  intentionally omitted.
                </p>
              </figure>
            </div>
          </section>

          <section className="case-study__section">
            <h2>My role</h2>
            <div className="case-study__prose">
              <p>
                I contributed to the component-level React and Next.js
                implementation, integrated search and location-related
                behaviour, investigated issues, supported search tuning, and
                maintained and evolved the existing production experience.
              </p>
              <p>
                The work required understanding established code and product
                behaviour, making proportionate changes, and collaborating
                across the boundaries rather than claiming ownership of the
                wider platform or search infrastructure.
              </p>
            </div>
          </section>

          <section className="case-study__section">
            <h2>Engineering decisions</h2>
            <ol className="case-study__decisions">
              <li>
                <h3>Keep search state and UI behaviour predictable</h3>
                <p>
                  Search interaction benefits from explicit states and clear
                  component responsibilities. The frontend needed to make input,
                  loading, results, and non-result conditions understandable
                  without tying every concern into one component.
                </p>
              </li>
              <li>
                <h3>Treat location as structured search context</h3>
                <p>
                  Obtaining or accepting location, resolving that information,
                  and applying geographic context to discovery are separate
                  responsibilities. Keeping them conceptually distinct made the
                  integration easier to reason about and validate.
                </p>
              </li>
              <li>
                <h3>Separate content concerns from search concerns</h3>
                <p>
                  Contentful provided content context while Algolia provided
                  search capability. Respecting that division avoided turning
                  either system into an undocumented owner of the other&apos;s
                  responsibility.
                </p>
              </li>
              <li>
                <h3>Evolve the existing system proportionately</h3>
                <p>
                  Search tuning and component changes needed to fit existing
                  behaviour and code conventions. Incremental improvement was
                  preferable to replacing surrounding architecture without a
                  demonstrated need.
                </p>
              </li>
            </ol>
          </section>

          <section className="case-study__section">
            <h2>Implementation</h2>
            <dl className="case-study__evidence-list">
              <div>
                <dt>Frontend components</dt>
                <dd>
                  React and Next.js component work connected search controls,
                  location-aware behaviour, and result states to the existing
                  product experience.
                </dd>
              </div>
              <div>
                <dt>Search integration</dt>
                <dd>
                  Algolia supplied structured search capability behind the
                  frontend experience. Implementation stayed within established
                  integration boundaries rather than exposing private search
                  configuration in the UI layer.
                </dd>
              </div>
              <div>
                <dt>Location context</dt>
                <dd>
                  Geolocation and geocoding concerns were incorporated as
                  structured context for discovery, with provider-specific
                  implementation details kept outside this account.
                </dd>
              </div>
              <div>
                <dt>Content context</dt>
                <dd>
                  Contentful context was integrated with the surrounding
                  experience while remaining distinct from the search service
                  itself.
                </dd>
              </div>
              <div>
                <dt>Operational maintenance</dt>
                <dd>
                  The implementation included investigation, maintenance, and
                  iterative changes inside an existing production codebase—not
                  only initial component delivery.
                </dd>
              </div>
            </dl>
          </section>

          <section className="case-study__section">
            <h2>Search tuning</h2>
            <div className="case-study__prose">
              <p>
                Relevance behaviour required iteration rather than a one-time
                integration. Search UX and result behaviour had to be reviewed
                together, and tuning changes needed validation against expected
                product behaviour.
              </p>
              <p>
                This account intentionally omits ranking rules, business
                weighting, index settings, hidden attributes, and production
                query configuration.
              </p>
            </div>
          </section>

          <section className="case-study__section">
            <h2>Quality &amp; production safety</h2>
            <div className="case-study__prose">
              <p>
                Shipping safely in an existing production system mattered as
                much as implementing the search change itself. Work had to fit
                established code conventions and preserve surrounding user
                flows.
              </p>
              <ul className="case-study__compact-list">
                <li>Incremental changes rather than unnecessary replacement</li>
                <li>Code review and testing within the existing delivery process</li>
                <li>QA collaboration around search and surrounding flows</li>
                <li>Regression awareness across integration boundaries</li>
                <li>Ongoing maintenance after initial implementation</li>
              </ul>
              <p>
                No claim is made here about private test suites, coverage,
                service levels, or incident history.
              </p>
            </div>
          </section>

          <section className="case-study__section">
            <h2>Collaboration</h2>
            <div className="case-study__prose">
              <p>
                The project was collaborative commercial delivery. I worked
                with frontend and backend engineers, designers, product
                stakeholders, QA, and content disciplines to clarify
                requirements, align search behaviour, understand integration
                boundaries, review changes, and validate delivery.
              </p>
              <p>
                That cross-functional context was important because the search
                experience joined interface behaviour, content, location, and
                service concerns that no single discipline controlled alone.
              </p>
            </div>
          </section>

          <section className="case-study__section">
            <h2>Result &amp; reflection</h2>
            <div className="case-study__prose">
              <p>
                The work delivered and evolved production search functionality
                across several product concerns while remaining compatible with
                an existing application and its integration boundaries.
              </p>
              <p>
                In production systems, the difficult part is often not one
                technology but making several existing systems behave coherently
                together. This project is evidence of that integration-heavy
                frontend and product engineering work, without implying sole
                ownership or publishing confidential implementation detail.
              </p>
            </div>
          </section>

          <section className="case-study__section">
            <h2>Stack</h2>
            <ul className="case-study__compact-list case-study__stack">
              <li>React</li>
              <li>Next.js</li>
              <li>Algolia</li>
              <li>Contentful</li>
              <li>Geolocation and geocoding integrations</li>
            </ul>
          </section>
        </div>
      </article>
    </Container>
  );
}
