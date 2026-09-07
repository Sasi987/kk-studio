import { motion } from "framer-motion";
import Button from "../components/Button.jsx";
import { BUSINESS, LINKS } from "../utils/business.js";
import { fadeUp, viewport } from "../utils/motion.js";

export default function Reviews() {
  return (
    <section className="section reviews" aria-labelledby="reviews-title">
      <div className="container">
        <motion.div className="reviews__box" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
          <div className="reviews__score" aria-label={`Rated ${BUSINESS.rating} out of 5`}>
            {BUSINESS.rating}
            <small>/ 5</small>
          </div>

          <div className="reviews__body">
            <span className="reviews__label">
              <span className="stars" aria-hidden="true">
                ★★★★★
              </span>
              &nbsp;&nbsp;{BUSINESS.reviews} Google Reviews
            </span>
            <h2 id="reviews-title" className="reviews__quote">
              Rated by the families, couples and businesses of Tirupathur who trusted us with their moments.
            </h2>
            <p className="body-text" style={{ fontSize: "0.9rem" }}>
              Read the real reviews on Google — and if we have photographed you, we would be grateful for yours.
            </p>
          </div>

          <div className="reviews__actions">
            <Button href={LINKS.mapSearch} variant="outline" size="sm">
              Read Reviews on Google
            </Button>
            <Button to="/booking" size="sm">
              Book a Session
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
