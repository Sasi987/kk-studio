import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import usePageTitle from "../utils/usePageTitle.js";
import PageHeader from "../components/PageHeader.jsx";
import SafeImage from "../components/SafeImage.jsx";
import Button from "../components/Button.jsx";
import Location from "../sections/Location.jsx";
import { packages } from "../data/services.js";
import { IMAGES } from "../assets/images/index.js";
import { fadeUp, stagger } from "../utils/motion.js";

export default function Packages() {
  usePageTitle("Packages");

  return (
    <>
      <PageHeader
        eyebrow="Packages"
        title={["Built Around", "Your Day."]}
        text="Every booking is quoted individually based on date, duration, location and deliverables. Choose a starting point below and request a custom quote."
        image={IMAGES.packagesHeader}
        imageAlt="Bride and groom performing a traditional wedding ritual"
      />

      <section className="section" aria-label="Packages">
        <div className="container">
          <motion.div className="packages-grid" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.05 }}>
            {packages.map((pkg) => (
              <motion.article key={pkg.id} className="package" variants={fadeUp}>
                <Link to={`/booking?service=${encodeURIComponent(pkg.service)}`} className="frame frame--hover" aria-label={`Request a ${pkg.title} quote`}>
                  <SafeImage src={pkg.image} alt={pkg.alt} />
                </Link>
                <div className="package__body">
                  <h2 className="package__title">{pkg.title}</h2>
                  <span className="package__price">Custom Quote</span>
                  <p className="package__text">{pkg.text}</p>
                  <ul className="package__list">
                    {pkg.includes.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                  <div className="package__cta">
                    <Button to={`/booking?service=${encodeURIComponent(pkg.service)}`} variant="outline" block>
                      Request Quote
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <p className="marquee-line" style={{ marginTop: "3.5rem" }}>
            <span>No hidden charges</span>
            <span>Quotes tailored to each booking</span>
            <span>Prints, frames & albums available</span>
          </p>
        </div>
      </section>

      <Location />
    </>
  );
}
