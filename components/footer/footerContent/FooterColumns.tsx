import Link from "next/link";
import React from "react";
import { footerContent } from "../../../mock/footer";
import { useLanguage } from "../../../hooks/useLanguage";

const FooterColumns = () => {
  const { t } = useLanguage();
  return (
    <div className="flex justify-between flex-wrap flex-grow min-width-[800px] text-white">
      {footerContent.map((item) => {
        return (
          <div className="mt-6 md:mt-0 text-white" key={item.title}>
            <h2 className="text-md border-l-4 border-palette-primary px-2">
              {t[item.title]}
            </h2>
            <div className="flex flex-col mt-2">
              {item.subtitles.map((subItem) => {
                return (
                  <Link href={subItem.href} key={subItem.text}>
                    <span className="text-sm text-cyan-50 px-4 py-2 hover:text-palette-primary">
                      {t[subItem.text]}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FooterColumns;
