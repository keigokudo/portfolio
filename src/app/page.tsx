import type { Metadata } from "next";
import { Container } from "@krnjs/react-ui";
import { ProjectRow, SectionHeader } from "@krnjs/react-ui/portfolio";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <section className="home-hero" aria-labelledby="home-hero-heading">
        <Container>
          <div className="home-hero__content">
            <p className="home-hero__identity">Keigo Kudo</p>
            <h1 id="home-hero-heading" className="home-hero__heading">
              Software Engineer
            </h1>

            <div className="home-hero__details">
              <p className="home-hero__experience">
                Building production software since 2017.
              </p>
              <p className="home-hero__technologies">
                React · TypeScript · Next.js · Node.js
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="selected-work" className="selected-work">
        <Container>
          <SectionHeader
            heading="SELECTED WORK"
            meta="Systems · Products · Integrations"
          />

          <div>
            <ProjectRow
              index="01"
              category="PRODUCT ENGINEERING"
              title="PhraseRecall"
              focus="React · TypeScript · Browser APIs · Learning UX"
              href="/work/phrase-recall"
            />
            <ProjectRow
              index="02"
              category="REUSABLE UI SYSTEM"
              title="@krnjs/react-ui"
              focus="Design systems · TypeScript · Storybook · npm"
              href="/work/react-ui"
            />
            <ProjectRow
              index="03"
              category="COMMERCIAL CASE STUDY"
              title="Ottobock Expert Search"
              focus="Algolia · Geolocation · Geocoding · Integrations"
              href="/work/ottobock-expert-search"
            />
          </div>
        </Container>
      </section>

      <section className="delivery-process">
        <Container>
          <h2 className="delivery-process__heading">
            FROM PROBLEM TO PRODUCTION
          </h2>

          <ol className="delivery-process__sequence">
            <li>
              <span className="delivery-process__stage">Understand</span>
              <span className="delivery-process__arrow" aria-hidden="true">
                ↓
              </span>
            </li>
            <li>
              <span className="delivery-process__stage">Simplify</span>
              <span className="delivery-process__arrow" aria-hidden="true">
                ↓
              </span>
            </li>
            <li>
              <span className="delivery-process__stage">Design</span>
              <span className="delivery-process__arrow" aria-hidden="true">
                ↓
              </span>
            </li>
            <li>
              <span className="delivery-process__stage">Build</span>
              <span className="delivery-process__arrow" aria-hidden="true">
                ↓
              </span>
            </li>
            <li>
              <span className="delivery-process__stage">Validate</span>
              <span className="delivery-process__arrow" aria-hidden="true">
                ↓
              </span>
            </li>
            <li>
              <span className="delivery-process__stage">Ship</span>
            </li>
          </ol>
        </Container>
      </section>

      <section className="technical-skills">
        <Container>
          <h2 className="technical-skills__heading">TECHNICAL SKILLS</h2>

          <dl className="technical-skills__groups">
            <div className="technical-skills__group">
              <dt>Core</dt>
              <dd>TypeScript · JavaScript · React · Next.js · Node.js</dd>
            </div>
            <div className="technical-skills__group">
              <dt>Frontend</dt>
              <dd>HTML · CSS · Accessibility · Storybook · Testing</dd>
            </div>
            <div className="technical-skills__group">
              <dt>Backend &amp; Data</dt>
              <dd>Node.js · REST · GraphQL · SQL</dd>
            </div>
            <div className="technical-skills__group">
              <dt>Cloud &amp; Delivery</dt>
              <dd>AWS · Azure · Terraform · CI/CD</dd>
            </div>
            <div className="technical-skills__group">
              <dt>Platforms &amp; Integrations</dt>
              <dd>Contentful · Algolia · Apollo</dd>
            </div>
          </dl>
        </Container>
      </section>

      <section className="availability">
        <Container>
          <h2 className="availability__heading">AVAILABILITY</h2>

          <div className="availability__content">
            <p className="availability__statement">
              Available for contract and freelance work
            </p>
            <p className="availability__location">
              UK remote · London hybrid
            </p>
            <a
              className="availability__link"
              href="https://www.linkedin.com/in/keigo-k-9a0a32194/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact on LinkedIn ↗
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
