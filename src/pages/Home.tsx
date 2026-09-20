import PortfolioHeader from "@/components/PortfolioHeader";
import FunnelSchematic from "@/components/FunnelSchematic";
import ValueFunnel from "@/components/ValueFunnel";
import ManifestoSection from "@/components/ManifestoSection";
import CaseStudies from "@/components/CaseStudies";
import Capabilities from "@/components/Capabilities";
import SoftSkills from "@/components/SoftSkills";
import ContactFooter from "@/components/ContactFooter";

const heroImage =
  "/landing.png";

const marqueeItems = [
  "Business analysis",
  "Data intelligence",
  "AI engineering",
  "Web products",
  "Better decisions",
];

export default function Home() {
  return (
    <div className="site-shell">
      <PortfolioHeader />
      <main>
        <section className="hero-section" id="top" data-testid="hero-section">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow" data-testid="hero-availability-badge">
                Full-stack business solutions architect / open to the right problem
              </p>
              <h1 className="hero-title" data-testid="hero-title-text">
                <span className="hero-line-mask" style={{ animationDelay: "120ms" }}>
                  Dev Khandelwal.
                </span>
                <span className="hero-line-mask" style={{ animationDelay: "250ms" }}>
                  I build intelligent
                </span>
                <span className="hero-line-mask" style={{ animationDelay: "380ms" }}>
                  business systems.
                </span>
              </h1>
              <p className="hero-subtitle" data-testid="hero-subtitle">
                I solve business bottlenecks by connecting the dots between Data, AI, and Design-To-Web Development.
              </p>
              <div className="hero-actions">
                <a
                  className="hero-primary-action"
                  href="#funnel"
                  data-testid="hero-cta-explore-funnel-button"
                >
                  View my value funnel
                </a>
                <a
                  className="hero-secondary-action"
                  href="#contact"
                  data-testid="hero-cta-contact-link"
                >
                  Start a conversation <span aria-hidden="true">↘</span>
                </a>
              </div>
              <div className="hero-badges" aria-label="Soft skills">
                <span className="skill-badge" data-testid="hero-skill-communication">
                  Stakeholder communication
                </span>
                <span className="skill-badge" data-testid="hero-skill-problem-solving">
                  Agile problem solving
                </span>
                <span className="skill-badge" data-testid="hero-skill-collaboration">
                  Cross-functional collaboration
                </span>
              </div>
            </div>
            <div className="hero-art">
              <FunnelSchematic imageUrl={heroImage} />
            </div>
          </div>
          <div className="hero-metrics" aria-label="Positioning metrics">
            <div className="hero-metric">
              <span className="hero-metric-value" data-testid="hero-metric-disciplines">
                04
              </span>
              <span className="hero-metric-label">connected disciplines</span>
            </div>
            <div className="hero-metric">
              <span className="hero-metric-value" data-testid="hero-metric-lens">
                01
              </span>
              <span className="hero-metric-label">business-first lens</span>
            </div>
            <div className="hero-metric">
              <span className="hero-metric-value" data-testid="hero-metric-output">
                ∞
              </span>
              <span className="hero-metric-label">ways to turn insight into action</span>
            </div>
          </div>
        </section>

        <div className="editorial-marquee" aria-label="Areas of practice">
          <div className="marquee-viewport">
            <div className="marquee-track">
              {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
                <span className="marquee-item" key={`${item}-${index}`}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <ValueFunnel />
        <ManifestoSection />
        <CaseStudies />
        <Capabilities />
        <SoftSkills />
        <ContactFooter />
      </main>
    </div>
  );
}
