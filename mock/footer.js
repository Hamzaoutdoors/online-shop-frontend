import { FaLinkedin, FaTwitterSquare, FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export const footerContent = [
  {
    title: "eShop",
    subtitles: [
      {
        text: "about",
        href: "/about",
      },
      {
        text: "contact",
        href: "/contact",
      },
      {
        text: "saleInEshop",
        href: "/blank",
      },
      {
        text: "ourBrands",
        href: "/blank",
      },
    ],
  },
  {
    title: "customerServices",
    subtitles: [
      {
        text: "commonQuestions",
        href: "/blank",
      },
      {
        text: "returnProcedures",
        href: "/blank",
      },
      {
        text: "privacy",
        href: "/blank",
      },
    ],
  },
];

export const socialMedia = [
  {
    name: "instagram",
    icon: AiFillInstagram,
    href: "/",
  },
  {
    name: "linkedin",
    icon: FaLinkedin,
    href: "/",
  },
  {
    name: "twitter",
    icon: FaTwitterSquare,
    href: "/",
  },
  {
    name: "telegram",
    icon: FaTelegramPlane,
    href: "/",
  },
];
