import { motion } from "framer-motion";
import SafeImage from "./SafeImage.jsx";

/**
 * CSS-columns masonry. Images keep their natural aspect ratio (height: auto),
 * so nothing is cropped or distorted. Items reveal as they scroll into view.
 */
export default function MasonryGrid({ items, onSelect, singleOnMobile = false }) {
  return (
    <div className={`masonry ${singleOnMobile ? "masonry--single-mobile" : ""}`.trim()}>
      {items.map((item, i) => (
        <motion.button
          key={item.id}
          type="button"
          className="masonry__item"
          onClick={() => onSelect(i)}
          aria-label={`Open ${item.title}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: Math.min((i % 6) * 0.06, 0.3) }}
        >
          <SafeImage
            src={item.thumb}
            alt={item.alt}
            width={item.orientation === "portrait" ? 800 : 1000}
            height={item.orientation === "portrait" ? 1000 : 667}
            style={{ height: "auto" }}
          />
          <span className="masonry__caption" aria-hidden="true">
            <span>{item.title}</span>
            <span>{item.category}</span>
          </span>
        </motion.button>
      ))}
    </div>
  );
}
