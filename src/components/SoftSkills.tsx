import { gluePoints } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

export default function SoftSkills() {
  return (
    <section className="section-block glue-section" id="glue" data-testid="soft-skills-section">
      <div className="section-wrap">
        <Reveal className="section-heading">
          <div>
            <p className="section-eyebrow">05 / The human element</p>
            <h2>The glue that holds it together.</h2>
          </div>
          <p>
            Technical range creates possibility. Communication, problem solving, and adaptability turn that
            possibility into momentum for a real team.
          </p>
        </Reveal>
        <div className="glue-grid">
          {gluePoints.map((point, index) => (
            <Reveal key={point.index} delay={index * 90}>
              <article className="glue-card" data-testid={`soft-skill-${point.index}`}>
                <span className="glue-card-index">{point.index}</span>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
