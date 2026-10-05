import { Container } from "@krnjs/react-ui";
import { ProjectRow, SectionHeader } from "@krnjs/react-ui/portfolio";

export default function HomePage() {
  return (
    <>
      <section className="home-hero" aria-labelledby="home-hero-heading">
        <Container>
          <div className="home-hero__content">
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
    </>
  );
}
