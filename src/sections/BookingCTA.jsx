import { motion } from "framer-motion";
import Button from "../components/Button.jsx";
import { fadeUp, stagger, viewport } from "../utils/motion.js";

export default function BookingCTA({ light = true }) {
  return (
    <section className={`section booking-cta ${light ? "section--cream" : ""}`} aria-labelledby="booking-cta-title">
      <div className="container">
        <motion.div className="booking-cta__inner" variants={stagger} initial="hidden" whileInView="show" viewport={viewport}>
          <motion.span className="eyebrow eyebrow--plain" variants={fadeUp}>
            Bookings Open
          </motion.span>
          <motion.h2 id="booking-cta-title" className="display display--lg" variants={fadeUp}>
            Let&apos;s Create
            <br />
            Something <em>Timeless.</em>
          </motion.h2>
          <motion.p className="lead" style={{ textAlign: "center" }} variants={fadeUp}>
            Tell us about your day, your family or your brand — we will come back with a plan and a custom quote.
          </motion.p>
          <motion.div className="booking-cta__actions" variants={fadeUp}>
            <Button to="/booking" variant={light ? "dark" : "primary"}>
              Book Now
            </Button>
            <Button to="/contact" variant={light ? "outline-dark" : "outline"}>
              Contact the Studio
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
