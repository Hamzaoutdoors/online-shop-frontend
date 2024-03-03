import React from "react";
import Link from "next/link";
import { useLanguage } from "../../hooks/useLanguage";
import { Slider } from "@/lib/types/sliders/sliders";

const Slide: React.FC<Slider> = ({ name, description, imageUrl }) => {
  const { t } = useLanguage();

  return (
    <>
      <div
        className={`flex items-center justify-center relative w-[100%] h-[30vh] md:h-[50vh] bg-cover rounded-xl border-2 bg-center bg-no-repeat md:mt-4`}
        style={{
          backgroundImage: imageUrl, // change it to `url(${imageUrl})`
        }}
      >
        {/* <Link href={url}> */}
        <div className="flex items-center justify-center w-[65%] lg:w-[50%]">
          <div
            className={`backdrop-filter backdrop-blur-[8px] bg-palette-card/40 p-3 md:p-8 lg:p-10 shadow-lg md:overflow-hidden text-left rounded-md md:mt-auto`}
          >
            <h3 className="text-sm md:text-2xl lg:text-3xl font-medium text-black">
              {name}
            </h3>
            <p className="text-[0.5rem] md:text-lg mt-2 md:mt-4 lg:mt-8 text-black">
              {description}
            </p>
          </div>
        </div>
      </div>
      {/*         </Link>
       */}{" "}
    </>
  );
};

export default Slide;
