import { useCallback, useState } from "react";
import SectionTitle from "../components/SectionTitle.jsx";
import Button from "../components/Button.jsx";
import MasonryGrid from "../components/MasonryGrid.jsx";
import Lightbox from "../components/Lightbox.jsx";
import { featuredPortfolio } from "../data/portfolio.js";

export default function PortfolioPreview() {
  const [index, setIndex] = useState(null);
  const total = featuredPortfolio.length;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(() => setIndex((i) => (i === null ? null : (i - 1 + total) % total)), [total]);
  const next = useCallback(() => setIndex((i) => (i === null ? null : (i + 1) % total)), [total]);

  return (
    <section className="section pf-preview" aria-labelledby="pf-preview-title">
      <div className="container">
        <div className="pf-preview__head">
          <SectionTitle eyebrow="Selected Work" title={["From The", "Portfolio."]} flush />
          <Button to="/portfolio" variant="link" className="hide-mobile">
            Full Portfolio
          </Button>
        </div>

        <MasonryGrid items={featuredPortfolio} onSelect={setIndex} />

        <div className="pf-preview__foot">
          <Button to="/portfolio" variant="outline">
            View Full Portfolio
          </Button>
        </div>
      </div>

      <Lightbox items={featuredPortfolio} index={index} onClose={close} onPrev={prev} onNext={next} />
    </section>
  );
}
