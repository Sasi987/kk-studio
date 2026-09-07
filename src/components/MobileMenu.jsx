import { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { NAV_LINKS } from "../data/nav.js";
import { BUSINESS } from "../utils/business.js";

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function MobileMenu({ onClose }) {
  // Temporary scroll lock — always restored on close/unmount
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous || "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      id="mobile-menu"
      className="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <motion.nav aria-label="Mobile" variants={listVariants} initial="hidden" animate="show">
        <ul className="mobile-menu__list">
          {NAV_LINKS.map((link, i) => (
            <motion.li key={link.to} variants={itemVariants}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                onClick={onClose}
                className={({ isActive }) => `mobile-menu__link ${isActive ? "is-active" : ""}`}
              >
                <span>{link.label}</span>
                <span className="mobile-menu__num">0{i + 1}</span>
              </NavLink>
            </motion.li>
          ))}
        </ul>
        <motion.div className="mobile-menu__cta" variants={itemVariants}>
          <Link to="/booking" onClick={onClose} className="btn btn--primary btn--block">
            Book Now
          </Link>
        </motion.div>
      </motion.nav>

      <div className="mobile-menu__footer">
        <strong>{BUSINESS.name}</strong>
        <span>{BUSINESS.addressInline}</span>
        <a href={BUSINESS.phoneTel}>{BUSINESS.phoneDisplay}</a>
      </div>
    </motion.div>
  );
}
