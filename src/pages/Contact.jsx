import { motion } from "framer-motion";
import usePageTitle from "../utils/usePageTitle.js";
import PageHeader from "../components/PageHeader.jsx";
import Button from "../components/Button.jsx";
import BookingCTA from "../sections/BookingCTA.jsx";
import { BUSINESS, LINKS } from "../utils/business.js";
import { IMAGES } from "../assets/images/index.js";
import { fadeUp, stagger, viewport } from "../utils/motion.js";

export default function Contact() {
  usePageTitle("Contact");

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={["Talk To", "The Studio."]}
        text="Call, message on WhatsApp or visit us in Achamangalam. For session bookings, use the booking form and we will confirm availability."
        image={IMAGES.contactHeader}
        imageAlt="Cameras and framed prints arranged on a wooden drawer"
      />

      <section className="section" aria-labelledby="contact-title">
        <div className="container">
          <div className="contact__grid">
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewport}>
              <motion.h2 id="contact-title" className="display display--md" variants={fadeUp} style={{ marginBottom: "2.5rem" }}>
                {BUSINESS.name}
              </motion.h2>

              <div className="contact__blocks">
                <motion.div className="contact__block" variants={fadeUp}>
                  <span className="eyebrow eyebrow--plain">Address</span>
                  <p className="contact__value">
                    {BUSINESS.addressLines.map((line) => (
                      <span key={line} style={{ display: "block" }}>
                        {line}
                      </span>
                    ))}
                  </p>
                </motion.div>

                <motion.div className="contact__block" variants={fadeUp}>
                  <span className="eyebrow eyebrow--plain">Phone</span>
                  <p className="contact__value">
                    <a href={BUSINESS.phoneTel}>{BUSINESS.phoneDisplay}</a>
                  </p>
                </motion.div>

                <motion.div className="contact__block" variants={fadeUp}>
                  <span className="eyebrow eyebrow--plain">Google Rating</span>
                  <p className="contact__value">
                    {BUSINESS.rating} / 5 <span className="muted" style={{ fontSize: "0.5em", letterSpacing: "0.2em" }}>· {BUSINESS.reviews} reviews</span>
                  </p>
                </motion.div>
              </div>

              <motion.div className="contact__actions" variants={fadeUp}>
                <Button href={BUSINESS.phoneTel} arrow={false}>
                  Call Now
                </Button>
                <Button href={LINKS.whatsappHello} variant="outline" arrow={false}>
                  WhatsApp
                </Button>
                <Button href={LINKS.directions} variant="outline" arrow={false}>
                  Get Directions
                </Button>
              </motion.div>
            </motion.div>

            <motion.div className="location__map contact__map" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
              <iframe
                title="Map — KK Digital Studio, Achamangalam, Tirupathur"
                src={LINKS.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </motion.div>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
