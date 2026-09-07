import { px } from "../assets/images/index.js";

export const categories = [
  { id: "all", label: "All" },
  { id: "wedding", label: "Wedding" },
  { id: "engagement", label: "Engagement" },
  { id: "portrait", label: "Portrait" },
  { id: "family", label: "Family" },
  { id: "events", label: "Events" },
  { id: "product", label: "Product" },
  { id: "school", label: "School" },
];

const item = (id, category, title, alt, orientation = "landscape") => ({
  id: `${category}-${id}`,
  pexelsId: id,
  category,
  title,
  alt,
  orientation,
  thumb: px(id, orientation === "portrait" ? 800 : 1000),
  full: px(id, 1800),
});

export const portfolio = [
  item(17657612, "wedding", "The Embrace", "Couple embracing during an outdoor wedding ceremony"),
  item(35069916, "wedding", "Golden Hour", "Couple in traditional attire posing outdoors", "portrait"),
  item(31798270, "wedding", "First Look", "Bride and groom reviewing photographs together"),
  item(32327732, "wedding", "Rituals", "Bride and groom performing a traditional ritual"),
  item(32679852, "wedding", "Family Blessings", "Couple performing a wedding ritual with family present"),
  item(30169492, "wedding", "Night Ceremony", "Bride and groom during an evening ceremony"),
  item(29370687, "wedding", "The Bride", "Portrait of a bride in ornate traditional clothing", "portrait"),
  item(32212568, "wedding", "Maroon & Gold", "Bride in maroon attire with intricate jewellery", "portrait"),
  item(38147801, "wedding", "Details", "Close-up of traditional wedding attire"),
  item(31002342, "wedding", "Garlands", "Bride and groom adorned with floral garlands"),
  item(34962720, "wedding", "Among the Green", "Bride in red outfit amidst greenery", "portrait"),

  item(38274758, "engagement", "Two Rings", "Close-up of a couple's hands with rings", "portrait"),
  item(29494642, "engagement", "Henna & Rings", "Engagement ceremony with henna hands"),
  item(38295814, "engagement", "The Exchange", "Couple exchanging rings at a ceremony"),
  item(38274760, "engagement", "Promise", "Hands exchanging gold rings"),
  item(39341211, "engagement", "Ring Ceremony", "Bride and groom's hands exchanging rings"),
  item(38773181, "engagement", "Ring Study", "Wedding rings displayed among flowers", "portrait"),

  item(16762656, "portrait", "Shadow Study", "Portrait of a young man in dramatic lighting", "portrait"),
  item(36378236, "portrait", "Quiet Frame", "Moody portrait of a woman in dark clothing", "portrait"),
  item(37105847, "portrait", "Leather", "Portrait of a man in a leather jacket", "portrait"),
  item(16577924, "portrait", "Into the Light", "Portrait of a man looking toward the light", "portrait"),
  item(36687799, "portrait", "Studio No. 4", "Close-up studio portrait of a man", "portrait"),
  item(10118474, "portrait", "Seated", "Studio portrait of a young woman against a dark background", "portrait"),
  item(38977010, "portrait", "Floral Shirt", "Studio portrait of a young man in a floral shirt", "portrait"),
  item(28446973, "portrait", "The Executive", "Professional portrait of a businessman", "portrait"),

  item(8819155, "family", "Together", "A joyful family during a festive celebration"),
  item(14124346, "family", "Road Trip", "Parents and child smiling in a car"),
  item(13024820, "family", "Shoulders", "A father carrying his son outdoors"),
  item(8819146, "family", "Little Light", "A father holding his daughter during Diwali"),
  item(12931185, "family", "Three", "Parents embracing their baby indoors", "portrait"),
  item(38374094, "family", "Forest Walk", "Mother and daughter smiling on a forest path"),
  item(7958074, "family", "Face Paint", "Mother and child playing with face paint"),

  item(8818591, "events", "Sparklers", "Friends celebrating with sparklers on a balcony"),
  item(19962094, "events", "Procession", "Colourful celebration procession under a flower canopy"),
  item(8819261, "events", "Diwali Light", "Close-up of a person holding sparklers"),
  item(8819260, "events", "Festival Night", "Couple celebrating with sparklers indoors", "portrait"),
  item(8819423, "events", "Gifts", "Guests exchanging gifts at a celebration"),
  item(8818593, "events", "Offering", "Woman holding a traditional cup during a festive occasion"),

  item(8128067, "product", "Skincare Set", "Flat lay of cosmetic products with crystals", "portrait"),
  item(8015461, "product", "White on White", "Minimalist white cosmetic containers"),
  item(8128064, "product", "Ice & Shadow", "Cosmetic jars with ice cubes casting shadows", "portrait"),
  item(8015777, "product", "Tube Study", "Skincare tube with plant and concrete block"),
  item(26601193, "product", "Rack", "Colourful shirts on a rack under studio light", "portrait"),

  item(3231359, "school", "Classroom", "Schoolgirls in uniform in a classroom"),
  item(39229156, "school", "Morning Walk", "Schoolgirls walking together on a tree-lined path", "portrait"),
  item(39122613, "school", "Rain Day", "Two schoolgirls sharing an umbrella", "portrait"),
  item(6217466, "school", "Braids", "Schoolgirls in uniform viewed from behind"),
  item(28389291, "school", "Assembly", "School boys seated at an outdoor assembly", "portrait"),
];

