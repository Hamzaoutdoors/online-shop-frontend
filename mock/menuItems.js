import { BsLaptop, BsBook } from "react-icons/bs";
import { IoShirtOutline, IoShirtSharp } from "react-icons/io5";
import { MdOutlineToys } from "react-icons/md";
import { RiHeartPulseLine, RiFireLine } from "react-icons/ri";
import { AiOutlineHome, AiOutlinePercentage } from "react-icons/ai";
import { BiFootball } from "react-icons/bi";

import { FiMonitor, FiHeadphones } from "react-icons/fi";

import { GiLargeDress } from "react-icons/gi";
import { FaBaby, FaRedhat } from "react-icons/fa";

const menuItems = [
  {
    category: "sport",
    icon: BiFootball,
    subCategories: [
      {
        category: "women",
        icon: GiLargeDress,
        subCategories: [
          {
            category: "dress",
            icon: BiFootball,
            subCategories: [
              {
                category: "women",
                icon: GiLargeDress,
              },
              {
                category: "men",
                icon: IoShirtSharp,
              },
              {
                category: "child",
                icon: FaBaby,
              },
              {
                category: "other",
                icon: FaRedhat,
              },
            ],
          },
          {
            category: "jeans",
            icon: BiFootball,
            subCategories: [
              {
                category: "women",
                icon: GiLargeDress,
              },
              {
                category: "men",
                icon: IoShirtSharp,
              },
              {
                category: "child",
                icon: FaBaby,
              },
              {
                category: "other",
                icon: FaRedhat,
              },
            ],
          },
          {
            category: "dress",
            icon: BiFootball,
            subCategories: [
              {
                category: "women",
                icon: GiLargeDress,
              },
              {
                category: "men",
                icon: IoShirtSharp,
              },
              {
                category: "child",
                icon: FaBaby,
              },
              {
                category: "other",
                icon: FaRedhat,
              },
            ],
          },
        ],
      },
      {
        category: "women",
        icon: GiLargeDress,
        subCategories: [
          {
            category: "shoes",
            icon: BiFootball,
            subCategories: [
              {
                category: "women",
                icon: GiLargeDress,
              },
              {
                category: "men",
                icon: IoShirtSharp,
              },
              {
                category: "child",
                icon: FaBaby,
              },
              {
                category: "other",
                icon: FaRedhat,
              },
            ],
          },
          {
            category: "dress",
            icon: BiFootball,
            subCategories: [
              {
                category: "women",
                icon: GiLargeDress,
              },
              {
                category: "men",
                icon: IoShirtSharp,
              },
              {
                category: "child",
                icon: FaBaby,
              },
              {
                category: "other",
                icon: FaRedhat,
              },
            ],
          },
          {
            category: "dress",
            icon: BiFootball,
            subCategories: [
              {
                category: "women",
                icon: GiLargeDress,
              },
              {
                category: "men",
                icon: IoShirtSharp,
              },
              {
                category: "child",
                icon: FaBaby,
              },
              {
                category: "other",
                icon: FaRedhat,
              },
            ],
          },
        ],
      },
      {
        category: "women",
        icon: GiLargeDress,
        subCategories: [
          {
            category: "pants",
            icon: BiFootball,
            subCategories: [
              {
                category: "women",
                icon: GiLargeDress,
              },
              {
                category: "men",
                icon: IoShirtSharp,
              },
              {
                category: "child",
                icon: FaBaby,
              },
              {
                category: "other",
                icon: FaRedhat,
              },
            ],
          },
          {
            category: "dress",
            icon: BiFootball,
            subCategories: [
              {
                category: "women",
                icon: GiLargeDress,
              },
              {
                category: "men",
                icon: IoShirtSharp,
              },
              {
                category: "child",
                icon: FaBaby,
              },
              {
                category: "other",
                icon: FaRedhat,
              },
            ],
          },
          {
            category: "dress",
            icon: BiFootball,
            subCategories: [
              {
                category: "women",
                icon: GiLargeDress,
              },
              {
                category: "men",
                icon: IoShirtSharp,
              },
              {
                category: "child",
                icon: FaBaby,
              },
              {
                category: "other",
                icon: FaRedhat,
              },
            ],
          },
        ],
      },
      {
        category: "women",
        icon: GiLargeDress,
        subCategories: [
          {
            category: "pants",
            icon: BiFootball,
            subCategories: [
              {
                category: "women",
                icon: GiLargeDress,
              },
              {
                category: "men",
                icon: IoShirtSharp,
              },
              {
                category: "child",
                icon: FaBaby,
              },
              {
                category: "other",
                icon: FaRedhat,
              },
            ],
          },
          {
            category: "dress",
            icon: BiFootball,
            subCategories: [
              {
                category: "women",
                icon: GiLargeDress,
              },
              {
                category: "men",
                icon: IoShirtSharp,
              },
              {
                category: "child",
                icon: FaBaby,
              },
              {
                category: "other",
                icon: FaRedhat,
              },
            ],
          },
          {
            category: "dress",
            icon: BiFootball,
            subCategories: [
              {
                category: "women",
                icon: GiLargeDress,
              },
              {
                category: "men",
                icon: IoShirtSharp,
              },
              {
                category: "child",
                icon: FaBaby,
              },
              {
                category: "other",
                icon: FaRedhat,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    category: "sport",
    icon: BiFootball,
    subCategories: [
      {
        category: "women",
        icon: GiLargeDress,
        subCategories: [
          {
            category: "dress",
            icon: BiFootball,
            subCategories: [
              {
                category: "women",
                icon: GiLargeDress,
                subCategories: ["dress", "skirt", "jeans", "pants", "tShirt"],
              },
              {
                category: "men",
                icon: IoShirtSharp,
                subCategories: [
                  "shirt",
                  "pants",
                  "tie",
                  "tShirt",
                  "shoes",
                  "jeans",
                ],
              },
              {
                category: "child",
                icon: FaBaby,
                subCategories: [
                  "overalls",
                  "mittens",
                  "babyApron",
                  "shoes",
                  "tShirt",
                ],
              },
              {
                category: "other",
                icon: FaRedhat,
                subCategories: ["watch", "wallet", "hat", "belt"],
              },
            ],
          },
          {
            category: "dress",
            icon: BiFootball,
            subCategories: [
              {
                category: "women",
                icon: GiLargeDress,
                subCategories: ["dress", "skirt", "jeans", "pants", "tShirt"],
              },
              {
                category: "men",
                icon: IoShirtSharp,
                subCategories: [
                  "shirt",
                  "pants",
                  "tie",
                  "tShirt",
                  "shoes",
                  "jeans",
                ],
              },
              {
                category: "child",
                icon: FaBaby,
                subCategories: [
                  "overalls",
                  "mittens",
                  "babyApron",
                  "shoes",
                  "tShirt",
                ],
              },
              {
                category: "other",
                icon: FaRedhat,
                subCategories: ["watch", "wallet", "hat", "belt"],
              },
            ],
          },
          {
            category: "dress",
            icon: BiFootball,
            subCategories: [
              {
                category: "women",
                icon: GiLargeDress,
                subCategories: ["dress", "skirt", "jeans", "pants", "tShirt"],
              },
              {
                category: "men",
                icon: IoShirtSharp,
                subCategories: [
                  "shirt",
                  "pants",
                  "tie",
                  "tShirt",
                  "shoes",
                  "jeans",
                ],
              },
              {
                category: "child",
                icon: FaBaby,
                subCategories: [
                  "overalls",
                  "mittens",
                  "babyApron",
                  "shoes",
                  "tShirt",
                ],
              },
              {
                category: "other",
                icon: FaRedhat,
                subCategories: ["watch", "wallet", "hat", "belt"],
              },
            ],
          },
        ],
      },
      {
        category: "women",
        icon: GiLargeDress,
        subCategories: [
          {
            category: "dress",
            icon: BiFootball,
            subCategories: [
              {
                category: "women",
                icon: GiLargeDress,
                subCategories: ["dress", "skirt", "jeans", "pants", "tShirt"],
              },
              {
                category: "men",
                icon: IoShirtSharp,
                subCategories: [
                  "shirt",
                  "pants",
                  "tie",
                  "tShirt",
                  "shoes",
                  "jeans",
                ],
              },
              {
                category: "child",
                icon: FaBaby,
                subCategories: [
                  "overalls",
                  "mittens",
                  "babyApron",
                  "shoes",
                  "tShirt",
                ],
              },
              {
                category: "other",
                icon: FaRedhat,
                subCategories: ["watch", "wallet", "hat", "belt"],
              },
            ],
          },
          {
            category: "dress",
            icon: BiFootball,
            subCategories: [
              {
                category: "women",
                icon: GiLargeDress,
                subCategories: ["dress", "skirt", "jeans", "pants", "tShirt"],
              },
              {
                category: "men",
                icon: IoShirtSharp,
                subCategories: [
                  "shirt",
                  "pants",
                  "tie",
                  "tShirt",
                  "shoes",
                  "jeans",
                ],
              },
              {
                category: "child",
                icon: FaBaby,
                subCategories: [
                  "overalls",
                  "mittens",
                  "babyApron",
                  "shoes",
                  "tShirt",
                ],
              },
              {
                category: "other",
                icon: FaRedhat,
                subCategories: ["watch", "wallet", "hat", "belt"],
              },
            ],
          },
          {
            category: "dress",
            icon: BiFootball,
            subCategories: [
              {
                category: "women",
                icon: GiLargeDress,
                subCategories: ["dress", "skirt", "jeans", "pants", "tShirt"],
              },
              {
                category: "men",
                icon: IoShirtSharp,
                subCategories: [
                  "shirt",
                  "pants",
                  "tie",
                  "tShirt",
                  "shoes",
                  "jeans",
                ],
              },
              {
                category: "child",
                icon: FaBaby,
                subCategories: [
                  "overalls",
                  "mittens",
                  "babyApron",
                  "shoes",
                  "tShirt",
                ],
              },
              {
                category: "other",
                icon: FaRedhat,
                subCategories: ["watch", "wallet", "hat", "belt"],
              },
            ],
          },
        ],
      },
      {
        category: "women",
        icon: GiLargeDress,
        subCategories: [
          {
            category: "dress",
            icon: BiFootball,
            subCategories: [
              {
                category: "women",
                icon: GiLargeDress,
                subCategories: ["dress", "skirt", "jeans", "pants", "tShirt"],
              },
              {
                category: "men",
                icon: IoShirtSharp,
                subCategories: [
                  "shirt",
                  "pants",
                  "tie",
                  "tShirt",
                  "shoes",
                  "jeans",
                ],
              },
              {
                category: "child",
                icon: FaBaby,
                subCategories: [
                  "overalls",
                  "mittens",
                  "babyApron",
                  "shoes",
                  "tShirt",
                ],
              },
              {
                category: "other",
                icon: FaRedhat,
                subCategories: ["watch", "wallet", "hat", "belt"],
              },
            ],
          },
          {
            category: "dress",
            icon: BiFootball,
            subCategories: [
              {
                category: "women",
                icon: GiLargeDress,
                subCategories: ["dress", "skirt", "jeans", "pants", "tShirt"],
              },
              {
                category: "men",
                icon: IoShirtSharp,
                subCategories: [
                  "shirt",
                  "pants",
                  "tie",
                  "tShirt",
                  "shoes",
                  "jeans",
                ],
              },
              {
                category: "child",
                icon: FaBaby,
                subCategories: [
                  "overalls",
                  "mittens",
                  "babyApron",
                  "shoes",
                  "tShirt",
                ],
              },
              {
                category: "other",
                icon: FaRedhat,
                subCategories: ["watch", "wallet", "hat", "belt"],
              },
            ],
          },
          {
            category: "dress",
            icon: BiFootball,
            subCategories: [
              {
                category: "women",
                icon: GiLargeDress,
                subCategories: ["dress", "skirt", "jeans", "pants", "tShirt"],
              },
              {
                category: "men",
                icon: IoShirtSharp,
                subCategories: [
                  "shirt",
                  "pants",
                  "tie",
                  "tShirt",
                  "shoes",
                  "jeans",
                ],
              },
              {
                category: "child",
                icon: FaBaby,
                subCategories: [
                  "overalls",
                  "mittens",
                  "babyApron",
                  "shoes",
                  "tShirt",
                ],
              },
              {
                category: "other",
                icon: FaRedhat,
                subCategories: ["watch", "wallet", "hat", "belt"],
              },
            ],
          },
        ],
      },
    ],
  },
  { category: "toys", icon: MdOutlineToys },
  { category: "cosmetic", icon: RiHeartPulseLine },
  { category: "home", icon: AiOutlineHome },
  { category: "sport", icon: BiFootball },
  { category: "stationery", icon: BsBook },
];

export default menuItems;

export const extraMenu = [
  { category: "about", icon: AiOutlinePercentage, href: "/about" },
  { category: "brands", icon: RiFireLine, href: "/brands" },
  { category: "contact", icon: RiFireLine, href: "/contact" },
  { category: "news", icon: RiFireLine, href: "/news" },
];
