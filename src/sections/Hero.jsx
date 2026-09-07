import { motion } from "framer-motion";
import Button from "../components/Button.jsx";
import { IMAGES } from "../assets/images/index.js";
import { BUSINESS } from "../utils/business.js";

const EASE = [0.22, 1, 0.36, 1];

const lineReveal = (delay) => ({
  initial: { y: "110%" },
  animate: { y: 0 },
  transition: { duration: 1.1, ease: EASE, delay },
});

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <motion.div
        className="hero__media"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease: EASE }}
      >
        <picture>
          <source media="(max-width: 767px)" srcSet={IMAGES.hero.mobile} />
          <img src={IMAGES.hero.desktop} alt={IMAGES.hero.alt} fetchPriority="high" decoding="async" />
        </picture>
      </motion.div>
      <div className="hero__overlay" aria-hidden="true" />

      <div className="container hero__content">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
        >
          {BUSINESS.name} — Tirupathur
        </motion.span>

        <h1 id="hero-title" className="display display--xl hero__title">
          <span className="hero__line">
            <motion.span {...lineReveal(0.35)}>We Capture</motion.span>
          </span>
          <span className="hero__line">
            <motion.span {...lineReveal(0.5)}>
              Your <em>Moments.</em>
            </motion.span>
          </span>
        </h1>

        <div className="hero__bottom">
          <motion.p
            className="hero__lead"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
          >
            Photography that turns genuine moments into timeless memories.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.05, ease: EASE }}
          >
            <Button to="/booking">Book a Session</Button>
            <Button to="/portfolio" variant="outline">
              Explore Portfolio
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="hero__meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <span>Weddings</span>
          <span>Portraits</span>
          <span>Family</span>
          <span>Events</span>
          <span>{BUSINESS.rating} / 5 on Google</span>
        </motion.div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-text">Scroll</span>
        <span className="hero__scroll-line" />
      </div>
    </section>
  );
}
