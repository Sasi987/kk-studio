import { useEffect, useState } from "react";
import { ICON_FALLBACK } from "../assets/images/index.js";

/**
 * <img> with lazy loading and a graceful fallback when the source fails.
 */
export default function SafeImage({ src, alt = "", loading = "lazy", className = "", ...rest }) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  return (
    <img
      src={failed ? ICON_FALLBACK : src}
      alt={alt}
      loading={loading}
      decoding="async"
      className={className}
      onError={() => setFailed(true)}
      {...rest}
    />
  );
}
