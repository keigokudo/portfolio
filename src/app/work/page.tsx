import type { Metadata } from "next";
import { Container } from "@krnjs/react-ui";
import {
  PageIntro,
  ProjectRow,
  SectionHeader,
} from "@krnjs/react-ui/portfolio";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected product engineering, reusable UI systems, commercial integrations, and practical engineering tools.",
};

export default function WorkPage() {
  return (
    <>
      <PageIntro
        eyebrow="WORK"
        heading="Selected engineering work"
        description="Products, systems, integrations, and practical tools built for real problems."
      />

      <section className="work-case-studies">
        <Container>
          <SectionHeader
            heading="CASE STUDIES"
            meta="Products · Systems · Commercial work"
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

      <section className="work-lab">
        <Container>
          <SectionHeader
            heading="ENGINEERING LAB"
            meta="Tools · Experiments · Workflow improvements"
          />

          <ol className="work-lab__list">
            <li>
              <Link
                className="work-lab__project"
                href="/work/local-transcriber"
              >
                <span className="work-lab__index">01</span>
                <span className="work-lab__identity">
                  <span className="work-lab__label">LOCAL TOOLING</span>
                  <span className="work-lab__title">Local Transcriber</span>
                </span>
                <span className="work-lab__focus">
                  <span className="work-lab__label">FOCUS</span>
                  <span className="work-lab__focus-value">
                    Python · Whisper · Local AI · Workflow automation
                  </span>
                </span>
                <span className="work-lab__arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            </li>
            <li>
              <Link
                className="work-lab__project"
                href="/work/url-transcriber"
              >
                <span className="work-lab__index">02</span>
                <span className="work-lab__identity">
                  <span className="work-lab__label">
                    TRANSCRIPTION TOOLING
                  </span>
                  <span className="work-lab__title">URL Transcriber</span>
                </span>
                <span className="work-lab__focus">
                  <span className="work-lab__label">FOCUS</span>
                  <span className="work-lab__focus-value">
                    Python · yt-dlp · faster-whisper · Pipeline design
                  </span>
                </span>
                <span className="work-lab__arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            </li>
          </ol>
        </Container>
      </section>
    </>
  );
}
