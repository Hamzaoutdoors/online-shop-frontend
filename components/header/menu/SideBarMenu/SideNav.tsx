import React, { forwardRef } from "react";
import { useRouter } from "next/router";
import { IoClose } from "react-icons/io5";
import { GoLinkExternal } from "react-icons/go";
import SideNavContent from "./SideNavContent";
import Logo from "../../Logo";
import { useLanguage } from "@/hooks/useLanguage";
import { useSelector } from "react-redux";
import { ISideNavBarRootState } from "@/lib/types/sidebar";
import VerticalBar from "@/components/UI/MenuItems/VerticalBar";
import { sideNavBarActions } from "@/store/sideNavBar-slice";
import { useDispatch } from "react-redux";

interface Props {
  state?: string;
  onClose: () => void;
  children?: React.ReactNode;
  ref: React.HTMLProps<HTMLDivElement>;
}

const SideNav = forwardRef<HTMLDivElement, Props>(({ state, onClose }, ref) => {
  const { t } = useLanguage();
  const dispatch = useDispatch();

  const isNextSideBarOpen = useSelector(
    (state: ISideNavBarRootState) => state.sideNavBar.isNextSideBarOpen
  );

  // TODO: Change the behavior of the left close Vetical Bar after adding nested drawer
  const onClick = () => {
    dispatch(sideNavBarActions.closeNextSidebar());
  };

  if (isNextSideBarOpen) {
    return <VerticalBar text={t.CategoryOfGoods} onClick={onClick}/>;
  }

  return (
    <div
      ref={ref}
      className="max-w-[380px] w-[90%] h-screen fixed top-0 shadow-md z-[1000] bg-palette-card origin-left overflow-y-auto left-0 translate-x-[-100%] animate-sidenavLTREntering"
    >
      <div className="bg-palette-tertiary flex items-center justify-between px-4 py-3">
        <div
          className="ml-[5%] text-4xl cursor-pointer border rounded-full border-white p-1"
          onClick={onClose}
        >
          <IoClose style={{ fontSize: "1.2rem", color: "white" }} />
        </div>
        <h2 className="hidden md:flex font-bold text-base text-white">
          {t.CategoryOfGoods}
        </h2>
        <div className="pr-4 hidden md:flex " onClick={onClose}>
          <GoLinkExternal style={{ fontSize: "1.2rem", color: "white" }} />
        </div>
      </div>
      <hr />
      <SideNavContent />
    </div>
  );
});

SideNav.displayName = "SideNav";

export default SideNav;
