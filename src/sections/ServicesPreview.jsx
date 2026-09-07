import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle.jsx";
import Button from "../components/Button.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { featuredServices } from "../data/services.js";
import { fadeUp, stagger, viewport } from "../utils/motion.js";

export default function ServicesPreview() {
  return (
    <section className="section services-preview" aria-labelledby="services-preview-title">
      <div className="container">
        <div className="row-between" style={{ marginBottom: "clamp(2.5rem, 5vw, 4.5rem)" }}>
          <SectionTitle
            eyebrow="Services"
            title={["What We", "Photograph."]}
            text="From the largest wedding to a single passport photograph — every service, one standard."
            flush
          />
          <Button to="/services" variant="link" className="hide-mobile">
            All Services
          </Button>
        </div>

        <motion.div className="services-grid" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.05 }}>
          {featuredServices.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </motion.div>

        <motion.div
          style={{ marginTop: "3rem", display: "flex", justifyContent: "center" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <Button to="/services" variant="outline">
            View All 11 Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
