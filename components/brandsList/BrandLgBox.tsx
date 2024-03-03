import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

interface Props {
  brandName: string;
  imageSrc: string;
  loading: boolean;
}
const BrandLgBox: React.FC<Props> = ({ brandName, imageSrc, loading }) => {
  return (
    <div className="flex items-center justify-center shadow-md bg-white h-[10rem] w-[10rem] m-0.5">
      {loading ? (
        <div className="animate-pulse w-20 h-20 bg-gray-300 rounded-lg"></div>
      ) : (
        <Image
          src={imageSrc}
          width={200}
          height={200}
          alt={brandName}
          className="object-cover hover:scale-90 transition-transform duration-300 ease-in-out !py-2 dark:invert"
        />
      )}
    </div>
  );
};

export default BrandLgBox;
