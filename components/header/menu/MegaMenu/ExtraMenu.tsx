import React from "react";
import Link from "next/link";
import { extraMenu } from "../../../../mock/menuItems";
import { useLanguage } from "../../../../hooks/useLanguage";

const ExtraMenu = () => {
  const { t } = useLanguage();
  return (
    <div className="flex items-center border-l-2 text-white grow md:justify-center ml-2">
      {extraMenu.map((menuItem) => {
        return (
          <div
            className="flex items-center text-base/90 font-light mx-4"
            key={menuItem.title}
          >
            <Link href={menuItem.href}>
              <span>{t[`${menuItem.title}`]}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ExtraMenu;
