import { useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SafeImage from "./SafeImage.jsx";
import { CloseIcon, ArrowLeftIcon, ArrowRightIcon } from "../assets/icons/Icons.jsx";

/**
 * Accessible lightbox with keyboard navigation, swipe support and a
 * temporary body scroll lock that is always restored.
 *
 * props: items (array of {full, alt, title, category}), index (number|null),
 *        onClose(), onPrev(), onNext()
 */
export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const isOpen = index !== null && index !== undefined && items[index];
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const closeBtnRef = useRef(null);

  // Scroll lock + keyboard controls — cleaned up on close/unmount
  useEffect(() => {
    if (!isOpen) return undefined;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);

    const focusTimer = window.setTimeout(() => {
      if (closeBtnRef.current) closeBtnRef.current.focus();
    }, 50);

    return () => {
      document.body.style.overflow = previous || "";
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(focusTimer);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  const onTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const onTouchEnd = useCallback(
    (e) => {
      if (touchStartX.current === null) return;
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      const dy = e.changedTouches[0].clientY - touchStartY.current;
      touchStartX.current = null;
      touchStartY.current = null;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) onNext();
        else onPrev();
      }
    },
    [onNext, onPrev]
  );

  const current = isOpen ? items[index] : null;

  return (
    <AnimatePresence>
      {current && (
        <motion.div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${current.title} — image ${index + 1} of ${items.length}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <span className="lightbox__counter" aria-hidden="true">
            {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </span>

          <button
            ref={closeBtnRef}
            type="button"
            className="lightbox__btn lightbox__close"
            aria-label="Close"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            <CloseIcon />
          </button>

          {items.length > 1 && (
            <>
              <button
                type="button"
                className="lightbox__btn lightbox__prev"
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                }}
              >
                <ArrowLeftIcon />
              </button>
              <button
                type="button"
                className="lightbox__btn lightbox__next"
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
              >
                <ArrowRightIcon />
              </button>
            </>
          )}

          <figure className="lightbox__figure">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                style={{ display: "flex", justifyContent: "center", maxWidth: "100%" }}
                onClick={(e) => e.stopPropagation()}
              >
                <SafeImage src={current.full} alt={current.alt} loading="eager" className="lightbox__img" />
              </motion.div>
            </AnimatePresence>
            <figcaption className="lightbox__caption">
              <span>{current.title}</span>
              <span>{current.category}</span>
            </figcaption>
          </figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
