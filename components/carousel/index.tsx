import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";
import { sliderContent } from "../../mock/slider";
import { NextArrow, PrevArrow } from "./Arrows";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Placeholder from "../UI/Placeholder";

const Carousel = () => {
  const settings = {
    useTransform: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    cssEase: "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
    nextArrow: <NextArrow to="next" />,
    prevArrow: <PrevArrow to="prev" />,
    appendDots: (dots: string) => (
      <div className="bg-transparent !pb-[40px]">
        <ul> {dots} </ul>
      </div>
    ),
  };

  // const { sliders, loading } = useSelector((state: RootState) => state.sliders);

  return (
    <div className="relative mt-5">
      <Slider {...settings}>
        {sliderContent.map((slideContent) => {
          return <Slide key={slideContent.id} {...slideContent} />;
        })}
      </Slider>
      <>
        <div className="absolute top-1/2 right-4 md:right-3 lg:right-8 shadow-lg rounded-full bg-palette-card/80 p-1 drop-shadow-lg text-[0.8rem] md:text-[1.8rem]">
          <HiOutlineChevronRight />
        </div>
        <div className="absolute top-1/2 left-4  md:left-3 lg:left-8 shadow-lg rounded-full bg-palette-card/80 p-1 drop-shadow-lg text-[0.8rem] md:text-[1.8rem]">
          <HiOutlineChevronLeft />
        </div>
      </>
    </div>

    /* <>
      {!loading && sliders.length ? (
        <div className="relative mt-5">
          <Slider {...settings}>
            {sliderContent.map((slideContent) => {
              return <Slide key={slideContent.id} {...slideContent} />;
            })}
          </Slider>
          <>
            <div className="absolute top-1/2 right-4 md:right-3 lg:right-8 shadow-lg rounded-full bg-palette-card/80 p-1 drop-shadow-lg text-[0.8rem] md:text-[1.8rem]">
              <HiOutlineChevronRight />
            </div>
            <div className="absolute top-1/2 left-4  md:left-3 lg:left-8 shadow-lg rounded-full bg-palette-card/80 p-1 drop-shadow-lg text-[0.8rem] md:text-[1.8rem]">
              <HiOutlineChevronLeft />
            </div>
          </>
        </div>
      ) : (
        <div className="relative mt-5">
          <Placeholder width={"w-[100%]"} height={"h-[35vh]"} />
        </div>
      )}
    </> */
  );
};

export default Carousel;
