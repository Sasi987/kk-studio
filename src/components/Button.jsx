import { Link } from "react-router-dom";

/**
 * Renders a <Link> for internal routes, an <a> for external hrefs,
 * or a real <button> otherwise.
 */
export default function Button({
  to,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  block = false,
  arrow = true,
  className = "",
  children,
  ...rest
}) {
  const cls = ["btn", `btn--${variant}`, size === "sm" ? "btn--sm" : "", block ? "btn--block" : "", className]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <span className="btn__arrow" aria-hidden="true">
          →
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    const external = /^https?:\/\//i.test(href);
    return (
      <a
        href={href}
        className={cls}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls} {...rest}>
      {content}
    </button>
  );
}
