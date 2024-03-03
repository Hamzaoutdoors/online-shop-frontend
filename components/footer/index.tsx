import React from "react";
import { useLanguage } from "../../hooks/useLanguage";
import FooterColumns from "./footerContent/FooterColumns";
import SocialPart from "./footerContent/SocialPart";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Footer = () => {
  const { t, locale } = useLanguage();

  return (
    <footer className="mt-12 bg-palette-footerBgColor text-white px-4">
      <div className="border-t-[1px] border-slate-500/30">
        <div className="flex flex-wrap py-4 md:py-8 md:px-4 w-full xl:max-w-[2100px] mx-auto">
          <FooterColumns />
          <SocialPart />
        </div>
      </div>
      <div className="w-full h-[1px] bg-gradient-to-r from-blue-600 to-rose-600"></div>
      <div className="border-slate-500/30 text-center text-xs md:text-sm py-4">
        <div>
          {t.copyRight}
          <BsFillSuitHeartFill
            style={{
              color: "#ffffff",
              margin: "0 0.3rem 0 0.3rem",
              fontSize: "1rem",
              display: "inline",
            }}
          />
          by H&M
        </div>
      </div>
    </footer>
  );
};

export default Footer;
