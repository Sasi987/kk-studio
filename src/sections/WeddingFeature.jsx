import { motion } from "framer-motion";
import Button from "../components/Button.jsx";
import SafeImage from "../components/SafeImage.jsx";
import { weddingCollage } from "../data/portfolio.js";
import { fadeUp, stagger, viewport } from "../utils/motion.js";

const tileVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
};

export default function WeddingFeature() {
  return (
    <section className="section section--charcoal wedding" aria-labelledby="wedding-title">
      <div className="container container--wide">
        <motion.div className="wedding__head" variants={stagger} initial="hidden" whileInView="show" viewport={viewport}>
          <div className="stack">
            <motion.span className="eyebrow" variants={fadeUp}>
              Weddings & Engagements
            </motion.span>
            <motion.h2 id="wedding-title" className="display display--lg" variants={fadeUp}>
              Your Story.
              <br />
              Beautifully <em>Preserved.</em>
            </motion.h2>
          </div>
          <motion.p className="lead" variants={fadeUp}>
            From the first ritual to the last farewell — the ceremonies, the candid laughter, the tears of family and
            the quiet portraits in between. We photograph the whole day, so nothing is left to memory alone.
          </motion.p>
        </motion.div>

        <motion.div
          className="wedding__collage"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          {weddingCollage.map((tile) => (
            <motion.figure key={tile.id} className={`wedding__tile wedding__tile--${tile.tile}`} variants={tileVariants}>
              <SafeImage src={tile.src} alt={tile.alt} />
              <figcaption className="frame__label">{tile.label}</figcaption>
            </motion.figure>
          ))}
        </motion.div>

        <motion.div className="wedding__cta" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
          <Button to="/portfolio?category=wedding">View Wedding Stories</Button>
        </motion.div>
      </div>
    </section>
  );
}
