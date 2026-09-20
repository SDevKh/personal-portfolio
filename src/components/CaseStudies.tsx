import { useCallback, type PointerEvent } from "react";
import { caseStudies } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import TechIcon from "@/components/TechIcon";
import { SiGithub } from "react-icons/si";
import { ExternalLink } from "lucide-react";

function CaseCard({ item, index }: { item: (typeof caseStudies)[number]; index: number }) {
  const handlePointerMove = useCallback((event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  }, []);

  return (
    <article className="case-card" onPointerMove={handlePointerMove} data-testid={item.testId}>
      <div className="case-visual">
        <img src={item.image} alt={item.alt} loading={index === 0 ? "eager" : "lazy"} />
        <span className="case-number">{item.number}</span>
      </div>
      <div className="case-content">
        <div className="case-header-row">
          <span className="case-status">Real Dataset</span>
          <div className="case-action-links">
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="case-action-icon-btn"
                title="View Source on GitHub"
                aria-label="View Source on GitHub"
              >
                <SiGithub size={12} />
                <span className="case-btn-label">GitHub</span>
              </a>
            )}
            {item.demo && (
              <a
                href={item.demo}
                target="_blank"
                rel="noreferrer"
                className="case-action-icon-btn"
                title="View Live Demo / Report"
                aria-label="View Live Demo / Report"
              >
                <ExternalLink size={12} />
                <span className="case-btn-label">Live Demo</span>
              </a>
            )}
          </div>
        </div>
        <h3 className="case-title">{item.title}</h3>
        <div className="case-tags" aria-label="Technology and discipline tags">
          {item.tags.map((tag) => (
            <span className="case-tag" key={tag}>
              <TechIcon name={tag} size={12} className="case-tag-icon" />
              <span>{tag}</span>
            </span>
          ))}
        </div>
        <div className="case-story">
          {item.story.map((line) => (
            <div className="case-story-line" key={line.label}>
              <strong>{line.label}</strong>
              <span>{line.text}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function CaseStudies() {
  return (
    <section className="section-block cases-section" id="cases" data-testid="case-blueprints-section">
      <div className="section-wrap">
        <Reveal className="section-heading">
          <div>
            <p className="section-eyebrow">03 / Case studies</p>
            <h2>Outcomes first. Stack second.</h2>
          </div>
          <div>
            <div className="case-note" data-testid="case-studies-mocked-note">
              The stories below are MOCKED concept blueprints until real project details replace them.
            </div>
            <p>
              Every case study follows the same thread: the business problem, the insight hiding in the data,
              and the web solution that gives it a home.
            </p>
          </div>
        </Reveal>
        <div className="case-grid">
          {caseStudies.map((item, index) => (
            <Reveal key={item.testId} delay={index * 90}>
              <CaseCard item={item} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
