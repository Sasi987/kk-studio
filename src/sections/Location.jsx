import { motion } from "framer-motion";
import Button from "../components/Button.jsx";
import { BUSINESS, LINKS } from "../utils/business.js";
import { fadeUp, stagger, viewport } from "../utils/motion.js";

export default function Location({ showMap = true }) {
  return (
    <section className="section section--charcoal location" aria-labelledby="location-title">
      <div className="container">
        <div className="location__grid">
          <motion.div className="location__info" variants={stagger} initial="hidden" whileInView="show" viewport={viewport}>
            <motion.span className="eyebrow" variants={fadeUp}>
              Visit the Studio
            </motion.span>
            <motion.h2 id="location-title" className="location__address" variants={fadeUp}>
              {BUSINESS.addressLines.map((line) => (
                <span key={line} style={{ display: "block" }}>
                  {line}
                </span>
              ))}
            </motion.h2>
            <motion.a href={BUSINESS.phoneTel} className="location__phone" variants={fadeUp}>
              {BUSINESS.phoneDisplay}
            </motion.a>
            <motion.p className="body-text" variants={fadeUp}>
              Located in Achamangalam, Tirupathur. Call ahead for session bookings; walk in any time for passport
              photographs, prints and framing.
            </motion.p>
            <motion.div className="location__actions" variants={fadeUp}>
              <Button href={LINKS.directions} variant="outline">
                Get Directions
              </Button>
              <Button href={BUSINESS.phoneTel} variant="outline" className="hide-mobile">
                Call Now
              </Button>
              <Button href={LINKS.whatsappHello} variant="outline" className="hide-mobile">
                WhatsApp
              </Button>
            </motion.div>
          </motion.div>

          {showMap && (
            <motion.div className="location__map" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
              <iframe
                title="Map — KK Digital Studio, Achamangalam, Tirupathur"
                src={LINKS.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
