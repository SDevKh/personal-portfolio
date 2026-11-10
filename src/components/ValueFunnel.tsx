import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { funnelStages } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import TechIcon from "@/components/TechIcon";

export default function ValueFunnel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStage = funnelStages[activeIndex];

  return (
    <section className="section-block funnel-section" id="funnel" data-testid="value-funnel-section">
      <div>
        <video width="100%" height="100%" autoPlay loop muted playsInline>
          <source src="/Comp 1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="section-wrap">
        <Reveal className="section-heading">

          <div>
            <p className="section-eyebrow">01 / The value funnel</p>
            <h2>One lens. Four disciplines. Better systems.</h2>
          </div>
          <p>
            Dev does not wear four disconnected hats. He moves one business question through a deliberate
            sequence until it becomes a useful product.
          </p>
        </Reveal>

        <div className="funnel-layout">
          <Reveal>
            <div className="stage-tabs" role="tablist" aria-label="Unified method stages">
              {funnelStages.map((stage, index) => (
                <button
                  key={stage.number}
                  className={`stage-tab${index === activeIndex ? " is-active" : ""}`}
                  type="button"
                  role="tab"
                  aria-selected={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                  data-testid={`funnel-stage-tab-${stage.number}`}
                >
                  <span className="stage-number">{stage.number}</span>
                  <span>
                    <span className="stage-tab-title">{stage.title}</span>
                    <span className="stage-tab-lens">{stage.lens}</span>
                  </span>
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <article className="funnel-panel" role="tabpanel" data-testid="funnel-stage-content-card">
              <div className="funnel-panel-top">
                <span>Stage {activeStage.number} / active</span>
                <span>value compounding sequence</span>
              </div>
              <h3>
                <span>{activeStage.lens}</span> / {activeStage.title}
              </h3>
              <p className="funnel-panel-copy">{activeStage.detail}</p>
              <div className="stage-details">
                <div>
                  <span className="stage-detail-label">Hard skill</span>
                  <span className="stage-detail-value">{activeStage.hardSkill}</span>
                  {activeStage.tools && activeStage.tools.length > 0 && (
                    <div className="stage-tools-icons" aria-label="Tools and technologies">
                      {activeStage.tools.map((tool) => (
                        <span key={tool} className="stage-tool-badge" title={tool}>
                          <TechIcon name={tool} size={14} />
                          <span>{tool}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <span className="stage-detail-label">Human edge</span>
                  <span className="stage-detail-value">{activeStage.softSkill}</span>
                </div>
                <div className="output-callout">
                  <span className="output-label">Output</span>
                  <p>{activeStage.output}</p>
                </div>
              </div>
              <div className="funnel-progress" aria-label={`Stage ${activeStage.number} of 04 selected`}>
                {funnelStages.map((stage, index) => (
                  <span
                    key={stage.number}
                    className={`progress-segment${index <= activeIndex ? " is-filled" : ""}`}
                  />
                ))}
              </div>
              <ArrowUpRight className="panel-corner-arrow" size={23} strokeWidth={1.4} aria-hidden="true" />
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
