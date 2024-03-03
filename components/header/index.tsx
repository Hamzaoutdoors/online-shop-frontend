import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Menu from "./menu";
import Logo from "./Logo";
import Settings from "./Settings";
import SearchBar from "./SearchBar";
import CartIcon from "../cart/CartIcon";
import Language from "./language/Language";

const UserBox = dynamic(() => import("./user"), {
  ssr: false,
});

const Header = () => {
  return (
    <header className="md:fixed left-0 right-0 top-0 md:bg-palette-fill shadow-sm pt-4 z-[1000]">
      <div className="flex flex-col">
        <div className="flex items-center justify-between md:order-2 md:my-4 md:p-2 relative md:bg-palette-tertiary">
          <Menu />
          <div className="md:hidden">
            <Logo />
          </div>
          <Settings /> {/* 👈settings: md:hidden */}
          <div className="hidden md:flex md:items-center md:justify-between">
            {/* <Language />*/}
            {/* 👈change language we will work on it in V2 */}
            {/* <Theme /> */} {/* 👈change Theme we will work on it in V2 */}
          </div>
        </div>
        <hr className="md:hidden" />
        <div className="mb-2 mt-4 md:mt-0 flex items-center justify-between md:order-1 md:px-4">
          <div className="hidden md:block m-5 md:mr-10">
            <Logo />
          </div>
          <div className="flex-grow">
            <SearchBar />
          </div>
          <div className="ml-2 mr-2 sm:ml-4 flex items-center justify-between ">
            <UserBox />
            <CartIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
