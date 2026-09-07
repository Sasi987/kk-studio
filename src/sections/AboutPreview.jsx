import { motion } from "framer-motion";
import Button from "../components/Button.jsx";
import SafeImage from "../components/SafeImage.jsx";
import { IMAGES } from "../assets/images/index.js";
import { fadeUp, scaleIn, stagger, viewport } from "../utils/motion.js";

const LIST = [
  "Wedding & Engagement",
  "Portraits & Headshots",
  "Family & Group",
  "Events & Parties",
  "Product & School",
  "Printing, Framing & Albums",
];

export default function AboutPreview() {
  return (
    <section className="section section--light about-preview" aria-labelledby="about-preview-title">
      <div className="container">
        <div className="about-preview__grid">
          <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={viewport}>
            <div className="frame frame--portrait">
              <SafeImage src={IMAGES.about} alt="Photographer selecting printed photographs beside a camera" />
              <span className="frame__label">The Studio · Achamangalam</span>
            </div>
          </motion.div>

          <motion.div
            className="about-preview__body"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <motion.span className="eyebrow" variants={fadeUp}>
              About
            </motion.span>
            <motion.h2 id="about-preview-title" className="display display--md" variants={fadeUp}>
              About KK <em>Digital</em> Studio
            </motion.h2>
            <motion.p className="lead" variants={fadeUp}>
              A professional photography studio in Achamangalam, Tirupathur — photographing weddings, engagements,
              portraits, families, events and products, and finishing every image in-house with printing, framing
              and albums.
            </motion.p>
            <motion.p className="body-text" variants={fadeUp}>
              Our approach is simple: quiet direction, honest light and patience for the moments that matter. Whether
              it is a traditional ceremony, a school portrait day or a single passport photograph, each frame is
              treated with the same care.
            </motion.p>
            <motion.ul className="about-preview__list" variants={fadeUp}>
              {LIST.map((label) => (
                <li key={label}>{label}</li>
              ))}
            </motion.ul>
            <motion.div variants={fadeUp}>
              <Button to="/about" variant="dark">
                About the Studio
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
