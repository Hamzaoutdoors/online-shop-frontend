import React from "react";
import Image from "next/image";

interface Props {
  brandName: string;
  imageSrc: string;
  loading?: boolean;
}
const BrandBox: React.FC<Props> = ({ brandName, imageSrc, loading }) => {
  return (
    <div className="relative flex items-center p-2 shadow-md lg:shadow-xl">
      {" "}
      {/* Adjust width and height as needed */}
      <Image
        src={imageSrc}
        alt={brandName}
        layout="responsive"
        width={300}
        height={175}
        objectFit="cover" // Ensures the image covers the area defined by the parent div
      />
      <div className="absolute dark:inset-0 dark:bg-slate-800/40"></div>
    </div>
  );
};

export default BrandBox;
