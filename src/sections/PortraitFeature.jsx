import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle.jsx";
import Button from "../components/Button.jsx";
import SafeImage from "../components/SafeImage.jsx";
import { portraitStrip } from "../data/portfolio.js";
import { fadeUp, stagger, viewport } from "../utils/motion.js";

export default function PortraitFeature() {
  return (
    <section className="section section--cream portraits" aria-labelledby="portraits-title">
      <div className="container">
        <SectionTitle
          eyebrow="Portraits & Headshots"
          title={["Portraits With", "Personality."]}
          text="Individual portraits, professional headshots, family sittings and classic studio work — lit and directed so you look like yourself, at your best."
        />

        <motion.div className="portraits__strip" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
          {portraitStrip.map((p, i) => (
            <motion.figure key={p.id} className="portraits__item" variants={fadeUp}>
              <div className="frame frame--hover">
                <SafeImage src={p.src} alt={p.alt} />
              </div>
              <figcaption className="portraits__label">
                <span>{p.label}</span>
                <span>0{i + 1}</span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>

        <motion.div className="portraits__foot" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
          <p className="body-text">
            Sessions are available in the studio at Achamangalam or on location around Tirupathur.
          </p>
          <Button to="/booking?service=Portrait" variant="dark">
            Book a Portrait Session
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
