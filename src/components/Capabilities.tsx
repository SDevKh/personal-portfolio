import { capabilityGroups } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import TechIcon from "@/components/TechIcon";

export default function Capabilities() {
  return (
    <section className="section-block capabilities-section" id="capabilities" data-testid="capabilities-section">
      <div className="section-wrap">
        <Reveal className="section-heading">
          <div>
            <p className="section-eyebrow">04 / Technical stack</p>
            <h2>Tools grouped by intent, not by ego.</h2>
          </div>
          <p>
            The stack is a means of moving the funnel forward. Each group answers a different question in the
            path from ambiguity to adoption.
          </p>
        </Reveal>
        <div className="capability-grid">
          {capabilityGroups.map((group, index) => (
            <Reveal key={group.index} delay={index * 70}>
              <article className="capability-card" data-testid={`capability-${group.name.toLowerCase()}`}>
                <span className="capability-index">{group.index}</span>
                <h3>{group.name}</h3>
                <p className="capability-intent">{group.intent}</p>
                <div className="capability-icon-cluster" aria-label={`${group.name} technologies and tools`}>
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="capability-icon-tile"
                      tabIndex={0}
                      role="img"
                      aria-label={item}
                      data-testid={`tech-icon-${item.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                    >
                      <TechIcon name={item} size={22} className="tech-icon-svg" />
                      <span className="tech-icon-tooltip">{item}</span>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

