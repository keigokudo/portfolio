import type { Metadata } from "next";
import { Container } from "@krnjs/react-ui";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/work/local-transcriber",
  },
  title: "Local Transcriber",
  description:
    "A local Windows transcription CLI using WASAPI Loopback and faster-whisper to turn system audio into timestamped text.",
};

const workflow = [
  "Windows playback",
  "WASAPI Loopback capture",
  "Local WAV recording",
  "faster-whisper",
  "Timestamped TXT / Markdown",
];

export default function LocalTranscriberPage() {
  return (
    <Container>
      <article className="case-study">
        <Link className="case-study__back-link" href="/work">
          ← Back to Work
        </Link>

        <header className="case-study__header">
          <p className="case-study__eyebrow">
            ENGINEERING LAB · LOCAL TOOLING
          </p>
          <h1 className="case-study__title">Local Transcriber</h1>

          <div className="case-study__header-details">
            <p className="case-study__summary">
              A local Windows CLI that captures system audio and turns it into
              timestamped transcripts using faster-whisper.
            </p>

            <dl className="case-study__metadata">
              <div>
                <dt>TYPE</dt>
                <dd>Engineering Lab</dd>
              </div>
              <div>
                <dt>FOCUS</dt>
                <dd>Python · WASAPI · faster-whisper · Local AI</dd>
              </div>
            </dl>
          </div>
        </header>

        <div className="case-study__sections">
          <section className="case-study__section">
            <h2>Problem</h2>
            <div className="case-study__prose">
              <p>
                Audio used for language learning was easy to play but awkward
                to turn into text for later review. Separate recording,
                transcription, and file-management steps added friction to a
                repetitive workflow.
              </p>
              <p>
                Local Transcriber combines record, transcribe, and save in one
                focused command-line tool. It solves that local workflow rather
                than attempting to become a hosted transcription platform.
              </p>
            </div>
          </section>

          <section className="case-study__section case-study__section--workflow">
            <h2>Workflow</h2>
            <div className="case-study__workflow-content">
              <ol className="case-study__workflow case-study__workflow--lab">
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
                Recording and transcription stay on the local machine. The
                workflow does not require a transcription API key or upload
                audio to a cloud service.
              </p>
            </div>
          </section>

          <section className="case-study__section">
            <h2>Engineering decisions</h2>
            <ol className="case-study__decisions">
              <li>
                <h3>Capture playback with WASAPI Loopback</h3>
                <p>
                  The recorder targets the current default Windows output
                  device through <code>pyaudiowpatch</code>. Capturing system
                  playback directly avoids routing the lesson through a
                  physical microphone and picking up room noise. This capture
                  path is deliberately Windows-specific.
                </p>
              </li>
              <li>
                <h3>Run Whisper inference locally</h3>
                <p>
                  <code>faster-whisper</code> runs on the local CPU with
                  <code>int8</code> inference, so the workflow has no cloud
                  audio upload, API key, or per-request transcription service.
                  The trade-off is local model storage, an initial model
                  download, and inference time that depends on the hardware and
                  selected model size.
                </p>
              </li>
              <li>
                <h3>Base pause and duration on recorded frames</h3>
                <p>
                  The audio stream continues to drain while paused, but paused
                  frames are not written to the WAV file. Duration is calculated
                  from frames actually recorded, so a pause does not become
                  dead air or count towards a duration-based stop.
                </p>
              </li>
              <li>
                <h3>Keep platform-specific capture narrow</h3>
                <p>
                  Windows recording lives in its own recorder implementation,
                  while CLI orchestration, transcription, output formatting,
                  and shared duration logic remain separate. Existing-file
                  transcription is therefore less coupled to the WASAPI capture
                  path than system-audio recording.
                </p>
              </li>
            </ol>
          </section>

          <section className="case-study__section">
            <h2>Implementation notes</h2>
            <dl className="case-study__evidence-list">
              <div>
                <dt>Capture and control</dt>
                <dd>
                  The Python CLI records the current default Windows output to
                  WAV, with pause and resume, manual early stop, graceful
                  Ctrl+C handling, and an optional recorded-duration target.
                </dd>
              </div>
              <div>
                <dt>Transcription</dt>
                <dd>
                  Users can select a Whisper model and optionally specify a
                  language. MP3, WAV, and M4A files can also enter through the
                  existing-file transcription command.
                </dd>
              </div>
              <div>
                <dt>Language-learning configuration</dt>
                <dd>
                  The transcription call uses
                  <code> condition_on_previous_text=False</code> to reduce
                  repetition and language lock-in when material switches
                  languages; it does not promise perfect multilingual results.
                </dd>
              </div>
              <div>
                <dt>Output and convenience</dt>
                <dd>
                  Segment timestamps are written to TXT and Markdown alongside
                  saved recordings, and a Windows batch runner shortens the
                  record-and-transcribe command.
                </dd>
              </div>
            </dl>
          </section>

          <section className="case-study__section">
            <h2>Validation</h2>
            <div className="case-study__prose">
              <p>
                Hardware-dependent WASAPI capture remains deliberately narrow.
                Deterministic behaviour around it is covered by
                hardware-independent tests for recorder duration and formatting
                calculations, CLI parsing, timestamp and transcript formatting,
                and output file generation.
              </p>
              <p>
                This does not claim automated end-to-end coverage of the live
                Windows audio path. It demonstrates why separating
                system-dependent code from testable logic matters in a small
                practical tool.
              </p>
            </div>
          </section>

          <section className="case-study__section">
            <h2>Result</h2>
            <div className="case-study__prose">
              <p>
                One local command can capture Windows playback and produce
                timestamped text for later language-study review. Recordings and
                transcripts remain local, and the workflow removes manual steps
                without requiring a hosted service.
              </p>
            </div>
          </section>

          <section className="case-study__section">
            <h2>Evidence</h2>
            <ul className="case-study__links">
              <li>
                <a
                  href="https://github.com/keigokudo/local-transcriber"
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
