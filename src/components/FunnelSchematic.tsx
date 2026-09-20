type FunnelSchematicProps = {
  imageUrl: string;
};

export default function FunnelSchematic({ imageUrl }: FunnelSchematicProps) {
  return (
    <figure className="hero-figure" data-testid="hero-funnel-graphic">
      <img src={imageUrl} alt="Architectural blueprint lines forming a system map" />
      <div className="funnel-overlay" aria-label="Value Funnel diagram from data to business value">
        <div className="funnel-overlay-label">
          <span>Raw complexity</span>
          <span>Signal / 01—04</span>
        </div>
        <div className="DATA" style={{ font: '30px', position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)' }}> DATA </div>
        <div className="DECISION" style={{ font: '40px', position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)' }}> DECISION </div>
        <div className="PRODUCT" style={{ font: '50px', position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)' }}> PRODUCT </div>
        <svg
          className="funnel-svg"
          viewBox="0 0 420 330"
          role="img"
          aria-label="Data flows through four connected stages into business value"
        >
          <path
            className="funnel-stroke"
            d="M34 38H386M34 292H386M74 72H346M74 258H346M114 106H306M114 224H306M154 140H266M154 190H266"
          />
          <path
            className="funnel-stroke"
            d="M34 38L154 140M386 38L266 140M34 292L154 190M386 292L266 190"
          />
          <path className="funnel-stroke-accent" d="M34 38L154 140L266 190L386 292" />
          <path className="funnel-stroke-accent" d="M386 38L266 140L154 190L34 292" />
          <circle className="funnel-node" cx="34" cy="38" r="5" />
          <circle className="funnel-node" cx="386" cy="38" r="5" />
          <circle className="funnel-node" cx="154" cy="140" r="5" />
          <circle className="funnel-node" cx="266" cy="140" r="5" />
          <circle className="funnel-node" cx="210" cy="165" r="7" />
          <circle className="funnel-node" cx="154" cy="190" r="5" />
          <circle className="funnel-node" cx="266" cy="190" r="5" />
          <circle className="funnel-node" cx="34" cy="292" r="5" />
          <circle className="funnel-node" cx="386" cy="292" r="5" />
          <path className="funnel-stroke" d="M210 165V242" />
          <path className="funnel-stroke-accent" d="M210 242V294" />
        </svg>
        <div className="funnel-note">
          <strong>THE VALUE FUNNEL</strong>
          <span>Business question in. Data-backed product out. Every stage makes the next one sharper.</span>
        </div>
      </div>
      <figcaption className="hero-figure-caption">
        <strong>VALUE FUNNEL / 01—04</strong>
        <span>Data → Decision → Product</span>
      </figcaption>
    </figure>
  );
}
