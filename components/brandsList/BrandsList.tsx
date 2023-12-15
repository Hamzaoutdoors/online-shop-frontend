import React from "react";
import Link from "next/link";
import SectionTitle from "../UI/SectionTitle";
import { brandContent } from "@/mock/brand";
import BrandLgBox from "./BrandLgBox";
import { HiChevronRight } from "react-icons/hi";

const BrandsList = () => {
  const ArrowDirection = HiChevronRight;
  return (
    <div className="flex self-center flex-col my-4 md:my-8">
      <SectionTitle title={"ourBrands"} />
      <div className="flex flex-wrap items-center justify-center md:justify-start">
        {brandContent.slice(0, 15).map(({ name, imgSrc }) => {
          return <BrandLgBox key={name} imageSrc={imgSrc} brandName={name} />;
        })}
        <Link
          href="/"
          className="flex items-center justify-center shadow-md lg:shadow-md bg-white h-[10rem] w-[10rem] m-1"
        >
          <span className="mr-2">+ {brandContent.length - 14} brands</span>
          <ArrowDirection style={{ fontSize: "0.75rem", color: "inherit" }} />
        </Link>
      </div>
    </div>
  );
};

export default BrandsList;
