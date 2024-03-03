import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { megaMenuActions } from "../../../store/megaMenu-slice";
import { useLanguage } from "../../../hooks/useLanguage";
import menuItems from "../../../mock/menuItems";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import { ICategory } from "../../../lib/types/subCategories";
import { useRouter } from "next/router";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import { IActiveMenuItemRootState } from "../../../lib/types/activeMenuItem";
import { GoLinkExternal } from "react-icons/go";

interface Props {
  onClick?: (
    submenu: ICategory[] | undefined,
    activeItemName: string,
    index: number
  ) => void;
  onMouseOver?: (
    submenu: ICategory[] | undefined,
    index: number,
    activeItemName: string
  ) => void;
}

const MenuItems: React.FC<Props> = (props) => {
  const { t } = useLanguage();
  const route = useRouter();
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();
  const ArrowDirection = HiChevronRight;

  function onMenuItemClickHandler(
    subCategories: ICategory[] | undefined,
    category: string,
    index: number
  ) {
    props.onClick && props.onClick(subCategories, category, index);
    width >= 768 && dispatch(megaMenuActions.closeMegaMenu());
  }

  const activeMenuItemIndex = useSelector(
    (state: IActiveMenuItemRootState) =>
      state.activeMenuItem.activeMenuItemIndex
  );

  const firstData = menuItems.slice(0, 18);

  return (
    <div className="flex items-center flex-col">
      <ul className="rounded-lg w-full pl-4">
        {firstData.map((item, index) => {
          return (
            <li
              className="py-3 md:py-2 transition-color duration-300 hover:text-palette-primary font-bold border-b-[0.5px] border-gray-700"
              key={item.category}
            >
              <div
                className={`flex items-center mt-3 px-5 cursor-pointer text-sm ${
                  index === activeMenuItemIndex ? "md:text-palette-primary" : ""
                }`}
                onClick={() =>
                  onMenuItemClickHandler(
                    item.subCategories ||
                      [] /* if no data in subcategories - it's a single product page */,
                    item.category,
                    index
                  )
                }
                onMouseOver={() =>
                  props.onMouseOver?.(
                    item.subCategories || [],
                    index,
                    item.category
                  )
                }
              >
                <item.icon className="w-5 h-5" />
                <div className="mx-4 grow">
                  <span
                    className={`text-black font-bold text-sm ${
                      !item.subCategories ? "text-gray-400" : ""
                    } ${
                      index === activeMenuItemIndex
                        ? "md:text-palette-primary"
                        : ""
                    }`}
                  >
                    {t[item.category]}
                  </span>
                  {item.subCategories && (
                    <span className="text-slate-700 text-xs	font-light ml-2">
                      {`(${item.subCategories?.length})`}
                    </span>
                  )}
                </div>
                {item.subCategories ? (
                  <div className="flex items-center">
                    <GoLinkExternal
                      style={{ fontSize: "1rem", marginRight: "0.5rem" }}
                    />
                    <ArrowDirection style={{ fontSize: "1rem" }} />
                  </div>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
      {/* <button className="bg-transparent hover:bg-palette-tertiary text-palette-tertiary font-semibold hover:text-white py-2 px-4 border border-palette-tertiary hover:border-transparent rounded text-sm my-4">
        Voyez tous
      </button> */}
    </div>
  );
};

export default MenuItems;
