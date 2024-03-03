import React, { useRef } from "react";
import { Transition } from "react-transition-group";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";
import { ISideNavBarRootState } from "@/lib/types/sidebar";
import { IActiveMenuItemRootState } from "@/lib/types/activeMenuItem";
import { sideNavBarActions } from "@/store/sideNavBar-slice";
import { useLanguage } from "@/hooks/useLanguage";
import { ICategory } from "@/lib/types/categories";
import { activeMenuItemActions } from "@/store/activeMenuItem-slice";

const SubCategoriesItems = () => {
  const dispatch = useDispatch();
  const ArrowDirection = HiChevronRight;

  const onNextHandler = (
    nextSidebarContent: ICategory[] = [],
    nextActiveItemName: string,
    nextActiveItemIndex: number
  ) => {
    // dispatch(sideNavBarActions.setNextSidebarEntries(nextSidebarContent));
    // dispatch(sideNavBarActions.closeNavbar());
    dispatch(sideNavBarActions.openNextSidebar());
    dispatch(
      activeMenuItemActions.setNextActiveMenuItemText(nextActiveItemName)
    );
    dispatch(
      activeMenuItemActions.setNextActiveMenuItemIndex(nextActiveItemIndex)
    );
  };

  const nextSubCatList = useSelector(
    (state: ISideNavBarRootState) => state.sideNavBar.nextSubCatList
  );

  const isNextSideBarOpen = useSelector(
    (state: ISideNavBarRootState) => state.sideNavBar.isNextSideBarOpen
  );

  const nextActiveMenuItemText = useSelector(
    (state: IActiveMenuItemRootState) =>
      state.activeMenuItem.nextActiveMenuItemText
  );

  const closeNextSidebar = () => {
    dispatch(sideNavBarActions.closeNextSidebar());
  };

  const closeNavbar = () => {
    dispatch(sideNavBarActions.closeNavbar());
  };

  const nodeRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  // TODO: Change the calculation of the left position after adding nested drawer
  /*   const leftPosition = 760 - 380 + 50; */
  return (
    <>
      {nextSubCatList.length ? (
        <Transition
          nodeRef={nodeRef}
          in={isNextSideBarOpen!}
          timeout={300}
          mountOnEnter
          unmountOnExit
        >
          {(state) => {
            return (
              <div
                ref={nodeRef}
                className={`max-w-[380px] w-[90%] h-screen pb-4 fixed top-0 shadow-md z-[1012] bg-palette-card overflow-auto
                ${isNextSideBarOpen ? "left-[430px]" : "left-[760px]"} 
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
                  /* onClick={closeNextSidebar} */
                >
                  <div className="flex items-center">
                    {/* <ArrowBackDirection style={{ fontSize: "1.5rem" }} /> */}
                    <h3 className="ml-4 text-black font-bold text-base underline">
                      {t[nextActiveMenuItemText]}
                    </h3>
                  </div>
                  <Link
                    href={`/${nextActiveMenuItemText}`}
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
                  {nextSubCatList.map((item, index) => {
                    return (
                      <li
                        className={`py-3 transition-color duration-300 hover:bg-gray-200 font-bold border-b-[0.5px] border-gray-700
                        ${index === 0 && "border-t-[0.5px]"}
                        `}
                        key={index}
                      >
                        <div
                          className="flex items-center px-5 cursor-pointer text-sm"
                          onClick={() => console.log("clicked")}
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

SubCategoriesItems.displayName = "SubCategoriesItems";
export default SubCategoriesItems;
