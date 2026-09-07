import { motion } from "framer-motion";
import SafeImage from "./SafeImage.jsx";
import { fadeUp, stagger } from "../utils/motion.js";

export default function PageHeader({ eyebrow, title, text, image, imageAlt = "" }) {
  const lines = Array.isArray(title) ? title : [title];

  return (
    <header className={`page-header ${image ? "page-header--image" : ""}`}>
      {image && (
        <motion.div
          className="page-header__bg"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <SafeImage src={image} alt={imageAlt} loading="eager" fetchPriority="high" />
        </motion.div>
      )}
      <div className="container">
        <motion.div className="page-header__inner" variants={stagger} initial="hidden" animate="show">
          {eyebrow && (
            <motion.span className="eyebrow" variants={fadeUp}>
              {eyebrow}
            </motion.span>
          )}
          <motion.h1 className="display display--lg" variants={fadeUp}>
            {lines.map((line, i) => (
              <span key={`${i}-${line}`} style={{ display: "block" }}>
                {line}
              </span>
            ))}
          </motion.h1>
          {text && (
            <motion.p className="lead page-header__text" variants={fadeUp}>
              {text}
            </motion.p>
          )}
        </motion.div>
      </div>
    </header>
  );
}
