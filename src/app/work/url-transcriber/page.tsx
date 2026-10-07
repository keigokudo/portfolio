import type { Metadata } from "next";
import { Container } from "@krnjs/react-ui";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/work/url-transcriber",
  },
  title: "URL Transcriber",
  description:
    "A local transcription CLI using subtitle-first processing with yt-dlp and a faster-whisper fallback for public video URLs.",
};

export default function UrlTranscriberPage() {
  return (
    <Container>
      <article className="case-study">
        <nav className="case-study__breadcrumb" aria-label="Breadcrumb">
          <Link href="/work">Work</Link>
          <span aria-hidden="true"> / </span>
          <span aria-current="page">URL Transcriber</span>
        </nav>

        <header className="case-study__header">
          <p className="case-study__eyebrow">
            ENGINEERING LAB · TRANSCRIPTION TOOLING
          </p>
          <h1 className="case-study__title">URL Transcriber</h1>

          <div className="case-study__header-details">
            <p className="case-study__summary">
              A local CLI that turns public video URLs into timestamped Markdown
              using subtitle-first processing with a local Whisper fallback.
            </p>

            <dl className="case-study__metadata">
              <div>
                <dt>TYPE</dt>
                <dd>Engineering Lab</dd>
              </div>
              <div>
                <dt>FOCUS</dt>
                <dd>Python · yt-dlp · faster-whisper · Pipeline design</dd>
              </div>
            </dl>
          </div>
        </header>

        <div className="case-study__sections">
          <section className="case-study__section">
            <h2>Problem</h2>
            <div className="case-study__prose">
              <p>
                Useful video information can be difficult to search, quote, or
                review. URL Transcriber turns one public video URL into
                structured, timestamped text that can be used later as reference
                material or supplied to a separate reasoning tool.
              </p>
              <p>
                Existing transcript data should be used when it is usable;
                speech recognition is a fallback, not the default. The v0.1
                target is one public YouTube video per command, validated on
                Windows 11 and WSL2. The application does not perform AI
                summarization, and other yt-dlp sites are outside its acceptance
                guarantee.
              </p>
            </div>
          </section>

          <section className="case-study__section case-study__section--workflow">
            <h2>Processing strategy</h2>
            <div className="case-study__workflow-content">
              <figure className="case-study__pipeline">
                <figcaption>SUBTITLE-FIRST FALLBACK PIPELINE</figcaption>

                <ol className="case-study__pipeline-stages">
                  <li>
                    <span className="case-study__pipeline-step">1</span>
                    <h3>Retrieve metadata</h3>
                    <p>
                      Inspect one video without downloading its media and
                      normalize the title, language, duration, and available
                      subtitle tracks.
                    </p>
                  </li>
                  <li className="case-study__pipeline-branch">
                    <span className="case-study__pipeline-step">2</span>
                    <h3>Choose the first usable source</h3>
                    <ol>
                      <li>
                        <strong>Manual subtitles</strong>
                        <span>First preference</span>
                      </li>
                      <li>
                        <strong>Automatic captions</strong>
                        <span>Used when manual subtitles are not usable</span>
                      </li>
                      <li>
                        <strong>Local Whisper</strong>
                        <span>
                          Used when neither subtitle path produces a transcript
                        </span>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <span className="case-study__pipeline-step">3</span>
                    <h3>Normalize the transcript</h3>
                    <p>
                      Every successful source becomes the same timestamped
                      transcript model before formatting.
                    </p>
                  </li>
                  <li>
                    <span className="case-study__pipeline-step">4</span>
                    <h3>Write persistent Markdown</h3>
                    <p>
                      Format metadata and segments, then create one
                      collision-safe UTF-8 output file.
                    </p>
                  </li>
                </ol>

                <p className="case-study__note">
                  Subtitle availability does not guarantee usability. Retrieval
                  or parsing failures represented by the application&apos;s
                  subtitle error also move processing to the local Whisper
                  fallback.
                </p>
              </figure>
            </div>
          </section>

          <section className="case-study__section">
            <h2>Engineering decisions</h2>
            <ol className="case-study__decisions">
              <li>
                <h3>Prefer existing subtitles before inference</h3>
                <p>
                  Source-provided manual subtitles are preferred, followed by
                  automatic captions. This avoids unnecessary local inference,
                  while accepting that external subtitle availability, format,
                  retrieval, and quality cannot be assumed.
                </p>
              </li>
              <li>
                <h3>Preserve original-language intent</h3>
                <p>
                  Selection uses the reported original language when it is
                  usable, normalizing case and underscore or hyphen variants and
                  comparing language families. It does not silently substitute a
                  translated track. When usable language metadata is absent, the
                  established English/Japanese priority remains the fallback.
                </p>
              </li>
              <li>
                <h3>Bound temporary media lifetime</h3>
                <p>
                  The core pipeline owns one <code>TemporaryDirectory</code>
                  across audio download, local transcription, formatting, and
                  output writing. Temporary audio belongs to that execution;
                  the normal persistent artifact is the final Markdown file.
                </p>
              </li>
              <li>
                <h3>Normalize different sources at one boundary</h3>
                <p>
                  Manual subtitles, automatic captions, and Whisper all produce
                  the shared transcript model. Markdown formatting and output
                  collision handling therefore do not need source-specific
                  branches.
                </p>
              </li>
            </ol>
          </section>

          <section className="case-study__section">
            <h2>Implementation evidence</h2>
            <dl className="case-study__evidence-list">
              <div>
                <dt>Subtitle normalization</dt>
                <dd>
                  One supported VTT track is retrieved in memory as UTF-8.
                  Parsing keeps timestamps and text while removing markup,
                  normalizing whitespace, exact adjacent duplicates, and only
                  clear rolling-caption overlap.
                </dd>
              </div>
              <div>
                <dt>Local fallback</dt>
                <dd>
                  yt-dlp downloads one audio-only source into the caller-owned
                  temporary directory. <code>faster-whisper</code> uses the
                  documented CPU and <code>int8</code> path, detects language,
                  and performs transcription rather than translation.
                </dd>
              </div>
              <div>
                <dt>Defensive media boundary</dt>
                <dd>
                  The fallback accepts only a single-video result and verifies
                  that the resolved download is a regular file inside the
                  expected temporary directory before transcription.
                </dd>
              </div>
              <div>
                <dt>Deterministic output</dt>
                <dd>
                  Title-based filenames preserve Unicode while removing
                  Windows-invalid characters. Exclusive UTF-8 file creation
                  prevents silent overwrite and produces stable suffixes such
                  as <code>example.md</code>, <code>example-2.md</code>, and
                  <code>example-3.md</code>.
                </dd>
              </div>
              <div>
                <dt>Media decoding boundary</dt>
                <dd>
                  The validated YouTube path requests the original audio-only
                  container and faster-whisper decodes it through PyAV. A
                  separately installed system FFmpeg was not required for that
                  accepted workflow.
                </dd>
              </div>
            </dl>
          </section>

          <section className="case-study__section">
            <h2>Validation &amp; failure handling</h2>
            <div className="case-study__prose">
              <div className="case-study__boundary">
                <div>
                  <h3>Deterministic automated tests</h3>
                  <p>
                    The pytest suite mocks network and machine-learning
                    boundaries. Routine tests exercise extraction, subtitle
                    selection and parsing, fallback orchestration, temporary
                    cleanup, formatting, output, and CLI behaviour without
                    contacting YouTube, downloading models, or running real
                    inference.
                  </p>
                </div>
                <div>
                  <h3>Real environment acceptance</h3>
                  <p>
                    Separate validation covers manual subtitles, the audio-only
                    path with real Local Whisper, Windows-native and WSL2
                    execution, cleanup after success and failure, UTF-8 output,
                    Windows-safe filenames, and collision suffixes.
                  </p>
                </div>
              </div>
              <p>
                Expected extraction, subtitle, download, transcription, and
                output failures use a shared application-error boundary and
                concise CLI failure output. Subtitle processing failures trigger
                Whisper; other expected failures stop the pipeline rather than
                implying that every error is recoverable.
              </p>
            </div>
          </section>

          <section className="case-study__section">
            <h2>Result</h2>
            <div className="case-study__prose">
              <p>
                The completed v0.1 turns one public YouTube URL into
                timestamped Markdown through an original-language-aware,
                subtitle-first pipeline with local transcription when needed.
                Temporary source media remains bounded to processing, while the
                final file is persistent and collision-safe.
              </p>
            </div>
          </section>

          <section className="case-study__section">
            <h2>Evidence</h2>
            <ul className="case-study__links">
              <li>
                <a
                  href="https://github.com/keigokudo/url_transcriber"
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
