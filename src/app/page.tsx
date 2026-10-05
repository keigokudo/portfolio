import { Container } from "@krnjs/react-ui";

export default function HomePage() {
  return (
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
  );
}
