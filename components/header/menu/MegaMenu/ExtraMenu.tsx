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
          <div className="flex items-center mx-4" key={menuItem.category}>
            <Link href={menuItem.href}>
              <span
                className="md:text-base font-bold"
                style={{ fontWeight: "bolder" }}
              >
                {t[`${menuItem.category}`]}
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ExtraMenu;
