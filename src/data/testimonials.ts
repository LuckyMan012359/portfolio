import oscar from "@/../public/testimonials/oscar.webp";
import iggy from "@/../public/testimonials/iggy.webp";
import tionee from "@/../public/testimonials/tionee.jpg";
import type { StaticImageData } from "next/image";

export type Testimonial = {
  name: string;
  review: string;
  imageUrl?: StaticImageData;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Oscar Halling",
    review:
      "Amazing work as always! Using Rori for front-end tasks outside of my capabilities on every project now.",
    imageUrl: oscar,
  },

  {
    name: "Valentin Pitard",
    review: "verry nice i recommande !",
  },
  {
    name: "Iggy Gullstrand",
    review:
      "Fanstastic first work with Rori. He and his collegue helped evaluate our new platform and went above and beyond to accomodate from our needs by not only giving us bug reports, but also invaluable feedback on how we can make the site better.  ",
    imageUrl: iggy,
  },
  {
    name: "Tionee Smith",
    review: "Rori is one of the best to work with!",
    imageUrl: tionee,
  },
  {
    name: "Larry Lewis",
    review:
      "Rori is very diligent and professional. Easy to work with and delivered above and beyond what I asked for.",
  },
  {
    name: "Oscar Halling",
    review:
      "Had to build a custom slider for a project that was outside the standard Wordpress/Elementor functionalities, so Rori coded it from scratch for me. As always excellent work",
    imageUrl: oscar,
  },
  {
    name: "Oscar Halling",
    review:
      "Have hired Rori so many times now that it's time to start calling him a colleague. For the last gig he helped out with a project right before launch date, and was a key part in helping us go live on time",
    imageUrl: oscar,
  },
  {
    name: "Oscar Halling",
    review:
      "I've worked with Rori on several parts of a project I have ongoing now, and he's been nothing but excellent each time. Have nothing but good words to say!",
    imageUrl: oscar,
  },
  {
    name: "Oscar Halling",
    review:
      "This is my third time working with Rori, and just like always he takes the time to fully understand the requirements, and make sure all work is handled correctly. Very refreshing to deal with someone that utilises critical thinking to make sure the end result is the best it can be!",
    imageUrl: oscar,
  },
  {
    name: "Oscar Halling",
    review:
      "Rori went above and beyond to make sure that the end result exactly matched the assets created by the design team. He has an excellent knowledge of Javascript and web development, and is such a good communicator. He also is super helpful with describing pros and cons of developing our pages in different ways. Cant recommend him enough",
    imageUrl: oscar,
  },
  {
    name: "Oscar Halling",
    review:
      "Absolutely amazing seller! Despite having a relatively new profile on Fiverr, this was the most attentive, careful and talented developer I've worked with on here. I gave him a rather complex animation to code, and he did it flawlessly whilst understanding all requirements from the client - and with excellent communication any doubts were always cleared up. Finally found my web developer, can't recommend this guy enough",
    imageUrl: oscar,
  },
  {
    name: "Tionee Smith",
    review:
      "Friendly and professional. Perfect communication and code. Will definitely hire again.",
    imageUrl: tionee,
  },
];

export default TESTIMONIALS;
