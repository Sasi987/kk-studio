export const BUSINESS = {
  name: "KK DIGITAL STUDIO",
  category: "Professional Photography Studio",
  addressLines: ["Achamangalam,", "Tirupathur,", "Tamil Nadu 635651"],
  addressInline: "Achamangalam, Tirupathur, Tamil Nadu 635651",
  phoneDisplay: "097888 89966",
  phoneTel: "tel:09788889966",
  whatsapp: "https://wa.me/919788889966",
  rating: "4.8",
  reviews: 26,
};

const MAP_QUERY = encodeURIComponent("KK Digital Studio, Achamangalam, Tirupathur, Tamil Nadu 635651");

export const LINKS = {
  directions: `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`,
  mapSearch: `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`,
  mapEmbed: `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`,
  whatsappHello: `${BUSINESS.whatsapp}?text=${encodeURIComponent(
    "Hello KK Digital Studio, I would like to enquire about a photography session."
  )}`,
};
