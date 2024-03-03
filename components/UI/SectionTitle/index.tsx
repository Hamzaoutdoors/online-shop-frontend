import React from "react";
import { useLanguage } from "../../../hooks/useLanguage";
import { HiChevronRight } from "react-icons/hi";

interface Props {
  title: string;
  arrow: boolean;
}
const SectionTitle: React.FC<Props> = ({ title, arrow }) => {
  const { t } = useLanguage();
  const ArrowDirection = HiChevronRight;

  return (
    <div className="flex flex-row items-center text-black">
      <h2 className="my-4 md:my-8 lg:mt-10 text-3xl font-light text-start md:mx-4 hover:text-palette-primary">
        {t[`${title}`]}
      </h2>
      {arrow && (
        <ArrowDirection style={{ fontSize: "1.5rem", color: "inherit" }} />
      )}
    </div>
  );
};

export default SectionTitle;
