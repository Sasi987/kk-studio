import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "../utils/motion.js";
import { BUSINESS } from "../utils/business.js";

export default function Intro() {
  return (
    <section className="section intro" aria-labelledby="intro-title">
      <div className="container">
        <motion.div className="intro__grid" variants={stagger} initial="hidden" whileInView="show" viewport={viewport}>
          <motion.h2 id="intro-title" className="display display--lg intro__display" variants={fadeUp}>
            <span>Photography.</span>
            <span>People.</span>
            <span>Memories.</span>
          </motion.h2>

          <div className="intro__side">
            <motion.div className="intro__rating" variants={fadeUp}>
              <span className="intro__score">
                {BUSINESS.rating}
                <small>/ 5</small>
              </span>
              <span className="stars" aria-hidden="true">
                ★★★★★
              </span>
              <span className="intro__reviews">{BUSINESS.reviews} Google Reviews</span>
            </motion.div>

            <motion.p className="intro__statement" variants={fadeUp}>
              “Every photograph should feel like a moment you can return to.”
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
