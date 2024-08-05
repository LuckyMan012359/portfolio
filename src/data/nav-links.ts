const NAV_LINKS = [
  {
    name: "Home",
    path: "#home",
  },
  {
    name: "About",
    path: "#about",
  },
  {
    name: "Portfolio",
    path: "#portfolio",
  },
  {
    name: "Skills",
    path: "#skills",
  },
  {
    name: "Services",
    path: "#services",
  },
  {
    name: "Testimonials",
    path: "#testimonials",
  },
] as const;

export type SectionName = (typeof NAV_LINKS)[number]["name"];

export default NAV_LINKS;
