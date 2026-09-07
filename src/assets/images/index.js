import heroDesktop from "../hero/hero-desktop.svg";
import heroMobile from "../hero/hero-mobile.svg";

/**
 * Image helper — builds responsive Pexels CDN URLs.
 * All images are royalty-free stock photography used as studio sample imagery.
 */
export const px = (id, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const IMAGES = {
  hero: {
    desktop: heroDesktop,
    mobile: heroMobile,
    alt: "Couple embracing in traditional wedding attire during an outdoor ceremony",
  },
  about: px(7014436, 1200),
  aboutSecondary: px(8114352, 900),
  studio: px(7015072, 1000),
  studioAlt: px(7014941, 1200),
  bookingAside: px(32060316, 1000),
  bookingHeader: px(30169492, 1800),
  servicesHeader: px(38147801, 1800),
  portfolioHeader: px(31002342, 1800),
  galleryHeader: px(29396108, 1800),
  packagesHeader: px(32327732, 1800),
  contactHeader: px(15679395, 1800),
  aboutHeader: px(7014874, 1800),
  cta: px(8819260, 1400),
};

export const ICON_FALLBACK =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='1000' viewBox='0 0 800 1000'><rect width='800' height='1000' fill='#1c1c1c'/><text x='50%' y='50%' fill='#8f8b84' font-family='Georgia,serif' font-size='30' letter-spacing='6' text-anchor='middle'>KK DIGITAL STUDIO</text></svg>`
  );
