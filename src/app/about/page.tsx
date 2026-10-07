import type { Metadata } from "next";
import { Container } from "@krnjs/react-ui";
import { PageIntro, SectionHeader } from "@krnjs/react-ui/portfolio";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Professional background, production experience, technical depth, and an engineering approach focused on clear systems and reliable delivery.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="ABOUT"
        heading="Software engineer focused on clear systems and reliable delivery."
        description="8+ years of software development and IT experience, with a professional software engineering career since 2017."
      />

      <section className="about-section" aria-labelledby="profile-heading">
        <Container>
          <div className="about-section__layout">
            <h2 id="profile-heading" className="about-section__heading">
              PROFESSIONAL PROFILE
            </h2>
            <div className="about-section__prose">
              <p>
                My strongest technical depth is in frontend and product
                engineering, particularly React, TypeScript, Next.js, reusable
                UI, and application architecture. I work comfortably between
                product requirements and implementation in established
                production codebases.
              </p>
              <p>
                That work is supported by practical experience across Node.js,
                APIs, integrations, search and content platforms, testing,
                delivery concerns, and ongoing production maintenance.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="about-section about-experience">
        <Container>
          <SectionHeader
            heading="SELECTED EXPERIENCE"
            meta="Professional software engineering roles"
          />

          <ol className="about-experience__list">
            <li>
              <article className="about-experience__row">
                <div className="about-experience__identity">
                  <h3>Senior Software Engineer</h3>
                  <p>FlatPeak Technology Ltd</p>
                </div>
                <p className="about-experience__dates">
                  <time dateTime="2025">Late 2025</time>
                  <span aria-hidden="true"> – </span>
                  <time dateTime="2026">Early 2026</time>
                </p>
                <p className="about-experience__focus">
                  TypeScript and Node.js backend services, AWS serverless
                  services, third-party integrations, production reliability,
                  and maintainability.
                </p>
              </article>
            </li>
            <li>
              <article className="about-experience__row">
                <div className="about-experience__identity">
                  <h3>Software Engineer · T-Shaped Developer</h3>
                  <p>dotSource SE</p>
                </div>
                <p className="about-experience__dates">
                  <time dateTime="2021">2021</time>
                  <span aria-hidden="true"> – </span>
                  <time dateTime="2024">2024</time>
                </p>
                <p className="about-experience__focus">
                  React and Next.js product development, reusable UI systems,
                  Contentful, Algolia, Node.js and GraphQL, and cross-functional
                  production delivery.
                </p>
              </article>
            </li>
            <li>
              <article className="about-experience__row">
                <div className="about-experience__identity">
                  <h3>Software Engineer · Full Stack Developer</h3>
                  <p>EMSI</p>
                </div>
                <p className="about-experience__dates">
                  <time dateTime="2020">2020</time>
                </p>
                <p className="about-experience__focus">
                  React frontend development, accessibility, Node.js and Python
                  APIs, automated testing, AWS, and Terraform.
                </p>
              </article>
            </li>
            <li>
              <article className="about-experience__row">
                <div className="about-experience__identity">
                  <h3>Software Engineer · Java Developer</h3>
                  <p>TechnoPro</p>
                </div>
                <p className="about-experience__dates">
                  <time dateTime="2017">2017</time>
                  <span aria-hidden="true"> – </span>
                  <time dateTime="2019">2019</time>
                </p>
                <p className="about-experience__focus">
                  Java and Spring Boot systems, Oracle SQL, frontend
                  maintenance, batch processing, data migration, testing, and
                  reliability work.
                </p>
              </article>
            </li>
          </ol>
        </Container>
      </section>

      <section className="about-section" aria-labelledby="depth-heading">
        <Container>
          <div className="about-section__layout">
            <h2 id="depth-heading" className="about-section__heading">
              AREAS OF DEPTH
            </h2>
            <dl className="about-depth">
              <div>
                <dt>Product interfaces &amp; frontend architecture</dt>
                <dd>
                  React, TypeScript, Next.js, reusable UI, and accessibility.
                </dd>
              </div>
              <div>
                <dt>Systems &amp; integrations</dt>
                <dd>
                  Node.js, REST and GraphQL APIs, Contentful, Algolia, and
                  external integrations.
                </dd>
              </div>
              <div>
                <dt>Quality &amp; delivery</dt>
                <dd>
                  Testing, maintainability, code review, production delivery,
                  and practical awareness of AWS, Azure, and Terraform.
                </dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      <section className="about-section" aria-labelledby="approach-heading">
        <Container>
          <div className="about-section__layout">
            <h2 id="approach-heading" className="about-section__heading">
              HOW I WORK
            </h2>
            <div className="about-section__prose">
              <p>
                I start by understanding the real problem and its constraints,
                then challenge unnecessary scope constructively. I favour
                proportionate YAGNI and KISS decisions, working with the
                existing architecture and making incremental changes instead
                of replacing systems without a clear reason.
              </p>
              <p>
                Delivery is collaborative across product, design, QA, backend,
                content, and client stakeholders where the work requires it. I
                validate changes before shipping and leave the code
                understandable for the next engineer.
              </p>
              <Link className="about-section__work-link" href="/work">
                View selected work <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
