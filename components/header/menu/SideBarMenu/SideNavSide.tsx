import React, { useRef } from "react";
import { Transition } from "react-transition-group";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { sideNavBarActions } from "../../../../store/sideNavBar-slice";
import { ISideNavBarRootState } from "../../../../lib/types/sidebar";
import { useLanguage } from "../../../../hooks/useLanguage";
import Link from "next/link";
import { IActiveMenuItemRootState } from "../../../../lib/types/activeMenuItem";
import { GoLinkExternal } from "react-icons/go";
import { activeMenuItemActions } from "@/store/activeMenuItem-slice";
import { ICategory } from "@/lib/types/subCategories";

const SideNavSide = () => {
  const dispatch = useDispatch();

  function openNextSideBar(
    nextSidebarContent: ICategory[] = [],
    nextActiveItemName: string,
    nextActiveItemIndex: number
  ) {
    dispatch(sideNavBarActions.setNextSidebarEntries(nextSidebarContent));
    // dispatch(sideNavBarActions.closeNavbar());
    dispatch(sideNavBarActions.openNextSidebar());
    dispatch(
      activeMenuItemActions.setNextActiveMenuItemText(nextActiveItemName)
    );
    dispatch(
      activeMenuItemActions.setNextActiveMenuItemIndex(nextActiveItemIndex)
    );
  }

  const ArrowDirection = HiChevronRight;

  const subCatList = useSelector(
    (state: ISideNavBarRootState) => state.sideNavBar.subCatList
  );

  const isSidebarOpen = useSelector(
    (state: ISideNavBarRootState) => state.sideNavBar.isSidebarOpen
  );

  const activeMenuItemText = useSelector(
    (state: IActiveMenuItemRootState) => state.activeMenuItem.activeMenuItemText
  );

  const isNextSideBarOpen = useSelector(
    (state: ISideNavBarRootState) => state.sideNavBar.isNextSideBarOpen
  );

  const closeSidebar = () => {
    dispatch(sideNavBarActions.closeSidebar());
  };

  const closeNavbar = () => {
    dispatch(sideNavBarActions.closeNavbar());
  };

  const nodeRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  // TODO: Change the calculation of the left position after adding nested drawer
  // const leftPosition = 50;

  return (
    <>
      {subCatList.length ? (
        <Transition
          nodeRef={nodeRef}
          in={isSidebarOpen}
          timeout={300}
          mountOnEnter
          unmountOnExit
        >
          {(state) => {
            return (
              <div
                ref={nodeRef}
                className={`max-w-[380px] w-[90%] h-screen pb-4 fixed top-0 shadow-md z-[1010] bg-palette-card overflow-auto 
                ${isNextSideBarOpen ? "left-[50px]" : "left-[380px]"}
                ${
                  state === "entering"
                    ? "animate-sidenavLTREntering"
                    : state === "entered"
                    ? "translate-x-0"
                    : "animate-sidenavLTRExit"
                }
              `}
              >
                <div
                  className="flex items-center justify-between pt-4 pb-3 px-6"
                  /* onClick={closeSidebar} */
                >
                  <div className="flex items-center">
                    {/* <ArrowBackDirection style={{ fontSize: "1.5rem" }} /> */}
                    <h3 className="ml-4 text-black font-bold text-base underline">
                      {t[activeMenuItemText]}
                    </h3>
                  </div>
                  <Link
                    href={`/${activeMenuItemText}`}
                    className=""
                    onClick={closeNavbar}
                  >
                    <GoLinkExternal
                      style={{ fontSize: "1.2rem", color: "black" }}
                    />
                  </Link>
                </div>

                <hr className="mb-6" />

                <ul className="rounded-lg w-full pl-4">
                  {subCatList.map((item, index) => {
                    return (
                      <li
                        className={`py-3 transition-color duration-300 hover:bg-gray-200 font-bold border-b-[0.5px] border-gray-700
                        ${index === 0 && "border-t-[0.5px]"}
                        `}
                        key={item.category}
                      >
                        <div
                          className="flex items-center px-5 cursor-pointer text-sm"
                          onClick={() =>
                            openNextSideBar(
                              item.subCategories ||
                                [] /* if no data in subcategories - it's a single product page */,
                              item.category,
                              index
                            )
                          }
                          onMouseOver={() => console.log("hover")}
                        >
                          <div className="mx-4 grow">
                            <span
                              className={`text-black font-bold text-sm ${
                                !item.subCategories ? "text-gray-400" : ""
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
                                style={{
                                  fontSize: "1rem",
                                  marginRight: "0.5rem",
                                }}
                              />
                              <ArrowDirection style={{ fontSize: "1rem" }} />
                            </div>
                          ) : null}
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className="flex justify-center">
                  <button className="bg-transparent hover:bg-palette-tertiary text-palette-tertiary font-semibold hover:text-white py-2 px-4 border border-palette-tertiary hover:border-transparent rounded text-sm my-4">
                    Voyez tous
                  </button>
                </div>
              </div>
            );
          }}
        </Transition>
      ) : null}
    </>
  );
};

SideNavSide.displayName = "SideNavSide";
export default SideNavSide;