export const featuredPortfolio = [
  portfolio.find((p) => p.pexelsId === 29370687),
  portfolio.find((p) => p.pexelsId === 8819155),
  portfolio.find((p) => p.pexelsId === 16762656),
  portfolio.find((p) => p.pexelsId === 29494642),
  portfolio.find((p) => p.pexelsId === 12931185),
  portfolio.find((p) => p.pexelsId === 30169492),
].filter(Boolean);

export const weddingCollage = [
  { id: "w1", label: "Wedding", src: px(31002342, 1400), alt: "Bride and groom adorned with floral garlands", tile: 1 },
  { id: "w2", label: "Couple Portraits", src: px(35069916, 1000), alt: "Couple in traditional attire posing outdoors", tile: 2 },
  { id: "w3", label: "Engagement", src: px(29494642, 1000), alt: "Engagement ceremony with henna hands and rings", tile: 3 },
  { id: "w4", label: "Candid Moments", src: px(31798270, 1000), alt: "Bride and groom laughing while reviewing photos", tile: 4 },
  { id: "w5", label: "Family Emotions", src: px(32679852, 1000), alt: "Couple performing a ritual with family present", tile: 5 },
  { id: "w6", label: "Traditional Ceremonies", src: px(32327732, 1400), alt: "Bride and groom performing a traditional ritual", tile: 6 },
  { id: "w7", label: "Details", src: px(38274758, 1000), alt: "Close-up of a couple's hands with rings", tile: 7 },
];

export const portraitStrip = [
  { id: "p1", label: "Headshots", src: px(28446973, 900), alt: "Professional headshot of a man in a grey suit" },
  { id: "p2", label: "Individual Portraits", src: px(36378236, 900), alt: "Moody portrait of a woman in dark clothing" },
  { id: "p3", label: "Family Portraits", src: px(12931185, 900), alt: "Parents embracing their baby" },
  { id: "p4", label: "Studio Portraits", src: px(10118474, 900), alt: "Studio portrait of a young woman seated" },
];

export const galleryEditorial = {
  feature: portfolio.find((p) => p.pexelsId === 17657612),
  spreadA: [portfolio.find((p) => p.pexelsId === 32212568), portfolio.find((p) => p.pexelsId === 32679852)],
  feature2: portfolio.find((p) => p.pexelsId === 19962094),
  spreadB: [portfolio.find((p) => p.pexelsId === 8128067), portfolio.find((p) => p.pexelsId === 38374094)],
};
