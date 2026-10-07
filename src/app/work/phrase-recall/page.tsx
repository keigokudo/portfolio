import type { Metadata } from "next";
import { Container } from "@krnjs/react-ui";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/work/phrase-recall",
  },
  title: "PhraseRecall",
  description:
    "A local-first active-recall product connecting AI-generated language material with fast, measurable practice and structured session results.",
};

const workflow = [
  "Notion learning data",
  "AI generation / reasoning",
  "Structured PhraseRecall JSON",
  "PhraseRecall practice",
  "Structured session report",
  "AI analysis",
  "Notion long-term record",
];

export default function PhraseRecallPage() {
  return (
    <Container>
      <article className="case-study">
        <Link className="case-study__back-link" href="/work">
          ← Back to Work
        </Link>

        <header className="case-study__header">
          <p className="case-study__eyebrow">PRODUCT ENGINEERING</p>
          <h1 className="case-study__title">PhraseRecall</h1>

          <div className="case-study__header-details">
            <p className="case-study__summary">
              A local-first active-recall app that connects AI-generated
              language material with fast, measurable practice and structured
              session results.
            </p>

            <dl className="case-study__metadata">
              <div>
                <dt>TYPE</dt>
                <dd>Personal product</dd>
              </div>
              <div>
                <dt>FOCUS</dt>
                <dd>React · TypeScript · Browser APIs · Learning UX</dd>
              </div>
            </dl>
          </div>
        </header>

        <div className="case-study__sections">
          <section className="case-study__section">
            <h2>Overview</h2>
            <div className="case-study__prose">
              <p>
                PhraseRecall was built as the missing deterministic layer in an
                existing AI-assisted language-learning workflow. AI generates
                and reasons about study material; PhraseRecall runs the focused
                practice session and records structured evidence about what
                happened.
              </p>
              <p>
                Its responsibility is deliberately narrow: turn a small phrase
                set into a fast recall loop, then return useful session data for
                later analysis.
              </p>
            </div>
          </section>

          <section className="case-study__section">
            <h2>The problem</h2>
            <div className="case-study__prose">
              <p>
                General-purpose AI and chat interfaces are effective at
                generating phrases and reasoning about them, but they are not
                designed for repeatedly practising a small set with predictable
                reveal behaviour, response timing, explicit ratings, retry
                rounds, and structured session output.
              </p>
              <p>
                PhraseRecall makes that loop fast and repeatable without asking
                AI to simulate application state or timing-sensitive
                interaction.
              </p>
            </div>
          </section>

          <section className="case-study__section">
            <h2>Scope &amp; simplification</h2>
            <div className="case-study__prose">
              <p>
                The simplest architecture that solves the real workflow was
                preferable to infrastructure for hypothetical future needs.
                Packs, preferences, sessions, and review events fit in
                localStorage, while pronunciation is available through browser
                Speech Synthesis.
              </p>
              <ul className="case-study__compact-list">
                <li>No authentication, backend, cloud database, or sync.</li>
                <li>No AI API inside the running application.</li>
                <li>No external text-to-speech service or speech recognition.</li>
                <li>No complex spaced-repetition scheduler.</li>
              </ul>
              <p>
                Long-term context already lives outside the app, and AI
                generation and analysis already happen elsewhere. Adding those
                systems would increase product and operational complexity
                without improving the focused practice loop.
              </p>
            </div>
          </section>

          <section className="case-study__section case-study__section--workflow">
            <h2>Workflow architecture</h2>
            <div className="case-study__workflow-content">
              <p>
                PhraseRecall occupies one bounded step inside a broader learning
                workflow.
              </p>

              <ol className="case-study__workflow">
                {workflow.map((stage, index) => (
                  <li key={stage}>
                    <span className="case-study__workflow-stage">{stage}</span>
                    {index < workflow.length - 1 ? (
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
                Notion and AI sit outside the PhraseRecall runtime boundary.
                The app neither integrates directly with Notion nor calls an AI
                API; structured JSON and reports move between these tools as
                part of the user&apos;s wider workflow.
              </p>
            </div>
          </section>

          <section className="case-study__section">
            <h2>Engineering decisions</h2>
            <ol className="case-study__decisions">
              <li>
                <h3>Separate AI from deterministic practice</h3>
                <p>
                  AI handles generation and later analysis. PhraseRecall owns
                  timing, state transitions, reveal behaviour, ratings, retries,
                  and structured results, producing a faster and more
                  predictable practice loop.
                </p>
              </li>
              <li>
                <h3>Local-first instead of account infrastructure</h3>
                <p>
                  localStorage keeps study data in the current browser and
                  removes the need for authentication, a backend, and a cloud
                  database. The accepted trade-off is that cross-device sync is
                  not currently provided.
                </p>
              </li>
              <li>
                <h3>Preserve review events</h3>
                <p>
                  Every attempt remains a separate review event across retry
                  rounds. Again and Hard phrases can be repeated without
                  replacing earlier evidence, so later analysis can see how
                  recall changed within the session.
                </p>
              </li>
              <li>
                <h3>Use browser-native speech</h3>
                <p>
                  Answer pronunciation uses the Speech Synthesis API instead of
                  an external TTS service. This avoids another integration and
                  recurring dependency, while accepting that voice quality and
                  language availability vary by browser and operating system.
                </p>
              </li>
            </ol>
          </section>

          <section className="case-study__section">
            <h2>Implementation evidence</h2>
            <dl className="case-study__evidence-list">
              <div>
                <dt>Structured input</dt>
                <dd>
                  Schema-versioned PhraseRecall JSON stores cue, answer, and
                  optional IPA data. Direct pasted JSON, legacy JSON arrays, and
                  CSV imports are supported.
                </dd>
              </div>
              <div>
                <dt>Measured practice</dt>
                <dd>
                  Again, Hard, Good, and Easy ratings drive phrase status;
                  cue-to-reveal timing and separate review events preserve what
                  happened during each round.
                </dd>
              </div>
              <div>
                <dt>Focused interaction</dt>
                <dd>
                  Full-pack and difficult-phrase modes, retry rounds, keyboard
                  shortcuts, reveal-before-rating interaction, and browser
                  speech keep the session efficient.
                </dd>
              </div>
              <div>
                <dt>Structured output</dt>
                <dd>
                  The finished-session summary feeds a versioned AI report that
                  can be copied or downloaded as JSON, including individual
                  review rounds, ratings, timestamps, and recall timing.
                </dd>
              </div>
            </dl>
          </section>

          <section className="case-study__section">
            <h2>Quality &amp; validation</h2>
            <div className="case-study__prose">
              <p>
                PhraseRecall is a public TypeScript project with repository
                scripts for tests, linting, and production builds.
              </p>
              <ul className="case-study__compact-list">
                <li>
                  <code>npm run test</code> covers clipboard and report
                  behaviour, import behaviour, and storage behaviour.
                </li>
                <li>
                  <code>npm run lint</code> and <code>npm run build</code> are
                  explicit project checks.
                </li>
                <li>
                  Legacy JSON arrays and CSV remain supported alongside the
                  current versioned input structure.
                </li>
                <li>
                  Input packs and exported session reports use explicit schema
                  versions.
                </li>
              </ul>
            </div>
          </section>

          <section className="case-study__section">
            <h2>Result &amp; reflection</h2>
            <div className="case-study__prose">
              <p>
                The result is a dedicated recall loop with measurable practice
                events and structured output that can return to AI for analysis,
                achieved with intentionally low infrastructure complexity.
              </p>
              <p>
                The product became more useful by defining a narrow
                responsibility rather than trying to replace the AI and
                knowledge tools already working well.
              </p>
            </div>
          </section>

          <section className="case-study__section">
            <h2>Evidence</h2>
            <ul className="case-study__links">
              <li>
                <a
                  href="https://keigokudo.github.io/phrase-recall/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Live app</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/keigokudo/phrase-recall"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>GitHub repository</span>
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
