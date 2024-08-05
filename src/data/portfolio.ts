import type { StaticImageData } from "next/image";

import forkify from "@/../public/portfolio/forkify.png";
import zomato from "@/../public/portfolio/zomato.png";
import motorMarvel from "@/../public/portfolio/motorMavel.png";
import antheia from "@/../public/portfolio/antheia.png";
import retrosGallery from "@/../public/portfolio/retros-gallery.png";
import triform from "@/../public/portfolio/triform.png";
import truebrydge from "@/../public/portfolio/truebrydge.png";
import allonia from "@/../public/portfolio/allonia.png";
import voytravel from "@/../public/portfolio/voytravel.png";
import bankist from "@/../public/portfolio/bankist.png";
import nikeStore from "@/../public/portfolio/nikeStore.png";
import natours from "@/../public/portfolio/natours.png";
import natoursApp from "@/../public/portfolio/natours-app.png";

const PROJECT_TYPES = {
  LANDING_PAGE: "Landing Page",
  WEBSITE: "Website",
  WEB_APP: "Web Application",
  SPA: "Single Page Application (SPA)",
} as const;

export type ProjectType = (typeof PROJECT_TYPES)[keyof typeof PROJECT_TYPES];

export type PortfolioItem = {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: StaticImageData;
  url: string;
};

type Portfolios = {
  [key in ProjectType]: PortfolioItem[];
};

let PORTFOLIO: Portfolios = {
  // Landing pages
  [PROJECT_TYPES.LANDING_PAGE]: [
    {
      title: "Nike store",
      description: "Shop sneakers effortlessly!",
      technologies: [
        "React",
        "NextJS",
        "NodeJS",
        "Tailwind CSS",
        "Vercel",
        "HTML",
        "Typescript",
      ],
      imageUrl: nikeStore,
      url: "https://nikestore-ecommerse-typescript.netlify.app/",
    },
    {
      title: "Bankist",
      description: "Where banking meets minimalism",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "jQuery",
        "Isotope",
        "Github Pages",
      ],
      imageUrl: bankist,
      url: "https://usama-365.github.io/bankist-landing-page/",
    },
    {
      title: "Zomato",
      description: "Effortlessly find and order from top restaurants!",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "jQuery",
        "Isotope",
        "Github Pages",
      ],
      imageUrl: zomato,
      url: "https://zomato-clone-suraj-devere.vercel.app/",
    },
    {
      title: "Natours",
      description: "Exciting tours for adventurous people!",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "jQuery",
        "Isotope",
        "Github Pages",
      ],
      imageUrl: natours,
      url: "https://usama-365.github.io/natours/",
    },
  ],

  // Website
  [PROJECT_TYPES.WEBSITE]: [
    {
      title: "Antheia",
      description: "A synthetic biology company",
      technologies: [
        "PHP",
        "Wordpress",
        "Greenhouse",
        "jQuery",
        "MySQL",
        "GSAP",
        "Swiper",
        "LottieFiles",
      ],
      imageUrl: antheia,
      url: "https://antheia.bio/",
    },
    {
      title: "Allonia",
      description: "Transformative in nature",
      technologies: [
        "GSAP",
        "PHP",
        "jQuery",
        "Elementor",
        "MySQL",
        "Swiper",
        "GSAP",
        "Hubspot",
      ],
      imageUrl: allonia,
      url: "https://allonnia.com/",
    },
    {
      title: "Voy Travel",
      description: "Unlock the value of travel",
      technologies: [
        "GSAP",
        "PHP",
        "jQuery",
        "Elementor",
        "MySQL",
        "Swiper",
        "GSAP",
      ],
      imageUrl: voytravel,
      url: "https://www.voytravel.com/",
    },
    {
      title: "TrueBrydge",
      description: "Build relationships, not campaigns",
      technologies: [
        "GSAP",
        "PHP",
        "jQuery",
        "Wordpress",
        "MySQL",
        "Swiper",
        "GSAP",
      ],
      imageUrl: truebrydge,
      url: "https://truebrydge.com/",
    },
    {
      title: "Retros Gallery",
      description: "A Vintage design dealer from Bucharest",
      technologies: [
        "GSAP",
        "PHP",
        "jQuery",
        "Wordpress",
        "MySQL",
        "Swiper",
        "GSAP",
      ],
      imageUrl: retrosGallery,
      url: "https://www.retros-gallery.com/",
    },
  ],

  // Web app
  [PROJECT_TYPES.WEB_APP]: [
    {
      title: "Triform",
      description: "Unleashing AI Potential",
      technologies: [
        "Laravel",
        "PHP",
        "Livewire",
        "Alpine",
        "Ace",
        "Lodash",
        "Axios",
      ],
      imageUrl: triform,
      url: "https://triform.movs.ai/",
    },
    {
      title: "Natours",
      description: "Book your tours now!",
      technologies: [
        "NodeJS",
        "ExpressJS",
        "Stripe",
        "Parcel",
        "Vercel",
        "HTML",
        "CSS",
      ],
      imageUrl: natoursApp,
      url: "https://usama-365-natours.vercel.app/",
    },
  ],

  // SPA
  [PROJECT_TYPES.SPA]: [
    {
      title: "Forkify",
      description: "Search over 1,000,000 recipes",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "Parcel",
        "Fracty",
        "CoreJS",
        "Regenerator Runtime",
      ],
      imageUrl: forkify,
      url: "https://usama-365-forkify.vercel.app",
    },

    {
      title: "Motor Marvel",
      description: "Rent cars effortlessly with Motor Marvel!",
      technologies: [
        "React",
        "Redux",
        "Typescript",
        "Stripe",
        "SASS",
        "Firebase",
      ],
      imageUrl: motorMarvel,
      url: "https://motor-marvel-car-showcase-qjys.vercel.app/",
    },
  ],
} as const;

export default PORTFOLIO;
