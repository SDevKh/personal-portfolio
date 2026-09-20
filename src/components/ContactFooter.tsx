import { ArrowUpRight } from "lucide-react";

export default function ContactFooter() {
  return (
    <footer className="contact-section" id="contact" data-testid="footer-section">
      <div className="section-wrap">
        <p className="section-eyebrow">06 / Start a useful conversation</p>
        <h2 className="contact-heading" data-testid="footer-contact-heading">
          See the big picture.
          <br />
          <span>Build the small details.</span>
        </h2>
        <div className="contact-row">
          <p className="contact-tagline">
            Looking for someone who can see the big picture and code the small details? Let's talk.
          </p>
          <span className="contact-availability" data-testid="footer-availability">
            <span className="status-dot" /> Open to full-time, contract, and advisory roles
          </span>
        </div>
        <div className="footer-meta">
          <span>Dev Khandelwal / 2026</span>
          <span className="footer-placeholder">Links marked placeholder</span>
          <div className="footer-links">
            <a
              className="footer-link"
              href="mailto:deveshkh141@gmail.com"
              data-testid="footer-contact-link"
            >
              deveshkh141@gmail.com<ArrowUpRight size={13} strokeWidth={1.5} />
            </a>
            <a
              className="footer-link"
              href="https://www.linkedin.com/in/devkhandelwalba"
              target="_blank"
              rel="noreferrer"
              data-testid="footer-linkedin-link"
            >
              LinkedIn <ArrowUpRight size={13} strokeWidth={1.5} />
            </a>
            <a
              className="footer-link"
              href="https://github.com/SDevkh"
              target="_blank"
              rel="noreferrer"
              data-testid="footer-github-link"
            >
              GitHub <ArrowUpRight size={13} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
