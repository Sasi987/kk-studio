import { useCallback, useMemo, useState } from "react";
import { motion } from "framer-motion";
import usePageTitle from "../utils/usePageTitle.js";
import PageHeader from "../components/PageHeader.jsx";
import SafeImage from "../components/SafeImage.jsx";
import MasonryGrid from "../components/MasonryGrid.jsx";
import Lightbox from "../components/Lightbox.jsx";
import BookingCTA from "../sections/BookingCTA.jsx";
import { portfolio, galleryEditorial } from "../data/portfolio.js";
import { IMAGES } from "../assets/images/index.js";
import { fadeUp, scaleIn, stagger, viewport } from "../utils/motion.js";

function Feature({ item, label, onOpen }) {
  if (!item) return null;
  return (
    <motion.button
      type="button"
      className="gallery__feature"
      onClick={() => onOpen(item)}
      aria-label={`Open ${item.title}`}
      variants={scaleIn}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      <div className="frame frame--cinema frame--hover">
        <SafeImage src={item.full} alt={item.alt} />
      </div>
      <span className="gallery__feature-caption">
        <span className="eyebrow eyebrow--plain" style={{ color: "var(--gray-soft)" }}>
          {label}
        </span>
        <span className="display">{item.title}</span>
      </span>
    </motion.button>
  );
}

function Spread({ items, onOpen }) {
  return (
    <motion.div className="gallery__spread" variants={stagger} initial="hidden" whileInView="show" viewport={viewport}>
      {items.filter(Boolean).map((item) => (
        <motion.button
          key={item.id}
          type="button"
          className="frame frame--hover"
          onClick={() => onOpen(item)}
          aria-label={`Open ${item.title}`}
          variants={fadeUp}
        >
          <SafeImage src={item.thumb} alt={item.alt} />
          <span className="frame__label">{item.title}</span>
        </motion.button>
      ))}
    </motion.div>
  );
}

// Editorial pieces + the remaining portfolio split into two masonry blocks.
const EDITORIAL = [
  galleryEditorial.feature,
  ...galleryEditorial.spreadA,
  galleryEditorial.feature2,
  ...galleryEditorial.spreadB,
].filter(Boolean);
const EDITORIAL_IDS = new Set(EDITORIAL.map((p) => p.id));
const REST = portfolio.filter((p) => !EDITORIAL_IDS.has(p.id));
const HALF = Math.ceil(REST.length / 2);
const MASONRY_A = REST.slice(0, HALF);
const MASONRY_B = REST.slice(HALF);

// One flat list drives the lightbox, in visual order.
const SEQUENCE = [
  galleryEditorial.feature,
  ...galleryEditorial.spreadA,
  ...MASONRY_A,
  galleryEditorial.feature2,
  ...galleryEditorial.spreadB,
  ...MASONRY_B,
].filter(Boolean);

const OFFSET_A = 1 + galleryEditorial.spreadA.filter(Boolean).length;
const OFFSET_B = OFFSET_A + MASONRY_A.length + 1 + galleryEditorial.spreadB.filter(Boolean).length;

export default function Gallery() {
  usePageTitle("Gallery");

  const [index, setIndex] = useState(null);
  const total = SEQUENCE.length;

  const openItem = useCallback((item) => {
    const i = SEQUENCE.findIndex((s) => s.id === item.id);
    if (i >= 0) setIndex(i);
  }, []);
  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(() => setIndex((i) => (i === null ? null : (i - 1 + total) % total)), [total]);
  const next = useCallback(() => setIndex((i) => (i === null ? null : (i + 1) % total)), [total]);

  const onSelectA = useMemo(() => (i) => setIndex(OFFSET_A + i), []);
  const onSelectB = useMemo(() => (i) => setIndex(OFFSET_B + i), []);

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title={["An Editorial", "Selection."]}
        text="Large photographs, original proportions. Portraits, weddings, family, events and product work from the studio."
        image={IMAGES.galleryHeader}
        imageAlt="Bride in red attire posing outdoors"
      />

      <section className="section section--tight" aria-label="Gallery">
        <div className="container container--wide gallery__block">
          <Feature item={galleryEditorial.feature} label="Wedding" onOpen={openItem} />

          <div className="gallery__statement">
            <p className="display display--sm">
              Photographs that <em>hold still</em> while everything else moves on.
            </p>
            <p className="body-text">
              Each image is shown at its native aspect ratio. Tap or click any photograph to view it full-screen,
              then use the arrows or swipe to move through the sequence.
            </p>
          </div>

          <Spread items={galleryEditorial.spreadA} onOpen={openItem} />

          <MasonryGrid items={MASONRY_A} onSelect={onSelectA} singleOnMobile />

          <Feature item={galleryEditorial.feature2} label="Events" onOpen={openItem} />

          <Spread items={galleryEditorial.spreadB} onOpen={openItem} />

          <MasonryGrid items={MASONRY_B} onSelect={onSelectB} singleOnMobile />
        </div>
      </section>

      <BookingCTA />

      <Lightbox items={SEQUENCE} index={index} onClose={close} onPrev={prev} onNext={next} />
    </>
  );
}
