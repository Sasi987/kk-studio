import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "../utils/motion.js";

/**
 * title can be a string or an array of lines. Lines are rendered as block spans.
 */
export default function SectionTitle({
  eyebrow,
  title,
  text,
  align = "left",
  size = "md",
  as: Tag = "h2",
  flush = false,
  className = "",
}) {
  const lines = Array.isArray(title) ? title : [title];
  const cls = [
    "section-title",
    align === "center" ? "section-title--center" : "",
    flush ? "section-title--flush" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <motion.div className={cls} variants={stagger} initial="hidden" whileInView="show" viewport={viewport}>
      {eyebrow && (
        <motion.span className="eyebrow" variants={fadeUp}>
          {eyebrow}
        </motion.span>
      )}
      <motion.div variants={fadeUp}>
        <Tag className={`display display--${size}`}>
          {lines.map((line, i) => (
            <span key={`${i}-${line}`} style={{ display: "block" }}>
              {line}
            </span>
          ))}
        </Tag>
      </motion.div>
      {text && (
        <motion.p className="lead" variants={fadeUp}>
          {text}
        </motion.p>
      )}
    </motion.div>
  );
}
