import { useEffect } from "react";

const BASE = "KK Digital Studio";

export default function usePageTitle(title) {
  useEffect(() => {
    const previous = document.title;
    document.title = title ? `${title} — ${BASE}` : `${BASE} — Photography Studio, Tirupathur`;
    return () => {
      document.title = previous;
    };
  }, [title]);
}
