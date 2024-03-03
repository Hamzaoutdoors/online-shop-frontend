import React from "react";
import Link from "next/link";
import { useLanguage } from "../../../../hooks/useLanguage";
import { extraMenu } from "../../../../mock/menuItems";
import { useDispatch } from "react-redux";
import { sideNavBarActions } from "../../../../store/sideNavBar-slice";
import { activeMenuItemActions } from "../../../../store/activeMenuItem-slice";
import { ICategory } from "../../../../lib/types/subCategories";
import MenuItems from "../../../UI/MenuItems/MenuItems";

const SideNavContent = () => {
  const { t } = useLanguage();
  const dispatch = useDispatch();
  const openNav = (
    sidebarSideContent: ICategory[] = [],
    activeItemName: string,
    activeItemIndex: number
  ) => {
    dispatch(sideNavBarActions.setSidebarEntries(sidebarSideContent));
    dispatch(sideNavBarActions.openSidebar());
    dispatch(activeMenuItemActions.setActiveMenuItemText(activeItemName));
    dispatch(activeMenuItemActions.setActiveMenuItemIndex(activeItemIndex));
  };
  return (
    <div className="absolute w-full">
      <div className="flex flex-col mt-3 pt-3 px-5 cursor-pointer md:hidden">
        {extraMenu.map((menuItem) => {
          return (
            <div
              className="flex items-center py-3 text-palette-mute"
              key={menuItem.category}
            >
              <menuItem.icon />
              <Link href={menuItem.href}>
                <span className="mx-4">{t[`${menuItem.category}`]}</span>
              </Link>
            </div>
          );
        })}
        <hr className="mt-6 mb-4 border-gray-200" />
      </div>
      <h2 className="font-bold text-xl text-black p-4 text-center md:hidden">
        {t.CategoryOfGoods}
      </h2>
      {/* // Todo: we need to work starting with this ligne */}
      <MenuItems onClick={openNav} />
    </div>
  );
};

export default SideNavContent;
