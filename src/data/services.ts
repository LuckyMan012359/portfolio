import { createElement, type ReactElement } from "react";
import {
  HiOutlineGlobeAlt,
  HiOutlineComputerDesktop,
  HiOutlineDevicePhoneMobile,
  HiOutlinePaintBrush,
  HiOutlineShoppingCart,
  HiOutlineCodeBracket,
} from "react-icons/hi2";

type Service = {
  title: string;
  description: string;
  icon?: ReactElement;
};

const ICON_ATTRIBUTES = {
  className: "h-8 w-8",
};

const SERVICES: Service[] = [
  {
    title: "Web Development",
    description: "Crafting Bespoke Websites for User Engagement",
    icon: createElement(HiOutlineComputerDesktop, ICON_ATTRIBUTES),
  },
  {
    title: "Mobile App Development",
    description: "Creating Seamless Native Mobile Experiences",
    icon: createElement(HiOutlineDevicePhoneMobile, ICON_ATTRIBUTES),
  },
  {
    title: "Full-Stack Development",
    description: "End-to-End Solutions for Streamlined Project Management",
    icon: createElement(HiOutlineGlobeAlt, ICON_ATTRIBUTES),
  },
  {
    title: "User Interface & User Experience Design",
    description: "Driving Intuitive Interactions with User-Centric Design",
    icon: createElement(HiOutlinePaintBrush, ICON_ATTRIBUTES),
  },
  {
    title: "E-commerce Solutions",
    description: "Building Secure and Scalable E-commerce Platforms",
    icon: createElement(HiOutlineShoppingCart, ICON_ATTRIBUTES),
  },
  {
    title: "API Development & Integration",
    description: "Seamlessly Connecting Systems with Custom APIs",
    icon: createElement(HiOutlineCodeBracket, ICON_ATTRIBUTES),
  },
];

export default SERVICES;
