import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#method", label: "Method", testId: "nav-link-method" },
  { href: "#cases", label: "Case studies", testId: "nav-link-cases" },
  { href: "#capabilities", label: "Capabilities", testId: "nav-link-capabilities" },
];

export default function PortfolioHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header" data-testid="nav-header">
      <div className="header-inner">
        <a className="brand-lockup" href="#top" onClick={closeMenu} data-testid="nav-logo-link">
          <span className="brand-mark">DK</span>
          <span>
            <span className="brand-name">DEV KHANDELWAL</span>
            <span className="brand-role">FULL-STACK SOLUTIONS ARCHITECT</span>
          </span>
        </a>

        <nav
          className={`header-links${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <a
              key={link.href}
              className="header-link"
              href={link.href}
              onClick={closeMenu}
              data-testid={link.testId}
            >
              {link.label}
            </a>
          ))}
          <a
            className="header-contact"
            href="#contact"
            onClick={closeMenu}
            data-testid="nav-cta-contact-link"
          >
            Let's talk <ArrowUpRight size={14} strokeWidth={1.7} />
          </a>
        </nav>

        <button
          className="header-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          data-testid="mobile-menu-toggle-button"
        >
          {menuOpen ? <X size={17} strokeWidth={1.7} /> : <Menu size={17} strokeWidth={1.7} />}
        </button>
      </div>
    </header>
  );
}
