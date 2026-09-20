import { ArrowUpRight } from "lucide-react";
import { funnelStages } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

const workspaceImage =
  "/arc.png";

export default function ManifestoSection() {
  return (
    <section className="section-block method-section" id="method" data-testid="manifesto-section">
      <div className="section-wrap">
        <Reveal className="section-heading">
          <div>
            <p className="section-eyebrow">02 / The unified method</p>
            <h2>From business friction to a product people can trust.</h2>
          </div>
          <p>
            The method keeps the narrative intact: understand the why, find the what, engineer the how, then
            make the interface feel inevitable.
          </p>
        </Reveal>

        <div className="method-grid">
          <Reveal className="method-aside">
            <figure className="method-figure">
              <img src={workspaceImage} alt="A workspace with architectural models and system mapping" />
              <figcaption>
                <span>WORKING MODEL / 04 MOVES</span>
                <span>01—04</span>
              </figcaption>
            </figure>
            <p className="method-aside-note">
              The work is not four separate hats. It is <em>one way of seeing</em> a problem from every useful angle.
            </p>
          </Reveal>

          <div className="manifesto-list">
            {funnelStages.map((stage, index) => (
              <Reveal key={stage.number} delay={index * 80}>
                <article className="manifesto-chapter" data-testid={`manifesto-chapter-${stage.number}`}>
                  <span className="chapter-number">{stage.number}</span>
                  <div>
                    <h3 className="chapter-title" data-testid={`manifesto-title-${stage.number}`}>
                      {stage.title}
                      <span>{stage.lens}</span>
                    </h3>
                    <p className="chapter-copy">
                      {stage.detail} {stage.softSkill} keep the work useful when the brief is still moving.
                    </p>
                    <span className="chapter-output">{stage.output}</span>
                  </div>
                  <ArrowUpRight className="chapter-arrow" size={20} strokeWidth={1.4} aria-hidden="true" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
