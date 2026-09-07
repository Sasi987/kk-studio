import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import usePageTitle from "../utils/usePageTitle.js";
import PageHeader from "../components/PageHeader.jsx";
import MasonryGrid from "../components/MasonryGrid.jsx";
import Lightbox from "../components/Lightbox.jsx";
import BookingCTA from "../sections/BookingCTA.jsx";
import { portfolio, categories } from "../data/portfolio.js";
import { IMAGES } from "../assets/images/index.js";

const VALID = new Set(categories.map((c) => c.id));

export default function Portfolio() {
  usePageTitle("Portfolio");
  const [searchParams, setSearchParams] = useSearchParams();
  const paramCategory = searchParams.get("category");
  const initial = paramCategory && VALID.has(paramCategory) ? paramCategory : "all";

  const [active, setActive] = useState(initial);
  const [index, setIndex] = useState(null);

  // Keep state in sync if the URL param changes (e.g. via a CTA link)
  useEffect(() => {
    if (paramCategory && VALID.has(paramCategory) && paramCategory !== active) {
      setActive(paramCategory);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramCategory]);

  const items = useMemo(
    () => (active === "all" ? portfolio : portfolio.filter((p) => p.category === active)),
    [active]
  );
  const total = items.length;

  const selectCategory = (id) => {
    setActive(id);
    setIndex(null);
    if (id === "all") setSearchParams({}, { replace: true });
    else setSearchParams({ category: id }, { replace: true });
  };

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(() => setIndex((i) => (i === null ? null : (i - 1 + total) % total)), [total]);
  const next = useCallback(() => setIndex((i) => (i === null ? null : (i + 1) % total)), [total]);

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title={["Selected", "Work."]}
        text="Weddings, engagements, portraits, families, events, products and school photography — filter by category and open any image."
        image={IMAGES.portfolioHeader}
        imageAlt="Bride and groom adorned with floral garlands"
      />

      <section className="section section--tight" aria-label="Portfolio grid">
        <div className="container container--wide">
          <div className="filters" role="group" aria-label="Filter portfolio by category">
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                aria-pressed={active === c.id}
                className={`filter ${active === c.id ? "is-active" : ""}`}
                onClick={() => selectCategory(c.id)}
              >
                {c.label}
                {c.id !== "all" && (
                  <span className="sr-only"> ({portfolio.filter((p) => p.category === c.id).length} images)</span>
                )}
              </button>
            ))}
          </div>

          <p className="muted" style={{ fontSize: "0.66rem", letterSpacing: "0.26em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            {total} {total === 1 ? "image" : "images"}
          </p>

          <MasonryGrid key={active} items={items} onSelect={setIndex} />
        </div>
      </section>

      <BookingCTA />

      <Lightbox items={items} index={index} onClose={close} onPrev={prev} onNext={next} />
    </>
  );
}
