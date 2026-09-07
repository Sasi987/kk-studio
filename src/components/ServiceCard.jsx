import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SafeImage from "./SafeImage.jsx";
import { fadeUp } from "../utils/motion.js";

export default function ServiceCard({ service, index = 0 }) {
  const layoutClass = service.layout === "large" ? "service-card--large" : service.layout === "wide" ? "service-card--wide" : "";
  const ratioClass = service.ratio === "landscape" ? "frame--landscape" : "frame--portrait";

  return (
    <motion.article className={`service-card ${layoutClass}`} variants={fadeUp}>
      <Link to={`/booking?service=${encodeURIComponent(service.short)}`} className={`frame frame--hover ${ratioClass}`} aria-label={`Book ${service.title}`}>
        <span className="service-card__num">{String(index + 1).padStart(2, "0")}</span>
        <SafeImage src={service.image} alt={service.alt} />
      </Link>
      <div className="service-card__body">
        <h3 className="service-card__title">{service.title}</h3>
        <p className="service-card__text">{service.description}</p>
        <Link
          to={`/booking?service=${encodeURIComponent(service.short)}`}
          className="btn btn--link service-card__cta"
        >
          Enquire <span className="btn__arrow" aria-hidden="true">→</span>
        </Link>
      </div>
    </motion.article>
  );
}
