import { sideNavBarActions } from "@/store/sideNavBar-slice";
import React from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";

interface VerticalBarProps {
  text: string;
  onClick?: () => void;
}

const VerticalBar: React.FC<VerticalBarProps> = ({ text, onClick }) => {
  const dispatch = useDispatch();

  const onCloseHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(sideNavBarActions.closeNavbar());
  };

  return (
    <div
      className="max-w-[50px] w-[10%] h-screen fixed top-0 shadow-md z-[1000] origin-left overflow-y-auto left-0 translate-x-[100%] animate-sidenavLTREntering bg-palette-tertiary cursor-pointer"
      onClick={onClick}
    >
      <div
        className="top-0 absolute left-1/2 transform -translate-x-1/2 cursor-pointer border rounded-full border-white p-1 z-[1020] mt-2"
        onClick={onCloseHandler}
      >
        <IoClose style={{ fontSize: "1.2rem", color: "white" }} />
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <span className="transform rotate-[270deg] text-white">{text}</span>
      </div>
    </div>
  );
};

export default VerticalBar;
