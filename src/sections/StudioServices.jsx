import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle.jsx";
import SafeImage from "../components/SafeImage.jsx";
import { studioServices } from "../data/services.js";
import { IMAGES } from "../assets/images/index.js";
import { fadeUp, scaleIn, stagger, viewport } from "../utils/motion.js";

const SERVICE_PARAM = {
  passport: "Passport",
  printing: "Printing",
  framing: "Framing",
  albums: "Photo Album",
  school: "School Photography",
};

export default function StudioServices() {
  return (
    <section className="section section--light studio" aria-labelledby="studio-title">
      <div className="container">
        <div className="studio__grid">
          <div>
            <SectionTitle
              eyebrow="In-Studio Services"
              title={["Walk In.", "Walk Out", "With Prints."]}
              text="Beyond sessions, the studio handles the everyday essentials — passport photographs, printing, framing and albums — right here in Achamangalam."
            />
            <motion.div className="studio__media" variants={scaleIn} initial="hidden" whileInView="show" viewport={viewport}>
              <div className="frame frame--landscape">
                <SafeImage src={IMAGES.studioAlt} alt="Camera on a table beside printed photographs" />
              </div>
            </motion.div>
          </div>

          <motion.ol className="studio__list" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
            {studioServices.map((s, i) => (
              <motion.li key={s.id} className="studio__row" variants={fadeUp}>
                <span className="studio__row-num">0{i + 1}</span>
                <h3 className="studio__row-title">{s.title}</h3>
                <Link to={`/booking?service=${encodeURIComponent(SERVICE_PARAM[s.id] || "Other")}`} className="studio__row-link">
                  Enquire
                </Link>
                <p className="studio__row-text">{s.text}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
