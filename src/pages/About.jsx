import { motion } from "framer-motion";
import usePageTitle from "../utils/usePageTitle.js";
import PageHeader from "../components/PageHeader.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import SafeImage from "../components/SafeImage.jsx";
import Button from "../components/Button.jsx";
import Reviews from "../sections/Reviews.jsx";
import BookingCTA from "../sections/BookingCTA.jsx";
import { IMAGES } from "../assets/images/index.js";
import { services } from "../data/services.js";
import { fadeUp, scaleIn, stagger, viewport } from "../utils/motion.js";

const VALUES = [
  {
    title: "Honest Light",
    text: "We work with natural and studio light that flatters without flattening — skin looks like skin, colour looks like the day.",
  },
  {
    title: "Quiet Direction",
    text: "Gentle guidance for posing and timing, so you can be present in the moment rather than performing for the camera.",
  },
  {
    title: "Finished In-House",
    text: "Editing, printing, framing and albums happen under one roof, so what you receive matches what we promised.",
  },
];

export default function About() {
  usePageTitle("About");

  return (
    <>
      <PageHeader
        eyebrow="About the Studio"
        title={["About KK", "Digital Studio"]}
        text="A professional photography studio in Achamangalam, Tirupathur — photographing people and the moments that hold them together."
        image={IMAGES.aboutHeader}
        imageAlt="Photographer looking through printed photographs on a table"
      />

      <section className="section section--light" aria-labelledby="about-story-title">
        <div className="container">
          <div className="about-preview__grid">
            <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={viewport}>
              <div className="frame frame--portrait">
                <SafeImage src={IMAGES.aboutSecondary} alt="Black and white photographs drying in a darkroom" />
              </div>
            </motion.div>

            <motion.div className="about-preview__body" variants={stagger} initial="hidden" whileInView="show" viewport={viewport}>
              <motion.span className="eyebrow" variants={fadeUp}>
                Our Work
              </motion.span>
              <motion.h2 id="about-story-title" className="display display--md" variants={fadeUp}>
                People First. <em>Always.</em>
              </motion.h2>
              <motion.p className="lead" variants={fadeUp}>
                KK Digital Studio photographs weddings and engagements, individual and family portraits, events and
                parties, products for local businesses, and portrait days for schools.
              </motion.p>
              <motion.p className="body-text" variants={fadeUp}>
                Alongside sessions, the studio provides passport photography, photo printing, photo framing and
                custom photo albums — the everyday services a community studio should offer, done properly.
              </motion.p>
              <motion.p className="body-text" variants={fadeUp}>
                We believe a photograph should feel like the moment it came from: the warmth of a ceremony, the ease
                of a family at home, the clarity of a professional headshot. That is the standard for every frame we
                deliver.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Button to="/portfolio" variant="dark">
                  See the Portfolio
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="values-title">
        <div className="container">
          <SectionTitle eyebrow="How We Work" title={["Three", "Commitments."]} />
          <motion.div className="about-values" variants={stagger} initial="hidden" whileInView="show" viewport={viewport}>
            {VALUES.map((v, i) => (
              <motion.div key={v.title} className="value" variants={fadeUp}>
                <span className="value__num">0{i + 1}</span>
                <h3 className="value__title">{v.title}</h3>
                <p className="value__text">{v.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="everything-title">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "start" }}>
            <SectionTitle
              eyebrow="Everything We Offer"
              title={["Eleven", "Services."]}
              text="One studio for sessions, events and everyday photo services."
              flush
            />
            <motion.ul className="about-list" variants={stagger} initial="hidden" whileInView="show" viewport={viewport}>
              {services.map((s, i) => (
                <motion.li key={s.id} variants={fadeUp}>
                  {s.title}
                  <span>{String(i + 1).padStart(2, "0")}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      <Reviews />
      <BookingCTA light={false} />
    </>
  );
}
