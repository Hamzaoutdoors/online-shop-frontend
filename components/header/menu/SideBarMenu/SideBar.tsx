import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sideNavBarActions } from "../../../../store/sideNavBar-slice";
import { Transition } from "react-transition-group";
import { GoGrabber } from "react-icons/go";
import { ISideNavBarRootState } from "../../../../lib/types/sidebar";
import SideNav from "./SideNav";
import { Button } from "@material-tailwind/react";
import { useLanguage } from "@/hooks/useLanguage";

const SideBar = () => {
  const nodeRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const dispatch = useDispatch();
  const isNavbarOpen = useSelector(
    (state: ISideNavBarRootState) => state.sideNavBar.isNavbarOpen
  );
  const closeNav = () => {
    dispatch(sideNavBarActions.closeNavbar());
  };

  const openNavBar = () => {
    dispatch(sideNavBarActions.openNavbar());
  };

  return (
    <div>
      <div onClick={openNavBar} className="md:hidden">
        <GoGrabber style={{ fontSize: "2rem" }} />
      </div>
      <Button
        onClick={openNavBar}
        className="hidden bg-transparent md:flex flex-row items-center border rounded-md border-slate-600 justify-between px-4 py-2 ml-2"
      >
        <GoGrabber style={{ fontSize: "1.5rem" }} className="text-white" />
        <h3 className="font-bold text-base leading-3 ml-2 text-white">
          {t.CategoryOfGoods}
        </h3>
      </Button>
      <Transition
        nodeRef={nodeRef}
        in={isNavbarOpen!}
        timeout={300}
        mountOnEnter
        unmountOnExit
      >
        {(state) => {
          return (
            <>
              <SideNav ref={nodeRef} state={state} onClose={closeNav} />
              <div
                className={`fixed inset-0 z-[999] bg-black/60
                  ${
                    state === "entering"
                      ? "animate-fadeEntering"
                      : state === "entered"
                      ? "opacity-100"
                      : "animate-fadeExit"
                  }
                  `}
                onClick={closeNav}
              ></div>
            </>
          );
        }}
      </Transition>
    </div>
  );
};

export default SideBar;
