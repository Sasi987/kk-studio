import { Link } from "react-router-dom";
import { BUSINESS, LINKS } from "../utils/business.js";

const FOOTER_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/gallery", label: "Gallery" },
  { to: "/packages", label: "Packages" },
  { to: "/contact", label: "Contact" },
  { to: "/booking", label: "Book Now" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo">{BUSINESS.name}</span>
            <p className="footer__tagline">
              Photography.
              <br />
              People.
              <br />
              Memories.
            </p>
            <p className="footer__rating">
              <strong>{BUSINESS.rating} / 5</strong> · {BUSINESS.reviews} Google reviews
            </p>
          </div>

          <div>
            <h2 className="footer__heading">Navigate</h2>
            <ul className="footer__links">
              {FOOTER_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="footer__link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="footer__heading">Studio</h2>
            <address className="footer__contact" style={{ fontStyle: "normal" }}>
              <p>
                {BUSINESS.addressLines.map((line) => (
                  <span key={line} style={{ display: "block" }}>
                    {line}
                  </span>
                ))}
              </p>
              <a href={BUSINESS.phoneTel} className="footer__phone">
                {BUSINESS.phoneDisplay}
              </a>
              <a href={LINKS.directions} target="_blank" rel="noopener noreferrer" className="footer__link">
                Get Directions
              </a>
            </address>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} {BUSINESS.name}. All rights reserved.</span>
          <span>{BUSINESS.category} · Tirupathur, Tamil Nadu</span>
        </div>
      </div>
    </footer>
  );
}
