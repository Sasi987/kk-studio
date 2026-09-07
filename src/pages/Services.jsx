import { motion } from "framer-motion";
import usePageTitle from "../utils/usePageTitle.js";
import PageHeader from "../components/PageHeader.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import BookingCTA from "../sections/BookingCTA.jsx";
import Location from "../sections/Location.jsx";
import { services } from "../data/services.js";
import { IMAGES } from "../assets/images/index.js";
import { fadeUp, stagger, viewport } from "../utils/motion.js";

const PROCESS = [
  { title: "Enquire", text: "Send a booking request or call the studio with your date and requirements." },
  { title: "Plan", text: "We confirm availability, discuss locations, timings and provide a custom quote." },
  { title: "Photograph", text: "On the day, we work quietly and thoroughly — covering both the planned and the unexpected." },
  { title: "Deliver", text: "Edited images, prints, frames or albums — finished in-house and ready to keep." },
];

export default function Services() {
  usePageTitle("Services");

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={["Every Moment.", "Every Format."]}
        text="Eleven photography and studio services under one roof in Achamangalam, Tirupathur."
        image={IMAGES.servicesHeader}
        imageAlt="Close-up of a couple in traditional wedding attire"
      />

      <section className="section" aria-label="All services">
        <div className="container">
          <motion.div className="services-grid" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.02 }}>
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section section--light" aria-labelledby="process-title">
        <div className="container">
          <SectionTitle eyebrow="The Process" title={["Simple.", "Considered."]} />
          <motion.ol className="process" variants={stagger} initial="hidden" whileInView="show" viewport={viewport}>
            {PROCESS.map((p, i) => (
              <motion.li key={p.title} className="process__step" variants={fadeUp}>
                <span className="process__num">0{i + 1}</span>
                <h3 className="process__title">{p.title}</h3>
                <p className="process__text">{p.text}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      <BookingCTA />
      <Location showMap={false} />
    </>
  );
}
